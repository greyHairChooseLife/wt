const express = require('express');
const userCtrl = require('./user.ctrl.js');
const userRouter = express.Router();

userRouter.post('/', userCtrl.create);
userRouter.get('/:id', userCtrl.read);
userRouter.post('/:id', userCtrl.update);
userRouter.delete('/:id', userCtrl.delete);

exports = userRouter;