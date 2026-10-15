import { createHash, randomUUID } from 'node:crypto';

const GUID = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
const SOCKET_PATH = '/api/v1/parking/ws';

function encodeFrame(opcode, value = Buffer.alloc(0)) {
  const payload = Buffer.isBuffer(value) ? value : Buffer.from(value);
  const header = payload.length < 126
    ? Buffer.from([0x80 | opcode, payload.length])
    : payload.length <= 0xffff
      ? Buffer.from([0x80 | opcode, 126, payload.length >> 8, payload.length & 0xff])
      : Buffer.from([0x80 | opcode, 127, 0, 0, 0, 0,
        (payload.length >>> 24) & 0xff, (payload.length >>> 16) & 0xff,
        (payload.length >>> 8) & 0xff, payload.length & 0xff]);
  return Buffer.concat([header, payload]);
}

function reject(socket, status) {
  const text = status === 401 ? 'Unauthorized' : status === 403 ? 'Forbidden' : 'Bad Request';
  socket.end(`HTTP/1.1 ${status} ${text}\r\nConnection: close\r\n\r\n`);
}

export function createParkingRealtime(app, publicBaseUrl) {
  const tickets = new Set();
  const clients = new Map();

  function issue(siteId, accountId) {
    const nonce = randomUUID();
    tickets.add(nonce);
    const timer = setTimeout(() => tickets.delete(nonce), 60_000);
    timer.unref?.();
    return app.jwt.sign({
      sub: accountId,
      siteId: String(siteId),
      purpose: 'parking-ws',
      permissions: ['parking:read'],
      nonce
    }, { expiresIn: 60 });
  }

  function consume(ticket) {
    const user = app.jwt.verify(ticket);
    if (user.purpose !== 'parking-ws' || !user.siteId ||
        !user.permissions?.includes('parking:read') || !tickets.has(user.nonce)) return null;
    tickets.delete(user.nonce);
    return user;
  }

  function publish(siteId) {
    const peers = clients.get(String(siteId));
    if (!peers) return;
    const message = encodeFrame(0x1, JSON.stringify({ type: 'parking:updated' }));
    for (const socket of peers) {
      if (!socket.destroyed && !socket.write(message)) {
        socket.pause();
        socket.once('drain', () => socket.resume());
      }
    }
  }

  app.server.on('upgrade', (request, socket, head) => {
    let url;
    try {
      url = new URL(request.url, publicBaseUrl);
    } catch {
      return reject(socket, 400);
    }
    if (url.pathname !== SOCKET_PATH) return;
    const key = request.headers['sec-websocket-key'];
    if (request.method !== 'GET' || request.headers.upgrade?.toLowerCase() !== 'websocket' ||
        request.headers['sec-websocket-version'] !== '13' || typeof key !== 'string' ||
        Buffer.from(key, 'base64').length !== 16) return reject(socket, 400);
    try {
      if (new URL(request.headers.origin).origin !== new URL(publicBaseUrl).origin) {
        return reject(socket, 403);
      }
    } catch {
      return reject(socket, 403);
    }

    let user;
    try {
      user = consume(url.searchParams.get('ticket'));
    } catch {
      return reject(socket, 401);
    }
    if (!user) return reject(socket, 403);

    const accept = createHash('sha1').update(`${key}${GUID}`).digest('base64');
    socket.write([
      'HTTP/1.1 101 Switching Protocols',
      'Upgrade: websocket',
      'Connection: Upgrade',
      `Sec-WebSocket-Accept: ${accept}`,
      '\r\n'
    ].join('\r\n'));
    const siteId = String(user.siteId);
    const peers = clients.get(siteId) || new Set();
    peers.add(socket);
    clients.set(siteId, peers);
    const pingTimer = setInterval(() => {
      if (!socket.destroyed) socket.write(encodeFrame(0x9));
    }, 30_000);
    pingTimer.unref?.();
    socket.on('close', () => {
      clearInterval(pingTimer);
      peers.delete(socket);
      if (!peers.size) clients.delete(siteId);
    });
    socket.on('error', () => {
      clearInterval(pingTimer);
      peers.delete(socket);
      if (!peers.size) clients.delete(siteId);
    });
    let pending = Buffer.alloc(0);
    socket.on('data', (chunk) => {
      pending = Buffer.concat([pending, chunk]);
      while (pending.length >= 2) {
        const lengthFlag = pending[1] & 0x7f;
        const offset = lengthFlag === 126 ? 4 : lengthFlag === 127 ? 10 : 2;
        if (pending.length < offset) return;
        const length = lengthFlag < 126 ? lengthFlag
          : lengthFlag === 126 ? pending.readUInt16BE(2) : Number(pending.readBigUInt64BE(2));
        if (!Number.isSafeInteger(length) || length > 1_048_576 || !(pending[1] & 0x80)) {
          return socket.destroy();
        }
        const maskOffset = offset;
        const frameLength = offset + ((pending[1] & 0x80) ? 4 : 0) + length;
        if (pending.length < frameLength) return;
        const opcode = pending[0] & 0x0f;
        const mask = pending[1] & 0x80 ? pending.subarray(maskOffset, maskOffset + 4) : null;
        const payloadOffset = mask ? maskOffset + 4 : maskOffset;
        const payload = Buffer.from(pending.subarray(payloadOffset, frameLength));
        if (mask) for (let i = 0; i < payload.length; i += 1) payload[i] ^= mask[i % 4];
        pending = pending.subarray(frameLength);
        if (opcode === 0x8) return socket.end(encodeFrame(0x8, payload));
        if (opcode === 0x9) socket.write(encodeFrame(0xA, payload));
      }
    });
    if (head.length) socket.unshift(head);
  });

  return { issue, publish };
}
