<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="培训编号:">
        <el-input v-model="form.planid" placeholder="请输入培训编号"></el-input>
      </el-form-item>
      <el-form-item label="培训单位/部门:">
        <el-input v-model="form.dept" placeholder="请输入培训单位/部门">
        </el-input>
      </el-form-item>
      <el-form-item label="培训项目:">
        <el-input v-model="form.program" placeholder="请输入培训项目"></el-input>
      </el-form-item>
      <el-form-item label="是否必修课:">
        <el-input v-model="form.type" placeholder="请输入是否必修课"></el-input>
      </el-form-item>
      <el-form-item label="培训人数:">
        <el-input v-model="form.number" placeholder="请输入培训人数"></el-input>
      </el-form-item>
      <el-form-item label="培训讲师:">
        <el-input v-model="form.teacher" placeholder="请输入培训讲师"></el-input>
      </el-form-item>
      <el-form-item label="培训费用:">
        <el-input v-model="form.money" placeholder="请输入培训费用"></el-input>
      </el-form-item>
      <el-form-item label="开始时间:">
        <el-date-picker style="width: 100%;" v-model="form.begintime" type="datetime" placeholder="选择日期时间"></el-date-picker>
      </el-form-item>
      <el-form-item label="结束时间:">
        <el-date-picker style="width: 100%;" v-model="form.endtime" type="datetime" placeholder="选择日期时间"></el-date-picker>
      </el-form-item>
      <el-form-item label="培训状态:">
        <el-input v-model="form.status" placeholder="请输入培训状态"></el-input>
      </el-form-item>
      <!-- <el-form-item label="课程数:">
        <el-input v-model="form.CourseNum" placeholder="请输入课程数"></el-input>
      </el-form-item>
      <el-form-item label="已完成课程数:">
        <el-input v-model="form.CompletedNum" placeholder="请输入已完成课程数"></el-input>
      </el-form-item>
      <el-form-item label="未完成课程数:">
        <el-input v-model="form.UncompletedNum" placeholder="请输入未完成课程数"></el-input>
      </el-form-item>
      <el-form-item label="计划完成进度:">
        <el-input v-model="form.PlannedCompletionProgress" placeholder="请输入计划完成进度"></el-input>
      </el-form-item> -->
      <!-- <el-form-item label="备 注:">
        <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="form.Note">
        </el-input>
      </el-form-item> -->
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
      this.form = JSON.parse(JSON.stringify(this.editList))
    }
  },
  methods: {}
}
</script>

<style>
</style>