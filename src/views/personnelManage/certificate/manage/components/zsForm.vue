<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px" size="mini">
        <el-form-item label="所属员工:">
            <el-select style="width: 220px;" v-model="form.employeeName" placeholder="请选择所属员工">
                <el-option label="区域一" value="区域一"></el-option>
                <el-option label="区域二" value="区域二"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="员工号:">
            <el-input v-model="form.employeeId" style="width: 220px;"></el-input>
        </el-form-item>
        <el-form-item label="所属部门:">
            <el-select style="width: 220px;" v-model="form.dept" placeholder="请选择所属部门">
                <el-option label="部门一" value="部门一"></el-option>
                <el-option label="部门二" value="部门二"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="职位:">
            <el-input v-model="form.position" style="width: 220px;"></el-input>
        </el-form-item>
        <el-form-item label="证书类别:">
            <el-select style="width: 220px;" v-model="form.certificateType" placeholder="请选择证书类别">
                <el-option label="类别一" value="类别一"></el-option>
                <el-option label="类别二" value="类别二"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="特别关注证书:">
            <el-radio-group style="width: 220px;" v-model="form.specialAttention">
                <el-radio :label="1">是</el-radio>
                <el-radio :label="0">否</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="特殊工种类型:">
            <el-select style="width: 220px;" v-model="form.specialWorkType" placeholder="请选择特殊工种类型">
                <el-option label="类型一" value="类型一"></el-option>
                <el-option label="类型二" value="类型二"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="证书摘要:">
            <el-input v-model="form.certificateSummary" style="width: 220px;"></el-input>
        </el-form-item>
        <el-form-item label="证书名称:">
            <el-input v-model="form.certificateName" style="width: 220px;"></el-input>
        </el-form-item>
        <el-form-item label="发证单位:">
            <el-input v-model="form.issuingAuthority" style="width: 220px;"></el-input>
        </el-form-item>
        <el-form-item label="发证日期:">
            <el-date-picker
                v-model="form.issueDate"
                type="date"
                value-format="yyyy-MM-dd"
                style="width: 220px;"
                placeholder="选择日期">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="是否长期:">
            <el-radio-group v-model="form.isPermanent" style="width: 220px;">
                <el-radio :label="1">是</el-radio>
                <el-radio :label="0">否</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="有效期截止日:" style="width: 220px;">
            <el-date-picker
                v-model="form.expiryDate"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择日期">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="证书PDF:">
            <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-change="handleChange"
                :file-list="fileList">
                <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    name:'zsForm',
    props:["editForm"],
    data() {
        return {
            form:{},
            fileList:[]
        }
    },
    created() {
        if(this.editForm) {
            this.form = JSON.parse(JSON.stringify(this.editForm))
            this.form.tsgzzs = JSON.parse(JSON.stringify(this.editForm.tsgzzs=== "是" ? 1:0))
            this.form.sfcq =JSON.parse(JSON.stringify(this.editForm.sfcq=== "是" ? 1:0)) 
        }
    },
    methods: {
        handleChange(){}
    }
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