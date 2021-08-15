require('dotenv').config();
const { PORT } = process.env; // .env로 정보 유출을 방지 , env는 gitignore에 등록되어있습니다.

//FRAMEWORK 
const express = require('express');

//DATABASE
const db = require('./config/db.js');

//MODULE
//const diary = require('./lib/diary.js');
const temp_tdg = require('./test_data_generater.js');
const date_ob = new Date();
const tools = require('./tools.js');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const adminRouter = require('./routers/admin');
const userRouter = require('./routers/user');
const diaryRouter = require('./routers/diary');

app.use('/admin', adminRouter);
app.use('/user', userRouter);
app.use('/diary', diaryRouter);








app.get('/', function(req, res){
	db.query(`SELECT * FROM user`, function(err, user){

	var index_year = date_ob.getFullYear();
	var index_month = date_ob.getMonth()+1;
	var index_date = tools.switch_MD_to_D(date_ob.getMonth()+1, date_ob.getDate());

	var empty_or_not = 1;
	if(user == undefined)
		empty_or_not = 0;

	var user_list = `
					<form action="/user/register" method="post">
						<input type="text" name="email" value="email@email.com">
						<input type="hidden" name="pw" value="1">
						<input type="text" name="nickname" value="nickname">
						<input type="date" name="birthdate" value="">
						<input type="hidden" name="sex" value="F">
						<input type="hidden" name="address" value="abc">

						<input type="submit" value="test">
					</form>
			<tr>`;

	if(empty_or_not != 0){
		for(var i = 0; i < user.length; i++)
			user_list += `
				<td>${user[i].id}</td>
				<td>${user[i].nickname}</td>

				<td>
					<form action="/diary/daily/${user[i].nickname}?year=${index_year}&month=${index_month}&date=${index_date}" method="post">
						<input type="hidden" name="user_id" value="${user[i].id}">
						<input type="submit" value="daily diary">
					</form>
				</td>

				<td>
					<form action="/${user[i].nickname}/test_data_generate" method="post">
						<input type="hidden" name="user_id" value="${user[i].id}">
						<input type="submit" value="generate_test_date">
					</form>
				</td>

				<td>
					<form action="/delete_process" method="post">
						<input type="hidden" name="user_id" value="${user[i].id}">
						<input type="submit" value="delete_user">
					</form>
				</td>
				</tr><tr>`;
	}
	user_list += `</tr>`;
	var html = `
		<!doctype html>
		<html>
		<head>
			<title>5y diary</title>
			<meta charset="utf-8">
		</head>
		<body>
			<h1>5year diary</h1>
			<h2>who's diary?</h2>
			<br>
			<br>
			<br>
			<br>
			<br>
			<p>
				<a href="/create">create</a>
			</p>
			<table>
				<tr>
					<td>순번</td>
					<td>이름</td>
				</tr>
				${user_list}
			</table>
		</body>
		</html>
		<style>
			td {
			border : solid; 1px;
			}
		</style>
		`;
	res.send(html);
	});
});

app.post('/:id/test_data_generate', function(req, res){
	temp_tdg.gen(req,res);
});


/*
app.post('/:id_number/daily_diary_upload', function(req, res){
	db.query(`INSERT INTO daily_diary (id_number, Question) VALUES(?, ?)`, [req.body.id_number, req.body.daily_diary_Question], function(err){
		if(err) throw err;
		res.redirect(`/`);
	});
});


app.post('/:id_number/monthly_diary_upload', function(req, res){
	db.query(`INSERT INTO monthly_diary (id_number, Question) VALUES(?, ?)`, [req.body.id_number, req.body.monthly_diary_Question], function(err){
		if(err) throw err;
		res.redirect(`/`);
	});
});
*/


const port = PORT || 3000; // PORT 값이 없다면 3000을 사용합니다.
app.listen(port,()=>{console.log('Listening to port %d', port)});
