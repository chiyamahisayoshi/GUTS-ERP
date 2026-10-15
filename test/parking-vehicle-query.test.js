import test from 'node:test';
import assert from 'node:assert/strict';
import { createVehicleRepository } from '../src/repositories/vehicle-repository.js';

test('ERP-to-parking sync reads identity, site and vehicle labels across active sites', async () => {
  let query;
  const repository = createVehicleRepository({
    query: async (sql) => {
      query = sql;
      return [{
        id: 'uuid-1', registration_number: '品川500あ1234',
        make: 'Toyota', model: 'Aqua', site_id: '3'
      }];
    }
  });

  const result = await repository.listForParkingSync();

  assert.deepEqual(result, [{
    id: 'uuid-1', registration_number: '品川500あ1234',
    make: 'Toyota', model: 'Aqua', site_id: '3'
  }]);
  assert.doesNotMatch(query, /s\.type/);
  assert.match(query, /s\.status = 'active'/);
  assert.match(query, /v\.status <> 'retired'/);
  assert.doesNotMatch(query, /LIMIT|OFFSET/);
});
