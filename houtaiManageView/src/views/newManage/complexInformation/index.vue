<!--
 * @Author: Amos
 * @Date: 2021-03-25 10:38:31
 * @LastEditors: Amos
 * @LastEditTime: 2021-04-29 16:29:55
 * @Description: 综合资讯
 -->
<template>
  <div>
    <el-form>
      <el-form-item label="文章标题">
         <el-input v-model="form.title" placeholder="请输入文章标题"></el-input>
      </el-form-item>
      <el-form-item label="二级标题">
         <el-input v-model="form.retitle" placeholder="请输入二级标题"></el-input>
      </el-form-item>
      <el-form-item label="文章标签">
        <div>
         <el-radio-group v-model="newsLabel">
          <el-radio-button v-for="item in radioLidt" :label="item" :key="item"></el-radio-button>
        </el-radio-group>
        </div>
      </el-form-item>
      <el-form-item>
        <div id="div1"></div>
      </el-form-item>
      <el-form-item class="btn">
        <el-button @click="addContent" type="primary">提交内容</el-button>
        <el-button @click="resetForm" type="danger">清空</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import E from "wangeditor";
import { addComplexInformation } from "@/api/newsManage/complexInformation/index.js"
  export default {
    data() {
      return {
        form:{
          title:"",
          retitle:""
        },
        editor:null,//富文本编辑器对象
        newsLabel:[],
        radioLidt:["党委会议","运动资讯","社团活动","八卦小道"],
      }
    },
    mounted() {
      this.createE();
    },
    methods:{
      createE(){
        this.editor = new E("#div1");
        this.editor.create();
      },
      //提交新闻资讯
      addContent(){
        let data ={
          title:"都是一些什么标题啊",
          reTitle:"dsadas",
          label:"党委会议",
          content:"党委会议党委会议党委会议党委会议",
          titleId:125,
        }
        addComplexInformation(data).then(res =>{
          console.log(res);
        })
      },
      resetForm(){
        for(let i in this.form){
          this.form[i] = ""
        }
        this.editor.txt.clear();
        this.newsLabel = []
      }
    }

  }
</script>
<style lang="less" scoped>
.btn{
  /deep/ .el-form-item__content{
    display: flex;
    justify-content: center;
  }
}
  
</style>