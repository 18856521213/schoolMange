<template>
    <div class="content">
        <div class="content-item">
           <div class="img">
             <img src="../../../assets/icon/data.png" alt="">
           </div>
           <div>
             <h5>都是有什么问题想问的吗</h5>
           </div>
           <div>
             <p>都是有什么问题想问的吗都是有什么问题想问的吗
               都是有什么问题想问的吗都是有什么问题想问的吗
               都是有什么问题想问的吗都是有什么问题想问的吗都是有什么问题想问的吗都是有什么问题想问的吗都是有什么问题想问的吗</p>
           </div>
        </div>
        <div class="addIcon" @click="dialogVisible = true ">
            <i class="el-icon-plus"></i>
        </div>

        <el-dialog
          title="添加导航栏"
          :visible.sync="dialogVisible"
          @close="resetTeacherInfo"
          :show-close="false"
          width="1050px"
          :center="true">
          <div class="dialog-content">
              <el-form ref="form" :rules="rules" :inline="true" :model="form" label-width="120px">
                  <el-form-item label="教师姓名" prop="teacherName">
                      <el-input size="small" v-model="form.teacherName" placeholder="请输入教师姓名"></el-input>
                  </el-form-item>
                  <el-form-item label="教师出生日期" prop="teacherBron">
                    <el-date-picker
                      size="small"
                      v-model="form.teacherBron"
                      type="date"
                      format="yyyy-MM-dd"
                      value-format="yyyy-MM-dd"
                      placeholder="选择日期">
                    </el-date-picker>
                  </el-form-item>
              </el-form>
          </div>
          <span slot="footer" class="dialog-footer">
              <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
              <el-button size="mini" type="primary" @click="submitBtn">确 定</el-button>
          </span>
      </el-dialog>

    </div>
</template>
<script>
export default {
    data() {
      return {
        dialogVisible:false,
        form:{},
        rules:{},
      }
    },
    methods: {
      addTabar(){
        console.log(111)
      },

      resetTeacherInfo(){}
    },
}
</script>
<style lang="less" scoped>
.content{
  padding: 5px;
  display:flex;
  .addIcon{
    width: 20%;
    height:294px;
    border: 3px solid #C0C4CC;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 80px;
    color: #C0C4CC;
    cursor: pointer;
    animation: boxBorder .3s ease-in-out 0s 1 alternate forwards;
    &:hover{
      animation: fontColor .5s ease-in-out 0s 1 alternate forwards;
    }
  }
  .content-item{
    width: 20%;
    height:300px;
    margin-right:5px;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .img{
      text-align: center;
      padding-top:10px;
      img{
        width: 50%;
      }
    }
    h5{
      color:#19856f;
      margin: 20px 10px 0px 10px;
    }
    p{
      word-wrap: break-word;
    	word-break: break-all;    
      padding: 0 10px;
      font-size: 14px;
      color: #585858;
      height: 95px;
      overflow: hidden;
      text-overflow:ellipsis;
    }
  }  
}   

// 动画
@keyframes boxBorder {
  from {color: #19856f;border:3px solid #19856f}
  to {color:#C0C4CC;border:3px solid #C0C4CC;}
}
@keyframes fontColor {
  from {color:#C0C4CC;border:3px solid #C0C4CC;}
  to {color: #19856f;border:3px solid #19856f}
}
</style>