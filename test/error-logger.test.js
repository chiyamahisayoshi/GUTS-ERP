import test from 'node:test';
import assert from 'node:assert/strict';
import {
  existsSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createErrorLogger, MAX_ERROR_LOG_FILE_BYTES } from '../src/error-logger.js';

function makeTempDirectory(t) {
  const directory = mkdtempSync(join(tmpdir(), 'guts-erp-error-log-'));
  t.after(() => rmSync(directory, { recursive: true, force: true }));
  return directory;
}

test('error records contain only safe fields and omit query strings and arbitrary input', (t) => {
  const directory = makeTempDirectory(t);
  const filePath = join(directory, 'errors.jsonl');
  const logger = createErrorLogger({ filePath });

  logger.record({
    method: 'GET',
    path: '/api/v1/accounts?password=secret&token=jwt-secret',
    code: 'internal_error',
    error: new Error('Authorization: Bearer bearer-secret; password=password-secret'),
    headers: { cookie: 'session-secret', authorization: 'Bearer header-secret' },
    body: { password: 'body-secret', apiKey: 'api-key-secret' }
  });

  const line = readFileSync(filePath, 'utf8').trim();
  const record = JSON.parse(line);
  assert.deepEqual(Object.keys(record), ['timestamp', 'method', 'path', 'code', 'message']);
  assert.match(record.timestamp, /^\d{4}-\d\d-\d\dT/);
  assert.equal(record.method, 'GET');
  assert.equal(record.path, '/api/v1/accounts');
  assert.equal(record.code, 'internal_error');
  assert.equal(record.message, 'Unhandled server error');
  for (const secret of [
    'secret', 'jwt-secret', 'bearer-secret', 'password-secret',
    'session-secret', 'header-secret', 'body-secret', 'api-key-secret'
  ]) {
    assert.ok(!line.includes(secret));
  }
});

test('error records retain sanitized diagnostics for root-cause analysis', (t) => {
  const directory = makeTempDirectory(t);
  const filePath = join(directory, 'errors.jsonl');
  const logger = createErrorLogger({ filePath });
  logger.record({
    method: 'POST',
    path: '/api/v1/client-errors?access_token=hidden',
    code: 'internal_error',
    message: 'Request failed with password="hidden-password"',
    stack: 'Error: failed\n  at run (https://example.test/app.js?token=hidden-token)',
    source: 'https://example.test/app.js?session=hidden',
    type: 'unhandledrejection',
    line: 17,
    column: 4
  });

  const record = JSON.parse(readFileSync(filePath, 'utf8').trim());
  assert.equal(record.message, 'Request failed with password=[REDACTED]');
  assert.match(record.stack, /token=\[REDACTED\]/);
  assert.equal(record.source, 'https://example.test/app.js');
  assert.equal(record.type, 'unhandledrejection');
  assert.equal(record.line, 17);
  assert.equal(record.column, 4);
  assert.ok(!JSON.stringify(record).includes('hidden'));
});

test('error logs rotate at 1 MiB and retain no more than two files', (t) => {
  const directory = makeTempDirectory(t);
  const filePath = join(directory, 'errors.jsonl');
  const logger = createErrorLogger({ filePath });
  const record = { method: 'GET', path: `/${'x'.repeat(230)}`, code: 'internal_error' };
  writeFileSync(`${filePath}.2`, 'expired');

  for (let index = 0; index < 3000; index += 1) logger.record(record);

  const rotatedPath = `${filePath}.1`;
  assert.ok(existsSync(filePath));
  assert.ok(existsSync(rotatedPath));
  assert.ok(!existsSync(`${filePath}.2`));
  const activeSize = statSync(filePath).size;
  const rotatedSize = statSync(rotatedPath).size;
  assert.ok(activeSize <= MAX_ERROR_LOG_FILE_BYTES);
  assert.ok(rotatedSize <= MAX_ERROR_LOG_FILE_BYTES);
  assert.ok(activeSize + rotatedSize <= 2 * MAX_ERROR_LOG_FILE_BYTES);
  assert.ok(readFileSync(filePath, 'utf8').trimEnd().split('\n').every((line) => JSON.parse(line).code === 'internal_error'));
});

test('invalid configuration and filesystem failures are reported explicitly', (t) => {
  assert.throws(() => createErrorLogger({ filePath: '' }), /ERP_ERROR_LOG_PATH/);

  const directory = makeTempDirectory(t);
  const blocker = join(directory, 'not-a-directory');
  writeFileSync(blocker, 'file');
  const errors = [];
  const logger = createErrorLogger({
    filePath: join(blocker, 'errors.jsonl'),
    consoleImpl: { error: (...args) => errors.push(args) }
  });

  assert.equal(logger.record({ method: 'GET', path: '/health', code: 'internal_error' }), false);
  assert.equal(errors.length, 1);
  assert.equal(errors[0][0], 'Unable to write ERP error log:');
});
