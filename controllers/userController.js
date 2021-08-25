const db = require('../config/db.js').promise();
const Joi = require('joi');

//middleware
const checkLoggedIn = require('../middleware/checkLoggedIn.js');
const generateToken = require('../middleware/generateToken.js');


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

// 회원 정보 수정
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
const post_login = async (req, res) => {
    // todo 
    // 1. email, password 값 존재 확인 clear
    // 2. DB에 계정이 존재하는 검사 clear
    // 3. 계정이 존재한다면 password와 함께 다시 검색clear
    // 4. 로그인 완료 토큰 발급 clear
    // 5. / 로 리다이렉션

	const { email, password } = req.body;

	try{
		const [db_taken] = await db.query(`SELECT id, email, pw, nickname, created_date FROM user WHERE email=?`, [email]);
		// not registered
		if(db_taken.length == 0)
			return res.send("this email isn't registered yet.");
		// password not match
		if(password != db_taken[0].pw)
			return res.send("this password you entered is NOT match with the email.");
		// success login,
		// generate token
		const token = generateToken.generate_token(db_taken[0].id, db_taken[0].nickname, db_taken[0].created_date);
		// send token as cookie(while there are various methods for different usages)
		res.cookie('login_access_token', token, {
			maxAge: 1000 * 60 * 60 * 24 * 30, //30days
			httpOnly: true
		});

		const temp_logoutButton = `
		<p>success login, this will expired in 30days!!
		</p>
		
		<form action="/user/cookie_test" method="post">
			<input type="submit" value="cookie_test">
		</form>
		<br>

		<form action="/user/logout" method="post">
			<input type="submit" value="logout test">
		</form>`;

		return res.send(temp_logoutButton);
	}
	catch(err){
		console.log(err);
	}
}

const post_cookie_test = (req, res) => {
	const user_obj = checkLoggedIn.check_loggedIn(req);
	console.log(user_obj);

	res.send('good');
}

// 로그아웃
const post_logout = (req, res) => {
	if(checkLoggedIn.check_loggedIn(req)[1] == true){
		const sender = `
		<p>"logout success, the token at the client side is deleted."
		</p>

		<form action="/user/login" method="post">
			<input type="text" name="email" value="email">
			<input type="text" name="password" value="password">
			<input type="submit" value="Log in">
		</form>`;

		res.clearCookie('login_access_token');
		res.send(sender);
	}
	else{
		res.send("you are not looged in.");
	}
}


//const post_delete = (req, res) => { // 계정 삭제
//	db.query(`DELETE FROM user WHERE id='${req.params.id}'`)
//    res.redirect('/');
//}

module.exports = {
	get_register,
	post_register,
	get_edit,
	post_edit,

	get_login,
	post_login,

	post_cookie_test,

	post_logout,
	//post_delete,
};
