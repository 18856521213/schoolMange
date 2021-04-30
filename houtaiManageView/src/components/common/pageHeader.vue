
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
             <span v-show="Fuflag">{{ routeName.matched[0].meta.name }}</span>
        </transition>
         <transition name="el-zoom-in-center">
            <span v-show="flag"> > </span>
        </transition>
         <transition name="el-zoom-in-center">
             <span v-show="flag">{{ routeName.meta.name}}</span>
        </transition>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data(){
        return{
            Fuflag:true,
            flag:true,
        }
    },
    watch:{
    },
    computed:{
        ...mapState(['routeName'])
        
    },
    created(){
        console.log(this.routeName);
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