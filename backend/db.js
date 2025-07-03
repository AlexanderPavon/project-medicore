import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  host: 'db',
  user: 'admin',
  password: 'admin123',
  database: 'pacientesdb',
  port: 5432,
});
