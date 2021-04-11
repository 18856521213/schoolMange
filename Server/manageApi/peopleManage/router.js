const express = require('express');
const router = express.Router();
const teacher = require('./teacherManage/handle.js')
//教师管理接口
//添加教师
router.post('/addTeacher',teacher.addTeacher);

module.exports = router