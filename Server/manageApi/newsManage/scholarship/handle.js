const scholarship = require('../../../models/newsManage/scholarship.js')
const dayjs = require('dayjs')
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
    //插入提交时间
    req.body.createTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
    req.body.titleId = id;
    let addScholarship = new scholarship(req.body)
    addScholarship.save((err)=>{
      if(!err){
        res.json({
          status:200,
          success:true,
          failure:false,
          successMessage:'添加奖学金资讯成功',
          errMessage:null,
          data:null
        })
      }else{
        res.json({
          status:200,
          success:false,
          failure:true,
          successMessage:null,
          errMessage:"添加奖学金资讯失败",
          data:null
        })
      }
    })
  },

  //查找校园资讯
  async findScholarship(req,res){
    let count = await scholarship.countDocuments({})
    scholarship.find((err,data)=>{
      if(!err){
        res.json({
          status:200,
          success:true,
          failure:false,
          successMessage:'查找奖学金资讯成功',
          errMessage:null,
          data:data,
          total:count
        })
      }else{
        res.json({
          status:200,
          success:false,
          failure:true,
          successMessage:null,
          errMessage:"查找奖学金资讯失败",
          data:[],
          total:0
        })
      }
    }).sort({createTime:-1}).skip((req.body-1)*5).limit(5);
  },
}