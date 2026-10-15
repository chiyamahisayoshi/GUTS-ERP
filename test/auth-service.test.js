import test from 'node:test';
import assert from 'node:assert/strict';
import bcrypt from 'bcryptjs';
import { createAuthService } from '../src/services/auth-service.js';

test('login rejects a bad password and increments failed-login count', async () => {
  const passwordHash = await bcrypt.hash('correct horse battery staple', 4);
  let failures = 0;
  const auth = createAuthService({
    accounts: {
      findByUsername: async () => ({
        id: '12',
        site_id: '2',
        username: 'staff',
        display_name: 'Staff',
        password_hash: passwordHash,
        status: 'active',
        site_code: 'TOKYO',
        site_type: 'direct',
        site_status: 'active',
        site_name: 'Tokyo'
      }),
      recordFailedLogin: async () => { failures += 1; },
      clearFailedLogins: async () => {},
      listPermissions: async () => []
    },
    jwt: { sign: () => 'signed-token' },
    config: { jwt: { issuer: 'erp', audience: 'guts-parking', expiresIn: 3600 } }
  });

  assert.equal(await auth.login('staff', 'wrong password'), null);
  assert.equal(failures, 1);
});

test('successful login issues a scoped token and returns stable account metadata', async () => {
  const passwordHash = await bcrypt.hash('correct horse battery staple', 4);
  let claims;
  const auth = createAuthService({
    accounts: {
      findByUsername: async () => ({
        id: '12',
        site_id: '2',
        username: 'staff',
        display_name: 'Staff',
        password_hash: passwordHash,
        status: 'active',
        site_code: 'TOKYO',
        site_type: 'direct',
        site_status: 'active',
        site_name: 'Tokyo'
      }),
      recordFailedLogin: async () => assert.fail('must not count a failure'),
      clearFailedLogins: async () => {},
      listPermissions: async () => ['vehicles:read']
    },
    jwt: {
      sign: (payload, options) => {
        claims = { payload, options };
        return 'signed-token';
      }
    },
    config: { jwt: { issuer: 'erp', audience: 'guts-parking', expiresIn: 3600 } }
  });

  const result = await auth.login('staff', 'correct horse battery staple');
  assert.equal(result.accessToken, 'signed-token');
  assert.equal(result.tokenType, 'Bearer');
  assert.equal(result.account.id, '12');
  assert.equal(result.account.site.type, 'direct');
  assert.deepEqual(claims.payload.permissions, ['vehicles:read']);
  assert.equal(claims.options.audience, 'guts-parking');
});

test('login for an unknown account still performs a password hash comparison', async () => {
  const auth = createAuthService({
    accounts: {
      findByUsername: async () => null,
      recordFailedLogin: async () => assert.fail('no account to update'),
      clearFailedLogins: async () => assert.fail('no account to update'),
      listPermissions: async () => assert.fail('no account to inspect')
    },
    jwt: { sign: () => assert.fail('must not issue a token') },
    config: { jwt: { issuer: 'erp', audience: 'guts-parking', expiresIn: 3600 } }
  });
  assert.equal(await auth.login('missing-user', 'some password'), null);
});
