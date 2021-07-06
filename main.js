const express = require('express');
const db = require('./lib/db.js');
//const { v4: uid } = require('uuid');
const write_diary = require('./lib/write_diary.js');
const show_home = require('./lib/show_home.js');
// 데이터 생성용 임시
const testing = require('./lib/test_data_generater_testing.js');


const app = express();

app.use(express.urlencoded());

app.get('/', function(req, res){
	//show_home.home(req, res);
	res.send("move next, connect local database");
});


//test_data_generating.start
app.post('/:id/test_data_generate', function(req, res){
	testing.gen(req,res);
});
//test_data_generating.end


app.get('/create', function(req, res){
	var template = `
			<!doctype html>
			<html>
			<head>
				<title>5y diary</title>
				<meta charset="utf-8">
			</head>
			<body>
				<h1>5year diary</h1>
				<h2>계정추가</h2>
				<form action="/create_process" method="post">
					<p><input type="text" name="name" placeholder="name"></p>
					<p><input type="submit"></p>
				</form>
			</html>
			`;
	res.send(template);
});

app.post('/create_process', function(req, res){
	db.query(`INSERT INTO clients (name) VALUES(?)`, [req.body.name], function(err){
		if(err) throw err;
		res.redirect('/');
	});
});

app.post('/delete_process', function(req, res){
	db.query(`DELETE FROM clients WHERE id_number=?`, [req.body.id_number], function(err){
		if(err) throw err;
		res.redirect('/');
	});
});

app.post('/:id/daily', function(req, res){
	write_diary.daily(req, res);
});

app.post('/:id/daily_upload', function(req, res){
	var uuid = req.body.uuid;
	db.query(`INSERT INTO daily_diary (uuid, content) VALUES (?,?)`, [uuid, req.body.content], function(err){
		if(err) throw err;

	res.redirect(307, `/${req.params.id}/daily`);
	});
});


app.post('/:id/monthly_mode_A', function(req, res){
	write_diary.monthly_mode_A(req, res);
});

app.post('/:id/monthly_mode_B', function(req, res){
	write_diary.monthly_mode_B(req, res);
});


app.post('/:id/lifelong', function(req, res){
	write_diary.lifelong(req, res);
});

app.post('/:id/picture_story', function(req, res){
	res.send("PSokay");
});


app.listen(9999);
