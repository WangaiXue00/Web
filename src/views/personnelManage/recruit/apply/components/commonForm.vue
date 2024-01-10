<template>
    <div>
      <el-form ref="form" :model="form" label-width="120px" size="small">
          <el-row :gutter="20">
              <el-col :span="12">
                  <div class="grid-content bg-purple">
                    <el-form-item label="所属计划:">
                          <el-select v-model="form.ssjh" placeholder="请选择所属计划" style="width: 100%;">
                              <el-option label="计划一" value="计划一"></el-option>
                              <el-option label="计划二" value="计划二"></el-option>
                          </el-select>
                      </el-form-item>
                      <el-form-item label="职位名称:">
                          <el-input v-model="form.zwmc" placeholder="请输入职位名称"></el-input>
                      </el-form-item>
                      <el-form-item label="岗位序列:">
                          <el-select v-model="form.gwxl" placeholder="请选择岗位序列" style="width: 100%;">
                              <el-option label="岗位一" value="岗位一"></el-option>
                              <el-option label="岗位二" value="岗位二"></el-option>
                          </el-select>
                      </el-form-item>
                      <el-form-item label="所属年份:">
                        <el-date-picker
                            v-model="form.ssnf"
                            type="year"
                            style="width: 100%;"
                            value-format="yyyy"
                            placeholder="选择所属年份">
                        </el-date-picker>
                      </el-form-item>
                      <el-form-item label="申请人数:">
                          <el-input v-model="form.sqrs" placeholder="请输入申请人数"></el-input>
                      </el-form-item>
                      <el-form-item label="所属部门:">
                          <el-select v-model="form.ssbm" placeholder="请选择所属部门" style="width: 100%;">
                              <el-option label="部门一" value="部门一"></el-option>
                              <el-option label="部门二" value="部门二"></el-option>
                          </el-select>
                      </el-form-item>
                  </div>
              </el-col>
              <el-col :span="12">
                  <div class="grid-content bg-purple">
                      <el-form-item label="申请人:">
                          <el-select v-model="form.sqr" filterable placeholder="请选择申请人" style="width: 100%;">
                              <el-option label="申请人一" value="申请人一"></el-option>
                              <el-option label="申请人二" value="申请人二"></el-option>
                          </el-select>
                      </el-form-item>
                      <el-form-item label="申请日期:">
                          <el-date-picker
                              style="width: 100%;"
                              v-model="form.sqrq"
                              type="date"
                              value-format="yyyy-MM-dd"
                              placeholder="选择日期">
                          </el-date-picker>
                      </el-form-item>
                      <el-form-item label="直接领导:">
                          <el-select v-model="form.zjld" filterable placeholder="请选择直接领导" style="width: 100%;">
                              <el-option label="领导一" value="领导一"></el-option>
                              <el-option label="领导二" value="领导二"></el-option>
                          </el-select>
                      </el-form-item>
                      <el-form-item label="工作地点:">
                          <el-input v-model="form.gzdd" placeholder="请输入工作地点"></el-input>
                      </el-form-item>
                      <el-form-item label="期望到岗日期:">
                          <el-date-picker
                              style="width: 100%;"
                              v-model="form.qwdgrq"
                              type="date"
                              value-format="yyyy-MM-dd"
                              placeholder="选择日期">
                          </el-date-picker>
                      </el-form-item>
                      <el-form-item label="审批流程:">
                          <el-select v-model="form.splc" filterable placeholder="请选择审批流程" style="width: 100%;">
                              <el-option label="审批流程一" value="shanghai"></el-option>
                              <el-option label="审批流程二" value="beijing"></el-option>
                          </el-select>
                      </el-form-item>
                  </div>
              </el-col>
          </el-row>
          <el-form-item label="岗位职责:">
              <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="请输入内容"
                  v-model="form.gwzz">
              </el-input>
          </el-form-item>
          <el-form-item label="任职要求:">
              <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="请输入内容"
                  v-model="form.rzyq">
              </el-input>
          </el-form-item>
          <el-form-item label="备 注:">
              <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="请输入内容"
                  v-model="form.bz">
              </el-input>
          </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script>
  export default {
      name:"commonForm",
      props:["editList"],
      data() { 
          return {
              form:{}
          }
      },
      created() { 
          if(this.editList) { 
              this.form = JSON.parse(JSON.stringify(this.editList))
              console.log(this.form,'form')
          }
      },
      methods: {
      }
  }
  </script>
  
  <style scoped lang="scss">
  ::v-deep .el-form-item__label {
    font-size: 13px;
    font-weight: 500;
}
::v-deep .el-form-item {
    margin-bottom: 8px;
}
  </style>