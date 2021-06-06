const db = require('./db.js');
const tools = require('./tools.js');



module.exports = {
	gen: function(req, res){

		var uuid;
		var year;
		var month;
		var date;
		var content;
		var content_summary;

		var temp_y;

		//daily
		for(temp_y=2010; temp_y <= 2030; temp_y++){
			for(i=1; i <= 365; i++){
				uuid = req.body.uuid;
				year = temp_y;
				date = i;
				month = tools.switch_onlyM_from_D(date);
				content = `${year}년 ${date}번째 날의 일기`;

				db.query(`INSERT INTO daily_diary (uuid, year, month, date, content) VALUES(?, ?, ?, ?, ?)`, [uuid, year, month, date, content], function(err){
					if(err) throw err;
				/*     윤년 체크 필요하다면 사용하자.
				db.query(`INSERT INTO test_daily_diary (uuid, content, year, d_index) VALUES(?, ?, ?, ?)`, [req.body.uuid, "올해는 윤년이 아닙니다.", y, 366], function(err){
					if(err) throw err;
				});
				*/
				});
			}
		}

		//monthly
		for(temp_y=2010; temp_y <= 2030; temp_y++){
			for(i=1; i <= 12; i++){
				uuid = req.body.uuid;
				year = temp_y;
				month = i;
				content = `${year}년 ${month}월의 월간 일기`;
				content_summary = `${year}년 ${month}월의 월간 일기 <<요약본>>`;

				db.query(`INSERT INTO monthly_diary (uuid, year, month, content, content_summary) VALUES(?, ?, ?, ?, ?)`, [uuid, year, month, content, content_summary], function(err){
					if(err) throw err;
				});
			}
		}
		//annualy
		for (temp_y=2010; temp_y<= 2030; temp_y++){
			uuid = req.body.uuid;
			year = temp_y;
			content = `${year}년도의 연간 일기`;
			content_summary = `${year}년의 연간 일기 <<요약본>>`;
				
			db.query(`INSERT INTO annualy_diary (uuid, year, content, content_summary) VALUES(?, ?, ?, ?)`, [uuid, year, content, content_summary], function(err){
				if(err) throw err;
			});
		}

		res.send('ok');
	}
}
	
