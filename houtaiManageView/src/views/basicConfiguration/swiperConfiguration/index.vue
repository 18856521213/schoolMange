<!--
 * @Author: Amos
 * @Date: 2021-03-25 10:38:31
 * @LastEditors: Amos
 * @LastEditTime: 2021-04-29 16:29:55
 * @Description: 轮播图配置
 -->

<template>
  <div class="box">
    <div class="content">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>添加轮播图</span>
          <el-button @click="addSwiperImage" style="float: right; padding: 3px 0" type="text">确定添加</el-button>
        </div>
        <div class="upload">
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
            :file-list="fileList">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，尺寸为750*400px,且不超过500kb</div>
          </el-upload>
        </div>
        <div class="upload-form">
          <el-form>
            <el-form-item label="图片标题">
              <el-input placeholder="请输入标题"></el-input>
            </el-form-item>
            <el-form-item label="图片描述">
              <el-input placeholder="请输入图片描述" class="no-resize" type="textarea"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
      <el-card class="box-card mb">
        <div slot="header" class="clearfix">
          <span>轮播图1</span>
          <el-button style="float: right; padding: 3px 0" type="text">编辑</el-button>
          <el-button style="float: right; padding: 3px 0" type="text">删除</el-button>
        </div>
        <div class="img-box">
          <div class="img">
            <img src="http://localhost:3001/upload_38f6843d03bed2bf1feb60a87713a629.jpg" alt="">
          </div>
          <div class="img-content">
            <h3>dshaiduisadhiasdhiasudhasui</h3>
            <p>dhsaifhisahdsiadhasiuhdiasudhiasuhdiasuhdiuashdiu</p>
            <p><em>[图片链接]https://www.baidu.com</em></p>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
import { uploadSwiperImage } from "@/api/basicConfiguration/swiperConfiguration/index.js"
export default {
    data(){
      return{
        fileList:[],//文件列表
      }
    },
    methods:{
      //文件上传
        uploadFile(params){
            let data = new FormData();
            data.append("file",params.file);
            uploadSwiperImage(data).then(res=>{
                if(res.success){
                    this.dialogVisible3 = false;
                    this.fileList = [];
                    this.$message.success("批量添加成功")
                    this.getStudentList()
                }
            })
        },
        //改变文件触发的回调
        changeFile(file,fileList){},
        //添加按钮
        addSwiperImage(){
          this.$refs.upload.submit();
        }

    }
}
</script>
<style lang="less" scoped>
.box{
  padding-top:20px;
  .content{
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    padding-bottom: 10px;
    .mb{
      margin-top: 15px;
    }
    .img-box{
      display: flex;
      flex-direction:row;
      .img{
        width:40%;
        border:1px dashed #C0C4CC;
        padding: 5px;
        border-radius:5px;
        animation-name: boxBorder;
        animation-duration: 0.5s;
        margin-right:10px;
        &:hover{
         border:1px dashed #19856f;
        }
        img{
          width: 100%;
        }
      }
      .img-content{
        width: 59%;
      }
    }
    .box-card {
      border:5px solid #fff;
      width: 95%;
      position: relative;
      .upload-form{
        width: 60%;
        height: 180px;
        position:absolute;
        left: 400px;
        top: 57px;
        .no-resize{
         /deep/ .el-textarea__inner{ 
            resize: none; //禁止用户进行伸拉
          }
        }
      }
    }
  }
}
// 动画
@keyframes boxBorder {
  from {border:1px solid #C0C4CC;}
  to {border:1px solid #19856f}
}
@keyframes fontColor {
  from {color:#C0C4CC;}
  to {color: #19856f}
}
</style>