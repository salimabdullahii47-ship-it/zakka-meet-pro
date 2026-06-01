const Database = require('better-sqlite3');
const db = new Database('local.db');

module.exports = db;
