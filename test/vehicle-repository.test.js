import test from 'node:test';
import assert from 'node:assert/strict';
import { createVehicleRepository } from '../src/repositories/vehicle-repository.js';

test('vehicle and parking rows share the ERP UUID in one transaction', async () => {
  const statements = [];
  const vehicleId = '11111111-2222-4333-8444-555555555555';
  const query = async (sql, params = []) => {
    statements.push({ sql, params });
    if (sql.includes('FROM parking_vehicle_classes')) return [{ name: 'A-1' }];
    if (sql.includes('FROM parking_vehicle_option_types')) return [{ name: 'ナビ' }];
    if (sql.includes('FROM vehicles WHERE id = ?')) {
      return [{
        id: vehicleId, registration_number: '品川500あ1234', site_id: '42', status: 'available'
      }];
    }
    return { insertId: 1 };
  };
  let transactionCount = 0;
  const db = {
    query,
    transaction: async (callback) => {
      transactionCount += 1;
      return callback({ query });
    }
  };
  const vehicle = await createVehicleRepository(db).create({
    id: vehicleId,
    siteId: '42',
    registrationNumber: '品川500あ1234',
    make: 'Toyota',
    model: 'Aqua',
    parkingClass: 'A-1',
    parkingOptions: ['ナビ'],
    parkingNotes: '登録メモ'
  });

  const erpInsert = statements.find(({ sql }) => sql.includes('INSERT INTO vehicles'));
  const parkingInsert = statements.find(({ sql }) => sql.includes('INSERT INTO parking_vehicles'));
  assert.equal(transactionCount, 1);
  assert.equal(vehicle.id, vehicleId);
  assert.ok(erpInsert);
  assert.ok(parkingInsert);
  assert.deepEqual(parkingInsert.params.slice(0, 5), [
    '42', vehicleId, vehicleId, '品川500あ1234', 'A-1'
  ]);
  assert.equal(parkingInsert.params[5], JSON.stringify(['ナビ']));
  assert.equal(parkingInsert.params[6], '登録メモ');
});

test('unknown parking class aborts before inserting either vehicle row', async () => {
  const statements = [];
  const query = async (sql) => {
    statements.push(sql);
    if (sql.includes('FROM parking_vehicle_classes')) return [];
    return [];
  };
  const db = {
    query,
    transaction: async (callback) => callback({ query })
  };

  await assert.rejects(createVehicleRepository(db).create({
    id: '11111111-2222-4333-8444-555555555555',
    siteId: '42',
    registrationNumber: '品川500あ1234',
    make: 'Toyota',
    model: 'Aqua',
    parkingClass: 'not-configured'
  }), { code: 'PARKING_INVALID_REFERENCE' });
  assert.equal(statements.some((sql) =>
    sql.includes('INSERT INTO vehicles') || sql.includes('INSERT INTO parking_vehicles')
  ), false);
});
