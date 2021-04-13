const express = require('express');
const router = express.Router();
const upload = require('./handle.js');
const formidable  = require('express-formidable');
router.use(formidable({
        encoding: 'utf-8',//编码
        uploadDir:__dirname.replace(/\\manageApi\\upload/,"\\upload"),//存储的文件地址
        multiples: true, //转为二维数组
        keepExtensions:true,//保留文件后缀名
    })
);
//上传轮播图
router.post("/uploadSwiperImage",upload.uploadSwiperImage);

module.exports = router
