const mongoose = require('../index');
const dayjs = require('dayjs');
//定义添加轮播图数据结构
const tabarImage = mongoose.Schema({
    title:{//图片标题
        type:String,
        require:true,
        index:true
      },
      desc:{//图片描述
        type:String,
      },
      path:{//跳转路径
        type:String,
        require:true,
        index:true
      },
      imageUrl:{//图片地址
        type:String,
        require:true,
        index:true
      },
      imageId:{//图片编号
        type:Number,
        require:true,
        index:true,
        default:1
      },
      createTime:{//创建时间
        type:String,
        default:dayjs().format('YYYY-MM-DD HH:mm:ss')
      }
    
  })  

  module.exports = mongoose.model('Tabar', tabarImage,'tabar')