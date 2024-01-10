<template>
  <div class="dialog">
    <el-tag class="dialog-tag">基本薪资</el-tag>
    <el-form label-width="130px" :model="personalData" size="small">
      <el-row :gutter="20">
        <el-col :span="8">
          <div>
            <el-form-item label="标准薪资:">
              <el-radio v-model="personalData.sex" label="1">男</el-radio>
              <el-radio v-model="personalData.sex" label="2">女</el-radio>
            </el-form-item>
            <el-form-item label="工资月份:">
              <el-input v-model="personalData.age"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="增项合计:">
              <el-input v-model="personalData.nation"></el-input>
            </el-form-item>
            <el-form-item label="个人代扣合计:">
              <el-input v-model="personalData.sfzh"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="减项合计:">
              <el-input v-model="personalData.zzmm"></el-input>
            </el-form-item>
            <el-form-item label="实发工资:">
              <el-date-picker v-model="personalData.sfzyxq" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>


export default {
  name: "BasicSalary",
  data() {
    return {
      personalData: {
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