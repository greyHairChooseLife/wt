module.exports = {
	move_dayNum_day: function(day){
		if (day == 1)
			return '월요일';
		else if (day ==2)
			return '화요일';
		else if (day ==3)
			return '수요일';
		else if (day ==4)
			return '목요일';
		else if (day ==5)
			return '금요일';
		else if (day ==6)
			return  '토요일';
		else if (day ==0)
			return '일요일';
		else if (day == -1)
			return '토요일';
	},
	move_date_week: function(date){
		if (1 <= date <= 7)
			return '첫째주';
		if (8 <= date <= 14)
			return '둘째주';
		if (15 <= date <= 21)
			return '셋째주';
		if (22 <= date)
			return '넷째주';
	},
	decode_d_index_M: function(idx){
		if (idx <= 31)
			return 1;
		if (idx <= 31+28)
			return 2;
		if (idx <= 31+28+31)
			return 3;
		if (idx <= 31+28+31+30)
			return 4;
		if (idx <= 31+28+31+30+31)
			return 5;
		if (idx <= 31+28+31+30+31+30)
			return 6;
		if (idx <= 31+28+31+30+31+30+31)
			return 7;
		if (idx <= 31+28+31+30+31+30+31+31)
			return 8;
		if (idx <= 31+28+31+30+31+30+31+31+30)
			return 9;
		if (idx <= 31+28+31+30+31+30+31+31+30+31)
			return 10;
		if (idx <= 31+28+31+30+31+30+31+31+30+31+30)
			return 11;
		if (idx <= 31+28+31+30+31+30+31+31+30+31+30+31)
			return 12;
	},
	decode_d_index_D: function(idx){
		if (idx <= 31)
			return (idx-0);
		if (idx <= 31+28)
			return (idx-31);
		if (idx <= 31+28+31)
			return (idx-(31+28));
		if (idx <= 31+28+31+30)
			return (idx-(31+28+31));
		if (idx <= 31+28+31+30+31)
			return (idx-(31+28+31+30));
		if (idx <= 31+28+31+30+31+30)
			return (idx-(31+28+31+30+31));
		if (idx <= 31+28+31+30+31+30+31)
			return (idx-(31+28+31+30+31+30));
		if (idx <= 31+28+31+30+31+30+31+31)
			return (idx-(31+28+31+30+31+30+31));
		if (idx <= 31+28+31+30+31+30+31+31+30)
			return (idx-(31+28+31+30+31+30+31+31));
		if (idx <= 31+28+31+30+31+30+31+31+30+31)
			return (idx-(31+28+31+30+31+30+31+31+30));
		if (idx <= 31+28+31+30+31+30+31+31+30+31+30)
			return (idx-(31+28+31+30+31+30+31+31+30+31));
		if (idx <= 31+28+31+30+31+30+31+31+30+31+30+31)
			return (idx-(31+28+31+30+31+30+31+31+30+31+30));
	},
	encode_date: function(month, date){
		var idx;
		if (month == 1)
			idx = 0;
		else if (month == 2)
			idx = 31;
		else if (month == 3)
			idx = 31+28;
		else if (month == 4)
			idx = 31+28+31;
		else if (month == 5)
			idx = 31+28+31+30;
		else if (month == 6)
			idx = 31+28+31+30+31;
		else if (month == 7)
			idx = 31+28+31+30+31;
		else if (month == 8)
			idx = 31+28+31+30+31+30;
		else if (month == 9)
			idx = 31+28+31+30+31+30+31;
		else if (month == 10)
			idx = 31+28+31+30+31+30+31+31;
		else if (month == 11)
			idx = 31+28+31+30+31+30+31+31+30;
		else if (month == 12)
			idx = 31+28+31+30+31+30+31+31+30+31;

		idx += date;

		return (idx);
	}
}

