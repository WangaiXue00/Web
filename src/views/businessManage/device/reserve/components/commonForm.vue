<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-row :gutter="20">
        <!-- <el-form-item label="考核年度:">
          <el-date-picker v-model="form.khnd" type="year" placeholder="选择年" format="yyyy年" value-format="yyyy">
          </el-date-picker>
        </el-form-item> -->
        <el-form-item label="系统编号:">
          <el-input v-model="form.xtbh" placeholder="请输入系统编号"></el-input>
        </el-form-item>
        <el-form-item label="设备名称:">
          <el-input v-model="form.sbmc" placeholder="请输入设备名称"></el-input>
        </el-form-item>
        <el-form-item label="设备型号:">
          <el-input v-model="form.sbxh" placeholder="请输入设备型号"></el-input>
        </el-form-item>
        <el-form-item label="二级类别:">
          <el-input v-model="form.ejlb" placeholder="请输入二级类别"></el-input>
        </el-form-item>

        <el-form-item label="设备品牌:">
          <el-input v-model="form.sbpp" placeholder="请输入设备品牌"></el-input>
        </el-form-item>
        <el-form-item label="保管负责人:">
          <el-input v-model="form.bgfzr" placeholder="请输入保管负责人"></el-input>
        </el-form-item>
        <el-form-item label="负责人电话:">
          <el-input v-model="form.fzrdh" placeholder="请输入负责人电话"></el-input>
        </el-form-item>
        <el-form-item label="购买时间:">
          <el-input v-model="form.gmsj" placeholder="请输入购买时间"></el-input>
        </el-form-item>
        <el-form-item label="存放地点:">
          <el-input v-model="form.cfdd" placeholder="请输入存放地点"></el-input>
        </el-form-item>
        <el-form-item label="设备状态:">
          <el-input v-model="form.sbzt" placeholder="请输入设备状态"></el-input>
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