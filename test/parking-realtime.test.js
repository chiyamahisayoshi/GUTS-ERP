import assert from 'node:assert/strict';
import { EventEmitter } from 'node:events';
import test from 'node:test';
import { createParkingRealtime } from '../src/parking-realtime.js';

class MockSocket extends EventEmitter {
  writes = [];
  destroyed = false;
  write(value) { this.writes.push(value); return true; }
  end(value) { if (value) this.writes.push(value); }
  destroy() { this.destroyed = true; this.emit('close'); }
  unshift() {}
}

test('parking websocket accepts one-time ERP tickets and publishes site-scoped updates', () => {
  const server = new EventEmitter();
  const issued = new Map();
  const app = {
    server,
    jwt: {
      sign(payload) {
        const token = `ticket-${payload.nonce}`;
        issued.set(token, payload);
        return token;
      },
      verify(token) {
        const payload = issued.get(token);
        if (!payload) throw new Error('invalid ticket');
        return payload;
      }
    }
  };
  const realtime = createParkingRealtime(app, 'https://erp.example.jp');
  const ticket = realtime.issue('7', '42');
  const request = {
    method: 'GET',
    url: `/api/v1/parking/ws?ticket=${encodeURIComponent(ticket)}`,
    headers: {
      host: 'erp.example.jp',
      origin: 'https://erp.example.jp',
      upgrade: 'websocket',
      'sec-websocket-version': '13',
      'sec-websocket-key': 'dGhlIHNhbXBsZSBub25jZQ=='
    }
  };
  const socket = new MockSocket();
  server.emit('upgrade', request, socket, Buffer.alloc(0));
  assert.match(socket.writes[0], /101 Switching Protocols/);

  realtime.publish('8');
  assert.equal(socket.writes.length, 1);
  realtime.publish('7');
  assert.equal(socket.writes.length, 2);
  assert.equal(socket.writes[1][0] & 0x0f, 1);
  const frame = socket.writes[1];
  const payload = JSON.parse(frame.subarray((frame[1] & 0x7f) < 126 ? 2 : 4).toString());
  assert.deepEqual(payload, { type: 'parking:updated' });

  const reusedTicketSocket = new MockSocket();
  server.emit('upgrade', request, reusedTicketSocket, Buffer.alloc(0));
  assert.match(reusedTicketSocket.writes[0], /403 Forbidden/);
  socket.destroy();
});

test('parking websocket rejects cross-origin upgrades', () => {
  const server = new EventEmitter();
  const app = {
    server,
    jwt: { sign: () => 'ticket', verify: () => ({}) }
  };
  createParkingRealtime(app, 'https://erp.example.jp');
  const socket = new MockSocket();
  server.emit('upgrade', {
    method: 'GET',
    url: '/api/v1/parking/ws?ticket=ticket',
    headers: {
      origin: 'https://attacker.example',
      upgrade: 'websocket',
      'sec-websocket-version': '13',
      'sec-websocket-key': 'dGhlIHNhbXBsZSBub25jZQ=='
    }
  }, socket, Buffer.alloc(0));
  assert.match(socket.writes[0], /403 Forbidden/);
});
