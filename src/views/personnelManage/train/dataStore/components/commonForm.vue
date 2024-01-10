<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="资料名称">
        <el-input type="input" :rows="2" placeholder="请输入资料名称" v-model="form.name">
        </el-input>
      </el-form-item>
      <el-form-item label="资料分类:">
        <el-input type="input" :rows="2" placeholder="请输入资料分类" v-model="form.category">
        </el-input>
      </el-form-item>
      <el-form-item label="添加人">
        <el-input type="input" :rows="2" placeholder="请输入添加人" v-model="form.createUser">
        </el-input>
      </el-form-item>
      <el-form-item label="添加时间">
        <el-date-picker style="width: 100%;" v-model="form.createTime" type="datetime" placeholder="选择日期时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="资料说明:">
        <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="form.note">
        </el-input>
      </el-form-item>

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