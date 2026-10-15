import { randomBytes } from 'node:crypto';

function conflict(message) {
  return Object.assign(new Error(message), { code: 'ERP_CONFLICT' });
}

export function createReservationRepository(db) {
  return {
    async list({ siteId, status, search, limit, offset }) {
      const filters = [];
      const params = [];
      if (siteId) {
        filters.push('r.site_id = ?');
        params.push(siteId);
      }
      if (status) {
        filters.push('r.status = ?');
        params.push(status);
      }
      if (search) {
        filters.push('(r.reservation_code LIKE ? OR r.guest_name LIKE ? OR r.guest_phone LIKE ? OR v.registration_number LIKE ?)');
        const term = `%${search}%`;
        params.push(term, term, term, term);
      }
      const where = filters.length ? `WHERE ${filters.join(' AND ')}` : '';
      return db.query(
        `SELECT r.id, r.reservation_code, r.site_id, s.code AS site_code, s.name AS site_name,
                r.guest_name, r.guest_phone, r.start_at, r.end_at, r.vehicle_id,
                v.registration_number, v.make, v.model, r.status, r.created_at
           FROM reservations r
           JOIN sites s ON s.id = r.site_id
           LEFT JOIN vehicles v ON v.id = r.vehicle_id
           ${where}
          ORDER BY CASE WHEN r.status IN ('reserved', 'checked_in') THEN 0 ELSE 1 END,
                   r.start_at ASC, r.id DESC LIMIT ? OFFSET ?`,
        [...params, limit, offset]
      );
    },

    async create({ siteId, guestName, guestPhone, startAt, endAt, vehicleId, createdBy }) {
      return db.transaction(async (tx) => {
        const [vehicle] = await tx.query(
          'SELECT id, site_id, status FROM vehicles WHERE id = ? FOR UPDATE',
          [vehicleId]
        );
        if (!vehicle || String(vehicle.site_id) !== String(siteId) || vehicle.status !== 'available') {
          throw conflict('Vehicle is unavailable at this site.');
        }
        const overlap = await tx.query(
          `SELECT id FROM reservations
            WHERE vehicle_id = ? AND status IN ('reserved', 'checked_in')
              AND start_at < ? AND end_at > ? LIMIT 1 FOR UPDATE`,
          [vehicleId, endAt, startAt]
        );
        if (overlap.length) throw conflict('Vehicle already has a reservation during this period.');
        const code = randomBytes(6).toString('hex').toUpperCase();
        const result = await tx.query(
          `INSERT INTO reservations
            (reservation_code, site_id, guest_name, guest_phone, start_at, end_at, vehicle_id, created_by)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
          [code, siteId, guestName, guestPhone, startAt, endAt, vehicleId || null, createdBy]
        );
        return { id: String(result.insertId), reservationCode: code, status: 'reserved' };
      });
    },

    async transition({ id, status, siteId }) {
      return db.transaction(async (tx) => {
        const scope = siteId ? ' AND site_id = ?' : '';
        const params = siteId ? [id, siteId] : [id];
        const [reservation] = await tx.query(
          `SELECT id, site_id, vehicle_id, status FROM reservations WHERE id = ?${scope} FOR UPDATE`,
          params
        );
        if (!reservation) return null;
        const allowed = {
          reserved: ['checked_in', 'cancelled'],
          checked_in: ['completed'],
          completed: [],
          cancelled: []
        };
        if (!allowed[reservation.status]?.includes(status)) {
          throw conflict(`Cannot transition reservation from ${reservation.status} to ${status}.`);
        }
        if (status === 'checked_in') {
          if (!reservation.vehicle_id) throw conflict('Assign a vehicle before checking in.');
          const [vehicle] = await tx.query(
            'SELECT id, site_id, status FROM vehicles WHERE id = ? FOR UPDATE',
            [reservation.vehicle_id]
          );
          if (!vehicle || String(vehicle.site_id) !== String(reservation.site_id) || vehicle.status !== 'available') {
            throw conflict('Assigned vehicle is no longer available.');
          }
          await tx.query('UPDATE vehicles SET status = ? WHERE id = ?', ['rented', reservation.vehicle_id]);
        }
        if (status === 'completed' && reservation.vehicle_id) {
          await tx.query(
            `UPDATE vehicles SET status = 'available' WHERE id = ? AND status = 'rented'`,
            [reservation.vehicle_id]
          );
        }
        await tx.query('UPDATE reservations SET status = ? WHERE id = ?', [status, id]);
        return { id: String(id), status };
      });
    }
  };
}
