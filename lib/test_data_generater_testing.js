const db = require('./db.js');
const tools = require('./tools.js');



module.exports = {
	gen: function(req, res){

		var id_number;
		var Question;
		var comment;
		var counter;
		var date;
		var time;
		var star_score;

		//for testing only  __ start ___
		var temperal_year;
		var temperal_month;
		var temperal_date;
		//for testing only  __ end ___


		var temp_y;

		//daily
		for(temp_y=2010; temp_y <= 2030; temp_y++){
			for(i=1; i <= 365; i++){
				id_number = req.body.id_number;
				Question = `${temp_y}년 ${i}번째 날의 Question`;
				comment = `${temp_y}년 ${i}번째 comment`;
				couter = i;
				writing_date = null;
				writing_time = null;
				star_score = 3;

				temperal_year = temp_y;
				temperal_month = tools.switch_onlyM_from_D(i);
				temperal_date = i;


				db.query(`INSERT INTO daily_diary (id_number, Question, comment, counter, writing_date, writing_time, star_score, temperal_year, temperal_month, temperal_date) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [id_number, Question, comment, counter, writing_date, writing_time, star_score, temperal_year, temperal_month, temperal_date], function(err){
					if(err) throw err;
				});
			}
		}


		//monthly
		for(temp_y=2010; temp_y <= 2030; temp_y++){
			for(i=1; i <= 12; i++){
				id_number = req.body.id_number;
				Question = `${temp_y}년 ${i}월의 월간 Question`;
				comment = `${temp_y}년 ${i}월의 월간 comment`;
				couter = i;
				writing_date = null;
				writing_time = null;
				star_score = 3;

				temperal_year = temp_y;
				temperal_month = i;
				temperal_date = null;

				db.query(`INSERT INTO monthly_diary (id_number, Question, comment, counter, writing_date, writing_time, temperal_year, temperal_month, temperal_date) VALUES( ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [id_number, Question, comment, counter, writing_date, writing_time, temperal_year, temperal_month, temperal_date], function(err){
					if(err) throw err;
				});
			}
		}

		//annualy
		for (temp_y=2010; temp_y<= 2030; temp_y++){
			id_number = req.body.id_number;
			Question = `${temp_y}년도의 연간 Question`;
			comment = `${temp_y}년의 연간 comment`;
			couter = null;
			writing_date = null;
			writing_time = null;
			star_score = 3;

			temperal_year = temp_y;
			temperal_month = null;
			temperal_date = null;

			db.query(`INSERT INTO annual_diary (id_number, Question, comment, counter, writing_date, writing_time, temperal_year, temperal_month, temperal_date) VALUES( ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [id_number, Question, comment, counter, writing_date, writing_time, temperal_year, temperal_month, temperal_date], function(err){
				if(err) throw err;
			});
		}

		res.send('ok?');
	}
}
	
