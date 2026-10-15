import test from 'node:test';
import assert from 'node:assert/strict';
import { createReservationRepository } from '../src/repositories/reservation-repository.js';

test('reservation creation locks and validates the reserved vehicle and prevents overlap', async () => {
  const statements = [];
  const db = {
    transaction: async (callback) => callback({
      query: async (sql, params) => {
        statements.push({ sql, params });
        if (sql.startsWith('SELECT id, site_id, status FROM vehicles')) {
          return [{ id: 'vehicle-1', site_id: '4', status: 'available' }];
        }
        if (sql.startsWith('SELECT id FROM reservations')) return [];
        if (sql.startsWith('INSERT INTO reservations')) return { insertId: 15 };
        throw new Error(`Unexpected SQL: ${sql}`);
      }
    })
  };
  const repository = createReservationRepository(db);
  const result = await repository.create({
    siteId: '4',
    guestName: 'Guest',
    guestPhone: '+81-90-1234-5678',
    startAt: '2026-11-01 09:00:00.000',
    endAt: '2026-11-02 09:00:00.000',
    vehicleId: 'vehicle-1',
    createdBy: '3'
  });

  assert.equal(result.id, '15');
  assert.equal(result.status, 'reserved');
  assert.match(result.reservationCode, /^[A-F0-9]{12}$/);
  assert.ok(statements[0].sql.endsWith('FOR UPDATE'));
  assert.ok(statements.some(({ sql }) => sql.includes("status IN ('reserved', 'checked_in')")));
});

test('reservation creation rejects a vehicle assigned to another site', async () => {
  const db = {
    transaction: async (callback) => callback({
      query: async () => [{ id: 'vehicle-1', site_id: '9', status: 'available' }]
    })
  };
  const repository = createReservationRepository(db);
  await assert.rejects(
    repository.create({
      siteId: '4', guestName: 'Guest', guestPhone: '+81-90-1234-5678',
      startAt: '2026-11-01 09:00:00.000', endAt: '2026-11-02 09:00:00.000',
      vehicleId: 'vehicle-1', createdBy: '3'
    }),
    (error) => error.code === 'ERP_CONFLICT'
  );
});

test('checking in transitions vehicle status atomically with reservation', async () => {
  const calls = [];
  const db = {
    transaction: async (callback) => callback({
      query: async (sql, params) => {
        calls.push({ sql, params });
        if (sql.startsWith('SELECT id, site_id, vehicle_id, status FROM reservations')) {
          return [{ id: '15', site_id: '4', vehicle_id: 'vehicle-1', status: 'reserved' }];
        }
        if (sql.startsWith('SELECT id, site_id, status FROM vehicles')) {
          return [{ id: 'vehicle-1', site_id: '4', status: 'available' }];
        }
        return { affectedRows: 1 };
      }
    })
  };
  const repository = createReservationRepository(db);
  const result = await repository.transition({ id: '15', status: 'checked_in', siteId: '4' });

  assert.deepEqual(result, { id: '15', status: 'checked_in' });
  assert.ok(calls.some(({ sql, params }) =>
    sql === 'UPDATE vehicles SET status = ? WHERE id = ?' && params[0] === 'rented'));
  assert.ok(calls.some(({ sql, params }) =>
    sql === 'UPDATE reservations SET status = ? WHERE id = ?' && params[0] === 'checked_in'));
});

test('reservation transition rejects invalid state changes', async () => {
  const db = {
    transaction: async (callback) => callback({
      query: async (sql) => sql.startsWith('SELECT id, site_id, vehicle_id, status FROM reservations')
        ? [{ id: '15', site_id: '4', vehicle_id: 'vehicle-1', status: 'completed' }]
        : []
    })
  };
  const repository = createReservationRepository(db);
  await assert.rejects(
    repository.transition({ id: '15', status: 'checked_in', siteId: '4' }),
    (error) => error.code === 'ERP_CONFLICT'
  );
});
