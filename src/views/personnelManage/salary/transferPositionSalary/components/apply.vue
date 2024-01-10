<template>
  <div class="dialog">
    <el-form label-width="170px" :model="personalData" size="small">
      <el-row :gutter="20">
        <el-col :span="8">
          <div>
            <el-form-item label="申请人:">
              <el-input v-model="personalData.xm"></el-input>
            </el-form-item>
            <el-form-item label="入职时间:">
              <el-date-picker v-model="personalData.rzsj" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="调整前职位:">
              <el-input v-model="personalData.tzqzw"></el-input>
            </el-form-item>
            <el-form-item label="调整后薪资:">
              <el-input v-model="personalData.tzhxz"></el-input>
            </el-form-item>
            <el-form-item label="审批流程:">
              <el-input v-model="personalData.splc"></el-input>
            </el-form-item>

          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="员工号:">
              <el-input v-model="personalData.ygh"></el-input>
            </el-form-item>
            <el-form-item label="调整前部门:">
              <el-input v-model="personalData.tzqbm"></el-input>
            </el-form-item>
            <el-form-item label="调整后职位:">
              <el-input v-model="personalData.tzhzw"></el-input>
            </el-form-item>
            <el-form-item label="调薪百分比:">
              <el-input v-model="personalData.txbfb"></el-input>
            </el-form-item>
            <el-form-item label="备注:">
              <el-input v-model="personalData.bz"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="申请日期:">
              <el-date-picker v-model="personalData.sqrq" type="date" value-format="yyyy-MM-dd" placeholder="选择日期"
                style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="调整后部门:">
              <el-input v-model="personalData.tzhbm"></el-input>
            </el-form-item>
            <el-form-item label="调整前薪资:">
              <el-input v-model="personalData.tzqxz"></el-input>
            </el-form-item>
            <el-form-item label="申请说明:">
              <el-input v-model="personalData.sqsm"></el-input>
            </el-form-item>
            <el-form-item label="相关附件:">
              <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" multiple>
                <i class="el-icon-upload2" style="font-size: 35px; color: #1890ff; font-weight: 600;"></i>
              </el-upload>
            </el-form-item>

          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>


export default {
  name: "Apply",
  data() {
    return {
      form: {},
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
  font-size: 16px;
  font-weight: 540;
}

.el-form-item--small {
  margin-bottom: 25px;
}
</style>