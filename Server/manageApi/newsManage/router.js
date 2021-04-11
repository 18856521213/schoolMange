const express = require('express');
const router = express.Router();
const complexInformation = require('./complexInformation/handle.js')
const schoolInformation = require('./schoolInformation/handle.js')
//综合资讯接口
//添加综合资讯
router.post('/addComplexInformation',complexInformation.addComplexInformation);
//查询综合资讯
router.post('/findComplexInformation',complexInformation.findComplexInformation);

//校园资讯接口
//添加校园资讯
router.post('/addSchoolInformation',schoolInformation.addSchoolInformation);
module.exports = router