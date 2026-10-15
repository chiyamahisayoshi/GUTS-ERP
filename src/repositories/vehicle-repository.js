export function createVehicleRepository(db) {
  return {
    async findById(id, siteId) {
      const siteFilter = siteId ? ' AND site_id = ?' : '';
      const params = siteId ? [id, siteId] : [id];
      const rows = await db.query(
        `SELECT id, registration_number, vin, make, model, model_year,
                site_id, status, updated_at
           FROM vehicles WHERE id = ?${siteFilter} LIMIT 1`,
        params
      );
      return rows[0] || null;
    },

    async list({ siteId, status, search, limit, offset }) {
      const filters = [];
      const params = [];
      if (siteId) {
        filters.push('site_id = ?');
        params.push(siteId);
      }
      if (status) {
        filters.push('status = ?');
        params.push(status);
      }
      if (search) {
        filters.push('(registration_number LIKE ? OR make LIKE ? OR model LIKE ? OR vin LIKE ?)');
        const term = `%${search}%`;
        params.push(term, term, term, term);
      }
      const where = filters.length ? `WHERE ${filters.join(' AND ')}` : '';
      return db.query(
        `SELECT id, registration_number, vin, make, model, model_year,
                site_id, status, updated_at
           FROM vehicles ${where}
          ORDER BY id LIMIT ? OFFSET ?`,
        [...params, limit, offset]
      );
    },

    async listForParkingSync() {
      return db.query(
        `SELECT v.id, v.registration_number
           FROM vehicles v
           JOIN sites s ON s.id = v.site_id
          WHERE s.type = 'direct' AND s.status = 'active'
            AND v.status <> 'retired'
          ORDER BY v.id`
      );
    },

    async create(vehicle) {
      await db.query(
        `INSERT INTO vehicles
          (id, registration_number, vin, make, model, model_year, site_id, status)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          vehicle.id, vehicle.registrationNumber, vehicle.vin || null,
          vehicle.make, vehicle.model, vehicle.modelYear || null,
          vehicle.siteId, vehicle.status || 'available'
        ]
      );
      return this.findById(vehicle.id);
    },

    async update(id, fields, siteId) {
      const assignments = [];
      const params = [];
      for (const [key, column] of [
        ['registrationNumber', 'registration_number'],
        ['vin', 'vin'],
        ['make', 'make'],
        ['model', 'model'],
        ['modelYear', 'model_year'],
        ['siteId', 'site_id'],
        ['status', 'status']
      ]) {
        if (Object.hasOwn(fields, key)) {
          assignments.push(`${column} = ?`);
          params.push(fields[key]);
        }
      }
      if (assignments.length) {
        const siteFilter = siteId ? ' AND site_id = ?' : '';
        params.push(id);
        if (siteId) params.push(siteId);
        await db.query(
          `UPDATE vehicles SET ${assignments.join(', ')} WHERE id = ?${siteFilter}`,
          params
        );
      }
      return this.findById(id, siteId);
    }
  };
}
