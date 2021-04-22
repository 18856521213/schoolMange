const tabar = require('../../../models/basicConfiguration/tabarConfiguration.js')
const { response } = require("../../../utils/response.js");
const path = require("path");
const fs = require("fs")
module.exports = {
    findTabarImage(req,res){
        tabar.find({},{__v:0,_id:0},(err,data)=>{
            if(!err){
                response(res,200,true,"查找图片成功",null,data);
            }else{
                response(res,200,true,"查找图片失败",null,[]);
            }
        })
    },
    deleteTabarImage(req,res){
        tabar.deleteOne(req.body,err=>{
            if(!err){
                let fileName = path.parse(req.body.imageUrl);
                fs.unlink(path.join(__dirname,`../../../upload/image/${fileName.base}`),(err)=>{
                    if(!err){
                        response(res,200,true,"删除图片成功");
                    }else{
                        console.log(err);
                    }
                })
            }else{
                response(res,200,true,"删除图片失败");
            }
        });
        }
}