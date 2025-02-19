const { Pool } = require('pg');
require('dotenv').config();

// Create a pool using environment variables
const pool = new Pool({
  host: 'localhost',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});


module.exports = pool;
