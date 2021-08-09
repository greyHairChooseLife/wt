const express = require('express');
const userCtrl = require('./user.ctrl.js');
const userRouter = express.Router();

// todo
// 1. 회원가입
// 2. 로그인 
// 3. 로그아웃
// 4. 회원 정보 수정
// 5. 회원탈퇴

// 로그인 체크는 미들웨어로 구현해야함

userRouter.post('/register', userCtrl.register);
userRouter.post('/login', userCtrl.login);
userRouter.post('/logout', userCtrl.logout);
userRouter.post('/edit', userCtrl.edit);
userRouter.post('/delete', userCtrl.delete);

module.exports = userRouter;