import {
  appendFileSync,
  chmodSync,
  mkdirSync,
  renameSync,
  statSync,
  unlinkSync
} from 'node:fs';
import { dirname, resolve } from 'node:path';

export const MAX_ERROR_LOG_FILE_BYTES = 1024 * 1024;

const ERROR_MESSAGES = Object.freeze({
  internal_error: 'Unhandled server error'
});

function statFile(filePath) {
  try {
    const stat = statSync(filePath);
    if (!stat.isFile()) throw Object.assign(new Error(), { code: 'EISDIR' });
    return stat;
  } catch (error) {
    if (error.code === 'ENOENT') return null;
    throw error;
  }
}

function removeFile(filePath) {
  try {
    if (statFile(filePath)) unlinkSync(filePath);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
}

function safePath(path) {
  if (typeof path !== 'string') return '/unmatched';
  return safeText(path.split(/[?#]/, 1)[0], 256) || '/';
}

function safeText(value, maxLength) {
  if (typeof value !== 'string') return undefined;
  return value
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '')
    .replace(/\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/g, '[REDACTED]')
    .replace(/\bBearer\s+\S+/gi, 'Bearer [REDACTED]')
    .replace(/\b(Basic)\s+[A-Za-z0-9+/=]+/gi, '$1 [REDACTED]')
    .replace(/(["']?(?:authorization|cookie|set-cookie|password|passwd|secret|token|api[_-]?key)["']?\s*[:=]\s*)(?:"[^"]*"|'[^']*'|[^\s,;]+)/gi, '$1[REDACTED]')
    .slice(0, maxLength);
}

export function createErrorLogger({ filePath, consoleImpl = console } = {}) {
  if (typeof filePath !== 'string' || !filePath.trim() || filePath.includes('\0')) {
    throw new TypeError('ERP_ERROR_LOG_PATH must be a non-empty valid path');
  }

  const targetPath = resolve(filePath);
  const rotatedPath = `${targetPath}.1`;
  const expiredPath = `${targetPath}.2`;

  function reportFailure(error) {
    consoleImpl.error('Unable to write ERP error log:', error.code || 'filesystem_error');
  }

  function record({
    method, path, code, message, stack, source, type, status, line: lineNumber, column
  } = {}) {
    const safeCode = Object.hasOwn(ERROR_MESSAGES, code) ? code : 'internal_error';
    const record = {
      timestamp: new Date().toISOString(),
      method: typeof method === 'string' && /^[A-Z]{1,10}$/.test(method) ? method : 'UNKNOWN',
      path: safePath(path),
      code: safeCode,
      message: safeText(message, 2000) || ERROR_MESSAGES[safeCode]
    };
    const safeStack = safeText(stack, 8000);
    const safeSource = typeof source === 'string'
      ? safeText(source.split(/[?#]/, 1)[0], 1000)
      : undefined;
    const safeType = safeText(type, 80);
    if (safeStack) record.stack = safeStack;
    if (safeSource) record.source = safeSource;
    if (safeType) record.type = safeType;
    if (Number.isInteger(status) && status >= 100 && status <= 599) record.status = status;
    if (Number.isInteger(lineNumber) && lineNumber >= 0) record.line = lineNumber;
    if (Number.isInteger(column) && column >= 0) record.column = column;
    const line = `${JSON.stringify(record)}\n`;
    const incomingBytes = Buffer.byteLength(line);

    if (incomingBytes > MAX_ERROR_LOG_FILE_BYTES) {
      consoleImpl.error('Unable to write ERP error log: entry exceeds the 1 MiB file limit');
      return false;
    }

    try {
      mkdirSync(dirname(targetPath), { recursive: true, mode: 0o700 });
      let current = statFile(targetPath);
      const rotated = statFile(rotatedPath);
      removeFile(expiredPath);

      if (current?.size > MAX_ERROR_LOG_FILE_BYTES) {
        unlinkSync(targetPath);
        current = null;
        consoleImpl.error('ERP error log exceeded 1 MiB and was removed');
      }
      if (rotated?.size > MAX_ERROR_LOG_FILE_BYTES) {
        unlinkSync(rotatedPath);
        consoleImpl.error('Rotated ERP error log exceeded 1 MiB and was removed');
      }

      if (current && current.size + incomingBytes > MAX_ERROR_LOG_FILE_BYTES) {
        removeFile(rotatedPath);
        renameSync(targetPath, rotatedPath);
      }

      appendFileSync(targetPath, line, { encoding: 'utf8', mode: 0o600 });
      chmodSync(targetPath, 0o600);
      return true;
    } catch (error) {
      reportFailure(error);
      return false;
    }
  }

  return { record };
}
