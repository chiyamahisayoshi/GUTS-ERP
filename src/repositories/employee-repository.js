export function createEmployeeRepository(db) {
  return {
    async list({ siteId, includeDisabled = false }) {
      const statusFilter = includeDisabled ? '' : " AND status = 'active'";
      return db.query(
        `SELECT id, site_id, name, status
           FROM site_employees
          WHERE site_id = ?${statusFilter}
          ORDER BY status, name, id`,
        [siteId]
      );
    },

    async create({ siteId, name }) {
      const result = await db.query(
        'INSERT INTO site_employees (site_id, name) VALUES (?, ?)',
        [siteId, name]
      );
      return { id: String(result.insertId), site_id: String(siteId), name, status: 'active' };
    },

    async update({ id, siteId, name, status }) {
      const fields = [];
      const values = [];
      if (name !== undefined) {
        fields.push('name = ?');
        values.push(name);
      }
      if (status !== undefined) {
        fields.push('status = ?');
        values.push(status);
      }
      if (!fields.length) return null;
      values.push(id, siteId);
      const result = await db.query(
        `UPDATE site_employees SET ${fields.join(', ')} WHERE id = ? AND site_id = ?`,
        values
      );
      return result.affectedRows ? { id: String(id), status: status ?? 'updated' } : null;
    }
  };
}
