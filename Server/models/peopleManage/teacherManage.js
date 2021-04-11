const mongoose = require('../index');
const dayjs = require('dayjs');
//定义添加综合资讯数据结构
const teacherDB = mongoose.Schema({
  teacherName:{//教师姓名
    type:String,
    require:true,
    index:true
  },
  teacherId:{//教师编号
    type:String,
    require:true,
    default:220000,
    index:true
  },
  teacherEducation:{//教师最高教育
    type:String,
    require:true,
    enum:[0,1,2,3,4,5]//0高中 1.大专 2.本科 3.研究生 4.博士 5.博士后
  },
  teacherAge:{//教师年纪
    type:String,
    require:true
  },
  teacherSex:{//教师性别
    type:String,
    require:true,
    default:0,
    enum:[0,1]//0女性，1男性
  },
  teacherIngredient:{//教师成分
    type:String,
    require:true,
    default:0,
    enum:[0,1,2]//0群众，1党员,2其他
  },
  teacherNumber:{//教师身份证号
    type:String,
    require:true,
  },
  teacherTel:{//教师手机号
    type:String,
    require:true,
  },
  teacherWechat:{//教师微信号
    type:String,
    require:true,
  },
  teacherBron:{//教师出生年月日
    type:String,
  },
  teacherAdress:{//教师现住址
    type:String,
  },
  teacherLevel:{//教师级别
    type:String,
    index:true,
    require:true,
    enum:[0,1,2] //0普通教师，1班主任，2教导主任，
  },
  teacherSubject:{//教师所授科目
    type:String,
    index:true,
    require:true,
    enum:[0,1,2,3,4,5,6,7,8] //0语文，1数学，2英语，3生物，4地理，5化学 6生物 7历史 8政治
  },
  teacherMatherName:{//教师母亲名字
    type:String,
  },
  teacherFatherName:{//教师父亲名字
    type:String,
  },
  teacherHealth:{//教师健康
    type:String,
    require:true,
    default:0,
    enum:[0,1,2],//0差1良2优
  },
  createTime:{//文章创建
    type:String,
    default:dayjs().format('YYYY-MM-DD HH:mm:ss')
  }
})


module.exports = mongoose.model('Teacher', teacherDB,'teacher')