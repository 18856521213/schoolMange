const express = require('express');
const router = express.Router();
const teacher = require('./teacherManage/handle.js')
//教师管理接口
//添加教师
router.post('/addTeacher',teacher.addTeacher);
//查找教师
router.post('/findTeacher',teacher.findTeacher);
//删除教师
router.post('/deleteTeacher',teacher.deleteTeacher);
//更新教师信息
router.post('/updateTeacher',teacher.updateTeacher);
module.exports = router