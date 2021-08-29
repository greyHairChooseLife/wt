const db = require('../config/db.js');
const Joi = require('joi');

// 회원 가입

const get_register = (req, res) => {
	res.render('user/register');
}
const post_register = (req, res) => {
    const schema = Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        password_check: Joi.string().required(),
        nickname: Joi.string().required(),
        sex: Joi.string().valid('M', 'F').required(),
        address: Joi.string().required(),
        birthdate: Joi.date().required(),
    });
    const result = schema.validate(req.body);
    if (result.error) {
		console.log(result.error);
        res.status(400);
        res.send(result.error.details[0].message);
        return;
    }

	if(req.body.password != req.body.password_check)
		return res.send('"check your password!!"');

    const { email, password, nickname, birthdate, sex, address } = req.body;

    db.query(`SELECT email FROM user WHERE email = ?`, [email], (err, db_email) => {
        if (err) { return res.status(500).send('email broke!'.err); }
        if (db_email[0]) {
            return res.status(409).send('이미 존재하는 이메일입니다.');
        }
		db.query(`INSERT INTO user (email, pw, nickname, birthdate, sex, address, created_date) VALUES(?,?,?,?,?,?,NOW())`, [email, password, nickname, birthdate, sex, address], (err) => {
			if (err) return res.status(500).send('insert broke!'.err);
			res.redirect('/');
		});
    });
}

// 회원 정보 수정 구현
const get_edit = (req, res) => {
	const id = req.params.id;
	res.render('user/edit', {id: id});
}
const post_edit = (req, res) => {
    const schema = Joi.object().keys({
        password: Joi.string().required(),
        password_check: Joi.string().required(),
        nickname: Joi.string().required(),
        sex: Joi.string().valid('M', 'F').required(),
        address: Joi.string().required(),
        birthdate: Joi.date().required(),
    });
    const result = schema.validate(req.body);
    if (result.error) {
		console.log(result.error);
        res.status(400);
        res.send(result.error.details[0].message);
        return;
    }

	if(req.body.password != req.body.password_check)
		return res.send('"check your password!!"');

    const { password, nickname, birthdate, sex, address } = req.body;

	db.query(`UPDATE user SET pw='${password}', nickname='${nickname}', birthdate='${birthdate}', sex='${sex}', address='${address}' WHERE id='${req.params.id}'`, (err) => {

	//query uder this line dosn't work. i can't use '[ ]' and '?' syntax 
	//db.query(`UPDATE user SET (pw, nickname, birthdate, sex, address) VALUES(?,?,?,?,?) WHERE id = '${req.params.id}'`, [password, nickname, birthdate, sex, address], (err) => {
		if (err) return res.status(500).send('insert broke!'.err);
		res.redirect('/');
	});
}

const get_login = (req, res) => {
	res.render('user/login', {});
}
const post_login = (req, res) => { // 로그인, 세션에 로그인 정보를 저장
    // todo
    // 1. email, password 값 존재 확인
    // 2. DB에 계정이 존재하는 검사
    // 3. 계정이 존재한다면 password와 함께 다시 검색
    // 4. 로그인 완료 토큰 발급
    // 5. / 로 리다이렉션

	const { email, password } = req.body;

	try{
		db.getConnection((err, connection) => {
			
			var data = connection.query(`SELECT email, pw FROM user WHERE email=?`, [email], (err, result)=>{
			});
		
			console.log(connection);
			connection.release();


		});


		//var [[db_taken]] = await db.query(`SELECT email, pw FROM user WHERE email=?`, [email]);
	}
	catch(err){
		console.log(err);
	}
	//console.log("db_em: ", db_taken[Object.keys(db_taken)[0]]);
	//console.log("db_pw: ", db_taken[Object.keys(db_taken)[1]]);
}

const post_logout = (req, res) => { // 로그아웃, 세션 파괴
    // todo
    // 1. email, password 값 존재 확인
    // 2. / 로 리다이렉션
    console.log('logout user');
    console.log(req);
    res.send('logout');
}

const post_delete = (req, res) => { // 계정 삭제
	db.query(`DELETE FROM user WHERE id='${req.params.id}'`)
    res.redirect('/');
}

module.exports = {
	get_register,
	post_register,
	get_edit,
	post_edit,

	get_login,
	post_login,

	post_logout,
	post_delete,
};
