const db = require('../config/db.js').promise();
const jwt = require('jsonwebtoken');
const Joi = require('joi');

const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;

passport.use(new KakaoStrategy({
	clientID: 'a12f484bc5f99c168cbbe33069820a0d',
	callbackURL: 'http://localhost:5000/user/kakao/login/auth'
}, async (accessToken, refreshToken, profile, done) => {
		console.log('카카오 로그인', accessToken, profile);
		return done(null, '성공');
	}
));

const generate_token = (id, nickname, created_date) => {
	const token = jwt.sign(
		{
			id: id,
			nickname: nickname,
			created_date: created_date,
		},
		process.env.JWT_SECRET,
		{
			expiresIn: '30d',
		}
	)
	return token;
}

// 회원 가입
const get_register = (req, res) => {
	res.render('user/register');
}
const post_register = async (req, res) => {
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

	if (req.body.password != req.body.password_check)
		return res.send('"check your password!!"');

	const { email, password, nickname, birthdate, sex, address } = req.body;

	const db_email = await db.query(`SELECT email FROM user WHERE email=?`, [email]);
	if (db_email[0].length > 0) { return res.status(409).send('이미 존재하는 이메일입니다.'); }
	else {
		db.query(`INSERT INTO user (email, pw, nickname, birthdate, sex, address, created_date) VALUES(?,?,?,?,?,?,NOW())`, [email, password, nickname, birthdate, sex, address]);
		res.redirect('/');
	}
}

// 회원 정보 수정
const get_edit = (req, res) => {
	const id = req.params.id;
	res.render('user/edit', { id: id });
}
const post_edit = async (req, res) => {
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

	if (req.body.password != req.body.password_check)
		return res.send('"check your password!!"');

	const { password, nickname, birthdate, sex, address } = req.body;

	//query uder this line dosn't work. i can't use '[ ]' and '?' syntax 
	//const edit_result = await db.query(`UPDATE user SET (pw=?, nickname=?, birthdate=?, sex=?, address=?) VALUES(?,?,?,?,?) WHERE id = '${req.params.id}'`, [password, nickname, birthdate, sex, address]);
	const edit_result = await db.query(`UPDATE user SET pw='${password}', nickname='${nickname}', birthdate='${birthdate}', sex='${sex}', address='${address}' WHERE id='${req.params.id}'`);
	if (edit_result != undefined)
		res.redirect('/');
}

const get_login = (req, res) => {
	res.render('user/login', {});
}

const post_login = async (req, res) => {
	const { email, password } = req.body;
	try {
		const [db_taken] = await db.query(`SELECT id, email, pw, nickname, created_date FROM user WHERE email=?`, [email]);
		// not registered
		if (db_taken.length == 0)
			return res.send("this email isn't registered yet.");
		// password not match
		if (password != db_taken[0].pw)
			return res.send("this password you entered is NOT match with the email.");
		// success login,
		// generate token
		const token = generate_token(db_taken[0].id, db_taken[0].nickname, db_taken[0].created_date);
		// send token as cookie(while there are various methods for different usages)
		res.cookie('access_token', token, {
			maxAge: 1000 * 60 * 60 * 24 * 30, //30days
			httpOnly: true // 브라우저에서 자바스크립트로 쿠키를 조작할 수 없게 설정합니다.
		});

		const obj_ejs = {
			nickname: db_taken[0].nickname,
		}

		return res.render('user/after_login_success', obj_ejs);
	}
	catch (err) {
		console.log(err);
	}
}

// 로그아웃
const post_logout = (req, res) => {
	const sender = `
		<p>"logout success, the token at the client side is deleted."
		</p>

		<form action="/user/login" method="post">
			<input type="text" name="email" value="email">
			<input type="text" name="password" value="password">
			<input type="submit" value="Log in">
		</form>`;

	res.clearCookie('access_token');
	res.send(sender);
}

const post_delete = async (req, res) => { // 계정 삭제
	const delete_result = await db.query(`DELETE FROM user WHERE id='${req.params.id}'`);
	if (delete_result != undefined)
		res.redirect('/');
}

const post_cookie_test = (req, res) => {
	const msg = `Yes, your cookie is generated like you can see at console.log`
	let individualized_text = msg;
	for (var i = 0; i < 1000; i++)
		individualized_text += String(user_obj[0].id);

	res.send(individualized_text);
}


module.exports = {
	get_register,
	post_register,
	get_edit,
	post_edit,

	get_login,
	post_login,

	post_cookie_test,

	post_logout,
	post_delete,
};
