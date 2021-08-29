require('dotenv').config();
const { PORT } = process.env; // .env로 정보 유출을 방지 , env는 gitignore에 등록되어있습니다.

//FRAMEWORK 
const express = require('express');

//MODULE

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('./public'));

const adminRouter = require('./routers/adminRouter.js');
const homeRouter = require('./routers/homeRouter.js');
const userRouter = require('./routers/userRouter.js');
const diaryRouter = require('./routers/diaryRouter.js');

app.use('/', homeRouter);
app.use('/user', userRouter);
app.use('/diary', diaryRouter);

app.use('/admin', adminRouter);


const port = PORT || 3000; // PORT 값이 없다면 3000을 사용합니다.
app.listen(port,()=>{console.log('Listening to port %d', port)});
