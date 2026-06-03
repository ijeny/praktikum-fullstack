const mysql = require('mysql2');

const conn = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: 'ijeny46',
  database: 'crud_db'
});

conn.connect((err) => {
  if (err) throw err;
  console.log('Terhubung Ke MySQL!');
});

module.exports = conn;
