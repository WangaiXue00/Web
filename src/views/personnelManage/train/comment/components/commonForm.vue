<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-row :gutter="20">
        <el-form-item label="课程名称:">
          <el-input  v-model="form.coursename" placeholder="请输入课程名称"></el-input>
        </el-form-item>
        <!-- <el-form-item label="所属分类:">
          <el-input v-model="form.Categories" placeholder="请输入所属分类"></el-input>
        </el-form-item> -->
        <el-form-item label="培训形式:">
          <el-input v-model="form.type" placeholder="请输入培训形式"></el-input>
        </el-form-item>
        <!-- <el-form-item label="考核方式:">
          <el-input v-model="form.EvaluationMode" placeholder="请输入考核方式"></el-input>
        </el-form-item> -->

        <!-- <el-form-item label="内/外部培训:">
          <el-input v-model="form.InOrOut" placeholder="请输入内/外部培训"></el-input>
        </el-form-item> -->
        <el-form-item label="员工姓名:">
          <el-input v-model="form.userName" placeholder="请输入员工姓名"></el-input>
        </el-form-item>
        <el-form-item label="培训日期:">
          <el-date-picker style="width: 100%;" v-model="form.TrainDate" type="date" placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="评价时间:">
          <el-date-picker style="width: 100%;" v-model="form.evaluationTime" type="datetime" placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="评价内容:">
          <el-input v-model="form.evaluation" placeholder="请输入评价内容"></el-input>
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