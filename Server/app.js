const express = require('express');
const app = express();
const bodyParser = require('body-parser')
// 跨域
app.use(require('cors')())
// 处理 post 请求的数据
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//引入管理后台的路由
const newsManage = require('./manageApi/newsManage/router.js');

//引入后台管理接口
app.use('/newsManage',newsManage);

const PORT = 3001;
app.listen(PORT,()=>{
    console.log(`RUN IN: http://localhost:${PORT}`)
});