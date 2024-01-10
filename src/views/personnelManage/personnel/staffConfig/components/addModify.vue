<template>
  <div class="dialog">
    <el-form label-width="170px" :model="personalData" size="small">
      <el-row :gutter="20">
        <el-col :span="8">
          <div>
            <el-form-item label="申请人:">
              <el-input v-model="personalData.sqr"></el-input>
            </el-form-item>
            <el-form-item label="调动人:">
              <el-input v-model="personalData.ddr"></el-input>

            </el-form-item>
            <el-form-item label="调动后部门:">
              <el-input v-model="personalData.ddhbm"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="工 号:">
              <el-input v-model="personalData.ygh"></el-input>
            </el-form-item>
            <el-form-item label="原部门:">
              <el-input v-model="personalData.ybm"></el-input>
            </el-form-item>
            <el-form-item label="调动后领导:">
              <el-input v-model="personalData.ddhld"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="申请日期:">
              <el-date-picker v-model="personalData.sqrq" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="原部门领导:">
              <el-input v-model="personalData.yld"></el-input>
            </el-form-item>
            <el-form-item label="生效日期:">
              <el-date-picker v-model="personalData.sxrq" type="date" placeholder="选择日期" style="width: 100%;">
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
  name: "",
  props: ['editList'],
  data() {
    return {
      personalData: {},
    }
  },
  created() {
    if (this.editList) {
      this.personalData = this.editList
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-form-item__label {
  font-size: 16px;
  font-weight: 540;
}

.el-form-item--small {
  margin-bottom: 25px;
}
</style>