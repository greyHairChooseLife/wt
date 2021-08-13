require('dotenv').config();
const mariadb = require('mysql');

const {DB_HOST, DB_USER, DB_PW, DB } = process.env; // .env로 정보 유출을 방지 

const db = mariadb.createConnection({
	host : DB_HOST,
	user : DB_USER,
	password : DB_PW,
	database : DB,
});
db.connect();

module.exports = db;
