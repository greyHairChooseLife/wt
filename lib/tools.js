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
	switch_onlyM_from_D: function(idx){
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
	switch_D_to_common_D: function(idx){
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
	switch_MD_to_D: function(month, date){
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
			idx = 31+28+31+30+31+30;
		else if (month == 8)
			idx = 31+28+31+30+31+30+31;
		else if (month == 9)
			idx = 31+28+31+30+31+30+31+31;
		else if (month == 10)
			idx = 31+28+31+30+31+30+31+31+30;
		else if (month == 11)
			idx = 31+28+31+30+31+30+31+31+30+31;
		else if (month == 12)
			idx = 31+28+31+30+31+30+31+31+30+31+30;

		idx += date;

		return (idx);
	},
	switch_M_to_first_D_of_M: function(idx){
		if (idx == 1)
			return 1;
		if (idx == 2)
			return 32;
		if (idx == 3)
			return 60;
		if (idx == 4)
			return 91;
		if (idx == 5)
			return 121;
		if (idx == 6)
			return 152;
		if (idx == 7)
			return 182;
		if (idx == 8)
			return 213;
		if (idx == 9)
			return 244;
		if (idx == 10)
			return 274;
		if (idx == 11)
			return 305;
		if (idx == 12)
			return 335;
	},
	get_days_name: function(year, month, day){
		var a;
		var b;
		var c = Number(month);
		var d = Number(day);
		if(c == 1){
			year = Number(year)-1;
			c = 13;
		} else if(c == 2){
			year = Number(year)-1;
			c = 14;
		}

		a = 0.25 * (21 * Number(String(year).substr(0,2)));
		b = 0.25 * (5 * Number(String(year).substr(String(year).length-2, 2)));
		c = (c+1)*26*0.1;
		

		if(a > 0)
			a = parseInt(a);
		else if(a < 0)
			a = parseInt(a*(-1))+1;
		if(b > 0)
			b = parseInt(b);
		else if(b < 0)
			b = parseInt(b*(-1))+1;
		if(c > 0)
			c = parseInt(c);
		else if(c < 0)
			c = parseInt(c*(-1))+1;

		answer = (a+b+c+d-1) % 7;

		return(answer);
		/*
		if(answer == 0)
			return("일요일");
		else if(answer == 1)
			return("월요일");
		else if(answer == 2)
			return("화요일");
		else if(answer == 3)
			return("수요일");
		else if(answer == 4)
			return("목요일");
		else if(answer == 5)
			return("금요일");
		else if(answer == 6)
			return("토요일");
		*/
	}
}

