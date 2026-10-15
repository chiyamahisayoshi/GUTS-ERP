import test from 'node:test';
import assert from 'node:assert/strict';
import { getConfig } from '../src/config.js';

test('config rejects weak JWT secrets', () => {
  const previous = { ...process.env };
  process.env.JWT_SECRET = 'too-short';
  process.env.PUBLIC_BASE_URL = 'https://erp.example.jp';
  process.env.DB_USER = 'erp';
  process.env.DB_PASSWORD = 'password';
  try {
    assert.throws(() => getConfig(), /at least 32 bytes/);
  } finally {
    for (const key of ['JWT_SECRET', 'PUBLIC_BASE_URL', 'DB_USER', 'DB_PASSWORD']) {
      if (previous[key] === undefined) delete process.env[key];
      else process.env[key] = previous[key];
    }
  }
});
