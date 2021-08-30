const express = require('express');
const userController = require('..//controllers/userController.js');
const userRouter = express.Router();

userRouter.get('/register', userController.get_register);
userRouter.post('/register', userController.post_register);

userRouter.get('/edit/:id', userController.get_edit);
userRouter.post('/edit/:id', userController.post_edit);

userRouter.get('/login', userController.get_login);
userRouter.post('/login', userController.post_login);

userRouter.post('/logout', userController.post_logout);
userRouter.post('/delete/:id', userController.post_delete);

userRouter.post('/cookie_test', userController.post_cookie_test);

module.exports = userRouter;
