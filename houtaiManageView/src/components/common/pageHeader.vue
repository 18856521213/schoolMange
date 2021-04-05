<template>
    <div class="box">
        <span>教务管理</span>
        <span> > </span>
         <transition name="el-zoom-in-center">
             <span v-show="flag">{{title}}</span>
        </transition>
    </div>
</template>
<script>
export default {
    data(){
        return{
            flag:true,
        }
    },
    watch:{
        title(){
            this.flag = !this.flag
            setTimeout(() => {
                this.flag = !this.flag
            }, 300);
        }
    },
    computed:{
        title(){
            return this.$route.meta.name;
        }
    },
    created(){
        console.log(this.$route);
    }

}
</script>
<style lang="less" scoped>
  .box{
      font-size: 30px;
      font-weight: 600;
      color: #19856f;
      padding-bottom: 10px;
  }  
</style>