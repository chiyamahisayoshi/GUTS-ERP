import mysql from 'mysql2/promise';

export function createPool(config) {
  return mysql.createPool({
    ...config,
    charset: 'utf8mb4',
    waitForConnections: true,
    queueLimit: 0,
    enableKeepAlive: true,
    decimalNumbers: true,
    supportBigNumbers: true,
    bigNumberStrings: true
  });
}
