const mongoose = require('../index');
const dayjs = require('dayjs');
//定义添加班级数据结构
const studentClass = mongoose.Schema({
    className:{//班级名称
        type:String,
        require:true,
        index:true
    },
    headTeacher:{//班主任姓名
        type:String,
        require:true,
        index:true
    },
    headTeacherId:{//班主任编号
        type:String,
        require:true,
        index:true
    },
    classNumber:{//班级人数
        type:String,
        require:true,
    },
    classId:{//班级id
        type:Number,
        require:true,
        default:1
    },
    createTime:{//创建时间
        type:String,
        default:dayjs().format('YYYY-MM-DD HH:mm:ss')
    }
    
  })  

  module.exports = mongoose.model('StudentClass', studentClass,'studentClass')