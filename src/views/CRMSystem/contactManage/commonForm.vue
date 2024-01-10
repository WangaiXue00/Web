<template>
  <div>
    <el-form ref="form" :model="form" label-width="100px">
        <el-row :gutter="20">
          <el-col :span="12"><div>
            <el-form-item label="姓名：">
              <el-input v-model="form.xm"></el-input>
            </el-form-item>
            <el-form-item label="客户名称：">
              <el-select
                v-model="form.khmc"
                placeholder="请选择所属客户"
                style="width: 100%;">
                <el-option label="客户一" value="客户一"></el-option>
                <el-option label="客户二" value="客户二"></el-option>
                <el-option label="客户三" value="客户三"></el-option>
                <el-option label="客户四" value="客户四"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="邮箱：">
              <el-input v-model="form.yx"></el-input>
            </el-form-item>
            <el-form-item label="部门 / 科室：">
              <el-select
                v-model="form.ssbm"
                placeholder="请选择所属部门/科室"
                style="width: 100%;">
                <el-option label="部门/科室一" value="部门/科室一"></el-option>
                <el-option label="部门/科室二" value="部门/科室二"></el-option>
                <el-option label="部门/科室三" value="部门/科室三"></el-option>
                <el-option label="部门/科室四" value="部门/科室四"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="关键决策人：">
              <el-radio v-model="form.gjjcr" label="是">是</el-radio>
              <el-radio v-model="form.gjjcr" label="否">否</el-radio>
            </el-form-item>
          </div></el-col>
          <el-col :span="12"><div>
            <el-form-item label="性别：">
              <el-radio-group v-model="form.xb">
                <el-radio label="男">男</el-radio>
                <el-radio label="女">女</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="手机号：">
              <el-input v-model="form.sjh"></el-input>
            </el-form-item>
            <el-form-item label="地址：">
              <el-input v-model="form.dz"></el-input>
            </el-form-item>
            <el-form-item label="职务：">
              <el-input v-model="form.zw"></el-input>
            </el-form-item>
          </div></el-col>
        </el-row>
      </el-form>
  </div>
</template>

<script>
export default {
    props:["editForm"],
    data() {
      return {
        form: {
          xm: '',
          khmc: '',
          yx: '',
          ssbm: '',
          gjjcr: '',
          xb: '',
          sjh: '',
          dz: '',
          zw: ''
        }
      }
    },
    created() {
        if(this.editForm){
          console.log(this.editForm)
          this.form = this.editForm
        }
    }
}
</script>

<style>

</style>