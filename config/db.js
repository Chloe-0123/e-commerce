import mysql from 'mysql2';
const express = require('express');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,  
  port: process.env.DB_PORT,   // Replace with your MySQL server host
  user: process.env.DB_USER,        // Replace with your MySQL username
  password: process.env.DB_PASSWORD,  // Replace with your MySQL password
  database: process.env.DB_NAME, // Replace with your MySQL schema name
});

export default connection;