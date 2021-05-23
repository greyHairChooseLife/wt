const db = require('./db.js');
const templateD = require('./templateD.js');
const templateW = require('./templateW.js');
const templateM = require('./templateM.js');
const templateA = require('./templateA.js');
const templateL = require('./templateL.js');
const templatePicS = require('./templatePicS.js');
const tools = require('./tools.js');
const date_ob = new Date();
//31,29,31,30,31,30,31,31,30,31,30,31

exports.daily = function(req, res){
	var uuid = req.body.uuid;
	var focus_year = Number(req.query.id);
	var focus_date = Number(req.query.date);
	db.query(`SELECT * FROM clients`, function(err, clients){
		db.query(`SELECT * FROM test_daily_diary WHERE uuid=?`, [uuid], function(err, daily_diary){
			db.query(`SELECT test_date from test_daily_diary WHERE uuid=?`, [uuid], function(err, date_info){
				db.query(`SELECT content from test_daily_diary WHERE uuid=? AND year=?`, [uuid, focus_year-2], function(err, content_info_lv1){
				db.query(`SELECT content from test_daily_diary WHERE uuid=? AND year=?`, [uuid, focus_year-1], function(err, content_info_lv2){
				db.query(`SELECT content from test_daily_diary WHERE uuid=? AND year=?`, [uuid, focus_year-0], function(err, content_info_lv3){
				db.query(`SELECT content from test_daily_diary WHERE uuid=? AND year=?`, [uuid, focus_year+1], function(err, content_info_lv4){

					db.query(`SELECT d_index from test_daily_diary WHERE uuid=? AND year=?`, [uuid, focus_year-2], function(err, d_index_lv1){
					db.query(`SELECT d_index from test_daily_diary WHERE uuid=? AND year=?`, [uuid, focus_year-1], function(err, d_index_lv2){
					db.query(`SELECT d_index from test_daily_diary WHERE uuid=? AND year=?`, [uuid, focus_year-0], function(err, d_index_lv3){
					db.query(`SELECT d_index from test_daily_diary WHERE uuid=? AND year=?`, [uuid, focus_year+1], function(err, d_index_lv4){
						var title = req.params.id;
						var contentlv1 = ``;
						var i;
						for (i=1; i<=364; i+=3){
							contentlv1 += `
								<div class="lv1date1" id="d${i}_lv1">${focus_year-2}년 ${tools.decode_d_index_M(d_index_lv1[i-1].d_index)}월 ${tools.decode_d_index_D(d_index_lv1[i-1].d_index)}일</div>
								<div class="lv1content1" id="d${i}_c_lv1"><br><br>${content_info_lv1[i-1].content}</div>

								<div class="lv1date2" id="d${i+1}_lv1">${focus_year-2}년 ${tools.decode_d_index_M(d_index_lv1[i+1-1].d_index)}월 ${tools.decode_d_index_D(d_index_lv1[i+1-1].d_index)}일</div>
								<div class="lv1content2" id="d${i+1}_c_lv1"><br><br>${content_info_lv1[i+1-1].content}</div>

								<div class="lv1date3" id="d${i+2}_lv1">${focus_year-2}년 ${tools.decode_d_index_M(d_index_lv1[i+2-1].d_index)}월 ${tools.decode_d_index_D(d_index_lv1[i+2-1].d_index)}일</div>
								<div class="lv1content3" id="d${i+2}_c_lv1"><br><br>${content_info_lv1[i+2-1].content}</div>
								`;
						}
						var contentlv2 = ``;
						var i;
						for (i=1; i<=364; i+=3){
							contentlv1 += `
								<div class="lv2date1" id="d${i}_lv2">${focus_year-1}년 ${tools.decode_d_index_M(d_index_lv2[i-1].d_index)}월 ${tools.decode_d_index_D(d_index_lv2[i-1].d_index)}일</div>
								<div class="lv2content1" id="d${i}_c_lv2"><br><br>${content_info_lv2[i-1].content}</div>

								<div class="lv2date2" id="d${i+1}_lv2">${focus_year-1}년 ${tools.decode_d_index_M(d_index_lv2[i+1-1].d_index)}월 ${tools.decode_d_index_D(d_index_lv2[i+1-1].d_index)}일</div>
								<div class="lv2content2" id="d${i+1}_c_lv2"><br><br>${content_info_lv2[i+1-1].content}</div>

								<div class="lv2date3" id="d${i+2}_lv2">${focus_year-1}년 ${tools.decode_d_index_M(d_index_lv2[i+2-1].d_index)}월 ${tools.decode_d_index_D(d_index_lv2[i+2-1].d_index)}일</div>
								<div class="lv2content3" id="d${i+2}_c_lv2"><br><br>${content_info_lv2[i+2-1].content}</div>
								`;
						}
						var contentlv3 = ``;
						var i;
						for (i=1; i<=364; i+=3){
							contentlv3 += `
								<div class="lv3date1" id="d${i}_lv3">${focus_year-0}년 ${tools.decode_d_index_M(d_index_lv3[i-1].d_index)}월 ${tools.decode_d_index_D(d_index_lv3[i-1].d_index)}일</div>
								<div class="lv3content1" id="d${i}_c_lv3"><br><br>${content_info_lv3[i-1].content}</div>

								<div class="lv3date2" id="d${i+1}_lv3">${focus_year-0}년 ${tools.decode_d_index_M(d_index_lv3[i+1-1].d_index)}월 ${tools.decode_d_index_D(d_index_lv3[i+1-1].d_index)}일</div>
								<div class="lv3content2" id="d${i+1}_c_lv3"><br><br>${content_info_lv3[i+1-1].content}</div>

								<div class="lv3date3" id="d${i+2}_lv3">${focus_year-0}년 ${tools.decode_d_index_M(d_index_lv3[i+2-1].d_index)}월 ${tools.decode_d_index_D(d_index_lv3[i+2-1].d_index)}일</div>
								<div class="lv3content3" id="d${i+2}_c_lv3"><br><br>${content_info_lv3[i+2-1].content}</div>
								`;
						}
						var contentlv4 = ``;
						var i;
						for (i=1; i<=364; i+=3){
							contentlv4 += `
								<div class="lv4date1" id="d${i}_lv4">${focus_year+1}년 ${tools.decode_d_index_M(d_index_lv4[i-1].d_index)}월 ${tools.decode_d_index_D(d_index_lv4[i-1].d_index)}일</div>
								<div class="lv4content1" id="d${i}_c_lv4"><br><br>${content_info_lv4[i-1].content}</div>

								<div class="lv4date2" id="d${i+1}_lv4">${focus_year+1}년 ${tools.decode_d_index_M(d_index_lv4[i+1-1].d_index)}월 ${tools.decode_d_index_D(d_index_lv4[i+1-1].d_index)}일</div>
								<div class="lv4content2" id="d${i+1}_c_lv4"><br><br>${content_info_lv4[i+1-1].content}</div>

								<div class="lv4date3" id="d${i+2}_lv4">${focus_year+1}년 ${tools.decode_d_index_M(d_index_lv4[i+2-1].d_index)}월 ${tools.decode_d_index_D(d_index_lv4[i+2-1].d_index)}일</div>
								<div class="lv4content3" id="d${i+2}_c_lv4"><br><br>${content_info_lv4[i+2-1].content}</div>
								`;
						}
						var html = templateD.daily_template(title, contentlv1, contentlv2, contentlv3, contentlv4, uuid, focus_year, focus_date); 
						res.send(html);
					});
					});
					});
					});
				});
				});
				});
				});
			});
		});
	});
}

exports.weekly = function(req, res){
	var uuid = req.body.uuid;
	db.query(`SELECT * FROM clients`, function(err, clients){
		db.query(`SELECT * FROM test_weekly_diary WHERE uuid=?`, [uuid], function(err, weekly_diary){
			db.query(`SELECT test_date from test_weekly_diary WHERE uuid=?`, [uuid], function(err, date_info){
				db.query(`SELECT content from test_weekly_diary WHERE uuid=?`, [uuid], function(err, content_info){
					var title = req.params.id;
					var i;
					var content1 = ``;
					for (i=1; i<=48; i += 1){
						content1 += `
								<div class="lv1date" id="w${i}">${date_info[i-1].test_date}</div>
								<div class="lv1content" id="w${i}_c"><br><br>${content_info[i-1].content}</div>
							`;
					}

					var content2 = ``;
					for (i=49; i<=96; i += 1){
						content2 += `
								<div class="lv2date" id="w${i}">${date_info[i-1].test_date}</div>
								<div class="lv2content" id="w${i}_c"><br><br>${content_info[i-1].content}</div>
							`;
					}

					var content3 = ``;
					for (i=97; i<=144; i += 1){
						content3 += `
								<div  class="lv3date" id="w${i}">${date_info[i-1].test_date}</div>
								<div class="lv3content" id="w${i}_c"><br><br>${content_info[i-1].content}</div>
							`;
					}

					var content4 = ``;
					for (i=145; i<=192; i += 1){
						content4 += `
								<div class="lv4date" id="w${i}">${date_info[i-1].test_date}</div>
								<div class="lv4content" id="w${i}_c"><br><br>${content_info[i-1].content}</div>
							`;
					}

					var html = templateW.weekly_template(title, content1, content2, content3, content4, uuid); 
					res.send(html);
				});
			});
		});
	});
}

exports.monthly = function(req, res){
	var uuid = req.body.uuid;
	db.query(`SELECT * FROM clients`, function(err, clients){
		db.query(`SELECT * FROM monthly_diary WHERE uuid=?`, [uuid], function(err, monthly_diary){
			db.query(`SELECT test_date from test_monthly_diary WHERE uuid=?`, [uuid], function(err, date_info){
				db.query(`SELECT content from test_monthly_diary WHERE uuid=?`, [uuid], function(err, content_info){
					var title = req.params.id;
					var i;

					var content1 = ``;
					for (i=1; i <= 12; i++){
					content1 += `
							<div class="lv1date" id="m${i}">${date_info[i-1].test_date}</div>
							<div class="lv1content" id="m${i}_c">${content_info[i-1].content}</div>
							`;
					}

					var content2 = ``;
					for (i=13; i <= 24; i++){
					content2 += `
							<div class="lv2date" id="m${i}">${date_info[i-1].test_date}</div>
							<div class="lv2content" id="m${i}_c">${content_info[i-1].content}</div>
							`;
					}

					var content3 = ``;
					for (i=25; i <= 36; i++){
					content3 += `
							<div class="lv3date" id="m${i}">${date_info[i-1].test_date}</div>
							<div class="lv3content" id="m${i}_c">${content_info[i-1].content}</div>
							`;
					}

					var content4 = ``;
					for (i=37; i <= 48; i++){
					content4 += `
							<div class="lv4date" id="m${i}">${date_info[i-1].test_date}</div>
							<div class="lv4content" id="m${i}_c">${content_info[i-1].content}</div>
							`;
					}

					var html = templateM.monthly_template(title, content1, content2, content3, content4, uuid); 
					res.send(html);
				});
			});
		});
	});
}



/*
exports.annualy = function(req, res){
	var uuid = req.body.uuid;
	db.query(`SELECT * FROM clients`, function(err, clients){
		db.query(`SELECT * FROM test_annualy_diary WHERE uuid=?`, [uuid], function(err, annualy_diary){
			db.query(`SELECT test_date from test_annualy_diary WHERE uuid=?`, [uuid], function(err, date_info){
				db.query(`SELECT content from test_annualy_diary WHERE uuid=?`, [uuid], function(err, content_info){
					var title = req.params.id;
					var i;

					// annaul diary의 경우 고유 index를 user의 '나이'로 잡으면 쉽게 고유값이 된다. 차후 반영하자.
					var content1 = ``;
					for (i=0; i<=9; i += 1){
						content1 += `
								<div class="lv1date" id="a${i}">${date_info[i-1].test_date}</div>
								<div class="lv1content" id="a${i}_c"><br><br>${content_info[i-1].content}</div>
							`;
					}
					//0~9세 아이의 일기를 생각해보다 떠오른 아이디어인데, 한 7살까지 엄마가 일기를 대신 써 주고 이후부터 자식이 이어쓸 수 있도록 '선물' 개념으로 이어주는것도 하나의 문화컨텐츠로 판매할 수 있을 것 같다.

					var content2 = ``;
					for (i=10; i<=19; i += 1){
						content2 += `
								<div class="lv2date" id="a${i}">${date_info[i-1].test_date}</div>
								<div class="lv2content" id="a${i}_c"><br><br>${content_info[i-1].content}</div>
							`;
					}

					var content3 = ``;
					for (i=20; i<=29; i += 1){
						content3 += `
								<div  class="lv3date" id="w${i}">${date_info[i-1].test_date}</div>
								<div class="lv3content" id="w${i}_c"><br><br>${content_info[i-1].content}</div>
							`;
					}

					var content4 = ``;
					for (i=30; i<=39; i += 1){
						content4 += `
								<div class="lv4date" id="w${i}">${date_info[i-1].test_date}</div>
								<div class="lv4content" id="w${i}_c"><br><br>${content_info[i-1].content}</div>
							`;
					}

					var html = templateW.weekly_template(title, content1, content2, content3, content4, uuid); 
					res.send(html);
				});
			});
		});
	});
}
*/




exports.lifelong = function(req, res){
}

exports.picture_story= function(req, res){
}
