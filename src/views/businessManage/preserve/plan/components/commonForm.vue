<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-row :gutter="20">
        <!-- <el-form-item label="考核年度:">
          <el-date-picker v-model="form.khnd" type="year" placeholder="选择年" format="yyyy年" value-format="yyyy">
          </el-date-picker>
        </el-form-item> -->
        <el-form-item label="计划编号:">
          <el-input v-model="form.jhbh" placeholder="请输入计划编号"></el-input>
        </el-form-item>
        <el-form-item label="计划名称:">
          <el-input v-model="form.jhmc" placeholder="请输入计划名称"></el-input>
        </el-form-item>
        <el-form-item label="计划状态:">
          <el-input v-model="form.jhzt" placeholder="请输入计划状态"></el-input>
        </el-form-item>
        <el-form-item label="客户名称:">
          <el-input v-model="form.khmc" placeholder="请输入客户名称"></el-input>
        </el-form-item>
        <el-form-item label="项目名称:">
          <el-input v-model="form.xmmc" placeholder="请输入项目名称"></el-input>
        </el-form-item>
        <el-form-item label="合同编号:">
          <el-input v-model="form.htbh" placeholder="请输入合同编号"></el-input>
        </el-form-item>
        <el-form-item label="合同开始日期:">
          <el-input v-model="form.htksrq" placeholder="请输入合同开始日期"></el-input>
        </el-form-item>
        <el-form-item label="合同结束日期:">
          <el-input v-model="form.htjsrq" placeholder="请输入合同结束日期"></el-input>
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
        <el-form-item label="规格型号:">
          <el-input v-model="form.ggxh" placeholder="请输入规格型号"></el-input>
        </el-form-item>
        <el-form-item label="序列号:">
          <el-input v-model="form.xlh" placeholder="请输入序列号"></el-input>
        </el-form-item>
        <el-form-item label="所属科室:">
          <el-input v-model="form.ssks" placeholder="请输入所属科室"></el-input>
        </el-form-item>
        <el-form-item label="计划负责人:">
          <el-input v-model="form.jhfzr" placeholder="请输入计划负责人"></el-input>
        </el-form-item>
        <el-form-item label="计划PM日期:">
          <el-input v-model="form.jhpmrq" placeholder="请输入计划PM日期"></el-input>
        </el-form-item>
        <el-form-item label="PM类型:">
          <el-input v-model="form.pmlx" placeholder="请输入PM类型"></el-input>
        </el-form-item>
        <el-form-item label="计划序数:">
          <el-input v-model="form.jhxs" placeholder="请输入计划序数"></el-input>
        </el-form-item>
        <el-form-item label="备注:">
          <el-input v-model="form.bz" placeholder="请输入备注"></el-input>
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
    if (this.editList) {
      this.form = this.editList

      // this.form = JSON.parse(JSON.stringify(this.editList))
    }
  },
  methods: {
    handleDelete(index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style>
</style>