const express = require('express');
const router = express.Router();
const complexInformation = require('./complexInformation/handle.js')
//综合资讯接口
//添加综合资讯
router.post('/addComplexInformation',complexInformation.addComplexInformation)
//查询综合资讯
router.post('/findComplexInformation',complexInformation.findComplexInformation)

module.exports = router