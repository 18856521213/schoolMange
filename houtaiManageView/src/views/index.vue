<!--
 * @Author: Amos
 * @Date: 2021-03-25 10:38:31
 * @LastEditors: Amos
 * @LastEditTime: 2021-04-29 16:29:55
 * @Description: 整个页面
 -->
<template>
  <div class="home" style="height:100%;">
    <el-container  style="height:100%;">
      <el-header>
        <Hander />
      </el-header>
      <el-container class="container">
        <el-aside width="201px">
          <Aside />
        </el-aside>
        <el-main>
          <pageHeader></pageHeader>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Hander from '@/components/header.vue'
import Aside from '@/components/aside.vue'
import pageHeader from '@/components/common/pageHeader.vue'
export default {
  name: 'Home',
  components:{ Hander, Aside, pageHeader },
}
</script>
<style lang='less' scoped>
.el-header{
    padding: 0;
}

.el-main {
  position: absolute;
  left: 200px;
  right: 0;
  top: 60px;
  bottom: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color:rgb(245, 244, 244);
}


</style>
