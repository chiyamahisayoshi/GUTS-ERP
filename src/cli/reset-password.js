import bcrypt from 'bcryptjs';
import { getConfig } from '../config.js';
import { createPool } from '../db/pool.js';

const username = process.env.RESET_USERNAME?.trim();
const password = process.env.RESET_PASSWORD;
if (!username || !password || password.length < 12 || password.length > 128) {
  throw new Error('Set RESET_USERNAME and RESET_PASSWORD (12-128 characters).');
}

const pool = createPool(getConfig().database);
try {
  const hash = await bcrypt.hash(password, 12);
  const [result] = await pool.execute(
    `UPDATE accounts SET password_hash = ?, failed_attempts = 0, locked_until = NULL WHERE username = ?`,
    [hash, username]
  );
  if (!result.affectedRows) throw new Error(`Account ${username} not found.`);
  console.log(`Password reset for ${username}.`);
} finally {
  await pool.end();
}
