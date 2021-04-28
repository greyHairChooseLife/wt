const http = require('http');
const fs = require('fs');
const url = require('url');
const express = require('express');
const db = require('./lib/db.js');
const { v4: uid } = require('uuid');
const date_ob = new Date();


const app = express();

app.use(express.urlencoded());

app.get('/', function(req, res){
	db.query(`SELECT * FROM clients`, function(err, clients){
	var title = `who's diary?`;
	var name_list = `<tr>`;
	var i;
	for(i = 0; i < clients.length; i++)
		name_list += `
			<td>${clients[i]._id}</td>
			<td>${clients[i].name}</td>
			<td>${clients[i].uuid}</td>
			<td>
				<form action="/delete_process" method="post">
					<input type="hidden" name="id" value="${clients[i]._id}">
					<input type="submit" value="delete">
				</form>
			</td>
			<td>
				<form action="/${clients[i].name}/daily" method="post">
					<input type="hidden" name="uuid" value="${clients[i].uuid}">
					<input type="submit" value="일기 쓰기">
				</form>
			</td>
			</tr><tr>`;
	name_list += `</tr>`;
	var template = `
			<!doctype html>
			<html>
			<head>
				<title>5y diary</title>
				<meta charset="utf-8">
			</head>
			<body>
				<h1>5year diary</h1>
				<h2>${title}</h2>
				<br>
				<p>log-in</p>
				<p><input type="text" placeholder="ID"></p>
				<p><input type="text" placeholder="PW"></p>
				<p>
					<a href="/create">create</a>
				</p>
				<table>
					<tr>
						<td>순번</td>
						<td>이름</td>
					</tr>
					${name_list}
				</table>
			</body>
			</html>
			<style>
				td {
				border : solid; 1px;
				}
			</style>
			`;
	res.send(template);
	});
});

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
	var uuid = req.body.uuid;
	db.query(`SELECT * FROM clients`, function(err, clients){
		db.query(`SELECT * FROM daily_diary WHERE uuid=?`, [uuid], function(err, daily_diary){
			db.query(`SELECT date_format(datetime, '%Y %m %d') from daily_diary`, function(err, date){
			var title = req.params.id;

			var content = `<tr>`;
			var i;
			for (i=daily_diary.length - 5; i<daily_diary.length; i++)
				content += `
				<td>${date[i][`date_format(datetime, '%Y %m %d')`]}</td>
				<td>${daily_diary[i].content}</td>
					</tr><tr>`;
			content += `</tr>`;

			var template = `
					<!doctype html>
					<html>
					<head>
						<title>${title}'s diary</title>
						<meta charset="utf-8">
					</head>
					<body>
						<p><a href="/">home page</a></p>
						<h1>daily</h1>
						<h2>who's : ${title}</h2>
						<table>
						${content}
						</table>
						<form action="/${title}/daily_upload" method="post">
							<input type="hidden" name="uuid" value="${uuid}">
							<input type="hidden" name="name" value="${title}">
							<textarea name="content" placeholder="2문장 이하, 오늘의 일기"></textarea>
							<input type="submit" value="저장">
						</form>
					</body>
					</html>
					<style>
						textarea {
						width: 500px;
						height: 50px;
						}
					</style>
					`;
			res.send(template);
			});
		});
	});
});

app.post('/:id/daily_upload', function(req, res){
	var uuid = req.body.uuid;
	db.query(`INSERT INTO daily_diary (uuid, content) VALUES (?,?)`, [uuid, req.body.content], function(err){
		if(err) throw err;

	res.redirect(307, `/${req.params.id}/daily`);
	});
});



app.listen(3005);
