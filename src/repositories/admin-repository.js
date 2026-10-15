export function createAdminRepository(db) {
  return {
    async createSite({ code, name, type }) {
      const rows = await db.query(
        'INSERT INTO sites (code, name, type) VALUES (?, ?, ?)',
        [code, name, type]
      );
      return { id: rows.insertId, code, name, type, status: 'active' };
    },

    async createRole({ roleKey, name, permissions }) {
      return db.transaction(async (tx) => {
        const result = await tx.query(
          'INSERT INTO roles (role_key, name) VALUES (?, ?)',
          [roleKey, name]
        );
        for (const permission of permissions) {
          await tx.query(
            'INSERT INTO role_permissions (role_id, permission_key) VALUES (?, ?)',
            [result.insertId, permission]
          );
        }
        return { id: result.insertId, roleKey, name, permissions };
      });
    },

    async createAccount({ siteId, username, displayName, passwordHash, roleIds, permissions }) {
      return db.transaction(async (tx) => {
        const result = await tx.query(
          `INSERT INTO accounts (site_id, username, display_name, password_hash)
           VALUES (?, ?, ?, ?)`,
          [siteId, username, displayName, passwordHash]
        );
        for (const roleId of roleIds) {
          await tx.query('INSERT INTO account_roles (account_id, role_id) VALUES (?, ?)', [result.insertId, roleId]);
        }
        for (const permission of permissions) {
          await tx.query(
            'INSERT INTO account_permissions (account_id, permission_key) VALUES (?, ?)',
            [result.insertId, permission]
          );
        }
        return { id: result.insertId, siteId, username, displayName };
      });
    },

    async listSites(siteId) {
      if (siteId) {
        return db.query(
          'SELECT id, code, name, type, status FROM sites WHERE id = ? ORDER BY id',
          [siteId]
        );
      }
      return db.query(
        'SELECT id, code, name, type, status FROM sites ORDER BY id'
      );
    },

    async listAccounts({ siteId, limit, offset }) {
      const siteFilter = siteId ? 'WHERE a.site_id = ?' : '';
      const params = siteId ? [siteId, limit, offset] : [limit, offset];
      return db.query(
        `SELECT a.id, a.site_id, a.username, a.display_name, a.status,
                s.code AS site_code, s.name AS site_name, a.created_at,
                (SELECT JSON_ARRAYAGG(CAST(ar.role_id AS CHAR)) FROM account_roles ar
                  WHERE ar.account_id = a.id) AS role_ids,
                (SELECT JSON_ARRAYAGG(ap.permission_key) FROM account_permissions ap
                  WHERE ap.account_id = a.id) AS permissions
           FROM accounts a JOIN sites s ON s.id = a.site_id
          ${siteFilter}
          ORDER BY a.id LIMIT ? OFFSET ?`,
        params
      );
    },

    async updateAccount(id, fields, siteScope) {
      return db.transaction(async (tx) => {
        const siteFilter = siteScope ? ' AND site_id = ?' : '';
        const params = siteScope ? [id, siteScope] : [id];
        const found = await tx.query(
          `SELECT id FROM accounts WHERE id = ?${siteFilter} FOR UPDATE`,
          params
        );
        if (!found.length) return null;

        const sets = [];
        const values = [];
        for (const key of ['siteId', 'displayName', 'passwordHash', 'status']) {
          if (!Object.hasOwn(fields, key)) continue;
          const column = {
            siteId: 'site_id',
            displayName: 'display_name',
            passwordHash: 'password_hash',
            status: 'status'
          }[key];
          sets.push(`${column} = ?`);
          values.push(fields[key]);
        }
        if (Object.hasOwn(fields, 'passwordHash')) {
          sets.push('failed_attempts = 0');
          sets.push('locked_until = NULL');
        }
        if (sets.length) {
          values.push(id);
          await tx.query(`UPDATE accounts SET ${sets.join(', ')} WHERE id = ?`, values);
        }
        if (fields.roleIds) {
          await tx.query('DELETE FROM account_roles WHERE account_id = ?', [id]);
          for (const roleId of fields.roleIds) {
            await tx.query(
              'INSERT INTO account_roles (account_id, role_id) VALUES (?, ?)',
              [id, roleId]
            );
          }
        }
        if (fields.permissions) {
          await tx.query('DELETE FROM account_permissions WHERE account_id = ?', [id]);
          for (const permission of fields.permissions) {
            await tx.query(
              'INSERT INTO account_permissions (account_id, permission_key) VALUES (?, ?)',
              [id, permission]
            );
          }
        }
        return { id };
      });
    },

    async listRoles() {
      return db.query(
        `SELECT r.id, r.role_key, r.name,
                (SELECT JSON_ARRAYAGG(rp.permission_key) FROM role_permissions rp
                  WHERE rp.role_id = r.id) AS permissions
           FROM roles r ORDER BY r.id`
      );
    },

    async listPermissions() {
      return db.query('SELECT permission_key, description FROM permissions ORDER BY permission_key');
    }
  };
}
