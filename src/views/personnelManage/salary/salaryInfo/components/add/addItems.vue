<template>
  <div class="dialog">
    <el-tag class="dialog-tag">增项</el-tag>
    <el-form label-width="130px" :model="conPhoneData" size="small">
      <el-row :gutter="20">
        <el-col :span="8">
          <div>
            <el-form-item label="奖金:">
              <el-input v-model="conPhoneData.name"></el-input>
            </el-form-item>
            <el-form-item label="加班费:">
              <el-input v-model="conPhoneData.name"></el-input>
            </el-form-item>
            <el-form-item label="其他增项:">
              <el-input v-model="conPhoneData.name"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="提成:">
              <el-input v-model="conPhoneData.name"></el-input>
            </el-form-item>
            <el-form-item label="值备班:">
              <el-input v-model="conPhoneData.foreign"></el-input>
            </el-form-item>
            <el-form-item label="增项合计:">
              <el-input v-model="conPhoneData.foreign"></el-input>
            </el-form-item>

          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="高温费:">
              <el-input v-model="conPhoneData.name"></el-input>
            </el-form-item>
            <el-form-item label="补发:">
              <el-input v-model="conPhoneData.foreign"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
    </el-form>

  </div>
</template>

<script>


export default {
  name: "AddItems",
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