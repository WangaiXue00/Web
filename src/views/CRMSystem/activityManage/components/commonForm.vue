<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px" size="small">
      <el-row :gutter="20">
        <el-col :span="12">
          <div>
            <el-form-item label="活动名称：">
              <el-input v-model="form.hdmc"></el-input>
            </el-form-item>
            <el-form-item label="参与人员：">
              <el-input v-model="form.cyry"></el-input>
            </el-form-item>
            <el-form-item label="开始时间：">
              <el-date-picker style="width: 100%;" v-model="kssj" type="datetime" placeholder="选择日期时间">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="浏览数：">
              <el-input v-model="form.lrs"></el-input>
            </el-form-item>
            <el-form-item label="活动预算：">
              <el-input v-model="form.hdys"></el-input>
            </el-form-item>
            <el-form-item label="活动简介：">
              <el-input type="textarea" v-model="form.hdjj"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div>
            <el-form-item label="关联对象：">
              <el-select style="width: 100%;" v-model="form.gldx">
                <el-option label="客户" value="客户"></el-option>
                <el-option label="线索" value="线索"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动类型：">
              <el-select style="width: 100%;" v-model="form.hdlx">
                <el-option label="广告" value="广告"></el-option>
                <el-option label="营销" value="营销"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="截止时间：">
              <el-date-picker style="width: 100%;" v-model="jzsj" type="datetime" placeholder="选择日期时间">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="提交数：">
              <el-input v-model="form.tjs"></el-input>
            </el-form-item>
            <el-form-item label="活动地址：">
              <el-input v-model="form.hddz"></el-input>
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
  props: ['editForm'],
  data() {
    return {
      form: {}
    }
  },
  created() {
    if (this.editForm) {
      this.form = this.editForm
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
::v-deep .el-form-item__label {
  font-size: 14px;
  font-weight: 500;
}
::v-deep .el-form-item {
  margin-bottom: 8px;
}
</style>