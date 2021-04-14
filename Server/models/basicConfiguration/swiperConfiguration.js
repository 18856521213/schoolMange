const mongoose = require('../index');
const dayjs = require('dayjs');
//定义添加轮播图数据结构
const swiperImage = mongoose.Schema({
    title:{//图片标题
        type:String,
        require:true,
        index:true
      },
      desc:{//图片描述
        type:String,
      },
      imageUrl:{//图片地址
        type:String,
        require:true,
        index:true
      },
      imageId:{//图片编号
        type:Number,
        require:true,
        index:true
      },
      createTime:{//创建时间
        type:String,
        default:dayjs().format('YYYY-MM-DD HH:mm:ss')
      }
    
  })  

  module.exports = mongoose.model('Swiper', swiperImage,'swiper')