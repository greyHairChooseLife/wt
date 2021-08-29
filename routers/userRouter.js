const express = require('express');
const userController = require('..//controllers/userController.js');
const userRouter = express.Router();

// todo
// 1. 회원가입
// 2. 로그인 
// 3. 로그아웃
// 4. 회원 정보 수정
// 5. 회원탈퇴

// 로그인 체크는 미들웨어로 구현해야함

userRouter.get('/register', userController.get_register);
userRouter.post('/register', userController.post_register);
userRouter.get('/edit/:id', userController.get_edit);
userRouter.post('/edit/:id', userController.post_edit);

userRouter.get('/login', userController.get_login);
userRouter.post('/login', userController.post_login);

userRouter.post('/logout', userController.post_logout);
userRouter.post('/delete/:id', userController.post_delete);

//////// cookie test
//////// cookie test
//////// cookie test
//////// cookie test
//////// cookie test
//////// cookie test
userRouter.post('/cookie_test', userController.post_cookie_test);

module.exports = userRouter;
