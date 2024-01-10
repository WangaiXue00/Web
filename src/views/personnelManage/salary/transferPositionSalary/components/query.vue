<template>
  <div>
    <el-form :model="Form" label-width="80px">
      <el-row :gutter="20">
        <el-col :span="4">
          <el-form-item label="职位:">
            <el-input v-model="Form"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="5">
          <el-form-item label="编号:">
            <el-input v-model="Form"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="5">
          <el-form-item label="序列:">
            <el-select v-model="Form" placeholder="请选择">
              <el-option label="岗位一" value="shanghai"></el-option>
              <el-option label="岗位二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="5">
          <el-form-item label="职级:">
            <el-select v-model="Form" placeholder="请选择">
              <el-option label="岗位一" value="shanghai"></el-option>
              <el-option label="岗位二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="隶属:">
            <el-select v-model="Form" placeholder="请选择">
              <el-option label="岗位一" value="shanghai"></el-option>
              <el-option label="岗位二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="26">
        <el-col :span="5">
          <el-form-item label="薪资区间:">
            <el-input v-model="Form"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="9">
          <el-form-item label="编制日期:">
            <el-date-picker type="date" placeholder="选择日期" v-model="form" style="width: 120px;"></el-date-picker>
            <span> - </span>

            <el-date-picker type="date" placeholder="选择时间" v-model="form" style="width: 120px;"></el-date-picker>

          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="职位状态:">
            <el-radio-group v-model="form">
              <el-radio label="启用"></el-radio>
              <el-radio label="停用"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-form-item>
          <el-button type="primary">查询</el-button>
          <el-button type="primary">重置查询</el-button>
        </el-form-item>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      from: ''
    }
  }
}
</script>

<style lang="scss" scoped></style>