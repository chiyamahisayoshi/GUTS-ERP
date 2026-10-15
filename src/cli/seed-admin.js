import bcrypt from 'bcryptjs';
import { getConfig } from '../config.js';
import { createPool } from '../db/pool.js';
import { PERMISSIONS } from '../permissions.js';

const username = process.env.ADMIN_USERNAME?.trim();
const password = process.env.ADMIN_PASSWORD;
const displayName = process.env.ADMIN_DISPLAY_NAME?.trim();
const siteCode = process.env.HQ_SITE_CODE?.trim() || 'HQ';
const siteName = process.env.HQ_SITE_NAME?.trim() || 'Headquarters';

if (!username || !displayName || !password || password.length < 12 || password.length > 128) {
  throw new Error('Set ADMIN_USERNAME, ADMIN_DISPLAY_NAME and ADMIN_PASSWORD (12-128 characters).');
}

const pool = createPool(getConfig().database);
const connection = await pool.getConnection();
try {
  await connection.beginTransaction();
  const [existing] = await connection.execute(
    'SELECT id FROM accounts WHERE username = ? LIMIT 1',
    [username]
  );
  if (existing.length) throw new Error('Admin username already exists; refusing to reset it.');
  const [ownerAdmins] = await connection.execute(
    'SELECT id FROM accounts WHERE is_owner_admin = 1 LIMIT 1 FOR UPDATE'
  );
  if (ownerAdmins.length) throw new Error('An owner administrator already exists; refusing to create another.');

  await connection.execute(
    `INSERT INTO sites (code, name, type) VALUES (?, ?, 'headquarters')
     ON DUPLICATE KEY UPDATE name = VALUES(name)`,
    [siteCode, siteName]
  );
  const [[site]] = await connection.execute('SELECT id, type FROM sites WHERE code = ?', [siteCode]);
  if (site.type !== 'headquarters') {
    throw new Error(`HQ_SITE_CODE ${siteCode} already belongs to a non-headquarters site.`);
  }

  await connection.execute(
    `INSERT INTO roles (role_key, name) VALUES ('headquarters_admin', 'Headquarters administrator')
     ON DUPLICATE KEY UPDATE name = VALUES(name)`
  );
  const [[role]] = await connection.execute(
    'SELECT id FROM roles WHERE role_key = ?',
    ['headquarters_admin']
  );
  for (const permission of PERMISSIONS) {
    await connection.execute(
      `INSERT INTO permissions (permission_key, description) VALUES (?, ?)
       ON DUPLICATE KEY UPDATE description = VALUES(description)`,
      [permission.key, permission.description]
    );
    await connection.execute(
      `INSERT IGNORE INTO role_permissions (role_id, permission_key) VALUES (?, ?)`,
      [role.id, permission.key]
    );
  }
  const passwordHash = await bcrypt.hash(password, 12);
  const [accountResult] = await connection.execute(
    `INSERT INTO accounts (site_id, username, display_name, password_hash, is_owner_admin)
     VALUES (?, ?, ?, ?, 1)`,
    [site.id, username, displayName, passwordHash]
  );
  await connection.execute(
    'INSERT INTO account_roles (account_id, role_id) VALUES (?, ?)',
    [accountResult.insertId, role.id]
  );
  await connection.commit();
  console.log(`Created headquarters administrator ${username} at site ${siteCode}.`);
} catch (error) {
  await connection.rollback();
  throw error;
} finally {
  connection.release();
  await pool.end();
}
