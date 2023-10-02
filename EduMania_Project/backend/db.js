const mysql = require('mysql2/promise'); // Import the mysql2 library with Promises

// Create a connection pool with Promises
const pool = mysql.createPool({
  host: 'mydb.com',
  user: 'myUser',
  password: 'myPassword',
  connectionLimit: 5,
});

module.exports = pool;
