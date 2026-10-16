export function createAuthSessionRepository(db) {
  return {
    async create({ id, accountId, tokenHash, expiresAt }) {
      await db.query(
        `INSERT INTO auth_sessions (id, account_id, refresh_token_hash, expires_at)
         VALUES (?, ?, ?, ?)`,
        [id, accountId, tokenHash, expiresAt]
      );
    },

    async findByTokenHash(tokenHash) {
      const rows = await db.query(
        `SELECT s.id AS session_id, s.account_id, s.expires_at,
                a.username, a.display_name, a.is_owner_admin, a.status,
                a.site_id, si.code AS site_code, si.name AS site_name,
                si.type AS site_type, si.status AS site_status
           FROM auth_sessions s
           JOIN accounts a ON a.id = s.account_id
           JOIN sites si ON si.id = a.site_id
          WHERE s.refresh_token_hash = ? AND s.expires_at > UTC_TIMESTAMP(3)
          LIMIT 1`,
        [tokenHash]
      );
      return rows[0] || null;
    },

    async rotate({ sessionId, tokenHash, nextTokenHash, expiresAt }) {
      const result = await db.query(
        `UPDATE auth_sessions
            SET refresh_token_hash = ?, expires_at = ?, last_used_at = UTC_TIMESTAMP(3)
          WHERE id = ? AND refresh_token_hash = ? AND expires_at > UTC_TIMESTAMP(3)`,
        [nextTokenHash, expiresAt, sessionId, tokenHash]
      );
      return result.affectedRows === 1;
    },

    async revoke(tokenHash) {
      await db.query('DELETE FROM auth_sessions WHERE refresh_token_hash = ?', [tokenHash]);
    }
  };
}
