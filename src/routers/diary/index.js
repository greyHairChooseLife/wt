const express = require('express');
const diaryCtrl = require('./diary.ctrl');
const diaryRouter = express.Router();

diaryRouter.post('/create', diaryCtrl.create);
diaryRouter.get('/list', diaryCtrl.list);
diaryRouter.get('/read/:id', diaryCtrl.read);
diaryRouter.post('/update/:id', diaryCtrl.update);
diaryRouter.delete('/delete/:id', diaryCtrl.delete);

module.exports = diaryRouter;