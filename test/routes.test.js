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
  const calls = {
    vehicleList: null, createdVehicle: null, reservationList: null,
    createdReservation: null, transitionedReservation: null, dashboardSiteScope: null
  };
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
      listPermissions: async () => [],
      dashboardStats: async (siteId) => {
        calls.dashboardSiteScope = siteId;
        return { sites: {}, accounts: {}, vehicles: {} };
      }
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
    reservations: {
      list: async (filters) => { calls.reservationList = filters; return []; },
      create: async (reservation) => {
        calls.createdReservation = reservation;
        return { id: '1', reservationCode: 'ABC123', status: 'reserved' };
      },
      transition: async (reservation) => {
        calls.transitionedReservation = reservation;
        return reservation;
      }
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
    url: '/api/v1/vehicles?siteId=99&search=Toyota',
    headers: { authorization: `Bearer ${token}` }
  });
  assert.equal(response.statusCode, 200);
  assert.equal(calls.vehicleList.siteId, '2');
  assert.equal(calls.vehicleList.search, 'Toyota');
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

test('reservation endpoints scope reception staff to their own site', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '14',
    siteId: '2',
    siteType: 'direct',
    permissions: ['reservations:read', 'reservations:write']
  });
  t.after(() => app.close());

  const headers = { authorization: `Bearer ${token}` };
  const list = await app.inject({
    method: 'GET', url: '/api/v1/reservations?siteId=99&search=Guest', headers
  });
  assert.equal(list.statusCode, 200);
  assert.equal(calls.reservationList.siteId, '2');
  assert.equal(calls.reservationList.search, 'Guest');

  const create = await app.inject({
    method: 'POST', url: '/api/v1/reservations', headers,
    payload: {
      guestName: 'Guest', guestPhone: '+81-90-1234-5678',
      startAt: '2026-11-01T09:00:00.000Z', endAt: '2026-11-02T09:00:00.000Z',
      vehicleId: '6a2b2f73-9ca4-4ed0-9b53-1ab25e2f3b55', siteId: '99'
    }
  });
  assert.equal(create.statusCode, 201);
  assert.equal(calls.createdReservation.siteId, '2');
  assert.equal(calls.createdReservation.createdBy, '14');
  assert.equal(calls.createdReservation.startAt, '2026-11-01 09:00:00.000');

  const transition = await app.inject({
    method: 'PATCH', url: '/api/v1/reservations/23', headers,
    payload: { status: 'checked_in' }
  });
  assert.equal(transition.statusCode, 200);
  assert.equal(calls.transitionedReservation.siteId, '2');

  const dashboard = await app.inject({
    method: 'GET', url: '/api/v1/dashboard/stats', headers
  });
  assert.equal(dashboard.statusCode, 200);
  assert.equal(calls.dashboardSiteScope, '2');
});
