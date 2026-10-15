import test from 'node:test';
import assert from 'node:assert/strict';
import { buildApp } from '../src/server.js';

test('server exposes health and rejects invalid bearer tokens as unauthorized', async (t) => {
  const app = await buildApp({
    logger: false,
    pool: { execute: async () => { throw new Error('unexpected database access'); }, end: async () => {} },
    config: {
      host: '127.0.0.1',
      port: 3000,
      database: {},
      jwt: {
        secret: 'test-secret-with-at-least-thirty-two-bytes-long',
        issuer: 'guts-erp-test',
        audience: 'guts-parking-test',
        expiresIn: 300
      }
    }
  });
  t.after(() => app.close());

  const health = await app.inject({ method: 'GET', url: '/health' });
  assert.equal(health.statusCode, 200);
  assert.deepEqual(health.json(), { status: 'ok' });

  const page = await app.inject({ method: 'GET', url: '/' });
  assert.equal(page.statusCode, 200);
  assert.match(page.headers['content-type'], /text\/html/);
  assert.match(page.body, /GUTS ERP/);
  const bundle = await app.inject({ method: 'GET', url: '/assets/app.js' });
  assert.equal(bundle.statusCode, 200);
  assert.match(bundle.headers['content-type'], /javascript/);
  const styles = await app.inject({ method: 'GET', url: '/assets/styles.css' });
  assert.equal(styles.statusCode, 200);
  assert.match(styles.headers['content-type'], /text\/css/);

  const unauthorized = await app.inject({
    method: 'GET',
    url: '/api/v1/auth/me',
    headers: { authorization: 'Bearer not-a-jwt' }
  });
  assert.equal(unauthorized.statusCode, 401);
  assert.deepEqual(unauthorized.json(), { error: 'unauthorized' });
});
