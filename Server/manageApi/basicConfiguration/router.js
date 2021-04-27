const express = require('express');
const router = express.Router();
const swiper = require('./swiperConfiguration/handle.js')
const tabar = require('./tabarConfiguration/handle.js')
const studentClass = require('./classConfiguration/handle.js')
//轮播图接口
//查找轮播图
router.post('/findSwiperImage',swiper.findSwiperImage);
//删除轮播图
router.post('/deleteSwiperImage',swiper.deleteSwiperImage);

//导航栏接口
router.post('/findTabarImage',tabar.findTabarImage);
router.post('/deleteTabarImage',tabar.deleteTabarImage);

//班级接口
router.post('/findHandStudent',studentClass.findHandStudent);

module.exports = router

