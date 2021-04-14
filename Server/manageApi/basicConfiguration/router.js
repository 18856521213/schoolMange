const express = require('express');
const router = express.Router();
const swiper = require('./swiperConfiguration/handle.js')
//轮播图接口
//查找轮播图
router.post('/findSwiperImage',swiper.findSwiperImage);
//删除轮播图
router.post('/deleteSwiperImage',swiper.deleteSwiperImage);

module.exports = router

