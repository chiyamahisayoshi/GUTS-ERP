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
  internal_error: 'Unhandled server error',
  parking_not_configured: 'Parking integration is not configured',
  parking_unavailable: 'Parking integration is unavailable',
  parking_upstream_error: 'Parking integration returned an error',
  parking_invalid_response: 'Parking integration returned an invalid response'
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
  const pathname = path.split(/[?#]/, 1)[0]
    .replace(/[\u0000-\u001f\u007f]/g, '')
    .replace(/\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/g, '[REDACTED]')
    .slice(0, 256);
  return pathname || '/';
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

  function record({ method, path, code } = {}) {
    const safeCode = Object.hasOwn(ERROR_MESSAGES, code) ? code : 'internal_error';
    const record = {
      timestamp: new Date().toISOString(),
      method: typeof method === 'string' && /^[A-Z]{1,10}$/.test(method) ? method : 'UNKNOWN',
      path: safePath(path),
      code: safeCode,
      message: ERROR_MESSAGES[safeCode]
    };
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
