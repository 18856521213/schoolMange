<template>
    <div class="content">
       <transition name="el-fade-in-linear" v-for="item in tabarList" :key="item.imageId">
        <div class="content-item">
           <div class="img">
             <img :src="item.imageUrl" alt="">
           </div>
           <div>
             <h5>{{ item.title }}</h5>
           </div>
           <div class="font-box">
             <p>{{ item.desc }}</p>
             <span>{{ item.path }}</span>
           </div>
           <div class="show-btn">
                  <el-button type="text" @click="deleteTabar(item)">删除</el-button>
                  <el-button type="text" @click="editTabar(item)">编辑</el-button>
           </div>
        </div>
      </transition>

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
                    <el-form-item label="导航栏标题" prop="title">
                      <el-input size="small" v-model="form.title"></el-input>
                    </el-form-item>
                    <el-form-item label="导航栏路径" prop="path">
                      <el-input size="small" v-filterSpecialCharChinese v-model="form.path"></el-input>
                    </el-form-item>
                    <el-form-item label="导航栏描述" prop="desc">
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
import { uploadTabarImage,findTabarImage,deleteTabarImage } from "@/api/basicConfiguration/tabarConfiguration/index.js"
export default {
    data() {
      return {
        dialogVisible:false,
        form:{
          title:"",
          path:"",
          desc:""
        },
        tabarList:[],
        fileList:[],
        editForm:{},
        rules:{
          title:[{required:true,message:"请填写标题",trigger: 'blur'}],
          path:[{required:true,message:"请填写导航栏路径",trigger: 'blur'}],
          desc:[{required:true,message:"请填写导航栏描述",trigger: 'blur'}],
        },
      }
    },
    created() {
      this.findTabarImage();
    },
    methods: {
      findTabarImage(){
        findTabarImage().then(res =>{
          if(res.success){
            this.tabarList = res.data;
          }
        })
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
                  this.$refs.form.resetFields();
                  this.dialogVisible = false;
                  this.findTabarImage();
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
        this.$refs.form.validate((valid) => {
          if(valid){
            this.$refs.upload.submit();
          }
        })
      },
      //删除导航栏
      deleteTabar(item){
        this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {
                  let data ={
                    imageId:item.imageId,
                    imageUrl:item.imageUrl
                  }
                  deleteTabarImage(data).then(res =>{
                    if(res.success){
                      this.findTabarImage();
                      this.$message(res.message)
                    }
                  })
                  this.$message({type: 'success', message: '删除成功!'});
                }).catch(() => {
                  this.$message({ type: 'info',message: '已取消删除'});          
                });    
      },
      //编辑
      editTabar(item){
        this.editForm = item

      },


    },
}
</script>
<style lang="less" scoped>
.content{
  padding: 5px;
  display:flex;
  .addIcon{
    width: 210px;
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
    width: 210px;
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
    .font-box{
      text-align: center;
      p{
        word-wrap: break-word;
        word-break: break-all;    
        padding: 0 10px;
        font-size: 12px;
        color: #585858;
        height: 45px;
        overflow: hidden;
        text-overflow:ellipsis;
      }
      span{
        font-size: 12px;
      }
    }
    .show-btn{
      height: 50px;
    }

  }  
  .dialog-content{
    position: relative;
    .form-box{
      position:absolute;
      left: 350px;
      top:10px;
      width: 650px;
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