import test from 'node:test';
import assert from 'node:assert/strict';
import { createVehicleRepository } from '../src/repositories/vehicle-repository.js';

test('parking sync reads every non-retired vehicle at active direct sites', async () => {
  let query;
  const repository = createVehicleRepository({
    query: async (sql) => {
      query = sql;
      return [{ id: 'uuid-1', registration_number: '品川500あ1234' }];
    }
  });

  const result = await repository.listForParkingSync();

  assert.deepEqual(result, [{ id: 'uuid-1', registration_number: '品川500あ1234' }]);
  assert.match(query, /s\.type = 'direct'/);
  assert.match(query, /s\.status = 'active'/);
  assert.match(query, /v\.status <> 'retired'/);
  assert.doesNotMatch(query, /LIMIT|OFFSET/);
});
