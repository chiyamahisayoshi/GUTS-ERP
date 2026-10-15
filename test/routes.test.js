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
    createdReservation: null, transitionedReservation: null, dashboardSiteScope: null,
    parkingSyncVehicles: null, parkingSyncResult: { created: 1, updated: 0, synced: 1 },
    parkingSyncError: null,
    parkingBootstrapSiteScope: null, parkingUpdate: null,
    parkingJobCreate: null, parkingJobUpdate: null, parkingJobDelete: null, parkingPublished: [],
    parkingLotCreate: null, parkingLotUpdate: null, parkingLotDelete: null, parkingLotOrder: null,
    parkingCatalogWrites: [], parkingLogisticsWrites: []
  };
  const loggedErrors = [];
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
      findById: async () => user.profile ?? null,
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
      update: async () => null,
      listForParkingSync: async () => [{
        id: 'vehicle-uuid', registration_number: '品川500あ1234',
        make: 'Toyota', model: 'Aqua', site_id: '2'
      }]
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
    auth: { login: async () => null },
    parkingBoard: {
      bootstrap: async (siteId) => {
        calls.parkingBootstrapSiteScope = siteId;
        return { parking_lots: [], vehicles: [] };
      },
      syncVehiclesFromERP: async ({ vehicles }) => {
        calls.parkingSyncVehicles = vehicles;
        if (calls.parkingSyncError) throw calls.parkingSyncError;
        return calls.parkingSyncResult;
      },
      updateVehicle: async (input) => {
        calls.parkingUpdate = input;
        return { id: 101, parking_lot_id: input.parkingLotId, status_ids: input.statusIds };
      },
      createJob: async (input) => { calls.parkingJobCreate = input; return { id: 501 }; },
      updateJob: async (input) => { calls.parkingJobUpdate = input; return input; },
      deleteJob: async (input) => { calls.parkingJobDelete = input; return true; },
      createLot: async (input) => {
        calls.parkingLotCreate = input;
        return { id: 201, name: input.name, display_order: 0, is_active: true };
      },
      updateLot: async (input) => {
        calls.parkingLotUpdate = input;
        return { id: Number(input.lotId), ...input.fields };
      },
      deleteLot: async (input) => { calls.parkingLotDelete = input; return { deleted: true }; },
      orderLots: async (input) => { calls.parkingLotOrder = input; return true; },
      createStatus: async (input) => { calls.parkingCatalogWrites.push(['status', input]); return { id: 31 }; },
      deleteStatus: async (input) => { calls.parkingCatalogWrites.push(['delete-status', input]); return true; },
      createVehicleClass: async (input) => { calls.parkingCatalogWrites.push(['class', input]); return { id: 41 }; },
      updateVehicleClass: async (input) => { calls.parkingCatalogWrites.push(['edit-class', input]); return { id: 41 }; },
      deleteVehicleClass: async (input) => { calls.parkingCatalogWrites.push(['delete-class', input]); return { deleted: true }; },
      createVehicleOption: async (input) => { calls.parkingCatalogWrites.push(['option', input]); return { id: 51 }; },
      deleteVehicleOption: async (input) => { calls.parkingCatalogWrites.push(['delete-option', input]); return true; },
      createStore: async (input) => { calls.parkingLogisticsWrites.push(['store', input]); return { id: 61 }; },
      deleteStore: async (input) => { calls.parkingLogisticsWrites.push(['delete-store', input]); return true; },
      updateLotDistances: async (input) => { calls.parkingLogisticsWrites.push(['lot-distances', input]); return { updated: input.entries.length }; },
      updateStoreLotDistances: async (input) => { calls.parkingLogisticsWrites.push(['store-distances', input]); return { updated: input.entries.length }; },
      createAssessmentField: async (input) => { calls.parkingLogisticsWrites.push(['assessment', input]); return { id: 71 }; },
      updateAssessmentField: async (input) => { calls.parkingLogisticsWrites.push(['edit-assessment', input]); return true; },
      deleteAssessmentField: async (input) => { calls.parkingLogisticsWrites.push(['delete-assessment', input]); return true; },
      createDamageType: async (input) => { calls.parkingLogisticsWrites.push(['damage', input]); return { id: 81 }; },
      updateDamageType: async (input) => { calls.parkingLogisticsWrites.push(['edit-damage', input]); return true; },
      deleteDamageType: async (input) => { calls.parkingLogisticsWrites.push(['delete-damage', input]); return { deleted: true }; }
    },
    parkingRealtime: {
      issue: (siteId, accountId) => `ticket:${siteId}:${accountId}`,
      publish: (siteId) => calls.parkingPublished.push(siteId)
    }
  }, { record: (entry) => loggedErrors.push(entry) });
  const token = app.jwt.sign(user, {
    issuer: jwtConfig.issuer,
    audience: jwtConfig.audience,
    expiresIn: 300
  });
  return { app, token, calls, loggedErrors };
}

test('auth profile exposes the owner-admin marker for language-switch visibility', async (t) => {
  const { app, token } = await makeApp({
    sub: '1', siteId: '1', siteType: 'headquarters', permissions: [],
    profile: {
      id: '1', username: 'owner', display_name: 'Owner', is_owner_admin: 1,
      site_id: '1', site_code: 'HQ', site_name: 'Headquarters',
      site_type: 'headquarters', status: 'active', site_status: 'active'
    }
  });
  t.after(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: '/api/v1/auth/me',
    headers: { authorization: `Bearer ${token}` }
  });
  assert.equal(response.statusCode, 200);
  assert.equal(response.json().isAdmin, true);
});

test('auth profile does not grant the owner-admin marker to regular accounts', async (t) => {
  const { app, token } = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct', permissions: [],
    profile: {
      id: '14', username: 'staff', display_name: 'Staff', is_owner_admin: 0,
      site_id: '2', site_code: 'TOKYO', site_name: 'Tokyo',
      site_type: 'direct', status: 'active', site_status: 'active'
    }
  });
  t.after(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: '/api/v1/auth/me',
    headers: { authorization: `Bearer ${token}` }
  });
  assert.equal(response.statusCode, 200);
  assert.equal(response.json().isAdmin, false);
});

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

test('parking sync requires headquarters vehicle read and write permissions', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '1', siteId: '1', siteType: 'headquarters',
    permissions: ['vehicles:read', 'vehicles:write']
  });
  t.after(() => app.close());

  const response = await app.inject({
    method: 'POST', url: '/api/v1/parking/vehicles:sync',
    headers: { authorization: 'Bearer ' + token }
  });
  assert.equal(response.statusCode, 200);
  assert.deepEqual(response.json(), { created: 1, updated: 0, synced: 1 });
  assert.deepEqual(calls.parkingSyncVehicles, [
    {
      id: 'vehicle-uuid', registration_number: '\u54c1\u5ddd500\u30421234',
      make: 'Toyota', model: 'Aqua', site_id: '2'
    }
  ]);
});

test('parking bootstrap requires parking:read and scopes to the signed-in ERP site', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct', permissions: ['parking:read']
  });
  t.after(() => app.close());
  const response = await app.inject({
    method: 'GET', url: '/api/v1/parking/bootstrap',
    headers: { authorization: 'Bearer ' + token }
  });
  assert.equal(response.statusCode, 200);
  assert.deepEqual(response.json(), { parking_lots: [], vehicles: [] });
  assert.equal(calls.parkingBootstrapSiteScope, '2');
});

test('parking bootstrap rejects accounts without parking:read', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct', permissions: ['vehicles:read']
  });
  t.after(() => app.close());
  const response = await app.inject({
    method: 'GET', url: '/api/v1/parking/bootstrap',
    headers: { authorization: 'Bearer ' + token }
  });
  assert.equal(response.statusCode, 403);
  assert.equal(calls.parkingBootstrapSiteScope, null);
});

test('legacy parking login handoff is no longer exposed', async (t) => {
  const { app, token } = await makeApp({
    sub: '1', siteId: '1', siteType: 'headquarters', permissions: ['vehicles:read']
  });
  t.after(() => app.close());
  const response = await app.inject({
    method: 'POST', url: '/api/v1/parking/session',
    headers: { authorization: 'Bearer ' + token }
  });
  assert.equal(response.statusCode, 404);
});

test('parking sync denies users missing either vehicle permission', async () => {
  for (const permissions of [['vehicles:read'], ['vehicles:write']]) {
    const { app, token } = await makeApp({
      sub: '1', siteId: '1', siteType: 'headquarters', permissions
    });
    const response = await app.inject({
      method: 'POST',
      url: '/api/v1/parking/vehicles:sync',
      headers: { authorization: 'Bearer ' + token }
    });
    assert.equal(response.statusCode, 403);
    await app.close();
  }
});

test('only headquarters users may trigger fleet-wide parking sync', async (t) => {
  const { app, token } = await makeApp({
    sub: '2', siteId: '2', siteType: 'direct',
    permissions: ['vehicles:read', 'vehicles:write']
  });
  t.after(() => app.close());

  const response = await app.inject({
    method: 'POST',
    url: '/api/v1/parking/vehicles:sync',
    headers: { authorization: 'Bearer ' + token }
  });
  assert.equal(response.statusCode, 403);
});

test('parking vehicle synchronization rejects ERP site mapping conflicts', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '1', siteId: '1', siteType: 'headquarters',
    permissions: ['vehicles:read', 'vehicles:write']
  });
  t.after(() => app.close());
  calls.parkingSyncError = Object.assign(new Error('site mapping mismatch'), {
    code: 'PARKING_SITE_MAPPING_CONFLICT'
  });

  const response = await app.inject({
    method: 'POST',
    url: '/api/v1/parking/vehicles:sync',
    headers: { authorization: 'Bearer ' + token }
  });
  assert.equal(response.statusCode, 409);
  assert.deepEqual(response.json(), { error: 'site_mapping_conflict' });
});

test('ERP-authenticated parking update passes only the signed-in site to the repository', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct',
    permissions: ['parking:read', 'parking:write']
  });
  t.after(() => app.close());

  const response = await app.inject({
    method: 'PATCH', url: '/api/v1/parking/vehicles/101',
    headers: { authorization: 'Bearer ' + token },
    payload: {
      parking_lot_id: 11, position_x: 0.25, position_y: 0.75, status_ids: [21],
      unwashed: true, no_fuel: false, needs_repair: true, options: ['ETC'], notes: 'check',
      assessment_values: { '31': '5' },
      inspection_marks: [{ id: 'damage-a', damage_type_id: 41, x: 0.3, y: 0.7 }]
    }
  });
  assert.equal(response.statusCode, 200);
  assert.deepEqual(calls.parkingUpdate, {
    siteId: '2', vehicleId: '101', parkingLotId: 11,
    positionX: 0.25, positionY: 0.75, statusIds: [21],
    unwashed: true, noFuel: false, needsRepair: true, options: ['ETC'], notes: 'check',
    assessmentValues: { '31': '5' },
    inspectionMarks: [{ id: 'damage-a', damage_type_id: 41, x: 0.3, y: 0.7 }]
  });
  assert.deepEqual(calls.parkingPublished, ['2']);
});

test('parking write endpoint rejects write-less tokens and invalid positions', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct', permissions: ['parking:read']
  });
  t.after(() => app.close());

  const forbidden = await app.inject({
    method: 'PATCH', url: '/api/v1/parking/vehicles/101',
    headers: { authorization: 'Bearer ' + token },
    payload: { position_x: 0.5, position_y: 0.5 }
  });
  assert.equal(forbidden.statusCode, 403);
  const invalid = await app.inject({
    method: 'PATCH', url: '/api/v1/parking/vehicles/101',
    headers: { authorization: 'Bearer ' + token },
    payload: { position_x: 1.5, position_y: 0.5 }
  });
  assert.equal(invalid.statusCode, 400);
  assert.equal(calls.parkingUpdate, null);
});

test('parking jobs create, complete, and delete under ERP permissions and site scope', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct',
    permissions: ['parking:read', 'parking:write']
  });
  t.after(() => app.close());
  const headers = { authorization: 'Bearer ' + token };
  const create = await app.inject({
    method: 'POST', url: '/api/v1/parking/jobs', headers,
    payload: {
      vehicle_id: 101, destination_lot_id: 11, scheduled_at: '2026-10-15T10:30'
    }
  });
  assert.equal(create.statusCode, 201);
  assert.deepEqual(calls.parkingJobCreate, {
    siteId: '2', vehicleId: 101, destinationLotId: 11, scheduledAt: '2026-10-15 10:30'
  });

  const update = await app.inject({
    method: 'PATCH', url: '/api/v1/parking/jobs/501', headers,
    payload: { completed: true }
  });
  assert.equal(update.statusCode, 200);
  assert.deepEqual(calls.parkingJobUpdate, { siteId: '2', jobId: '501', completed: true });

  const remove = await app.inject({
    method: 'DELETE', url: '/api/v1/parking/jobs/501', headers
  });
  assert.equal(remove.statusCode, 204);
  assert.deepEqual(calls.parkingJobDelete, { siteId: '2', jobId: '501' });
  assert.deepEqual(calls.parkingPublished, ['2', '2', '2']);
});

test('parking job routes require write access and reject invalid schedule times', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct', permissions: ['parking:read']
  });
  t.after(() => app.close());
  const headers = { authorization: 'Bearer ' + token };
  const forbidden = await app.inject({
    method: 'POST', url: '/api/v1/parking/jobs', headers,
    payload: { vehicle_id: 101, destination_lot_id: 11, scheduled_at: '2026-10-15T10:30' }
  });
  assert.equal(forbidden.statusCode, 403);
  assert.equal(calls.parkingJobCreate, null);

  const writer = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct',
    permissions: ['parking:read', 'parking:write']
  });
  t.after(() => writer.app.close());
  const invalid = await writer.app.inject({
    method: 'POST', url: '/api/v1/parking/jobs',
    headers: { authorization: 'Bearer ' + writer.token },
    payload: { vehicle_id: 101, destination_lot_id: 11, scheduled_at: 'not-a-date' }
  });
  assert.equal(invalid.statusCode, 422);
});

test('parking websocket ticket is short-lived and requires parking read permission', async (t) => {
  const { app, token } = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct', permissions: ['parking:read']
  });
  t.after(() => app.close());
  const response = await app.inject({
    method: 'POST', url: '/api/v1/parking/ws-ticket',
    headers: { authorization: 'Bearer ' + token }
  });
  assert.equal(response.statusCode, 200);
  assert.equal(response.json().ticket, 'ticket:2:14');
  assert.equal(response.headers['cache-control'], 'no-store');
});

test('parking area admin routes apply ERP site scope for create, update, order, and delete', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct',
    permissions: ['parking:read', 'parking:admin']
  });
  t.after(() => app.close());
  const headers = { authorization: 'Bearer ' + token };
  const create = await app.inject({
    method: 'POST', url: '/api/v1/parking/lots', headers,
    payload: { name: '  北側  ', navigation_url: '' }
  });
  assert.equal(create.statusCode, 201);
  assert.deepEqual(calls.parkingLotCreate, { siteId: '2', name: '北側', navigationUrl: '' });

  const update = await app.inject({
    method: 'PATCH', url: '/api/v1/parking/lots/11', headers,
    payload: { is_active: false }
  });
  assert.equal(update.statusCode, 200);
  assert.deepEqual(calls.parkingLotUpdate, {
    siteId: '2', lotId: '11', fields: { is_active: false }
  });

  const order = await app.inject({
    method: 'PUT', url: '/api/v1/parking/lots/order', headers, payload: { ids: [11, 12] }
  });
  assert.equal(order.statusCode, 204);
  assert.deepEqual(calls.parkingLotOrder, { siteId: '2', ids: [11, 12] });

  const remove = await app.inject({
    method: 'DELETE', url: '/api/v1/parking/lots/12', headers
  });
  assert.equal(remove.statusCode, 204);
  assert.deepEqual(calls.parkingLotDelete, { siteId: '2', lotId: '12' });
});

test('parking area admin routes require parking:admin and validate safe map URLs', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct', permissions: ['parking:read']
  });
  t.after(() => app.close());
  const response = await app.inject({
    method: 'POST', url: '/api/v1/parking/lots',
    headers: { authorization: 'Bearer ' + token },
    payload: { name: 'Lot', navigation_url: 'javascript:alert(1)' }
  });
  assert.equal(response.statusCode, 403);
  assert.equal(calls.parkingLotCreate, null);

  const admin = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct',
    permissions: ['parking:read', 'parking:admin']
  });
  t.after(() => admin.app.close());
  const invalidUrl = await admin.app.inject({
    method: 'POST', url: '/api/v1/parking/lots',
    headers: { authorization: 'Bearer ' + admin.token },
    payload: { name: 'Lot', navigation_url: 'javascript:alert(1)' }
  });
  assert.equal(invalidUrl.statusCode, 422);
  assert.equal(admin.calls.parkingLotCreate, null);
});

test('parking status, class, and option catalogs share ERP parking admin permission', async (t) => {
  const { app, token, calls } = await makeApp({
    sub: '14', siteId: '2', siteType: 'direct',
    permissions: ['parking:read', 'parking:admin']
  });

  test('parking store, distance, assessment, and damage configuration uses ERP admin scope', async (t) => {
    const { app, token, calls } = await makeApp({
      sub: '19', siteId: '8', siteType: 'headquarters',
      permissions: ['parking:read', 'parking:admin']
    });
    t.after(() => app.close());
    const headers = { authorization: `Bearer ${token}` };
    const createStore = await app.inject({
      method: 'POST', url: '/api/v1/parking/stores', headers, payload: { name: 'Central' }
    });
    assert.equal(createStore.statusCode, 201);
    const lotDistances = await app.inject({
      method: 'PUT', url: '/api/v1/parking/lot-distances', headers,
      payload: { entries: [{ from_lot_id: 1, to_lot_id: 2, minutes: 10, km: 2.5 }] }
    });
    assert.equal(lotDistances.statusCode, 200);
    const storeDistances = await app.inject({
      method: 'PUT', url: '/api/v1/parking/store-distances', headers,
      payload: { entries: [{ store_id: 3, lot_id: 1, minutes: 5, km: null }] }
    });
    assert.equal(storeDistances.statusCode, 200);
    const assessment = await app.inject({
      method: 'POST', url: '/api/v1/parking/assessment-fields', headers,
      payload: { name: 'Seat condition', field_type: 'rating', suffix: 'pt' }
    });
    assert.equal(assessment.statusCode, 201);
    const damage = await app.inject({
      method: 'POST', url: '/api/v1/parking/damage-types', headers,
      payload: { name: 'Dent', icon: 'D', color: '#aa2211' }
    });
    assert.equal(damage.statusCode, 201);
    assert.deepEqual(calls.parkingLogisticsWrites, [
      ['store', { siteId: '8', name: 'Central' }],
      ['lot-distances', { siteId: '8', entries: [{ from_lot_id: 1, to_lot_id: 2, minutes: 10, km: 2.5 }] }],
      ['store-distances', { siteId: '8', entries: [{ store_id: 3, lot_id: 1, minutes: 5, km: null }] }],
      ['assessment', { siteId: '8', name: 'Seat condition', fieldType: 'rating', suffix: 'pt' }],
      ['damage', { siteId: '8', name: 'Dent', icon: 'D', color: '#aa2211' }]
    ]);
  });
  t.after(() => app.close());
  const headers = { authorization: 'Bearer ' + token };
  const status = await app.inject({
    method: 'POST', url: '/api/v1/parking/statuses', headers,
    payload: { name: '清掃待ち', icon: '🫧' }
  });
  const vehicleClass = await app.inject({
    method: 'POST', url: '/api/v1/parking/classes', headers,
    payload: { name: 'A-2', color: '#4f86f7' }
  });
  const option = await app.inject({
    method: 'POST', url: '/api/v1/parking/options', headers,
    payload: { name: 'ETC' }
  });
  const classUpdate = await app.inject({
    method: 'PATCH', url: '/api/v1/parking/classes/41', headers,
    payload: { name: 'A-3', color: '#ff0000' }
  });
  assert.equal(status.statusCode, 201);
  assert.equal(vehicleClass.statusCode, 201);
  assert.equal(option.statusCode, 201);
  assert.equal(classUpdate.statusCode, 200);
  assert.deepEqual(calls.parkingCatalogWrites.slice(0, 4), [
    ['status', { siteId: '2', name: '清掃待ち', icon: '🫧' }],
    ['class', { siteId: '2', name: 'A-2', color: '#4f86f7' }],
    ['option', { siteId: '2', name: 'ETC' }],
    ['edit-class', { siteId: '2', classId: '41', name: 'A-3', color: '#ff0000' }]
  ]);
});
