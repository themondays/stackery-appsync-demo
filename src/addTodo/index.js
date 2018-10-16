const mysql = require('promise-mysql');

const addTodo = (exports.handler = async message => {
  const conn = await mysql.createConnection({
    host: process.env.DB_ADDRESS,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DB
  });
  // do stuff with conn

  const { todo } = message.arguments;

  const results = await conn.query('INSERT INTO todos SET ?', { todo });
  conn.end();
  return {
    todo,
    id: results.insertId
  };
});
