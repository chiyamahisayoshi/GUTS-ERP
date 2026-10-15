import test from 'node:test';
import assert from 'node:assert/strict';
import Fastify from 'fastify';
import jwt from '@fastify/jwt';
import { registerRoutes } from '../src/routes.js';

const jwtConfig = {
  secret: 'test-secret-with-at-least-thirty-two-bytes-long',
  issuer: 'guts-erp-test',
  audience: 'guts-parking-test'
};

async function makeApp(user) {
  const calls = { vehicleList: null, createdVehicle: null };
  const app = Fastify({ logger: false });
  await app.register(jwt, {
    secret: jwtConfig.secret,
    sign: { algorithm: 'HS256' },
    verify: {
      algorithms: ['HS256'],
      issuer: jwtConfig.issuer,
      audience: jwtConfig.audience
    }
  });
  registerRoutes(app, {
    accounts: {
      findById: async () => null,
      listPermissions: async () => []
    },
    admin: {
      listSites: async () => [],
      listRoles: async () => [],
      listPermissions: async () => []
    },
    vehicles: {
      list: async (filters) => {
        calls.vehicleList = filters;
        return [];
      },
      findById: async () => null,
      create: async (vehicle) => {
        calls.createdVehicle = vehicle;
        return vehicle;
      },
      update: async () => null
    },
    auth: { login: async () => null }
  });
  const token = app.jwt.sign(user, {
    issuer: jwtConfig.issuer,
    audience: jwtConfig.audience,
    expiresIn: 300
  });
  return { app, token, calls };
}

test('store users cannot query vehicles outside their own site', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '14',
    siteId: '2',
    siteType: 'direct',
    permissions: ['vehicles:read']
  });
  t.after(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: '/api/v1/vehicles?siteId=99',
    headers: { authorization: `Bearer ${token}` }
  });
  assert.equal(response.statusCode, 200);
  assert.equal(calls.vehicleList.siteId, '2');
});

test('store users receive ERP-issued vehicle IDs and cannot assign another site', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '14',
    siteId: '2',
    siteType: 'franchise',
    permissions: ['vehicles:write']
  });
  t.after(() => app.close());

  const response = await app.inject({
    method: 'POST',
    url: '/api/v1/vehicles',
    headers: { authorization: `Bearer ${token}` },
    payload: {
      registrationNumber: '品川500あ1234',
      make: 'Toyota',
      model: 'Aqua',
      siteId: '99'
    }
  });
  assert.equal(response.statusCode, 201);
  assert.equal(calls.createdVehicle.siteId, '2');
  assert.match(calls.createdVehicle.id, /^[0-9a-f-]{36}$/);
});

test('store users cannot manage accounts even if a token has the permission claim', async (t) => {
  const { app, token } = await makeApp({
    sub: '14',
    siteId: '2',
    siteType: 'franchise',
    permissions: ['accounts:write']
  });
  t.after(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: '/api/v1/accounts',
    headers: { authorization: `Bearer ${token}` }
  });
  assert.equal(response.statusCode, 403);
  assert.deepEqual(response.json(), { error: 'forbidden' });
});
