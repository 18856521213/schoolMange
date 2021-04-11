const schoolInformation = require('../../../models/newsManage/schoolInformation.js')
const dayjs = require('dayjs')
module.exports = {
  //添加校园资讯
  async addSchoolInformation(req,res){
    //对ID进行自增
    let id;
    await schoolInformation.find({},(err,data)=>{
       if(data.length > 0){
         id = Number(data[0].titleId) + 1;
       }
    }).sort({createTime:-1}).skip(0).limit(1);
    //插入提交时间
    req.body.createTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
    req.body.titleId = id;
    let addSchoolInformation = new schoolInformation(req.body);
    addSchoolInformation.save(err=>{
      if(!err){
        res.json({
          status:200,
          success:true,
          failure:false,
          successMessage:'添加校园资讯成功',
          errMessage:null,
          data:null
        })
      }else{
        res.json({
          status:200,
          success:false,
          failure:true,
          successMessage:null,
          errMessage:"添加校园资讯失败",
          data:null
        })
      }
    })
  }
}