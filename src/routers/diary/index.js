const express = require('express');
const diaryCtrl = require('./diary.ctrl');
const diaryRouter = express.Router();

diaryRouter.post('/', diaryCtrl.create);
diaryRouter.get('/:id', diaryCtrl.read);
diaryRouter.post('/:id', diaryCtrl.update);
diaryRouter.delete('/:id', diaryCtrl.delete);

module.exports = diaryRouter;