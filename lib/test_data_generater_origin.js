const db = require('./db.js');


module.exports = {
	gen: function(req, res){

		var date;
		var content;
		var summary;
		var i;
		var y;
		//daily
		for (y=2019; y<= 2022; y++) 
		{
			for (i=1; i <= 365; i++){
				date = y + '-' + i;
				content = `${y}년 ${i}번째 날의 일기`;
				db.query(`INSERT INTO test_daily_diary (uuid, test_date, content) VALUES(?, ?, ?)`, [req.body.uuid, date, content], function(err){
					if(err) throw err;
				});
			}
		}
		//weekly
		for (y=2019; y<= 2022; y++) 
		{
			for (i=1; i <= 48; i++){
				date = y + '-' + i;
				if(i % 4 != 0)
					content = `${y}년 ${i}번째 주(= ${Math.ceil(i / 4)}월 ${i % 4}째주)의 주간 정리 일기`;
				else if(i % 4 == 0)
					content = `${y}년 ${i}번째 주(= ${Math.ceil(i / 4)}월 ${i % 4 + 4}째주)의 주간 정리 일기`;
				db.query(`INSERT INTO test_weekly_diary (uuid, test_date, content) VALUES(?, ?, ?)`, [req.body.uuid, date, content], function(err){
					if(err) throw err;
				});
			}
		}
		//monthly
		for (y=2019; y<= 2022; y++) 
		{
			for (i=1; i <= 12; i++){
				date = y + '-' + i;
				content = `${y}년 ${i}월의 월간 정리 일기(2~3문단)`;
				summary = `${y}년 ${i}월의 월간 요약(1~2줄로 핵심 주제 표현)`;
				db.query(`INSERT INTO test_monthly_diary (uuid, test_date, content, summary) VALUES(?, ?, ?, ?)`, [req.body.uuid, date, content, summary], function(err){
					if(err) throw err;
				});
			}
		}
		//annually
		for (y=2019; y<= 2022; y++) 
		{
			i = 1;
			date = y + '-' + i;
			content = `${y}년 연간 정리 일기(1 페이지 정도)`;
			summary = `${y}년 연간 요약(1~2줄로 핵심 주제 표현)`;
			db.query(`INSERT INTO test_annualy_diary (uuid, test_date, content, summary) VALUES(?, ?, ?, ?)`, [req.body.uuid, date, content, summary], function(err){
				if(err) throw err;
			});
		}

		res.send("hey Sangyeon, data generating success");
	}
}
	
