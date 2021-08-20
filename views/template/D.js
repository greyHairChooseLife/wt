const date_ob = new Date();
const tools = require('../../../tools.js');

module.exports = {
	template:function(whos, content, user_id, focused_year, focused_month, focused_date){

		var changed_month_minus = tools.switch_onlyM_from_D(focused_date-1);
		var changed_month_plus = tools.switch_onlyM_from_D(focused_date+1);

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
				${content}
				<div id="background_color_1">
					<div class="tile_fix" id="tile1_fix">fix<input class="tile_fix_checkbox" id="tile1_fix_checkbox" type="checkbox"></div>
				</div>

				<div id="background_color_2">
					<div class="tile_fix" id="tile2_fix">fix<input class="tile_fix_checkbox" id="tile2_fix_checkbox"  type="checkbox"></div>
				</div>
				<div id="background_color_3">
					<div class="tile_fix" id="tile3_fix">fix<input class="tile_fix_checkbox" id="tile3_fix_checkbox"  type="checkbox"></div>
				</div>
				<div id="background_color_4">
					<div class="tile_fix" id="tile4_fix">fix<input class="tile_fix_checkbox" id="tile4_fix_checkbox"  type="checkbox"></div>
				</div>
				<div id="background_color_5">
					<div class="tile_fix" id="tile5_fix">fix<input class="tile_fix_checkbox" id="tile5_fix_checkbox"  type="checkbox"></div>
				</div>
				<div id="background_color_6">
					<div class="tile_fix" id="tile6_fix">fix<input class="tile_fix_checkbox" id="tile6_fix_checkbox"  type="checkbox"></div>
				</div>
				<div id="background_color_7">
					<div class="tile_fix" id="tile7_fix">fix<input class="tile_fix_checkbox" id="tile7_fix_checkbox"  type="checkbox"></div>
				</div>
				<div id="background_color_8">
					<div class="tile_fix" id="tile8_fix">fix<input class="tile_fix_checkbox" id="tile8_fix_checkbox"  type="checkbox"></div>
				</div>

			</div>

			<div id="move_buttons">
				<form id="prevButton" method="post">
					<input type="hidden" name="user_id" value="${user_id}">
					<input type="submit" name="up" value="전날">
				</form>
				<form id="nextButton" method="post">
					<input type="hidden" name="user_id" value="${user_id}">
					<input type="submit" name="up" value="다음날">
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
					<input type="submit" name="down" value="오늘로">
				</form>
			</div>


			<div id="navigator">
				<form id="nav_daily" action="/diary/daily/${whos}?year=${focused_year}&month=${focused_month}&date=${focused_date}" method="post">
					<input type="hidden" name="user_id" value="${user_id}">
					<input class="now" type="submit" value="daily">
				</form>
				<form id="nav_monthly" action="/diary/monthly_mode_A/${whos}?year=${focused_year}&month=${focused_month}&date=${focused_date}" method="post">
					<input type="hidden" name="user_id" value="${user_id}">
					<input id="nav_m_button"  type="submit" value="monthly">
				</form>
				<form id="nav_annualy" action="/diary/annualy/${whos}?year=${focused_year}&month=${focused_month}&date=${focused_date}" method="post">
					<input type="hidden" name="user_id" value="${user_id}">
					<input type="submit" value="annualy">
				</form>
			</div>

			<form action="/${user_id}/daily_diary_upload" method="post">
				<div id="text_editor">
					<p id="title">일<br>간<br><br>생<br>각</p>
					<span id="fixer_label">fix it</span>
					<input id="fixer" type="checkbox">
					<input id="saver" type="submit" value="save">

					<p id="inner_title">일간 생각</p>
					<div id="Question_label">today's Question</div>
					<textarea id="Question" name="daily_diary_Question" cols="37" rows="2"></textarea>
					<div id="comment_label">today's comment</div>
					<textarea id="comment" name="daily_diary_comment" cols="37" rows="10"></textarea>

					<input type="hidden" name="user_id" value=${user_id}>
					<div id="text_editor_fold">접기</div>
				</div>
			</form>

			<div id="text_editor_box">
				<div id="teet_editor_box_inner">
				</div>
			</div>

			<div>

				<div id="picture_box_add">더하기</div>
				<div id="picture_box_remove">빼기</div>
				<div class="picture_box" id="picture_1"></div>
				<div class="picture_box" id="picture_2"></div>
				<div class="picture_box" id="picture_3"></div>
				<div class="picture_box" id="picture_4"></div>
				<div class="picture_box" id="empty_picture">'더하기'를 눌러서 사진을 추가하세요.</div>
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
				grid-template-rows: 25vh 25vh 25vh 25vh;
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

				form > input {
				width: 84%;
				height: 8vh;
				border: none;
				margin-bottom: 1.5vh;
				background-color: #59886B;
				color: white;
				}

				.tile_fix {
				position: relative;
				top: 5%;
				left: 90%;
				width: 5%;
				height: 5%;
				z-index: 1;
				display: none;
				}
				.tile_fix_checkbox {
				width: 30px;
				height: 30px;
				}

				#background_color_1 {
				grid-column: 2/3;
				grid-row: 1/2;
				width: 97%;
				height: 90%;
				background-color: #ffc85c;
				z-index: 1;
				}
				#background_color_2 {
				grid-column: 3/4;
				grid-row: 1/2;
				width: 97%;
				height: 90%;
				background-color: #ffc85c;
				z-index: 1;
				}
				#background_color_3 {
				grid-column: 2/3;
				grid-row: 2/3;
				width: 97%;
				height: 90%;
				background-color: #ffc85c;
				z-index: 1;
				}
				#background_color_4 {
				grid-column: 3/4;
				grid-row: 2/3;
				width: 97%;
				height: 90%;
				background-color: #ffc85c;
				z-index: 1;
				}
				#background_color_5 {
				grid-column: 2/3;
				grid-row: 3/4;
				width: 97%;
				height: 90%;
				background-color: #ffc85c;
				z-index: 1;
				}
				#background_color_6 {
				grid-column: 3/4;
				grid-row: 3/4;
				width: 97%;
				height: 90%;
				background-color: #ffc85c;
				z-index: 1;
				}
				#background_color_7 {
				grid-column: 2/3;
				grid-row: 4/5;
				width: 97%;
				height: 90%;
				background-color: #ffc85c;
				z-index: 1;
				}
				#background_color_8 {
				grid-column: 3/4;
				grid-row: 4/5;
				width: 97%;
				height: 90%;
				background-color: #ffc85c;
				z-index: 1;
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
				.Question {
				margin-left: 50px;
				justify-self: start;
				z-index: 5;
				}





				#date_lv1_L {
				grid-column: 2/3;
				grid-row: 1/2;
				}
				#Question_lv1_L {
				grid-column: 2/3;
				grid-row: 1/2;
				}
				#content_lv1_L {
				grid-column: 2/3;
				grid-row: 1/2;
				display: none;
				}
				#date_lv2_L {
				grid-column: 2/3;
				grid-row: 2/3;
				}
				#Question_lv2_L {
				grid-column: 2/3;
				grid-row: 2/3;
				}
				#content_lv2_L {
				grid-column: 2/3;
				grid-row: 2/3;
				display: none;
				}
				#date_lv3_L {
				grid-column: 2/3;
				grid-row: 3/4;
				}
				#Question_lv3_L {
				grid-column: 2/3;
				grid-row: 3/4;
				}
				#content_lv3_L {
				grid-column: 2/3;
				grid-row: 3/4;
				display: none;
				}
				#date_lv4_L {
				grid-column: 2/3;
				grid-row: 4/5;
				}
				#Question_lv4_L {
				grid-column: 2/3;
				grid-row: 4/5;
				}
				#content_lv4_L {
				grid-column: 2/3;
				grid-row: 4/5;
				display: none;
				}

				#date_lv1_R {
				grid-column: 3/4;
				grid-row: 1/2;
				}
				#Question_lv1_R {
				grid-column: 3/4;
				grid-row: 1/2;
				}
				#content_lv1_R {
				grid-column: 3/4;
				grid-row: 1/2;
				display: none;
				}
				#date_lv2_R {
				grid-column: 3/4;
				grid-row: 2/3;
				}
				#Question_lv2_R {
				grid-column: 3/4;
				grid-row: 2/3;
				}
				#content_lv2_R {
				grid-column: 3/4;
				grid-row: 2/3;
				display: none;
				}
				#date_lv3_R {
				grid-column: 3/4;
				grid-row: 3/4;
				}
				#Question_lv3_R {
				grid-column: 3/4;
				grid-row: 3/4;
				}
				#content_lv3_R {
				grid-column: 3/4;
				grid-row: 3/4;
				display: none;
				}
				#date_lv4_R {
				grid-column: 3/4;
				grid-row: 4/5;
				}
				#Question_lv4_R {
				grid-column: 3/4;
				grid-row: 4/5;
				}
				#content_lv4_R {
				grid-column: 3/4;
				grid-row: 4/5;
				display: none;
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
				display:none;
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


			document.getElementById("background_color_1").addEventListener("mouseover", function(){
				document.getElementById("Question_lv1_L").style.display = "none";
				document.getElementById("content_lv1_L").style.display = "block";
				document.getElementById("tile1_fix").style.display = "block";
			});
			document.getElementById("background_color_1").addEventListener("mouseleave", function(){
				if(document.getElementById("tile1_fix_checkbox").checked == false){
					document.getElementById("Question_lv1_L").style.display = "block";
					document.getElementById("content_lv1_L").style.display = "none";
					document.getElementById("tile1_fix").style.display = "none";
				}
			});
			document.getElementById("background_color_2").addEventListener("mouseover", function(){
				document.getElementById("Question_lv1_R").style.display = "none";
				document.getElementById("content_lv1_R").style.display = "block";
				document.getElementById("tile2_fix").style.display = "block";
			});
			document.getElementById("background_color_2").addEventListener("mouseleave", function(){
				if(document.getElementById("tile2_fix_checkbox").checked == false){
					document.getElementById("Question_lv1_R").style.display = "block";
					document.getElementById("content_lv1_R").style.display = "none";
					document.getElementById("tile2_fix").style.display = "none";
				}
			});
			document.getElementById("background_color_3").addEventListener("mouseover", function(){
				document.getElementById("Question_lv2_L").style.display = "none";
				document.getElementById("content_lv2_L").style.display = "block";
				document.getElementById("tile3_fix").style.display = "block";
			});
			document.getElementById("background_color_3").addEventListener("mouseleave", function(){
				if(document.getElementById("tile3_fix_checkbox").checked == false){
					document.getElementById("Question_lv2_L").style.display = "block";
					document.getElementById("content_lv2_L").style.display = "none";
					document.getElementById("tile3_fix").style.display = "none";
				}
			});
			document.getElementById("background_color_4").addEventListener("mouseover", function(){
				document.getElementById("Question_lv2_R").style.display = "none";
				document.getElementById("content_lv2_R").style.display = "block";
				document.getElementById("tile4_fix").style.display = "block";
			});
			document.getElementById("background_color_4").addEventListener("mouseleave", function(){
				if(document.getElementById("tile4_fix_checkbox").checked == false){
					document.getElementById("Question_lv2_R").style.display = "block";
					document.getElementById("content_lv2_R").style.display = "none";
					document.getElementById("tile4_fix").style.display = "none";
				}
			});
			document.getElementById("background_color_5").addEventListener("mouseover", function(){
				document.getElementById("Question_lv3_L").style.display = "none";
				document.getElementById("content_lv3_L").style.display = "block";
				document.getElementById("tile5_fix").style.display = "block";
			});
			document.getElementById("background_color_5").addEventListener("mouseleave", function(){
				if(document.getElementById("tile5_fix_checkbox").checked == false){
					document.getElementById("Question_lv3_L").style.display = "block";
					document.getElementById("content_lv3_L").style.display = "none";
					document.getElementById("tile5_fix").style.display = "none";
				}
			});
			document.getElementById("background_color_6").addEventListener("mouseover", function(){
				document.getElementById("Question_lv3_R").style.display = "none";
				document.getElementById("content_lv3_R").style.display = "block";
				document.getElementById("tile6_fix").style.display = "block";
			});
			document.getElementById("background_color_6").addEventListener("mouseleave", function(){
				if(document.getElementById("tile6_fix_checkbox").checked == false){
					document.getElementById("Question_lv3_R").style.display = "block";
					document.getElementById("content_lv3_R").style.display = "none";
					document.getElementById("tile6_fix").style.display = "none";
				}
			});
			document.getElementById("background_color_7").addEventListener("mouseover", function(){
				document.getElementById("Question_lv4_L").style.display = "none";
				document.getElementById("content_lv4_L").style.display = "block";
				document.getElementById("tile7_fix").style.display = "block";
			});
			document.getElementById("background_color_7").addEventListener("mouseleave", function(){
				if(document.getElementById("tile7_fix_checkbox").checked == false){
					document.getElementById("Question_lv4_L").style.display = "block";
					document.getElementById("content_lv4_L").style.display = "none";
					document.getElementById("tile7_fix").style.display = "none";
				}
			});
			document.getElementById("background_color_8").addEventListener("mouseover", function(){
				document.getElementById("Question_lv4_R").style.display = "none";
				document.getElementById("content_lv4_R").style.display = "block";
				document.getElementById("tile8_fix").style.display = "block";
			});
			document.getElementById("background_color_8").addEventListener("mouseleave", function(){
				if(document.getElementById("tile8_fix_checkbox").checked == false){
					document.getElementById("Question_lv4_R").style.display = "block";
					document.getElementById("content_lv4_R").style.display = "none";
					document.getElementById("tile8_fix").style.display = "none";
				}
			});
			

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
					document.getElementById("prevButton").action = "/diary/daily/${whos}?year=${focused_year}&month=${changed_month_minus}&date=${focused_date-1}"
				else if(${focused_date} == 1)
					document.getElementById("prevButton").action = "/diary/daily/${whos}?year=${focused_year-1}&month=12&date=365"
			};

			document.getElementById("nextButton").onclick = function() {
				if(${focused_date} != 365)
					document.getElementById("nextButton").action = "/diary/daily/${whos}?year=${focused_year}&month=${changed_month_plus}&date=${focused_date+1}"
				else if(${focused_date} == 365)
					document.getElementById("nextButton").action = "/diary/daily?/${whos}year=${focused_year+1}&month=1&date=1"
			};

			document.getElementById("upButton").onclick = function() {
				document.getElementById("upButton").action = "/diary/daily/${whos}?year=${focused_year-1}&month=${focused_month}&date=${focused_date}"
			};
			document.getElementById("downButton").onclick = function() {
				document.getElementById("downButton").action = "/diary/daily/${whos}?year=${focused_year+1}&month=${focused_month}&date=${focused_date}"
			};

			document.getElementById("todayButton").onclick = function() {
				document.getElementById("todayButton").action = "/diary/daily/${whos}?year="+today_year+"&month="+today_month+"&date="+today_date
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
