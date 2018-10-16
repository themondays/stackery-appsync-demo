const mysql = require('promise-mysql');

const getTodos = (exports.handler = async message => {
  const conn = await mysql.createConnection({
    host: process.env.DB_ADDRESS,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DB
  });

  const results = await conn.query('select * from todos');
  conn.end();

  return results;
});
