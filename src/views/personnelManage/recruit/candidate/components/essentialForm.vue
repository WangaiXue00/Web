<template>
  <div>
    <el-tag class="dialog-tag">基本信息</el-tag>
    <el-form ref="form" label-width="120px" :model="formLabelAlign" :rules="rules" size="small">
        <el-row :gutter="20">
            <el-col :span="12">
                <div>
                    <el-form-item label="应聘职位:">
                        <el-input v-model="formLabelAlign.ypzw"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名:" prop="name">
                        <el-input v-model="formLabelAlign.name"></el-input>
                    </el-form-item>
                    <el-form-item label="性别:">
                        <el-radio v-model="formLabelAlign.sex" label="男">男</el-radio>
                        <el-radio v-model="formLabelAlign.sex" label="女">女</el-radio> 
                    </el-form-item>
                    <el-form-item label="出生日期:">
                        <el-date-picker
                            v-model="formLabelAlign.birthdate"
                            type="date"
                            style="width: 100%;"
                            value-format="yyyy-MM-dd"
                            placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="年龄:">
                        <el-input v-model="formLabelAlign.age"></el-input>
                    </el-form-item>
                    <el-form-item label="民族:">
                        <el-input v-model="formLabelAlign.minzu"></el-input>
                    </el-form-item>
                    <el-form-item label="学历:">
                        <el-input v-model="formLabelAlign.xueli"></el-input>
                    </el-form-item>
                </div>
            </el-col>
            <el-col :span="12">
                <div>
                    <el-form-item label="临时员工号:" prop="lsygh">
                        <el-input v-model="formLabelAlign.lsygh"></el-input>
                    </el-form-item>
                    <el-form-item label="预计入职日期:">
                        <el-date-picker
                            v-model="formLabelAlign.yjrzrq"
                            type="date"
                            style="width: 100%;"
                            value-format="yyyy-MM-dd"
                            placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="外语水平:">
                        <el-input v-model="formLabelAlign.waiyushuiping"></el-input>
                    </el-form-item>
                    <el-form-item label="电脑水平:">
                        <el-input v-model="formLabelAlign.diannaoshuiping"></el-input> 
                    </el-form-item>
                    <el-form-item label="是否需要宿舍:">
                        <el-radio v-model="formLabelAlign.sushe" label="1">是</el-radio>
                        <el-radio v-model="formLabelAlign.sushe" label="0">否</el-radio>
                    </el-form-item>
                    <el-form-item label="推荐人姓名：">
                        <el-input v-model="formLabelAlign.commendname"></el-input>
                    </el-form-item>
                    <el-form-item label="招聘渠道：">
                        <el-input v-model="formLabelAlign.zpqd"></el-input>
                    </el-form-item>
                </div>
            </el-col>
        </el-row>
        <el-form-item label="个人优势/自我评价:">
            <el-input
                type="textarea"
                :rows="2"
                v-model="formLabelAlign.comment">
            </el-input>
        </el-form-item>
        <el-form-item label="备 注:">
            <el-input
                type="textarea"
                :rows="1"
                v-model="formLabelAlign.note">
            </el-input>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    name: "essentialForm",
    data() {
        return {
            formLabelAlign:{},
            rules:{
                name:[{ required: true, message: '请输入候选人姓名', trigger: 'blur' }],
                lsygh:[{ required: true, message: '请输入候选人临时员工号', trigger: 'blur' }]
            }
        }
    },
    created() {
        this.formLabelAlign = {}
    },
    methods: {
        // submit() { 
        //     this.$emit("essentialTo",this.essentialForm)
        // }
        validate(callback) {
            this.$refs['form'].validate((valid) => {
                callback(valid)
            })
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