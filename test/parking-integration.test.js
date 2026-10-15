import test from 'node:test';
import assert from 'node:assert/strict';
import { createParkingIntegration } from '../src/services/parking-integration.js';

test('parking sync preserves existing classes and batches without sending lot IDs', async () => {
  const calls = [];
  const integration = createParkingIntegration({
    apiUrl: 'https://parking.example.jp/parking/api/v1',
    apiKey: 'a'.repeat(48),
    fetchImpl: async (url, options) => {
      calls.push({ url: String(url), options });
      if (options.method === 'GET') {
        return new Response(JSON.stringify({
          vehicles: [{ external_id: 'vehicle-0', vehicle_type: 'A-2' }]
        }), { status: 200 });
      }
      return new Response(JSON.stringify({ synced: JSON.parse(options.body).length }), { status: 200 });
    }
  });
  const vehicles = Array.from({ length: 1001 }, (_, index) => ({
    id: `vehicle-${index}`,
    registration_number: `品川500あ${index}`
  }));

  const result = await integration.syncVehicles(vehicles);

  assert.deepEqual(result, { synced: 1001 });
  assert.equal(calls.length, 4);
  assert.equal(calls[0].url, 'https://parking.example.jp/parking/api/v1/integration/vehicles');
  assert.equal(calls[0].options.headers['X-ERP-API-Key'], 'a'.repeat(48));
  const batches = calls.slice(1).map(({ options }) => JSON.parse(options.body));
  assert.deepEqual(batches.map((batch) => batch.length), [500, 500, 1]);
  assert.equal(batches[0][0].vehicle_type, 'A-2');
  assert.equal(batches[0][1].vehicle_type, 'その他');
  assert.equal(Object.hasOwn(batches[0][0], 'parking_lot_id'), false);
});

test('parking sync reports API errors without hiding upstream details', async () => {
  const integration = createParkingIntegration({
    apiUrl: 'https://parking.example.jp/api/v1',
    apiKey: 'b'.repeat(48),
    fetchImpl: async () => new Response(JSON.stringify({ detail: 'Invalid ERP API key.' }), { status: 401 })
  });
  await assert.rejects(
    integration.syncVehicles([]),
    /駐車場システムが応答しました（401）：Invalid ERP API key\./
  );
});

test('parking sync reports network failures to the operator', async () => {
  const integration = createParkingIntegration({
    apiUrl: 'http://127.0.0.1:8001/api/v1',
    apiKey: 'd'.repeat(48),
    fetchImpl: async () => { throw new Error('connect ECONNREFUSED'); }
  });

  await assert.rejects(integration.syncVehicles([]), (error) =>
    error.code === 'parking_unavailable' && /ECONNREFUSED/.test(error.message)
  );
});

test('parking sync stops before writing when a matching legacy vehicle has a different external ID', async () => {
  const calls = [];
  const integration = createParkingIntegration({
    apiUrl: 'https://parking.example.jp/api/v1',
    apiKey: 'c'.repeat(48),
    fetchImpl: async (url, options) => {
      calls.push({ url: String(url), options });
      return new Response(JSON.stringify({
        vehicles: [{
          id: 55,
          external_id: null,
          plate: '品川 500 あ 1234',
          vehicle_type: 'A-2'
        }]
      }), { status: 200 });
    }
  });

  await assert.rejects(
    integration.syncVehicles([{
      id: 'erp-vehicle-uuid',
      registration_number: '品川500あ1234'
    }]),
    (error) => error.code === 'parking_legacy_mapping_conflict'
  );
  assert.equal(calls.length, 1);
});
