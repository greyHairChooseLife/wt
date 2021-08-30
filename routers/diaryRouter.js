const express = require('express');
const diaryController = require('..//controllers/diaryController.js');
const diaryRouter = express.Router();
const checkLoggedIn = require('../middleware/checkLoggedIn.js');

diaryRouter.post('/gen/:id', diaryController.dummy);

diaryRouter.post('/daily/:id', checkLoggedIn, diaryController.daily);
diaryRouter.post('/monthly_mode_A/:id', checkLoggedIn, diaryController.monthly_mode_A);
diaryRouter.post('/monthly_mode_B/:id', checkLoggedIn, diaryController.monthly_mode_B);
//diaryRouter.post('/annualy/:id', diaryController.annualy);
//diaryRouter.delete('/delete/:id', diaryCtrl.delete);

module.exports = diaryRouter;
