const this_month_last_date = new Date(index_year, index_month, 0).getDate();
const last_month_last_date = new Date(index_year, index_month-1, 0).getDate();


function move(selected_direction){
// check leap year and admit month  & date
	let leap_year = false;
	if(focused_year%4 == 0 && focused_year%100 != 0 || focused_year%400 == 0)
		leap_year = true;

	if(leap_year == true && focused_month == 2 && focused_date == 29){
		focused_month = 3;
		focused_date = 1;
	}

	if(selected_direction == 'up'){
		//navigate_page.action = `/diary/daily/${user_id}?year=${index_year}&month=${index_month}&date=${index_date}`;   // don't know why it doesn't work
		navigate_page.action = "/diary/daily/" + user_id + "?year=" + (index_year+1) + "&month=" + index_month + "&date=" + index_date;
		navigate_page.submit();
	}
	else if(selected_direction == 'down'){
		navigate_page.action = "/diary/daily/" + user_id + "?year=" + (index_year-1) + "&month=" + index_month + "&date=" + index_date;
		navigate_page.submit();
	}
	else if(selected_direction == 'left'){
		if(index_date == this_month_last_date)		navigate_page.action = "/diary/daily/" + user_id + "?year=" + index_year + "&month=" + (index_month+1) + "&date=" + 1;
		else	navigate_page.action = "/diary/daily/" + user_id + "?year=" + index_year + "&month=" + index_month + "&date=" + (index_date+1);
		navigate_page.submit();
	}
	else if(selected_direction == 'right'){
		if(index_date == 1)		navigate_page.action = "/diary/daily/" + user_id + "?year=" + index_year + "&month=" + (index_month-1) + "&date=" + last_month_last_date;
		else	navigate_page.action = "/diary/daily/" + user_id + "?year=" + index_year + "&month=" + index_month + "&date=" + (index_date-1);
		navigate_page.submit();
	}
};
