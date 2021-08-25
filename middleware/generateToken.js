const jwt = require('jsonwebtoken');

const generate_token = (id, nickname, created_date) => {
    const token = jwt.sign(
        {
            id: id,
            nickname: nickname,
			created_date: created_date,
        },
        process.env.JWT_SECREAT,
        {
            expiresIn: '30d',
        }
    )
    return token;
}

module.exports = {
	generate_token,
}
