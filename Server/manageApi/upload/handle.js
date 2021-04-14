const swiper = require('../../models/basicConfiguration/swiperConfiguration.js')
const path = require("path");
const { response } = require("../../utils/response.js");
const fs = require("fs");
module.exports ={
    uploadSwiperImage(req,res){
        let url = "http://127.0.0.1:3001/image/";
        let fileName = path.parse(req.files.file.path)
        let data ={
            title:req.fields.title,
            desc:req.fields.desc,
            imageId:req.fields.imageId,
            imageUrl:`${url}${fileName.base}`,
        }
        let addSwiper = new swiper(data);
        addSwiper.save(err=>{
            if(!err){
                response(res,200,true,"添加图片成功");
            }else{
                response(res,200,false,"添加图片失败");
            }
        })
    },
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
                // let fileName = path.parse(req.body.imageUrl);
                // fs.unlink(`../../upload/image/${fileName.base}`)
            }else{
                response(res,200,true,"删除图片失败");
            }
        });

    }   
}