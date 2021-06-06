const db = require('./db.js');
const templateD = require('./template/templateD.js');
const templateM_mode_A = require('./template/templateM_mode_A.js');
const templateM_mode_B = require('./template/templateM_mode_B.js');
const tools = require('./tools.js');
const date_ob = new Date();
//31,28,31,30,31,30,31,31,30,31,30,31

exports.daily = function(req, res){
	var uuid = req.body.uuid;
	var focused_year = Number(req.query.year);
	var focused_month = Number(req.query.month);
	var focused_date = Number(req.query.date);
			//당해년도~3년전 일기까지 총 4년치 보여주기(물론 당해년도 일기는 우측 분할화면에서 작성중임...
		db.query(`SELECT * FROM daily_diary WHERE uuid=? AND year=? AND date=?`, [uuid, focused_year-3, focused_date], function(err, daily_diary_lv1){
		db.query(`SELECT * FROM daily_diary WHERE uuid=? AND year=? AND date=?`, [uuid, focused_year-2, focused_date], function(err, daily_diary_lv2){
		db.query(`SELECT * FROM daily_diary WHERE uuid=? AND year=? AND date=?`, [uuid, focused_year-1, focused_date], function(err, daily_diary_lv3){
		db.query(`SELECT * FROM daily_diary WHERE uuid=? AND year=? AND date=?`, [uuid, focused_year-0, focused_date], function(err, daily_diary_lv4){
			var whos = req.params.id;
			var loaded_month = daily_diary_lv1[0].month;
			//console.log(daily_diary_lv1[0].date)
			//console.log(tools.switch_D_to_common_D(daily_diary_lv1[0].date));

			var content = `
			<div class="date" id="date_lv1">${daily_diary_lv1[0].year}.${daily_diary_lv1[0].month}.${tools.switch_D_to_common_D(daily_diary_lv1[0].date)}</div>
			<div class="content" id="content_lv1">${daily_diary_lv1[0].content}</div>
			<div class="date" id="date_lv2">${daily_diary_lv2[0].year}.${daily_diary_lv2[0].month}.${tools.switch_D_to_common_D(daily_diary_lv2[0].date)}</div>
			<div class="content" id="content_lv2">${daily_diary_lv2[0].content}</div>
			<div class="date" id="date_lv3">${daily_diary_lv3[0].year}.${daily_diary_lv3[0].month}.${tools.switch_D_to_common_D(daily_diary_lv3[0].date)}</div>
			<div class="content" id="content_lv3">${daily_diary_lv3[0].content}</div>
			<div class="date" id="date_lv4">${daily_diary_lv4[0].year}.${daily_diary_lv4[0].month}.${tools.switch_D_to_common_D(daily_diary_lv4[0].date)}</div>
			<div class="content" id="content_lv4">${daily_diary_lv4[0].content}</div>
			`;

			var html = templateD.daily_template(whos, content, uuid, focused_year, focused_month, focused_date, loaded_month); 
			res.send(html);
		});
		});
		});
		});
}

exports.monthly_mode_A = function(req, res){
	var uuid = req.body.uuid;
	var focused_year = Number(req.query.year);
	var focused_month = Number(req.query.month);
	var focused_date = Number(req.query.date);
			//당해년도~3년전 일기까지 총 4년치 보여주기(물론 당해년도 일기는 우측 분할화면에서 작성중임...
		db.query(`SELECT * FROM monthly_diary WHERE uuid=? AND year=? AND month=?`, [uuid, focused_year-3, focused_month], function(err, monthly_diary_lv1){
		db.query(`SELECT * FROM monthly_diary WHERE uuid=? AND year=? AND month=?`, [uuid, focused_year-2, focused_month], function(err, monthly_diary_lv2){
		db.query(`SELECT * FROM monthly_diary WHERE uuid=? AND year=? AND month=?`, [uuid, focused_year-1, focused_month], function(err, monthly_diary_lv3){
		db.query(`SELECT * FROM monthly_diary WHERE uuid=? AND year=? AND month=?`, [uuid, focused_year-0, focused_month], function(err, monthly_diary_lv4){
			var whos = req.params.id;
			var loaded_month = monthly_diary_lv1[0].month;
			//console.log(monthly_diary_lv1[0].date)
			//console.log(tools.switch_D_to_common_D(monthly_diary_lv1[0].date));

			var content = `
			<div class="date" id="date_lv1">${monthly_diary_lv1[0].year}.${monthly_diary_lv1[0].month}</div>
			<div class="content" id="content_lv1">${monthly_diary_lv1[0].content}</div>
			<div class="content_summary" id="content_summary_lv1">${monthly_diary_lv1[0].content_summary}</div>
			<div class="date" id="date_lv2">${monthly_diary_lv2[0].year}.${monthly_diary_lv2[0].month}</div>
			<div class="content" id="content_lv2">${monthly_diary_lv2[0].content}</div>
			<div class="content_summary" id="content_summary_lv2">${monthly_diary_lv2[0].content_summary}</div>
			<div class="date" id="date_lv3">${monthly_diary_lv3[0].year}.${monthly_diary_lv3[0].month}</div>
			<div class="content" id="content_lv3">${monthly_diary_lv3[0].content}</div>
			<div class="content_summary" id="content_summary_lv3">${monthly_diary_lv3[0].content_summary}</div>
			<div class="date" id="date_lv4">${monthly_diary_lv4[0].year}.${monthly_diary_lv4[0].month}</div>
			<div class="content" id="content_lv4">${monthly_diary_lv4[0].content}</div>
			<div class="content_summary" id="content_summary_lv4">${monthly_diary_lv4[0].content_summary}</div>
			`;

			var html = templateM_mode_A.monthly_mode_A_template(whos, content, uuid, focused_year, focused_month, focused_date, loaded_month); 
			res.send(html);
		});
		});
		});
		});
}

exports.monthly_mode_B = function(req, res){
	var uuid = req.body.uuid;
	var focused_year = Number(req.query.year);
	var focused_month = Number(req.query.month);
	var focused_date = Number(req.query.date);
			//당해년도~3년전 일기까지 총 4년치 보여주기(물론 당해년도 일기는 우측 분할화면에서 작성중임...
		db.query(`SELECT * FROM daily_diary WHERE uuid=? AND year=? AND month=?`, [uuid, focused_year-0, focused_month], function(err, daily_diary){
			var whos = req.params.id;
			var loaded_month = daily_diary[0].month;
			//console.log(loaded_month)
			//console.log(tools.switch_D_to_common_D(monthly_diary_lv1[0].date));

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

			var html = templateM_mode_B.monthly_mode_B_template(whos, content, calander, uuid, focused_year, focused_month, focused_date, loaded_month, daily_diary.length); 
			res.send(html);
		});
}


					// annaul diary의 경우 고유 index를 user의 '나이'로 잡으면 쉽게 고유값이 된다. 차후 반영하자.
					//0~9세 아이의 일기를 생각해보다 떠오른 아이디어인데, 한 7살까지 엄마가 일기를 대신 써 주고 이후부터 자식이 이어쓸 수 있도록 '선물' 개념으로 이어주는것도 하나의 문화컨텐츠로 판매할 수 있을 것 같다.



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
