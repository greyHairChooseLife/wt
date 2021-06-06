const date_ob = new Date();
const tools = require('../tools.js');

module.exports = {
	monthly_mode_A_template:function(title, content, uuid, focused_year, focused_month, focused_date, loaded_month){

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
				<div id="border_lv2"></div>
				<div id="border_lv3"></div>
				<div id="border_lv4"></div>
				<div id="border_lv5"></div>
				<div id="border_lv6"></div>
				<div id="border_lv7"></div>
				<div id="border_lv8"></div>
				<div id="wall"></div>

				<textarea id="textarea"></textarea>

			</div>

			<div id="move_buttons">
				<form id="prevButton" method="post">
					<input type="hidden" name="uuid" value="${uuid}">
					<input type="submit" name="up" value="전달">
				</form>
				<form id="nextButton" method="post">
					<input type="hidden" name="uuid" value="${uuid}">
					<input type="submit" name="up" value="다음달">
				</form>
				<form id="upButton" method="post">
					<input type="hidden" name="uuid" value="${uuid}">
					<input type="submit" name="up" value="지난해">
				</form>
				<form id="downButton" method="post">
					<input type="hidden" name="uuid" value="${uuid}">
					<input type="submit" name="down" value="다음해">
				</form>
				<form id="todayButton" method="post">
					<input type="hidden" name="uuid" value="${uuid}">
					<input type="submit" name="down" value="이번달로">
				</form>
			</div>

			<div id="navigator">
				<form id="nav_daily" action="/${title}/daily?year=${focused_year}&month=${loaded_month}&date=${focused_date}" method="post">
					<input type="hidden" name="uuid" value="${uuid}">
					<input class="now" type="submit" value="daily">
				</form>
				<form id="nav_monthly" action="/${title}/monthly_mode_A?year=${focused_year}&month=${loaded_month}&date=${focused_date}" method="post">
					<input type="hidden" name="uuid" value="${uuid}">
					<input id="nav_m_button"  type="submit" value="monthly">
				</form>
				<form id="nav_annualy" action="/${title}/annualy?year=${focused_year}&month=${loaded_month}&date=${focused_date}" method="post">
					<input type="hidden" name="uuid" value="${uuid}">
					<input type="submit" value="annualy">
				</form>
			</div>

			<div id="mode_B">
				<form id="nav_daily" action="/${title}/monthly_mode_B?year=${focused_year}&month=${loaded_month}&date=${tools.switch_M_to_first_D_of_M(loaded_month)}" method="post">
					<input type="hidden" name="uuid" value="${uuid}">
					<input class="now" type="submit" value="일일일기">
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
				grid-template-rows: 6vh 6vh 6vh 6vh 58vh 6vh 6vh 6vh;
				font-family: KoreanFrenchTypewriter;
				margin: 0, auto;
				place-content: center;
				place-items: center;
				}

				#move_buttons{
				position: absolute;
				top: 10px;
				left: 10px;
				}
				form > input {
				width: 100px;
				height: 60px;
				}

				#navigator {
				position: absolute;
				top: 400px;
				left: 10px;
				}

				#mode_B {
				position: absolute;
				top: 10px;
				left: 90vw;
				}

				#background_color {
				grid-column: 1/4;
				grid-row: 1/9;
				width: 100%;
				height: 100%;
				background-color: #ffc85c;
				z-index: 1;
				}
				#wall {
				grid-column: 2/3;
				grid-row: 1/9;
				width: 100%;
				height: 100%;
				background-color: white;
				opacity: 0.6;
				z-index: 2;
				}

				.date {
				justify-self: start;
				z-index: 5;
				}
				.content {
				display: none;
				z-index: 5;
				font-size: 20px;
				width: 95%;
				height: 95%;
				background-color: white;
				}
				.content_summary {
				margin-left: 120px;
				justify-self: start;
				z-index: 5;
				}

				#border_lv2 {
				grid-column: 3/4;
				grid-row: 1/2;
				width: 100%;
				height: 1px;
				background-color: white;
				align-self: end;
				z-index: 2;
				}
				#border_lv3 {
				grid-column: 3/4;
				grid-row: 2/3;
				width: 100%;
				height: 1px;
				background-color: white;
				align-self: end;
				z-index: 2;
				}
				#border_lv4 {
				grid-column: 3/4;
				grid-row: 3/4;
				width: 100%;
				height: 1px;
				background-color: white;
				align-self: end;
				z-index: 2;
				}
				#border_lv5 {
				grid-column: 3/4;
				grid-row: 4/5;
				width: 100%;
				height: 1px;
				background-color: white;
				align-self: end;
				z-index: 2;
				}
				#border_lv6 {
				grid-column: 3/4;
				grid-row: 5/6;
				width: 100%;
				height: 1px;
				background-color: white;
				align-self: end;
				z-index: 2;
				display: none;
				}
				#border_lv7 {
				grid-column: 3/4;
				grid-row: 6/7;
				width: 100%;
				height: 1px;
				background-color: white;
				align-self: end;
				z-index: 2;
				display: none;
				}
				#border_lv8 {
				grid-column: 3/4;
				grid-row: 7/8;
				width: 100%;
				height: 1px;
				background-color: white;
				align-self: end;
				z-index: 2;
				display: none;
				}

				#date_lv1 {
				grid-column: 3/4;
				grid-row: 1/2;
				width: 100%;
				height: 100%;
				z-index: 10;
				}
				#content_summary_lv1 {
				grid-column: 3/4;
				grid-row: 1/2;
				}
				#content_lv1 {
				grid-column: 3/4;
				grid-row: 2/6;
				}
				#date_lv2 {
				grid-column: 3/4;
				grid-row: 2/3;
				width: 100%;
				height: 100%;
				z-index: 10;
				}
				#content_summary_lv2 {
				grid-column: 3/4;
				grid-row: 2/3;
				}
				#content_lv2 {
				grid-column: 3/4;
				grid-row: 3/7;
				}
				#date_lv3 {
				grid-column: 3/4;
				grid-row: 3/4;
				width: 100%;
				height: 100%;
				z-index: 10;
				}
				#content_summary_lv3 {
				grid-column: 3/4;
				grid-row: 3/4;
				}
				#content_lv3 {
				grid-column: 3/4;
				grid-row: 4/8;
				}
				#date_lv4 {
				grid-column: 3/4;
				grid-row: 4/5;
				width: 100%;
				height: 100%;
				z-index: 10;
				}
				#content_summary_lv4 {
				grid-column: 3/4;
				grid-row: 4/5;
				}
				#content_lv4 {
				grid-column: 3/4;
				grid-row: 5/9;
				}

				#textarea {
				grid-column: 1/2;
				grid-row: 1/9;
				width: 80%;
				height: 85%;
				margin-top: 8%;
				place-self: center;
				z-index: 2;
				border: ;
				letter-spacing: 5px;
				font-family: KoreanFrenchTypewriter;
				font-size: 30px;
				background-image: url("https://blog.kakaocdn.net/dn/cI5hpy/btqD2GvMb3q/WG1PdrLJmJ8O2C2bS8GDQk/img.png");
				background-size: contain;
				}


			</style>

			<script>

			document.getElementById("date_lv1").onclick = function() {
				document.getElementById("date_lv1").style.gridRow = "1/2";
				document.getElementById("content_summary_lv1").style.gridRow = "1/2";
				document.getElementById("date_lv2").style.gridRow = "6/7";
				document.getElementById("content_summary_lv2").style.gridRow = "6/7";
				document.getElementById("date_lv3").style.gridRow = "7/8";
				document.getElementById("content_summary_lv3").style.gridRow = "7/8";
				document.getElementById("date_lv4").style.gridRow = "8/9";
				document.getElementById("content_summary_lv4").style.gridRow = "8/9";

				document.getElementById("border_lv3").style.display = "block";
				document.getElementById("border_lv3").style.display = "none";
				document.getElementById("border_lv4").style.display = "none";
				document.getElementById("border_lv5").style.display = "none";
				document.getElementById("border_lv6").style.display = "block";
				document.getElementById("border_lv7").style.display = "block";
				document.getElementById("border_lv8").style.display = "block";

				document.getElementById("content_lv1").style.display = "block";
				document.getElementById("content_lv2").style.display = "none";
				document.getElementById("content_lv3").style.display = "none";
				document.getElementById("content_lv4").style.display = "none";
			}
			document.getElementById("date_lv2").onclick = function() {
				document.getElementById("date_lv1").style.gridRow = "1/2";
				document.getElementById("content_summary_lv1").style.gridRow = "1/2";
				document.getElementById("date_lv2").style.gridRow = "2/3";
				document.getElementById("content_summary_lv2").style.gridRow = "2/3";
				document.getElementById("date_lv3").style.gridRow = "7/8";
				document.getElementById("content_summary_lv3").style.gridRow = "7/8";
				document.getElementById("date_lv4").style.gridRow = "8/9";
				document.getElementById("content_summary_lv4").style.gridRow = "8/9";

				document.getElementById("border_lv3").style.display = "block";
				document.getElementById("border_lv3").style.display = "block";
				document.getElementById("border_lv4").style.display = "none";
				document.getElementById("border_lv5").style.display = "none";
				document.getElementById("border_lv6").style.display = "none";
				document.getElementById("border_lv7").style.display = "block";
				document.getElementById("border_lv8").style.display = "block";

				document.getElementById("content_lv1").style.display = "none";
				document.getElementById("content_lv2").style.display = "block";
				document.getElementById("content_lv3").style.display = "none";
				document.getElementById("content_lv4").style.display = "none";
			}
			document.getElementById("date_lv3").onclick = function() {
				document.getElementById("date_lv1").style.gridRow = "1/2";
				document.getElementById("content_summary_lv1").style.gridRow = "1/2";
				document.getElementById("date_lv2").style.gridRow = "2/3";
				document.getElementById("content_summary_lv2").style.gridRow = "2/3";
				document.getElementById("date_lv3").style.gridRow = "3/4";
				document.getElementById("content_summary_lv3").style.gridRow = "3/4";
				document.getElementById("date_lv4").style.gridRow = "8/9";
				document.getElementById("content_summary_lv4").style.gridRow = "8/9";

				document.getElementById("border_lv3").style.display = "block";
				document.getElementById("border_lv3").style.display = "block";
				document.getElementById("border_lv4").style.display = "block";
				document.getElementById("border_lv5").style.display = "none";
				document.getElementById("border_lv6").style.display = "none";
				document.getElementById("border_lv7").style.display = "none";
				document.getElementById("border_lv8").style.display = "block";

				document.getElementById("content_lv1").style.display = "none";
				document.getElementById("content_lv2").style.display = "none";
				document.getElementById("content_lv3").style.display = "block";
				document.getElementById("content_lv4").style.display = "none";
			}
			document.getElementById("date_lv4").onclick = function() {
				document.getElementById("date_lv1").style.gridRow = "1/2";
				document.getElementById("content_summary_lv1").style.gridRow = "1/2";
				document.getElementById("date_lv2").style.gridRow = "2/3";
				document.getElementById("content_summary_lv2").style.gridRow = "2/3";
				document.getElementById("date_lv3").style.gridRow = "3/4";
				document.getElementById("content_summary_lv3").style.gridRow = "3/4";
				document.getElementById("date_lv4").style.gridRow = "4/5";
				document.getElementById("content_summary_lv4").style.gridRow = "4/5";

				document.getElementById("border_lv3").style.display = "block";
				document.getElementById("border_lv3").style.display = "block";
				document.getElementById("border_lv4").style.display = "block";
				document.getElementById("border_lv5").style.display = "block";
				document.getElementById("border_lv6").style.display = "none";
				document.getElementById("border_lv7").style.display = "none";
				document.getElementById("border_lv8").style.display = "none";

				document.getElementById("content_lv1").style.display = "none";
				document.getElementById("content_lv2").style.display = "none";
				document.getElementById("content_lv3").style.display = "none";
				document.getElementById("content_lv4").style.display = "block";
			}

			var today_month = ${date_ob.getMonth()+1};
			var today_year = ${date_ob.getFullYear()};

			document.getElementById("prevButton").onclick = function() {
				if(${focused_month} != 1)
					document.getElementById("prevButton").action = "/${title}/monthly_mode_A?year=${focused_year}&month=${focused_month-1}&date=${tools.switch_M_to_first_D_of_M(focused_month-1)}"
				else if(${focused_month} == 1)
					document.getElementById("prevButton").action = "/${title}/monthly_mode_A?year=${focused_year-1}&month=12&date=${tools.switch_M_to_first_D_of_M(12)}"
			};
			document.getElementById("nextButton").onclick = function() {
				if(${focused_month} != 12)
					document.getElementById("nextButton").action = "/${title}/monthly_mode_A?year=${focused_year}&month=${focused_month+1}&date=${tools.switch_M_to_first_D_of_M(focused_month+1)}"
				else if(${focused_month} == 12)
					document.getElementById("nextButton").action = "/${title}/monthly_mode_A?year=${focused_year+1}&month=1&date=${tools.switch_M_to_first_D_of_M(1)}"
			};
			document.getElementById("upButton").onclick = function() {
				document.getElementById("upButton").action = "/${title}/monthly_mode_A?year=${focused_year-1}&month=${focused_month}&date=${focused_date}"
			};
			document.getElementById("downButton").onclick = function() {
				document.getElementById("downButton").action = "/${title}/monthly_mode_A?year=${focused_year+1}&month=${focused_month}&date=${focused_date}"
			};
			document.getElementById("todayButton").onclick = function() {
				document.getElementById("todayButton").action = "/${title}/monthly_mode_A?year="+today_year+"&month="+today_month+"&date=${focused_date}"
			};



			</script>
		`;
	}
}
