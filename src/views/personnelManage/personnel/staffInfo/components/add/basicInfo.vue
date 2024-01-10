<template>
  <div class="dialog">
    <el-tag class="dialog-tag">基本信息</el-tag>
    <el-form label-width="120px" :model="basicInfoData" size="small">
      <el-row :gutter="20">
        <el-col :span="8">
          <div>
            <el-form-item label="员工号:">
              <el-input v-model="basicInfoData.ygh"></el-input>
            </el-form-item>
            <el-form-item label="所属部门:">
              <el-input v-model="basicInfoData.ssbm"></el-input>
            </el-form-item>
            <el-form-item label="职位:">
              <el-input v-model="basicInfoData.zw"></el-input>
            </el-form-item>
            <el-form-item label="是否特殊工种:">
              <el-radio v-model="basicInfoData.sftsgz" label="1">是</el-radio>
              <el-radio v-model="basicInfoData.sftsgz" label="2">否</el-radio>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="姓名:">
              <el-input v-model="basicInfoData.xm"></el-input>
            </el-form-item>
            <el-form-item label="入职日期:">
              <el-date-picker v-model="basicInfoData.rzrq" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="职级:">
              <el-input v-model="basicInfoData.zj"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div style="">
            <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将照片文件拖到此处，或<em>点击上传</em></div>
              <!-- <div class="el-upload__tip" slot="tip">只能上传pdf文件，且不超过20MB</div> -->
            </el-upload>
          </div>
        </el-col>
      </el-row>
    </el-form>

  </div>
</template>

<script>


export default {
  name: "BasicInfo",
  data() {
    return {
      basicInfoData: {
        ygh: '',
        xm: '',
        ssbm: '',
        rzrq: '',
        zw: '',
        zj: '',
        sftsgz: '',
        // photo: ''
      }
    }
  },
  updated() {
    
  },
  methods: {
    submit() { 
        this.$emit("essentialTo",this.essentialForm)
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-form-item__label {
  font-size: 13px;
  font-weight: 500;
}

.el-form-item--small {
  margin-bottom: 6px;
}
</style>