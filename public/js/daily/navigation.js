function move(selected_direction){
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
		navigate_page.action = "/diary/daily/" + user_id + "?year=" + index_year + "&month=" + index_month + "&date=" + (index_date+1);
		navigate_page.submit();
	}
	else if(selected_direction == 'right'){
		navigate_page.action = "/diary/daily/" + user_id + "?year=" + index_year + "&month=" + index_month + "&date=" + (index_date-1);
		navigate_page.submit();
	}
};
