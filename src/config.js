const required = (name) => {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
};

export function getConfig() {
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
    publicBaseUrl: parsedUrl.origin,
    database: {
      host: process.env.DB_HOST || '127.0.0.1',
      port: databasePort,
      user: required('DB_USER'),
      password: required('DB_PASSWORD'),
      database: process.env.DB_NAME || 'guts_erp',
      connectionLimit
    },
    jwt: {
      secret: jwtSecret,
      issuer: process.env.JWT_ISSUER || 'guts-erp',
      audience: process.env.JWT_AUDIENCE || 'guts-parking',
      expiresIn: jwtTtlSeconds
    }
  };
}
