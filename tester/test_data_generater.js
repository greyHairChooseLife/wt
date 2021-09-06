const db = require('../config/db.js');
const tools = require('../tools.js');



module.exports = {
	gen: function (req, res){

		var user_id;
		var classes;
		var created_date;
		var content;
		var question;
		var score;


		//DAILY
		for(var y=2010; y <= 2030; y++){
			for(var m=1; m<=12; m++){
				for(var d=1; d<=32; d++){
					user_id = req.params.id;
					classes = 'd'
					created_date = y + ':' + m + ':' + d;
					content = `${y}-${m}-${d}'s content`;
					question = `${y}-${m}-${d}'s question`;
					score = 3;

					db.query(`INSERT INTO diary (user_id, classes, created_date, content, question, score) VALUES(?, ?, ?, ?, ?, ?)`, [user_id, classes, created_date, content, question, score], function(err){
						if(err) throw err;
					});
					if(new Date(y, m, 0).getDate() == d)
						break;
				}
			}
		}



		//MONTHLY
		for(var y=2010; y <= 2030; y++){
			for(var m=1; m<=12; m++){
				const d = 28;
				user_id = req.params.id;
				classes = 'm'
					created_date = y + ':' + m + ':' + d;
				content = `${y}년 ${m}월의 월간 content`;
				question = `${y}년 ${m}월의 월간 Question`;

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
	
