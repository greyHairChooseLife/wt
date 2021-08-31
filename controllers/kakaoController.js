const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;
const db = require('../config/db.js');

passport.use(new KakaoStrategy({
	clientID: 'a12f484bc5f99c168cbbe33069820a0d',
	callbackURL: 'http://localhost:5000/user/kakao/login/callback'
}, async (accessToken, refreshToken, profile, done) => {
        console.log('카카오 로그인', accessToken, profile);
        try {
            // todo
            // 1. 카카오 id로 해당 사용자가 존재하는지 확인
            // 2. 없다면 가입진행
            // 3. 있다면 로그인 진행
            db.query('SELECT * FROM user')
        } catch (error) {
            done(err);
        }
	}
));

const loginPage = passport.authenticate('kakao');

const callback = passport.authenticate('kakao', {
    session: false,
    failureRedirect: '/user/login',
})

const loginSuccess = (_, res) => {
    console.log('kakao loginSuccess')
    res.redirect('/');
}

module.exports = {
    loginPage,
    callback,
    loginSuccess
}