const complexInformation = require('../../../models/newsManage/complexInformation.js')
const dayjs = require('dayjs')
const { response } = require("../../../utils/response.js");
module.exports = {
  //添加综合资讯
  async addComplexInformation(req,res){
    //对ID进行自增
    let id;
    await complexInformation.find({},(err,data)=>{
       if(data.length > 0){
         id = Number(data[0].titleId) + 1;
       }
    }).sort({createTime:-1}).skip(0).limit(1);
    //插入提交时间
    req.body.createTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
    req.body.titleId = id;
    let addComplexInformation = new complexInformation(req.body)
    addComplexInformation.save((err)=>{
      if(!err){
        response(res,200,true,"添加综合资讯成功");
      }else{
        response(res,200,false,"添加综合资讯失败");
      }
    })
  },

  //查询综合资讯内容
  async findComplexInformation(req,res){
    let count = await complexInformation.countDocuments({})
    complexInformation.find({},(err,data)=>{
      if(!err){
        response(res,200,true,"查找综合资讯成功",count,data);
      }else{
        response(res,200,false,"查找综合资讯失败",0,[]);

      }
    }).sort({createTime:-1}).skip((req.body.page-1)*5).limit(5);
  }
}