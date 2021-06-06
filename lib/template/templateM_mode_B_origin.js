const date_ob = new Date();
const tools = require('../tools.js');

module.exports = {
	monthly_mode_B_template:function(title, content, calander, uuid, focused_year, focused_month, focused_date, loaded_month){

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
				<div id="background_color"></div>
				<div id="wall"></div>

				<textarea id="textarea"></textarea>

				${content}
				<div id="calander_name">- ${focused_month}월 -</div>
				<div id="Jun_calander">
				${calander}
				</div>
				
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
				<form id="nav_monthly" action="/${title}/monthly_mode_B?year=${focused_year}&month=${loaded_month}&date=${focused_date}" method="post">
					<input type="hidden" name="uuid" value="${uuid}">
					<input id="nav_m_button"  type="submit" value="monthly">
				</form>
				<form id="nav_annualy" action="/${title}/annualy?year=${focused_year}&month=${loaded_month}&date=${focused_date}" method="post">
					<input type="hidden" name="uuid" value="${uuid}">
					<input type="submit" value="annualy">
				</form>
			</div>

			<div id="mode_A">
				<form id="nav_daily" action="/${title}/monthly_mode_A?year=${focused_year}&month=${loaded_month}&date=${tools.switch_M_to_first_D_of_M(loaded_month)}" method="post">
					<input type="hidden" name="uuid" value="${uuid}">
					<input class="now" type="submit" value="원래대로">
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
				grid-template-rows: 12vh 58vh 20vh 10vh;
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

				#mode_A {
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





				#calander_name {
				grid-column: 3/4;
				grid-row: 1/2;
				font-size: 50px;
				z-index: 10;
				margin-top: 8vh;
				}

				#Jun_calander {
				grid-column: 3/4;
				grid-row: 2/3;
				width: 600px;
				height: 50vh;
				display: grid;
				grid-template-columns: repeat(7, 1fr);
				grid-template-rows: repeat(6, 1fr);
				z-index: 10;
				place-content: center;
				place-items: center;
				}
				.days {
				width: 93%;
				height: 93%;
				background-color: white;
				z-index: 11;
				font-size: 50px;
				text-align: center;

				}
				.days > div {
				margin-top: 1.34vh;
				z-index: 12
				width: 93%;
				height: 93%;
				}

				.content {
				display: none;
				grid-column: 3/4;
				grid-row: 3/4;
				z-index: 10;
				}


			</style>

			<script>

			var today_month = ${date_ob.getMonth()+1};
			var today_year = ${date_ob.getFullYear()};

			document.getElementById("prevButton").onclick = function() {
				if(${focused_month} != 1)
					document.getElementById("prevButton").action = "/${title}/monthly_mode_B?year=${focused_year}&month=${focused_month-1}&date=${tools.switch_M_to_first_D_of_M(focused_month-1)}"
				else if(${focused_month} == 1)
					document.getElementById("prevButton").action = "/${title}/monthly_mode_B?year=${focused_year-1}&month=12&date=${tools.switch_M_to_first_D_of_M(12)}"
			};
			document.getElementById("nextButton").onclick = function() {
				if(${focused_month} != 12)
					document.getElementById("nextButton").action = "/${title}/monthly_mode_B?year=${focused_year}&month=${focused_month+1}&date=${tools.switch_M_to_first_D_of_M(focused_month+1)}"
				else if(${focused_month} == 12)
					document.getElementById("nextButton").action = "/${title}/monthly_mode_B?year=${focused_year+1}&month=1&date=${tools.switch_M_to_first_D_of_M(1)}"
			};
			document.getElementById("upButton").onclick = function() {
				document.getElementById("upButton").action = "/${title}/monthly_mode_B?year=${focused_year-1}&month=${focused_month}&date=${focused_date}"
			};
			document.getElementById("downButton").onclick = function() {
				document.getElementById("downButton").action = "/${title}/monthly_mode_B?year=${focused_year+1}&month=${focused_month}&date=${focused_date}"
			};
			document.getElementById("todayButton").onclick = function() {
				document.getElementById("todayButton").action = "/${title}/monthly_mode_B?year="+today_year+"&month="+today_month+"&date=${focused_date}"
			};

			document.getElementById("day1").onclick = function() {
				var i;
				for(i=0; i<32; i++){
					document.getElementById("day"+(i+2)).style.backgroundColor = "white"; 
				}
				document.getElementById("day1").style.backgroundColor = "yellow"; 

				document.getElementById("content_0").style.display = "block";
				document.getElementById("content_1").style.display = "none";
				document.getElementById("content_2").style.display = "none";
				document.getElementById("content_3").style.display = "none";
				document.getElementById("content_4").style.display = "none";
				document.getElementById("content_5").style.display = "none";
				document.getElementById("content_6").style.display = "none";
				document.getElementById("content_7").style.display = "none";
				document.getElementById("content_8").style.display = "none";
				document.getElementById("content_9").style.display = "none";
				document.getElementById("content_10").style.display = "none";
				document.getElementById("content_11").style.display = "none";
				document.getElementById("content_12").style.display = "none";
				document.getElementById("content_13").style.display = "none";
				document.getElementById("content_14").style.display = "none";
				document.getElementById("content_15").style.display = "none";
				document.getElementById("content_16").style.display = "none";
				document.getElementById("content_17").style.display = "none";
				document.getElementById("content_18").style.display = "none";
				document.getElementById("content_19").style.display = "none";
				document.getElementById("content_20").style.display = "none";
				document.getElementById("content_21").style.display = "none";
				document.getElementById("content_22").style.display = "none";
				document.getElementById("content_23").style.display = "none";
				document.getElementById("content_24").style.display = "none";
				document.getElementById("content_25").style.display = "none";
				document.getElementById("content_26").style.display = "none";
				document.getElementById("content_27").style.display = "none";
				document.getElementById("content_28").style.display = "none";
				document.getElementById("content_29").style.display = "none";
				document.getElementById("content_30").style.display = "none";
				document.getElementById("content_31").style.display = "none";
				document.getElementById("content_32").style.display = "none";
			}
			document.getElementById("day2").onclick = function() {
				var i;
				for(i=0; i<32; i++){
				document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
				}
				document.getElementById("day2").style.backgroundColor = "yellow"; 

				document.getElementById("content_0").style.display = "none";
				document.getElementById("content_1").style.display = "block";
				document.getElementById("content_2").style.display = "none";
				document.getElementById("content_3").style.display = "none";
				document.getElementById("content_4").style.display = "none";
				document.getElementById("content_5").style.display = "none";
				document.getElementById("content_6").style.display = "none";
				document.getElementById("content_7").style.display = "none";
				document.getElementById("content_8").style.display = "none";
				document.getElementById("content_9").style.display = "none";
				document.getElementById("content_10").style.display = "none";
				document.getElementById("content_11").style.display = "none";
				document.getElementById("content_12").style.display = "none";
				document.getElementById("content_13").style.display = "none";
				document.getElementById("content_14").style.display = "none";
				document.getElementById("content_15").style.display = "none";
				document.getElementById("content_16").style.display = "none";
				document.getElementById("content_17").style.display = "none";
				document.getElementById("content_18").style.display = "none";
				document.getElementById("content_19").style.display = "none";
				document.getElementById("content_20").style.display = "none";
				document.getElementById("content_21").style.display = "none";
				document.getElementById("content_22").style.display = "none";
				document.getElementById("content_23").style.display = "none";
				document.getElementById("content_24").style.display = "none";
				document.getElementById("content_25").style.display = "none";
				document.getElementById("content_26").style.display = "none";
				document.getElementById("content_27").style.display = "none";
				document.getElementById("content_28").style.display = "none";
				document.getElementById("content_29").style.display = "none";
			}
			document.getElementById("day3").onclick = function() {
				var i;
				for(i=0; i<32; i++){
				document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
				}
				document.getElementById("day3").style.backgroundColor = "yellow"; 

				document.getElementById("content_0").style.display = "none";
				document.getElementById("content_1").style.display = "none";
				document.getElementById("content_2").style.display = "block";
				document.getElementById("content_3").style.display = "none";
				document.getElementById("content_4").style.display = "none";
				document.getElementById("content_5").style.display = "none";
				document.getElementById("content_6").style.display = "none";
				document.getElementById("content_7").style.display = "none";
				document.getElementById("content_8").style.display = "none";
				document.getElementById("content_9").style.display = "none";
				document.getElementById("content_10").style.display = "none";
				document.getElementById("content_11").style.display = "none";
				document.getElementById("content_12").style.display = "none";
				document.getElementById("content_13").style.display = "none";
				document.getElementById("content_14").style.display = "none";
				document.getElementById("content_15").style.display = "none";
				document.getElementById("content_16").style.display = "none";
				document.getElementById("content_17").style.display = "none";
				document.getElementById("content_18").style.display = "none";
				document.getElementById("content_19").style.display = "none";
				document.getElementById("content_20").style.display = "none";
				document.getElementById("content_21").style.display = "none";
				document.getElementById("content_22").style.display = "none";
				document.getElementById("content_23").style.display = "none";
				document.getElementById("content_24").style.display = "none";
				document.getElementById("content_25").style.display = "none";
				document.getElementById("content_26").style.display = "none";
				document.getElementById("content_27").style.display = "none";
				document.getElementById("content_28").style.display = "none";
				document.getElementById("content_29").style.display = "none";
			}
			document.getElementById("day4").onclick = function() {
				var i;
				for(i=0; i<32; i++){
				document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
				}
				document.getElementById("day4").style.backgroundColor = "yellow"; 

				document.getElementById("content_0").style.display = "none";
				document.getElementById("content_1").style.display = "none";
				document.getElementById("content_2").style.display = "none";
				document.getElementById("content_3").style.display = "block";
				document.getElementById("content_4").style.display = "none";
				document.getElementById("content_5").style.display = "none";
				document.getElementById("content_6").style.display = "none";
				document.getElementById("content_7").style.display = "none";
				document.getElementById("content_8").style.display = "none";
				document.getElementById("content_9").style.display = "none";
				document.getElementById("content_10").style.display = "none";
				document.getElementById("content_11").style.display = "none";
				document.getElementById("content_12").style.display = "none";
				document.getElementById("content_13").style.display = "none";
				document.getElementById("content_14").style.display = "none";
				document.getElementById("content_15").style.display = "none";
				document.getElementById("content_16").style.display = "none";
				document.getElementById("content_17").style.display = "none";
				document.getElementById("content_18").style.display = "none";
				document.getElementById("content_19").style.display = "none";
				document.getElementById("content_20").style.display = "none";
				document.getElementById("content_21").style.display = "none";
				document.getElementById("content_22").style.display = "none";
				document.getElementById("content_23").style.display = "none";
				document.getElementById("content_24").style.display = "none";
				document.getElementById("content_25").style.display = "none";
				document.getElementById("content_26").style.display = "none";
				document.getElementById("content_27").style.display = "none";
				document.getElementById("content_28").style.display = "none";
				document.getElementById("content_29").style.display = "none";
			}
			document.getElementById("day5").onclick = function() {
				var i;
				for(i=0; i<32; i++){
				document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
				}
				document.getElementById("day5").style.backgroundColor = "yellow"; 

				document.getElementById("content_0").style.display = "none";
				document.getElementById("content_1").style.display = "none";
				document.getElementById("content_2").style.display = "none";
				document.getElementById("content_3").style.display = "none";
				document.getElementById("content_4").style.display = "block";
				document.getElementById("content_5").style.display = "none";
				document.getElementById("content_6").style.display = "none";
				document.getElementById("content_7").style.display = "none";
				document.getElementById("content_8").style.display = "none";
				document.getElementById("content_9").style.display = "none";
				document.getElementById("content_10").style.display = "none";
				document.getElementById("content_11").style.display = "none";
				document.getElementById("content_12").style.display = "none";
				document.getElementById("content_13").style.display = "none";
				document.getElementById("content_14").style.display = "none";
				document.getElementById("content_15").style.display = "none";
				document.getElementById("content_16").style.display = "none";
				document.getElementById("content_17").style.display = "none";
				document.getElementById("content_18").style.display = "none";
				document.getElementById("content_19").style.display = "none";
				document.getElementById("content_20").style.display = "none";
				document.getElementById("content_21").style.display = "none";
				document.getElementById("content_22").style.display = "none";
				document.getElementById("content_23").style.display = "none";
				document.getElementById("content_24").style.display = "none";
				document.getElementById("content_25").style.display = "none";
				document.getElementById("content_26").style.display = "none";
				document.getElementById("content_27").style.display = "none";
				document.getElementById("content_28").style.display = "none";
				document.getElementById("content_29").style.display = "none";
			}
			document.getElementById("day6").onclick = function() {
				var i;
				for(i=0; i<32; i++){
				document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
				}
				document.getElementById("day6").style.backgroundColor = "yellow"; 

				document.getElementById("content_0").style.display = "none";
				document.getElementById("content_1").style.display = "none";
				document.getElementById("content_2").style.display = "none";
				document.getElementById("content_3").style.display = "none";
				document.getElementById("content_4").style.display = "none";
				document.getElementById("content_5").style.display = "block";
				document.getElementById("content_6").style.display = "none";
				document.getElementById("content_7").style.display = "none";
				document.getElementById("content_8").style.display = "none";
				document.getElementById("content_9").style.display = "none";
				document.getElementById("content_10").style.display = "none";
				document.getElementById("content_11").style.display = "none";
				document.getElementById("content_12").style.display = "none";
				document.getElementById("content_13").style.display = "none";
				document.getElementById("content_14").style.display = "none";
				document.getElementById("content_15").style.display = "none";
				document.getElementById("content_16").style.display = "none";
				document.getElementById("content_17").style.display = "none";
				document.getElementById("content_18").style.display = "none";
				document.getElementById("content_19").style.display = "none";
				document.getElementById("content_20").style.display = "none";
				document.getElementById("content_21").style.display = "none";
				document.getElementById("content_22").style.display = "none";
				document.getElementById("content_23").style.display = "none";
				document.getElementById("content_24").style.display = "none";
				document.getElementById("content_25").style.display = "none";
				document.getElementById("content_26").style.display = "none";
				document.getElementById("content_27").style.display = "none";
				document.getElementById("content_28").style.display = "none";
				document.getElementById("content_29").style.display = "none";
			}
			document.getElementById("day7").onclick = function() {
				var i;
				for(i=0; i<32; i++){
				document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
				}
				document.getElementById("day7").style.backgroundColor = "yellow"; 

				document.getElementById("content_0").style.display = "none";
				document.getElementById("content_1").style.display = "none";
				document.getElementById("content_2").style.display = "none";
				document.getElementById("content_3").style.display = "none";
				document.getElementById("content_4").style.display = "none";
				document.getElementById("content_5").style.display = "none";
				document.getElementById("content_6").style.display = "block";
				document.getElementById("content_7").style.display = "none";
				document.getElementById("content_8").style.display = "none";
				document.getElementById("content_9").style.display = "none";
				document.getElementById("content_10").style.display = "none";
				document.getElementById("content_11").style.display = "none";
				document.getElementById("content_12").style.display = "none";
				document.getElementById("content_13").style.display = "none";
				document.getElementById("content_14").style.display = "none";
				document.getElementById("content_15").style.display = "none";
				document.getElementById("content_16").style.display = "none";
				document.getElementById("content_17").style.display = "none";
				document.getElementById("content_18").style.display = "none";
				document.getElementById("content_19").style.display = "none";
				document.getElementById("content_20").style.display = "none";
				document.getElementById("content_21").style.display = "none";
				document.getElementById("content_22").style.display = "none";
				document.getElementById("content_23").style.display = "none";
				document.getElementById("content_24").style.display = "none";
				document.getElementById("content_25").style.display = "none";
				document.getElementById("content_26").style.display = "none";
				document.getElementById("content_27").style.display = "none";
				document.getElementById("content_28").style.display = "none";
				document.getElementById("content_29").style.display = "none";
			}
			document.getElementById("day8").onclick = function() {
				var i;
				for(i=0; i<32; i++){
				document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
				}
				document.getElementById("day8").style.backgroundColor = "yellow"; 

				document.getElementById("content_0").style.display = "none";
				document.getElementById("content_1").style.display = "none";
				document.getElementById("content_2").style.display = "none";
				document.getElementById("content_3").style.display = "none";
				document.getElementById("content_4").style.display = "none";
				document.getElementById("content_5").style.display = "none";
				document.getElementById("content_6").style.display = "none";
				document.getElementById("content_7").style.display = "block";
				document.getElementById("content_8").style.display = "none";
				document.getElementById("content_9").style.display = "none";
				document.getElementById("content_10").style.display = "none";
				document.getElementById("content_11").style.display = "none";
				document.getElementById("content_12").style.display = "none";
				document.getElementById("content_13").style.display = "none";
				document.getElementById("content_14").style.display = "none";
				document.getElementById("content_15").style.display = "none";
				document.getElementById("content_16").style.display = "none";
				document.getElementById("content_17").style.display = "none";
				document.getElementById("content_18").style.display = "none";
				document.getElementById("content_19").style.display = "none";
				document.getElementById("content_20").style.display = "none";
				document.getElementById("content_21").style.display = "none";
				document.getElementById("content_22").style.display = "none";
				document.getElementById("content_23").style.display = "none";
				document.getElementById("content_24").style.display = "none";
				document.getElementById("content_25").style.display = "none";
				document.getElementById("content_26").style.display = "none";
				document.getElementById("content_27").style.display = "none";
				document.getElementById("content_28").style.display = "none";
				document.getElementById("content_29").style.display = "none";
			}
			document.getElementById("day9").onclick = function() {
				var i;
				for(i=0; i<32; i++){
				document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
				}
				document.getElementById("day9").style.backgroundColor = "yellow"; 

				document.getElementById("content_0").style.display = "none";
				document.getElementById("content_1").style.display = "none";
				document.getElementById("content_2").style.display = "none";
				document.getElementById("content_3").style.display = "none";
				document.getElementById("content_4").style.display = "none";
				document.getElementById("content_5").style.display = "none";
				document.getElementById("content_6").style.display = "none";
				document.getElementById("content_7").style.display = "none";
				document.getElementById("content_8").style.display = "block";
				document.getElementById("content_9").style.display = "none";
				document.getElementById("content_10").style.display = "none";
				document.getElementById("content_11").style.display = "none";
				document.getElementById("content_12").style.display = "none";
				document.getElementById("content_13").style.display = "none";
				document.getElementById("content_14").style.display = "none";
				document.getElementById("content_15").style.display = "none";
				document.getElementById("content_16").style.display = "none";
				document.getElementById("content_17").style.display = "none";
				document.getElementById("content_18").style.display = "none";
				document.getElementById("content_19").style.display = "none";
				document.getElementById("content_20").style.display = "none";
				document.getElementById("content_21").style.display = "none";
				document.getElementById("content_22").style.display = "none";
				document.getElementById("content_23").style.display = "none";
				document.getElementById("content_24").style.display = "none";
				document.getElementById("content_25").style.display = "none";
				document.getElementById("content_26").style.display = "none";
				document.getElementById("content_27").style.display = "none";
				document.getElementById("content_28").style.display = "none";
				document.getElementById("content_29").style.display = "none";
			}
			document.getElementById("day10").onclick = function() {
				var i;
				for(i=0; i<32; i++){
				document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
				}
				document.getElementById("day10").style.backgroundColor = "yellow"; 

				document.getElementById("content_0").style.display = "none";
				document.getElementById("content_1").style.display = "none";
				document.getElementById("content_2").style.display = "none";
				document.getElementById("content_3").style.display = "none";
				document.getElementById("content_4").style.display = "none";
				document.getElementById("content_5").style.display = "none";
				document.getElementById("content_6").style.display = "none";
				document.getElementById("content_7").style.display = "none";
				document.getElementById("content_8").style.display = "none";
				document.getElementById("content_9").style.display = "block";
				document.getElementById("content_10").style.display = "none";
				document.getElementById("content_11").style.display = "none";
				document.getElementById("content_12").style.display = "none";
				document.getElementById("content_13").style.display = "none";
				document.getElementById("content_14").style.display = "none";
				document.getElementById("content_15").style.display = "none";
				document.getElementById("content_16").style.display = "none";
				document.getElementById("content_17").style.display = "none";
				document.getElementById("content_18").style.display = "none";
				document.getElementById("content_19").style.display = "none";
				document.getElementById("content_20").style.display = "none";
				document.getElementById("content_21").style.display = "none";
				document.getElementById("content_22").style.display = "none";
				document.getElementById("content_23").style.display = "none";
				document.getElementById("content_24").style.display = "none";
				document.getElementById("content_25").style.display = "none";
				document.getElementById("content_26").style.display = "none";
				document.getElementById("content_27").style.display = "none";
				document.getElementById("content_28").style.display = "none";
				document.getElementById("content_29").style.display = "none";
			}
			document.getElementById("day11").onclick = function() {
				var i;
				for(i=0; i<32; i++){
				document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
				}
				document.getElementById("day11").style.backgroundColor = "yellow"; 

				document.getElementById("content_0").style.display = "none";
				document.getElementById("content_1").style.display = "none";
				document.getElementById("content_2").style.display = "none";
				document.getElementById("content_3").style.display = "none";
				document.getElementById("content_4").style.display = "none";
				document.getElementById("content_5").style.display = "none";
				document.getElementById("content_6").style.display = "none";
				document.getElementById("content_7").style.display = "none";
				document.getElementById("content_8").style.display = "none";
				document.getElementById("content_9").style.display = "none";
				document.getElementById("content_10").style.display = "block";
				document.getElementById("content_11").style.display = "none";
				document.getElementById("content_12").style.display = "none";
				document.getElementById("content_13").style.display = "none";
				document.getElementById("content_14").style.display = "none";
				document.getElementById("content_15").style.display = "none";
				document.getElementById("content_16").style.display = "none";
				document.getElementById("content_17").style.display = "none";
				document.getElementById("content_18").style.display = "none";
				document.getElementById("content_19").style.display = "none";
				document.getElementById("content_20").style.display = "none";
				document.getElementById("content_21").style.display = "none";
				document.getElementById("content_22").style.display = "none";
				document.getElementById("content_23").style.display = "none";
				document.getElementById("content_24").style.display = "none";
				document.getElementById("content_25").style.display = "none";
				document.getElementById("content_26").style.display = "none";
				document.getElementById("content_27").style.display = "none";
				document.getElementById("content_28").style.display = "none";
				document.getElementById("content_29").style.display = "none";
			}
			document.getElementById("day12").onclick = function() {
				var i;
				for(i=0; i<32; i++){
				document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
				}
				document.getElementById("day12").style.backgroundColor = "yellow"; 

				document.getElementById("content_0").style.display = "none";
				document.getElementById("content_1").style.display = "none";
				document.getElementById("content_2").style.display = "none";
				document.getElementById("content_3").style.display = "none";
				document.getElementById("content_4").style.display = "none";
				document.getElementById("content_5").style.display = "none";
				document.getElementById("content_6").style.display = "none";
				document.getElementById("content_7").style.display = "none";
				document.getElementById("content_8").style.display = "none";
				document.getElementById("content_9").style.display = "none";
				document.getElementById("content_10").style.display = "none";
				document.getElementById("content_11").style.display = "block";
				document.getElementById("content_12").style.display = "none";
				document.getElementById("content_13").style.display = "none";
				document.getElementById("content_14").style.display = "none";
				document.getElementById("content_15").style.display = "none";
				document.getElementById("content_16").style.display = "none";
				document.getElementById("content_17").style.display = "none";
				document.getElementById("content_18").style.display = "none";
				document.getElementById("content_19").style.display = "none";
				document.getElementById("content_20").style.display = "none";
				document.getElementById("content_21").style.display = "none";
				document.getElementById("content_22").style.display = "none";
				document.getElementById("content_23").style.display = "none";
				document.getElementById("content_24").style.display = "none";
				document.getElementById("content_25").style.display = "none";
				document.getElementById("content_26").style.display = "none";
				document.getElementById("content_27").style.display = "none";
				document.getElementById("content_28").style.display = "none";
				document.getElementById("content_29").style.display = "none";
			}
			document.getElementById("day13").onclick = function() {
				var i;
				for(i=0; i<32; i++){
				document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
				}
				document.getElementById("day13").style.backgroundColor = "yellow"; 

				document.getElementById("content_0").style.display = "none";
				document.getElementById("content_1").style.display = "none";
				document.getElementById("content_2").style.display = "none";
				document.getElementById("content_3").style.display = "none";
				document.getElementById("content_4").style.display = "none";
				document.getElementById("content_5").style.display = "none";
				document.getElementById("content_6").style.display = "none";
				document.getElementById("content_7").style.display = "none";
				document.getElementById("content_8").style.display = "none";
				document.getElementById("content_9").style.display = "none";
				document.getElementById("content_10").style.display = "none";
				document.getElementById("content_11").style.display = "none";
				document.getElementById("content_12").style.display = "block";
				document.getElementById("content_13").style.display = "none";
				document.getElementById("content_14").style.display = "none";
				document.getElementById("content_15").style.display = "none";
				document.getElementById("content_16").style.display = "none";
				document.getElementById("content_17").style.display = "none";
				document.getElementById("content_18").style.display = "none";
				document.getElementById("content_19").style.display = "none";
				document.getElementById("content_20").style.display = "none";
				document.getElementById("content_21").style.display = "none";
				document.getElementById("content_22").style.display = "none";
				document.getElementById("content_23").style.display = "none";
				document.getElementById("content_24").style.display = "none";
				document.getElementById("content_25").style.display = "none";
				document.getElementById("content_26").style.display = "none";
				document.getElementById("content_27").style.display = "none";
				document.getElementById("content_28").style.display = "none";
				document.getElementById("content_29").style.display = "none";
			}
			document.getElementById("day14").onclick = function() {
				var i;
				for(i=0; i<32; i++){
				document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
				}
				document.getElementById("day14").style.backgroundColor = "yellow"; 

				document.getElementById("content_0").style.display = "none";
				document.getElementById("content_1").style.display = "none";
				document.getElementById("content_2").style.display = "none";
				document.getElementById("content_3").style.display = "none";
				document.getElementById("content_4").style.display = "none";
				document.getElementById("content_5").style.display = "none";
				document.getElementById("content_6").style.display = "none";
				document.getElementById("content_7").style.display = "none";
				document.getElementById("content_8").style.display = "none";
				document.getElementById("content_9").style.display = "none";
				document.getElementById("content_10").style.display = "none";
				document.getElementById("content_11").style.display = "none";
				document.getElementById("content_12").style.display = "none";
				document.getElementById("content_13").style.display = "block";
				document.getElementById("content_14").style.display = "none";
				document.getElementById("content_15").style.display = "none";
				document.getElementById("content_16").style.display = "none";
				document.getElementById("content_17").style.display = "none";
				document.getElementById("content_18").style.display = "none";
				document.getElementById("content_19").style.display = "none";
				document.getElementById("content_20").style.display = "none";
				document.getElementById("content_21").style.display = "none";
				document.getElementById("content_22").style.display = "none";
				document.getElementById("content_23").style.display = "none";
				document.getElementById("content_24").style.display = "none";
				document.getElementById("content_25").style.display = "none";
				document.getElementById("content_26").style.display = "none";
				document.getElementById("content_27").style.display = "none";
				document.getElementById("content_28").style.display = "none";
				document.getElementById("content_29").style.display = "none";
			}
			document.getElementById("day15").onclick = function() {
				var i;
				for(i=0; i<32; i++){
				document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
				}
				document.getElementById("day15").style.backgroundColor = "yellow"; 

				document.getElementById("content_0").style.display = "none";
				document.getElementById("content_1").style.display = "none";
				document.getElementById("content_2").style.display = "none";
				document.getElementById("content_3").style.display = "none";
				document.getElementById("content_4").style.display = "none";
				document.getElementById("content_5").style.display = "none";
				document.getElementById("content_6").style.display = "none";
				document.getElementById("content_7").style.display = "none";
				document.getElementById("content_8").style.display = "none";
				document.getElementById("content_9").style.display = "none";
				document.getElementById("content_10").style.display = "none";
				document.getElementById("content_11").style.display = "none";
				document.getElementById("content_12").style.display = "none";
				document.getElementById("content_13").style.display = "none";
				document.getElementById("content_14").style.display = "block";
				document.getElementById("content_15").style.display = "none";
				document.getElementById("content_16").style.display = "none";
				document.getElementById("content_17").style.display = "none";
				document.getElementById("content_18").style.display = "none";
				document.getElementById("content_19").style.display = "none";
				document.getElementById("content_20").style.display = "none";
				document.getElementById("content_21").style.display = "none";
				document.getElementById("content_22").style.display = "none";
				document.getElementById("content_23").style.display = "none";
				document.getElementById("content_24").style.display = "none";
				document.getElementById("content_25").style.display = "none";
				document.getElementById("content_26").style.display = "none";
				document.getElementById("content_27").style.display = "none";
				document.getElementById("content_28").style.display = "none";
				document.getElementById("content_29").style.display = "none";
			}
			document.getElementById("day16").onclick = function() {
				var i;
				for(i=0; i<32; i++){
				document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
				}
				document.getElementById("day16").style.backgroundColor = "yellow"; 

				document.getElementById("content_0").style.display = "none";
				document.getElementById("content_1").style.display = "none";
				document.getElementById("content_2").style.display = "none";
				document.getElementById("content_3").style.display = "none";
				document.getElementById("content_4").style.display = "none";
				document.getElementById("content_5").style.display = "none";
				document.getElementById("content_6").style.display = "none";
				document.getElementById("content_7").style.display = "none";
				document.getElementById("content_8").style.display = "none";
				document.getElementById("content_9").style.display = "none";
				document.getElementById("content_10").style.display = "none";
				document.getElementById("content_11").style.display = "none";
				document.getElementById("content_12").style.display = "none";
				document.getElementById("content_13").style.display = "none";
				document.getElementById("content_14").style.display = "none";
				document.getElementById("content_15").style.display = "block";
				document.getElementById("content_16").style.display = "none";
				document.getElementById("content_17").style.display = "none";
				document.getElementById("content_18").style.display = "none";
				document.getElementById("content_19").style.display = "none";
				document.getElementById("content_20").style.display = "none";
				document.getElementById("content_21").style.display = "none";
				document.getElementById("content_22").style.display = "none";
				document.getElementById("content_23").style.display = "none";
				document.getElementById("content_24").style.display = "none";
				document.getElementById("content_25").style.display = "none";
				document.getElementById("content_26").style.display = "none";
				document.getElementById("content_27").style.display = "none";
				document.getElementById("content_28").style.display = "none";
				document.getElementById("content_29").style.display = "none";
			}
			document.getElementById("day17").onclick = function() {
				var i;
				for(i=0; i<32; i++){
				document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
				}
				document.getElementById("day17").style.backgroundColor = "yellow"; 

				document.getElementById("content_0").style.display = "none";
				document.getElementById("content_1").style.display = "none";
				document.getElementById("content_2").style.display = "none";
				document.getElementById("content_3").style.display = "none";
				document.getElementById("content_4").style.display = "none";
				document.getElementById("content_5").style.display = "none";
				document.getElementById("content_6").style.display = "none";
				document.getElementById("content_7").style.display = "none";
				document.getElementById("content_8").style.display = "none";
				document.getElementById("content_9").style.display = "none";
				document.getElementById("content_10").style.display = "none";
				document.getElementById("content_11").style.display = "none";
				document.getElementById("content_12").style.display = "none";
				document.getElementById("content_13").style.display = "none";
				document.getElementById("content_14").style.display = "none";
				document.getElementById("content_15").style.display = "none";
				document.getElementById("content_16").style.display = "block";
				document.getElementById("content_17").style.display = "none";
				document.getElementById("content_18").style.display = "none";
				document.getElementById("content_19").style.display = "none";
				document.getElementById("content_20").style.display = "none";
				document.getElementById("content_21").style.display = "none";
				document.getElementById("content_22").style.display = "none";
				document.getElementById("content_23").style.display = "none";
				document.getElementById("content_24").style.display = "none";
				document.getElementById("content_25").style.display = "none";
				document.getElementById("content_26").style.display = "none";
				document.getElementById("content_27").style.display = "none";
				document.getElementById("content_28").style.display = "none";
				document.getElementById("content_29").style.display = "none";
			}
			document.getElementById("day18").onclick = function() {
				var i;
				for(i=0; i<32; i++){
				document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
				}
				document.getElementById("day18").style.backgroundColor = "yellow"; 

				document.getElementById("content_0").style.display = "none";
				document.getElementById("content_1").style.display = "none";
				document.getElementById("content_2").style.display = "none";
				document.getElementById("content_3").style.display = "none";
				document.getElementById("content_4").style.display = "none";
				document.getElementById("content_5").style.display = "none";
				document.getElementById("content_6").style.display = "none";
				document.getElementById("content_7").style.display = "none";
				document.getElementById("content_8").style.display = "none";
				document.getElementById("content_9").style.display = "none";
				document.getElementById("content_10").style.display = "none";
				document.getElementById("content_11").style.display = "none";
				document.getElementById("content_12").style.display = "none";
				document.getElementById("content_13").style.display = "none";
				document.getElementById("content_14").style.display = "none";
				document.getElementById("content_15").style.display = "none";
				document.getElementById("content_16").style.display = "none";
				document.getElementById("content_17").style.display = "block";
				document.getElementById("content_18").style.display = "none";
				document.getElementById("content_19").style.display = "none";
				document.getElementById("content_20").style.display = "none";
				document.getElementById("content_21").style.display = "none";
				document.getElementById("content_22").style.display = "none";
				document.getElementById("content_23").style.display = "none";
				document.getElementById("content_24").style.display = "none";
				document.getElementById("content_25").style.display = "none";
				document.getElementById("content_26").style.display = "none";
				document.getElementById("content_27").style.display = "none";
				document.getElementById("content_28").style.display = "none";
				document.getElementById("content_29").style.display = "none";
			}
			document.getElementById("day19").onclick = function() {
				var i;
				for(i=0; i<32; i++){
				document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
				}
				document.getElementById("day19").style.backgroundColor = "yellow"; 

				document.getElementById("content_0").style.display = "none";
				document.getElementById("content_1").style.display = "none";
				document.getElementById("content_2").style.display = "none";
				document.getElementById("content_3").style.display = "none";
				document.getElementById("content_4").style.display = "none";
				document.getElementById("content_5").style.display = "none";
				document.getElementById("content_6").style.display = "none";
				document.getElementById("content_7").style.display = "none";
				document.getElementById("content_8").style.display = "none";
				document.getElementById("content_9").style.display = "none";
				document.getElementById("content_10").style.display = "none";
				document.getElementById("content_11").style.display = "none";
				document.getElementById("content_12").style.display = "none";
				document.getElementById("content_13").style.display = "none";
				document.getElementById("content_14").style.display = "none";
				document.getElementById("content_15").style.display = "none";
				document.getElementById("content_16").style.display = "none";
				document.getElementById("content_17").style.display = "none";
				document.getElementById("content_18").style.display = "block";
				document.getElementById("content_19").style.display = "none";
				document.getElementById("content_20").style.display = "none";
				document.getElementById("content_21").style.display = "none";
				document.getElementById("content_22").style.display = "none";
				document.getElementById("content_23").style.display = "none";
				document.getElementById("content_24").style.display = "none";
				document.getElementById("content_25").style.display = "none";
				document.getElementById("content_26").style.display = "none";
				document.getElementById("content_27").style.display = "none";
				document.getElementById("content_28").style.display = "none";
				document.getElementById("content_29").style.display = "none";
			}
			document.getElementById("day20").onclick = function() {
				var i;
				for(i=0; i<32; i++){
				document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
				}
				document.getElementById("day20").style.backgroundColor = "yellow"; 

				document.getElementById("content_0").style.display = "none";
				document.getElementById("content_1").style.display = "none";
				document.getElementById("content_2").style.display = "none";
				document.getElementById("content_3").style.display = "none";
				document.getElementById("content_4").style.display = "none";
				document.getElementById("content_5").style.display = "none";
				document.getElementById("content_6").style.display = "none";
				document.getElementById("content_7").style.display = "none";
				document.getElementById("content_8").style.display = "none";
				document.getElementById("content_9").style.display = "none";
				document.getElementById("content_10").style.display = "none";
				document.getElementById("content_11").style.display = "none";
				document.getElementById("content_12").style.display = "none";
				document.getElementById("content_13").style.display = "none";
				document.getElementById("content_14").style.display = "none";
				document.getElementById("content_15").style.display = "none";
				document.getElementById("content_16").style.display = "none";
				document.getElementById("content_17").style.display = "none";
				document.getElementById("content_18").style.display = "none";
				document.getElementById("content_19").style.display = "block";
				document.getElementById("content_20").style.display = "none";
				document.getElementById("content_21").style.display = "none";
				document.getElementById("content_22").style.display = "none";
				document.getElementById("content_23").style.display = "none";
				document.getElementById("content_24").style.display = "none";
				document.getElementById("content_25").style.display = "none";
				document.getElementById("content_26").style.display = "none";
				document.getElementById("content_27").style.display = "none";
				document.getElementById("content_28").style.display = "none";
				document.getElementById("content_29").style.display = "none";
			}
			document.getElementById("day21").onclick = function() {
				var i;
				for(i=0; i<32; i++){
				document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
				}
				document.getElementById("day21").style.backgroundColor = "yellow"; 

				document.getElementById("content_0").style.display = "none";
				document.getElementById("content_1").style.display = "none";
				document.getElementById("content_2").style.display = "none";
				document.getElementById("content_3").style.display = "none";
				document.getElementById("content_4").style.display = "none";
				document.getElementById("content_5").style.display = "none";
				document.getElementById("content_6").style.display = "none";
				document.getElementById("content_7").style.display = "none";
				document.getElementById("content_8").style.display = "none";
				document.getElementById("content_9").style.display = "none";
				document.getElementById("content_10").style.display = "none";
				document.getElementById("content_11").style.display = "none";
				document.getElementById("content_12").style.display = "none";
				document.getElementById("content_13").style.display = "none";
				document.getElementById("content_14").style.display = "none";
				document.getElementById("content_15").style.display = "none";
				document.getElementById("content_16").style.display = "none";
				document.getElementById("content_17").style.display = "none";
				document.getElementById("content_18").style.display = "none";
				document.getElementById("content_19").style.display = "none";
				document.getElementById("content_20").style.display = "block";
				document.getElementById("content_21").style.display = "none";
				document.getElementById("content_22").style.display = "none";
				document.getElementById("content_23").style.display = "none";
				document.getElementById("content_24").style.display = "none";
				document.getElementById("content_25").style.display = "none";
				document.getElementById("content_26").style.display = "none";
				document.getElementById("content_27").style.display = "none";
				document.getElementById("content_28").style.display = "none";
				document.getElementById("content_29").style.display = "none";
			}
			document.getElementById("day22").onclick = function() {
				var i;
				for(i=0; i<32; i++){
				document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
				}
				document.getElementById("day22").style.backgroundColor = "yellow"; 

				document.getElementById("content_0").style.display = "none";
				document.getElementById("content_1").style.display = "none";
				document.getElementById("content_2").style.display = "none";
				document.getElementById("content_3").style.display = "none";
				document.getElementById("content_4").style.display = "none";
				document.getElementById("content_5").style.display = "none";
				document.getElementById("content_6").style.display = "none";
				document.getElementById("content_7").style.display = "none";
				document.getElementById("content_8").style.display = "none";
				document.getElementById("content_9").style.display = "none";
				document.getElementById("content_10").style.display = "none";
				document.getElementById("content_11").style.display = "none";
				document.getElementById("content_12").style.display = "none";
				document.getElementById("content_13").style.display = "none";
				document.getElementById("content_14").style.display = "none";
				document.getElementById("content_15").style.display = "none";
				document.getElementById("content_16").style.display = "none";
				document.getElementById("content_17").style.display = "none";
				document.getElementById("content_18").style.display = "none";
				document.getElementById("content_19").style.display = "none";
				document.getElementById("content_20").style.display = "none";
				document.getElementById("content_21").style.display = "block";
				document.getElementById("content_22").style.display = "none";
				document.getElementById("content_23").style.display = "none";
				document.getElementById("content_24").style.display = "none";
				document.getElementById("content_25").style.display = "none";
				document.getElementById("content_26").style.display = "none";
				document.getElementById("content_27").style.display = "none";
				document.getElementById("content_28").style.display = "none";
				document.getElementById("content_29").style.display = "none";
			}
			document.getElementById("day23").onclick = function() {
				var i;
				for(i=0; i<32; i++){
				document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
				}
				document.getElementById("day23").style.backgroundColor = "yellow"; 

				document.getElementById("content_0").style.display = "none";
				document.getElementById("content_1").style.display = "none";
				document.getElementById("content_2").style.display = "none";
				document.getElementById("content_3").style.display = "none";
				document.getElementById("content_4").style.display = "none";
				document.getElementById("content_5").style.display = "none";
				document.getElementById("content_6").style.display = "none";
				document.getElementById("content_7").style.display = "none";
				document.getElementById("content_8").style.display = "none";
				document.getElementById("content_9").style.display = "none";
				document.getElementById("content_10").style.display = "none";
				document.getElementById("content_11").style.display = "none";
				document.getElementById("content_12").style.display = "none";
				document.getElementById("content_13").style.display = "none";
				document.getElementById("content_14").style.display = "none";
				document.getElementById("content_15").style.display = "none";
				document.getElementById("content_16").style.display = "none";
				document.getElementById("content_17").style.display = "none";
				document.getElementById("content_18").style.display = "none";
				document.getElementById("content_19").style.display = "none";
				document.getElementById("content_20").style.display = "none";
				document.getElementById("content_21").style.display = "none";
				document.getElementById("content_22").style.display = "block";
				document.getElementById("content_23").style.display = "none";
				document.getElementById("content_24").style.display = "none";
				document.getElementById("content_25").style.display = "none";
				document.getElementById("content_26").style.display = "none";
				document.getElementById("content_27").style.display = "none";
				document.getElementById("content_28").style.display = "none";
				document.getElementById("content_29").style.display = "none";
			}
			document.getElementById("day24").onclick = function() {
				var i;
				for(i=0; i<32; i++){
				document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
				}
				document.getElementById("day24").style.backgroundColor = "yellow"; 

				document.getElementById("content_0").style.display = "none";
				document.getElementById("content_1").style.display = "none";
				document.getElementById("content_2").style.display = "none";
				document.getElementById("content_3").style.display = "none";
				document.getElementById("content_4").style.display = "none";
				document.getElementById("content_5").style.display = "none";
				document.getElementById("content_6").style.display = "none";
				document.getElementById("content_7").style.display = "none";
				document.getElementById("content_8").style.display = "none";
				document.getElementById("content_9").style.display = "none";
				document.getElementById("content_10").style.display = "none";
				document.getElementById("content_11").style.display = "none";
				document.getElementById("content_12").style.display = "none";
				document.getElementById("content_13").style.display = "none";
				document.getElementById("content_14").style.display = "none";
				document.getElementById("content_15").style.display = "none";
				document.getElementById("content_16").style.display = "none";
				document.getElementById("content_17").style.display = "none";
				document.getElementById("content_18").style.display = "none";
				document.getElementById("content_19").style.display = "none";
				document.getElementById("content_20").style.display = "none";
				document.getElementById("content_21").style.display = "none";
				document.getElementById("content_22").style.display = "none";
				document.getElementById("content_23").style.display = "block";
				document.getElementById("content_24").style.display = "none";
				document.getElementById("content_25").style.display = "none";
				document.getElementById("content_26").style.display = "none";
				document.getElementById("content_27").style.display = "none";
				document.getElementById("content_28").style.display = "none";
				document.getElementById("content_29").style.display = "none";
			}
			document.getElementById("day25").onclick = function() {
				var i;
				for(i=0; i<32; i++){
				document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
				}
				document.getElementById("day25").style.backgroundColor = "yellow"; 

				document.getElementById("content_0").style.display = "none";
				document.getElementById("content_1").style.display = "none";
				document.getElementById("content_2").style.display = "none";
				document.getElementById("content_3").style.display = "none";
				document.getElementById("content_4").style.display = "none";
				document.getElementById("content_5").style.display = "none";
				document.getElementById("content_6").style.display = "none";
				document.getElementById("content_7").style.display = "none";
				document.getElementById("content_8").style.display = "none";
				document.getElementById("content_9").style.display = "none";
				document.getElementById("content_10").style.display = "none";
				document.getElementById("content_11").style.display = "none";
				document.getElementById("content_12").style.display = "none";
				document.getElementById("content_13").style.display = "none";
				document.getElementById("content_14").style.display = "none";
				document.getElementById("content_15").style.display = "none";
				document.getElementById("content_16").style.display = "none";
				document.getElementById("content_17").style.display = "none";
				document.getElementById("content_18").style.display = "none";
				document.getElementById("content_19").style.display = "none";
				document.getElementById("content_20").style.display = "none";
				document.getElementById("content_21").style.display = "none";
				document.getElementById("content_22").style.display = "none";
				document.getElementById("content_23").style.display = "none";
				document.getElementById("content_24").style.display = "block";
				document.getElementById("content_25").style.display = "none";
				document.getElementById("content_26").style.display = "none";
				document.getElementById("content_27").style.display = "none";
				document.getElementById("content_28").style.display = "none";
				document.getElementById("content_29").style.display = "none";
			}
			document.getElementById("day26").onclick = function() {
				var i;
				for(i=0; i<32; i++){
				document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
				}
				document.getElementById("day26").style.backgroundColor = "yellow"; 

				document.getElementById("content_0").style.display = "none";
				document.getElementById("content_1").style.display = "none";
				document.getElementById("content_2").style.display = "none";
				document.getElementById("content_3").style.display = "none";
				document.getElementById("content_4").style.display = "none";
				document.getElementById("content_5").style.display = "none";
				document.getElementById("content_6").style.display = "none";
				document.getElementById("content_7").style.display = "none";
				document.getElementById("content_8").style.display = "none";
				document.getElementById("content_9").style.display = "none";
				document.getElementById("content_10").style.display = "none";
				document.getElementById("content_11").style.display = "none";
				document.getElementById("content_12").style.display = "none";
				document.getElementById("content_13").style.display = "none";
				document.getElementById("content_14").style.display = "none";
				document.getElementById("content_15").style.display = "none";
				document.getElementById("content_16").style.display = "none";
				document.getElementById("content_17").style.display = "none";
				document.getElementById("content_18").style.display = "none";
				document.getElementById("content_19").style.display = "none";
				document.getElementById("content_20").style.display = "none";
				document.getElementById("content_21").style.display = "none";
				document.getElementById("content_22").style.display = "none";
				document.getElementById("content_23").style.display = "none";
				document.getElementById("content_24").style.display = "none";
				document.getElementById("content_25").style.display = "block";
				document.getElementById("content_26").style.display = "none";
				document.getElementById("content_27").style.display = "none";
				document.getElementById("content_28").style.display = "none";
				document.getElementById("content_29").style.display = "none";
			}
			document.getElementById("day27").onclick = function() {
				var i;
				for(i=0; i<32; i++){
				document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
				}
				document.getElementById("day27").style.backgroundColor = "yellow"; 

				document.getElementById("content_0").style.display = "none";
				document.getElementById("content_1").style.display = "none";
				document.getElementById("content_2").style.display = "none";
				document.getElementById("content_3").style.display = "none";
				document.getElementById("content_4").style.display = "none";
				document.getElementById("content_5").style.display = "none";
				document.getElementById("content_6").style.display = "none";
				document.getElementById("content_7").style.display = "none";
				document.getElementById("content_8").style.display = "none";
				document.getElementById("content_9").style.display = "none";
				document.getElementById("content_10").style.display = "none";
				document.getElementById("content_11").style.display = "none";
				document.getElementById("content_12").style.display = "none";
				document.getElementById("content_13").style.display = "none";
				document.getElementById("content_14").style.display = "none";
				document.getElementById("content_15").style.display = "none";
				document.getElementById("content_16").style.display = "none";
				document.getElementById("content_17").style.display = "none";
				document.getElementById("content_18").style.display = "none";
				document.getElementById("content_19").style.display = "none";
				document.getElementById("content_20").style.display = "none";
				document.getElementById("content_21").style.display = "none";
				document.getElementById("content_22").style.display = "none";
				document.getElementById("content_23").style.display = "none";
				document.getElementById("content_24").style.display = "none";
				document.getElementById("content_25").style.display = "none";
				document.getElementById("content_26").style.display = "block";
				document.getElementById("content_27").style.display = "none";
				document.getElementById("content_28").style.display = "none";
				document.getElementById("content_29").style.display = "none";
			}
			document.getElementById("day28").onclick = function() {
				var i;
				for(i=0; i<32; i++){
				document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
				}
				document.getElementById("day28").style.backgroundColor = "yellow"; 

				document.getElementById("content_0").style.display = "none";
				document.getElementById("content_1").style.display = "none";
				document.getElementById("content_2").style.display = "none";
				document.getElementById("content_3").style.display = "none";
				document.getElementById("content_4").style.display = "none";
				document.getElementById("content_5").style.display = "none";
				document.getElementById("content_6").style.display = "none";
				document.getElementById("content_7").style.display = "none";
				document.getElementById("content_8").style.display = "none";
				document.getElementById("content_9").style.display = "none";
				document.getElementById("content_10").style.display = "none";
				document.getElementById("content_11").style.display = "none";
				document.getElementById("content_12").style.display = "none";
				document.getElementById("content_13").style.display = "none";
				document.getElementById("content_14").style.display = "none";
				document.getElementById("content_15").style.display = "none";
				document.getElementById("content_16").style.display = "none";
				document.getElementById("content_17").style.display = "none";
				document.getElementById("content_18").style.display = "none";
				document.getElementById("content_19").style.display = "none";
				document.getElementById("content_20").style.display = "none";
				document.getElementById("content_21").style.display = "none";
				document.getElementById("content_22").style.display = "none";
				document.getElementById("content_23").style.display = "none";
				document.getElementById("content_24").style.display = "none";
				document.getElementById("content_25").style.display = "none";
				document.getElementById("content_26").style.display = "none";
				document.getElementById("content_27").style.display = "block";
				document.getElementById("content_28").style.display = "none";
				document.getElementById("content_29").style.display = "none";
			}
			document.getElementById("day29").onclick = function() {
				var i;
				for(i=0; i<32; i++){
				document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
				}
				document.getElementById("day29").style.backgroundColor = "yellow"; 

				document.getElementById("content_0").style.display = "none";
				document.getElementById("content_1").style.display = "none";
				document.getElementById("content_2").style.display = "none";
				document.getElementById("content_3").style.display = "none";
				document.getElementById("content_4").style.display = "none";
				document.getElementById("content_5").style.display = "none";
				document.getElementById("content_6").style.display = "none";
				document.getElementById("content_7").style.display = "none";
				document.getElementById("content_8").style.display = "none";
				document.getElementById("content_9").style.display = "none";
				document.getElementById("content_10").style.display = "none";
				document.getElementById("content_11").style.display = "none";
				document.getElementById("content_12").style.display = "none";
				document.getElementById("content_13").style.display = "none";
				document.getElementById("content_14").style.display = "none";
				document.getElementById("content_15").style.display = "none";
				document.getElementById("content_16").style.display = "none";
				document.getElementById("content_17").style.display = "none";
				document.getElementById("content_18").style.display = "none";
				document.getElementById("content_19").style.display = "none";
				document.getElementById("content_20").style.display = "none";
				document.getElementById("content_21").style.display = "none";
				document.getElementById("content_22").style.display = "none";
				document.getElementById("content_23").style.display = "none";
				document.getElementById("content_24").style.display = "none";
				document.getElementById("content_25").style.display = "none";
				document.getElementById("content_26").style.display = "none";
				document.getElementById("content_27").style.display = "none";
				document.getElementById("content_28").style.display = "block";
				document.getElementById("content_29").style.display = "none";
			}
			document.getElementById("day30").onclick = function() {
				var i;
				for(i=0; i<32; i++){
				document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
				}
				document.getElementById("day30").style.backgroundColor = "yellow"; 

				document.getElementById("content_0").style.display = "none";
				document.getElementById("content_1").style.display = "none";
				document.getElementById("content_2").style.display = "none";
				document.getElementById("content_3").style.display = "none";
				document.getElementById("content_4").style.display = "none";
				document.getElementById("content_5").style.display = "none";
				document.getElementById("content_6").style.display = "none";
				document.getElementById("content_7").style.display = "none";
				document.getElementById("content_8").style.display = "none";
				document.getElementById("content_9").style.display = "none";
				document.getElementById("content_10").style.display = "none";
				document.getElementById("content_11").style.display = "none";
				document.getElementById("content_12").style.display = "none";
				document.getElementById("content_13").style.display = "none";
				document.getElementById("content_14").style.display = "none";
				document.getElementById("content_15").style.display = "none";
				document.getElementById("content_16").style.display = "none";
				document.getElementById("content_17").style.display = "none";
				document.getElementById("content_18").style.display = "none";
				document.getElementById("content_19").style.display = "none";
				document.getElementById("content_20").style.display = "none";
				document.getElementById("content_21").style.display = "none";
				document.getElementById("content_22").style.display = "none";
				document.getElementById("content_23").style.display = "none";
				document.getElementById("content_24").style.display = "none";
				document.getElementById("content_25").style.display = "none";
				document.getElementById("content_26").style.display = "none";
				document.getElementById("content_27").style.display = "none";
				document.getElementById("content_28").style.display = "none";
				document.getElementById("content_29").style.display = "block";
			}
			document.getElementById("day31").onclick = function() {
				var i;
				for(i=0; i<32; i++){
				document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
				}
				document.getElementById("day31").style.backgroundColor = "yellow"; 

				document.getElementById("content_0").style.display = "none";
				document.getElementById("content_1").style.display = "none";
				document.getElementById("content_2").style.display = "none";
				document.getElementById("content_3").style.display = "none";
				document.getElementById("content_4").style.display = "none";
				document.getElementById("content_5").style.display = "none";
				document.getElementById("content_6").style.display = "none";
				document.getElementById("content_7").style.display = "none";
				document.getElementById("content_8").style.display = "none";
				document.getElementById("content_9").style.display = "none";
				document.getElementById("content_10").style.display = "none";
				document.getElementById("content_11").style.display = "none";
				document.getElementById("content_12").style.display = "none";
				document.getElementById("content_13").style.display = "none";
				document.getElementById("content_14").style.display = "none";
				document.getElementById("content_15").style.display = "none";
				document.getElementById("content_16").style.display = "none";
				document.getElementById("content_17").style.display = "none";
				document.getElementById("content_18").style.display = "none";
				document.getElementById("content_19").style.display = "none";
				document.getElementById("content_20").style.display = "none";
				document.getElementById("content_21").style.display = "none";
				document.getElementById("content_22").style.display = "none";
				document.getElementById("content_23").style.display = "none";
				document.getElementById("content_24").style.display = "none";
				document.getElementById("content_25").style.display = "none";
				document.getElementById("content_26").style.display = "none";
				document.getElementById("content_27").style.display = "none";
				document.getElementById("content_28").style.display = "none";
				document.getElementById("content_29").style.display = "none";
				document.getElementById("content_30").style.display = "block";
			}
			document.getElementById("day32").onclick = function() {
				var i;
				for(i=0; i<32; i++){
				document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
				}
				document.getElementById("day32").style.backgroundColor = "yellow"; 

				document.getElementById("content_0").style.display = "none";
				document.getElementById("content_1").style.display = "none";
				document.getElementById("content_2").style.display = "none";
				document.getElementById("content_3").style.display = "none";
				document.getElementById("content_4").style.display = "none";
				document.getElementById("content_5").style.display = "none";
				document.getElementById("content_6").style.display = "none";
				document.getElementById("content_7").style.display = "none";
				document.getElementById("content_8").style.display = "none";
				document.getElementById("content_9").style.display = "none";
				document.getElementById("content_10").style.display = "none";
				document.getElementById("content_11").style.display = "none";
				document.getElementById("content_12").style.display = "none";
				document.getElementById("content_13").style.display = "none";
				document.getElementById("content_14").style.display = "none";
				document.getElementById("content_15").style.display = "none";
				document.getElementById("content_16").style.display = "none";
				document.getElementById("content_17").style.display = "none";
				document.getElementById("content_18").style.display = "none";
				document.getElementById("content_19").style.display = "none";
				document.getElementById("content_20").style.display = "none";
				document.getElementById("content_21").style.display = "none";
				document.getElementById("content_22").style.display = "none";
				document.getElementById("content_23").style.display = "none";
				document.getElementById("content_24").style.display = "none";
				document.getElementById("content_25").style.display = "none";
				document.getElementById("content_26").style.display = "none";
				document.getElementById("content_27").style.display = "none";
				document.getElementById("content_28").style.display = "none";
				document.getElementById("content_29").style.display = "none";
				document.getElementById("content_30").style.display = "none";
				document.getElementById("content_31").style.display = "block";
			}



			</script>
		`;
	}
}
