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
const peopleManage = require('./manageApi/peopleManage/router.js');
const basicConfiguration = require('./manageApi/basicConfiguration/router.js');
const upload = require('./manageApi/upload/router.js');

//引入后台管理接口
app.use('/newsManage',newsManage);
app.use('/peopleManage',peopleManage);
app.use('/basicConfiguration',basicConfiguration);
app.use('/upload',upload);
app.use(express.static('upload'));
const PORT = 3001;
// app.listen(PORT,()=>{
//     console.log(`RUN IN: http://localhost:${PORT}`)
// });
const server = app.listen(PORT, 'localhost', function () {
    const host = server.address().address
    const port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})