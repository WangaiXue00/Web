<template>
  <div class="dialog">
    <el-form label-width="170px" :model="personalData" size="small">
      <el-row :gutter="20">
        <el-col :span="8">
          <div>
            <el-form-item label="申请人:">
              <el-input v-model="personalData.xm" placeholder="离职"></el-input>
            </el-form-item>
            <el-form-item label="申请日期:">
              <el-date-picker v-model="personalData.sqrq" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="交接人:">
              <el-input v-model="personalData.jjr"></el-input>
            </el-form-item>
            <!-- <el-form-item label="审批流程:">
              <el-select v-model="value" placeholder="请选择" style="width: 100%;">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item> -->
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="工 号:">
              <el-input v-model="personalData.gh"></el-input>
            </el-form-item>
            <el-form-item label="入职日期:">
              <el-date-picker v-model="personalData.rzrq" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="所属部门:">
              <el-input v-model="personalData.ssbm"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="职位:">
              <el-input v-model="personalData.zw"></el-input>
            </el-form-item>
            <el-form-item label="离职日期:">
              <el-date-picker v-model="personalData.lzrq" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="离职表PDF:">
              <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" multiple>
                <i class="el-icon-upload2" style="font-size: 35px; color: #1890ff; font-weight: 600;"></i>
              </el-upload>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>


export default {
  name: "Apply",
  props: ['editList'],
  data() {
    return {
      personalData: {},
      options: [{
        value: '无需审批',
        label: '无需审批'
      }, {
        value: '调岗审批',
        label: '调岗审批'
      }, {
        value: '转正审批',
        label: '转正审批'
      }],
    }
  },
  created() {
    if (this.editList) {
      this.personalData = this.editList
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-form-item__label {
  font-size: 16px;
  font-weight: 540;
}

.el-form-item--small {
  margin-bottom: 25px;
}
</style>