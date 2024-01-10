<template>
  <div class="dialog">
    <el-tag class="dialog-tag">代扣</el-tag>
    <el-form label-width="140px" :model="EmpInfoData" size="small">
      <el-row :gutter="20">
        <el-col :span="8">
          <div>
            <el-form-item label="社保个人缴纳部分:">
              <el-input v-model="EmpInfoData.name"></el-input>
            </el-form-item>
            <el-form-item label="公积金公司缴纳部分:">
              <el-input v-model="EmpInfoData.employee"></el-input>
            </el-form-item>

          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="社保公司缴纳部分:">
              <el-input v-model="EmpInfoData.employee"></el-input>
            </el-form-item>
            <el-form-item label="个人所得税:">
              <el-input v-model="EmpInfoData.employee"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="公积金个人缴纳部分:">
              <el-input v-model="EmpInfoData.employee"></el-input>
            </el-form-item>
            <el-form-item label="个人代扣合计:">
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
  name: "DaiKou",
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