const date_ob = new Date();
const tools = require('../tools.js');

module.exports = {
	monthly_mode_B_template:function(title, content, calander, id_number, focused_year, focused_month, focused_date, daily_diary_length){

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

				<div id="calander_name">- ${focused_month}월 -</div>
				<div id="Jun_calander">
					${calander}
				</div>
			</div>

			<form action="/:id_number/monthly_diary_upload" method="post">
				<div id="textarea">
					<p>monthly diary input</p>
					<span id="fixer_label">fix it</span>
					<input id="fixer" type="checkbox">
					<input id="saver" type="submit" value="save">

					<div id="comment_label">today's comment</div>
					<textarea id="comment" name="monthly_diary_comment" cols="37" rows="16"></textarea>
					<div id="Question_label">this month's Question</div>
					<textarea id="Question" name="monthly_diary_Question" cols="37" rows="2"></textarea>

					<input type="hidden" name="id_number" value=${id_number}>
				</div>
			</form>


			<div id="move_buttons">
				<form id="prevButton" method="post">
					<input type="hidden" name="id_number" value="${id_number}">
					<input type="submit" name="up" value="전달">
				</form>
				<form id="nextButton" method="post">
					<input type="hidden" name="id_number" value="${id_number}">
					<input type="submit" name="up" value="다음달">
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
					<input type="submit" name="down" value="이번달로">
				</form>
			</div>

			<div id="navigator">
				<form id="nav_daily" action="/${title}/daily?year=${focused_year}&month=${focused_month}&date=${focused_date}" method="post">
					<input type="hidden" name="id_number" value="${id_number}">
					<input class="now" type="submit" value="daily">
				</form>
				<form id="nav_monthly" action="/${title}/monthly_mode_B?year=${focused_year}&month=${focused_month}&date=${focused_date}" method="post">
					<input type="hidden" name="id_number" value="${id_number}">
					<input id="nav_m_button"  type="submit" value="monthly">
				</form>
				<form id="nav_annualy" action="/${title}/annualy?year=${focused_year}&month=${focused_month}&date=${focused_date}" method="post">
					<input type="hidden" name="id_number" value="${id_number}">
					<input type="submit" value="annualy">
				</form>
			</div>

			<div id="mode_A">
				<form id="nav_daily" action="/${title}/monthly_mode_A?year=${focused_year}&month=${focused_month}&date=${tools.switch_M_to_first_D_of_M(focused_month)}" method="post">
					<input type="hidden" name="id_number" value="${id_number}">
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
				grid-template-columns: 10% 40% 40% 10%;
				grid-template-rows: 10vh 60vh 20vh 8vh;
				font-family: KoreanFrenchTypewriter;
				place-items: center;
				}

				#move_buttons{
				position: absolute;
				top: 10px;
				right: 10px;
				}
				form > input {
				width: 100px;
				height: 60px;
				}

				#navigator {
				position: absolute;
				top: 400px;
				right: 10px;
				}

				#mode_A {
				position: absolute;
				top: 10px;
				right: 90vw;
				}

				#background_color {
				grid-column: 2/4;
				grid-row: 1/5;
				width: 100%;
				height: 100%;
				background-color: #ffc85c;
				z-index: 1;
				}



				#textarea {
				position: absolute;
				top: 6%;
				left: -43%;
				width: 47%;
				height: 85%;
				background-color: yellow;
				z-index: 100;
				}

				#comment_label {
				text-align: center;
				margin-top: 7%;
				}
				#comment {
				display: block;
				font-family: KoreanFrenchTypewriter;
				font-size: 30px;
				margin: auto;
				}

				#Question_label {
				text-align: center;
				margin-top: 2%;
				}
				#Question {
				display: block;
				font-family: KoreanFrenchTypewriter;
				font-size: 30px;
				margin: auto;
				}
				#textarea > p {
				font-size: 20px;
				text-align: center;
				}
				#fixer_label {
				position: absolute;
				top: 3%;
				right: 5%;
				width: 75px;
				text-align: center;
				}
				#fixer {
				position: absolute;
				top: 2%;
				right: 2%;
				width: 30px;
				height: 30px;
				}
				#saver {
				position: absolute;
				top: 5.5%;
				left: 2%;
				width: 10em;
				height: 2em;
				font-size: 15px;
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

			var fixed = 0;
			var fix = document.getElementById("fixer");
			fix.onclick = function(){
				if(fix.checked == true){
					document.getElementById("textarea").style.left = "1%";
					fixed = 1;
				}else{
					document.getElementById("textarea").style.left = "-43%";
					fixed = 0;
				}
			}
			document.getElementById("textarea").onmouseover = function(){
				document.getElementById("textarea").style.left = "1%";
			};
			document.getElementById("textarea").onmouseleave = function(){
				if(fixed == 0){
					document.getElementById("textarea").style.left = "-43%";
				}
			};







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

			var ii = 0;
			if(ii < ${daily_diary_length})
			{
				document.getElementById("day1").onclick = function() {
					for(var i=0; i<${daily_diary_length}; i++){
						document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
					}
					for(i=0; i<${daily_diary_length}; i++){
						document.getElementById("content_"+i).style.display = "none";
					}
					document.getElementById("day1").style.backgroundColor = "yellow"; 
					document.getElementById("content_0").style.display = "block";
				};
				ii++;
			} 
			if(ii < ${daily_diary_length})
			{
				document.getElementById("day2").onclick = function() {
					for(var i=0; i<${daily_diary_length}; i++){
						document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
					}
					for(i=0; i<${daily_diary_length}; i++){
						document.getElementById("content_"+i).style.display = "none";
					}
					document.getElementById("day2").style.backgroundColor = "yellow"; 
					document.getElementById("content_1").style.display = "block";
				};
				ii++;
			} 
			if(ii < ${daily_diary_length})
			{
				document.getElementById("day3").onclick = function() {
					for(var i=0; i<${daily_diary_length}; i++){
						document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
					}
					for(i=0; i<${daily_diary_length}; i++){
						document.getElementById("content_"+i).style.display = "none";
					}
					document.getElementById("day3").style.backgroundColor = "yellow"; 
					document.getElementById("content_2").style.display = "block";
				};
				ii++;
			} 
			if(ii < ${daily_diary_length})
			{
				document.getElementById("day4").onclick = function() {
					for(var i=0; i<${daily_diary_length}; i++){
						document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
					}
					for(i=0; i<${daily_diary_length}; i++){
						document.getElementById("content_"+i).style.display = "none";
					}
					document.getElementById("day4").style.backgroundColor = "yellow"; 
					document.getElementById("content_3").style.display = "block";
				};
				ii++;
			} 
			if(ii < ${daily_diary_length})
			{
				document.getElementById("day5").onclick = function() {
					for(var i=0; i<${daily_diary_length}; i++){
						document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
					}
					for(i=0; i<${daily_diary_length}; i++){
						document.getElementById("content_"+i).style.display = "none";
					}
					document.getElementById("day5").style.backgroundColor = "yellow"; 
					document.getElementById("content_4").style.display = "block";
				};
				ii++;
			} 
			if(ii < ${daily_diary_length})
			{
				document.getElementById("day6").onclick = function() {
					for(var i=0; i<${daily_diary_length}; i++){
						document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
					}
					for(i=0; i<${daily_diary_length}; i++){
						document.getElementById("content_"+i).style.display = "none";
					}
					document.getElementById("day6").style.backgroundColor = "yellow"; 
					document.getElementById("content_5").style.display = "block";
				};
				ii++;
			} 
			if(ii < ${daily_diary_length})
			{
				document.getElementById("day7").onclick = function() {
					for(var i=0; i<${daily_diary_length}; i++){
						document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
					}
					for(i=0; i<${daily_diary_length}; i++){
						document.getElementById("content_"+i).style.display = "none";
					}
					document.getElementById("day7").style.backgroundColor = "yellow"; 
					document.getElementById("content_6").style.display = "block";
				};
				ii++;
			} 
			if(ii < ${daily_diary_length})
			{
				document.getElementById("day8").onclick = function() {
					for(var i=0; i<${daily_diary_length}; i++){
						document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
					}
					for(i=0; i<${daily_diary_length}; i++){
						document.getElementById("content_"+i).style.display = "none";
					}
					document.getElementById("day8").style.backgroundColor = "yellow"; 
					document.getElementById("content_7").style.display = "block";
				};
				ii++;
			} 
			if(ii < ${daily_diary_length})
			{
				document.getElementById("day9").onclick = function() {
					for(var i=0; i<${daily_diary_length}; i++){
						document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
					}
					for(i=0; i<${daily_diary_length}; i++){
						document.getElementById("content_"+i).style.display = "none";
					}
					document.getElementById("day9").style.backgroundColor = "yellow"; 
					document.getElementById("content_8").style.display = "block";
				};
				ii++;
			} 
			if(ii < ${daily_diary_length})
			{
				document.getElementById("day10").onclick = function() {
					for(var i=0; i<${daily_diary_length}; i++){
						document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
					}
					for(i=0; i<${daily_diary_length}; i++){
						document.getElementById("content_"+i).style.display = "none";
					}
					document.getElementById("day10").style.backgroundColor = "yellow"; 
					document.getElementById("content_9").style.display = "block";
				};
				ii++;
			} 
			if(ii < ${daily_diary_length})
			{
				document.getElementById("day11").onclick = function() {
					for(var i=0; i<${daily_diary_length}; i++){
						document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
					}
					for(i=0; i<${daily_diary_length}; i++){
						document.getElementById("content_"+i).style.display = "none";
					}
					document.getElementById("day11").style.backgroundColor = "yellow"; 
					document.getElementById("content_10").style.display = "block";
				};
				ii++;
			} 
			if(ii < ${daily_diary_length})
			{
				document.getElementById("day12").onclick = function() {
					for(var i=0; i<${daily_diary_length}; i++){
						document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
					}
					for(i=0; i<${daily_diary_length}; i++){
						document.getElementById("content_"+i).style.display = "none";
					}
					document.getElementById("day12").style.backgroundColor = "yellow"; 
					document.getElementById("content_11").style.display = "block";
				};
				ii++;
			} 
			if(ii < ${daily_diary_length})
			{
				document.getElementById("day13").onclick = function() {
					for(var i=0; i<${daily_diary_length}; i++){
						document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
					}
					for(i=0; i<${daily_diary_length}; i++){
						document.getElementById("content_"+i).style.display = "none";
					}
					document.getElementById("day13").style.backgroundColor = "yellow"; 
					document.getElementById("content_12").style.display = "block";
				};
				ii++;
			} 
			if(ii < ${daily_diary_length})
			{
				document.getElementById("day14").onclick = function() {
					for(var i=0; i<${daily_diary_length}; i++){
						document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
					}
					for(i=0; i<${daily_diary_length}; i++){
						document.getElementById("content_"+i).style.display = "none";
					}
					document.getElementById("day14").style.backgroundColor = "yellow"; 
					document.getElementById("content_13").style.display = "block";
				};
				ii++;
			} 
			if(ii < ${daily_diary_length})
			{
				document.getElementById("day15").onclick = function() {
					for(var i=0; i<${daily_diary_length}; i++){
						document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
					}
					for(i=0; i<${daily_diary_length}; i++){
						document.getElementById("content_"+i).style.display = "none";
					}
					document.getElementById("day15").style.backgroundColor = "yellow"; 
					document.getElementById("content_14").style.display = "block";
				};
				ii++;
			} 
			if(ii < ${daily_diary_length})
			{
				document.getElementById("day16").onclick = function() {
					for(var i=0; i<${daily_diary_length}; i++){
						document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
					}
					for(i=0; i<${daily_diary_length}; i++){
						document.getElementById("content_"+i).style.display = "none";
					}
					document.getElementById("day16").style.backgroundColor = "yellow"; 
					document.getElementById("content_15").style.display = "block";
				};
				ii++;
			} 
			if(ii < ${daily_diary_length})
			{
				document.getElementById("day17").onclick = function() {
					for(var i=0; i<${daily_diary_length}; i++){
						document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
					}
					for(i=0; i<${daily_diary_length}; i++){
						document.getElementById("content_"+i).style.display = "none";
					}
					document.getElementById("day17").style.backgroundColor = "yellow"; 
					document.getElementById("content_16").style.display = "block";
				};
				ii++;
			} 
			if(ii < ${daily_diary_length})
			{
				document.getElementById("day18").onclick = function() {
					for(var i=0; i<${daily_diary_length}; i++){
						document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
					}
					for(i=0; i<${daily_diary_length}; i++){
						document.getElementById("content_"+i).style.display = "none";
					}
					document.getElementById("day18").style.backgroundColor = "yellow"; 
					document.getElementById("content_17").style.display = "block";
				};
				ii++;
			} 
			if(ii < ${daily_diary_length})
			{
				document.getElementById("day19").onclick = function() {
					for(var i=0; i<${daily_diary_length}; i++){
						document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
					}
					for(i=0; i<${daily_diary_length}; i++){
						document.getElementById("content_"+i).style.display = "none";
					}
					document.getElementById("day19").style.backgroundColor = "yellow"; 
					document.getElementById("content_18").style.display = "block";
				};
				ii++;
			} 
			if(ii < ${daily_diary_length})
			{
				document.getElementById("day20").onclick = function() {
					for(var i=0; i<${daily_diary_length}; i++){
						document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
					}
					for(i=0; i<${daily_diary_length}; i++){
						document.getElementById("content_"+i).style.display = "none";
					}
					document.getElementById("day20").style.backgroundColor = "yellow"; 
					document.getElementById("content_19").style.display = "block";
				};
				ii++;
			} 
			if(ii < ${daily_diary_length})
			{
				document.getElementById("day21").onclick = function() {
					for(var i=0; i<${daily_diary_length}; i++){
						document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
					}
					for(i=0; i<${daily_diary_length}; i++){
						document.getElementById("content_"+i).style.display = "none";
					}
					document.getElementById("day21").style.backgroundColor = "yellow"; 
					document.getElementById("content_20").style.display = "block";
				};
				ii++;
			} 
			if(ii < ${daily_diary_length})
			{
				document.getElementById("day22").onclick = function() {
					for(var i=0; i<${daily_diary_length}; i++){
						document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
					}
					for(i=0; i<${daily_diary_length}; i++){
						document.getElementById("content_"+i).style.display = "none";
					}
					document.getElementById("day22").style.backgroundColor = "yellow"; 
					document.getElementById("content_21").style.display = "block";
				};
				ii++;
			} 
			if(ii < ${daily_diary_length})
			{
				document.getElementById("day23").onclick = function() {
					for(var i=0; i<${daily_diary_length}; i++){
						document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
					}
					for(i=0; i<${daily_diary_length}; i++){
						document.getElementById("content_"+i).style.display = "none";
					}
					document.getElementById("day23").style.backgroundColor = "yellow"; 
					document.getElementById("content_22").style.display = "block";
				};
				ii++;
			} 
			if(ii < ${daily_diary_length})
			{
				document.getElementById("day24").onclick = function() {
					for(var i=0; i<${daily_diary_length}; i++){
						document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
					}
					for(i=0; i<${daily_diary_length}; i++){
						document.getElementById("content_"+i).style.display = "none";
					}
					document.getElementById("day24").style.backgroundColor = "yellow"; 
					document.getElementById("content_23").style.display = "block";
				};
				ii++;
			} 
			if(ii < ${daily_diary_length})
			{
				document.getElementById("day25").onclick = function() {
					for(var i=0; i<${daily_diary_length}; i++){
						document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
					}
					for(i=0; i<${daily_diary_length}; i++){
						document.getElementById("content_"+i).style.display = "none";
					}
					document.getElementById("day25").style.backgroundColor = "yellow"; 
					document.getElementById("content_24").style.display = "block";
				};
				ii++;
			} 
			if(ii < ${daily_diary_length})
			{
				document.getElementById("day26").onclick = function() {
					for(var i=0; i<${daily_diary_length}; i++){
						document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
					}
					for(i=0; i<${daily_diary_length}; i++){
						document.getElementById("content_"+i).style.display = "none";
					}
					document.getElementById("day26").style.backgroundColor = "yellow"; 
					document.getElementById("content_25").style.display = "block";
				};
				ii++;
			} 
			if(ii < ${daily_diary_length})
			{
				document.getElementById("day27").onclick = function() {
					for(var i=0; i<${daily_diary_length}; i++){
						document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
					}
					for(i=0; i<${daily_diary_length}; i++){
						document.getElementById("content_"+i).style.display = "none";
					}
					document.getElementById("day27").style.backgroundColor = "yellow"; 
					document.getElementById("content_26").style.display = "block";
				};
				ii++;
			} 
			if(ii < ${daily_diary_length})
			{
				document.getElementById("day28").onclick = function() {
					for(var i=0; i<${daily_diary_length}; i++){
						document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
					}
					for(i=0; i<${daily_diary_length}; i++){
						document.getElementById("content_"+i).style.display = "none";
					}
					document.getElementById("day28").style.backgroundColor = "yellow"; 
					document.getElementById("content_27").style.display = "block";
				};
				ii++;
			} 
			if(ii < ${daily_diary_length})
			{
				document.getElementById("day29").onclick = function() {
					for(var i=0; i<${daily_diary_length}; i++){
						document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
					}
					for(i=0; i<${daily_diary_length}; i++){
						document.getElementById("content_"+i).style.display = "none";
					}
					document.getElementById("day29").style.backgroundColor = "yellow"; 
					document.getElementById("content_28").style.display = "block";
				};
				ii++;
			} 
			if(ii < ${daily_diary_length})
			{
				document.getElementById("day30").onclick = function() {
					for(var i=0; i<${daily_diary_length}; i++){
						document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
					}
					for(i=0; i<${daily_diary_length}; i++){
						document.getElementById("content_"+i).style.display = "none";
					}
					document.getElementById("day30").style.backgroundColor = "yellow"; 
					document.getElementById("content_29").style.display = "block";
				};
				ii++;
			} 
			if(ii < ${daily_diary_length})
			{
				document.getElementById("day31").onclick = function() {
					for(var i=0; i<${daily_diary_length}; i++){
						document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
					}
					for(i=0; i<${daily_diary_length}; i++){
						document.getElementById("content_"+i).style.display = "none";
					}
					document.getElementById("day31").style.backgroundColor = "yellow"; 
					document.getElementById("content_30").style.display = "block";
				};
				ii++;
			} 
			if(ii < ${daily_diary_length})
			{
				document.getElementById("day32").onclick = function() {
					for(var i=0; i<${daily_diary_length}; i++){
						document.getElementById("day"+(i+1)).style.backgroundColor = "white"; 
					}
					for(i=0; i<${daily_diary_length}; i++){
						document.getElementById("content_"+i).style.display = "none";
					}
					document.getElementById("day32").style.backgroundColor = "yellow"; 
					document.getElementById("content_31").style.display = "block";
				};
				ii++;
			} 
				


			</script>
		`;
	}
}
