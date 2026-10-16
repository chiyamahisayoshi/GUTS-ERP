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

test('config rejects an empty ERP error log path', () => {
  const previous = process.env.ERP_ERROR_LOG_PATH;
  process.env.ERP_ERROR_LOG_PATH = ' ';
  try {
    assert.throws(() => getConfig(), /ERP_ERROR_LOG_PATH must be a non-empty path/);
  } finally {
    if (previous === undefined) delete process.env.ERP_ERROR_LOG_PATH;
    else process.env.ERP_ERROR_LOG_PATH = previous;
  }
});

test('legacy Parking network settings are not part of ERP runtime configuration', () => {
  const keys = [
    'JWT_SECRET', 'PUBLIC_BASE_URL', 'DB_USER', 'DB_PASSWORD',
    'PARKING_API_URL', 'PARKING_API_KEY', 'PARKING_BACKEND_URL'
  ];
  const previous = Object.fromEntries(keys.map((key) => [key, process.env[key]]));
  Object.assign(process.env, {
    JWT_SECRET: 'test-secret-with-at-least-thirty-two-bytes-long',
    PUBLIC_BASE_URL: 'https://erp.example.jp',
    DB_USER: 'erp',
    DB_PASSWORD: 'password',
    PARKING_API_URL: 'http://legacy-parking.invalid/api/v1',
    PARKING_API_KEY: 'obsolete',
    PARKING_BACKEND_URL: 'http://legacy-parking.invalid'
  });
  try {
    const config = getConfig();
    assert.equal(Object.hasOwn(config, 'parking'), false);
    assert.equal(config.jwt.refreshExpiresIn, 30 * 24 * 60 * 60);
  } finally {
    for (const key of keys) {
      if (previous[key] === undefined) delete process.env[key];
      else process.env[key] = previous[key];
    }
  }
});
