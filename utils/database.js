// utils/database.js

const connection = require('../config/db');

async function connect() {
  try {
    await connection.connect();
    console.log('Connected to MySQL database!');
  } catch (error) {
    console.error('Error connecting to MySQL database:', error);
  }
}

module.exports = { connect, connection };
