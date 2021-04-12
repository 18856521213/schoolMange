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
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple>
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-card>
    </div>
    <div class="btn-box">
      <div class="add-btn">
        <i class="el-icon-circle-plus"></i>
        <span>添加轮播图</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
      return{
        imageUrl
      }
    },
    methods:{
      
    }
}
</script>
<style lang="less" scoped>
.box{
  padding-top:20px;
  .btn-box{
    width: 100%;
    display: flex;
    justify-content: center;
    color: #C0C4CC;
    cursor: pointer;
    &:hover{
     color: #909399;
    }
    .add-btn{
      width:95%;
      height: 100px;
      border:5px solid #C0C4CC;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 50px;
      &:hover{
        border:5px solid #909399;
      }
    }
  }
  .content{
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
    .box-card {
      border:5px solid #fff;
      width: 95%;

    }
  }
}
</style>