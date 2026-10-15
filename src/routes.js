import bcrypt from 'bcryptjs';
import { randomUUID } from 'node:crypto';

const siteTypes = new Set(['headquarters', 'direct', 'franchise']);
const vehicleStatuses = new Set(['available', 'rented', 'maintenance', 'retired']);

function isText(value, min, max) {
  return typeof value === 'string' && value.trim().length >= min && value.trim().length <= max;
}

function requirePermission(permission, { headquartersOnly = false } = {}) {
  return async (request, reply) => {
    await request.jwtVerify();
    if (!request.user.permissions?.includes(permission)) {
      return reply.code(403).send({ error: 'forbidden' });
    }
    if (headquartersOnly && request.user.siteType !== 'headquarters') {
      return reply.code(403).send({ error: 'forbidden' });
    }
  };
}

export function registerRoutes(app, { accounts, admin, vehicles, auth }) {
  app.get('/health', async () => ({ status: 'ok' }));

  app.post('/api/v1/auth/login', {
    config: { rateLimit: { max: 10, timeWindow: '1 minute' } },
    schema: {
      body: {
        type: 'object',
        additionalProperties: false,
        required: ['username', 'password'],
        properties: {
          username: { type: 'string', minLength: 1, maxLength: 64 },
          password: { type: 'string', minLength: 1, maxLength: 128 }
        }
      }
    }
  }, async (request, reply) => {
    const result = await auth.login(request.body.username, request.body.password);
    if (!result) return reply.code(401).send({ error: 'invalid_credentials' });
    return result;
  });

  app.get('/api/v1/auth/me', {
    preHandler: async (request) => request.jwtVerify()
  }, async (request, reply) => {
    const account = await accounts.findById(request.user.sub);
    if (!account || account.status !== 'active' || account.site_status !== 'active') {
      return reply.code(401).send({ error: 'account_unavailable' });
    }
    const permissions = await accounts.listPermissions(account.id);
    return {
      id: String(account.id),
      username: account.username,
      displayName: account.display_name,
      site: {
        id: String(account.site_id),
        code: account.site_code,
        name: account.site_name,
        type: account.site_type
      },
      permissions
    };
  });

  app.get('/api/v1/sites', {
    preHandler: requirePermission('sites:read')
  }, async (request) => ({
    items: await admin.listSites(
      request.user.siteType === 'headquarters' ? undefined : request.user.siteId
    )
  }));

  app.post('/api/v1/sites', {
    preHandler: requirePermission('sites:write', { headquartersOnly: true })
  }, async (request, reply) => {
    const { code, name, type } = request.body || {};
    if (!isText(code, 1, 32) || !isText(name, 1, 120) || !siteTypes.has(type)) {
      return reply.code(400).send({ error: 'invalid_site' });
    }
    const site = await admin.createSite({ code: code.trim(), name: name.trim(), type });
    return reply.code(201).send(site);
  });

  app.get('/api/v1/permissions', {
    preHandler: requirePermission('accounts:write', { headquartersOnly: true })
  }, async () => ({ items: await admin.listPermissions() }));

  app.get('/api/v1/roles', {
    preHandler: requirePermission('accounts:write', { headquartersOnly: true })
  }, async () => ({ items: await admin.listRoles() }));

  app.post('/api/v1/roles', {
    preHandler: requirePermission('accounts:write', { headquartersOnly: true })
  }, async (request, reply) => {
    const { roleKey, name, permissions } = request.body || {};
    if (!isText(roleKey, 1, 64) || !/^[a-z][a-z0-9_-]*$/.test(roleKey) ||
        !isText(name, 1, 120) || !Array.isArray(permissions) ||
        permissions.some((item) => typeof item !== 'string')) {
      return reply.code(400).send({ error: 'invalid_role' });
    }
    const allowed = new Set((await admin.listPermissions()).map((item) => item.permission_key));
    if (permissions.some((permission) => !allowed.has(permission))) {
      return reply.code(400).send({ error: 'unknown_permission' });
    }
    const role = await admin.createRole({
      roleKey: roleKey.trim(),
      name: name.trim(),
      permissions: [...new Set(permissions)]
    });
    return reply.code(201).send(role);
  });

  app.post('/api/v1/accounts', {
    preHandler: requirePermission('accounts:write', { headquartersOnly: true })
  }, async (request, reply) => {
    const { siteId, username, displayName, password, roleIds = [], permissions = [] } = request.body || {};
    if (!/^[1-9]\d*$/.test(String(siteId)) ||
        !isText(username, 3, 64) || !/^[a-zA-Z0-9._@-]+$/.test(username) ||
        !isText(displayName, 1, 120) || typeof password !== 'string' || password.length < 12 ||
        password.length > 128 || !Array.isArray(roleIds) ||
        roleIds.some((roleId) => !/^[1-9]\d*$/.test(String(roleId))) ||
        !Array.isArray(permissions)) {
      return reply.code(400).send({ error: 'invalid_account' });
    }
    const allowed = new Set((await admin.listPermissions()).map((item) => item.permission_key));
    if (permissions.some((permission) => !allowed.has(permission))) {
      return reply.code(400).send({ error: 'unknown_permission' });
    }
    const passwordHash = await bcrypt.hash(password, 12);
    const account = await admin.createAccount({
      siteId: String(siteId),
      username: username.trim(),
      displayName: displayName.trim(),
      passwordHash,
      roleIds: [...new Set(roleIds.map(String))],
      permissions: [...new Set(permissions)]
    });
    return reply.code(201).send(account);
  });

  app.get('/api/v1/accounts', {
    preHandler: requirePermission('accounts:write', { headquartersOnly: true }),
    schema: {
      querystring: {
        type: 'object',
        properties: {
          siteId: { type: 'string', pattern: '^[1-9]\\d*$' },
          limit: { type: 'integer', minimum: 1, maximum: 100, default: 50 },
          offset: { type: 'integer', minimum: 0, default: 0 }
        }
      }
    }
  }, async (request) => {
    const siteId = request.user.siteType === 'headquarters'
      ? request.query.siteId
      : request.user.siteId;
    return {
      items: await admin.listAccounts({
        siteId,
        limit: request.query.limit ?? 50,
        offset: request.query.offset ?? 0
      })
    };
  });

  app.patch('/api/v1/accounts/:id', {
    preHandler: requirePermission('accounts:write', { headquartersOnly: true }),
    schema: {
      params: {
        type: 'object',
        required: ['id'],
        properties: { id: { type: 'string', pattern: '^[1-9]\\d*$' } }
      },
      body: {
        type: 'object',
        minProperties: 1,
        additionalProperties: false,
        properties: {
          siteId: { type: 'string', pattern: '^[1-9]\\d*$' },
          displayName: { type: 'string', minLength: 1, maxLength: 120 },
          password: { type: 'string', minLength: 12, maxLength: 128 },
          status: { type: 'string', enum: ['active', 'disabled'] },
          roleIds: { type: 'array', items: { type: 'string', pattern: '^[1-9]\\d*$' } },
          permissions: { type: 'array', items: { type: 'string' } }
        }
      }
    }
  }, async (request, reply) => {
    const fields = { ...request.body };
    const siteScope = request.user.siteType === 'headquarters' ? undefined : request.user.siteId;
    if (siteScope) delete fields.siteId;
    if (Object.hasOwn(fields, 'displayName')) {
      fields.displayName = fields.displayName.trim();
      if (!fields.displayName) return reply.code(400).send({ error: 'invalid_account' });
    }
    if (fields.password) {
      fields.passwordHash = await bcrypt.hash(fields.password, 12);
      delete fields.password;
    }
    if (fields.roleIds) fields.roleIds = [...new Set(fields.roleIds)];
    if (fields.permissions) {
      const allowed = new Set((await admin.listPermissions()).map((item) => item.permission_key));
      if (fields.permissions.some((permission) => !allowed.has(permission))) {
        return reply.code(400).send({ error: 'unknown_permission' });
      }
      fields.permissions = [...new Set(fields.permissions)];
    }
    const result = await admin.updateAccount(request.params.id, fields, siteScope);
    if (!result) return reply.code(404).send({ error: 'account_not_found' });
    return { id: String(result.id), status: 'updated' };
  });

  app.get('/api/v1/vehicles', {
    preHandler: requirePermission('vehicles:read'),
    schema: {
      querystring: {
        type: 'object',
        properties: {
          siteId: { type: 'string', pattern: '^[1-9]\\d*$' },
          status: { type: 'string', enum: [...vehicleStatuses] },
          limit: { type: 'integer', minimum: 1, maximum: 100, default: 50 },
          offset: { type: 'integer', minimum: 0, default: 0 }
        }
      }
    }
  }, async (request) => {
    const items = await vehicles.list({
      siteId: request.user.siteType === 'headquarters'
        ? request.query.siteId
        : request.user.siteId,
      status: request.query.status,
      limit: request.query.limit ?? 50,
      offset: request.query.offset ?? 0
    });
    return { items, limit: request.query.limit ?? 50, offset: request.query.offset ?? 0 };
  });

  app.get('/api/v1/vehicles/:id', {
    preHandler: requirePermission('vehicles:read'),
    schema: { params: { type: 'object', required: ['id'], properties: { id: { type: 'string', format: 'uuid' } } } }
  }, async (request, reply) => {
    const siteId = request.user.siteType === 'headquarters' ? undefined : request.user.siteId;
    const vehicle = await vehicles.findById(request.params.id, siteId);
    if (!vehicle) return reply.code(404).send({ error: 'vehicle_not_found' });
    return vehicle;
  });

  app.post('/api/v1/vehicles', {
    preHandler: requirePermission('vehicles:write'),
    schema: {
      body: {
        type: 'object',
        additionalProperties: false,
        required: ['registrationNumber', 'make', 'model'],
        properties: {
          registrationNumber: { type: 'string', minLength: 1, maxLength: 32 },
          vin: { type: 'string', maxLength: 32 },
          make: { type: 'string', minLength: 1, maxLength: 80 },
          model: { type: 'string', minLength: 1, maxLength: 100 },
          modelYear: { type: 'integer', minimum: 1900, maximum: 2200 },
          siteId: { type: 'string', pattern: '^[1-9]\\d*$' },
          status: { type: 'string', enum: [...vehicleStatuses] }
        }
      }
    }
  }, async (request, reply) => {
    const siteId = request.user.siteType === 'headquarters'
      ? request.body.siteId
      : request.user.siteId;
    if (!siteId) return reply.code(400).send({ error: 'site_required' });
    const vehicle = await vehicles.create({
      ...request.body,
      siteId,
      id: randomUUID()
    });
    return reply.code(201).send(vehicle);
  });

  app.patch('/api/v1/vehicles/:id', {
    preHandler: requirePermission('vehicles:write'),
    schema: {
      params: {
        type: 'object',
        required: ['id'],
        properties: { id: { type: 'string', format: 'uuid' } }
      },
      body: {
        type: 'object',
        minProperties: 1,
        additionalProperties: false,
        properties: {
          registrationNumber: { type: 'string', minLength: 1, maxLength: 32 },
          vin: { type: 'string', maxLength: 32 },
          make: { type: 'string', minLength: 1, maxLength: 80 },
          model: { type: 'string', minLength: 1, maxLength: 100 },
          modelYear: { type: 'integer', minimum: 1900, maximum: 2200 },
          siteId: { type: 'string', pattern: '^[1-9]\\d*$' },
          status: { type: 'string', enum: [...vehicleStatuses] }
        }
      }
    }
  }, async (request, reply) => {
    const requestedSiteId = request.user.siteType === 'headquarters'
      ? request.body.siteId
      : request.user.siteId;
    const fields = { ...request.body };
    if (requestedSiteId) fields.siteId = requestedSiteId;
    else delete fields.siteId;
    const siteScope = request.user.siteType === 'headquarters' ? undefined : request.user.siteId;
    const vehicle = await vehicles.update(request.params.id, fields, siteScope);
    if (!vehicle) return reply.code(404).send({ error: 'vehicle_not_found' });
    return vehicle;
  });
}
