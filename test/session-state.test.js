import test from 'node:test';
import assert from 'node:assert/strict';
import {
  beginSiteSession, clearSession, isImpersonating, restoreAdminSession,
  SESSION_TOKEN_KEY, ORIGINAL_ADMIN_TOKEN_KEY, ORIGINAL_ADMIN_PAGE_KEY
} from '../src/ui/session-state.js';

function createSessionStorage(backing = new Map()) {
  return {
    backing,
    getItem(key) { return backing.get(key) ?? null; },
    setItem(key, value) { backing.set(key, String(value)); },
    removeItem(key) { backing.delete(key); }
  };
}

test('site session switching survives reload and restores the admin token and page', () => {
  const storage = createSessionStorage();
  beginSiteSession(storage, 'admin-token', 'sites', 'store-token');
  assert.equal(storage.getItem(SESSION_TOKEN_KEY), 'store-token');
  assert.equal(isImpersonating(storage), true);

  const reloadedStorage = createSessionStorage(storage.backing);
  assert.deepEqual(restoreAdminSession(reloadedStorage), {
    token: 'admin-token', page: 'sites'
  });
  assert.equal(reloadedStorage.getItem(SESSION_TOKEN_KEY), 'admin-token');
  assert.equal(isImpersonating(reloadedStorage), false);
  assert.equal(reloadedStorage.getItem(ORIGINAL_ADMIN_TOKEN_KEY), null);
  assert.equal(reloadedStorage.getItem(ORIGINAL_ADMIN_PAGE_KEY), null);
});

test('logout clears both impersonated and saved administrator sessions', () => {
  const storage = createSessionStorage();
  beginSiteSession(storage, 'admin-token', 'sites', 'store-token');
  clearSession(storage);
  assert.equal(storage.getItem(SESSION_TOKEN_KEY), null);
  assert.equal(storage.getItem(ORIGINAL_ADMIN_TOKEN_KEY), null);
  assert.equal(storage.getItem(ORIGINAL_ADMIN_PAGE_KEY), null);
  assert.equal(isImpersonating(storage), false);
  assert.equal(restoreAdminSession(storage), null);
});
