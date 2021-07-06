const mariadb = require('mysql');

const db = mariadb.createConnection({
	host : 'localhost',
	user : 'wt_dev',
	password : '1111',
	database : '5yd'
});
db.connect();

module.exports = db;
