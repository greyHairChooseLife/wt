require('dotenv').config();
const mariadb = require('mysql2');

const {DB_HOST, DB_USER, DB_PW, DB } = process.env; // .env로 정보 유출을 방지 

const pool = mariadb.createPool({
	host : DB_HOST,
	user : DB_USER,
	password : DB_PW,
	database : DB,
	connectionLimit : 10,
});

module.exports = pool;
