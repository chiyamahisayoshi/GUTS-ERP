export function createAccountRepository(db) {
  return {
    async findByUsername(username) {
      const rows = await db.query(
        `SELECT a.id, a.site_id, a.username, a.display_name, a.password_hash, a.is_owner_admin,
                a.status, a.failed_attempts, a.locked_until,
                s.code AS site_code, s.name AS site_name, s.type AS site_type,
                s.status AS site_status
           FROM accounts a JOIN sites s ON s.id = a.site_id
          WHERE a.username = ? LIMIT 1`,
        [username]
      );
      return rows[0] || null;
    },

    async findById(id) {
      const rows = await db.query(
        `SELECT a.id, a.site_id, a.username, a.display_name, a.status, a.is_owner_admin,
                s.code AS site_code, s.name AS site_name, s.type AS site_type,
                s.status AS site_status
           FROM accounts a JOIN sites s ON s.id = a.site_id
          WHERE a.id = ? LIMIT 1`,
        [id]
      );
      return rows[0] || null;
    },

    async listPermissions(id) {
      const rows = await db.query(
        `SELECT permission_key FROM role_permissions rp
           JOIN account_roles ar ON ar.role_id = rp.role_id
          WHERE ar.account_id = ?
         UNION
         SELECT permission_key FROM account_permissions WHERE account_id = ?`,
        [id, id]
      );
      return rows.map((row) => row.permission_key);
    },

    async recordFailedLogin(id) {
      await db.query(
        `UPDATE accounts
            SET failed_attempts = LEAST(failed_attempts + 1, 255),
                locked_until = CASE WHEN failed_attempts >= 5
                  THEN DATE_ADD(UTC_TIMESTAMP(3), INTERVAL 15 MINUTE)
                  ELSE locked_until END
          WHERE id = ?`,
        [id]
      );
    },

    async clearFailedLogins(id) {
      await db.query(
        'UPDATE accounts SET failed_attempts = 0, locked_until = NULL WHERE id = ?',
        [id]
      );
    }
  };
}
