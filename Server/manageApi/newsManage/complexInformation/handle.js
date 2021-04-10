const complexInformation = require('../../../models/newsManage/complexInformation.js')
const dayjs = require('dayjs')
module.exports = {
  //添加综合资讯
  addComplexInformation(req,res){
    req.body.createTime = dayjs().format('YYYY-MM-DD HH:mm:ss')
    let addComplexInformation = new complexInformation(req.body)
    addComplexInformation.save((err)=>{
      if(!err){
        res.json({
          success:true,
          seccessMessage:'添加成功'
        })
      }else{
        res.json({
          success:false,
          errMessage:'添加失败'+err
        })
      }
    })
  }
}