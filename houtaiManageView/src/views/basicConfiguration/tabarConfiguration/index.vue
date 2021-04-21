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
              <el-upload
                class="upload-demo"
                ref="upload"
                :http-request="uploadFile"
                drag
                :limit="1"
                list-type="picture"
                :on-change="changeFile"
                accept=".jpg,.png"
                :auto-upload="false"
                action="#"
                :multiple="false"
                :file-list="fileList"
                :data="form">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，尺寸为800*800，且不超过500kb</div>
              </el-upload>
              <div class="form-box">
                <el-form ref="form" :rules="rules" :model="form" label-width="120px">
                    <el-form-item label="导航栏标题">
                      <el-input size="small" v-model="form.title"></el-input>
                    </el-form-item>
                    <el-form-item label="导航栏路径">
                      <el-input size="small" v-model="form.path"></el-input>
                    </el-form-item>
                    <el-form-item label="导航栏描述">
                      <el-input type="textarea" size="small" v-model="form.desc"></el-input>
                    </el-form-item>
                </el-form>
              </div>
          </div>
          <span slot="footer" class="dialog-footer">
              <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
              <el-button size="mini" type="primary" @click="addTabarImage">确定添加</el-button>
          </span>
      </el-dialog>

    </div>
</template>
<script>
import { uploadTabarImage } from "@/api/basicConfiguration/uploadTabarImage/index.js"
export default {
    data() {
      return {
        dialogVisible:false,
        form:{
          title:"",
          path:"",
          desc:""
        },
        fileList:[],
        rules:{},
      }
    },
    methods: {
      addTabar(){
        console.log(111)
      },

      resetTeacherInfo(){},
      //文件上传
      uploadFile(params){
          let { data } = params;
          let parm = new FormData();
          parm.append("file",params.file);
          for(let i in data){
            parm.append(i,data[i]);
          }
          uploadTabarImage(parm).then(res=>{
              if(res.success){
                  this.fileList = [];
                  this.$message.success("添加成功")
              }
          })
      },
      //改变文件触发的回调
      changeFile(file,fileList){
        this.fileList = fileList
      },
            //添加按钮
      addTabarImage(){
        if(this.fileList.length == 0 ){
          this.$message.warning("请先上传图片");
          return
        }
        this.$refs.swiperForm.validate((valid) => {
          if(valid){
            this.$refs.upload.submit();
          }
        })
      }


    },
}
</script>
<style lang="less" scoped>
.content{
  padding: 5px;
  display:flex;
  .addIcon{
    width: 220px;
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
    width: 220px;
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
  .dialog-content{
    position: relative;
    .form-box{
      position:absolute;
      left: 350px;
      top:10px;
      width: 550px;
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