const db = require('./db.js');
const templateH = require('./template/templateH.js');
const date_ob = new Date();
const tools = require('./tools.js');

exports.home = function(req, res){
	db.query(`SELECT * FROM clients`, function(err, clients){
	var empty_or_not;
		if(clients == undefined)
			empty_or_not = 0;
			

	var today_month = date_ob.getMonth()+1;
	var today_date = date_ob.getDate();
	var today_index = tools.switch_MD_to_D(today_month, today_date);
	var horizontal_index;

	if(today_index % 3 == 1){
		horizontal_index = today_index;}
	else if(today_index % 3 == 2){
		horizontal_index = today_index - 1;}
	else if(today_index % 3 == 0){
		horizontal_index = today_index - 2;}
	
	var horizontal_month_index = tools.switch_onlyM_from_D(today_index);

	var title = `who's diary?`;
	var index_year = date_ob.getFullYear();
	var name_list = `<tr>`;
	var i;
					//<form action="/${clients[i].name}/daily?year=${index_year}&month=${horizontal_month_index}&date=${horizontal_index}" method="post">
	if(empty_or_not != 0){
		for(i = 0; i < clients.length; i++)




				// form action = clients[i].name >>> id_number



			name_list += `
				<td>${clients[i].id_number}</td>
				<td>${clients[i].name}</td>
				<td>
					<form action="/delete_process" method="post">
						<input type="hidden" name="id_number" value="${clients[i].id_number}">
						<input type="submit" value="delete">
					</form>
				</td>
				<td>
					<form action="/${clients[i].name}/daily?year=${index_year}&month=6&date=152" method="post">
						<input type="hidden" name="id_number" value="${clients[i].id_number}">
						<input type="submit" value="일기 쓰기">
					</form>
				</td>
				<td>
					<form action="/${clients[i].name}/test_data_generate" method="post">
						<input type="hidden" name="id_number" value="${clients[i].id_number}">
						<input type="submit" value="test_data_generate">
					</form>
				</td>
				</tr><tr>`;
	}
	name_list += `</tr>`;
	var html = templateH.main_template(title, name_list);
	res.send(html);
	});
}
