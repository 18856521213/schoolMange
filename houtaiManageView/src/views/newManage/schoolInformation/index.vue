<!--
 * @Author: Amos
 * @Date: 2021-03-25 10:38:31
 * @LastEditors: Amos
 * @LastEditTime: 2021-04-29 16:29:55
 * @Description: 校内资讯
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
      <el-form-item>
        <div id="div1"></div>
      </el-form-item>
      <el-form-item class="btn">
        <el-button @click="getHtml" type="primary">提交内容</el-button>
        <el-button @click="resetForm" type="danger">清空</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import E from "wangeditor";
  export default {
    data() {
      return {
        form:{
          title:"",
          retitle:""
        },
        editor:null,//富文本编辑器对象
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
      getHtml(){
        console.log(this.editor.txt.html())
        console.log(this.editor.txt)
        console.log(typeof this.editor.txt.html())
        console.log(this.editor.txt.text())
      },
      resetForm(){
        for(let i in this.form){
          this.form[i] = ""
        }
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