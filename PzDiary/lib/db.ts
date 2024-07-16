import mysql, { ResultSetHeader, RowDataPacket } from 'mysql2/promise';

const {
  DB_HOST: host,
  DB_USER: user,
  DB_PASS: password,
  DB_SCHEMA: database,
} = process.env;

const config = {
  host,
  user,
  password,
  database,
  waitForConnections: true,
  connectionLimit: 5,
  maxIdle: 5,
  idleTimeout: 60000,
};
const pool = mysql.createPool(config);

// to read
export const query = async <T extends RowDataPacket>(
  sql: string,
  params: unknown[]
) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query<T[]>(sql, params);
    // console.log('🚀 db.ts query result:', rows);
    return rows;
  } catch (error) {
    console.table({ error });
    throw error;
  } finally {
    connection.release();
  }
};

// to write
export const execute = async (sql: string, params: unknown[]) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query<ResultSetHeader>(sql, params);
    console.log('🚀 db.ts execute result:', rows);
    return rows;
  } catch (error) {
    console.table({ error });
    throw error;
  } finally {
    connection.release();
  }
};
