<template>
  <div>
    <div class="top">
        <Top></Top>
    </div>
    <div class="mid"></div>
    <div class="bottom"></div>
  </div>
</template>
<script>
import Top from "./children/top/index.vue"
export default {
  name:"mainView",
  components:{ Top }
}
</script>
<style lang="less" scoped>
</style>