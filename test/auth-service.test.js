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
        is_owner_admin: 0,
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
  assert.equal(result.account.isAdmin, false);
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

test('site switching issues only the active store account scope and permissions', async () => {
  let claims;
  const storeAccount = {
    id: '14', site_id: '2', username: 'tokyo', display_name: 'Tokyo',
    is_owner_admin: 0, status: 'active', site_code: 'TOKYO',
    site_type: 'direct', site_status: 'active', site_name: 'Tokyo'
  };
  const auth = createAuthService({
    accounts: {
      findActiveBySiteId: async (siteId) => siteId === '2' ? storeAccount : null,
      listPermissions: async (id) => id === '14' ? ['vehicles:read'] : []
    },
    jwt: {
      sign: (payload, options) => {
        claims = { payload, options };
        return 'store-token';
      }
    },
    config: { jwt: { issuer: 'erp', audience: 'guts-parking', expiresIn: 3600 } }
  });

  const session = await auth.switchToSite('2');
  assert.equal(session.accessToken, 'store-token');
  assert.equal(session.account.isAdmin, false);
  assert.equal(session.account.site.id, '2');
  assert.deepEqual(claims.payload, {
    sub: '14', username: 'tokyo', siteId: '2', siteCode: 'TOKYO',
    siteType: 'direct', permissions: ['vehicles:read']
  });
  assert.equal(claims.options.expiresIn, 3600);
});

test('site switching refuses disabled, headquarters, and owner-admin accounts', async () => {
  let account = {
    id: '14', site_id: '2', username: 'tokyo', display_name: 'Tokyo',
    is_owner_admin: 0, status: 'active', site_code: 'TOKYO',
    site_type: 'direct', site_status: 'active', site_name: 'Tokyo'
  };
  const auth = createAuthService({
    accounts: {
      findActiveBySiteId: async () => account,
      listPermissions: async () => []
    },
    jwt: { sign: () => assert.fail('must not issue a token') },
    config: { jwt: { issuer: 'erp', audience: 'guts-parking', expiresIn: 3600 } }
  });

  account = { ...account, status: 'disabled' };
  assert.equal(await auth.switchToSite('2'), null);
  account = { ...account, status: 'active', site_type: 'headquarters' };
  assert.equal(await auth.switchToSite('2'), null);
  account = { ...account, site_type: 'direct', is_owner_admin: 1 };
  assert.equal(await auth.switchToSite('2'), null);
});
