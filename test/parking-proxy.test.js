import test from 'node:test';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import http from 'node:http';
import { buildApp } from '../src/server.js';

const jwtConfig = {
  secret: 'test-secret-with-at-least-thirty-two-bytes-long',
  issuer: 'guts-erp-test',
  audience: 'guts-parking-test'
};

test('parking proxy protects HTTP and forwards only the parking session cookie', async (t) => {
  let observed;
  const upstream = http.createServer((request, response) => {
    observed = { url: request.url, host: request.headers.host, cookie: request.headers.cookie };
    response.writeHead(200, {
      'content-type': 'text/html',
      'set-cookie': 'rentalcar_session=s%3Aboard-session; Path=/; HttpOnly; SameSite=Strict; Secure'
    });
    response.end('<html>parking board</html>');
  });
  await new Promise((resolve) => upstream.listen(0, '127.0.0.1', resolve));
  const upstreamPort = upstream.address().port;
  const app = await buildApp({
    logger: false,
    pool: { execute: async () => { throw new Error('unexpected database access'); }, end: async () => {} },
    config: {
      host: '127.0.0.1',
      port: 3000,
      database: {},
      parking: { backendUrl: `http://127.0.0.1:${upstreamPort}` },
      jwt: jwtConfig
    }
  });
  await app.listen({ host: '127.0.0.1', port: 0 });
  t.after(async () => {
    await app.close();
    await new Promise((resolve) => upstream.close(resolve));
  });
  const port = app.server.address().port;
  const token = app.jwt.sign({
    sub: '14',
    permissions: ['vehicles:read']
  }, { issuer: jwtConfig.issuer, audience: jwtConfig.audience, expiresIn: 300 });
  const get = (path = '/parking/', headers = {}) => new Promise((resolve, reject) => {
    http.get({
      hostname: '127.0.0.1', port, path, headers
    }, (response) => {
      let body = '';
      response.setEncoding('utf8');
      response.on('data', (chunk) => { body += chunk; });
      response.on('end', () => resolve({
        status: response.statusCode,
        body,
        setCookie: response.headers['set-cookie']
      }));
    }).on('error', reject);
  });
  const post = (path, headers = {}) => new Promise((resolve, reject) => {
    const request = http.request({
      hostname: '127.0.0.1', port, path, method: 'POST',
      headers: { 'content-type': 'application/json', ...headers }
    }, (response) => {
      response.resume();
      response.on('end', () => resolve(response.statusCode));
    });
    request.on('error', reject);
    request.end('{}');
  });

  assert.equal((await get('/parking/')).status, 401);
  const forbiddenToken = app.jwt.sign({
    sub: '15',
    permissions: ['vehicles:write']
  }, { issuer: jwtConfig.issuer, audience: jwtConfig.audience, expiresIn: 300 });
  assert.equal((await get('/parking/', { cookie: `erp_parking_access=${forbiddenToken}` })).status, 403);

  const response = await get('/parking/', {
    cookie: `erp_parking_access=${token}; rentalcar_session=s%3Aboard-session`,
    'x-forwarded-proto': 'https'
  });
  assert.equal(response.status, 200);
  assert.match(response.body, /parking board/);
  assert.match(response.setCookie[0], /Path=\/parking\//);
  assert.match(response.setCookie[0], /HttpOnly; SameSite=Strict; Secure/);
  assert.deepEqual(observed, {
    url: '/',
    host: `127.0.0.1:${port}`,
    cookie: 'rentalcar_session=s%3Aboard-session'
  });
  await get('/parking/static/app.js', {
    cookie: `erp_parking_access=${token}; rentalcar_session=s%3Aboard-session`
  });
  assert.equal(observed.url, '/static/app.js');
  assert.equal(await post('/parking/api/vehicles', {
    cookie: `erp_parking_access=${token}; rentalcar_session=s%3Aboard-session`
  }), 403);
  const writerToken = app.jwt.sign({
    sub: '16',
    permissions: ['vehicles:read', 'vehicles:write']
  }, { issuer: jwtConfig.issuer, audience: jwtConfig.audience, expiresIn: 300 });
  assert.equal(await post('/parking/api/vehicles', {
    cookie: `erp_parking_access=${writerToken}; rentalcar_session=s%3Aboard-session`
  }), 200);
  assert.equal(observed.url, '/api/vehicles');
});

test('parking WebSocket proxy retains Host and HTTPS scheme and strips ERP cookie', async (t) => {
  let observed;
  const upstream = http.createServer();
  upstream.on('upgrade', (request, socket) => {
    observed = {
      url: request.url,
      host: request.headers.host,
      proto: request.headers['x-forwarded-proto'],
      origin: request.headers.origin,
      cookie: request.headers.cookie
    };
    const key = request.headers['sec-websocket-key'];
    const accept = crypto.createHash('sha1')
      .update(`${key}258EAFA5-E914-47DA-95CA-C5AB0DC85B11`)
      .digest('base64');
    socket.write([
      'HTTP/1.1 101 Switching Protocols',
      'Upgrade: websocket',
      'Connection: Upgrade',
      `Sec-WebSocket-Accept: ${accept}`,
      '',
      ''
    ].join('\r\n'));
    setTimeout(() => socket.destroy(), 20);
  });
  await new Promise((resolve) => upstream.listen(0, '127.0.0.1', resolve));
  const app = await buildApp({
    logger: false,
    pool: { execute: async () => { throw new Error('unexpected database access'); }, end: async () => {} },
    config: {
      host: '127.0.0.1',
      port: 3000,
      database: {},
      parking: { backendUrl: `http://127.0.0.1:${upstream.address().port}` },
      jwt: jwtConfig
    }
  });
  await app.listen({ host: '127.0.0.1', port: 0 });
  t.after(async () => {
    await app.close();
    await new Promise((resolve) => upstream.close(resolve));
  });
  const token = app.jwt.sign({
    sub: '14',
    permissions: ['vehicles:read']
  }, { issuer: jwtConfig.issuer, audience: jwtConfig.audience, expiresIn: 300 });

  await new Promise((resolve, reject) => {
    const request = http.request({
      hostname: '127.0.0.1',
      port: app.server.address().port,
      path: '/parking/ws',
      headers: {
        Host: 'erp.example.jp',
        Origin: 'https://erp.example.jp',
        Upgrade: 'websocket',
        Connection: 'Upgrade',
        'Sec-WebSocket-Key': crypto.randomBytes(16).toString('base64'),
        'Sec-WebSocket-Version': '13',
        'X-Forwarded-Proto': 'https',
        Cookie: `erp_parking_access=${token}; rentalcar_session=s%3Aboard-session`
      }
    });
    request.on('upgrade', (response, socket) => {
      assert.equal(response.statusCode, 101);
      socket.destroy();
      resolve();
    });
    request.on('response', (response) => reject(new Error(`Unexpected HTTP response ${response.statusCode}`)));
    request.on('error', reject);
    request.end();
  });
  assert.deepEqual(observed, {
    url: '/ws',
    host: 'erp.example.jp',
    proto: 'https',
    origin: 'https://erp.example.jp',
    cookie: 'rentalcar_session=s%3Aboard-session'
  });
});
