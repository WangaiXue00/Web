<template>
  <div class="dialog">
    <el-tag class="dialog-tag">通讯信息</el-tag>
    <el-form label-width="130px" :model="conPhoneData" size="small">
      <el-row :gutter="20">
        <el-col :span="8">
          <div>
            <el-form-item label="手机号码:">
              <el-input v-model="conPhoneData.name"></el-input>
            </el-form-item>
            <el-form-item label="家庭固话:">
              <el-input v-model="conPhoneData.name"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="工作手机号:">
              <el-input v-model="conPhoneData.name"></el-input>
            </el-form-item>
            <el-form-item label="私人邮箱:">
              <el-input v-model="conPhoneData.foreign"></el-input>
            </el-form-item>

          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="工作座机:">
              <el-input v-model="conPhoneData.name"></el-input>
            </el-form-item>
            <el-form-item label="工作邮箱:">
              <el-input v-model="conPhoneData.foreign"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-form-item label="联系地址:">
        <el-input type="textarea" :rows="1" v-model="conPhoneData.remark" style="width: 50%;">
        </el-input>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>


export default {
  name: "ConPhone",
  data() {
    return {
      conPhoneData: {

      }
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-form-item__label {
  font-size: 13px;
  font-weight: 500;
}

.el-form-item--small {
  margin-bottom: 6px;
}
</style>