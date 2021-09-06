const jwt = require('jsonwebtoken');

const checkLoggedIn = (req, res, next) => {
	if(!res.locals.user){
		res.status = 401;
		res.send = '로그인이 필요합니다.';
		return;
	}
	return next();
}

module.exports = checkLoggedIn;
