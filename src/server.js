import Fastify from 'fastify';
import jwt from '@fastify/jwt';
import rateLimit from '@fastify/rate-limit';
import { getConfig } from './config.js';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createPool } from './db/pool.js';
import { createMysqlRepository } from './repositories/mysql-repository.js';
import { createAccountRepository } from './repositories/account-repository.js';
import { createAdminRepository } from './repositories/admin-repository.js';
import { createVehicleRepository } from './repositories/vehicle-repository.js';
import { createAuthService } from './services/auth-service.js';
import { registerRoutes } from './routes.js';

export async function buildApp({ config = getConfig(), pool, logger = true } = {}) {
  const app = Fastify({
    logger,
    trustProxy: ['127.0.0.1', '::1'],
    bodyLimit: 64 * 1024
  });
  await app.register(rateLimit, { global: false });
  await app.register(jwt, {
    secret: config.jwt.secret,
    sign: { algorithm: 'HS256' },
    verify: {
      algorithms: ['HS256'],
      issuer: config.jwt.issuer,
      audience: config.jwt.audience
    }
  });

  const db = createMysqlRepository(pool || createPool(config.database));
  const accounts = createAccountRepository(db);
  const admin = createAdminRepository(db);
  const vehicles = createVehicleRepository(db);
  const auth = createAuthService({ accounts, jwt: app.jwt, config });
  registerRoutes(app, { accounts, admin, vehicles, auth });

  app.setErrorHandler((error, request, reply) => {
    if (error.validation) {
      return reply.code(400).send({ error: 'invalid_request' });
    }
    if (error.code?.startsWith('FST_JWT_')) {
      return reply.code(401).send({ error: 'unauthorized' });
    }
    if (error.code === 'ER_NO_REFERENCED_ROW_2') {
      return reply.code(400).send({ error: 'invalid_reference' });
    }
    if (error.code === 'ER_DUP_ENTRY') {
      return reply.code(409).send({ error: 'resource_conflict' });
    }
    request.log.error({ err: error }, 'Request failed');
    return reply.code(500).send({ error: 'internal_error' });
  });

  app.addHook('onClose', async () => db.close());
  return app;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  const config = getConfig();
  const app = await buildApp({ config });
  await app.listen({ host: config.host, port: config.port });
}
