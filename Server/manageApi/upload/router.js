const express = require('express');
const router = express.Router();
const upload = require('./handle.js');
const path = require('path');
const formidable  = require('express-formidable');
router.use(formidable({
        encoding: 'utf-8',//编码
        uploadDir:path.join(__dirname,"../../upload/image"),//存储的文件地址
        multiples: true, //转为二维数组
        keepExtensions:true,//保留文件后缀名
    })
);
//上传轮播图
router.post("/uploadSwiperImage",upload.uploadSwiperImage);
//查找轮播图
router.post("/findSwiperImage",upload.findSwiperImage);
//删除图片
router.post("/deleteSwiperImage",upload.deleteSwiperImage);

module.exports = router
