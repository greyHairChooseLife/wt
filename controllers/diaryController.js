const db = require('../config/db.js').promise();

const gen = require('../tester/test_data_generater.js');

//generate dummy data
const dummy = (req, res) => {
	gen.gen(req, res);
	res.send('data settled');
}


const daily = async (req, res) => {

	const user_id = req.params.id;
	const focused_year = Number(req.query.year);
	const focused_month = Number(req.query.month);
	const focused_date = Number(req.query.date);

	const year_from = "'" + (focused_year-3) + "'";
	const year_to = "'" + focused_year + "'";
	const date_from = "'" + (focused_date-1) + "'";
	const date_to = "'" + (focused_date) + "'";

	//timezone issue? 2021-8-23 is actually 2021-8-24. sounds weired? let's try query at node & node. 
	//timezone issue? 2021-8-23 is actually 2021-8-24. sounds weired? let's try query at node & node. 
	//timezone issue? 2021-8-23 is actually 2021-8-24. sounds weired? let's try query at node & node. 
	//timezone issue? 2021-8-23 is actually 2021-8-24. sounds weired? let's try query at node & node. 
	//timezone issue? 2021-8-23 is actually 2021-8-24. sounds weired? let's try query at node & node. 
	//timezone issue? 2021-8-23 is actually 2021-8-24. sounds weired? let's try query at node & node. 
	const db_obj = await db.query(`SELECT created_date, content, question FROM diary WHERE (user_id=?)
		AND (classes = 'd')
		AND (YEAR(created_date) BETWEEN ${year_from} AND ${year_to}) 
		AND (MONTH(created_date) = ${focused_month})
		AND (DAY(created_date) BETWEEN ${date_from} AND ${date_to})
		`, [user_id]);


////////test data generated NOT in order. But it should be okay because real users write diary one by one, aka day by day, aka in order.

//SELECT id, created_date, content, question FROM diary WHERE (user_id=1) AND (classes = 'd') AND (YEAR(created_date) BETWEEN '2018' AND '2021') AND (MONTH(created_date) = '8') AND (DAY(created_date) BETWEEN '25' AND '26');
///////////////////////+------+---------------------+---------------------+----------------------+
///////////////////////| id   | created_date        | content             | question             |
///////////////////////+------+---------------------+---------------------+----------------------+
///////////////////////| 3159 | 2018-08-25 00:00:00 | 2018-8-25's content | 2018-8-25's question |
///////////////////////| 3160 | 2018-08-26 00:00:00 | 2018-8-26's content | 2018-8-26's question |
///////////////////////| 3524 | 2019-08-25 00:00:00 | 2019-8-25's content | 2019-8-25's question |
///////////////////////| 3525 | 2019-08-26 00:00:00 | 2019-8-26's content | 2019-8-26's question |
///////////////////////| 3890 | 2020-08-25 00:00:00 | 2020-8-25's content | 2020-8-25's question |
///////////////////////| 3891 | 2020-08-26 00:00:00 | 2020-8-26's content | 2020-8-26's question |
///////////////////////| 4255 | 2021-08-26 00:00:00 | 2021-8-26's content | 2021-8-26's question |
///////////////////////| 4256 | 2021-08-25 00:00:00 | 2021-8-25's content | 2021-8-25's question |
///////////////////////+------+---------------------+---------------------+----------------------+
		

//////////
////////// can't use 'date_format' properly. date_format(somthing, some format) becomes the obj's key!!
//////////
//////////
//////////
//////////
//////////	let a = String(db_obj[0][0].created_date);
//////////	console.log("a: ", a);
//////////	
//////////	a = a.split('00:00:00');
//////////	console.log("a: ", a[0]);

	// check wether db_obj is undefined or not.

	const db_obj_ejs = {
		L1_date : db_obj[0][0].created_date,
		L2_date : db_obj[0][2].created_date,
		L3_date : db_obj[0][4].created_date,
		L4_date : db_obj[0][6].created_date,
 
		L1_content : db_obj[0][0].content,
		L2_content : db_obj[0][2].content,
		L3_content : db_obj[0][4].content,
		L4_content : db_obj[0][6].content,

		L1_question : db_obj[0][0].question,
		L2_question : db_obj[0][2].question,
		L3_question : db_obj[0][4].question,
		L4_question : db_obj[0][6].question,

		R1_date : db_obj[0][1].created_date,
		R2_date : db_obj[0][3].created_date,
		R3_date : db_obj[0][5].created_date,
		R4_date : db_obj[0][7].created_date,
 
		R1_content : db_obj[0][1].content,
		R2_content : db_obj[0][3].content,
		R3_content : db_obj[0][5].content,
		R4_content : db_obj[0][7].content,

		R1_question : db_obj[0][1].question,
		R2_question : db_obj[0][3].question,
		R3_question : db_obj[0][5].question,
		R4_question : db_obj[0][7].question,

		index_year: focused_year,
		index_month: focused_month,
		index_date: focused_date,
		user_id: user_id,
	}

	console.log(db_obj[0]);
	console.log("====================================================================================================");
	console.log(db_obj_ejs);

	res.render('../views/diary/daily', db_obj_ejs);
}


const monthly_mode_A = async (req, res) => {

	const user_id = req.params.id;
	const focused_year = Number(req.query.year);
	const focused_month = Number(req.query.month);
	const focused_date = Number(req.query.date);

	const year_from = "'" + (focused_year-3) + "'";
	const year_to = "'" + focused_year + "'";

	const month_from = "'" + (focused_month-1) + "'";
	const month_to = "'" + (focused_month) + "'";

	const db_obj = await db.query(`SELECT created_date, content, question FROM diary WHERE (user_id=?)
		AND (classes='m')
		AND (YEAR(created_date) BETWEEN ${year_from} AND ${year_to}) 
		AND (MONTH(created_date) BETWEEN ${month_from} AND ${month_to}) 
		`, [user_id])

	const db_obj_ejs = {
		L1_date : db_obj[0][0].created_date,
		L2_date : db_obj[0][2].created_date,
		L3_date : db_obj[0][4].created_date,
		L4_date : db_obj[0][6].created_date,
 
		L1_content : db_obj[0][0].content,
		L2_content : db_obj[0][2].content,
		L3_content : db_obj[0][4].content,
		L4_content : db_obj[0][6].content,

		L1_question : db_obj[0][0].question,
		L2_question : db_obj[0][2].question,
		L3_question : db_obj[0][4].question,
		L4_question : db_obj[0][6].question,

		R1_date : db_obj[0][1].created_date,
		R2_date : db_obj[0][3].created_date,
		R3_date : db_obj[0][5].created_date,
		R4_date : db_obj[0][7].created_date,
 
		R1_content : db_obj[0][1].content,
		R2_content : db_obj[0][3].content,
		R3_content : db_obj[0][5].content,
		R4_content : db_obj[0][7].content,

		R1_question : db_obj[0][1].question,
		R2_question : db_obj[0][3].question,
		R3_question : db_obj[0][5].question,
		R4_question : db_obj[0][7].question,

		index_year: focused_year,
		index_month: focused_month,
		index_date: focused_date,
		user_id: user_id,
	}

	console.log(db_obj_ejs);

	res.render('../views/diary/monthly_mode_A', db_obj_ejs);
}


const monthly_mode_B = async (req, res) => {

	const user_id = req.params.id;
	const focused_year = Number(req.query.year);
	const focused_month = Number(req.query.month);
	const focused_date = Number(req.query.date);

	const db_obj = await db.query(`SELECT created_date, content, question FROM diary WHERE user_id=?
		AND (classes = 'd')
		AND (YEAR(created_date)=?)
		AND (MONTH(created_date)=?)
		`, [user_id, focused_year, focused_month]);

	let db_obj_ejs = {};
	
	for(let i=1; i <= db_obj[0].length; i++){
		let key1 = 'D'+ i + '_date';
		let key2 = 'D'+ i + '_content';
		let key3 = 'D'+ i + '_question';
		db_obj_ejs[key1] = db_obj[0][i-1].created_date;
		db_obj_ejs[key2] = db_obj[0][i-1].content;
		db_obj_ejs[key3] = db_obj[0][i-1].question;
	}

	db_obj_ejs.index_year = focused_year;
	db_obj_ejs.index_month = focused_month;
	db_obj_ejs.index_date = focused_date;
	db_obj_ejs.user_id = user_id;

	console.log(db_obj_ejs);


//////////legacy code for calendar
//////////legacy code for calendar
//////////legacy code for calendar
//////////legacy code for calendar
//////////legacy code for calendar
//////////legacy code for calendar
//			var a = focused_year;
//			var b = focused_month;
//			var c = tools.switch_D_to_common_D(focused_date);
//
//			var calander = ``;
//			for(i=0; i < 42; i++){
//				var starting_point = tools.get_days_name(a,b,c);
//				if(i >= starting_point && i <= daily_diary.length+starting_point-1){
//					calander += `
//					<div class="days" id="day${i-starting_point+1}"><div>${i-starting_point+1}</div></div>
//					`;
//				}
//				else {
//					calander += `
//					<div class="days"><div></div></div>
//					`;
//				}
//			}

	res.render('../views/diary/monthly_mode_B', db_obj_ejs);
}




//const annualy = (req, res) => {
//}
//
//const _delete = (req, res) => {
//}

module.exports = {
	dummy,

	daily, 
	monthly_mode_A,
	monthly_mode_B,

}
