import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { after, before, test } from 'node:test';
import {
  importParkingSnapshot,
  PARKING_IMPORT_TABLES,
  readParkingSnapshot,
  validateParkingSnapshotOwnership,
  validateImportMapping
} from '../src/cli/parking-importer.js';

let directory;
let sourcePath;
let mappingPath;

before(async () => {
  directory = await mkdtemp(join(tmpdir(), 'erp-parking-import-'));
  sourcePath = join(directory, 'parking.sqlite');
  mappingPath = join(directory, 'mapping.json');
  const source = new DatabaseSync(sourcePath);
  source.exec(`
    CREATE TABLE tenants (
      id INTEGER PRIMARY KEY, name TEXT NOT NULL, is_headquarters INTEGER NOT NULL,
      is_active INTEGER NOT NULL, created_at TEXT NOT NULL
    );
    CREATE TABLE users (
      id INTEGER PRIMARY KEY, username TEXT NOT NULL, role TEXT NOT NULL,
      tenant_id INTEGER NOT NULL, password_hash TEXT NOT NULL
    );
  `);
  for (const definition of PARKING_IMPORT_TABLES) {
    const columns = [...definition.columns];
    if (definition.tenant || definition.tenantColumn) {
      const tenantColumn = definition.tenantColumn || 'tenant_id';
      if (!columns.includes(tenantColumn)) columns.push(tenantColumn);
    }
    const declarations = columns.map((column) => {
      if (['id', 'vehicle_id', 'status_id', 'field_id', 'damage_type_id',
        'parking_lot_id', 'destination_lot_id', 'from_lot_id', 'to_lot_id',
        'store_id', 'tenant_id', 'display_order', 'area_height', 'area_width',
        'capacity', 'is_active', 'unwashed', 'no_fuel', 'needs_repair',
        'completed'].includes(column)) return `${column} INTEGER`;
      if (['position_x', 'position_y', 'minutes', 'km', 'x', 'y',
        'world_x', 'world_y', 'world_z', 'world_nx', 'world_ny', 'world_nz']
        .includes(column)) return `${column} REAL`;
      return `${column} TEXT`;
    });
    source.exec(`CREATE TABLE ${definition.source} (${declarations.join(', ')})`);
  }
  source.prepare(
    'INSERT INTO tenants (id, name, is_headquarters, is_active, created_at) VALUES (?, ?, ?, ?, ?)'
  ).run(1, '本店', 1, 1, '2026-01-01 00:00:00');
  source.prepare(
    'INSERT INTO users (id, username, role, tenant_id, password_hash) VALUES (?, ?, ?, ?, ?)'
  ).run(7, 'old-admin', 'admin', 1, 'legacy-hash-must-not-be-imported');
  source.prepare(`
    INSERT INTO vehicles
      (id, external_id, plate, vehicle_type, parking_lot_id, position_x, position_y,
       unwashed, no_fuel, needs_repair, options, notes, tenant_id)
    VALUES (11, ?, '品川500あ1234', 'A-1', NULL, 0.25, 0.75, 1, 0, 0, '[]', 'memo', 1)
  `).run('erp-vehicle-uuid');
  source.prepare(`
    INSERT INTO vehicles
      (id, external_id, plate, vehicle_type, parking_lot_id, position_x, position_y,
       unwashed, no_fuel, needs_repair, options, notes, tenant_id)
    VALUES (12, ?, '品川500あ5678', 'B', NULL, 0.5, 0.5, 0, 1, 0, '[]', '', 1)
  `).run('legacy-external-id');
  source.close();
  await writeFile(mappingPath, JSON.stringify({
    tenants: { '1': '3' },
    accounts: { '1:7': '20' }
  }));
});

after(async () => {
  await rm(directory, { recursive: true, force: true });
});

function databaseQuery({ sites = [], accounts = [], vehicles = [] } = {}) {
  return async (sql, params = []) => {
    if (sql.includes('WEIGHT_STRING')) {
      return params.filter((_, index) => index % 2 === 0).map((rowIndex, index) => {
        const externalId = String(params[index * 2 + 1]);
        const collationKey = externalId.normalize('NFD')
          .replace(/\p{Diacritic}/gu, '').toLocaleLowerCase('en-US').trim();
        return { row_index: rowIndex, collation_key: Buffer.from(collationKey).toString('hex') };
      });
    }
    if (sql === 'SELECT id, status FROM sites') return sites;
    if (sql === 'SELECT id, site_id, status FROM accounts') return accounts;
    if (sql === 'SELECT id, site_id FROM vehicles') return vehicles;
    if (sql.startsWith('SELECT source_digest FROM parking_import_runs')) return [];
    if (sql.startsWith('SELECT COUNT(*) AS count FROM `parking_')) return [{ count: 0 }];
    throw new Error(`Unexpected query: ${sql}`);
  };
}

function connectionAdapter(query) {
  return { execute: async (sql, params) => [await query(sql, params)] };
}

function mysqlMock(query) {
  const data = new Map();
  const runs = new Set();
  let transaction = false;
  let commits = 0;
  let rollbacks = 0;
  return {
    data,
    get commits() { return commits; },
    get rollbacks() { return rollbacks; },
    async beginTransaction() { transaction = true; },
    async commit() { transaction = false; commits += 1; },
    async rollback() { transaction = false; rollbacks += 1; },
    async execute(sql, params = []) {
      if (sql.includes('WEIGHT_STRING')) return [await query(sql, params)];
      if (sql.startsWith('SELECT id, status FROM sites') ||
          sql.startsWith('SELECT id, site_id, status FROM accounts') ||
          sql.startsWith('SELECT id, site_id FROM vehicles')) return [await query(sql, params)];
      if (sql.startsWith('SELECT source_digest FROM parking_import_runs')) {
        return [[...(runs.has(`${params[0]}:${params[1]}`) ? [{ source_digest: params[0] }] : [])]];
      }
      if (sql.startsWith('SELECT COUNT(*) AS count FROM ')) {
        const table = sql.match(/FROM `([a-z_]+)`/)[1];
        return [[{ count: data.get(table)?.length || 0 }]];
      }
      if (sql.startsWith('INSERT INTO ')) {
        const [, table, columnList] = sql.match(/INSERT INTO `?([a-z_]+)`?\s+\(([^)]+)\)/);
        const columns = columnList.split(',').map((column) => column.trim().replaceAll('`', ''));
        const row = Object.fromEntries(columns.map((column, index) => [column, params[index]]));
        if (!data.has(table)) data.set(table, []);
        data.get(table).push(row);
        if (table === 'parking_import_runs') runs.add(`${params[0]}:${params[1]}`);
        return [{ affectedRows: 1 }];
      }
      if (sql.startsWith('SELECT id FROM ')) {
        const table = sql.match(/FROM `([a-z_]+)`/)[1];
        const ids = new Set(params.map(String));
        return [[...(data.get(table) || []).filter((row) => ids.has(String(row.id)))
          .map((row) => ({ id: row.id }))]];
      }
      throw new Error(`Unexpected MySQL mock query: ${sql}; in transaction=${transaction}`);
    }
  };
}

test('preflight requires explicit tenant and ERP-account mappings at the same site', async () => {
  const snapshot = readParkingSnapshot(sourcePath);
  const query = databaseQuery({
    sites: [{ id: '3', status: 'active' }],
    accounts: [{ id: '20', site_id: '3', status: 'active' }],
    vehicles: [{ id: 'erp-vehicle-uuid', site_id: '3' }]
  });
  const maps = await validateImportMapping({
    snapshot,
    mapping: { tenants: { '1': '3' }, accounts: { '1:7': '20' } },
    query
  });
  assert.equal(maps.tenantSites.get('1'), '3');
  assert.equal(maps.accountMap.get('1:7'), '20');
  assert.equal(maps.vehicleMap.get('1:11'), 'erp-vehicle-uuid');
  assert.equal(maps.vehicleMap.has('1:12'), false);
  await assert.rejects(
    validateImportMapping({
      snapshot,
      mapping: { tenants: { '1': '3' }, accounts: { '1:7': '21' } },
      query: databaseQuery({
        sites: [{ id: '3', status: 'active' }],
        accounts: [{ id: '21', site_id: '4', status: 'active' }],
        vehicles: []
      })
    }),
    /must be active and belong to mapped site 3/
  );
});

test('preflight rejects reused ERP vehicle mappings and reports unmatched vehicles', async () => {
  const snapshot = readParkingSnapshot(sourcePath);
  const mapping = {
    tenants: { '1': '3' },
    accounts: { '1:7': '20' },
    vehicles: { '1:11': 'erp-vehicle-uuid' }
  };
  const query = databaseQuery({
    sites: [{ id: '3', status: 'active' }],
    accounts: [{ id: '20', site_id: '3', status: 'active' }],
    vehicles: [{ id: 'erp-vehicle-uuid', site_id: '3' }]
  });
  const report = await importParkingSnapshot({
    sourcePath,
    mappingPath,
    connection: connectionAdapter(query),
    backupDirectory: directory,
    dryRun: true
  });
  assert.equal(report.mode, 'dry-run');
  assert.equal(report.counts.vehicles, 2);
  assert.equal(report.unmappedVehicles, 1);
  assert.match(report.sourceDigest, /^[a-f0-9]{64}$/);

  await writeFile(mappingPath, JSON.stringify({
    ...mapping,
    vehicles: { '1:11': 'erp-vehicle-uuid', '1:12': 'erp-vehicle-uuid' }
  }));
  await assert.rejects(validateImportMapping({
    snapshot,
    mapping: {
      tenants: { '1': '3' },
      accounts: { '1:7': '20' },
      vehicles: { '1:11': 'erp-vehicle-uuid', '1:12': 'erp-vehicle-uuid' }
    },
    query
  }), /mapped more than once/);
});

test('preflight rejects duplicate external vehicle IDs at the mapped site', async () => {
  const snapshot = readParkingSnapshot(sourcePath);
  const duplicateSnapshot = {
    ...snapshot,
    tables: snapshot.tables.map((table) => ({
      ...table,
      rows: table.rows.map((row) => ({ ...row }))
    }))
  };
  const vehicles = duplicateSnapshot.tables.find((table) => table.source === 'vehicles').rows;
  vehicles[0].external_id = 'Café-001';
  vehicles[1].external_id = 'CAFE-001';

  await assert.rejects(validateImportMapping({
    snapshot: duplicateSnapshot,
    mapping: { tenants: { '1': '3' }, accounts: { '1:7': '20' } },
    query: databaseQuery({
      sites: [{ id: '3', status: 'active' }],
      accounts: [{ id: '20', site_id: '3', status: 'active' }],
      vehicles: []
    })
  }), /Duplicate external_id in vehicles at ERP site 3/);
});

test('preflight rejects external IDs beyond the destination column limit', async () => {
  const snapshot = readParkingSnapshot(sourcePath);
  const oversizedSnapshot = {
    ...snapshot,
    tables: snapshot.tables.map((table) => ({
      ...table,
      rows: table.rows.map((row) => ({ ...row }))
    }))
  };
  oversizedSnapshot.tables.find((table) => table.source === 'vehicles').rows[0].external_id =
    'x'.repeat(256);

  await assert.rejects(validateImportMapping({
    snapshot: oversizedSnapshot,
    mapping: { tenants: { '1': '3' }, accounts: { '1:7': '20' } },
    query: databaseQuery({
      sites: [{ id: '3', status: 'active' }],
      accounts: [{ id: '20', site_id: '3', status: 'active' }],
      vehicles: []
    })
  }), /exceeds the MySQL 255-character limit/);
});

test('source preflight rejects cross-tenant vehicle-to-location references', () => {
  const snapshot = readParkingSnapshot(sourcePath);
  const copiedSnapshot = {
    ...snapshot,
    tables: snapshot.tables.map((table) => ({
      ...table,
      rows: table.rows.map((row) => ({ ...row }))
    }))
  };
  copiedSnapshot.tables.find((table) => table.source === 'parking_lots').rows.push({
    id: 51, tenant_id: 2
  });
  copiedSnapshot.tables.find((table) => table.source === 'vehicles').rows[0].parking_lot_id = 51;
  assert.throws(() => validateParkingSnapshotOwnership(copiedSnapshot), /different-tenant parking_lots/);
});

test('dry-run leaves the SQLite source and legacy password records untouched', async () => {
  await writeFile(mappingPath, JSON.stringify({
    tenants: { '1': '3' },
    accounts: { '1:7': '20' }
  }));
  const before = readParkingSnapshot(sourcePath);
  const sourceBefore = await readFile(sourcePath);
  const report = await importParkingSnapshot({
    sourcePath,
    mappingPath,
    connection: connectionAdapter(databaseQuery({
        sites: [{ id: '3', status: 'active' }],
        accounts: [{ id: '20', site_id: '3', status: 'active' }],
        vehicles: []
      })),
    backupDirectory: directory,
    dryRun: true
  });
  assert.equal(report.unmappedVehicles, 2);
  assert.deepEqual(await readFile(sourcePath), sourceBefore);
  assert.equal(readParkingSnapshot(sourcePath).contentDigest, before.contentDigest);
  const source = new DatabaseSync(sourcePath, { readOnly: true });
  assert.equal(source.prepare('SELECT password_hash FROM users WHERE id = 7').get().password_hash,
    'legacy-hash-must-not-be-imported');
  source.close();
});

test('apply backs up, imports, verifies IDs, omits passwords, and is idempotent', async () => {
  await writeFile(mappingPath, JSON.stringify({
    tenants: { '1': '3' },
    accounts: { '1:7': '20' },
    vehicles: { '1:11': 'erp-vehicle-uuid' }
  }));
  const query = databaseQuery({
    sites: [{ id: '3', status: 'active' }],
    accounts: [{ id: '20', site_id: '3', status: 'active' }],
    vehicles: [{ id: 'erp-vehicle-uuid', site_id: '3' }]
  });
  const connection = mysqlMock(query);
  const report = await importParkingSnapshot({
    sourcePath,
    mappingPath,
    connection,
    backupDirectory: directory,
    dryRun: false
  });
  assert.equal(report.mode, 'imported');
  assert.equal(connection.commits, 1);
  assert.equal(connection.rollbacks, 0);
  assert.equal(connection.data.get('parking_vehicles').length, 2);
  assert.equal(connection.data.get('parking_vehicles')[0].erp_vehicle_id, 'erp-vehicle-uuid');
  assert.equal(connection.data.get('parking_vehicles')[1].erp_vehicle_id, null);
  assert.equal(connection.data.get('parking_legacy_tenants')[0].site_id, '3');
  assert.equal(connection.data.get('parking_legacy_users')[0].account_id, '20');
  assert.equal(Object.hasOwn(connection.data.get('parking_legacy_users')[0], 'password_hash'), false);
  assert.equal(connection.data.get('parking_import_runs')[0].source_digest, report.sourceDigest);
  assert.equal(readParkingSnapshot(report.backupPath).contentDigest, report.sourceDigest);

  const repeated = await importParkingSnapshot({
    sourcePath,
    mappingPath,
    connection,
    backupDirectory: directory,
    dryRun: false
  });
  assert.equal(repeated.mode, 'already-imported');
  assert.equal(connection.commits, 1);
});

test('apply rolls back ERP writes when a source row cannot be imported', async () => {
  await writeFile(mappingPath, JSON.stringify({
    tenants: { '1': '3' },
    accounts: { '1:7': '20' }
  }));
  const connection = mysqlMock(databaseQuery({
    sites: [{ id: '3', status: 'active' }],
    accounts: [{ id: '20', site_id: '3', status: 'active' }],
    vehicles: []
  }));
  const execute = connection.execute.bind(connection);
  connection.execute = async (sql, params) => {
    if (sql.startsWith('INSERT INTO') && sql.includes('parking_vehicles')) {
      throw new Error('simulated target write failure');
    }
    return execute(sql, params);
  };
  await assert.rejects(importParkingSnapshot({
    sourcePath,
    mappingPath,
    connection,
    backupDirectory: directory,
    dryRun: false
  }), /simulated target write failure/);
  assert.equal(connection.commits, 0);
  assert.equal(connection.rollbacks, 1);
});
