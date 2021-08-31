const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;
const db = require('../config/db.js').promise();

const jwt = require('jsonwebtoken');

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

passport.use(new KakaoStrategy({
    clientID: 'a12f484bc5f99c168cbbe33069820a0d',
    callbackURL: 'http://localhost:5000/user/kakao/login/callback'
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const user = await db.query("SELECT * FROM user WHERE provider = ?  AND sns_id = ?", [profile.provider, profile.id]);
        if (user[0].length > 0) {
            done(null, user[0]);
        } else {
            console.log('카카오로 회원가입 진행');
            const profileArr = [
                profile.email || '',
                profile.pw || '',
                profile.displayName || '',
                profile.birthdate || '0000-00-00',
                profile.sex || '',
                profile.address || '',
                profile.provider,
                profile.id,
            ]
            await db.query("INSERT INTO user (email, pw, nickname, birthdate, sex, address, provider, sns_id, created_date) VALUES(?,?,?,?,?,?,?,?,NOW())",
                profileArr);

            const user = await db.query("SELECT * FROM user WHERE provider = ?  AND sns_id = ?", [profile.provider, profile.id]);
            done(null, user[0])
        }
    } catch (err) {
        console.log(err)
        done(err);
    }
}
));

const loginPage = passport.authenticate('kakao');

const callback = passport.authenticate('kakao', {
    session: false,
    failureRedirect: '/user/login',
})

const loginSuccess = (req, res) => {
    const {id, nickname, created_date} = req.user[0];
    const token = generate_token(id, nickname, created_date);
    res.cookie('access_token', token, {
        maxAge: 1000 * 60 * 60 * 24 * 30, //30days
        httpOnly: true // 브라우저에서 자바스크립트로 쿠키를 조작할 수 없게 설정합니다.
    });
    console.log('kakao loginSuccess');
    res.redirect('/');
}

module.exports = {
    loginPage,
    callback,
    loginSuccess
}