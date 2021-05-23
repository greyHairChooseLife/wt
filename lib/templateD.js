const date_ob = new Date();
const tools = require('./tools.js');

module.exports = {
	daily_template:function(title, contentlv1, contentlv2, contentlv3, contentlv4, uuid, focus_year, focus_date){
		var year_index = focus_year;
		var date_index = focus_date;
		var today_date_index = tools.encode_date(date_ob.getMonth()+1, date_ob.getDate());
		var today_year_index = date_ob.getFullYear();

		var horizontal_index;

		if(today_date_index % 3 == 1){
			horizontal_index = today_date_index;}
		else if(today_date_index % 3 == 2){
			horizontal_index = today_date_index - 1;}
		else if(today_date_index % 3 == 0){
			horizontal_index = today_date_index - 2;}
		
		return `
			<!doctype html>
			<html>
			<head>
				<title>${title}'s diary</title>
				<meta charset="utf-8">
			</head>
			<body>

				<div id="y2_ago">2019</div>
				<div id="y1_ago">2020</div>
				<div id="y0_ago">2021<div style="font-size: 20px;">-this year-</div></div>
				<div id="y1_later">2022</div>

			${contentlv1}
			${contentlv2}
			${contentlv3}
			${contentlv4}

			<div id="prevButton">prev</div>
			<div id="nextButton">next</div>

			<form id="upButton" method="post">
				<input type="hidden" name="uuid" value="${uuid}">
				<input type="submit" name="up" value="지난 해">
			</form>
			<form id="downButton" method="post">
				<input type="hidden" name="uuid" value="${uuid}">
				<input type="submit" name="down" value="다음 해">
			</form>
			
			<form id="todayButton" action="/${title}/daily?id=${today_year_index}&date=${horizontal_index}" method="post">
				<input type="hidden" name="uuid" value="${uuid}">
				<input type="submit" name="down" value="오늘로">
			</form>

			<div id="writing_board">
			<form action="/${title}/daily_upload" method="post">
				<input type="hidden" name="uuid" value="${uuid}">
				<input type="hidden" name="name" value="${title}">
				<textarea name="content" placeholder="2문장 이하, 오늘의 일기"></textarea>
				<input type="submit" value="저장">
			</form>
				<div id="writing_cancel">cancel
				</div>
			</div>

			<a href="/">home page</a>
			<div id="navigator">
				<form action="/${title}/daily" method="post">
					<input type="hidden" name="uuid" value="${uuid}">
					<input class="now" type="submit" value="daily">
				</form>
				<form action="/${title}/weekly" method="post">
					<input type="hidden" name="uuid" value="${uuid}">
					<input type="submit" value="weekly">
				</form>
				<form action="/${title}/monthly" method="post">
					<input type="hidden" name="uuid" value="${uuid}">
					<input type="submit" value="monthly">
				</form>
				<form action="/${title}/annualy" method="post">
					<input type="hidden" name="uuid" value="${uuid}">
					<input type="submit" value="annualy">
				</form>
				<form action="/${title}/lifelong" method="post">
					<input type="hidden" name="uuid" value="${uuid}">
					<input type="submit" value="lifelong">
				</form>
				<form action="/${title}/picture_story" method="post">
					<input type="hidden" name="uuid" value="${uuid}">
					<input type="submit" value="picture_story">
				</form>
			</div>

				<div id="line1"></div>
				<div id="line2"></div>
				<div id="line3"></div>
				<div id="line4"></div>

				<div id="pre_line1"></div>
				<div id="pre_line2"></div>
				<div id="pre_line3"></div>
				<div id="pre_line4"></div>
				<div id="next_line1"></div>
				<div id="next_line2"></div>
				<div id="next_line3"></div>
				<div id="next_line4"></div>

			</body>
			</html>

			<style>
				@font-face {
					font-family: 'KoreanFrenchTypewriter';
					src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2102-01@1.0/KoreanFrenchTypewriter.woff') format('woff');
					font-weight: normal;
					font-style: normal;
				}

				#line1 {
				grid-column: 2/6;
				grid-row: 4/6;
				background-color: #59886b;
				opacity: 0.3;
				z-index: -1;
				}
				#line2 {
				grid-column: 2/6;
				grid-row: 7/9;
				background-color: #c05555;
				opacity: 0.3;
				z-index: -1;
				}
				#line3 {
				grid-column: 2/6;
				grid-row: 10/12;
				background-color: #ffc85c;
				opacity: 0.3;
				z-index: -1;
				}
				#line4 {
				grid-column: 2/6;
				grid-row: 13/15;
				background-color: #fff8c1;
				opacity: 0.3;
				z-index: -1;
				}

				#load_prev {
				grid-column: 3/4;
				grid-row: 4/15;
				background-color: tomato;
				margin: 20px 10px 20px 0;
				text-align: center;
				padding-top: 300px;
				width: 30px;
				z-index: 2;
				opacity: 0;
				}
				#load_next {
				grid-column: 5/6;
				grid-row: 4/15;
				background-color: tomato;
				margin: 20px 0px 20px 10px;
				text-align: center;
				padding-top: 300px;
				width: 30px;
				z-index: 2;
				justify-self: end;
				opacity: 0;
				}

				body {
				display: grid;
				grid-template-columns: 5px 2fr 4fr 4fr 4fr 5px; 
				grid-template-rows: 50px 50px 60px 20px 120px 60px 20px 120px 60px 20px 120px 60px 20px 120px;
				font-family: KoreanFrenchTypewriter;
				}

				#navigator {
				grid-column: 2/7;
				grid-row: 1/2;
				margin-left: 30px;
				margin: auto;
				}
				#navigator > a {
				float: left;
				padding-right: 30px;
				}
				#navigator > form {
				float: left;
				}
				#navigator > form > input {
				width: 200px;
				height: 50px;
				font-size: 20px;
				}
				.now {
				background-color: blue;
				color: yellow;
				}

				#y2_ago {
				grid-column: 2/3;
				grid-row: 4/6;
				margin: auto;
				font-family: KoreanFrenchTypewriter;
				font-size: 40px;
				}
				#y1_ago {
				grid-column: 2/3;
				grid-row: 7/9;
				margin: auto;
				font-family: KoreanFrenchTypewriter;
				font-size: 40px;
				}
				#y0_ago {
				grid-column: 2/3;
				grid-row: 10/12;
				margin: auto;
				font-family: KoreanFrenchTypewriter;
				font-size: 40px;
				}
				#y1_later {
				grid-column: 2/3;
				grid-row: 13/15;
				margin: auto;
				font-family: KoreanFrenchTypewriter;
				font-size: 40px;
				}

				#prevButton {
				grid-column: 3/4;
				grid-row: 3/4;
				background-color: tomato;
				width: 100px;
				height: 30px;
				margin: auto;
				text-align: center;
				}
				#nextButton {
				grid-column: 5/6;
				grid-row: 3/4;
				background-color: tomato;
				width: 100px;
				height: 30px;
				margin: auto;
				text-align: center;
				}

				.lv1date1 {
				grid-column: 3/4;
				grid-row: 4/5;
				margin: auto;
				width:300px;
				background-color: #59886b;
				display: none;
				}
				.lv1content1 {
				grid-column: 3/4;
				grid-row: 5/6;
				margin: auto;
				width:300px;
				height: 120px;
				text-align: center;
				background-color: #59886b;
				display: none;
				}
				.lv1date2 {
				grid-column: 4/5;
				grid-row: 4/5;
				margin: auto;
				width:300px;
				background-color: #59886b;
				display: none;
				}
				.lv1content2 {
				grid-column: 4/5;
				grid-row: 5/6;
				margin: auto;
				width:300px;
				height: 120px;
				text-align: center;
				background-color: #59886b;
				display: none;
				}
				.lv1date3 {
				grid-column: 5/6;
				grid-row: 4/5;
				margin: auto;
				width:300px;
				background-color: #59886b;
				display: none;
				}
				.lv1content3 {
				grid-column: 5/6;
				grid-row: 5/6;
				margin: auto;
				width:300px;
				height: 120px;
				text-align: center;
				background-color: #59886b;
				display: none;
				}
				.lv2date1 {
				grid-column: 3/4;
				grid-row: 7/8;
				margin: auto;
				width:300px;
				background-color: #c05555;
				display: none;
				}
				.lv2content1 {
				grid-column: 3/4;
				grid-row: 8/9;
				margin: auto;
				width:300px;
				height: 120px;
				text-align: center;
				background-color: #c05555;
				display: none;
				}
				.lv2date2 {
				grid-column: 4/5;
				grid-row: 7/8;
				margin: auto;
				width:300px;
				background-color: #c05555;
				display: none;
				}
				.lv2content2 {
				grid-column: 4/5;
				grid-row: 8/9;
				margin: auto;
				width:300px;
				height: 120px;
				text-align: center;
				background-color: #c05555;
				display: none;
				}
				.lv2date3 {
				grid-column: 5/6;
				grid-row: 7/8;
				margin: auto;
				width:300px;
				background-color: #c05555;
				display: none;
				}
				.lv2content3 {
				grid-column: 5/6;
				grid-row: 8/9;
				margin: auto;
				width:300px;
				height: 120px;
				text-align: center;
				background-color: #c05555;
				display: none;
				}
				.lv3date1 {
				grid-column: 3/4;
				grid-row: 10/11;
				margin: auto;
				width:300px;
				background-color: #ffc85c;
				display: none;
				}
				.lv3content1 {
				grid-column: 3/4;
				grid-row: 11/12;
				margin: auto;
				width:300px;
				height: 120px;
				text-align: center;
				background-color: #ffc85c;
				display: none;
				}
				.lv3date2 {
				grid-column: 4/5;
				grid-row: 10/11;
				margin: auto;
				width:300px;
				background-color: #ffc85c;
				display: none;
				}
				.lv3content2 {
				grid-column: 4/5;
				grid-row: 11/12;
				margin: auto;
				width:300px;
				height: 120px;
				text-align: center;
				background-color: #ffc85c;
				display: none;
				}
				.lv3date3 {
				grid-column: 5/6;
				grid-row: 10/11;
				margin: auto;
				width:300px;
				background-color: #ffc85c;
				display: none;
				}
				.lv3content3 {
				grid-column: 5/6;
				grid-row: 11/12;
				margin: auto;
				width:300px;
				height: 120px;
				text-align: center;
				background-color: #ffc85c;
				display: none;
				}
				.lv4date1 {
				grid-column: 3/4;
				grid-row: 13/14;
				margin: auto;
				width:300px;
				background-color: #fff8c1;
				display: none;
				}
				.lv4content1 {
				grid-column: 3/4;
				grid-row: 14/15;
				margin: auto;
				width:300px;
				height: 120px;
				text-align: center;
				background-color: #fff8c1;
				display: none;
				}
				.lv4date2 {
				grid-column: 4/5;
				grid-row: 13/14;
				margin: auto;
				width:300px;
				background-color: #fff8c1;
				display: none;
				}
				.lv4content2 {
				grid-column: 4/5;
				grid-row: 14/15;
				margin: auto;
				width:300px;
				height: 120px;
				text-align: center;
				background-color: #fff8c1;
				display: none;
				}
				.lv4date3 {
				grid-column: 5/6;
				grid-row: 13/14;
				margin: auto;
				width:300px;
				background-color: #fff8c1;
				display: none;
				}
				.lv4content3 {
				grid-column: 5/6;
				grid-row: 14/15;
				margin: auto;
				width:300px;
				height: 120px;
				text-align: center;
				background-color: #fff8c1;
				display: none;
				}

				#pre_line1 {
				grid-column: 3/4;
				grid-row: 4/6;
				width:30px;
				background-color: #59886b;
				}
				#pre_line2 {
				grid-column: 3/4;
				grid-row: 7/9;
				width:30px;
				background-color: #c05555;
				}
				#pre_line3 {
				grid-column: 3/4;
				grid-row: 10/12;
				width:30px;
				background-color: #ffc85c;
				}
				#pre_line4 {
				grid-column: 3/4;
				grid-row: 13/15;
				width:30px;
				background-color: #fff8c1;
				}
				#next_line1 {
				grid-column: 5/6;
				grid-row: 4/6;
				width:30px;
				background-color: #59886b;
				justify-self: end;
				}
				#next_line2 {
				grid-column: 5/6;
				grid-row: 7/9;
				width:30px;
				background-color: #c05555;
				justify-self: end;
				}
				#next_line3 {
				grid-column: 5/6;
				grid-row: 10/12;
				width:30px;
				background-color: #ffc85c;
				justify-self: end;
				}
				#next_line4 {
				grid-column: 5/6;
				grid-row: 13/15;
				width:30px;
				background-color: #fff8c1;
				justify-self: end;
				}

				#writing_board {
				display: none;
				grid-column: 4/5;
				grid-row: 11/12;
				margin: auto;
				width: 300px;
				height: 120px;
				}
				#writing_board > form > textarea {
				width: 290px;
				height: 110px;
				}

				#upButton {
				grid-column: 4/5;
				grid-row: 2/3;
				margin: auto;
				width: 100px;
				height: 50px;
				}
				#downButton {
				grid-column: 4/5;
				grid-row: 3/4;
				margin: auto;
				width: 100px;
				height: 50px;
				}

			</style>

			<script>
			document.getElementById("d" + (${date_index}+0) + "_lv1").style.display = "block";
			document.getElementById("d" + (${date_index}+0) + "_c_lv1").style.display = "block";
			document.getElementById("d" + (${date_index}+1) + "_lv1").style.display = "block";
			document.getElementById("d" + (${date_index}+1) + "_c_lv1").style.display = "block";
			document.getElementById("d" + (${date_index}+2) + "_lv1").style.display = "block";
			document.getElementById("d" + (${date_index}+2) + "_c_lv1").style.display = "block";

			document.getElementById("d" + (${date_index}+0) + "_lv2").style.display = "block";
			document.getElementById("d" + (${date_index}+0) + "_c_lv2").style.display = "block";
			document.getElementById("d" + (${date_index}+1) + "_lv2").style.display = "block";
			document.getElementById("d" + (${date_index}+1) + "_c_lv2").style.display = "block";
			document.getElementById("d" + (${date_index}+2) + "_lv2").style.display = "block";
			document.getElementById("d" + (${date_index}+2) + "_c_lv2").style.display = "block";

			document.getElementById("d" + (${date_index}+0) + "_lv3").style.display = "block";
			document.getElementById("d" + (${date_index}+0) + "_c_lv3").style.display = "block";
			document.getElementById("d" + (${date_index}+1) + "_lv3").style.display = "block";
			document.getElementById("d" + (${date_index}+1) + "_c_lv3").style.display = "block";
			document.getElementById("d" + (${date_index}+2) + "_lv3").style.display = "block";
			document.getElementById("d" + (${date_index}+2) + "_c_lv3").style.display = "block";

			document.getElementById("d" + (${date_index}+0) + "_lv4").style.display = "block";
			document.getElementById("d" + (${date_index}+0) + "_c_lv4").style.display = "block";
			document.getElementById("d" + (${date_index}+1) + "_lv4").style.display = "block";
			document.getElementById("d" + (${date_index}+1) + "_c_lv4").style.display = "block";
			document.getElementById("d" + (${date_index}+2) + "_lv4").style.display = "block";
			document.getElementById("d" + (${date_index}+2) + "_c_lv4").style.display = "block";

			var k = ${date_index};
			var moved_or_not = 0;

			document.getElementById("nextButton").onclick = function() {next(k)};
			document.getElementById("prevButton").onclick = function() {prev(k)};

			function next(index) { 
			  document.getElementById("d" + (index) + "_lv1").style.display = "none";
			  document.getElementById("d" + (index) + "_c_lv1").style.display = "none";
			  document.getElementById("d" + (index+1) + "_lv1").style.display = "none";
			  document.getElementById("d" + (index+1) + "_c_lv1").style.display = "none";
			  document.getElementById("d" + (index+2) + "_lv1").style.display = "none";
			  document.getElementById("d" + (index+2) + "_c_lv1").style.display = "none";

			  document.getElementById("d" + (index+3) + "_lv1").style.display = "block";
			  document.getElementById("d" + (index+3) + "_c_lv1").style.display = "block";
			  document.getElementById("d" + (index+4) + "_lv1").style.display = "block";
			  document.getElementById("d" + (index+4) + "_c_lv1").style.display = "block";
			  document.getElementById("d" + (index+5) + "_lv1").style.display = "block";
			  document.getElementById("d" + (index+5) + "_c_lv1").style.display = "block";

			  document.getElementById("d" + (index) + "_lv2").style.display = "none";
			  document.getElementById("d" + (index) + "_c_lv2").style.display = "none";
			  document.getElementById("d" + (index+1) + "_lv2").style.display = "none";
			  document.getElementById("d" + (index+1) + "_c_lv2").style.display = "none";
			  document.getElementById("d" + (index+2) + "_lv2").style.display = "none";
			  document.getElementById("d" + (index+2) + "_c_lv2").style.display = "none";

			  document.getElementById("d" + (index+3) + "_lv2").style.display = "block";
			  document.getElementById("d" + (index+3) + "_c_lv2").style.display = "block";
			  document.getElementById("d" + (index+4) + "_lv2").style.display = "block";
			  document.getElementById("d" + (index+4) + "_c_lv2").style.display = "block";
			  document.getElementById("d" + (index+5) + "_lv2").style.display = "block";
			  document.getElementById("d" + (index+5) + "_c_lv2").style.display = "block";

			  document.getElementById("d" + (index) + "_lv3").style.display = "none";
			  document.getElementById("d" + (index) + "_c_lv3").style.display = "none";
			  document.getElementById("d" + (index+1) + "_lv3").style.display = "none";
			  document.getElementById("d" + (index+1) + "_c_lv3").style.display = "none";
			  document.getElementById("d" + (index+2) + "_lv3").style.display = "none";
			  document.getElementById("d" + (index+2) + "_c_lv3").style.display = "none";

			  document.getElementById("d" + (index+3) + "_lv3").style.display = "block";
			  document.getElementById("d" + (index+3) + "_c_lv3").style.display = "block";
			  document.getElementById("d" + (index+4) + "_lv3").style.display = "block";
			  document.getElementById("d" + (index+4) + "_c_lv3").style.display = "block";
			  document.getElementById("d" + (index+5) + "_lv3").style.display = "block";
			  document.getElementById("d" + (index+5) + "_c_lv3").style.display = "block";

			  document.getElementById("d" + (index) + "_lv4").style.display = "none";
			  document.getElementById("d" + (index) + "_c_lv4").style.display = "none";
			  document.getElementById("d" + (index+1) + "_lv4").style.display = "none";
			  document.getElementById("d" + (index+1) + "_c_lv4").style.display = "none";
			  document.getElementById("d" + (index+2) + "_lv4").style.display = "none";
			  document.getElementById("d" + (index+2) + "_c_lv4").style.display = "none";

			  document.getElementById("d" + (index+3) + "_lv4").style.display = "block";
			  document.getElementById("d" + (index+3) + "_c_lv4").style.display = "block";
			  document.getElementById("d" + (index+4) + "_lv4").style.display = "block";
			  document.getElementById("d" + (index+4) + "_c_lv4").style.display = "block";
			  document.getElementById("d" + (index+5) + "_lv4").style.display = "block";
			  document.getElementById("d" + (index+5) + "_c_lv4").style.display = "block";

				k += 3;
				moved_or_not = 1;
				document.getElementById("upButton").action = "/${title}/daily?id=${year_index-1}&date=" + k;
				document.getElementById("downButton").action = "/${title}/daily?id=${year_index+1}&date=" + k;

			}
			function prev(index) { 
				document.getElementById("d" + (index) + "_lv1").style.display = "none";
				document.getElementById("d" + (index) + "_c_lv1").style.display = "none";
				document.getElementById("d" + (index+1) + "_lv1").style.display = "none";
				document.getElementById("d" + (index+1) + "_c_lv1").style.display = "none";
				document.getElementById("d" + (index+2) + "_lv1").style.display = "none";
				document.getElementById("d" + (index+2) + "_c_lv1").style.display = "none";

				document.getElementById("d" + (index-3) + "_lv1").style.display = "block";
				document.getElementById("d" + (index-3) + "_c_lv1").style.display = "block";
				document.getElementById("d" + (index-2) + "_lv1").style.display = "block";
				document.getElementById("d" + (index-2) + "_c_lv1").style.display = "block";
				document.getElementById("d" + (index-1) + "_lv1").style.display = "block";
				document.getElementById("d" + (index-1) + "_c_lv1").style.display = "block";

				document.getElementById("d" + (index) + "_lv2").style.display = "none";
				document.getElementById("d" + (index) + "_c_lv2").style.display = "none";
				document.getElementById("d" + (index+1) + "_lv2").style.display = "none";
				document.getElementById("d" + (index+1) + "_c_lv2").style.display = "none";
				document.getElementById("d" + (index+2) + "_lv2").style.display = "none";
				document.getElementById("d" + (index+2) + "_c_lv2").style.display = "none";

				document.getElementById("d" + (index-3) + "_lv2").style.display = "block";
				document.getElementById("d" + (index-3) + "_c_lv2").style.display = "block";
				document.getElementById("d" + (index-2) + "_lv2").style.display = "block";
				document.getElementById("d" + (index-2) + "_c_lv2").style.display = "block";
				document.getElementById("d" + (index-1) + "_lv2").style.display = "block";
				document.getElementById("d" + (index-1) + "_c_lv2").style.display = "block";

				document.getElementById("d" + (index) + "_lv3").style.display = "none";
				document.getElementById("d" + (index) + "_c_lv3").style.display = "none";
				document.getElementById("d" + (index+1) + "_lv3").style.display = "none";
				document.getElementById("d" + (index+1) + "_c_lv3").style.display = "none";
				document.getElementById("d" + (index+2) + "_lv3").style.display = "none";
				document.getElementById("d" + (index+2) + "_c_lv3").style.display = "none";

			 	document.getElementById("d" + (index-3) + "_lv3").style.display = "block";
				document.getElementById("d" + (index-3) + "_c_lv3").style.display = "block";
				document.getElementById("d" + (index-2) + "_lv3").style.display = "block";
				document.getElementById("d" + (index-2) + "_c_lv3").style.display = "block";
				document.getElementById("d" + (index-1) + "_lv3").style.display = "block";
				document.getElementById("d" + (index-1) + "_c_lv3").style.display = "block";

				document.getElementById("d" + (index) + "_lv4").style.display = "none";
				document.getElementById("d" + (index) + "_c_lv4").style.display = "none";
				document.getElementById("d" + (index+1) + "_lv4").style.display = "none";
				document.getElementById("d" + (index+1) + "_c_lv4").style.display = "none";
				document.getElementById("d" + (index+2) + "_lv4").style.display = "none";
				document.getElementById("d" + (index+2) + "_c_lv4").style.display = "none";

				document.getElementById("d" + (index-3) + "_lv4").style.display = "block";
				document.getElementById("d" + (index-3) + "_c_lv4").style.display = "block";
				document.getElementById("d" + (index-2) + "_lv4").style.display = "block";
				document.getElementById("d" + (index-2) + "_c_lv4").style.display = "block";
				document.getElementById("d" + (index-1) + "_lv4").style.display = "block";
				document.getElementById("d" + (index-1) + "_c_lv4").style.display = "block";

				k -= 3;
				moved_or_not = 1;
				document.getElementById("upButton").action = "/${title}/daily?id=${year_index-1}&date=" + k;
				document.getElementById("downButton").action = "/${title}/daily?id=${year_index+1}&date=" + k;

			}

			document.getElementById("upButton").onclick = function() {
				if(moved_or_not == 0){
				document.getElementById("upButton").action = "/${title}/daily?id=${year_index-1}&date=${date_index}";
				}
			};
			document.getElementById("downButton").onclick = function() {
				if(moved_or_not == 0){
				document.getElementById("downButton").action = "/${title}/daily?id=${year_index+1}&date=${date_index}";
				}
			};

			document.getElementById("writing_button").onclick = function() {myFunction1()};
			document.getElementById("writing_cancel").onclick = function() {myFunction2()};
			
			function myFunction1() { 
			  document.getElementById("d11_c").style.display = "none";
			  document.getElementById("writing_board").style.display = "block";
			}
			function myFunction2() { 
			  document.getElementById("d11_c").style.display = "block";
			  document.getElementById("writing_board").style.display = "none";
			}
			document.getElementById("load_prev").onmouseover = function() {myFunction3()};
			document.getElementById("load_prev").onmouseout = function() {myFunction3_out()};
			document.getElementById("load_next").onmouseover = function() {myFunction4()};
			document.getElementById("load_next").onmouseout = function() {myFunction4_out()};
			
			function myFunction3() { 
			  document.getElementById("load_prev").style.opacity = "1";
			}
			function myFunction3_out() { 
			  document.getElementById("load_prev").style.opacity = "0";
			}
			function myFunction4() { 
			  document.getElementById("load_next").style.opacity = "1";
			}
			function myFunction4_out() { 
			  document.getElementById("load_next").style.opacity = "0";
			}
			</script>
		`;
	}
}
