<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-row :gutter="20">
        <el-form-item label="考核年度:">
          <el-date-picker style="width: 100%;" v-model="form.khnd" type="year" placeholder="选择年度" format="yyyy年" value-format="yyyy">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="状 态:">
          <el-input v-model="form.zt" placeholder="请输入状态"></el-input>
        </el-form-item>
        <el-form-item label="部 门:">
          <el-input v-model="form.bm" placeholder="请输入部门"></el-input>
        </el-form-item>
        <el-form-item label="姓 名:">
          <el-input v-model="form.xm" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="绩效目标:">
          <el-input v-model="form.jxmb" placeholder="请输入绩效目标"></el-input>
        </el-form-item>
        <el-form-item label="直接领导:">
          <el-input v-model="form.zjld" placeholder="请输入直接领导"></el-input>
        </el-form-item>
        <el-form-item label="总得分(自评):">
          <el-input v-model="form.zdfzp" placeholder="请输入总得分(自评)"></el-input>
        </el-form-item>
        <el-form-item label="直接领导评分:">
          <el-input v-model="form.zjldpf" placeholder="请输入直接领导评分"></el-input>
        </el-form-item>
        <el-form-item label="部门总监评分:">
          <el-input v-model="form.bmzjpf" placeholder="请输入部门总监评分"></el-input>
        </el-form-item>
        <el-form-item label="绩效得分:">
          <el-input v-model="form.jxdf" placeholder="请输入绩效得分"></el-input>
        </el-form-item>
        <el-form-item label="面谈时间:">
          <el-date-picker style="width: 100%;" v-model="form.mtsj" type="datetime" placeholder="选择日期时间" format="MM月dd日 HH:mm" value-format="MM-dd HH:mm">
          </el-date-picker>
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
      // this.form = this.editList
      // console.log(this.form, 'form')
      this.form = JSON.parse(JSON.stringify(this.editList))
    }
  },
  methods: {}
}
</script>

<style>
</style>