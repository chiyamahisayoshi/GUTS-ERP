import { mkdir, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { getConfig } from '../config.js';
import { createPool } from '../db/pool.js';
import { importParkingSnapshot } from './parking-importer.js';

function argumentsFrom(argv) {
  const options = {};
  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === '--dry-run') options.dryRun = true;
    else if (argument === '--apply') options.dryRun = false;
    else if (['--source', '--mapping', '--backup-dir'].includes(argument)) {
      const value = argv[index + 1];
      if (!value || value.startsWith('--')) throw new Error(`${argument} requires a value.`);
      options[argument.slice(2).replaceAll('-', '')] = value;
      index += 1;
    } else {
      throw new Error(`Unknown argument: ${argument}`);
    }
  }
  if (!options.source || !options.mapping) {
    throw new Error('Usage: node src/cli/import-parking-sqlite.js --source <sqlite-file> --mapping <json-file> [--dry-run|--apply] [--backup-dir <directory>]');
  }
  return options;
}

const mainPath = resolve(process.argv[1] || '');
if (fileURLToPath(import.meta.url) === mainPath) {
  const options = argumentsFrom(process.argv.slice(2));
  const backupDirectory = resolve(options.backupdir || `${options.source}.backups`);
  if (options.dryRun === false) await mkdir(backupDirectory, { recursive: true, mode: 0o700 });
  const mappingPath = resolve(options.mapping);
  await readFile(mappingPath, 'utf8');
  const pool = createPool(getConfig().database);
  try {
    const connection = await pool.getConnection();
    try {
      const report = await importParkingSnapshot({
        sourcePath: options.source,
        mappingPath,
        connection,
        backupDirectory,
        dryRun: options.dryRun !== false
      });
      console.log(JSON.stringify(report, null, 2));
    } finally {
      connection.release();
    }
  } finally {
    await pool.end();
  }
}
