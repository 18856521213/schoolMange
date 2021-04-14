const swiper = require('../../../models/basicConfiguration/swiperConfiguration.js')
const { response } = require("../../../utils/response.js");
const path = require("path");
const fs = require("fs")
module.exports = {
  findSwiperImage(req,res){
    swiper.find({},{__v:0,_id:0},(err,data)=>{
        if(!err){
            response(res,200,true,"查找图片成功",null,data);
        }else{
            response(res,200,true,"查找图片失败",null,[]);
        }
    })
},
deleteSwiperImage(req,res){
    swiper.deleteOne(req.body,err=>{
        if(!err){
            response(res,200,true,"删除图片成功");
            let fileName = path.parse(req.body.imageUrl);
            fs.unlink(path.join(__dirname,`../../../upload/image/${fileName.base}`),(err)=>{
              if(err){
                console.log(err);
              }
            })
        }else{
            response(res,200,true,"删除图片失败");
        }
    });

}   

}