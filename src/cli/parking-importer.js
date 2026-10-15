import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { basename, resolve } from 'node:path';
import { DatabaseSync, backup } from 'node:sqlite';

const TABLES = [
  {
    source: 'parking_lots',
    target: 'parking_lots',
    columns: ['id', 'name', 'display_order', 'area_height', 'area_width',
      'navigation_url', 'markings', 'capacity', 'is_active', 'class_priority'],
    tenant: true
  },
  {
    source: 'vehicles',
    target: 'parking_vehicles',
    columns: ['id', 'external_id', 'plate', 'vehicle_type', 'parking_lot_id',
      'position_x', 'position_y', 'unwashed', 'no_fuel', 'needs_repair', 'options', 'notes'],
    tenant: true,
    vehicle: true
  },
  {
    source: 'vehicle_statuses',
    target: 'parking_vehicle_statuses',
    columns: ['id', 'key', 'name', 'icon'],
    tenant: true
  },
  {
    source: 'vehicle_status_assignments',
    target: 'parking_vehicle_status_assignments',
    columns: ['vehicle_id', 'status_id']
  },
  {
    source: 'vehicle_assessment_fields',
    target: 'parking_assessment_fields',
    columns: ['id', 'built_in_key', 'group_key', 'name', 'field_type', 'suffix', 'display_order'],
    tenant: true
  },
  {
    source: 'vehicle_assessment_values',
    target: 'parking_assessment_values',
    columns: ['vehicle_id', 'field_id', 'value']
  },
  {
    source: 'vehicle_damage_types',
    target: 'parking_damage_types',
    columns: ['id', 'built_in_key', 'name', 'icon', 'color'],
    tenant: true
  },
  {
    source: 'vehicle_damage_marks',
    target: 'parking_damage_marks',
    columns: ['id', 'vehicle_id', 'damage_type_id', 'x', 'y', 'world_x', 'world_y', 'world_z',
      'world_nx', 'world_ny', 'world_nz']
  },
  {
    source: 'vehicle_option_types',
    target: 'parking_vehicle_option_types',
    columns: ['id', 'name', 'built_in_key'],
    tenant: true
  },
  {
    source: 'vehicle_option_suppressions',
    target: 'parking_vehicle_option_suppressions',
    columns: ['tenant_id', 'built_in_key'],
    tenantColumn: 'tenant_id',
    outputTenantColumn: 'site_id',
    omitTenantColumn: true
  },
  {
    source: 'jobs',
    target: 'parking_jobs',
    columns: ['id', 'vehicle_id', 'destination_lot_id', 'scheduled_at', 'completed', 'completed_at'],
    tenant: true
  },
  {
    source: 'vehicle_classes',
    target: 'parking_vehicle_classes',
    columns: ['id', 'name', 'color', 'display_order'],
    tenant: true
  },
  {
    source: 'stores',
    target: 'parking_stores',
    columns: ['id', 'name'],
    tenant: true
  },
  {
    source: 'lot_distances',
    target: 'parking_lot_distances',
    columns: ['from_lot_id', 'to_lot_id', 'minutes', 'km'],
    tenant: true
  },
  {
    source: 'store_lot_distances',
    target: 'parking_store_lot_distances',
    columns: ['store_id', 'lot_id', 'minutes', 'km'],
    tenant: true
  }
];

const hash = (value) => createHash('sha256').update(value).digest('hex');
const quoteIdentifier = (identifier) => `\`${identifier.replaceAll('`', '``')}\``;
const stableJson = (value) => JSON.stringify(value, (_key, item) =>
  item && typeof item === 'object' && !Array.isArray(item)
    ? Object.fromEntries(Object.entries(item).sort(([a], [b]) => a.localeCompare(b)))
    : item);

function fail(message) {
  throw new Error(message);
}

function requireMappedId(value, label) {
  if (!/^[1-9]\d*$/.test(String(value))) fail(`Invalid ${label}: ${value}`);
  return String(value);
}

export function readParkingSnapshot(sourcePath) {
  const source = new DatabaseSync(resolve(sourcePath), { readOnly: true });
  try {
    const integrity = source.prepare('PRAGMA integrity_check').get().integrity_check;
    if (integrity !== 'ok') fail(`SQLite integrity check failed: ${integrity}`);
    if (source.prepare('PRAGMA foreign_key_check').all().length) {
      fail('SQLite foreign-key check failed; repair or reconcile the source before importing.');
    }

    const tenantRows = source.prepare(
      'SELECT id, name, is_headquarters, is_active, created_at FROM tenants ORDER BY id'
    ).all();
    const users = source.prepare(
      'SELECT id, username, role, tenant_id FROM users ORDER BY tenant_id, id'
    ).all();
    const tables = TABLES.map((definition) => {
      const tenantColumn = definition.tenantColumn || 'tenant_id';
      const selectedColumns = [...definition.columns];
      if ((definition.tenant || definition.tenantColumn) && !selectedColumns.includes(tenantColumn)) {
        selectedColumns.push(tenantColumn);
      }
      const columns = selectedColumns.join(', ');
      const order = definition.tenant || definition.tenantColumn
        ? ` ORDER BY ${tenantColumn}, ${definition.columns[0]}`
        : ` ORDER BY ${definition.columns.join(', ')}`;
      return { ...definition, rows: source.prepare(`SELECT ${columns} FROM ${definition.source}${order}`).all() };
    });

    const counts = Object.fromEntries(tables.map(({ source: name, rows }) => [name, rows.length]));
    const tableDigests = Object.fromEntries(tables.map(({ source: name, rows }) =>
      [name, hash(stableJson(rows))]));
    const contentDigest = hash(stableJson({ tenants: tenantRows, users, tableDigests }));
    const snapshot = { tenantRows, users, tables, counts, tableDigests, contentDigest };
    validateParkingSnapshotOwnership(snapshot);
    return snapshot;
  } finally {
    source.close();
  }
}

export function validateParkingSnapshotOwnership(snapshot) {
  const tables = new Map(snapshot.tables.map((table) => [table.source, table.rows]));
  const indexed = new Map(['parking_lots', 'vehicles', 'vehicle_statuses',
    'vehicle_assessment_fields', 'vehicle_damage_types', 'stores'].map((name) => [
    name,
    new Map((tables.get(name) || []).map((row) => [String(row.id), row]))
  ]));
  const sameTenant = (source, sourceField, target, targetField, targetId, sourceTenant) => {
    if (targetId === null || targetId === undefined) return;
    const referenced = indexed.get(target)?.get(String(targetId));
    if (!referenced || String(referenced[targetField]) !== String(sourceTenant)) {
      fail(`Legacy ${source} row ${sourceField} refers to a missing or different-tenant ${target} row.`);
    }
  };
  for (const vehicle of tables.get('vehicles') || []) {
    sameTenant('vehicles', vehicle.id, 'parking_lots', 'tenant_id',
      vehicle.parking_lot_id, vehicle.tenant_id);
  }
  for (const row of tables.get('vehicle_status_assignments') || []) {
    sameTenant('vehicle_status_assignments', row.vehicle_id, 'vehicles', 'tenant_id',
      row.vehicle_id, indexed.get('vehicles').get(String(row.vehicle_id))?.tenant_id);
    sameTenant('vehicle_status_assignments', row.vehicle_id, 'vehicle_statuses', 'tenant_id',
      row.status_id, indexed.get('vehicles').get(String(row.vehicle_id))?.tenant_id);
  }
  for (const row of tables.get('vehicle_assessment_values') || []) {
    const vehicle = indexed.get('vehicles').get(String(row.vehicle_id));
    sameTenant('vehicle_assessment_values', row.vehicle_id, 'vehicle_assessment_fields', 'tenant_id',
      row.field_id, vehicle?.tenant_id);
    if (!vehicle) fail(`Legacy assessment value refers to missing vehicle ${row.vehicle_id}.`);
  }
  for (const row of tables.get('vehicle_damage_marks') || []) {
    const vehicle = indexed.get('vehicles').get(String(row.vehicle_id));
    sameTenant('vehicle_damage_marks', row.vehicle_id, 'vehicle_damage_types', 'tenant_id',
      row.damage_type_id, vehicle?.tenant_id);
    if (!vehicle) fail(`Legacy damage marker refers to missing vehicle ${row.vehicle_id}.`);
  }
  for (const row of tables.get('jobs') || []) {
    sameTenant('jobs', row.id, 'vehicles', 'tenant_id', row.vehicle_id, row.tenant_id);
    sameTenant('jobs', row.id, 'parking_lots', 'tenant_id', row.destination_lot_id, row.tenant_id);
  }
  for (const row of tables.get('lot_distances') || []) {
    sameTenant('lot_distances', row.from_lot_id, 'parking_lots', 'tenant_id',
      row.from_lot_id, row.tenant_id);
    sameTenant('lot_distances', row.to_lot_id, 'parking_lots', 'tenant_id',
      row.to_lot_id, row.tenant_id);
  }
  for (const row of tables.get('store_lot_distances') || []) {
    sameTenant('store_lot_distances', row.store_id, 'stores', 'tenant_id',
      row.store_id, row.tenant_id);
    sameTenant('store_lot_distances', row.lot_id, 'parking_lots', 'tenant_id',
      row.lot_id, row.tenant_id);
  }
}

export async function validateImportMapping({ snapshot, mapping, query }) {
  if (!mapping || typeof mapping !== 'object' || Array.isArray(mapping) ||
      !mapping.tenants || typeof mapping.tenants !== 'object' || Array.isArray(mapping.tenants) ||
      !mapping.accounts || typeof mapping.accounts !== 'object' || Array.isArray(mapping.accounts) ||
      (mapping.vehicles !== undefined &&
        (!mapping.vehicles || typeof mapping.vehicles !== 'object' || Array.isArray(mapping.vehicles)))) {
    fail('Mapping JSON must contain tenants and accounts objects.');
  }
  const siteRows = await query('SELECT id, status FROM sites');
  const sites = new Map(siteRows.map((row) => [String(row.id), row]));
  const tenantSites = new Map();
  const mappedSites = new Set();
  for (const { id } of snapshot.tenantRows) {
    const siteId = requireMappedId(mapping.tenants[String(id)], `site mapping for legacy tenant ${id}`);
    const site = sites.get(siteId);
    if (!site || site.status !== 'active') fail(`ERP site ${siteId} for legacy tenant ${id} is missing or inactive.`);
    if (mappedSites.has(siteId)) fail(`ERP site ${siteId} is mapped from more than one legacy tenant.`);
    mappedSites.add(siteId);
    tenantSites.set(String(id), siteId);
  }
  for (const id of Object.keys(mapping.tenants)) {
    if (!tenantSites.has(id)) fail(`Tenant mapping refers to unknown legacy tenant ${id}.`);
  }

  const accountRows = await query('SELECT id, site_id, status FROM accounts');
  const accounts = new Map(accountRows.map((row) => [String(row.id), row]));
  const accountMap = new Map();
  const mappedAccounts = new Set();
  for (const user of snapshot.users) {
    const key = `${user.tenant_id}:${user.id}`;
    const accountId = requireMappedId(mapping.accounts[key], `ERP account mapping for legacy user ${key}`);
    const account = accounts.get(accountId);
    const expectedSite = tenantSites.get(String(user.tenant_id));
    if (!account || String(account.site_id) !== expectedSite || account.status !== 'active') {
      fail(`ERP account ${accountId} for legacy user ${key} must be active and belong to mapped site ${expectedSite}.`);
    }
    if (mappedAccounts.has(accountId)) fail(`ERP account ${accountId} is mapped from more than one legacy user.`);
    mappedAccounts.add(accountId);
    accountMap.set(key, accountId);
  }
  for (const key of Object.keys(mapping.accounts)) {
    if (!accountMap.has(key)) fail(`Account mapping refers to unknown legacy user ${key}.`);
  }

  const requestedVehicleMap = mapping.vehicles || {};
  const vehicleRows = await query('SELECT id, site_id FROM vehicles');
  const erpVehicles = new Map(vehicleRows.map((row) => [String(row.id), row]));
  const vehicleMap = new Map();
  const mappedVehicles = new Set();
  const vehicleSourceRows = snapshot.tables.find((table) => table.source === 'vehicles').rows;
  for (const vehicle of vehicleSourceRows) {
    const key = `${vehicle.tenant_id}:${vehicle.id}`;
    const candidate = requestedVehicleMap[key] ?? (
      typeof vehicle.external_id === 'string' && erpVehicles.has(vehicle.external_id)
        ? vehicle.external_id
        : undefined
    );
    if (candidate === undefined || candidate === null || candidate === '') continue;
    const erpId = String(candidate);
    const erpVehicle = erpVehicles.get(erpId);
    const expectedSite = tenantSites.get(String(vehicle.tenant_id));
    if (!erpVehicle || String(erpVehicle.site_id) !== expectedSite) {
      fail(`ERP vehicle ${erpId} for legacy vehicle ${key} must exist at mapped site ${expectedSite}.`);
    }
    if (mappedVehicles.has(erpId)) fail(`ERP vehicle ${erpId} is mapped more than once.`);
    mappedVehicles.add(erpId);
    vehicleMap.set(key, erpId);
  }

  for (const key of Object.keys(requestedVehicleMap)) {
    if (!vehicleSourceRows.some((vehicle) => `${vehicle.tenant_id}:${vehicle.id}` === key)) {
      fail(`Vehicle mapping refers to unknown legacy vehicle ${key}.`);
    }
  }
  const uniqueFields = new Map([
    ['parking_lots', ['name']],
    ['vehicle_statuses', ['key', 'name']],
    ['vehicle_damage_types', ['built_in_key', 'name']],
    ['vehicle_option_types', ['name', 'built_in_key']],
    ['vehicle_classes', ['name']],
    ['stores', ['name']]
  ]);
  const allTables = new Map(snapshot.tables.map((table) => [table.source, table.rows]));
  for (const [tableName, fields] of uniqueFields) {
    const seen = new Set();
    for (const row of allTables.get(tableName) || []) {
      const siteId = tenantSites.get(String(row.tenant_id));
      for (const field of fields) {
        if (row[field] === null || row[field] === undefined) continue;
        const key = `${siteId}:${field}:${String(row[field]).normalize('NFKC').toLocaleLowerCase('en-US')}`;
        if (seen.has(key)) fail(`Duplicate ${field} value in ${tableName} at ERP site ${siteId}.`);
        seen.add(key);
      }
    }
  }
  const externalVehicleIds = new Set();
  for (const vehicle of vehicleSourceRows) {
    if (vehicle.external_id === null || vehicle.external_id === undefined) continue;
    const siteId = tenantSites.get(String(vehicle.tenant_id));
    const key = `${siteId}:${String(vehicle.external_id).normalize('NFKC').toLocaleLowerCase('en-US')}`;
    if (externalVehicleIds.has(key)) fail(`Duplicate external_id in vehicles at ERP site ${siteId}.`);
    externalVehicleIds.add(key);
  }
  return { tenantSites, accountMap, vehicleMap };
}

export async function importParkingSnapshot({
  sourcePath, mappingPath, connection, backupDirectory, dryRun = true
}) {
  let snapshot = readParkingSnapshot(sourcePath);
  const mapping = JSON.parse(await readFile(mappingPath, 'utf8'));
  const maps = await validateImportMapping({
    snapshot,
    mapping,
    query: async (sql) => {
      const [rows] = await connection.execute(sql);
      return rows;
    }
  });
  const mappingDigest = hash(stableJson(mapping));
  const idMap = {
    tenants: Object.fromEntries(maps.tenantSites),
    users: Object.fromEntries(maps.accountMap),
    vehicles: Object.fromEntries(maps.vehicleMap)
  };
  const idMapDigest = hash(stableJson(idMap));
  const report = {
    mode: dryRun ? 'dry-run' : 'apply',
    source: basename(resolve(sourcePath)),
    sourceDigest: snapshot.contentDigest,
    mappingDigest,
    idMapDigest,
    tenantMappings: [...maps.tenantSites].map(([legacyTenantId, siteId]) => ({ legacyTenantId, siteId })),
    accountMappings: [...maps.accountMap].map(([legacyUser, accountId]) => ({ legacyUser, accountId })),
    vehicleMappings: [...maps.vehicleMap].map(([legacyVehicle, vehicleId]) => ({ legacyVehicle, vehicleId })),
    counts: snapshot.counts,
    unmappedVehicles: snapshot.tables.find((table) => table.source === 'vehicles').rows
      .filter((vehicle) => !maps.vehicleMap.has(`${vehicle.tenant_id}:${vehicle.id}`)).length
  };
  const existing = await connection.execute(
    `SELECT source_digest FROM parking_import_runs
      WHERE source_digest = ? AND mapping_digest = ?`,
    [snapshot.contentDigest, mappingDigest]
  );
  if (existing[0].length) return { ...report, mode: 'already-imported', skipped: true };

  const destinationTables = [...new Set([
    ...snapshot.tables.map((table) => table.target),
    'parking_legacy_tenants',
    'parking_legacy_users'
  ])];
  for (const table of destinationTables) {
    const [rows] = await connection.execute(
      `SELECT COUNT(*) AS count FROM ${quoteIdentifier(table)}`
    );
    if (Number(rows[0]?.count) !== 0) {
      fail(`Destination table ${table} is not empty. Refusing to mix or overwrite parking data.`);
    }
  }
  if (dryRun) return report;

  const source = new DatabaseSync(resolve(sourcePath), { readOnly: true });
  const backupPath = resolve(backupDirectory,
    `parking-before-import-${new Date().toISOString().replace(/[:.]/g, '-')}.sqlite`);
  try {
    await backup(source, backupPath);
  } finally {
    source.close();
  }
  const backedUpSnapshot = readParkingSnapshot(backupPath);
  if (backedUpSnapshot.contentDigest !== snapshot.contentDigest) {
    fail('SQLite source changed during backup; no ERP data was imported. Retry with a quiescent source database.');
  }
  snapshot = backedUpSnapshot;

  await connection.beginTransaction();
  try {
    for (const tenant of snapshot.tenantRows) {
      const [result] = await connection.execute(
        `INSERT INTO parking_legacy_tenants
          (legacy_tenant_id, site_id, legacy_name, is_headquarters, is_active, legacy_created_at)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [tenant.id, maps.tenantSites.get(String(tenant.id)), tenant.name,
          tenant.is_headquarters, tenant.is_active, tenant.created_at]
      );
      if (result.affectedRows !== 1) fail(`Expected one row while mapping legacy tenant ${tenant.id}.`);
    }

    const expectedIdsByTable = new Map();
    for (const { source: sourceName, target, columns, rows, tenant, tenantColumn,
      outputTenantColumn, omitTenantColumn, vehicle } of snapshot.tables) {
      const insertColumns = [];
      for (const column of columns) {
        if (omitTenantColumn && column === tenantColumn) continue;
        insertColumns.push(column);
      }
      if (tenant || tenantColumn) insertColumns.push(outputTenantColumn || 'site_id');
      if (vehicle) insertColumns.push('erp_vehicle_id');
      if (tenant) insertColumns.push('legacy_tenant_id');
      const placeholders = insertColumns.map(() => '?').join(', ');
      const sql = `INSERT INTO ${quoteIdentifier(target)} (${insertColumns.map(quoteIdentifier).join(', ')}) VALUES (${placeholders})`;
      const expectedIds = [];
      for (const row of rows) {
        const values = columns
          .filter((column) => !(omitTenantColumn && column === tenantColumn))
          .map((column) => row[column]);
        if (tenant || tenantColumn) {
          const oldTenantId = row[tenantColumn || 'tenant_id'];
          values.push(maps.tenantSites.get(String(oldTenantId)));
        }
        if (vehicle) values.push(maps.vehicleMap.get(`${row.tenant_id}:${row.id}`) || null);
        if (tenant) values.push(row.tenant_id);
        const [result] = await connection.execute(sql, values);
        if (result.affectedRows !== 1) fail(`Expected one row while importing ${sourceName}; received ${result.affectedRows}.`);
        if (Object.hasOwn(row, 'id')) expectedIds.push(String(row.id));
      }
      if (expectedIds.length) expectedIdsByTable.set(target, expectedIds);
    }

    for (const user of snapshot.users) {
      const [result] = await connection.execute(
        `INSERT INTO parking_legacy_users
          (legacy_tenant_id, legacy_user_id, site_id, account_id, username, legacy_role)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [user.tenant_id, user.id, maps.tenantSites.get(String(user.tenant_id)),
          maps.accountMap.get(`${user.tenant_id}:${user.id}`), user.username, user.role]
      );
      if (result.affectedRows !== 1) fail(`Expected one row while mapping legacy user ${user.tenant_id}:${user.id}.`);
    }

    const insertCounts = Object.fromEntries(Object.entries(snapshot.counts));
    insertCounts.legacy_tenants = snapshot.tenantRows.length;
    insertCounts.legacy_users = snapshot.users.length;
    const verifiedIds = [];
    for (const [table, expectedIds] of expectedIdsByTable) {
      const foundIds = [];
      for (let offset = 0; offset < expectedIds.length; offset += 500) {
        const batch = expectedIds.slice(offset, offset + 500);
        const [rows] = await connection.execute(
          `SELECT id FROM ${quoteIdentifier(table)} WHERE id IN (${batch.map(() => '?').join(', ')})`,
          batch
        );
        foundIds.push(...rows.map((row) => String(row.id)));
      }
      const expected = [...expectedIds].sort();
      const actual = foundIds.sort();
      if (stableJson(actual) !== stableJson(expected)) {
        fail(`Imported IDs for ${table} do not match the SQLite source.`);
      }
      verifiedIds.push(...actual.map((id) => `${table}:${id}`));
    }
    const importedIdDigest = hash(stableJson(verifiedIds.sort()));
    await connection.execute(
      `INSERT INTO parking_import_runs
        (source_digest, mapping_digest, source_name, table_counts, id_map_digest, backup_path)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [snapshot.contentDigest, mappingDigest, basename(resolve(sourcePath)),
        JSON.stringify(insertCounts), hash(stableJson({ mapping: idMapDigest, importedIds: importedIdDigest })), backupPath]
    );
    await connection.commit();
    return { ...report, mode: 'imported', backupPath, importedCounts: insertCounts };
  } catch (error) {
    await connection.rollback();
    throw error;
  }
}

export { TABLES as PARKING_IMPORT_TABLES };
