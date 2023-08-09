import mysql from 'mysql2';
const express = require('express');

const connection = mysql.createConnection({
  host: 'sql9.freemysqlhosting.net',  
  port: 3306,   // Replace with your MySQL server host
  user: 'sql9638083',         // Replace with your MySQL username
  password: 'F1Fay6WY1R',  // Replace with your MySQL password
  database: 'sql9638083', // Replace with your MySQL schema name
});

export default connection;