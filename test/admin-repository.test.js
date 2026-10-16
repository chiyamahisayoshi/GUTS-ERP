import test from 'node:test';
import assert from 'node:assert/strict';
import { createAdminRepository } from '../src/repositories/admin-repository.js';

test('new ERP stores receive the legacy parking class catalog defaults', async () => {
  const createdClasses = [];
  const db = {
    transaction: async (callback) => callback({
      query: async (sql, params = []) => {
        if (sql.includes('INSERT INTO sites')) return { insertId: 42 };
        if (sql.includes('INSERT INTO parking_vehicle_classes')) {
          createdClasses.push(params);
        }
        return {};
      }
    })
  };

  await createAdminRepository(db).createSite({ code: 'SHOP', name: 'Shop', type: 'direct' });
  assert.deepEqual(createdClasses.map(([, name]) => name), [
    'A-1', 'A-2', 'A-2P', 'B', 'B軽トラ', 'C-1', 'C-2', 'D', 'H-1', 'H-2', 'その他'
  ]);
  assert.ok(createdClasses.every(([siteId]) => siteId === 42));
});
