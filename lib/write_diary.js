const db = require('./db.js');
const templateD = require('./template/templateD.js');
const templateM_mode_A = require('./template/templateM_mode_A.js');
const templateM_mode_B = require('./template/templateM_mode_B.js');
const tools = require('./tools.js');
const date_ob = new Date();
//31,28,31,30,31,30,31,31,30,31,30,31

exports.daily = function(req, res){
	var whos = req.params.id;
	var id_number = req.body.id_number;
	var focused_year = Number(req.query.year);
	var focused_month = Number(req.query.month);
	var focused_date = Number(req.query.date);

	db.query(`SELECT * FROM daily_diary WHERE (id_number=? AND temperal_date=?) OR (id_number=? AND temperal_date=?)`, [id_number, focused_date, id_number, focused_date-1], function(err, daily_diary){
		if(err) throw err;

		var answer;
		for(answer = 0; answer < daily_diary.length; answer++){
			if(daily_diary[answer].temperal_year == focused_year){
				var daily_diary_lv1_L = daily_diary[answer-7];
				var daily_diary_lv1_R = daily_diary[answer-6];
				var daily_diary_lv2_L = daily_diary[answer-5];
				var daily_diary_lv2_R = daily_diary[answer-4];
				var daily_diary_lv3_L = daily_diary[answer-3];
				var daily_diary_lv3_R = daily_diary[answer-2];
				var daily_diary_lv4_L = daily_diary[answer-1];
				var daily_diary_lv4_R = daily_diary[answer-0];
			}
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
		<div class="date" id="date_lv1_L">${daily_diary_lv1_L.temperal_year}.${daily_diary_lv1_L.temperal_month}.${tools.switch_D_to_common_D(daily_diary_lv1_L.temperal_date)}</div>
		<div class="content" id="content_lv1_L">${daily_diary_lv1_L.comment}</div>
		<div class="date" id="date_lv2_L">${daily_diary_lv2_L.temperal_year}.${daily_diary_lv2_L.temperal_month}.${tools.switch_D_to_common_D(daily_diary_lv2_L.temperal_date)}</div>
		<div class="content" id="content_lv2_L">${daily_diary_lv2_L.comment}</div>
		<div class="date" id="date_lv3_L">${daily_diary_lv3_L.temperal_year}.${daily_diary_lv3_L.temperal_month}.${tools.switch_D_to_common_D(daily_diary_lv3_L.temperal_date)}</div>
		<div class="content" id="content_lv3_L">${daily_diary_lv3_L.comment}</div>
		<div class="date" id="date_lv4_L">${daily_diary_lv4_L.temperal_year}.${daily_diary_lv4_L.temperal_month}.${tools.switch_D_to_common_D(daily_diary_lv4_L.temperal_date)}</div>
		<div class="content" id="content_lv4_L">${daily_diary_lv4_L.comment}</div>

		<div class="date" id="date_lv1_R">${daily_diary_lv1_R.temperal_year}.${daily_diary_lv1_R.temperal_month}.${tools.switch_D_to_common_D(daily_diary_lv1_R.temperal_date)}</div>
		<div class="content" id="content_lv1_R">${daily_diary_lv1_R.comment}</div>
		<div class="date" id="date_lv2_R">${daily_diary_lv2_R.temperal_year}.${daily_diary_lv2_R.temperal_month}.${tools.switch_D_to_common_D(daily_diary_lv2_R.temperal_date)}</div>
		<div class="content" id="content_lv2_R">${daily_diary_lv2_R.comment}</div>
		<div class="date" id="date_lv3_R">${daily_diary_lv3_R.temperal_year}.${daily_diary_lv3_R.temperal_month}.${tools.switch_D_to_common_D(daily_diary_lv3_R.temperal_date)}</div>
		<div class="content" id="content_lv3_R">${daily_diary_lv3_R.comment}</div>
		<div class="date" id="date_lv4_R">${daily_diary_lv4_R.temperal_year}.${daily_diary_lv4_R.temperal_month}.${tools.switch_D_to_common_D(daily_diary_lv4_R.temperal_date)}</div>
		<div class="content" id="content_lv4_R">${daily_diary_lv4_R.comment}</div>
		`;

		var html = templateD.daily_template(whos, content, id_number, focused_year, focused_month, focused_date); 
		res.send(html);
	});
}



exports.monthly_mode_A = function(req, res){
	var whos = req.params.id;
	var id_number = req.body.id_number;
	var focused_year = Number(req.query.year);
	var focused_month = Number(req.query.month);
	var focused_date = Number(req.query.date);
			//당해년도~3년전 일기까지 총 4년치 보여주기(물론 당해년도 일기는 우측 분할화면에서 작성중임...
		db.query(`SELECT * FROM monthly_diary WHERE (id_number=? AND temperal_month=?) OR (id_number=? AND temperal_month=?)`, [id_number, focused_month, id_number, focused_month-1], function(err, monthly_diary){
			var loaded_month = monthly_diary[0].temperal_month;

			var answer;
			for(answer = 0; answer < monthly_diary.length; answer++){
				if(monthly_diary[answer].temperal_year == focused_year){
					var monthly_diary_lv1_L = monthly_diary[answer-7];
					var monthly_diary_lv1_R = monthly_diary[answer-6];
					var monthly_diary_lv2_L = monthly_diary[answer-5];
					var monthly_diary_lv2_R = monthly_diary[answer-4];
					var monthly_diary_lv3_L = monthly_diary[answer-3];
					var monthly_diary_lv3_R = monthly_diary[answer-2];
					var monthly_diary_lv4_L = monthly_diary[answer-1];
					var monthly_diary_lv4_R = monthly_diary[answer-0];
				}
			}

			var content = `
			<div class="date" id="date_lv1_L">${monthly_diary_lv1_L.temperal_year}.${monthly_diary_lv1_L.temperal_month}</div>
			<div class="content" id="content_lv1_L">${monthly_diary_lv1_L.comment}</div>
			<div class="content_summary" id="content_summary_lv1_L">${monthly_diary_lv1_L.Question}</div>

			<div class="date" id="date_lv1_R">${monthly_diary_lv1_R.temperal_year}.${monthly_diary_lv1_R.temperal_month}</div>
			<div class="content" id="content_lv1_R">${monthly_diary_lv1_R.comment}</div>
			<div class="content_summary" id="content_summary_lv1_R">${monthly_diary_lv1_R.Question}</div>

			<div class="date" id="date_lv2_L">${monthly_diary_lv2_L.temperal_year}.${monthly_diary_lv2_L.temperal_month}</div>
			<div class="content" id="content_lv2_L">${monthly_diary_lv2_L.comment}</div>
			<div class="content_summary" id="content_summary_lv2_L">${monthly_diary_lv2_L.Question}</div>

			<div class="date" id="date_lv2_R">${monthly_diary_lv2_R.temperal_year}.${monthly_diary_lv2_R.temperal_month}</div>
			<div class="content" id="content_lv2_R">${monthly_diary_lv2_R.comment}</div>
			<div class="content_summary" id="content_summary_lv2_R">${monthly_diary_lv2_R.Question}</div>

			<div class="date" id="date_lv3_L">${monthly_diary_lv3_L.temperal_year}.${monthly_diary_lv3_L.temperal_month}</div>
			<div class="content" id="content_lv3_L">${monthly_diary_lv3_L.comment}</div>
			<div class="content_summary" id="content_summary_lv3_L">${monthly_diary_lv3_L.Question}</div>

			<div class="date" id="date_lv3_R">${monthly_diary_lv3_R.temperal_year}.${monthly_diary_lv3_R.temperal_month}</div>
			<div class="content" id="content_lv3_R">${monthly_diary_lv3_R.comment}</div>
			<div class="content_summary" id="content_summary_lv3_R">${monthly_diary_lv3_R.Question}</div>

			<div class="date" id="date_lv4_L">${monthly_diary_lv4_L.temperal_year}.${monthly_diary_lv4_L.temperal_month}</div>
			<div class="content" id="content_lv4_L">${monthly_diary_lv4_L.comment}</div>
			<div class="content_summary" id="content_summary_lv4_L">${monthly_diary_lv4_L.Question}</div>

			<div class="date" id="date_lv4_R">${monthly_diary_lv4_R.temperal_year}.${monthly_diary_lv4_R.temperal_month}</div>
			<div class="content" id="content_lv4_R">${monthly_diary_lv4_R.comment}</div>
			<div class="content_summary" id="content_summary_lv4_R">${monthly_diary_lv4_R.Question}</div>
			`;

			var html = templateM_mode_A.monthly_mode_A_template(whos, content, id_number, focused_year, focused_month, focused_date); 
			res.send(html);
		});
}

exports.monthly_mode_B = function(req, res){
	var whos = req.params.id;
	var id_number = req.body.id_number;
	var focused_year = Number(req.query.year);
	var focused_month = Number(req.query.month);
	var focused_date = Number(req.query.date);
			//당해년도~3년전 일기까지 총 4년치 보여주기(물론 당해년도 일기는 우측 분할화면에서 작성중임...
		db.query(`SELECT * FROM daily_diary WHERE id_number=? AND temperal_year=? AND temperal_month=?`, [id_number, focused_year-0, focused_month], function(err, daily_diary){
			var loaded_month = daily_diary[0].temperal_month;

			var i;
			var content = ``;
			for(i=0; i < daily_diary.length; i++){
				content += `
				<div class="content" id="content_${i}">${daily_diary[i].comment}</div>
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

			var html = templateM_mode_B.monthly_mode_B_template(whos, content, calander, id_number, focused_year, focused_month, focused_date, daily_diary.length); 
			res.send(html);
		});
}


					// annaul diary의 경우 고유 index를 user의 '나이'로 잡으면 쉽게 고유값이 된다. 차후 반영하자.
					//0~9세 아이의 일기를 생각해보다 떠오른 아이디어인데, 한 7살까지 엄마가 일기를 대신 써 주고 이후부터 자식이 이어쓸 수 있도록 '선물' 개념으로 이어주는것도 하나의 문화컨텐츠로 판매할 수 있을 것 같다.

/*

exports.annaully = function(req, res){
	var uuid = req.body.uuid;
	var focus_year = Number(req.query.id);
	var focus_date = Number(req.query.date);
	var focus_month = Number(req.query.month);
	var title = req.params.id;
	db.query(`SELECT * FROM test_lifelong_diary WHERE uuid=? AND year=?`, [uuid, focus_year], function(err, age_section_at_focus_year){
		var where_to_load = age_section_at_focus_year[0].age_section;
		var	now = Number(age_section_at_focus_year[0].current_age) - Number(where_to_load + "0");
			db.query(`SELECT * FROM test_lifelong_diary WHERE uuid=? AND age_section=?`, [uuid, where_to_load], function(err, all_contents){
				var i;
				var content = ``;
				for(i=0; i<10; i++){
					content += `
						<div class="content_year lv${i}" id="content_${i}_year">${all_contents[i].year}</div>
						<div class="content_summary lv${i}" id="content_${i}_summary">${all_contents[i].summary}</div>
						<div class="content_content lv${i}" id="content_${i}_content">${all_contents[i].content}</div>
					`;
				}

				var template = templateA.lifelong_template(title, content, uuid, focus_year, focus_date, focus_month, where_to_load, now);
				
				res.send(template);
		});
	});
}


exports.picture_story= function(req, res){
}
*/
