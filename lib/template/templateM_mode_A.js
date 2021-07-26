const date_ob = new Date();
const tools = require('../tools.js');

module.exports = {
	monthly_mode_A_template:function(title, content, id_number, focused_year, focused_month, focused_date){

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
				<div id="background_color_1_L"></div>
				<div id="background_color_1_R"></div>
				<div id="background_color_2_L"></div>
				<div id="background_color_2_R"></div>
				<div id="background_color_3_L"></div>
				<div id="background_color_3_R"></div>
				<div id="background_color_4_L"></div>
				<div id="background_color_4_R"></div>

				<div id="content_background_color_1_L"></div>
				<div id="content_background_color_1_R"></div>
				<div id="content_background_color_2_L"></div>
				<div id="content_background_color_2_R"></div>
				<div id="content_background_color_3_L"></div>
				<div id="content_background_color_3_R"></div>
				<div id="content_background_color_4_L"></div>
				<div id="content_background_color_4_R"></div>

				<div class="trigger" id="onclick_trigger_1_L"></div>
				<div class="trigger" id="onclick_trigger_1_R"></div>
				<div class="trigger" id="onclick_trigger_2_L"></div>
				<div class="trigger" id="onclick_trigger_2_R"></div>
				<div class="trigger" id="onclick_trigger_3_L"></div>
				<div class="trigger" id="onclick_trigger_3_R"></div>
				<div class="trigger" id="onclick_trigger_4_L"></div>
				<div class="trigger" id="onclick_trigger_4_R"></div>
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
				<form id="nav_monthly" action="/${title}/monthly_mode_A?year=${focused_year}&month=${focused_month}&date=${focused_date}" method="post">
					<input type="hidden" name="id_number" value="${id_number}">
					<input id="nav_m_button"  type="submit" value="monthly">
				</form>
				<form id="nav_annualy" action="/${title}/annualy?year=${focused_year}&month=${focused_month}&date=${focused_date}" method="post">
					<input type="hidden" name="id_number" value="${id_number}">
					<input type="submit" value="annualy">
				</form>
			</div>

			<div id="mode_B">
				<form id="nav_daily" action="/${title}/monthly_mode_B?year=${focused_year}&month=${focused_month}&date=${tools.switch_M_to_first_D_of_M(focused_month)}" method="post">
					<input type="hidden" name="id_number" value="${id_number}">
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
				grid-template-columns: 10% 40% 40% 10%;
				grid-template-rows: 6vh 6vh 6vh 6vh 58vh 6vh 6vh 6vh;
				font-family: KoreanFrenchTypewriter;
				place-items: center;
				}

				#content_background_color_1_L {
				grid-column: 2/3;
				grid-row: 2/6;
				width: 97%;
				height: 100%;
				background-color: #ffc85c;
				opacity: 20%;
				z-index: 21;
				display: none;
				}
				#content_background_color_1_R {
				grid-column: 3/4;
				grid-row: 2/6;
				width: 97%;
				height: 100%;
				background-color: #ffc85c;
				opacity: 20%;
				z-index: 21;
				display: none;
				}
				#content_background_color_2_L {
				grid-column: 2/3;
				grid-row: 3/7;
				width: 97%;
				height: 100%;
				background-color: #ffc85c;
				opacity: 20%;
				z-index: 21;
				display: none;
				}
				#content_background_color_2_R {
				grid-column: 3/4;
				grid-row: 3/7;
				width: 97%;
				height: 100%;
				background-color: #ffc85c;
				opacity: 20%;
				z-index: 21;
				display: none;
				}
				#content_background_color_3_L {
				grid-column: 2/3;
				grid-row: 4/8;
				width: 97%;
				height: 100%;
				background-color: #ffc85c;
				opacity: 20%;
				z-index: 21;
				display: none;
				}
				#content_background_color_3_R {
				grid-column: 3/4;
				grid-row: 4/8;
				width: 97%;
				height: 100%;
				background-color: #ffc85c;
				opacity: 20%;
				z-index: 21;
				display: none;
				}
				#content_background_color_4_L {
				grid-column: 2/3;
				grid-row: 5/9;
				width: 97%;
				height: 100%;
				background-color: #ffc85c;
				opacity: 20%;
				z-index: 21;
				display: none;
				}
				#content_background_color_4_R {
				grid-column: 3/4;
				grid-row: 5/9;
				width: 97%;
				height: 100%;
				background-color: #ffc85c;
				opacity: 20%;
				z-index: 21;
				display: none;
				}

				#background_color_1_L {
				grid-column: 2/3;
				grid-row: 1/2;
				width: 97%;
				height: 90%;
				background-color: #ffc85c;
				z-index: 1;
				}
				#background_color_1_R {
				grid-column: 3/4;
				grid-row: 1/2;
				width: 97%;
				height: 90%;
				background-color: #ffc85c;
				z-index: 1;
				}
				#background_color_2_L {
				grid-column: 2/3;
				grid-row: 2/3;
				width: 97%;
				height: 90%;
				background-color: #ffc85c;
				z-index: 1;
				}
				#background_color_2_R {
				grid-column: 3/4;
				grid-row: 2/3;
				width: 97%;
				height: 90%;
				background-color: #ffc85c;
				z-index: 1;
				}
				#background_color_3_L {
				grid-column: 2/3;
				grid-row: 3/4;
				width: 97%;
				height: 90%;
				background-color: #ffc85c;
				z-index: 1;
				}
				#background_color_3_R {
				grid-column: 3/4;
				grid-row: 3/4;
				width: 97%;
				height: 90%;
				background-color: #ffc85c;
				z-index: 1;
				}
				#background_color_4_L {
				grid-column: 2/3;
				grid-row: 4/5;
				width: 97%;
				height: 90%;
				background-color: #ffc85c;
				z-index: 1;
				}
				#background_color_4_R {
				grid-column: 3/4;
				grid-row: 4/5;
				width: 97%;
				height: 90%;
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

				#mode_B {
				position: absolute;
				top: 10px;
				right: 90vw;
				}


				.date {
				margin-left: 50px;
				justify-self: start;
				z-index: 5;
				}
				.content {
				display: none;
				z-index: 5;
				font-size: 20px;
				background-color: white;
				}
				.content_summary {
				margin-left: 120px;
				z-index: 5;
				}

				#date_lv1_L {
				grid-column: 2/3;
				grid-row: 1/2;
				}
				#content_summary_lv1_L {
				grid-column: 2/3;
				grid-row: 1/2;
				}
				#content_lv1_L {
				grid-column: 2/3;
				grid-row: 2/6;
				}

				#date_lv1_R {
				grid-column: 3/4;
				grid-row: 1/2;
				}
				#content_summary_lv1_R {
				grid-column: 3/4;
				grid-row: 1/2;
				}
				#content_lv1_R {
				grid-column: 3/4;
				grid-row: 2/6;
				}
				#date_lv2_L {
				grid-column: 2/3;
				grid-row: 2/3;
				}
				#content_summary_lv2_L {
				grid-column: 2/3;
				grid-row: 2/3;
				}
				#content_lv2_L {
				grid-column: 2/3;
				grid-row: 3/7;
				}
				#date_lv2_R {
				grid-column: 3/4;
				grid-row: 2/3;
				}
				#content_summary_lv2_R {
				grid-column: 3/4;
				grid-row: 2/3;
				}
				#content_lv2_R {
				grid-column: 3/4;
				grid-row: 3/7;
				}

				#date_lv3_L {
				grid-column: 2/3;
				grid-row: 3/4;
				}
				#content_summary_lv3_L {
				grid-column: 2/3;
				grid-row: 3/4;
				}
				#content_lv3_L {
				grid-column: 2/3;
				grid-row: 4/8;
				}
				#date_lv3_R {
				grid-column: 3/4;
				grid-row: 3/4;
				}
				#content_summary_lv3_R {
				grid-column: 3/4;
				grid-row: 3/4;
				}
				#content_lv3_R {
				grid-column: 3/4;
				grid-row: 4/8;
				}

				#date_lv4_L {
				grid-column: 2/3;
				grid-row: 4/5;
				}
				#content_summary_lv4_L {
				grid-column: 2/3;
				grid-row: 4/5;
				}
				#content_lv4_L {
				grid-column: 2/3;
				grid-row: 5/9;
				}
				#date_lv4_R {
				grid-column: 3/4;
				grid-row: 4/5;
				}
				#content_summary_lv4_R {
				grid-column: 3/4;
				grid-row: 4/5;
				}
				#content_lv4_R {
				grid-column: 3/4;
				grid-row: 5/9;
				}

				.trigger {
				width: 100%;
				height: 100%;
				opacity: 1%;
				z-index: 10;
				}

				#onclick_trigger_1_L {
				grid-column: 2/3;
				grid-row: 1/2;
				}
				#onclick_trigger_1_R {
				grid-column: 3/4;
				grid-row: 1/2;
				}
				#onclick_trigger_2_L {
				grid-column: 2/3;
				grid-row: 2/3;
				}
				#onclick_trigger_2_R {
				grid-column: 3/4;
				grid-row: 2/3;
				}
				#onclick_trigger_3_L {
				grid-column: 2/3;
				grid-row: 3/4;
				}
				#onclick_trigger_3_R {
				grid-column: 3/4;
				grid-row: 3/4;
				}
				#onclick_trigger_4_L {
				grid-column: 2/3;
				grid-row: 4/5;
				}
				#onclick_trigger_4_R {
				grid-column: 3/4;
				grid-row: 4/5;
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


			document.getElementById("onclick_trigger_1_L").onclick = function() {
				document.getElementById("date_lv1_L").style.gridRow = "1/2";
				document.getElementById("content_summary_lv1_L").style.gridRow = "1/2";
				document.getElementById("background_color_1_L").style.gridRow = "1/2";
				document.getElementById("onclick_trigger_1_L").style.gridRow = "1/2";

				document.getElementById("date_lv2_L").style.gridRow = "6/7";
				document.getElementById("content_summary_lv2_L").style.gridRow = "6/7";
				document.getElementById("background_color_2_L").style.gridRow = "6/7";
				document.getElementById("onclick_trigger_2_L").style.gridRow = "6/7";

				document.getElementById("date_lv3_L").style.gridRow = "7/8";
				document.getElementById("content_summary_lv3_L").style.gridRow = "7/8";
				document.getElementById("background_color_3_L").style.gridRow = "7/8";
				document.getElementById("onclick_trigger_3_L").style.gridRow = "7/8";

				document.getElementById("date_lv4_L").style.gridRow = "8/9";
				document.getElementById("content_summary_lv4_L").style.gridRow = "8/9";
				document.getElementById("background_color_4_L").style.gridRow = "8/9";
				document.getElementById("onclick_trigger_4_L").style.gridRow = "8/9";

				document.getElementById("content_lv1_L").style.display = "block";
				document.getElementById("content_lv2_L").style.display = "none";
				document.getElementById("content_lv3_L").style.display = "none";
				document.getElementById("content_lv4_L").style.display = "none";
				document.getElementById("content_background_color_1_L").style.display = "block";
				document.getElementById("content_background_color_2_L").style.display = "none";
				document.getElementById("content_background_color_3_L").style.display = "none";
				document.getElementById("content_background_color_4_L").style.display = "none";
			}

			document.getElementById("onclick_trigger_2_L").onclick = function() {
				document.getElementById("date_lv1_L").style.gridRow = "1/2";
				document.getElementById("content_summary_lv1_L").style.gridRow = "1/2";
				document.getElementById("onclick_trigger_1_L").style.gridRow = "1/2";
				document.getElementById("background_color_1_L").style.gridRow = "1/2";

				document.getElementById("date_lv2_L").style.gridRow = "2/3";
				document.getElementById("content_summary_lv2_L").style.gridRow = "2/3";
				document.getElementById("onclick_trigger_2_L").style.gridRow = "2/3";
				document.getElementById("background_color_2_L").style.gridRow = "2/3";

				document.getElementById("date_lv3_L").style.gridRow = "7/8";
				document.getElementById("content_summary_lv3_L").style.gridRow = "7/8";
				document.getElementById("background_color_3_L").style.gridRow = "7/8";
				document.getElementById("onclick_trigger_3_L").style.gridRow = "7/8";

				document.getElementById("date_lv4_L").style.gridRow = "8/9";
				document.getElementById("content_summary_lv4_L").style.gridRow = "8/9";
				document.getElementById("background_color_4_L").style.gridRow = "8/9";
				document.getElementById("onclick_trigger_4_L").style.gridRow = "8/9";

				document.getElementById("content_lv1_L").style.display = "none";
				document.getElementById("content_lv2_L").style.display = "block";
				document.getElementById("content_lv3_L").style.display = "none";
				document.getElementById("content_lv4_L").style.display = "none";
				document.getElementById("content_background_color_1_L").style.display = "none";
				document.getElementById("content_background_color_2_L").style.display = "block";
				document.getElementById("content_background_color_3_L").style.display = "none";
				document.getElementById("content_background_color_4_L").style.display = "none";
			}

			document.getElementById("onclick_trigger_3_L").onclick = function() {
				document.getElementById("date_lv1_L").style.gridRow = "1/2";
				document.getElementById("content_summary_lv1_L").style.gridRow = "1/2";
				document.getElementById("onclick_trigger_1_L").style.gridRow = "1/2";
				document.getElementById("background_color_1_L").style.gridRow = "1/2";

				document.getElementById("date_lv2_L").style.gridRow = "2/3";
				document.getElementById("content_summary_lv2_L").style.gridRow = "2/3";
				document.getElementById("onclick_trigger_2_L").style.gridRow = "2/3";
				document.getElementById("background_color_2_L").style.gridRow = "2/3";

				document.getElementById("date_lv3_L").style.gridRow = "3/4";
				document.getElementById("content_summary_lv3_L").style.gridRow = "3/4";
				document.getElementById("background_color_3_L").style.gridRow = "3/4";
				document.getElementById("onclick_trigger_3_L").style.gridRow = "3/4";

				document.getElementById("date_lv4_L").style.gridRow = "8/9";
				document.getElementById("content_summary_lv4_L").style.gridRow = "8/9";
				document.getElementById("background_color_4_L").style.gridRow = "8/9";
				document.getElementById("onclick_trigger_4_L").style.gridRow = "8/9";

				document.getElementById("content_lv1_L").style.display = "none";
				document.getElementById("content_lv2_L").style.display = "none";
				document.getElementById("content_lv3_L").style.display = "block";
				document.getElementById("content_lv4_L").style.display = "none";
				document.getElementById("content_background_color_1_L").style.display = "none";
				document.getElementById("content_background_color_2_L").style.display = "none";
				document.getElementById("content_background_color_3_L").style.display = "block";
				document.getElementById("content_background_color_4_L").style.display = "none";
			}

			document.getElementById("onclick_trigger_4_L").onclick = function() {
				document.getElementById("date_lv1_L").style.gridRow = "1/2";
				document.getElementById("content_summary_lv1_L").style.gridRow = "1/2";
				document.getElementById("onclick_trigger_1_L").style.gridRow = "1/2";
				document.getElementById("background_color_1_L").style.gridRow = "1/2";

				document.getElementById("date_lv2_L").style.gridRow = "2/3";
				document.getElementById("content_summary_lv2_L").style.gridRow = "2/3";
				document.getElementById("onclick_trigger_2_L").style.gridRow = "2/3";
				document.getElementById("background_color_2_L").style.gridRow = "2/3";

				document.getElementById("date_lv3_L").style.gridRow = "3/4";
				document.getElementById("content_summary_lv3_L").style.gridRow = "3/4";
				document.getElementById("background_color_3_L").style.gridRow = "3/4";
				document.getElementById("onclick_trigger_3_L").style.gridRow = "3/4";

				document.getElementById("date_lv4_L").style.gridRow = "4/5";
				document.getElementById("content_summary_lv4_L").style.gridRow = "4/5";
				document.getElementById("background_color_4_L").style.gridRow = "4/5";
				document.getElementById("onclick_trigger_4_L").style.gridRow = "4/5";

				document.getElementById("content_lv1_L").style.display = "none";
				document.getElementById("content_lv2_L").style.display = "none";
				document.getElementById("content_lv3_L").style.display = "none";
				document.getElementById("content_lv4_L").style.display = "block";
				document.getElementById("content_background_color_1_L").style.display = "none";
				document.getElementById("content_background_color_2_L").style.display = "none";
				document.getElementById("content_background_color_3_L").style.display = "none";
				document.getElementById("content_background_color_4_L").style.display = "block";
			}

			document.getElementById("onclick_trigger_1_R").onclick = function() {
				document.getElementById("date_lv1_R").style.gridRow = "1/2";
				document.getElementById("content_summary_lv1_R").style.gridRow = "1/2";
				document.getElementById("background_color_1_R").style.gridRow = "1/2";
				document.getElementById("onclick_trigger_1_R").style.gridRow = "1/2";

				document.getElementById("date_lv2_R").style.gridRow = "6/7";
				document.getElementById("content_summary_lv2_R").style.gridRow = "6/7";
				document.getElementById("background_color_2_R").style.gridRow = "6/7";
				document.getElementById("onclick_trigger_2_R").style.gridRow = "6/7";

				document.getElementById("date_lv3_R").style.gridRow = "7/8";
				document.getElementById("content_summary_lv3_R").style.gridRow = "7/8";
				document.getElementById("background_color_3_R").style.gridRow = "7/8";
				document.getElementById("onclick_trigger_3_R").style.gridRow = "7/8";

				document.getElementById("date_lv4_R").style.gridRow = "8/9";
				document.getElementById("content_summary_lv4_R").style.gridRow = "8/9";
				document.getElementById("background_color_4_R").style.gridRow = "8/9";
				document.getElementById("onclick_trigger_4_R").style.gridRow = "8/9";

				document.getElementById("content_lv1_R").style.display = "block";
				document.getElementById("content_lv2_R").style.display = "none";
				document.getElementById("content_lv3_R").style.display = "none";
				document.getElementById("content_lv4_R").style.display = "none";
				document.getElementById("content_background_color_1_R").style.display = "block";
				document.getElementById("content_background_color_2_R").style.display = "none";
				document.getElementById("content_background_color_3_R").style.display = "none";
				document.getElementById("content_background_color_4_R").style.display = "none";
			}

			document.getElementById("onclick_trigger_2_R").onclick = function() {
				document.getElementById("date_lv1_R").style.gridRow = "1/2";
				document.getElementById("content_summary_lv1_R").style.gridRow = "1/2";
				document.getElementById("onclick_trigger_1_R").style.gridRow = "1/2";
				document.getElementById("background_color_1_R").style.gridRow = "1/2";

				document.getElementById("date_lv2_R").style.gridRow = "2/3";
				document.getElementById("content_summary_lv2_R").style.gridRow = "2/3";
				document.getElementById("onclick_trigger_2_R").style.gridRow = "2/3";
				document.getElementById("background_color_2_R").style.gridRow = "2/3";

				document.getElementById("date_lv3_R").style.gridRow = "7/8";
				document.getElementById("content_summary_lv3_R").style.gridRow = "7/8";
				document.getElementById("background_color_3_R").style.gridRow = "7/8";
				document.getElementById("onclick_trigger_3_R").style.gridRow = "7/8";

				document.getElementById("date_lv4_R").style.gridRow = "8/9";
				document.getElementById("content_summary_lv4_R").style.gridRow = "8/9";
				document.getElementById("background_color_4_R").style.gridRow = "8/9";
				document.getElementById("onclick_trigger_4_R").style.gridRow = "8/9";

				document.getElementById("content_lv1_R").style.display = "none";
				document.getElementById("content_lv2_R").style.display = "block";
				document.getElementById("content_lv3_R").style.display = "none";
				document.getElementById("content_lv4_R").style.display = "none";
				document.getElementById("content_background_color_1_R").style.display = "none";
				document.getElementById("content_background_color_2_R").style.display = "block";
				document.getElementById("content_background_color_3_R").style.display = "none";
				document.getElementById("content_background_color_4_R").style.display = "none";
			}

			document.getElementById("onclick_trigger_3_R").onclick = function() {
				document.getElementById("date_lv1_R").style.gridRow = "1/2";
				document.getElementById("content_summary_lv1_R").style.gridRow = "1/2";
				document.getElementById("onclick_trigger_1_R").style.gridRow = "1/2";
				document.getElementById("background_color_1_R").style.gridRow = "1/2";

				document.getElementById("date_lv2_R").style.gridRow = "2/3";
				document.getElementById("content_summary_lv2_R").style.gridRow = "2/3";
				document.getElementById("onclick_trigger_2_R").style.gridRow = "2/3";
				document.getElementById("background_color_2_R").style.gridRow = "2/3";

				document.getElementById("date_lv3_R").style.gridRow = "3/4";
				document.getElementById("content_summary_lv3_R").style.gridRow = "3/4";
				document.getElementById("background_color_3_R").style.gridRow = "3/4";
				document.getElementById("onclick_trigger_3_R").style.gridRow = "3/4";

				document.getElementById("date_lv4_R").style.gridRow = "8/9";
				document.getElementById("content_summary_lv4_R").style.gridRow = "8/9";
				document.getElementById("background_color_4_R").style.gridRow = "8/9";
				document.getElementById("onclick_trigger_4_R").style.gridRow = "8/9";

				document.getElementById("content_lv1_R").style.display = "none";
				document.getElementById("content_lv2_R").style.display = "none";
				document.getElementById("content_lv3_R").style.display = "block";
				document.getElementById("content_lv4_R").style.display = "none";
				document.getElementById("content_background_color_1_R").style.display = "none";
				document.getElementById("content_background_color_2_R").style.display = "none";
				document.getElementById("content_background_color_3_R").style.display = "block";
				document.getElementById("content_background_color_4_R").style.display = "none";
			}

			document.getElementById("onclick_trigger_4_R").onclick = function() {
				document.getElementById("date_lv1_R").style.gridRow = "1/2";
				document.getElementById("content_summary_lv1_R").style.gridRow = "1/2";
				document.getElementById("onclick_trigger_1_R").style.gridRow = "1/2";
				document.getElementById("background_color_1_R").style.gridRow = "1/2";

				document.getElementById("date_lv2_R").style.gridRow = "2/3";
				document.getElementById("content_summary_lv2_R").style.gridRow = "2/3";
				document.getElementById("onclick_trigger_2_R").style.gridRow = "2/3";
				document.getElementById("background_color_2_R").style.gridRow = "2/3";

				document.getElementById("date_lv3_R").style.gridRow = "3/4";
				document.getElementById("content_summary_lv3_R").style.gridRow = "3/4";
				document.getElementById("background_color_3_R").style.gridRow = "3/4";
				document.getElementById("onclick_trigger_3_R").style.gridRow = "3/4";

				document.getElementById("date_lv4_R").style.gridRow = "4/5";
				document.getElementById("content_summary_lv4_R").style.gridRow = "4/5";
				document.getElementById("background_color_4_R").style.gridRow = "4/5";
				document.getElementById("onclick_trigger_4_R").style.gridRow = "4/5";

				document.getElementById("content_lv1_R").style.display = "none";
				document.getElementById("content_lv2_R").style.display = "none";
				document.getElementById("content_lv3_R").style.display = "none";
				document.getElementById("content_lv4_R").style.display = "block";
				document.getElementById("content_background_color_1_R").style.display = "none";
				document.getElementById("content_background_color_2_R").style.display = "none";
				document.getElementById("content_background_color_3_R").style.display = "none";
				document.getElementById("content_background_color_4_R").style.display = "block";
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
