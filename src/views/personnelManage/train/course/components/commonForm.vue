<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px">

      <el-row :gutter="20">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <!-- <el-form-item label="所属分类">
              <el-select v-model="form.Sort" placeholder="请选择所属分类">
                <el-option label="工程师培训" value="1"></el-option>
                <el-option label="内训" value="2"></el-option>
                <el-option label="外训" value="3"></el-option>
                <el-option label="新员工培训" value="4"></el-option>
              </el-select>
            </el-form-item> -->
            <el-form-item label="课程名称">
              <el-input type="input" placeholder="请输入课程名称" v-model="form.courseName">
              </el-input>
            </el-form-item>
            <el-form-item label="所属分类">
              <el-input type="input" placeholder="请输入所属分类" v-model="form.classification">
              </el-input>
            </el-form-item>
            <!-- <el-form-item label="培训形式">
              <el-select v-model="form.TrainForm" placeholder="请选择培训形式">
                <el-option label="面授" value="1"></el-option>
                <el-option label="线上" value="2"></el-option>
                <el-option label="视频" value="3"></el-option>
                <el-option label="自习" value="4"></el-option>
                <el-option label="其他" value="5"></el-option>
              </el-select>
            </el-form-item> -->
            <el-form-item label="培训形式">
              <el-input type="input" placeholder="请输入培训形式" v-model="form.format">
              </el-input>
            </el-form-item>
            <el-form-item label="考核方式:">
              <el-input v-model="form.examination" placeholder="请输入考核方式"></el-input>
            </el-form-item>
            <el-form-item label="添加人:">
              <el-input v-model="form.createBy" placeholder="请输入添加人"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <!-- <el-form-item label="内/外部培训">
              <el-select v-model="form.InOrOut" placeholder="请选择内/外部培训">
                <el-option label="内部培训" value="1"></el-option>
                <el-option label="外部培训" value="2"></el-option>
              </el-select>
            </el-form-item> -->
            <el-form-item label="内/外部培训:">
              <el-input v-model="form.train" placeholder="请输入内/外部培训"></el-input>
            </el-form-item>
            <el-form-item label="章节数:">
              <el-input v-model="form.num" placeholder="请输入章节数"></el-input>
            </el-form-item>
            <el-form-item label="课程时长:">
              <el-input v-model="form.hour" placeholder="请输入课程时长"></el-input>
            </el-form-item>
            <el-form-item label="参与学习人员数:">
              <el-input v-model="form.stuNum" placeholder="请输入参与学习人员数"></el-input>
            </el-form-item>

            <el-form-item label="添加时间:">
              <el-date-picker style="width: 100%;" v-model="form.createTime" value-format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="选择添加时间">
              </el-date-picker>
            </el-form-item>

            <!-- <el-form-item label="考核方式">
              <el-select v-model="form.ExamineWay" placeholder="请选择考核方式">
                <el-option label="线上" value="1"></el-option>
                <el-option label="线下" value="2"></el-option>
                <el-option label="口试" value="3"></el-option>
                <el-option label="实操" value="4"></el-option>
                <el-option label="其他" value="5"></el-option>
              </el-select>
            </el-form-item> -->

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