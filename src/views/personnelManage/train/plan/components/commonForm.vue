<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="培训编号:">
              <el-input  v-model="form.planid" placeholder="请输入培训编号"></el-input>
            </el-form-item>
            <el-form-item label="培训单位/部门:">
              <el-input  v-model="form.dept" placeholder="请输入培训单位/部门"></el-input>
            </el-form-item>
            <el-form-item label="培训项目:">
              <el-input  v-model="form.program" placeholder="请输入培训项目"></el-input>
            </el-form-item>
            <!-- <el-form-item label="是否必修课:">
              <el-radio v-model="form.Iscompulsory" label="1">是</el-radio>
              <el-radio v-model="form.Iscompulsory" label="2">否</el-radio>
            </el-form-item> -->
            <el-form-item label="是否必修课:">
              <el-input v-model="form.type" placeholder="是否必修课"></el-input>
            </el-form-item>
            <el-form-item label="起始时间:">
              <el-date-picker style="width: 100%;" v-model="form.begintime" type="date" placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="培训人数:">
              <el-input v-model="form.number" placeholder="请输入培训人数"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">

            <el-form-item label="培训老师:">
              <el-input v-model="form.teacher" placeholder="请输入培训老师"></el-input>
            </el-form-item>
            <el-form-item label="培训总费用:">
              <el-input v-model="form.money" placeholder="请输入培训总费用"></el-input>
            </el-form-item>
            <!-- <el-form-item label="培训状态:">
              <el-radio v-model="form.TrainState" label="1">正常</el-radio>
              <el-radio v-model="form.TrainState" label="2">停止</el-radio>
            </el-form-item> -->
            <el-form-item label="培训状态:">
              <el-input v-model="form.status" placeholder="培训状态"></el-input>
            </el-form-item>
            <el-form-item label="结束时间:">
              <el-date-picker style="width: 100%;" v-model="form.endtime" type="date" placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </div>
        </el-col>
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
      this.form = JSON.parse(JSON.stringify(this.editList))
      // console.log(this.form, 'form')
    }
  },
  methods: {}
}
</script>

<style>
</style>