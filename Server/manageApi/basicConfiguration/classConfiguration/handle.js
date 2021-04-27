const studentClass = require('../../../models/basicConfiguration/classConfiguration.js')
const teacherManage = require('../../../models/peopleManage/teacherManage.js')
const { response } = require("../../../utils/response.js");
const path = require("path");
const fs = require("fs")
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
    }
}