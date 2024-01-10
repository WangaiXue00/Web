<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-row :gutter="20">
        <!-- <el-form-item label="考核年度:">
          <el-date-picker v-model="form.khnd" type="year" placeholder="选择年" format="yyyy年" value-format="yyyy">
          </el-date-picker>
        </el-form-item> -->
        <el-form-item label="设备编号:">
          <el-input v-model="form.sbbh" placeholder="请输入设备编号"></el-input>
        </el-form-item>
        <el-form-item label="所属医院:">
          <el-input v-model="form.ssyy" placeholder="请输入所属医院"></el-input>
        </el-form-item>
        <el-form-item label="设备名称:">
          <el-input v-model="form.sbmc" placeholder="请输入设备名称"></el-input>
        </el-form-item>
        <el-form-item label="规格型号:">
          <el-input v-model="form.ggxh" placeholder="请输入规格型号"></el-input>
        </el-form-item>

        <el-form-item label="计量类型:">
          <el-input v-model="form.jllx" placeholder="请输入计量类型"></el-input>
        </el-form-item>
        <el-form-item label="强调周期:">
          <el-input v-model="form.qdzq" placeholder="请输入强调周期"></el-input>
        </el-form-item>
        <el-form-item label="设备序列号:">
          <el-input v-model="form.sbxlh" placeholder="请输入设备序列号"></el-input>
        </el-form-item>
        <el-form-item label="生产厂商:">
          <el-input v-model="form.sccs" placeholder="请输入生产厂商"></el-input>
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