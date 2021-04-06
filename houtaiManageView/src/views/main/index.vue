<template>
  <div>
    <div class="top">
      <Top></Top>
    </div>
    <div class="mid">
      <Mid></Mid>
    </div>
    <div class="bottom"></div>
  </div>
</template>
<script>
import Top from "./children/top/index.vue"
import Mid from "./children/mid/index.vue"
export default {
  name:"mainView",
  components:{ Top,Mid }
}
</script>
<style lang="less" scoped>
</style>