const db = require('../config/db.js');

//const daily_view = require('./template/D.js');
//
//const monthly_modeA_view = require('./template/MA.js');
//const monthly_modeB_view = require('./template/MB.js');


const tools = require('../tools.js');





exports.daily = (req, res) => {
	var whos = req.params.id;
	var user_id = req.body.user_id;
	var focused_year = Number(req.query.year);
	var focused_month = Number(req.query.month);
	var focused_date = Number(tools.switch_D_to_common_D(req.query.date));

	var year_con1 = "'" + (focused_year-3) + "'";
	var year_con2 = "'" + focused_year + "'";

	var date_con1 = "'" + (focused_date) + "'";
	var date_con2 = "'" + (focused_date+1) + "'";

	console.log('user_id: ', user_id);
	console.log('user_id: ', user_id);
	console.log('user_id: ', user_id);
	console.log('user_id: ', user_id);
	db.query(`SELECT * FROM diary WHERE (user_id=?) 
		AND (classes = 'd')
		AND (YEAR(created_date) BETWEEN ${year_con1} AND ${year_con2}) 
		AND (MONTH(created_date) = ${focused_month})
		AND (DAY(created_date) BETWEEN ${date_con1} AND ${date_con2})
		`, [user_id], function(err, daily_diary){

		if(err) throw err;

		var answer;
		
		for(answer = 0; answer < daily_diary.length; answer++){
			var daily_diary_lv1_L = daily_diary[answer-7];
			var daily_diary_lv1_R = daily_diary[answer-6];
			var daily_diary_lv2_L = daily_diary[answer-5];
			var daily_diary_lv2_R = daily_diary[answer-4];
			var daily_diary_lv3_L = daily_diary[answer-3];
			var daily_diary_lv3_R = daily_diary[answer-2];
			var daily_diary_lv4_L = daily_diary[answer-1];
			var daily_diary_lv4_R = daily_diary[answer-0];
		}

		var a = daily_diary_lv1_L;
		var b = daily_diary_lv1_R;
		var c = daily_diary_lv2_L;
		var d = daily_diary_lv2_R;
		var e = daily_diary_lv3_L;
		var f = daily_diary_lv3_R;
		var g = daily_diary_lv4_L;
		var h = daily_diary_lv4_R;


		if(a == undefined || b == undefined || c == undefined || d == undefined || e == undefined || f == undefined || g == undefined || h == undefined)
			res.send("there is no more data saved, go backward");

		var content = `
		<div class="date" id="date_lv1_L">${daily_diary_lv1_L.created_date}</div>
		<div class="Question" id="Question_lv1_L">${daily_diary_lv1_L.question}</div>
		<div class="content" id="content_lv1_L">${daily_diary_lv1_L.content}</div>
		<div class="date" id="date_lv2_L">${daily_diary_lv2_L.created_date}</div>
		<div class="Question" id="Question_lv2_L">${daily_diary_lv2_L.question}</div>
		<div class="content" id="content_lv2_L">${daily_diary_lv2_L.content}</div>
		<div class="date" id="date_lv3_L">${daily_diary_lv3_L.created_date}</div>
		<div class="Question" id="Question_lv3_L">${daily_diary_lv3_L.question}</div>
		<div class="content" id="content_lv3_L">${daily_diary_lv3_L.content}</div>
		<div class="date" id="date_lv4_L">${daily_diary_lv4_L.created_date}</div>
		<div class="Question" id="Question_lv4_L">${daily_diary_lv4_L.question}</div>
		<div class="content" id="content_lv4_L">${daily_diary_lv4_L.content}</div>

		<div class="date" id="date_lv1_R">${daily_diary_lv1_R.created_date}</div>
		<div class="Question" id="Question_lv1_R">${daily_diary_lv1_R.question}</div>
		<div class="content" id="content_lv1_R">${daily_diary_lv1_R.content}</div>
		<div class="date" id="date_lv2_R">${daily_diary_lv2_R.created_date}</div>
		<div class="Question" id="Question_lv2_R">${daily_diary_lv2_R.question}</div>
		<div class="content" id="content_lv2_R">${daily_diary_lv2_R.content}</div>
		<div class="date" id="date_lv3_R">${daily_diary_lv3_R.created_date}</div>
		<div class="Question" id="Question_lv3_R">${daily_diary_lv3_R.question}</div>
		<div class="content" id="content_lv3_R">${daily_diary_lv3_R.content}</div>
		<div class="date" id="date_lv4_R">${daily_diary_lv4_R.created_date}</div>
		<div class="Question" id="Question_lv4_R">${daily_diary_lv4_R.question}</div>
		<div class="content" id="content_lv4_R">${daily_diary_lv4_R.content}</div>
		`;

		var html = daily_view.template(whos, content, user_id, focused_year, focused_month, focused_date); 
		res.send(html);
	});
}

exports.monthly_mode_A = (req, res) => {
	var whos = req.params.id;
	var user_id = req.body.user_id;
	var focused_year = Number(req.query.year);
	var focused_month = Number(req.query.month);
	var focused_date = Number(tools.switch_D_to_common_D(req.query.date));


			//AND (MONTH(created_date)=focused_month OR MONTH(created_date)=(focused_month-1))
	var year_con1 = "'" + (focused_year-3) + "'";
	var year_con2 = "'" + focused_year + "'";

	var month_con1 = "'" + (focused_month-1) + "'";
	var month_con2 = "'" + (focused_month) + "'";

		db.query(`SELECT * FROM diary WHERE (user_id=?)
			AND (classes='m')
			AND (YEAR(created_date) BETWEEN ${year_con1} AND ${year_con2}) 
			AND (MONTH(created_date) BETWEEN ${month_con1} AND ${month_con2}) 
			
			`, [user_id], function(err, monthly_diary){


			var answer;
			for(answer = 0; answer < monthly_diary.length; answer++){
					var monthly_diary_lv1_L = monthly_diary[answer-7];
					var monthly_diary_lv1_R = monthly_diary[answer-6];
					var monthly_diary_lv2_L = monthly_diary[answer-5];
					var monthly_diary_lv2_R = monthly_diary[answer-4];
					var monthly_diary_lv3_L = monthly_diary[answer-3];
					var monthly_diary_lv3_R = monthly_diary[answer-2];
					var monthly_diary_lv4_L = monthly_diary[answer-1];
					var monthly_diary_lv4_R = monthly_diary[answer-0];
			}

			var content = `
			<div class="date" id="date_lv1_L">${monthly_diary_lv1_L.created_date}</div>
			<div class="content" id="content_lv1_L">${monthly_diary_lv1_L.content}</div>
			<div class="content_summary" id="content_summary_lv1_L">${monthly_diary_lv1_L.question}</div>

			<div class="date" id="date_lv1_R">${monthly_diary_lv1_R.created_date}</div>
			<div class="content" id="content_lv1_R">${monthly_diary_lv1_R.content}</div>
			<div class="content_summary" id="content_summary_lv1_R">${monthly_diary_lv1_R.question}</div>

			<div class="date" id="date_lv2_L">${monthly_diary_lv2_L.created_date}</div>
			<div class="content" id="content_lv2_L">${monthly_diary_lv2_L.content}</div>
			<div class="content_summary" id="content_summary_lv2_L">${monthly_diary_lv2_L.question}</div>

			<div class="date" id="date_lv2_R">${monthly_diary_lv2_R.created_date}</div>
			<div class="content" id="content_lv2_R">${monthly_diary_lv2_R.content}</div>
			<div class="content_summary" id="content_summary_lv2_R">${monthly_diary_lv2_R.question}</div>

			<div class="date" id="date_lv3_L">${monthly_diary_lv3_L.created_date}</div>
			<div class="content" id="content_lv3_L">${monthly_diary_lv3_L.content}</div>
			<div class="content_summary" id="content_summary_lv3_L">${monthly_diary_lv3_L.question}</div>

			<div class="date" id="date_lv3_R">${monthly_diary_lv3_R.created_date}</div>
			<div class="content" id="content_lv3_R">${monthly_diary_lv3_R.content}</div>
			<div class="content_summary" id="content_summary_lv3_R">${monthly_diary_lv3_R.question}</div>

			<div class="date" id="date_lv4_L">${monthly_diary_lv4_L.created_date}</div>
			<div class="content" id="content_lv4_L">${monthly_diary_lv4_L.content}</div>
			<div class="content_summary" id="content_summary_lv4_L">${monthly_diary_lv4_L.question}</div>

			<div class="date" id="date_lv4_R">${monthly_diary_lv4_R.created_date}</div>
			<div class="content" id="content_lv4_R">${monthly_diary_lv4_R.content}</div>
			<div class="content_summary" id="content_summary_lv4_R">${monthly_diary_lv4_R.question}</div>
			`;

			var html = monthly_modeA_view.template(whos, content, user_id, focused_year, focused_month, focused_date); 
			res.send(html);
		});
}

exports.monthly_mode_B = (req, res) => {
	var whos = req.params.id;
	var user_id = req.body.user_id;
	var focused_year = Number(req.query.year);
	var focused_month = Number(req.query.month);
	var focused_date = Number(req.query.date);
			//당해년도~3년전 일기까지 총 4년치 보여주기(물론 당해년도 일기는 우측 분할화면에서 작성중임...
		db.query(`SELECT * FROM diary WHERE user_id=?
			AND (YEAR(created_date)=?)
			AND (MONTH(created_date)=?)
			`, [user_id, focused_year-0, focused_month], function(err, daily_diary){

			var i;
			var content = ``;
			for(i=0; i < daily_diary.length; i++){
				content += `
				<div class="content" id="content_${i}">${daily_diary[i].content}</div>
				`;
			}
			var a = focused_year;
			var b = focused_month;
			var c = tools.switch_D_to_common_D(focused_date);

			var calander = ``;
			for(i=0; i < 42; i++){
				var starting_point = tools.get_days_name(a,b,c);
				if(i >= starting_point && i <= daily_diary.length+starting_point-1){
					calander += `
					<div class="days" id="day${i-starting_point+1}"><div>${i-starting_point+1}</div></div>
					`;
				}
				else {
					calander += `
					<div class="days"><div></div></div>
					`;
				}
			}

			var html = monthly_modeB_view.template(whos, content, calander, user_id, focused_year, focused_month, focused_date, daily_diary.length); 
			res.send(html);
		});
}


exports.annualy = (req, res) => {
}

exports.delete = (req, res) => {
}
