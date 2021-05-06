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
    chineseId:{//语文老师编号
        type:String,
        require:true,
        enum:[0,1,2,3,4,5,6,7,8,9] //0语文，1数学，2英语，3生物，4地理，5化学 6生物 7历史 8政治 9物理
    },
    chineseName:{//语文老师姓名
        type:String,
        require:true,
    },
    mathId:{//数学老师编号
        type:String,
        require:true,
        enum:[0,1,2,3,4,5,6,7,8,9] //0语文，1数学，2英语，3生物，4地理，5化学 6生物 7历史 8政治 9物理
    },
    mathName:{//数学老师姓名
        type:String,
        require:true,
    },
    englishId:{//英语老师编号
        type:String,
        require:true,
        enum:[0,1,2,3,4,5,6,7,8,9] //0语文，1数学，2英语，3生物，4地理，5化学 6生物 7历史 8政治 9物理
    },
    englishName:{//英语老师姓名
        type:String,
        require:true,
    },
    cphysicalId:{//物理老师编号
        type:String,
        require:true,
        enum:[0,1,2,3,4,5,6,7,8,9] //0语文，1数学，2英语，3生物，4地理，5化学 6生物 7历史 8政治 9物理
    },
    cphysicalName:{//物理老师姓名
        type:String,
        require:true,
    },
    chemistryId:{//化学老师编号
        type:String,
        require:true,
        enum:[0,1,2,3,4,5,6,7,8,9] //0语文，1数学，2英语，3生物，4地理，5化学 6生物 7历史 8政治 9物理
    },
    chemistryName:{//化学老师姓名
        type:String,
        require:true,
    },
    biologicalId:{//生物老师编号
        type:String,
        require:true,
        enum:[0,1,2,3,4,5,6,7,8,9] //0语文，1数学，2英语，3生物，4地理，5化学 6生物 7历史 8政治 9物理
    },
    biologicalName:{//生物老师姓名
        type:String,
        require:true,
    },
    geographyId:{//地理老师编号
        type:String,
        require:true,
        enum:[0,1,2,3,4,5,6,7,8,9] //0语文，1数学，2英语，3生物，4地理，5化学 6生物 7历史 8政治 9物理
    },
    geographyName:{//地理老师姓名
        type:String,
        require:true,
    },
    historyId:{//历史老师编号
        type:String,
        require:true,
        enum:[0,1,2,3,4,5,6,7,8,9] //0语文，1数学，2英语，3生物，4地理，5化学 6生物 7历史 8政治 9物理
    },
    historyName:{//历史老师姓名
        type:String,
        require:true,
    },
    politicalId:{//政治老师编号
        type:String,
        require:true,
        enum:[0,1,2,3,4,5,6,7,8,9] //0语文，1数学，2英语，3生物，4地理，5化学 6生物 7历史 8政治 9物理
    },
    politicalName:{//政治老师姓名
        type:String,
        require:true,
    },
    createTime:{//创建时间
        type:String,
        default:dayjs().format('YYYY-MM-DD HH:mm:ss')
    }
    
  })  

  module.exports = mongoose.model('StudentClass', studentClass,'studentClass')