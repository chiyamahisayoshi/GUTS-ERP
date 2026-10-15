import bcrypt from 'bcryptjs';
import { randomUUID } from 'node:crypto';

const siteTypes = new Set(['headquarters', 'direct', 'franchise']);
const vehicleStatuses = new Set(['available', 'rented', 'maintenance', 'retired']);

function isText(value, min, max) {
  return typeof value === 'string' && value.trim().length >= min && value.trim().length <= max;
}

function normalizeParkingJobTime(value) {
  if (typeof value !== 'string') return null;
  const match = value.trim().replace(/：/g, ':').replace(/[０-９]/g, (digit) =>
    String.fromCharCode(digit.charCodeAt(0) - 0xfee0))
    .match(/^(\d{4})[/-](\d{1,2})[/-](\d{1,2})[T\s]+(\d{1,2}):(\d{2})$/);
  if (!match) return null;
  const [year, month, day, hour, minute] = match.slice(1).map(Number);
  const date = new Date(Date.UTC(year, month - 1, day, hour, minute));
  if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 ||
      date.getUTCDate() !== day || hour > 23 || minute > 59) return null;
  const pad = (number, size = 2) => String(number).padStart(size, '0');
  return `${pad(year, 4)}-${pad(month)}-${pad(day)} ${pad(hour)}:${pad(minute)}`;
}

function isGoogleMapsUrl(value) {
  if (typeof value !== 'string' || value.length > 2000) return false;
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:' || url.username || url.password || url.port) return false;
    if (['maps.app.goo.gl', 'maps.google.com'].includes(url.hostname)) return true;
    if (url.hostname === 'goo.gl') return url.pathname.startsWith('/maps');
    return ['google.com', 'www.google.com', 'www.google.co.jp', 'google.co.jp'].includes(url.hostname) &&
      url.pathname.startsWith('/maps');
  } catch {
    return false;
  }
}

function validParkingMarkings(markings) {
  if (!Array.isArray(markings) || markings.length > 100) return false;
  const ids = new Set();
  return markings.every((marking) => {
    if (!marking || typeof marking !== 'object' || Array.isArray(marking) ||
        typeof marking.id !== 'string' || !/^[\w-]{1,64}$/.test(marking.id) ||
        ids.has(marking.id) || typeof marking.color !== 'string' ||
        !/^#[0-9a-fA-F]{6}$/.test(marking.color) ||
        !['x1', 'y1', 'x2', 'y2'].every((key) =>
          typeof marking[key] === 'number' && Number.isFinite(marking[key]) &&
          marking[key] >= 0 && marking[key] <= 1)) return false;
    ids.add(marking.id);
    return true;
  });
}

function requirePermission(permission, { headquartersOnly = false } = {}) {
  return requirePermissions([permission], { headquartersOnly });
}

function requirePermissions(permissions, { headquartersOnly = false } = {}) {
  return async (request, reply) => {
    await request.jwtVerify();
    if (permissions.some((permission) => !request.user.permissions?.includes(permission))) {
      return reply.code(403).send({ error: 'forbidden' });
    }
    if (headquartersOnly && request.user.siteType !== 'headquarters') {
      return reply.code(403).send({ error: 'forbidden' });
    }
  };
}

export function registerRoutes(app, { accounts, admin, vehicles, reservations, auth,
  parkingBoard, parkingRealtime }, errorLogger) {
  app.get('/health', async () => ({ status: 'ok' }));

  app.get('/api/v1/parking/bootstrap', {
    preHandler: requirePermission('parking:read')
  }, async (request) => parkingBoard.bootstrap(request.user.siteId));

  app.post('/api/v1/parking/lots', {
    preHandler: requirePermissions(['parking:read', 'parking:admin']),
    schema: {
      body: {
        type: 'object', additionalProperties: false, required: ['name'],
        properties: {
          name: { type: 'string', minLength: 1, maxLength: 40 },
          navigation_url: { type: 'string', maxLength: 2000 }
        }
      }
    }
  }, async (request, reply) => {
    const name = request.body.name.trim();
    const navigationUrl = (request.body.navigation_url ?? '').trim();
    if (!name || (navigationUrl && !isGoogleMapsUrl(navigationUrl))) {
      return reply.code(422).send({ error: 'invalid_request' });
    }
    const lot = await parkingBoard.createLot({
      siteId: request.user.siteId, name, navigationUrl
    });
    parkingRealtime.publish(request.user.siteId);
    return reply.code(201).send(lot);
  });

  app.patch('/api/v1/parking/lots/:id', {
    preHandler: requirePermissions(['parking:read', 'parking:admin']),
    schema: {
      params: {
        type: 'object', required: ['id'],
        properties: { id: { type: 'string', pattern: '^[1-9][0-9]*$' } }
      },
      body: {
        type: 'object', additionalProperties: false, minProperties: 1,
        properties: {
          name: { type: 'string', minLength: 1, maxLength: 40 },
          navigation_url: { type: 'string', maxLength: 2000 },
          area_height: { type: 'integer', minimum: 160, maximum: 600 },
          area_width: { type: 'integer', minimum: 30, maximum: 100 },
          markings: { type: 'array', maxItems: 100 },
          capacity: { anyOf: [{ type: 'integer', minimum: 0, maximum: 1000 }, { type: 'null' }] },
          is_active: { type: 'boolean' },
          class_priority: {
            type: 'array', maxItems: 100, uniqueItems: true,
            items: { type: 'string', minLength: 1, maxLength: 120 }
          }
        }
      }
    }
  }, async (request, reply) => {
    const fields = { ...request.body };
    if (fields.name !== undefined) {
      fields.name = fields.name.trim();
      if (!fields.name) return reply.code(422).send({ error: 'invalid_request' });
    }
    if (fields.navigation_url !== undefined) {
      fields.navigation_url = fields.navigation_url.trim();
      if (fields.navigation_url && !isGoogleMapsUrl(fields.navigation_url)) {
        return reply.code(422).send({ error: 'invalid_request' });
      }
    }
    if (fields.markings !== undefined && !validParkingMarkings(fields.markings)) {
      return reply.code(422).send({ error: 'invalid_request' });
    }
    try {
      const lot = await parkingBoard.updateLot({
        siteId: request.user.siteId, lotId: request.params.id, fields
      });
      if (!lot) return reply.code(404).send({ error: 'not_found' });
      parkingRealtime.publish(request.user.siteId);
      return lot;
    } catch (error) {
      if (error.code === 'PARKING_INVALID_REFERENCE') {
        return reply.code(422).send({ error: 'invalid_reference' });
      }
      if (error.code === 'PARKING_INVALID_VALUE') {
        return reply.code(422).send({ error: 'invalid_request' });
      }
      throw error;
    }
  });

  app.delete('/api/v1/parking/lots/:id', {
    preHandler: requirePermissions(['parking:read', 'parking:admin']),
    schema: {
      params: {
        type: 'object', required: ['id'],
        properties: { id: { type: 'string', pattern: '^[1-9][0-9]*$' } }
      }
    }
  }, async (request, reply) => {
    const result = await parkingBoard.deleteLot({
      siteId: request.user.siteId, lotId: request.params.id
    });
    if (result.deleted) {
      parkingRealtime.publish(request.user.siteId);
      return reply.code(204).send();
    }
    if (result.reason === 'not_found') return reply.code(404).send({ error: 'not_found' });
    return reply.code(409).send({ error: result.reason });
  });

  app.put('/api/v1/parking/lots/order', {
    preHandler: requirePermissions(['parking:read', 'parking:admin']),
    schema: {
      body: {
        type: 'object', additionalProperties: false, required: ['ids'],
        properties: {
          ids: { type: 'array', maxItems: 10000, uniqueItems: true, items: { type: 'integer', minimum: 1 } }
        }
      }
    }
  }, async (request, reply) => {
    try {
      await parkingBoard.orderLots({ siteId: request.user.siteId, ids: request.body.ids });
      parkingRealtime.publish(request.user.siteId);
      return reply.code(204).send();
    } catch (error) {
      if (error.code === 'PARKING_INVALID_VALUE') {
        return reply.code(422).send({ error: 'invalid_request' });
      }
      throw error;
    }
  });

  app.post('/api/v1/parking/statuses', {
    preHandler: requirePermissions(['parking:read', 'parking:admin']),
    schema: {
      body: {
        type: 'object', additionalProperties: false, required: ['name'],
        properties: {
          name: { type: 'string', minLength: 1, maxLength: 40 },
          icon: { type: 'string', maxLength: 8 }
        }
      }
    }
  }, async (request, reply) => {
    const name = request.body.name.trim();
    const icon = request.body.icon?.trim() || '🔔';
    if (!name) return reply.code(422).send({ error: 'invalid_request' });
    const status = await parkingBoard.createStatus({ siteId: request.user.siteId, name, icon });
    parkingRealtime.publish(request.user.siteId);
    return reply.code(201).send(status);
  });

  app.delete('/api/v1/parking/statuses/:id', {
    preHandler: requirePermissions(['parking:read', 'parking:admin']),
    schema: {
      params: {
        type: 'object', required: ['id'],
        properties: { id: { type: 'string', pattern: '^[1-9][0-9]*$' } }
      }
    }
  }, async (request, reply) => {
    const deleted = await parkingBoard.deleteStatus({
      siteId: request.user.siteId, statusId: request.params.id
    });
    if (!deleted) return reply.code(404).send({ error: 'not_found' });
    parkingRealtime.publish(request.user.siteId);
    return reply.code(204).send();
  });

  app.post('/api/v1/parking/classes', {
    preHandler: requirePermissions(['parking:read', 'parking:admin']),
    schema: {
      body: {
        type: 'object', additionalProperties: false, required: ['name', 'color'],
        properties: {
          name: { type: 'string', minLength: 1, maxLength: 40 },
          color: { type: 'string', pattern: '^#[0-9a-fA-F]{6}$' }
        }
      }
    }
  }, async (request, reply) => {
    const name = request.body.name.trim();
    if (!name) return reply.code(422).send({ error: 'invalid_request' });
    const vehicleClass = await parkingBoard.createVehicleClass({
      siteId: request.user.siteId, name, color: request.body.color
    });
    parkingRealtime.publish(request.user.siteId);
    return reply.code(201).send(vehicleClass);
  });

  app.patch('/api/v1/parking/classes/:id', {
    preHandler: requirePermissions(['parking:read', 'parking:admin']),
    schema: {
      params: {
        type: 'object', required: ['id'],
        properties: { id: { type: 'string', pattern: '^[1-9][0-9]*$' } }
      },
      body: {
        type: 'object', additionalProperties: false, required: ['name', 'color'],
        properties: {
          name: { type: 'string', minLength: 1, maxLength: 40 },
          color: { type: 'string', pattern: '^#[0-9a-fA-F]{6}$' }
        }
      }
    }
  }, async (request, reply) => {
    const name = request.body.name.trim();
    if (!name) return reply.code(422).send({ error: 'invalid_request' });
    const vehicleClass = await parkingBoard.updateVehicleClass({
      siteId: request.user.siteId, classId: request.params.id, name, color: request.body.color
    });
    if (!vehicleClass) return reply.code(404).send({ error: 'not_found' });
    parkingRealtime.publish(request.user.siteId);
    return vehicleClass;
  });

  app.delete('/api/v1/parking/classes/:id', {
    preHandler: requirePermissions(['parking:read', 'parking:admin']),
    schema: {
      params: {
        type: 'object', required: ['id'],
        properties: { id: { type: 'string', pattern: '^[1-9][0-9]*$' } }
      }
    }
  }, async (request, reply) => {
    const result = await parkingBoard.deleteVehicleClass({
      siteId: request.user.siteId, classId: request.params.id
    });
    if (!result.deleted) {
      return reply.code(result.reason === 'not_found' ? 404 : 409).send({ error: result.reason });
    }
    parkingRealtime.publish(request.user.siteId);
    return reply.code(204).send();
  });

  app.post('/api/v1/parking/options', {
    preHandler: requirePermissions(['parking:read', 'parking:admin']),
    schema: {
      body: {
        type: 'object', additionalProperties: false, required: ['name'],
        properties: { name: { type: 'string', minLength: 1, maxLength: 40 } }
      }
    }
  }, async (request, reply) => {
    const name = request.body.name.trim();
    if (!name) return reply.code(422).send({ error: 'invalid_request' });
    const option = await parkingBoard.createVehicleOption({ siteId: request.user.siteId, name });
    parkingRealtime.publish(request.user.siteId);
    return reply.code(201).send(option);
  });

  app.delete('/api/v1/parking/options/:id', {
    preHandler: requirePermissions(['parking:read', 'parking:admin']),
    schema: {
      params: {
        type: 'object', required: ['id'],
        properties: { id: { type: 'string', pattern: '^[1-9][0-9]*$' } }
      }
    }
  }, async (request, reply) => {
    const deleted = await parkingBoard.deleteVehicleOption({
      siteId: request.user.siteId, optionId: request.params.id
    });
    if (!deleted) return reply.code(404).send({ error: 'not_found' });
    parkingRealtime.publish(request.user.siteId);
    return reply.code(204).send();
  });

  app.post('/api/v1/parking/stores', {
    preHandler: requirePermissions(['parking:read', 'parking:admin']),
    schema: {
      body: {
        type: 'object', additionalProperties: false, required: ['name'],
        properties: { name: { type: 'string', minLength: 1, maxLength: 120 } }
      }
    }
  }, async (request, reply) => {
    const name = request.body.name.trim();
    if (!name) return reply.code(422).send({ error: 'invalid_request' });
    const store = await parkingBoard.createStore({ siteId: request.user.siteId, name });
    parkingRealtime.publish(request.user.siteId);
    return reply.code(201).send(store);
  });

  app.delete('/api/v1/parking/stores/:id', {
    preHandler: requirePermissions(['parking:read', 'parking:admin']),
    schema: {
      params: {
        type: 'object', required: ['id'],
        properties: { id: { type: 'string', pattern: '^[1-9][0-9]*$' } }
      }
    }
  }, async (request, reply) => {
    const deleted = await parkingBoard.deleteStore({
      siteId: request.user.siteId, storeId: request.params.id
    });
    if (!deleted) return reply.code(404).send({ error: 'not_found' });
    parkingRealtime.publish(request.user.siteId);
    return reply.code(204).send();
  });

  const distanceEntry = {
    type: 'object',
    additionalProperties: false,
    required: ['minutes', 'km'],
    properties: {
      minutes: { type: ['number', 'null'], minimum: 0, maximum: 100000 },
      km: { type: ['number', 'null'], minimum: 0, maximum: 100000 }
    }
  };
  const distanceBatch = (ids) => ({
    body: {
      type: 'object', additionalProperties: false, required: ['entries'],
      properties: {
        entries: {
          type: 'array', maxItems: 2000,
          items: {
            ...distanceEntry,
            required: [...ids, ...distanceEntry.required],
            properties: {
              ...Object.fromEntries(ids.map((id) => [id, { type: 'integer', minimum: 1 }])),
              ...distanceEntry.properties
            }
          }
        }
      }
    }
  });

  app.put('/api/v1/parking/lot-distances', {
    preHandler: requirePermissions(['parking:read', 'parking:admin']),
    schema: distanceBatch(['from_lot_id', 'to_lot_id'])
  }, async (request, reply) => {
    try {
      const result = await parkingBoard.updateLotDistances({
        siteId: request.user.siteId, entries: request.body.entries
      });
      parkingRealtime.publish(request.user.siteId);
      return result;
    } catch (error) {
      if (error.code === 'PARKING_INVALID_REFERENCE') {
        return reply.code(422).send({ error: 'invalid_reference' });
      }
      throw error;
    }
  });

  app.put('/api/v1/parking/store-distances', {
    preHandler: requirePermissions(['parking:read', 'parking:admin']),
    schema: distanceBatch(['store_id', 'lot_id'])
  }, async (request, reply) => {
    try {
      const result = await parkingBoard.updateStoreLotDistances({
        siteId: request.user.siteId, entries: request.body.entries
      });
      parkingRealtime.publish(request.user.siteId);
      return result;
    } catch (error) {
      if (error.code === 'PARKING_INVALID_REFERENCE') {
        return reply.code(422).send({ error: 'invalid_reference' });
      }
      throw error;
    }
  });

  app.post('/api/v1/parking/assessment-fields', {
    preHandler: requirePermissions(['parking:read', 'parking:admin']),
    schema: {
      body: {
        type: 'object', additionalProperties: false,
        required: ['name', 'field_type'],
        properties: {
          name: { type: 'string', minLength: 1, maxLength: 120 },
          field_type: { type: 'string', enum: ['rating', 'checkbox', 'number', 'text'] },
          suffix: { type: 'string', maxLength: 120 }
        }
      }
    }
  }, async (request, reply) => {
    const name = request.body.name.trim();
    if (!name) return reply.code(422).send({ error: 'invalid_request' });
    const field = await parkingBoard.createAssessmentField({
      siteId: request.user.siteId, name, fieldType: request.body.field_type,
      suffix: request.body.suffix?.trim() ?? ''
    });
    parkingRealtime.publish(request.user.siteId);
    return reply.code(201).send(field);
  });

  app.patch('/api/v1/parking/assessment-fields/:id', {
    preHandler: requirePermissions(['parking:read', 'parking:admin']),
    schema: {
      params: {
        type: 'object', required: ['id'],
        properties: { id: { type: 'string', pattern: '^[1-9][0-9]*$' } }
      },
      body: {
        type: 'object', additionalProperties: false, required: ['name', 'field_type'],
        properties: {
          name: { type: 'string', minLength: 1, maxLength: 120 },
          field_type: { type: 'string', enum: ['rating', 'checkbox', 'number', 'text'] },
          suffix: { type: 'string', maxLength: 120 }
        }
      }
    }
  }, async (request, reply) => {
    const name = request.body.name.trim();
    if (!name) return reply.code(422).send({ error: 'invalid_request' });
    const updated = await parkingBoard.updateAssessmentField({
      siteId: request.user.siteId, fieldId: request.params.id, name,
      fieldType: request.body.field_type, suffix: request.body.suffix?.trim() ?? ''
    });
    if (!updated) return reply.code(404).send({ error: 'not_found_or_builtin' });
    parkingRealtime.publish(request.user.siteId);
    return reply.code(204).send();
  });

  app.delete('/api/v1/parking/assessment-fields/:id', {
    preHandler: requirePermissions(['parking:read', 'parking:admin']),
    schema: {
      params: {
        type: 'object', required: ['id'],
        properties: { id: { type: 'string', pattern: '^[1-9][0-9]*$' } }
      }
    }
  }, async (request, reply) => {
    const deleted = await parkingBoard.deleteAssessmentField({
      siteId: request.user.siteId, fieldId: request.params.id
    });
    if (!deleted) return reply.code(404).send({ error: 'not_found_or_builtin' });
    parkingRealtime.publish(request.user.siteId);
    return reply.code(204).send();
  });

  app.post('/api/v1/parking/damage-types', {
    preHandler: requirePermissions(['parking:read', 'parking:admin']),
    schema: {
      body: {
        type: 'object', additionalProperties: false, required: ['name', 'color'],
        properties: {
          name: { type: 'string', minLength: 1, maxLength: 120 },
          icon: { type: 'string', maxLength: 40 },
          color: { type: 'string', pattern: '^#[0-9a-fA-F]{6}$' }
        }
      }
    }
  }, async (request, reply) => {
    const name = request.body.name.trim();
    if (!name) return reply.code(422).send({ error: 'invalid_request' });
    const damageType = await parkingBoard.createDamageType({
      siteId: request.user.siteId, name, icon: request.body.icon?.trim() || '⚠️',
      color: request.body.color
    });
    parkingRealtime.publish(request.user.siteId);
    return reply.code(201).send(damageType);
  });

  app.patch('/api/v1/parking/damage-types/:id', {
    preHandler: requirePermissions(['parking:read', 'parking:admin']),
    schema: {
      params: {
        type: 'object', required: ['id'],
        properties: { id: { type: 'string', pattern: '^[1-9][0-9]*$' } }
      },
      body: {
        type: 'object', additionalProperties: false, required: ['name', 'color'],
        properties: {
          name: { type: 'string', minLength: 1, maxLength: 120 },
          icon: { type: 'string', maxLength: 40 },
          color: { type: 'string', pattern: '^#[0-9a-fA-F]{6}$' }
        }
      }
    }
  }, async (request, reply) => {
    const name = request.body.name.trim();
    if (!name) return reply.code(422).send({ error: 'invalid_request' });
    const updated = await parkingBoard.updateDamageType({
      siteId: request.user.siteId, damageTypeId: request.params.id, name,
      icon: request.body.icon?.trim() || '⚠️', color: request.body.color
    });
    if (!updated) return reply.code(404).send({ error: 'not_found' });
    parkingRealtime.publish(request.user.siteId);
    return reply.code(204).send();
  });

  app.delete('/api/v1/parking/damage-types/:id', {
    preHandler: requirePermissions(['parking:read', 'parking:admin']),
    schema: {
      params: {
        type: 'object', required: ['id'],
        properties: { id: { type: 'string', pattern: '^[1-9][0-9]*$' } }
      }
    }
  }, async (request, reply) => {
    const result = await parkingBoard.deleteDamageType({
      siteId: request.user.siteId, damageTypeId: request.params.id
    });
    if (!result.deleted) {
      return reply.code(result.reason === 'not_found' ? 404 : 409).send({ error: result.reason });
    }
    parkingRealtime.publish(request.user.siteId);
    return reply.code(204).send();
  });

  app.post('/api/v1/parking/ws-ticket', {
    preHandler: requirePermission('parking:read')
  }, async (request, reply) => {
    reply.header('Cache-Control', 'no-store');
    return { ticket: parkingRealtime.issue(request.user.siteId, request.user.sub) };
  });

  app.patch('/api/v1/parking/vehicles/:id', {
    preHandler: requirePermissions(['parking:read', 'parking:write']),
    schema: {
      params: {
        type: 'object',
        required: ['id'],
        properties: { id: { type: 'string', pattern: '^[1-9][0-9]*$' } }
      },
      body: {
        type: 'object',
        additionalProperties: false,
        minProperties: 1,
        properties: {
          parking_lot_id: { anyOf: [{ type: 'integer', minimum: 1 }, { type: 'null' }] },
          position_x: { type: 'number', minimum: 0, maximum: 1 },
          position_y: { type: 'number', minimum: 0, maximum: 1 },
          status_ids: {
            type: 'array', maxItems: 100, uniqueItems: true,
            items: { type: 'integer', minimum: 1 }
          },
          unwashed: { type: 'boolean' },
          no_fuel: { type: 'boolean' },
          needs_repair: { type: 'boolean' },
          options: {
            type: 'array', maxItems: 100, uniqueItems: true,
            items: { type: 'string', minLength: 1, maxLength: 40 }
          },
          assessment_values: {
            type: 'object', maxProperties: 100, propertyNames: { pattern: '^[1-9][0-9]*$' },
            additionalProperties: { anyOf: [{ type: 'string' }, { type: 'number' }, { type: 'boolean' }] }
          },
          inspection_marks: {
            type: 'array', maxItems: 200, uniqueItems: true,
            items: {
              type: 'object', additionalProperties: false,
              required: ['id', 'damage_type_id', 'x', 'y'],
              properties: {
                id: { type: 'string', pattern: '^[\\w-]{1,64}$' },
                damage_type_id: { type: 'integer', minimum: 1 },
                x: { type: 'number', minimum: 0, maximum: 1 },
                y: { type: 'number', minimum: 0, maximum: 1 },
                world_x: { type: 'number', minimum: -3, maximum: 3 },
                world_y: { type: 'number', minimum: -3, maximum: 3 },
                world_z: { type: 'number', minimum: -3, maximum: 3 },
                world_nx: { type: 'number', minimum: -1, maximum: 1 },
                world_ny: { type: 'number', minimum: -1, maximum: 1 },
                world_nz: { type: 'number', minimum: -1, maximum: 1 }
              }
            }
          },
          notes: { anyOf: [{ type: 'string', maxLength: 2000 }, { type: 'null' }] }
        }
      }
    }
  }, async (request, reply) => {
    const body = request.body;
    if ((body.position_x === undefined) !== (body.position_y === undefined)) {
      return reply.code(400).send({ error: 'invalid_request' });
    }
    try {
      const vehicle = await parkingBoard.updateVehicle({
        siteId: request.user.siteId,
        vehicleId: request.params.id,
        parkingLotId: body.parking_lot_id,
        positionX: body.position_x,
        positionY: body.position_y,
        statusIds: body.status_ids,
        unwashed: body.unwashed,
        noFuel: body.no_fuel,
        needsRepair: body.needs_repair,
        options: body.options,
        notes: body.notes,
        assessmentValues: body.assessment_values,
        inspectionMarks: body.inspection_marks
      });

      parkingRealtime.publish(request.user.siteId);
      return vehicle;
    } catch (error) {
      if (error.code === 'PARKING_INVALID_REFERENCE') {
        return reply.code(422).send({ error: 'invalid_reference' });
      }
      if (error.code === 'PARKING_INVALID_VALUE') {
        return reply.code(422).send({ error: 'invalid_request' });
      }
      errorLogger.record({
        method: request.method, path: request.routeOptions.url, code: 'internal_error'
      });
      return reply.code(500).send({ error: 'internal_error' });
    }
  });

  app.post('/api/v1/parking/jobs', {
    preHandler: requirePermissions(['parking:read', 'parking:write']),
    schema: {
      body: {
        type: 'object', additionalProperties: false,
        required: ['vehicle_id', 'destination_lot_id', 'scheduled_at'],
        properties: {
          vehicle_id: { type: 'integer', minimum: 1 },
          destination_lot_id: { type: 'integer', minimum: 1 },
          scheduled_at: { type: 'string', minLength: 1, maxLength: 40 }
        }
      }
    }
  }, async (request, reply) => {
    const scheduledAt = normalizeParkingJobTime(request.body.scheduled_at);
    if (!scheduledAt) return reply.code(422).send({ error: 'invalid_request' });
    try {
      const job = await parkingBoard.createJob({
        siteId: request.user.siteId,
        vehicleId: request.body.vehicle_id,
        destinationLotId: request.body.destination_lot_id,
        scheduledAt
      });
      parkingRealtime.publish(request.user.siteId);
      return reply.code(201).send(job);
    } catch (error) {
      if (error.code === 'PARKING_INVALID_REFERENCE') {
        return reply.code(422).send({ error: 'invalid_reference' });
      }
      errorLogger.record({ method: request.method, path: request.routeOptions.url, code: 'internal_error' });
      return reply.code(500).send({ error: 'internal_error' });
    }
  });

  app.patch('/api/v1/parking/jobs/:id', {
    preHandler: requirePermissions(['parking:read', 'parking:write']),
    schema: {
      params: {
        type: 'object', required: ['id'],
        properties: { id: { type: 'string', pattern: '^[1-9][0-9]*$' } }
      },
      body: {
        type: 'object', additionalProperties: false, required: ['completed'],
        properties: { completed: { type: 'boolean' } }
      }
    }
  }, async (request, reply) => {
    const job = await parkingBoard.updateJob({
      siteId: request.user.siteId,
      jobId: request.params.id,
      completed: request.body.completed
    });
    if (job) parkingRealtime.publish(request.user.siteId);
    return job || reply.code(404).send({ error: 'not_found' });
  });

  app.delete('/api/v1/parking/jobs/:id', {
    preHandler: requirePermissions(['parking:read', 'parking:write']),
    schema: {
      params: {
        type: 'object', required: ['id'],
        properties: { id: { type: 'string', pattern: '^[1-9][0-9]*$' } }
      }
    }
  }, async (request, reply) => {
    const deleted = await parkingBoard.deleteJob({
      siteId: request.user.siteId, jobId: request.params.id
    });
    if (deleted) parkingRealtime.publish(request.user.siteId);
    return deleted ? reply.code(204).send() : reply.code(404).send({ error: 'not_found' });
  });

  app.post('/api/v1/parking/vehicles:sync', {
    preHandler: requirePermissions(['vehicles:read', 'vehicles:write'], { headquartersOnly: true })
  }, async (request, reply) => {
    try {
      const vehiclesToSync = await vehicles.listForParkingSync();
      const result = await parkingBoard.syncVehiclesFromERP({ vehicles: vehiclesToSync });
      for (const siteId of new Set(vehiclesToSync.map((vehicle) => String(vehicle.site_id)))) {
        parkingRealtime.publish(siteId);
      }
      return result;
    } catch (error) {
      if (error.code === 'PARKING_SITE_MAPPING_CONFLICT') {
        return reply.code(409).send({ error: 'site_mapping_conflict' });
      }
      if (error.code === 'PARKING_INVALID_REFERENCE') {
        return reply.code(422).send({ error: 'invalid_reference' });
      }
      errorLogger.record({
        method: request.method,
        path: request.routeOptions.url,
        code: 'internal_error'
      });
      return reply.code(500).send({ error: 'internal_error' });
    }
  });

  app.get('/api/v1/dashboard/stats', {
    preHandler: async (request) => request.jwtVerify()
  }, async (request) => admin.dashboardStats(
    request.user.siteType === 'headquarters' ? undefined : request.user.siteId
  ));

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
          search: { type: 'string', maxLength: 100 },
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
        search: request.query.search?.trim() || undefined,
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
          search: { type: 'string', maxLength: 100 },
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
      search: request.query.search?.trim() || undefined,
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
          vin: { type: ['string', 'null'], maxLength: 32 },
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
          vin: { type: ['string', 'null'], maxLength: 32 },
          make: { type: 'string', minLength: 1, maxLength: 80 },
          model: { type: 'string', minLength: 1, maxLength: 100 },
          modelYear: { type: ['integer', 'null'], minimum: 1900, maximum: 2200 },
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

  app.get('/api/v1/reservations', {
    preHandler: requirePermission('reservations:read'),
    schema: {
      querystring: {
        type: 'object',
        properties: {
          siteId: { type: 'string', pattern: '^[1-9]\\d*$' },
          status: { type: 'string', enum: ['reserved', 'checked_in', 'completed', 'cancelled'] },
          search: { type: 'string', maxLength: 100 },
          limit: { type: 'integer', minimum: 1, maximum: 100, default: 50 },
          offset: { type: 'integer', minimum: 0, default: 0 }
        }
      }
    }
  }, async (request) => ({
    items: await reservations.list({
      siteId: request.user.siteType === 'headquarters' ? request.query.siteId : request.user.siteId,
      status: request.query.status,
      search: request.query.search?.trim() || undefined,
      limit: request.query.limit ?? 50,
      offset: request.query.offset ?? 0
    })
  }));

  app.post('/api/v1/reservations', {
    preHandler: requirePermission('reservations:write'),
    schema: {
      body: {
        type: 'object',
        additionalProperties: false,
        required: ['guestName', 'guestPhone', 'startAt', 'endAt', 'vehicleId'],
        properties: {
          siteId: { type: 'string', pattern: '^[1-9]\\d*$' },
          guestName: { type: 'string', minLength: 1, maxLength: 120 },
          guestPhone: { type: 'string', minLength: 5, maxLength: 32 },
          startAt: { type: 'string', format: 'date-time' },
          endAt: { type: 'string', format: 'date-time' },
          vehicleId: { type: 'string', format: 'uuid' }
        }
      }
    }
  }, async (request, reply) => {
    const siteId = request.user.siteType === 'headquarters'
      ? request.body.siteId
      : request.user.siteId;
    const start = new Date(request.body.startAt);
    const end = new Date(request.body.endAt);
    if (!siteId || !Number.isFinite(start.getTime()) || !Number.isFinite(end.getTime()) || start >= end) {
      return reply.code(400).send({ error: 'invalid_reservation' });
    }
    const asMysqlDateTime = (date) => date.toISOString().slice(0, 23).replace('T', ' ');
    const reservation = await reservations.create({
      ...request.body,
      siteId,
      startAt: asMysqlDateTime(start),
      endAt: asMysqlDateTime(end),
      createdBy: request.user.sub
    });
    return reply.code(201).send(reservation);
  });

  app.patch('/api/v1/reservations/:id', {
    preHandler: requirePermission('reservations:write'),
    schema: {
      params: { type: 'object', required: ['id'], properties: { id: { type: 'string', pattern: '^[1-9]\\d*$' } } },
      body: {
        type: 'object',
        additionalProperties: false,
        required: ['status'],
        properties: { status: { type: 'string', enum: ['checked_in', 'completed', 'cancelled'] } }
      }
    }
  }, async (request, reply) => {
    const result = await reservations.transition({
      id: request.params.id,
      status: request.body.status,
      siteId: request.user.siteType === 'headquarters' ? undefined : request.user.siteId
    });
    if (!result) return reply.code(404).send({ error: 'reservation_not_found' });
    return result;
  });
}
