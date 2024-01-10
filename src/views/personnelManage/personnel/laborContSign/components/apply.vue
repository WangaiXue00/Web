<template>
  <div class="dialog">
    <el-form label-width="170px" :model="labortContData" size="small">
      <el-row :gutter="20">
        <el-col :span="8">
          <div>
            <el-form-item label="申请人:">
              <el-input v-model="labortContData.xm"></el-input>
            </el-form-item>
            <el-form-item label="劳动合同职位:">
              <el-input v-model="labortContData.htzw"></el-input>
            </el-form-item>
            <el-form-item label="劳动合同类型:">
              <el-input v-model="labortContData.htlx"></el-input>
            </el-form-item>
            <el-form-item label="劳动合同结束日期:">
              <el-date-picker v-model="labortContData.htjsrq" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="试用期开始日期:">
              <el-date-picker v-model="labortContData.syqksrq" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="劳动合同试用期薪资:">
              <el-input v-model="labortContData.htsyqxz"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="工 号:">
              <el-input v-model="labortContData.ygh"></el-input>
            </el-form-item>
            <el-form-item label="业务部门:">
              <el-input v-model="labortContData.ywbm"></el-input>
            </el-form-item>
            <el-form-item label="劳动合同期限:">
              <el-input v-model="labortContData.htqx"></el-input>
            </el-form-item>
            <el-form-item label="劳动合同试用期期限:">
              <el-input v-model="labortContData.htsyqx"></el-input>
            </el-form-item>
            <el-form-item label="试用期结束日期:">
              <el-date-picker v-model="labortContData.syqjsrq" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="劳动合同签订次数:">
              <el-input v-model="labortContData.htqdcs"></el-input>
            </el-form-item>

          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="申请日期:">
              <el-date-picker v-model="labortContData.sqsj" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="入职日期:">
              <el-date-picker v-model="labortContData.rzsj" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="劳动合同所属公司:">
              <el-input v-model="labortContData.ssgs"></el-input>
            </el-form-item>
            <el-form-item label="劳动合同开始日期:">
              <el-date-picker v-model="labortContData.htksrq" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="劳动合同转正日期:">
              <el-date-picker v-model="labortContData.htzzrq" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="劳动合同正式薪资:">
              <el-input v-model="labortContData.htzsxz"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-form-item label="备 注:">
        <el-input type="textarea" :rows="1" v-model="labortContData.bz" style="width: 50%;">
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>


export default {
  name: "Apply",
  props: ['editList'],
  data() {
    return {
      labortContData: {}
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