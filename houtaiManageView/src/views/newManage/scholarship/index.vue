<!--
 * @Author: Amos
 * @Date: 2021-03-25 10:38:31
 * @LastEditors: Amos
 * @LastEditTime: 2021-04-29 16:29:55
 * @Description: 奖学金
 -->
<template>
  <div>
    <el-form :rules="rule" :model="form" ref="form">
      <el-form-item label="文章标题" prop="title">
         <el-input v-model="form.title" placeholder="请输入文章标题"></el-input>
      </el-form-item>
      <el-form-item label="二级标题" prop="reTitle">
         <el-input v-model="form.reTitle" placeholder="请输入二级标题"></el-input>
      </el-form-item>
      <el-form-item label="文章标签" prop="label">
        <div>
         <el-radio-group v-model="form.label">
          <el-radio-button v-for="item in scholarshipList" :label="item" :key="item"></el-radio-button>
        </el-radio-group>
        </div>
      </el-form-item>
      <el-form-item prop="content">
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
import { addScholarship } from "@/api/newsManage/scholarship/index.js"
  export default {
    data() {
      return {
        form:{
          title:"",
          reTitle:"",
          label:"",
          content:""
        },
        editor:null,//富文本编辑器对象
        newsLabel:[],
        scholarshipList:["国家奖学金","国家励志奖学金","校级奖学金","社会捐赠类奖学金","定向奖学金"],
        rule:{
          title:[
            {required: true, message: '请输入文章标题', trigger: 'blur'}
          ],
          reTitle:[
            {required: true, message: '请输入二级标题', trigger: 'blur'}
          ],
          label:[
            {required: true, message: '请选择文章标签', trigger: 'change'}
          ],
          content:[
            {required: true, message: '请输入文章内容', trigger: 'change'}
          ]
        },
      }
    },
    watch:{
      //对文章内容进行监听，并及时移除校验
      "editor":{
        deep:true,
        handler(){
          this.form.content = this.editor.txt.html();
          this.$refs.form.clearValidate("content");
        }
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
      addContent(){
        this.$refs.form.validate((valid) => {
          if (valid) {
            addScholarship(this.form).then(res =>{
              if(res.success){
                this.$message.success(res.message);
                this.resetForm();
              }else{
                this.$message.error(res.message)
              }
            })
          }
        });
      },
      resetForm(){
        for(let i in this.form){
          this.form[i] = ""
        }
        this.$refs.form.resetFields();
        this.editor.txt.clear();
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