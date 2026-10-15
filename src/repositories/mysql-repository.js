export function createMysqlRepository(pool) {
  return {
    async query(sql, params = []) {
      const [rows] = await pool.execute(sql, params);
      return rows;
    },

    async transaction(callback) {
      const connection = await pool.getConnection();
      try {
        await connection.beginTransaction();
        const result = await callback({
          query: async (sql, params = []) => {
            const [rows] = await connection.execute(sql, params);
            return rows;
          }
        });
        await connection.commit();
        return result;
      } catch (error) {
        await connection.rollback();
        throw error;
      } finally {
        connection.release();
      }
    },

    async close() {
      await pool.end();
    }
  };
}
