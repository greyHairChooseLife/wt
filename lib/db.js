const mariadb = require('mysql');

const db = mariadb.createConnection({
	host : 'localhost',
	user : 'wt_dev',
	password : '0000',
	database : '5yd'
});
db.connect();

module.exports = db;
