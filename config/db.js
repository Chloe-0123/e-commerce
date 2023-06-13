import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',     // Replace with your MySQL server host
  user: 'root',          // Replace with your MySQL username
  password: 'Tuiyhuabby5324!',  // Replace with your MySQL password
  database: 'your_schema_name', // Replace with your MySQL schema name
});

export default connection;
