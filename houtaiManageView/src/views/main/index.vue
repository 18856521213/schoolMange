<!--
 * @Author: Amos
 * @Date: 2021-03-25 10:38:31
 * @LastEditors: Amos
 * @LastEditTime: 2021-04-29 16:29:55
 * @Description: 首页
 -->
<template>
  <div>
    <div class="top">
      <Top></Top>
    </div>
    <div class="mid">
      <Mid></Mid>
    </div>
    <div class="bottom">
      <bottomView></bottomView>
    </div>
  </div>
</template>
<script>
import Top from "./children/top/index.vue"
import Mid from "./children/mid/index.vue"
import bottomView from "./children/bottom/index.vue"
export default {
  name:"mainView",
  components:{ Top,Mid,bottomView }
}
</script>
<style lang="less" scoped>
</style>