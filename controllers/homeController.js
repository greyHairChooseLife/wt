const date_ob = new Date();
const tools = require('../tools.js');
const db = require('../config/db.js');

const home = (req, res) => {

	const index_year = date_ob.getFullYear();
	const index_month = date_ob.getMonth()+1;
	const index_date = tools.switch_MD_to_D(date_ob.getMonth()+1, date_ob.getDate());
	 
	db.query(`SELECT * FROM user`, function(err, user){

		let user_list_id = {};
		let user_list_nickname = {};
	
		for(var i = 0; i < user.length; i++){
			user_list_id[i] = user[i].id;
		}
		for(var i = 0; i < user.length; i++){
			user_list_nickname[i] = user[i].nickname;
		}

		let obj_ejs = {
			user_list_nickname: user_list_nickname,
			user_list_id: user_list_id,
			index_year: index_year,
			index_month: index_month,
			index_date: index_date,

		};
		
		return res.render('home', obj_ejs);
	});
}

module.exports = {
	home
};
