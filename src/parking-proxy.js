import http from 'node:http';

const ERP_COOKIE = 'erp_parking_access';
const HOP_BY_HOP_HEADERS = new Set([
  'connection', 'keep-alive', 'proxy-authenticate', 'proxy-authorization',
  'te', 'trailer', 'transfer-encoding', 'upgrade'
]);

function cookieValue(header, name) {
  for (const part of (header || '').split(';')) {
    const separator = part.indexOf('=');
    if (separator < 0 || part.slice(0, separator).trim() !== name) continue;
    try {
      return decodeURIComponent(part.slice(separator + 1).trim());
    } catch {
      return '';
    }
  }
  return '';
}

function withoutErpCookie(header) {
  const cookies = (header || '').split(';').map((part) => part.trim()).filter((part) => {
    return part && part.slice(0, part.indexOf('=')).trim() !== ERP_COOKIE;
  });
  return cookies.join('; ');
}

function authenticatedUser(app, cookieHeader) {
  const token = cookieValue(cookieHeader, ERP_COOKIE);
  if (!token) return null;
  try {
    return app.jwt.verify(token);
  } catch {
    return null;
  }
}

function accessStatus(app, cookieHeader, requiresWrite = false) {
  const user = authenticatedUser(app, cookieHeader);
  if (!user) return 401;
  if (!user.permissions?.includes('vehicles:read') ||
      (requiresWrite && !user.permissions.includes('vehicles:write'))) return 403;
  return 0;
}

function requiresVehicleWrite(request) {
  if (['GET', 'HEAD', 'OPTIONS'].includes(request.method)) return false;
  const path = new URL(request.raw.url, 'http://erp.local').pathname.slice('/parking'.length);
  return !['/api/login', '/api/logout', '/api/client-errors'].includes(path);
}

function proxyHeaders(incoming, host, protocol, websocket = false) {
  const headers = { ...incoming };
  for (const name of HOP_BY_HOP_HEADERS) {
    if (!websocket || !['connection', 'upgrade'].includes(name)) delete headers[name];
  }
  delete headers.authorization;
  delete headers['content-length'];
  const cookies = withoutErpCookie(headers.cookie);
  if (cookies) headers.cookie = cookies;
  else delete headers.cookie;
  headers.host = host;
  headers['x-forwarded-proto'] = protocol;
  return headers;
}

function scopeParkingSessionCookie(headers) {
  const cookies = headers['set-cookie'];
  if (!cookies) return;
  headers['set-cookie'] = (Array.isArray(cookies) ? cookies : [cookies]).map((cookie) => {
    if (!cookie.startsWith('rentalcar_session=')) return cookie;
    if (/;\s*path=/i.test(cookie)) return cookie.replace(/;\s*path=[^;]*/i, '; Path=/parking/');
    return `${cookie}; Path=/parking/`;
  });
}

export function registerParkingProxy(app, backendUrl) {
  const target = new URL(backendUrl);
  const options = {
    hostname: target.hostname,
    port: target.port || 80
  };

  app.get('/parking', async (request, reply) => {
    const status = accessStatus(app, request.headers.cookie);
    if (status) {
      return reply.code(status).send({ error: status === 401 ? 'unauthorized' : 'forbidden' });
    }
    return reply.redirect(308, '/parking/');
  });

  app.route({
    method: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
    url: '/parking/*',
    handler(request, reply) {
      const status = accessStatus(app, request.headers.cookie, requiresVehicleWrite(request));
      if (status) {
        return reply.code(status).send({ error: status === 401 ? 'unauthorized' : 'forbidden' });
      }
      const url = new URL(request.raw.url, 'http://erp.local');
      const path = `${url.pathname.slice('/parking'.length) || '/'}${url.search}`;
      const body = request.body === undefined ? null : Buffer.from(JSON.stringify(request.body));
      const headers = proxyHeaders(request.headers, request.headers.host, request.protocol);
      if (body) headers['content-length'] = String(body.length);
      const outgoing = http.request({
        ...options,
        method: request.method,
        path,
        headers
      }, (upstream) => {
        scopeParkingSessionCookie(upstream.headers);
        reply.raw.writeHead(upstream.statusCode, upstream.statusMessage, upstream.headers);
        upstream.pipe(reply.raw);
      });
      outgoing.on('error', () => {
        if (reply.raw.headersSent) return reply.raw.destroy();
        reply.raw.writeHead(502, { 'content-type': 'application/json; charset=utf-8' });
        reply.raw.end(JSON.stringify({ error: 'parking_unavailable' }));
      });
      if (body) outgoing.end(body);
      else outgoing.end();
      reply.hijack();
    }
  });

  app.server.on('upgrade', (request, socket, head) => {
    let url;
    try {
      url = new URL(request.url, 'http://erp.local');
    } catch {
      return;
    }
    if (url.pathname !== '/parking/ws') return;
    const status = accessStatus(app, request.headers.cookie);
    if (status) {
      socket.write(`HTTP/1.1 ${status} ${status === 401 ? 'Unauthorized' : 'Forbidden'}\r\nConnection: close\r\n\r\n`);
      socket.destroy();
      return;
    }
    const outgoing = http.request({
      ...options,
      method: 'GET',
      path: `/ws${url.search}`,
      headers: proxyHeaders(request.headers, request.headers.host, request.headers['x-forwarded-proto'] || 'http', true)
    });
    outgoing.on('upgrade', (response, upstreamSocket, upstreamHead) => {
      socket.write(`HTTP/1.1 ${response.statusCode} ${response.statusMessage}\r\n`);
      for (let index = 0; index < response.rawHeaders.length; index += 2) {
        socket.write(`${response.rawHeaders[index]}: ${response.rawHeaders[index + 1]}\r\n`);
      }
      socket.write('\r\n');
      if (head.length) upstreamSocket.write(head);
      if (upstreamHead.length) socket.write(upstreamHead);
      socket.pipe(upstreamSocket);
      upstreamSocket.pipe(socket);
      socket.on('error', () => upstreamSocket.destroy());
      upstreamSocket.on('error', () => socket.destroy());
    });
    outgoing.on('response', (response) => {
      socket.write(`HTTP/1.1 ${response.statusCode} ${response.statusMessage}\r\nConnection: close\r\n\r\n`);
      response.resume();
      socket.destroy();
    });
    outgoing.on('error', () => {
      socket.write('HTTP/1.1 502 Bad Gateway\r\nConnection: close\r\n\r\n');
      socket.destroy();
    });
    outgoing.end();
  });
}
