const scholarship = require('../../../models/newsManage/scholarship.js')
const { response } = require("../../../utils/response.js");
module.exports = {
  //添加综合资讯
  async addScholarship(req,res){
    //对ID进行自增
    let id;
    await scholarship.find({},(err,data)=>{
       if(data.length > 0){
         id = Number(data[0].titleId) + 1;
       }
    }).sort({createTime:-1}).skip(0).limit(1);
    req.body.titleId = id;
    let addScholarship = new scholarship(req.body)
    addScholarship.save((err)=>{
      if(!err){
        response(res,200,true,"添加奖学金资讯成功");
      }else{
        response(res,200,false,"添加奖学金资讯失败");
      }
    })
  },

  //查找校园资讯
  async findScholarship(req,res){
    let count = await scholarship.countDocuments({})
    scholarship.find((err,data)=>{
      if(!err){
        response(res,200,true,"查找奖学金资讯成功",count,data);
      }else{
        response(res,200,false,"查找奖学金资讯失败",0,[]);
      }
    }).sort({createTime:-1}).skip((req.body-1)*5).limit(5);
  },
}