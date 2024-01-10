<template>
  <div class="dialog">
    <div style="display: flex;justify-content: center;">
        <el-upload
            class="upload-demo"
            drag
            action="http://123.57.56.30:8080/system/info/add"
            :on-success="uploadSuccess"
            :multiple="false"
            :limit="1">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">单次只能上传一个pdf文件，且不超过20MB</div>
        </el-upload>
    </div>
    <!-- 基本信息 -->
    <essentialForm />
    <!-- 地址和联系方式 -->
    <addressForm />
    <!-- 学习经历 -->
    <educationalTable />
    <!-- 培训记录 -->
    <trainingTable />
    <!-- 工作经历 -->
    <occupationalTable />
    <!-- 项目经验 -->
    <projectTable />
    <!-- 各种证书 -->
    <certificateTable />
    <div class="dialog-footer">
        <el-button @click="dialogIsShow">取 消</el-button>
        <el-button type="primary" @click="dialogIsShow">确 定</el-button>
    </div>
  </div>
</template>

<script>
import addressForm from './addressForm.vue';
import essentialForm from './essentialForm.vue';
import educationalTable from './educationalTable.vue';
import certificateTable from './certificateTable.vue';
import occupationalTable from './occupationalTable.vue';
import projectTable from './projectTable.vue';
import trainingTable from './trainingTable.vue';

export default {
  components:{addressForm, essentialForm, educationalTable,certificateTable,occupationalTable,projectTable,trainingTable},
  name: 'resume',
  data() {
    return {
      resumeVisible:false,
    }
  },
  methods: { 
    dialogIsShow() {
      this.$emit("isShow",this.resumeVisible)
    },
    uploadSuccess(response,file) {
      console.log("文件上传",response,file)
    }
  }
}
</script>

<style>
.dialog-footer {
  text-align: right;
  margin-top: 5px;
}
.dialog-tag {
  display: inline-block;
  margin: 10px;
}
</style>