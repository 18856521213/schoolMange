const swiper = require('../../models/basicConfiguration/swiperConfiguration.js')
const path = require("path");
const { response } = require("../../utils/response.js");
const url = "http://127.0.0.1:3001/image/";
module.exports ={
    async uploadSwiperImage(req,res){
        let imageId;
        await swiper.find({},(err,data)=>{
            if(!err){
                if(data.length > 0 ){
                    imageId = data[0].imageId;
                }
            }
        }).sort({createTime:-1}).skip(0).limit(1);
        let fileName = path.parse(req.files.file.path)
        let data ={
            title:req.fields.title,
            desc:req.fields.desc,
            imageId:imageId+1,
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
}