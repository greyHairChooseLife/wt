const express = require('express');
const diaryCtrl = require('./diary.ctrl.js');
const diaryRouter = express.Router();

diaryRouter.post('/daily/:id', diaryCtrl.daily);
diaryRouter.post('/monthly_mode_A/:id', diaryCtrl.monthly_mode_A);
diaryRouter.post('/monthly_mode_B/:id', diaryCtrl.monthly_mode_B);
diaryRouter.post('/annualy/:id', diaryCtrl.annualy);
diaryRouter.delete('/delete/:id', diaryCtrl.delete);

module.exports = diaryRouter;
