const db = require('./db.js');
const tools = require('./tools.js');



module.exports = {
	gen: function(req, res){

		var user_id;
		var classes;
		var created_date;
		var content;
		var question;
		var score;


		//DAILY
		for(var y=2010; y <= 2030; y++){
			for(i=1; i <= 365; i++){
				user_id = req.body.user_id;
				classes = 'd'
				created_date = y + ':' + tools.switch_onlyM_from_D(i) + ':' + tools.switch_D_to_common_D(i);
				content = `${y}년 ${i}번째 content`;
				question = `${y}년 ${i}번째 날의 Question`;
				score = 3;

				db.query(`INSERT INTO diary (user_id, classes, created_date, content, question, score) VALUES(?, ?, ?, ?, ?, ?)`, [user_id, classes, created_date, content, question, score], function(err){

					if(err) throw err;
				});
			}
		}



		//MONTHLY
		for(var y=2010; y <= 2030; y++){
			for(i=1; i <= 12; i++){
				user_id = req.body.user_id;
				classes = 'm'
				created_date = y + ':' + i + ':' + tools.switch_D_to_common_D(i);
				content = `${y}년 ${i}월의 월간 content`;
				question = `${y}년 ${i}월의 월간 Question`;

				db.query(`INSERT INTO diary (user_id, classes, created_date, content, question) VALUES(?, ?, ?, ?, ?)`, [user_id, classes, created_date, content, question], function(err){

					if(err) throw err;
				});
			}
		}
		


		//ANNUALY

/*
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
*/

		console.log('data generated successfully');
		res.redirect('/');
	}
}
	
