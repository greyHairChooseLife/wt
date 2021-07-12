const db = require('./db.js');
const templateH = require('./template/templateH.js');
const tools = require('./tools.js');

const date_ob = new Date();

exports.home = function(req, res){
	db.query(`SELECT * FROM clients`, function(err, clients){

			
	var today_month = date_ob.getMonth()+1;
	var today_date = date_ob.getDate();
	var today_index = tools.switch_MD_to_D(today_month, today_date);

	var index_year = date_ob.getFullYear();
	var index_month = date_ob.getMonth()+1;
	var index_date = tools.switch_MD_to_D(date_ob.getMonth()+1, date_ob.getDate());


        /*
         * 
         * 
         *
         *
	var horizontal_index;

	if(today_index % 3 == 1){
		horizontal_index = today_index;}
	else if(today_index % 3 == 2){
		horizontal_index = today_index - 1;}
	else if(today_index % 3 == 0){
		horizontal_index = today_index - 2;}
	
	var horizontal_month_index = tools.switch_onlyM_from_D(today_index);


					//<form action="/${clients[i].name}/daily?year=${index_year}&month=${horizontal_month_index}&date=${horizontal_index}" method="post">
        
        
        

                                 these are for the old version that was showing 3 days in one time. 
        */

	var empty_or_not = 1;
	if(clients == undefined)
		empty_or_not = 0;

	var name_list = `<tr>`;

	if(empty_or_not != 0){
		for(var i = 0; i < clients.length; i++)




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
					<form action="/${clients[i].name}/daily?year=${index_year}&month=${index_month}&date=${index_date}" method="post">
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
	var html = templateH.main_template(name_list);
	res.send(html);
	});
}
