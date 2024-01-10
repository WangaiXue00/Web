<template>
  <div class="dialog">
    <el-form label-width="170px" :model="personalData" size="small">
      <el-row :gutter="20">
        <el-col :span="8">
          <div>
            <el-form-item label="姓 名:">
              <el-input v-model="personalData.xm"></el-input>
            </el-form-item>
            <el-form-item label="所属部门:">
              <el-select v-model="personalData.ywbm" placeholder="请选择" style="width: 100%;">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="惩奖方式:">
              <el-input v-model="personalData.jcfs"></el-input>
            </el-form-item>
            <el-form-item label="惩奖描述:">
              <el-input v-model="personalData.jcms"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="工 号:">
              <el-input v-model="personalData.ygh"></el-input>
            </el-form-item>
            <el-form-item label="惩奖类型:">
              <el-input v-model="personalData.jclx"></el-input>
            </el-form-item>
            <el-form-item label="惩奖事项:">
              <el-input v-model="personalData.jcsx"></el-input>
            </el-form-item>
            <el-form-item label="惩奖申请人:">
              <el-input v-model="personalData.jcsqr"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="入职日期:">
              <el-date-picker v-model="personalData.rzsj" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="惩奖日期:">
              <el-date-picker v-model="personalData.jcrq" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="奖金:">
              <el-input v-model="personalData.jj"></el-input>
            </el-form-item>
            <el-form-item label="惩奖PDF:">
              <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" multiple>
                <i class="el-icon-upload2" style="font-size: 35px; color: #1890ff; font-weight: 600;"></i>
              </el-upload>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <!-- <el-form-item label="调整描述:">
        <el-input type="textarea" :rows="1" v-model="personalData.remark" style="width: 50%;">
        </el-input>
      </el-form-item> -->
    </el-form>
  </div>
</template>

<script>


export default {
  name: "addModify",
  props: ["editList"],
  data() {
    return {
      personalData: {
      },
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