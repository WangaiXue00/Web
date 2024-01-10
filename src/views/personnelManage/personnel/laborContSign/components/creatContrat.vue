<template>
  <div>
    <div class="contrat">
      <el-image style="width: 100px; height: 100px" :src="url"></el-image>
      <span>确定要生成合同吗？</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: require('@/assets/logo/suo.png')
    }
  }
}
</script>
<style lang="scss" scoped>
.contrat{
  text-align: start;
  >span{
    position: absolute;
    top:50%;
    transform: translate(0,-50%);
  }
}
</style>