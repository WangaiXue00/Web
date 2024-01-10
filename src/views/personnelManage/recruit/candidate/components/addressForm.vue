<template>
  <div>
    <el-tag class="dialog-tag">地址和联系方式</el-tag>
    <el-form ref="form" :model="addressForm" label-width="100px" size="mini">
        <el-row :gutter="20">
            <el-col :span="12">
                <div>
                    <el-form-item label="手机号码:">
                        <el-input v-model="addressForm.phonenumber"></el-input>
                    </el-form-item>
                    <el-form-item label="私人邮箱:">
                        <el-input v-model="addressForm.email"></el-input>
                    </el-form-item>
                    <el-form-item label="现居地址:">
                        <el-input v-model="addressForm.address"></el-input>
                    </el-form-item>
                    <el-form-item label="户籍地址:">
                        <el-input v-model="addressForm.hujidizhi"></el-input>
                    </el-form-item>
                </div>
            </el-col>
            <el-col :span="12">
                <div>
                    <el-form-item label="户口性质：">
                        <el-input v-model="addressForm.hukouxingzhi"></el-input>
                    </el-form-item>
                    <el-form-item label="家庭固话：">
                        <el-input v-model="addressForm.addressphone"></el-input>
                    </el-form-item>
                    <el-form-item label="联系地址：">
                        <el-input v-model="addressForm.lianxidizhi"></el-input>
                    </el-form-item>
                    <el-form-item label="总工作年限：">
                        <el-input v-model="addressForm.workyear"></el-input>
                    </el-form-item>
                </div>
            </el-col>
        </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
    name:'addressForm',
    data() {
        return { 
            addressForm:{}
        }
    }
}
</script>

<style lang="scss" scoped>
::v-deep .el-form-item__label {
    font-size: 12px;
    font-weight: 500;
}
.el-form-item--mini {
    margin-bottom: 6px;
}
</style>