<template>
  <div class="dialog">
    <el-form label-width="170px" :model="personalData" size="small">
      <el-row :gutter="20">
        <el-col :span="8">
          <div>
            <el-form-item label="姓 名:">
              <el-input v-model="personalData.xm"></el-input>
            </el-form-item>
            <el-form-item label="调整前部门:">
              <el-input v-model="personalData.tzqbm"></el-input>
            </el-form-item>
            <el-form-item label="调整前序列:">
              <el-input v-model="personalData.tzqxl"></el-input>
            </el-form-item>
            <el-form-item label="调整前职位:">
              <el-input v-model="personalData.tzhzw"></el-input>
            </el-form-item>
            <el-form-item label="调整前职级:">
              <el-input v-model="personalData.tzqzj"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="工 号:">
              <el-input v-model="personalData.gh"></el-input>
            </el-form-item>
            <el-form-item label="调整后部门:">
              <el-input v-model="personalData.tzhbm"></el-input>
            </el-form-item>
            <el-form-item label="调整后序列:">
              <el-input v-model="personalData.tzhxl"></el-input>
            </el-form-item>
            <el-form-item label="调整后职位:">
              <el-input v-model="personalData.tzhzw"></el-input>
            </el-form-item>
            <el-form-item label="调整后职级:">
              <el-input v-model="personalData.tzhzj"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="申请日期:">
              <el-date-picker v-model="personalData.sqrq" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="入职日期:">
              <el-date-picker v-model="personalData.rzrq" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="调整生效日期:">
              <el-date-picker v-model="personalData.tzsxrq" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="交接人:">
              <el-input v-model="personalData.jjr"></el-input>
            </el-form-item>
            <el-form-item label="审批流程:">
              <el-select v-model="personalData.splc" placeholder="请选择" style="width: 100%;">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="16">
          <el-form-item label="调整详情:">
            <el-input type="textarea" :rows="1" v-model="personalData.tzxq">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="调岗协议PDF:">
            <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" multiple>
              <i class="el-icon-upload2" style="font-size: 35px; color: #1890ff; font-weight: 600;"></i>
            </el-upload>
          </el-form-item>
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