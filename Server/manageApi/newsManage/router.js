const express = require('express');
const router = express.Router();
const handle = require('./complexInformation/handle.js')
//综合资讯接口
//添加综合资讯
router.post('/addComplexInformation',handle.addComplexInformation)

module.exports = router