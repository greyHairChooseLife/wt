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

			<form action="/:id_number/monthly_diary_upload" method="post">
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

					<input type="hidden" name="id_number" value=${id_number}>
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
				grid-template-rows: 6vh 6vh 6vh 6vh 56vh 6vh 6vh 6vh;
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

				#mode_B {
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

			</script>
		`;
	}
}


