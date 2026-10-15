import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { getConfig } from '../config.js';
import { createPool } from '../db/pool.js';
import { PERMISSIONS } from '../permissions.js';

const root = dirname(dirname(dirname(fileURLToPath(import.meta.url))));
const migrationsDir = join(root, 'migrations');
const pool = createPool(getConfig().database);

try {
  await pool.query(`CREATE TABLE IF NOT EXISTS schema_migrations (
    version VARCHAR(128) NOT NULL PRIMARY KEY,
    applied_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`);

  const files = (await readdir(migrationsDir))
    .filter((file) => /^\d+_[a-z0-9_-]+\.sql$/i.test(file))
    .sort();
  for (const file of files) {
    const [found] = await pool.execute(
      'SELECT version FROM schema_migrations WHERE version = ?',
      [file]
    );
    if (found.length) continue;
    // MySQL 8.4 and MariaDB both support this collation; 0900_ai_ci is MySQL-only.
    const sql = (await readFile(join(migrationsDir, file), 'utf8'))
      .replaceAll('utf8mb4_0900_ai_ci', 'utf8mb4_unicode_ci');
    for (const statement of sql.split(';').map((item) => item.trim()).filter(Boolean)) {
      await pool.query(statement);
    }
    await pool.execute('INSERT INTO schema_migrations (version) VALUES (?)', [file]);
    console.log(`Applied ${file}`);
  }

  for (const permission of PERMISSIONS) {
    await pool.execute(
      `INSERT INTO permissions (permission_key, description) VALUES (?, ?)
       ON DUPLICATE KEY UPDATE description = VALUES(description)`,
      [permission.key, permission.description]
    );
  }
  console.log('Database migrations complete.');
} finally {
  await pool.end();
}
