<template>
  <div class="dialog">
    <el-tag class="dialog-tag">减项</el-tag>
    <el-form label-width="130px" :model="EmpInfoData" size="small">
      <el-row :gutter="20">
        <el-col :span="8">
          <div>
            <el-form-item label="事假:">
              <el-input v-model="EmpInfoData.name"></el-input>
            </el-form-item>
            <el-form-item label="减项合计:">
              <el-input v-model="EmpInfoData.employee"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="病假:">
              <el-input v-model="EmpInfoData.employee"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="其他扣款:">
              <el-input v-model="EmpInfoData.employee"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
    </el-form>

  </div>
</template>

<script>


export default {
  name: "ReduceItems",
  data() {
    return {
      EmpInfoData: {
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