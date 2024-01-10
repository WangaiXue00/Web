<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px" size="small">
      <el-row :gutter="20">
        <!-- <el-form-item label="考核年度:">
          <el-date-picker v-model="form.khnd" type="year" placeholder="选择年" format="yyyy年" value-format="yyyy">
          </el-date-picker>
        </el-form-item> -->
        <el-form-item label="服务单号:">
          <el-input v-model="form.fwdh" placeholder="请输入服务单号"></el-input>
        </el-form-item>
        <el-form-item label="当前状态:">
          <el-input v-model="form.dqzt" placeholder="请输入当前状态"></el-input>
        </el-form-item>
        <el-form-item label="标记:">
          <el-input v-model="form.bj" placeholder="请输入标记"></el-input>
        </el-form-item>
        <el-form-item label="报修时间:">
          <el-input v-model="form.bxsj" placeholder="请输入报修时间"></el-input>
        </el-form-item>
        <el-form-item label="处理时长:">
          <el-input v-model="form.clsc" placeholder="请输入处理时长"></el-input>
        </el-form-item>
        <el-form-item label="主承修人:">
          <el-input v-model="form.zcxr" placeholder="请输入主承修人"></el-input>
        </el-form-item>
        <el-form-item label="客户名称:">
          <el-input v-model="form.khmc" placeholder="请输入客户名称"></el-input>
        </el-form-item>
        <el-form-item label="报修人:">
          <el-input v-model="form.bxr" placeholder="请输入报修人"></el-input>
        </el-form-item>
        <el-form-item label="报修电话:">
          <el-input v-model="form.bxdh" placeholder="请输入报修电话"></el-input>
        </el-form-item>
        <el-form-item label="设备编号:">
          <el-input v-model="form.sbbh" placeholder="请输入设备编号"></el-input>
        </el-form-item>
        <el-form-item label="设备名称:">
          <el-input v-model="form.sbmc" placeholder="请输入设备名称"></el-input>
        </el-form-item>
        <el-form-item label="设备品牌:">
          <el-input v-model="form.sbpp" placeholder="请输入设备品牌"></el-input>
        </el-form-item>
        <el-form-item label="保修状态:">
          <el-input v-model="form.bxzt" placeholder="请输入保修状态"></el-input>
        </el-form-item>
        <el-form-item label="启用日期:">
          <el-input v-model="form.qyrq" placeholder="请输入启用日期"></el-input>
        </el-form-item>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'commonForm',
  props: ['editList'],
  data() {
    return {
      form: {}
    }
  },
  created() { 
        console.log(this.editList)
        if(this.editList) { 
            this.form =JSON.parse(JSON.stringify(this.editList)) 
            // console.log(this.form,'form')
        } else { 
          this.form= {
            fwdh: '',
            dqzt: '',
            bj: '',
            bxsj: '',

            clsc: '',
            zcxr: '',
            khmc: '',
            bxr: '',

            bxdh: '',
            sbbh: '',
            sbmc: '',
            sbpp: '',

            bxzt: '',
            qyrq: ''
          }
        }
    },
    methods: {
    }
}
</script>

<style scoped lang="scss">
::v-deep .el-form-item__label {
    font-size: 13px;
    font-weight: 500;
}
::v-deep .el-form-item {
    margin-bottom: 8px;
}
</style>