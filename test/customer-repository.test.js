import test from 'node:test';
import assert from 'node:assert/strict';
import { createCustomerRepository } from '../src/repositories/customer-repository.js';

test('customer search is site-scoped and normalizes Japanese names and phone numbers', async () => {
  const calls = [];
  const repository = createCustomerRepository({
    query: async (sql, params) => {
      calls.push({ sql, params });
      return [];
    }
  });
  await repository.list({ siteId: '4', search: 'ﾔﾏﾀﾞ', limit: 8, offset: 0 });
  const { sql, params } = calls[0];
  assert.match(sql, /WHERE site_id = \?/);
  assert.equal(params[0], '4');
  assert.ok(params.includes('%ヤマダ%'));
  assert.ok(params.includes('%やまだ%'));
  assert.deepEqual(params.slice(-2), [8, 0]);
  await repository.list({ siteId: '4', search: '山田', limit: 8, offset: 0 });
  assert.ok(calls[1].params.includes('%山田%'));
  await repository.list({ siteId: '4', search: '090-1234-5678', limit: 8, offset: 0 });
  assert.match(calls[2].sql, /REGEXP_REPLACE\(phone/);
  assert.ok(calls[2].params.includes('%09012345678%'));
});

test('customer create and update bind the selected site and optional profile fields', async () => {
  const calls = [];
  const repository = createCustomerRepository({
    query: async (sql, params) => {
      calls.push({ sql, params });
      if (sql.startsWith('INSERT INTO customers')) return { insertId: 71 };
      if (sql.startsWith('UPDATE customers')) return { affectedRows: 0 };
      return [{
        id: '71', site_id: '4', name: 'Guest', phone: '09012345678',
        address: 'Tokyo', email: null
      }];
    }
  });
  const created = await repository.create({
    siteId: '4', name: 'Guest', nameKana: 'ゲスト', phone: '09012345678',
    email: null, birthDate: null, address: 'Tokyo',
    emergencyContactName: null, emergencyContactRelationship: null,
    emergencyContactPhone: null, workplaceSchool: null
  });
  const updated = await repository.update({
    siteId: '4', customerId: '71', name: 'Guest', nameKana: null, phone: '09012345678',
    email: null, birthDate: null, address: 'Tokyo',
    emergencyContactName: null, emergencyContactRelationship: null,
    emergencyContactPhone: null, workplaceSchool: null
  });
  assert.equal(created.id, '71');
  assert.equal(updated.site_id, '4');
  assert.match(calls[2].sql, /WHERE id = \? AND site_id = \?/);
  assert.deepEqual(calls[2].params.slice(-2), ['71', '4']);
});
