<template>
  <div class="dialog">
    <el-tag class="dialog-tag">任职信息</el-tag>
    <el-form label-width="130px" :model="EmpInfoData" size="small">
      <el-row :gutter="20">
        <el-col :span="8">
          <div>
            <el-form-item label="任职状态:">
              <el-radio v-model="EmpInfoData.iss" label="1">在职</el-radio>
              <el-radio v-model="EmpInfoData.iss" label="2">离职</el-radio>
            </el-form-item>
            <el-form-item label="岗位序列:">
              <el-input v-model="EmpInfoData.name"></el-input>
            </el-form-item>
            <el-form-item label="招聘渠道:">
              <el-input v-model="EmpInfoData.employee"></el-input>
            </el-form-item>
            <el-form-item label="五险一金起始月:">
              <el-date-picker v-model="EmpInfoData.birth" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="招工日期:">
              <el-date-picker v-model="EmpInfoData.birth" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="离职日期:">
              <el-date-picker v-model="EmpInfoData.birth" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="工龄:">
              <el-input v-model="EmpInfoData.name"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="员工性质:">
              <el-input v-model="EmpInfoData.employee"></el-input>
            </el-form-item>
            <el-form-item label="岗位性质:">
              <el-input v-model="EmpInfoData.foreign"></el-input>
            </el-form-item>
            <el-form-item label="推荐人姓名:">
              <el-input v-model="EmpInfoData.computer"></el-input>
            </el-form-item>
            <el-form-item label="五险一金末次月:">
              <el-date-picker v-model="EmpInfoData.birth" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="退工日期:">
              <el-date-picker v-model="EmpInfoData.birth" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="离职类型:">
              <el-date-picker v-model="EmpInfoData.birth" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="司龄:">
              <el-input v-model="EmpInfoData.computer"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="直接领导:">
              <el-input v-model="EmpInfoData.employee"></el-input>
            </el-form-item>
            <el-form-item label="工作地:">
              <el-input v-model="EmpInfoData.foreign"></el-input>
            </el-form-item>
            <el-form-item label="宿舍地址:">
              <el-input v-model="EmpInfoData.computer"></el-input>
            </el-form-item>
            <el-form-item label="转正情况:">
              <el-radio v-model="EmpInfoData.zz" label="1">未转正</el-radio>
              <el-radio v-model="EmpInfoData.zz" label="2">已转正</el-radio>
            </el-form-item>
            <el-form-item label="是否住宿:">
              <el-radio v-model="EmpInfoData.is" label="1">是</el-radio>
              <el-radio v-model="EmpInfoData.is" label="2">否</el-radio>
            </el-form-item>
            <el-form-item label="是否宿舍长:">
              <el-radio v-model="EmpInfoData.ss" label="1">是</el-radio>
              <el-radio v-model="EmpInfoData.ss" label="2">否</el-radio>
            </el-form-item>
            <el-form-item label="离职原因:">
              <el-radio v-model="EmpInfoData.liz" label="1">离职</el-radio>
              <el-radio v-model="EmpInfoData.liz" label="2">转岗</el-radio>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-form-item label="离职备注:">
        <el-input type="textarea" :rows="2" v-model="EmpInfoData.remark" style="width: 60%;">
        </el-input>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>


export default {
  name: "EmpInfo",
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