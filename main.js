//FRAMEWORK 
const express = require('express');

//DATABASE
const db = require('./lib/db.js');

//MODULE
const diary = require('./lib/diary.js');
const testing = require('./lib/test_data_generater_testing.js');
const date_ob = new Date();
const tools = require('./lib/tools.js');
//TEMPLATE
const H_template = require('./lib/template/H_template.js');


//
const app = express();
app.use(express.urlencoded());


//----------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------//
app.get('/', function(req, res){
	db.query(`SELECT * FROM user`, function(err, user){

	var index_year = date_ob.getFullYear();
	var index_month = date_ob.getMonth()+1;
	var index_date = tools.switch_MD_to_D(date_ob.getMonth()+1, date_ob.getDate());

	var empty_or_not = 1;
	if(user == undefined)
		empty_or_not = 0;

	var user_list = `<tr>`;

	if(empty_or_not != 0){
		for(var i = 0; i < user.length; i++)
			user_list += `
				<td>${user[i].id}</td>
				<td>${user[i].nickname}</td>

				<td>
					<form action="/${user[i].nickname}/daily?year=${index_year}&month=${index_month}&date=${index_date}" method="post">
						<input type="hidden" name="user_id" value="${user[i].id}">
						<input type="submit" value="일기 쓰기">
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
	var html = H_template.main_template(user_list);
	res.send(html);
	});
});
//----------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------//
app.post('/:id/test_data_generate', function(req, res){
	testing.gen(req,res);
});
//----------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------//
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
					<label>email
						<input type="text" name="email" placeholder="email">
					</label>
					<br>
					<br>
					<label>pw
						<input type="text" name="pw" placeholder="name">
					</label>
					<br>
					<br>
					<label>check it when you want kakaotoken >>>
						<input type="checkbox" name="gen_kakaotoken">
						<input type="hidden" name="kakaotoken" value="">
					</label>
					<br>
					<br>
					<label>nickname
						<input type="text" name="nickname" placeholder="nickname">
					</label>
					<br>
					<br>
					<label>birthdate
						<select name="birthdate_year">
							<option value="1990">1990</option>
							<option value="1991">1991</option>
							<option value="1992">1992</option>
						</select>
						<select name="birthdate_month">
							<option value="1">JAN</option>
							<option value="2">FEB</option>
							<option value="3">MAR</option>
						</select>
						<select id="fin" name="birthdate_date">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</select>
					</label>
					<br>
					<br>
					<label>sex
						<select name="sex">
							<option value="m">man</option>
							<option value="w">woman</option>
						</select>
					</label>
					<br>
					<br>
					<label>address
						<input type="text" name="address" placeholder="address">
					</label>
					<br>
					<br>
					<br>

					<input type="submit">
				</form>
			</html>
			`;
	res.send(template);
});
//----------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------//
app.post('/create_process', function(req, res){
	var taken = req.body;
	var birthdate = taken.birthdate_year + ':' + taken.birthdate_date + ':' + taken.birthdate_date;

	if(taken.kakaotoken == ''){
		db.query(`INSERT INTO user (email, pw, nickname, birthdate, sex, address, created_date) VALUES(?, ?, ?, ?, ?, ?, now())`, [taken.email, taken.pw, taken.nickname, birthdate, taken.sex, taken.address], function(err){
			if(err) throw err;
			res.redirect('/');
		});
	}
	else{
		db.query(`INSERT INTO user (email, pw, kakaotoken, nickname, birthdate, sex, address, created_date) VALUES(?, ?, ?, ?, ?, ?, ?, now())`, [taken.email, taken.pw, taken.kakaotoken, taken.nickname, birthdate, taken.sex, taken.address], function(err){
			if(err) throw err;
			res.redirect('/');
		});
	}
});
//----------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------//
app.post('/delete_process', function(req, res){
	db.query(`DELETE FROM user WHERE id=?`, [req.body.user_id], function(err){
		if(err) throw err;
		res.redirect('/');
	});
});
//----------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------//
app.post('/:id/daily', function(req, res){
	diary.D(req, res);
});
//----------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------//
app.post('/:id_number/daily_diary_upload', function(req, res){
	db.query(`INSERT INTO daily_diary (id_number, Question) VALUES(?, ?)`, [req.body.id_number, req.body.daily_diary_Question], function(err){
		if(err) throw err;
		res.redirect(`/`);
	});
});
//----------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------//
app.post('/:id/monthly_mode_A', function(req, res){
	diary.MA(req, res);
});
//----------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------//
app.post('/:id/monthly_mode_B', function(req, res){
	diary.MB(req, res);
});
//----------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------//
app.post('/:id_number/monthly_diary_upload', function(req, res){
	db.query(`INSERT INTO monthly_diary (id_number, Question) VALUES(?, ?)`, [req.body.id_number, req.body.monthly_diary_Question], function(err){
		if(err) throw err;
		res.redirect(`/`);
	});
});
//----------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------//




app.listen(9995);
