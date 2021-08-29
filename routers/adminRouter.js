const express = require('express');
const adminRouter = express.Router();
const adminCtrl = require('..//controllers/adminController.js');

//adminRouter.get('/list', adminCtrl.list);
//adminRouter.get('/read/:user_id', adminCtrl.read);
//adminRouter.post('/update/:user_id', adminCtrl.update);
//adminRouter.delete('/delete/:user_id', adminCtrl.delete);

module.exports = adminRouter;
