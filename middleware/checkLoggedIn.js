const jwt = require('jsonwebtoken');

function get_token(req) {
	let token = req.headers.cookie;
	token = token.split("=")[1];
	return token;
}

function verify_token(token) {
	const answer = jwt.verify(token, process.env.JWT_SECREAT);
	return answer;
}

//remember the difference between jwt.decode() vs jwt.verify(). And why there is jwt.decode()

const check_loggedIn = (req) => {
	const token = get_token(req);
	
	let user_obj = verify_token(token);

	if(user_obj != undefined)
		user_obj = [user_obj, true];
	else
		user_obj = [user_obj, false];

	return user_obj;
}

module.exports = {
	check_loggedIn,
}
