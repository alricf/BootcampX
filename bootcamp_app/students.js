const { Pool } = require('pg');

const pool = new Pool({
  user: 'af',
  password: '',
  host: 'localhost',
  database: 'bootcampx'
});