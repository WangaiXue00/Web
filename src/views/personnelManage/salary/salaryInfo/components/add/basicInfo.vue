<template>
  <div class="dialog">
    <el-tag class="dialog-tag">基本信息</el-tag>
    <el-form label-width="120px" :model="basicInfoData" size="small">
      <el-row :gutter="20">
        <el-col :span="8">
          <div>
            <el-form-item label="姓名:">
              <el-input v-model="basicInfoData.employeeID"></el-input>
            </el-form-item>
            <el-form-item label="入职日期:">
              <el-input v-model="basicInfoData.DepName"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="员工号:">
              <el-input v-model="basicInfoData.Name"></el-input>
            </el-form-item>
            <el-form-item label="职位:">
              <el-date-picker v-model="basicInfoData.enrollDate" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="所属部门:">
              <el-input v-model="basicInfoData.Name"></el-input>
            </el-form-item>
            <el-form-item label="组别:">
              <el-date-picker v-model="basicInfoData.enrollDate" type="date" placeholder="选择日期" style="width: 100%;">
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
  name: "BasicInfo",
  data() {
    return {
      basicInfoData: {
        employeeID: '',
        Name: '',
        DepName: '',
        enrollDate: '',
        Position: '',
        Rank: '',
        specialSoldier: '',
        photo: ''
      }
    }
  },
  methods: {
    // submit() { 
    //     this.$emit("essentialTo",this.essentialForm)
    // }
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