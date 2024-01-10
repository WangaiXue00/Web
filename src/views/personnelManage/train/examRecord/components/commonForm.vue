<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="课程名称">
        <el-input type="input" :rows="2" placeholder="请输入课程名称" v-model="form.courseName">
        </el-input>
      </el-form-item>
      <el-form-item label="所属分类">
        <el-input type="input" :rows="2" placeholder="请输入所属分类" v-model="form.category">
        </el-input>
      </el-form-item>
      <!-- <el-form-item label="所属分类">
        <el-select v-model="form.Sort" placeholder="请选择所属分类">
          <el-option label="工程师培训" value="1"></el-option>
          <el-option label="内训" value="2"></el-option>
          <el-option label="外训" value="3"></el-option>
          <el-option label="新员工培训" value="4"></el-option>
        </el-select>
      </el-form-item> -->

      <el-form-item label="参考人:">
        <el-input v-model="form.referencePerson" placeholder="请输入参考人"></el-input>
      </el-form-item>
      <el-form-item label="考试开始时间:">
        <el-date-picker style="width: 100%;" v-model="form.examStartTime" type="datetime" placeholder="选择日期时间"></el-date-picker>
      </el-form-item>

      <el-form-item label="考试结束时间:">
        <el-date-picker style="width: 100%;" v-model="form.examEndTime" type="datetime" placeholder="选择日期时间"></el-date-picker>
      </el-form-item>
      <el-form-item label="参考时长:">
        <el-input v-model="form.durationMinutes" placeholder="请输入参考时长"></el-input>
      </el-form-item>
      <el-form-item label="得分:">
        <el-input v-model="form.score" placeholder="请输入得分"></el-input>
      </el-form-item>
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