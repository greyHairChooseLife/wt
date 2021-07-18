const date_ob = new Date();
const tools = require('../tools.js');

module.exports = {
	daily_template:function(title, content, id_number, focused_year, focused_month, focused_date, loaded_month){
		
		return `
			<!doctype html>
			<html>
			<head>
				<title>${title}'s diary</title>
				<meta charset="utf-8">
			</head>
			<body>

			<div style="display: none">
				<a href="/">home page</a>
			</div>

			<div class="container1">
			${content}
				<div id="background_color"></div>
				<div id="border_lv12"></div>
				<div id="border_lv23"></div>
				<div id="border_lv34"></div>
				<div id="wall"></div>

				<textarea id="textarea"></textarea>

				<div id="picture_box_add">더하기</div>
				<div id="picture_box_remove">빼기</div>
				<div class="picture_box" id="picture_1"></div>
				<div class="picture_box" id="picture_2"></div>
				<div class="picture_box" id="picture_3"></div>
				<div class="picture_box" id="picture_4"></div>
				<div class="picture_box" id="empty_picture">'더하기'를 눌러서 사진을 추가하세요.</div>
			</div>

			<div id="move_buttons">
				<form id="prevButton" method="post">
					<input type="hidden" name="id_number" value="${id_number}">
					<input type="submit" name="up" value="전날">
				</form>
				<form id="nextButton" method="post">
					<input type="hidden" name="id_number" value="${id_number}">
					<input type="submit" name="up" value="다음날">
				</form>
				<form id="upButton" method="post">
					<input type="hidden" name="id_number" value="${id_number}">
					<input type="submit" name="up" value="지난해">
				</form>
				<form id="downButton" method="post">
					<input type="hidden" name="id_number" value="${id_number}">
					<input type="submit" name="down" value="다음해">
				</form>
				<form id="todayButton" method="post">
					<input type="hidden" name="id_number" value="${id_number}">
					<input type="submit" name="down" value="오늘로">
				</form>
			</div>

			<div id="navigator">
				<form id="nav_daily" action="/${title}/daily?year=${focused_year}&month=${loaded_month}&date=${focused_date}" method="post">
					<input type="hidden" name="id_number" value="${id_number}">
					<input class="now" type="submit" value="daily">
				</form>
				<form id="nav_monthly" action="/${title}/monthly_mode_A?year=${focused_year}&month=${loaded_month}&date=${focused_date}" method="post">
					<input type="hidden" name="id_number" value="${id_number}">
					<input id="nav_m_button"  type="submit" value="monthly">
				</form>
				<form id="nav_annualy" action="/${title}/annualy?year=${focused_year}&month=${loaded_month}&date=${focused_date}" method="post">
					<input type="hidden" name="id_number" value="${id_number}">
					<input type="submit" value="annualy">
				</form>
			</div>

			</body>
			</html>

			<style>
				@font-face {
					font-family: 'KoreanFrenchTypewriter';
					src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2102-01@1.0/KoreanFrenchTypewriter.woff') format('woff');
					font-weight: normal;
					font-style: normal;
				}

				.container1 {
				display: grid;
				grid-template-columns: 700px 100px 700px;
				grid-template-rows: 25vh 25vh 25vh 25vh;
				font-family: KoreanFrenchTypewriter;
				margin: 0, auto;
				place-content: center;
				place-items: center;
				}

				#move_buttons{
				position: absolute;
				top: 10px;
				left; 10px;
				}
				form > input {
				width: 100px;
				height: 60px;
				}

				#navigator {
				position: absolute;
				top: 400px;
				left; 10px;
				}

				#background_color {
				grid-column: 1/4;
				grid-row: 1/5;
				width: 100%;
				height: 100%;
				background-color: #ffc85c;
				z-index: 1;
				}
				#wall {
				grid-column: 2/3;
				grid-row: 1/5;
				width: 100%;
				height: 100%;
				background-color: white;
				opacity: 0.6;
				z-index: 2;
				}

				.date {
				margin-bottom: 150px;
				z-index: 5;
				}
				.content {
				margin-left: 50px;
				justify-self: start;
				z-index: 5;
				}
				#border_lv12 {
				grid-column: 1/2;
				grid-row: 1/2;
				width: 100%;
				height: 1px;
				background-color: white;
				align-self: end;
				z-index: 2;
				}
				#border_lv23 {
				grid-column: 1/2;
				grid-row: 2/3;
				width: 100%;
				height: 1px;
				background-color: white;
				align-self: end;
				z-index: 2;
				}
				#border_lv34 {
				grid-column: 1/2;
				grid-row: 3/4;
				width: 100%;
				height: 1px;
				background-color: white;
				align-self: end;
				z-index: 2;
				}

				#date_lv1 {
				grid-column: 1/2;
				grid-row: 1/2;
				}
				#content_lv1 {
				grid-column: 1/2;
				grid-row: 1/2;
				}
				#date_lv2 {
				grid-column: 1/2;
				grid-row: 2/3;
				}
				#content_lv2 {
				grid-column: 1/2;
				grid-row: 2/3;
				}
				#date_lv3 {
				grid-column: 1/2;
				grid-row: 3/4;
				}
				#content_lv3 {
				grid-column: 1/2;
				grid-row: 3/4;
				}
				#date_lv4 {
				grid-column: 1/2;
				grid-row: 4/5;
				}
				#content_lv4 {
				grid-column: 1/2;
				grid-row: 4/5;
				}

				#textarea {
				grid-column: 3/4;
				grid-row: 3/5;
				width: 80%;
				height: 80%;
				place-self: center;
				z-index: 2;
				border: ;
				letter-spacing: 5px;
				font-family: KoreanFrenchTypewriter;
				font-size: 30px;
				background-image: url("https://blog.kakaocdn.net/dn/cI5hpy/btqD2GvMb3q/WG1PdrLJmJ8O2C2bS8GDQk/img.png");
				background-size: contain;
				}

				.picture_box {
				grid-column: 3/4;
				grid-row: 1/3;
				width: 35%;
				height: 35%;
				background-color: white;
				z-index: 2;
				display: none;
				}

				#picture_box_add {
				grid-column: 3/4;
				grid-row: 1/3;
				width: 100px;
				height: 30px;
				place-self: end;
				margin-right: 100px;
				z-index: 3;
				background-color: green;
				font-size: 25px;
				color: white;
				text-align: center;
				}
				#picture_box_remove {
				grid-column: 3/4;
				grid-row: 1/3;
				width: 100px;
				height: 30px;
				place-self: end;
				z-index: 3;
				background-color: yellow;
				font-size: 25px;
				text-align: center;
				display: none;
				}

				#picture_1 {
				}
				#picture_2 {
				}
				#picture_3 {
				}
				#picture_4 {
				}
				#empty_picture {
				display: block;
				width: 44%;
				background-color: #ffc85c;
				font-size: 40px;
				text-align: center;
				}

			</style>

			<script>

			var picture_index = 0;

			document.getElementById("picture_box_add").onclick = function() {
			picture_index++;
			if(picture_index == 0)
				pi0();
			else if(picture_index == 1)
				pi1();
			else if(picture_index == 2)
				pi2();
			else if(picture_index == 3)
				pi4();
			};
			document.getElementById("picture_box_remove").onclick = function() {
			picture_index--;
			if(picture_index == 0)
				pi0();
			else if(picture_index == 1)
				pi1();
			else if(picture_index == 2)
				pi2();
			else if(picture_index == 3)
				pi4();
			};

			function pi0(){
			document.getElementById("picture_box_remove").style.display = "none";
			document.getElementById("empty_picture").style.display = "block";
			document.getElementById("picture_1").style.display = "none";
			document.getElementById("picture_2").style.display = "none";
			document.getElementById("picture_3").style.display = "none";
			document.getElementById("picture_4").style.display = "none";
			}
			function pi1(){
			document.getElementById("picture_box_remove").style.display = "block";
			document.getElementById("empty_picture").style.display = "none";
			document.getElementById("picture_1").style.display = "block";
			document.getElementById("picture_2").style.display = "none";
			document.getElementById("picture_3").style.display = "none";
			document.getElementById("picture_4").style.display = "none";
			document.getElementById("picture_1").style.width = "60%";
			document.getElementById("picture_1").style.height = "60%";

			document.getElementById("picture_1").style.marginRight = "";
			document.getElementById("picture_1").style.marginBottom = "";
			document.getElementById("picture_2").style.marginLeft = "";
			document.getElementById("picture_2").style.marginBottom = "";
			document.getElementById("picture_3").style.marginRight = "";
			document.getElementById("picture_3").style.marginTop = "";
			document.getElementById("picture_4").style.marginLeft = "";
			document.getElementById("picture_4").style.marginTop = "";

			}

			function pi2(){
			document.getElementById("picture_box_add").style.display = "block";
			document.getElementById("picture_1").style.display = "block";
			document.getElementById("picture_2").style.display = "block";
			document.getElementById("picture_3").style.display = "none";
			document.getElementById("picture_4").style.display = "none";
			document.getElementById("picture_1").style.width = "40%";
			document.getElementById("picture_1").style.height = "40%";
			document.getElementById("picture_2").style.width = "40%";
			document.getElementById("picture_2").style.height = "40%";

			document.getElementById("picture_1").style.marginRight = "45%";
			document.getElementById("picture_1").style.marginBottom = "";
			document.getElementById("picture_2").style.marginLeft = "45%";
			document.getElementById("picture_2").style.marginBottom = "";
			document.getElementById("picture_3").style.marginRight = "";
			document.getElementById("picture_3").style.marginTop = "";
			document.getElementById("picture_4").style.marginLeft = "";
			document.getElementById("picture_4").style.marginTop = "";
			}			

			function pi4(){
			document.getElementById("picture_box_add").style.display = "none";
			document.getElementById("picture_1").style.display = "block";
			document.getElementById("picture_2").style.display = "block";
			document.getElementById("picture_3").style.display = "block";
			document.getElementById("picture_4").style.display = "block";
			document.getElementById("picture_1").style.width = "40%";
			document.getElementById("picture_1").style.height = "40%";
			document.getElementById("picture_2").style.width = "40%";
			document.getElementById("picture_2").style.height = "40%";
			document.getElementById("picture_3").style.width = "40%";
			document.getElementById("picture_3").style.height = "40%";
			document.getElementById("picture_4").style.width = "40%";
			document.getElementById("picture_4").style.height = "40%";

			document.getElementById("picture_1").style.marginRight = "45%";
			document.getElementById("picture_1").style.marginBottom = "32%";
			document.getElementById("picture_2").style.marginLeft = "45%";
			document.getElementById("picture_2").style.marginBottom = "32%";
			document.getElementById("picture_3").style.marginRight = "45%";
			document.getElementById("picture_3").style.marginTop = "32%";
			document.getElementById("picture_4").style.marginLeft = "45%";
			document.getElementById("picture_4").style.marginTop = "32%";
			}

			var today_date = ${tools.switch_MD_to_D(date_ob.getMonth()+1, date_ob.getDate())};
			var today_month = ${date_ob.getMonth()+1};
			var today_year = ${date_ob.getFullYear()};
	
			document.getElementById("prevButton").onclick = function() {
				if(${focused_date} != 1)
					document.getElementById("prevButton").action = "/${title}/daily?year=${focused_year}&month=${focused_month}&date=${focused_date-1}"
				else if(${focused_date} == 1)
					document.getElementById("prevButton").action = "/${title}/daily?year=${focused_year-1}&month=12&date=365"
			};
			document.getElementById("nextButton").onclick = function() {
				if(${focused_date} != 365)
					document.getElementById("nextButton").action = "/${title}/daily?year=${focused_year}&month=${focused_month}&date=${focused_date+1}"
				else if(${focused_date} == 365)
					document.getElementById("nextButton").action = "/${title}/daily?year=${focused_year+1}&month=1&date=1"
			};
			document.getElementById("upButton").onclick = function() {
				document.getElementById("upButton").action = "/${title}/daily?year=${focused_year-1}&month=${focused_month}&date=${focused_date}"
			};
			document.getElementById("downButton").onclick = function() {
				document.getElementById("downButton").action = "/${title}/daily?year=${focused_year+1}&month=${focused_month}&date=${focused_date}"
			};
			document.getElementById("todayButton").onclick = function() {
				document.getElementById("todayButton").action = "/${title}/daily?year="+today_year+"&month="+today_month+"&date="+today_date
			};

			</script>
		`;
	}
}
