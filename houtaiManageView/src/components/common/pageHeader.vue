
<!--
 * @Author: Amos
 * @Date: 2021-03-25 10:38:31
 * @LastEditors: Amos
 * @LastEditTime: 2021-04-29 16:29:55
 * @Description: 头皮屑
 -->
<template>
    <div class="box">
         <transition name="el-zoom-in-center">
             <span v-show="Fuflag">{{fuTitle}}</span>
        </transition>
         <transition name="el-zoom-in-center">
            <span v-show="flag"> > </span>
        </transition>
         <transition name="el-zoom-in-center">
             <span v-show="flag">{{title}}</span>
        </transition>
    </div>
</template>
<script>
export default {
    data(){
        return{
            Fuflag:true,
            flag:true,
        }
    },
    watch:{
        fuTitle(newVal){
            this.Fuflag = !this.Fuflag
            setTimeout(() => {
                this.Fuflag = !this.Fuflag
            }, 300);
        },
        title(newVal){
            this.flag = !this.flag
            setTimeout(() => {
                this.flag = !this.flag
            }, 300);
        }
    },
    computed:{
        fuTitle(){
            return this.$route.matched[0].meta.name;
        },
        title(){
            return this.$route.meta.name;
        }
        
    },
    created(){
    },
    methods: {
    },

}
</script>
<style lang="less" scoped>
  .box{
      font-size: 25px;
      font-weight: 600;
      color: #19856f;
      padding-bottom: 10px;
  }  
</style>