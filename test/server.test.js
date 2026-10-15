import test from 'node:test';
import assert from 'node:assert/strict';
import { buildApp } from '../src/server.js';

test('server exposes health and rejects invalid bearer tokens as unauthorized', async (t) => {
  const loggedErrors = [];
  const app = await buildApp({
    logger: false,
    errorLogger: { record: (entry) => loggedErrors.push(entry) },
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
  assert.match(page.body, /<html lang="ja">/);
  assert.match(page.body, /<meta name="app-version" content="\d+\.\d+\.\d+">/);
  const appAsset = page.body.match(/src="([^"]*\/assets\/app\.js\?v=[a-f0-9]{12})"/);
  const stylesAsset = page.body.match(/href="([^"]*\/assets\/styles\.css\?v=[a-f0-9]{12})"/);
  assert.ok(appAsset);
  assert.ok(stylesAsset);
  const bundle = await app.inject({ method: 'GET', url: appAsset[1] });
  assert.equal(bundle.statusCode, 200);
  assert.match(bundle.headers['content-type'], /javascript/);
  assert.ok(!/[一-龥]/.test(bundle.body));
  const styles = await app.inject({ method: 'GET', url: stylesAsset[1] });
  assert.equal(styles.statusCode, 200);
  assert.match(styles.headers['content-type'], /text\/css/);

  const manifest = await app.inject({ method: 'GET', url: '/manifest.webmanifest' });
  assert.equal(manifest.statusCode, 200);
  assert.equal(manifest.json().start_url, '/');
  assert.deepEqual(manifest.json().icons[0].src, '/icon.svg');
  const serviceWorker = await app.inject({ method: 'GET', url: '/sw.js' });
  assert.equal(serviceWorker.statusCode, 200);
  assert.match(serviceWorker.headers['service-worker-allowed'], /^\//);
  assert.match(serviceWorker.headers['cache-control'], /no-cache/);
  assert.match(serviceWorker.body, /SHELL_PATHS\.has\(url\.pathname\)/);
  assert.doesNotMatch(serviceWorker.body, /\/api\/v1/);
  const icon = await app.inject({ method: 'GET', url: '/icon.svg' });
  assert.equal(icon.statusCode, 200);
  assert.match(icon.headers['content-type'], /image\/svg\+xml/);

  const unauthorized = await app.inject({
    method: 'GET',
    url: '/api/v1/auth/me',
    headers: { authorization: 'Bearer not-a-jwt' }
  });
  assert.equal(unauthorized.statusCode, 401);
  assert.deepEqual(unauthorized.json(), { error: 'unauthorized' });
  assert.deepEqual(loggedErrors, []);
});

test('login failures stay quiet while unexpected server errors are recorded safely', async (t) => {
  const loggedErrors = [];
  const app = await buildApp({
    logger: false,
    errorLogger: { record: (entry) => loggedErrors.push(entry) },
    pool: {
      execute: async (sql) => {
        if (sql.includes('COUNT(*)')) throw new Error('password=database-secret Authorization: Bearer token-secret');
        return [[], []];
      },
      end: async () => {}
    },
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

  const loginFailure = await app.inject({
    method: 'POST',
    url: '/api/v1/auth/login?password=query-secret',
    payload: { username: 'missing', password: 'request-body-secret' }
  });
  assert.equal(loginFailure.statusCode, 401);
  assert.deepEqual(loggedErrors, []);

  const token = app.jwt.sign(
    { sub: '1', siteType: 'headquarters', siteId: '1', permissions: [] },
    { issuer: 'guts-erp-test', audience: 'guts-parking-test', expiresIn: 300 }
  );
  const failure = await app.inject({
    method: 'GET',
    url: '/api/v1/dashboard/stats?password=query-secret&api_key=query-key',
    headers: { authorization: `Bearer ${token}` }
  });
  assert.equal(failure.statusCode, 500);
  assert.deepEqual(loggedErrors, [{
    method: 'GET',
    path: '/api/v1/dashboard/stats',
    code: 'internal_error'
  }]);
  assert.ok(!JSON.stringify(loggedErrors).includes('secret'));
});
