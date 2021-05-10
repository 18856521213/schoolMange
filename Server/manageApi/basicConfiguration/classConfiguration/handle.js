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
      //班主任姓名
      await teacherManage.find({teacherId:req.body.headTeacherId},(err,data)=>{
        if(!err){
          req.body.headTeacher = data[0].teacherName;
        }
      })
      //语文老师姓名
      await teacherManage.find({teacherId:req.body.chineseId},(err,data)=>{
        if(!err){
          req.body.chineseName = data[0].teacherName;
        }
      })
      //数学老师姓名
      await teacherManage.find({teacherId:req.body.mathId},(err,data)=>{
        if(!err){
          req.body.mathName = data[0].teacherName;
        }
      })
      //英语老师姓名
      await teacherManage.find({teacherId:req.body.englishId},(err,data)=>{
        if(!err){
          req.body.englishName = data[0].teacherName;
        }
      })
      //物理老师姓名
      await teacherManage.find({teacherId:req.body.cphysicalId},(err,data)=>{
        if(!err){
          req.body.cphysicalName = data[0].teacherName;
        }
      })
      //化学老师姓名
      await teacherManage.find({teacherId:req.body.chemistryId},(err,data)=>{
        if(!err){
          req.body.chemistryName = data[0].teacherName;
        }
      })
      //生物老师姓名
      await teacherManage.find({teacherId:req.body.biologicalId},(err,data)=>{
        if(!err){
          req.body.biologicalName = data[0].teacherName;
        }
      })
      //地理老师姓名
      await teacherManage.find({teacherId:req.body.geographyId},(err,data)=>{
        if(!err){
          req.body.geographyName = data[0].teacherName;
        }
      })
      //历史老师姓名
      await teacherManage.find({teacherId:req.body.historyId},(err,data)=>{
        if(!err){
          req.body.historyName = data[0].teacherName;
        }
      })
      //政治老师姓名
      await teacherManage.find({teacherId:req.body.politicalId},(err,data)=>{
        if(!err){
          req.body.politicalName = data[0].teacherName;
        }
      })
      req.body.createTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
      let newClass = new studentClass(req.body);
      newClass.save(err=>{
        console.log(err);
        if(!err){
          response(res,200,true,"添加新班级成功");
        }else{
          response(res,200,false,"添加新班级失败");
        }
      })
    },
    //查找班级
    async findClass(req,res){
      let count = await studentClass.countDocuments({});
      if(count != 0){
        let filter = {
          headTeacherId:{$regex:req.body.express.headTeacherId},
          className:{$regex:req.body.express.className},
        };
        studentClass.find(filter,{__v:0,_id:0},(err,data)=>{
          if(!err){
            response(res,200,true,"查找班级信息成功",count,data);
          }else{
            response(res,200,false,"查找班级信息失败",0,[]);
          }
        }).sort({createTime:-1});
      }else{
        response(res,200,false,"暂无班级信息",0,[]);
      }    
    },
    //查找各个科目的老师
    findSubjectTeacher(req,res){
      teacherManage.find(
        {teacherSubject:req.body.id},
        {teacherId:1,teacherName:1,createTime:1,_id:0},
        (err,data)=>{
          if(!err){
            response(res,200,true,"查找老师信息成功",0,data);
          }else{
            response(res,200,false,"查找老师信息失败",0,[]);
          }
        }
      )
    }
}