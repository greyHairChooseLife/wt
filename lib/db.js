const mysql = require('mysql');

const db = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '111222',
	database : '5yd'
});
db.connect();

module.exports = db;
