const schoolInformation = require('../../../models/newsManage/schoolInformation.js')
const dayjs = require('dayjs')
const { response } = require("../../../utils/response.js");

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
        response(res,200,true,"添加校园资讯成功");
      }else{
        response(res,200,false,"添加校园资讯失败");
      }
    })
  },
  //查找校园资讯
  async findSchoolInformation(req,res){
    let count = await schoolInformation.find({});
    schoolInformation.find((err,data)=>{
      if(!err){
        response(res,200,true,"查找校园资讯成功",count,data);
      }else{
        response(res,200,true,"查找校园资讯失败",0,[]);
      }
    }).sort({createTime:-1}).skip((req.body-1)*5).limit(5);
  }
}