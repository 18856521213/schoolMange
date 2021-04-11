const teacherManage = require('../../../models/peopleManage/teacherManage.js')
const dayjs = require('dayjs');
module.exports = {
  //添加老师
  addTeacher(req,res){
    let addTeacher = new teacherManage(req.body);
    addTeacher.save((err)=>{
      if(!err){
        res.json({
          success:true
        })
      }else{
        res.json({
          success:false
        })
      }
    })
  }
}