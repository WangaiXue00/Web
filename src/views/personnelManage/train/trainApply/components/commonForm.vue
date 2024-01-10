<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="申请人:">
              <el-input  v-model="form.userName" placeholder="请输入申请人"></el-input>
            </el-form-item>
            <el-form-item label="所属部门:">
              <el-input v-model="form.dept" placeholder="请输入所属部门"></el-input>
            </el-form-item>
            <el-form-item label="申请时间:">
              <el-date-picker style="width: 100%;" v-model="form.time" type="date" placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="申请课程:">
              <el-input v-model="form.courseName" placeholder="请输入申请课程"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="培训单位:">
              <el-input v-model="form.unit" placeholder="请输入培训单位"></el-input>
            </el-form-item>
            <el-form-item label="培训费用:">
              <el-input v-model="form.money" placeholder="请输入培训费用"></el-input>
            </el-form-item>
            <el-form-item label="课程时间:">
              <el-date-picker style="width: 100%;" v-model="form.courseTime" type="date" placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="申请状态:">
              <el-input v-model="form.status" placeholder="申请状态"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
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