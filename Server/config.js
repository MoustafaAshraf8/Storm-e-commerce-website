require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.POSTGRESS_HOST,
  user: process.env.POSTGRESS_USER,
  port: process.env.POSTGRESS_PORT,
  password: process.env.POSTGRESS_PASSWORD,
  database: process.env.POSTGRESS_DATABASE,
});

module.exports = { pool };
