// config/db.js

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your-username',
  password: 'your-password',
  database: 'your-database',
});

module.exports = connection;
