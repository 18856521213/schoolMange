const mongoose = require('../index');
const dayjs = require('dayjs');
//定义添加综合资讯数据结构
const complexInformation = mongoose.Schema({
  title:{//文章标题
    type: String,
    require:true
  },
  reTitle:{//文章二级标题
    type: String,
    require:true
  },
  label:{//文章标签
    type: String,
    require:true
  },
  content:{//文章内容
    type: String,
    require:true
  },
  titleId:{//文章id
    type: Number,
    default:1,
  },
  createTime:{//文章创建
    type:String,
    default:dayjs().format('YYYY-MM-DD HH:mm:ss')
  }
})


module.exports = mongoose.model('ComplexInformation', complexInformation,'complexInformation')