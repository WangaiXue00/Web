<template>
  <div class="importInfo">
    <span>上传合同签订表： </span>
    <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" multiple>
      <i class="el-icon-upload2" style="font-size: 40px; color: #1890ff;"></i>
    </el-upload>
  </div>
</template>
<script>
export default {
  name: "Upload",
  data() {

  }
}
</script>
<style lang="scss" scoped>
.importInfo {
  font-size: 25px;
  display: flex;
  justify-content: center;
}
</style>