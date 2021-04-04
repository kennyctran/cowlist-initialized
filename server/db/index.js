const mysql = require("mysql2");
const login = require("../../config/config.js");
const database = "cows";
const Promise = require("bluebird");
const { table } = require("./tables");

const connection = mysql.createConnection(login);
const db = Promise.promisifyAll(connection, { multiArgs: true });
module.exports = connection;

// Create schema AND USE database
db.connectAsync()
  .then(() => db.queryAsync("CREATE DATABASE IF NOT EXISTS cows"))
  .then(() => db.queryAsync("USE cows"))
  .then(() => db.queryAsync(table));
