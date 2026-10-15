import { resolve } from 'node:path';

const required = (name) => {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
};

export function getConfig() {
  const configuredErrorLogPath = process.env.ERP_ERROR_LOG_PATH;
  if (configuredErrorLogPath !== undefined && !configuredErrorLogPath.trim()) {
    throw new Error('ERP_ERROR_LOG_PATH must be a non-empty path');
  }

  const jwtSecret = required('JWT_SECRET');
  if (Buffer.byteLength(jwtSecret) < 32) {
    throw new Error('JWT_SECRET must be at least 32 bytes');
  }

  const publicBaseUrl = required('PUBLIC_BASE_URL');
  const parsedUrl = new URL(publicBaseUrl);
  if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
    throw new Error('PUBLIC_BASE_URL must use http or https');
  }

  const port = Number.parseInt(process.env.PORT || '3000', 10);
  const databasePort = Number.parseInt(process.env.DB_PORT || '3306', 10);
  const connectionLimit = Number.parseInt(process.env.DB_POOL_SIZE || '10', 10);
  const jwtTtlSeconds = Number.parseInt(process.env.JWT_TTL_SECONDS || '3600', 10);
  const parkingApiUrl = process.env.PARKING_API_URL || '';
  const parkingApiKey = process.env.PARKING_API_KEY || '';
  if (Boolean(parkingApiUrl) !== Boolean(parkingApiKey)) {
    throw new Error('PARKING_API_URL and PARKING_API_KEY must be configured together');
  }
  if (parkingApiUrl) {
    const parsedParkingUrl = new URL(parkingApiUrl);
    const isLocalHttp = parsedParkingUrl.protocol === 'http:' &&
      ['127.0.0.1', 'localhost', '[::1]'].includes(parsedParkingUrl.hostname);
    if ((!isLocalHttp && parsedParkingUrl.protocol !== 'https:') || parsedParkingUrl.username ||
        parsedParkingUrl.password || parsedParkingUrl.search || parsedParkingUrl.hash) {
      throw new Error('PARKING_API_URL must use HTTPS, except for HTTP on the local machine');
    }
    if (Buffer.byteLength(parkingApiKey) < 32) {
      throw new Error('PARKING_API_KEY must be at least 32 bytes');
    }
  }
  const parkingBackendUrl = process.env.PARKING_BACKEND_URL || 'http://127.0.0.1:8001';
  const parsedParkingBackendUrl = new URL(parkingBackendUrl);
  if (parsedParkingBackendUrl.protocol !== 'http:' ||
      !['127.0.0.1', 'localhost', '[::1]'].includes(parsedParkingBackendUrl.hostname) ||
      parsedParkingBackendUrl.username || parsedParkingBackendUrl.password) {
    throw new Error('PARKING_BACKEND_URL must use HTTP on the local machine');
  }
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('PORT must be between 1 and 65535');
  if (!Number.isInteger(databasePort) || databasePort < 1 || databasePort > 65535) {
    throw new Error('DB_PORT must be between 1 and 65535');
  }
  if (!Number.isInteger(connectionLimit) || connectionLimit < 1 || connectionLimit > 100) {
    throw new Error('DB_POOL_SIZE must be between 1 and 100');
  }
  if (!Number.isInteger(jwtTtlSeconds) || jwtTtlSeconds < 60 || jwtTtlSeconds > 86400) {
    throw new Error('JWT_TTL_SECONDS must be between 60 and 86400');
  }

  return {
    host: process.env.HOST || '127.0.0.1',
    port,
    errorLogPath: resolve(configuredErrorLogPath || '.runtime/erp-errors.log'),
    publicBaseUrl: parsedUrl.origin,
    database: {
      host: process.env.DB_HOST || '127.0.0.1',
      port: databasePort,
      user: required('DB_USER'),
      password: required('DB_PASSWORD'),
      database: process.env.DB_NAME || 'guts_erp',
      connectionLimit
    },
    parking: {
      apiUrl: parkingApiUrl,
      apiKey: parkingApiKey,
      backendUrl: parsedParkingBackendUrl.origin
    },
    jwt: {
      secret: jwtSecret,
      issuer: process.env.JWT_ISSUER || 'guts-erp',
      audience: process.env.JWT_AUDIENCE || 'guts-parking',
      expiresIn: jwtTtlSeconds
    }
  };
}
