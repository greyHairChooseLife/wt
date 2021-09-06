const jwt = require('jsonwebtoken');

const jwtMiddleware = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) return next();
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.locals.user = {
            id: decoded.id,
            nickname: decoded.nickname,
			created_date: decoded.created_date,
        }
        res.locals.loggedIn = true;
        
        return next();
    } catch (e) {
        return next();
    }
}

module.exports = jwtMiddleware;