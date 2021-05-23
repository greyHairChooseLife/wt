const express = require('express');
const db = require('./lib/db.js');
const { v4: uid } = require('uuid');
const date_ob = new Date();
const diary = require('./lib/diary.js');
const home = require('./lib/home.js');
const testing = require('./lib/test_data_generater_testing.js');


const app = express();

app.use(express.urlencoded());

app.get('/', function(req, res){
	home.home(req, res);
});


//test_data_generating
app.post('/:id/test_data_generate', function(req, res){
	testing.gen(req,res);
});
//test_data_generating


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
					<p><input type="hidden" name="uuid" value="${uid()}"></p>
					<p><input type="text" name="name" placeholder="name"></p>
					<p><input type="submit"></p>
				</form>
			</html>
			`;
	res.send(template);
});

app.post('/create_process', function(req, res){
	db.query(`INSERT INTO clients (name, uuid) VALUES(?, ?)`, [req.body.name, req.body.uuid], function(err){
		if(err) throw err;
		res.redirect('/');
	});
});

app.post('/delete_process', function(req, res){
	db.query(`DELETE FROM clients WHERE _id=?`, [req.body.id], function(err){
		if(err) throw err;
		res.redirect('/');
	});
});

app.post('/:id/daily', function(req, res){
	diary.daily(req, res);
});

app.post('/:id/daily_upload', function(req, res){
	var uuid = req.body.uuid;
	db.query(`INSERT INTO daily_diary (uuid, content) VALUES (?,?)`, [uuid, req.body.content], function(err){
		if(err) throw err;

	res.redirect(307, `/${req.params.id}/daily`);
	});
});

app.post('/:id/weekly', function(req, res){
	diary.weekly(req, res);
});

app.post('/:id/weekly_upload', function(req, res){
	var uuid = req.body.uuid;
	db.query(`INSERT INTO weekly_diary (uuid, content) VALUES (?,?)`, [uuid, req.body.content], function(err){
		if(err) throw err;

	res.redirect(307, `/${req.params.id}/weekly`);
	});
});




app.post('/:id/monthly', function(req, res){
	diary.monthly(req, res);
});

app.post('/:id/annualy', function(req, res){
	res.send("Aokay");
});

app.post('/:id/lifelong', function(req, res){
	res.send("Lokay");
});

app.post('/:id/picture_story', function(req, res){
	res.send("PSokay");
});


app.listen(3006);
