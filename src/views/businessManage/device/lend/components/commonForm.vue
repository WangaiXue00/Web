<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-row :gutter="20">
        <!-- <el-form-item label="考核年度:">
          <el-date-picker v-model="form.khnd" type="year" placeholder="选择年" format="yyyy年" value-format="yyyy">
          </el-date-picker>
        </el-form-item> -->
        <el-form-item label="设备机编号:">
          <el-input v-model="form.sbjbh" placeholder="请输入设备机编号"></el-input>
        </el-form-item>
        <el-form-item label="设备名称:">
          <el-input v-model="form.sbmc" placeholder="请输入设备名称"></el-input>
        </el-form-item>
        <el-form-item label="设备型号:">
          <el-input v-model="form.sbxh" placeholder="请输入设备型号"></el-input>
        </el-form-item>
        <el-form-item label="借贷人:">
          <el-input v-model="form.jdr" placeholder="请输入借贷人"></el-input>
        </el-form-item>

        <el-form-item label="借贷人电话:">
          <el-input v-model="form.jdrdh" placeholder="请输入借贷人电话"></el-input>
        </el-form-item>
        <el-form-item label="出借时间:">
          <el-input v-model="form.cjsj" placeholder="请输入出借时间"></el-input>
        </el-form-item>
        <el-form-item label="是否归还:">
          <el-input v-model="form.sfgh" placeholder="请输入是否归还"></el-input>
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