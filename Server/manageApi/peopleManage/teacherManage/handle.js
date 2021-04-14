const teacherManage = require('../../../models/peopleManage/teacherManage.js')
const { response } = require("../../../utils/response.js");
module.exports = {
  //添加老师
 async addTeacher(req,res){
    //获取最新一条的教师编号
    let teacherId;
   await teacherManage.find((err,data)=>{
      if(!err){
        if(data.length != 0){
          teacherId = Number(data[0].teacherId)+1
        }
      }
    }).sort({createTime:-1}).skip(0).limit(1)
    //开始对新增的数据做默认时间，和教师编号新增
    req.body.teacherId = teacherId;
    let addTeacher = new teacherManage(req.body);
    addTeacher.save((err)=>{
      if(!err){
        response(res,200,true,"添加教师信息成功");
      }else{
        response(res,200,false,"添加教师信息失败");
      }
    })
  },

  //查询教师列表
  async findTeacher(req,res){
    let count = await teacherManage.countDocuments({})
    if(count != 0){
      let filter = {
        teacherName:{$regex:req.body.express.teacherName},
        teacherSubject:{$regex:req.body.express.teacherSubject},
        teacherTel:{$regex:req.body.express.teacherTel},
      };
      teacherManage.find(filter,{__v:0,_id:0},(err,data)=>{
        if(!err){
          response(res,200,true,"查找教师信息成功",count,data);
        }else{
          response(res,200,false,"查找教师信息失败",0,[]);
        }
      }).sort({createTime:-1}).skip((req.body.page.current-1)*req.body.page.size).limit(req.body.page.size);
    }else{
      response(res,200,false,"查找教师信息失败",0,[]);
    }
  },

  //删除教师信息
  deleteTeacher(req,res){
    teacherManage.deleteOne(req.body,(err,result)=>{
      if(!err){
        if(!err){
          response(res,200,true,"删除教师信息成功");
        }else{
          response(res,200,true,"删除教师信息失败");
        }
      }
    })
  },

  //更新教师信息
  updateTeacher(req,res){
    teacherManage.updateOne({teacherId:req.body.teacherId},req.body,err=>{
      if(!err){
        if(!err){
          response(res,200,true,"更新教师信息成功");
        }else{
          response(res,200,true,"更新教师信息失败");
        }
      }
    })
  }
}