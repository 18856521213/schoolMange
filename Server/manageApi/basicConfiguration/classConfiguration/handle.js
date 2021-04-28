const studentClass = require('../../../models/basicConfiguration/classConfiguration.js')
const teacherManage = require('../../../models/peopleManage/teacherManage.js')
const { response } = require("../../../utils/response.js");
const path = require("path");
const fs = require("fs")
const dayjs = require('dayjs');
module.exports = {
    //班主任下拉选框数据值
    findHandStudent(req,res){
        teacherManage.find(
            {teacherLevel:1,teacherStatus:0},
            {teacherId:1,teacherName:1,createTime:1,_id:0},
            (err,data)=>{
            if(!err){
                response(res,200,true,"查找教师信息成功",0,data);
              }else{
                response(res,200,false,"查找教师信息失败",0,data);
              }
        })
    },
    //添加班级
   async addNewClass(req,res){
      //获取最新一条的教师编号
    let classId;
    await studentClass.find((err,data)=>{
        if(!err){
          if(data.length != 0){
            classId = Number(data[0].classId)+1
          }else{
            classId = 1
          }
        }
      }).sort({createTime:-1}).skip(0).limit(1)
      //开始对新增的数据做默认时间，和教师编号新增
      req.body.classId = classId;
      await teacherManage.find({teacherId:req.body.headTeacherId},(err,data)=>{
        if(!err){
          req.body.headTeacher = data[0].teacherName;
        }
      })
      req.body.createTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
      let newClass = new studentClass(req.body);
      newClass.save(err=>{
        if(!err){
          response(res,200,true,"添加新班级成功");
        }else{
          response(res,200,false,"添加新班级失败");
        }
      })
    }
}