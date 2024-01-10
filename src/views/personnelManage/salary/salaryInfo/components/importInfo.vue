<template>
  <div class="importInfo">
    <el-descriptions title="" :column="2" :colon="false">
      <el-descriptions-item label="第一步：">下载员工信息模版</el-descriptions-item>
      <el-descriptions-item>
        <el-link type="primary">下载员工信息模版</el-link>
      </el-descriptions-item>
      <el-descriptions-item label="第二步：">填入员工信息数据</el-descriptions-item>
      <el-descriptions-item>系统以工号为准，请正确填入</el-descriptions-item>
      <el-descriptions-item label="所属月份"></el-descriptions-item>
        <el-descriptions-item>
          <el-input placeholder="2023-8"></el-input>
        </el-descriptions-item>
      <el-descriptions-item label="第三步：">上传薪资数据</el-descriptions-item>
      <el-descriptions-item>
        <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" multiple>
          <i class="el-icon-upload2" style="font-size: 50px; color: #1890ff;"></i>
        </el-upload>
      </el-descriptions-item>
    </el-descriptions>
    <div></div>
  </div>
</template>
<script>
export default {
  name: "Portrait",
  data() {

  }
}
</script>
<style lang="scss" scoped>
.importInfo {
  display: flex;
  justify-content: center;
}
</style>