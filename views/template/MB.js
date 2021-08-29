const date_ob = new Date();
const tools = require('../../../tools.js');

module.exports = {
	template:function(whos, content, calander, user_id, focused_year, focused_month, focused_date, daily_diary_length){

		return `
			<!doctype html>
			<html>
			<head>
				<title>${whos}'s diary</title>
				<meta charset="utf-8">
			</head>
			<body>

			<div style="display: none">
				<a href="/">home page</a>
			</div>

			<div class="container1">
				<div id="background_color"></div>

				${content}
				<div id="content_background"></div>

				<div id="calander_name">- ${focused_month}월 -</div>
				<div id="Jun_calander">
					${calander}
				</div>

			</div>

			<div id="move_buttons">
				<form id="prevButton" method="post">
					<input type="hidden" name="user_id" value="${user_id}">
					<input type="submit" name="up" value="전달">
				</form>
				<form id="nextButton" method="post">
					<input type="hidden" name="user_id" value="${user_id}">
					<input type="submit" name="up" value="다음달">
				</form>
				<form id="upButton" method="post">
					<input type="hidden" name="user_id" value="${user_id}">
					<input type="submit" name="up" value="지난해">
				</form>
				<form id="downButton" method="post">
					<input type="hidden" name="user_id" value="${user_id}">
					<input type="submit" name="down" value="다음해">
				</form>
				<form id="todayButton" method="post">
					<input type="hidden" name="user_id" value="${user_id}">
					<input type="submit" name="down" value="이번달로">
				</form>
			</div>

			<div id="navigator">
				<form id="nav_daily" action="/diary/daily/${whos}?year=${focused_year}&month=${focused_month}&date=${focused_date}" method="post">
					<input type="hidden" name="user_id" value="${user_id}">
					<input class="now" type="submit" value="daily">
				</form>
				<form id="nav_monthly" action="/diary/monthly_mode_B/${whos}?year=${focused_year}&month=${focused_month}&date=${focused_date}" method="post">
					<input type="hidden" name="user_id" value="${user_id}">
					<input id="nav_m_button"  type="submit" value="monthly">
				</form>
				<form id="nav_annualy" action="/diary/annualy/${whos}?year=${focused_year}&month=${focused_month}&date=${focused_date}" method="post">
					<input type="hidden" name="user_id" value="${user_id}">
					<input type="submit" value="annualy">
				</form>
			</div>

			<div id="mode_A">
				<form id="nav_daily" action="/diary/monthly_mode_A/${whos}?year=${focused_year}&month=${focused_month}&date=${tools.switch_M_to_first_D_of_M(focused_month)}" method="post">
					<input type="hidden" name="user_id" value="${user_id}">
					<input class="now" type="submit" value="원래대로">
				</form>
			</div>

			<form action="/:user_id/monthly_diary_upload" method="post">
				<div id="text_editor">
					<p id="title">월<br>간<br><br>생<br>각</p>
					<span id="fixer_label">fix it</span>
					<input id="fixer" type="checkbox">
					<input id="saver" type="submit" value="save">

					<p id="inner_title">월간 생각</p>
					<div id="Question_label">this month's Question</div>
					<textarea id="Question" name="monthly_diary_Question" cols="37" rows="2"></textarea>
					<div id="comment_label">today's comment</div>
					<textarea id="comment" name="monthly_diary_comment" cols="37" rows="10"></textarea>

					<input type="hidden" name="user_id" value=${user_id}>
					<div id="text_editor_fold">접기</div>
				</div>
			</form>


			<div id="text_editor_box">
				<div id="text_editor_box_inner">
				</div>
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
				top: 2vh;
				left: 1.5%;
				width: 10%;
				height: 5vh;
				}

				#navigator {
				position: absolute;
				top: 49.5vh;
				left: 1.5%;
				width: 10%;
				height: 5vh;
				}

				#mode_A {
				position: absolute;
				top: 90vh;
				left: 1.5%;
				width: 10%;
				height: 5vh;
				}

				form > input {
				width: 84%;
				height: 8vh;
				border: none;
				margin-bottom: 1.5vh;
				background-color: #59886B;
				color: white;
				}




				#background_color {
				grid-column: 2/4;
				grid-row: 1/5;
				width: 97%;
				height: 100%;
				background-color: ;
				z-index: 1;
				}


				#text_editor_box {
				position: absolute;
				top: 4%;
				right: 0.5%;
				width: 9%;
				height: 89%;
				background-color: green;
				z-index: 99;
				}

				#text_editor_box_inner {
				margin: auto;
				margin-top: 8%;
				width: 85%;
				height: 97%;
				background-color: darkgreen;
				z-index: 99;
				}

				#text_editor {
				position: absolute;
				top: 6%;
				right: 1.5%;
				width: 7%;
				height: 85%;
				background-color: #C05555;
				font-family: KoreanFrenchTypewriter;
				z-index: 100;
				}

				#title {
				margin-top: 100%;
				font-size: 40px;
				text-align: center;
				}

				#inner_title {
				display: none;
				margin-top: 10%;
				font-size: 40px;
				text-align: center;

				}

				#Question_label {
				display: none;
				text-align: center;
				margin-top: 10%;
				}
				#Question {
				display: none;
				font-size: 30px;
				margin: auto;
				margin-top: 2%;
				}

				#comment_label {
				display: none;
				text-align: center;
				margin-top: 5%;
				}
				#comment {
				display: none;
				font-size: 30px;
				margin: auto;
				margin-top: 2%;
				}

				#fixer_label {
				display: none;
				position: absolute;
				top: 5%;
				left: 5%;
				width: 75px;
				text-align: center;
				font-size: 20px;
				}
				#fixer {
				display: none;
				position: absolute;
				top: 7%;
				left: 7%;
				width: 50px;
				height: 50px;
				margin-top: 2%;
				}
				#saver {
				display: none;
				position: absolute;
				top: 92%;
				left: 10%;
				width: 40%;
				height: 5%;
				font-size: 15px;
				}

				#text_editor_fold {
				position: absolute;
				top: 7%;
				right: 4%;
				width: 15%;
				height: 5%;
				font-size: 30px;
				display: none;
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
				background-color: #ffc85c;;
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
				width: 79%;
				height: 100%;
				z-index: 10;
				text-align: center;
				margin-top: 150px;
				}

				#content_background {
				grid-column: 3/4;
				grid-row: 3/4;
				width: 79%;
				height: 100%;
				background-color: #ffc85c;;
				z-index: 5;
				}

			</style>

			<script>


			var activate_text_editor = function(){
				document.getElementById("text_editor").style.right = "20%";
				document.getElementById("text_editor").style.width = "40%";

				document.getElementById("fixer_label").style.display = "block";
				document.getElementById("fixer").style.display = "block";
				document.getElementById("comment_label").style.display = "block";
				document.getElementById("comment").style.display = "block";
				document.getElementById("Question_label").style.display = "block";
				document.getElementById("Question").style.display = "block";
				document.getElementById("saver").style.display = "block";
				document.getElementById("inner_title").style.display = "block";
				document.getElementById("text_editor_fold").style.display = "block";

				document.getElementById("title").style.display = "none";
			}

			var deactivate_text_editor = function(){
				document.getElementById("text_editor").style.left = "";
				document.getElementById("text_editor").style.right = "1.5%";
				document.getElementById("text_editor").style.top = "6%";
				document.getElementById("text_editor").style.width = "7%";

				document.getElementById("fixer_label").style.display = "none";
				document.getElementById("fixer").style.display = "none";
				document.getElementById("comment_label").style.display = "none";
				document.getElementById("comment").style.display = "none";
				document.getElementById("Question_label").style.display = "none";
				document.getElementById("Question").style.display = "none";
				document.getElementById("saver").style.display = "none";
				document.getElementById("inner_title").style.display = "none";
				document.getElementById("text_editor_fold").style.display = "none";

				document.getElementById("title").style.display = "block";
			}

			document.getElementById("text_editor").addEventListener("click", function(e){
				e = window.event || e; 
				if(this === e.target) {
					activate_text_editor();
				}
			});

			document.getElementById("text_editor_fold").addEventListener("click", function(e){
				e = window.event || e; 
				if(this === e.target) {
					deactivate_text_editor();
				}
			});


		var offset = [0,0];
		var divTextEditor = document.getElementById ("text_editor");
		var isDown = false;

		divTextEditor.addEventListener('mousedown', function(e) {
		isDown = true;
		offset = [
			divTextEditor.offsetLeft - e.clientX,
			divTextEditor.offsetTop - e.clientY
		 ];
		}, true);

		document.addEventListener('mouseup', function() {
		   isDown = false;
		}, true);

		document.addEventListener('mousemove', function(e) {
			event.preventDefault();
			if (isDown) {
				divTextEditor.style.left = (e.clientX + offset[0]) + 'px';
				divTextEditor.style.top  = (e.clientY + offset[1]) + 'px';
		   }
		}, true);


			var today_month = ${date_ob.getMonth()+1};
			var today_year = ${date_ob.getFullYear()};

			document.getElementById("prevButton").onclick = function() {
				if(${focused_month} != 1)
					document.getElementById("prevButton").action = "/diary/monthly_mode_B/${whos}?year=${focused_year}&month=${focused_month-1}&date=${tools.switch_M_to_first_D_of_M(focused_month-1)}"
				else if(${focused_month} == 1)
					document.getElementById("prevButton").action = "/diary/monthly_mode_B/${whos}?year=${focused_year-1}&month=12&date=${tools.switch_M_to_first_D_of_M(12)}"
			};
			document.getElementById("nextButton").onclick = function() {
				if(${focused_month} != 12)
					document.getElementById("nextButton").action = "/diary/monthly_mode_B/${whos}?year=${focused_year}&month=${focused_month+1}&date=${tools.switch_M_to_first_D_of_M(focused_month+1)}"
				else if(${focused_month} == 12)
					document.getElementById("nextButton").action = "/diary/monthly_mode_B/${whos}?year=${focused_year+1}&month=1&date=${tools.switch_M_to_first_D_of_M(1)}"
			};
			document.getElementById("upButton").onclick = function() {
				document.getElementById("upButton").action = "/diary/monthly_mode_B/${whos}?year=${focused_year-1}&month=${focused_month}&date=${focused_date}"
			};
			document.getElementById("downButton").onclick = function() {
				document.getElementById("downButton").action = "/diary/monthly_mode_B/${whos}?year=${focused_year+1}&month=${focused_month}&date=${focused_date}"
			};
			document.getElementById("todayButton").onclick = function() {
				document.getElementById("todayButton").action = "/diary/monthly_mode_B/${whos}?year="+today_year+"&month="+today_month+"&date=${focused_date}"
			};

			var ii = 0;
			if(ii < ${daily_diary_length})
			{
				document.getElementById("day1").onclick = function() {
					for(var i=0; i<${daily_diary_length}; i++){
						document.getElementById("day"+(i+1)).style.backgroundColor = "#ffc85c"; 
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
						document.getElementById("day"+(i+1)).style.backgroundColor = "#ffc85c"; 
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
						document.getElementById("day"+(i+1)).style.backgroundColor = "#ffc85c"; 
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
						document.getElementById("day"+(i+1)).style.backgroundColor = "#ffc85c"; 
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
						document.getElementById("day"+(i+1)).style.backgroundColor = "#ffc85c"; 
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
						document.getElementById("day"+(i+1)).style.backgroundColor = "#ffc85c"; 
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
						document.getElementById("day"+(i+1)).style.backgroundColor = "#ffc85c"; 
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
						document.getElementById("day"+(i+1)).style.backgroundColor = "#ffc85c"; 
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
						document.getElementById("day"+(i+1)).style.backgroundColor = "#ffc85c"; 
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
						document.getElementById("day"+(i+1)).style.backgroundColor = "#ffc85c"; 
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
						document.getElementById("day"+(i+1)).style.backgroundColor = "#ffc85c"; 
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
						document.getElementById("day"+(i+1)).style.backgroundColor = "#ffc85c"; 
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
						document.getElementById("day"+(i+1)).style.backgroundColor = "#ffc85c"; 
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
						document.getElementById("day"+(i+1)).style.backgroundColor = "#ffc85c"; 
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
						document.getElementById("day"+(i+1)).style.backgroundColor = "#ffc85c"; 
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
						document.getElementById("day"+(i+1)).style.backgroundColor = "#ffc85c"; 
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
						document.getElementById("day"+(i+1)).style.backgroundColor = "#ffc85c"; 
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
						document.getElementById("day"+(i+1)).style.backgroundColor = "#ffc85c"; 
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
						document.getElementById("day"+(i+1)).style.backgroundColor = "#ffc85c"; 
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
						document.getElementById("day"+(i+1)).style.backgroundColor = "#ffc85c"; 
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
						document.getElementById("day"+(i+1)).style.backgroundColor = "#ffc85c"; 
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
						document.getElementById("day"+(i+1)).style.backgroundColor = "#ffc85c"; 
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
						document.getElementById("day"+(i+1)).style.backgroundColor = "#ffc85c"; 
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
						document.getElementById("day"+(i+1)).style.backgroundColor = "#ffc85c"; 
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
						document.getElementById("day"+(i+1)).style.backgroundColor = "#ffc85c"; 
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
						document.getElementById("day"+(i+1)).style.backgroundColor = "#ffc85c"; 
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
						document.getElementById("day"+(i+1)).style.backgroundColor = "#ffc85c"; 
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
						document.getElementById("day"+(i+1)).style.backgroundColor = "#ffc85c"; 
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
						document.getElementById("day"+(i+1)).style.backgroundColor = "#ffc85c"; 
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
						document.getElementById("day"+(i+1)).style.backgroundColor = "#ffc85c"; 
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
						document.getElementById("day"+(i+1)).style.backgroundColor = "#ffc85c"; 
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
						document.getElementById("day"+(i+1)).style.backgroundColor = "#ffc85c"; 
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
