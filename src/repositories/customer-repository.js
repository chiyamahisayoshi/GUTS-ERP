function normalizeNameQuery(value) {
  return [...new Set([
    value.normalize('NFKC'),
    [...value.normalize('NFKC')].map((character) => {
      const code = character.codePointAt(0);
      return code >= 0x30a1 && code <= 0x30f6 ? String.fromCodePoint(code - 0x60) : character;
    }).join(''),
    [...value.normalize('NFKC')].map((character) => {
      const code = character.codePointAt(0);
      return code >= 0x3041 && code <= 0x3096 ? String.fromCodePoint(code + 0x60) : character;
    }).join('')
  ])];
}

function normalizePhoneQuery(value) {
  return value.normalize('NFKC').replace(/\D/g, '');
}

export function createCustomerRepository(db) {
  return {
    async list({ siteId, search, limit, offset }) {
      const params = [siteId];
      let searchFilter = '';
      if (search) {
        const terms = normalizeNameQuery(search);
        const phone = normalizePhoneQuery(search);
        const clauses = [];
        for (const term of terms) {
          clauses.push('(name LIKE ? OR name_kana LIKE ?)');
          params.push(`%${term}%`, `%${term}%`);
        }
        if (phone) {
          clauses.push("REGEXP_REPLACE(phone, '[^0-9]', '') LIKE ?");
          params.push(`%${phone}%`);
        }
        searchFilter = ` AND (${clauses.join(' OR ')})`;
      }
      return db.query(
        `SELECT id, site_id, name, name_kana, phone, email, birth_date, address,
                emergency_contact_name, emergency_contact_relationship,
                emergency_contact_phone, workplace_school, created_at, updated_at
           FROM customers
          WHERE site_id = ?${searchFilter}
          ORDER BY name, id LIMIT ? OFFSET ?`,
        [...params, limit, offset]
      );
    },

    async create({ siteId, name, nameKana, phone, email, birthDate, address,
      emergencyContactName, emergencyContactRelationship, emergencyContactPhone, workplaceSchool }) {
      const result = await db.query(
        `INSERT INTO customers
          (site_id, name, name_kana, phone, email, birth_date, address,
           emergency_contact_name, emergency_contact_relationship,
           emergency_contact_phone, workplace_school)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [siteId, name, nameKana, phone, email, birthDate, address,
          emergencyContactName, emergencyContactRelationship, emergencyContactPhone, workplaceSchool]
      );
      const rows = await db.query(
        `SELECT id, site_id, name, name_kana, phone, email, birth_date, address,
                emergency_contact_name, emergency_contact_relationship,
                emergency_contact_phone, workplace_school, created_at, updated_at
           FROM customers WHERE id = ? AND site_id = ? LIMIT 1`,
        [result.insertId, siteId]
      );
      return rows[0];
    },

    async update({ siteId, customerId, name, nameKana, phone, email, birthDate, address,
      emergencyContactName, emergencyContactRelationship, emergencyContactPhone, workplaceSchool }) {
      await db.query(
        `UPDATE customers
            SET name = ?, name_kana = ?, phone = ?, email = ?, birth_date = ?, address = ?,
                emergency_contact_name = ?, emergency_contact_relationship = ?,
                emergency_contact_phone = ?, workplace_school = ?
          WHERE id = ? AND site_id = ?`,
        [name, nameKana, phone, email, birthDate, address,
          emergencyContactName, emergencyContactRelationship, emergencyContactPhone,
          workplaceSchool, customerId, siteId]
      );
      const rows = await db.query(
        `SELECT id, site_id, name, name_kana, phone, email, birth_date, address,
                emergency_contact_name, emergency_contact_relationship,
                emergency_contact_phone, workplace_school, created_at, updated_at
           FROM customers WHERE id = ? AND site_id = ? LIMIT 1`,
        [customerId, siteId]
      );
      return rows[0] ?? null;
    }
  };
}
