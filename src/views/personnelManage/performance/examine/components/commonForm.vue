<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-row :gutter="20">
        <el-form-item label="姓 名:">
          <el-input v-model="form.xm" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="业务部门:">
          <el-input v-model="form.bm" placeholder="请输入业务部门"></el-input>
        </el-form-item>
        <el-form-item label="直接领导:">
          <el-input v-model="form.zjld" placeholder="请输入直接领导"></el-input>
        </el-form-item>
        <el-form-item label="绩效目标:">
          <el-input v-model="form.jxmb" placeholder="请输入绩效目标"></el-input>
        </el-form-item>
        <el-form-item label="2023绩效得分:">
          <el-input v-model="form.jxdf" placeholder="请输入绩效得分"></el-input>
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
      console.log(this.form, 'form')
    }
  },
  methods: {}
}
</script>

<style>
</style>