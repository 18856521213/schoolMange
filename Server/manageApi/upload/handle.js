const swiper = require('../../models/basicConfiguration/swiperConfiguration.js')
const tabar = require('../../models/basicConfiguration/tabarConfiguration.js')
const path = require("path");
const { response } = require("../../utils/response.js");
const url = "http://127.0.0.1:3001/image/";
const dayjs = require('dayjs');

module.exports ={
    //上传轮播图的api
    async uploadSwiperImage(req,res){
        let imageId;
        await swiper.find({},(err,data)=>{
            if(!err){
                if(data.length > 0 ){
                    imageId = Number(data[0].imageId)+1;
                }else{
                    imageId = 1 
                }
            }
        }).sort({createTime:-1}).skip(0).limit(1);
        let fileName = path.parse(req.files.file.path)
        let data ={
            title:req.fields.title,
            desc:req.fields.desc,
            imageId:imageId,
            imageUrl:`${url}${fileName.base}`,
            createTime:dayjs().format('YYYY-MM-DD HH:mm:ss')
        }
        let addSwiper = new swiper(data);
        addSwiper.save(err=>{
            if(!err){
                response(res,200,true,"添加图片成功");
            }else{
                console.log(err);
                response(res,200,false,"添加图片失败");
            }
        })
    },
    //上传导航栏的图片
    async uploadTabarImage(req,res){
        let imageId;
        await tabar.find({},(err,data)=>{
            if(!err){
                if(data.length > 0 ){
                    imageId = Number(data[0].imageId)+1;
                }else{
                    imageId = 1 
                }
            }
        }).sort({createTime:-1}).skip(0).limit(1);
        let fileName = path.parse(req.files.file.path)
        let data ={
            title:req.fields.title,
            desc:req.fields.desc,
            imageId:imageId,
            path:req.fields.path,
            imageUrl:`${url}${fileName.base}`,
            createTime:dayjs().format('YYYY-MM-DD HH:mm:ss')
        }
        let addTabar = new tabar(data);
        addTabar.save(err=>{
            if(!err){
                response(res,200,true,"添加图片成功");
            }else{
                response(res,200,false,"添加图片失败");
            }
        })
    }
}