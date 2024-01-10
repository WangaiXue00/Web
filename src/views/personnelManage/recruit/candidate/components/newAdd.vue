<template>
    <div>
      <!-- 基本信息 -->
      <EssentialForm  ref="form1" />
      <!-- 地址和联系方式 --> 
      <addressForm ref="form2" />
      <!-- 学习经历 -->
      <educationalTable ref="table1"/>
      <!-- 培训记录 -->
      <trainingTable ref="table2"/>
      <!-- 工作经历 -->
      <occupationalTable ref="table3"/>
      <!-- 项目经验 -->
      <projectTable ref="table4"/>
      <!-- 各种证书 -->
      <certificateTable ref="table5"/>
      <div class="dialog-footer">
          <el-button @click="dialogIsShow">取 消</el-button>
          <el-button type="primary" @click="addSubmit">提交</el-button>
      </div>
    </div>
</template>

<script>
import addressForm from './addressForm.vue'
import EssentialForm from './essentialForm.vue'
import educationalTable from './educationalTable.vue'
import certificateTable from './certificateTable.vue'
import occupationalTable from './occupationalTable.vue'
import projectTable from './projectTable.vue'
import trainingTable from './trainingTable.vue'
import {
  addHxrInfo,
  addHxrStudy,
  addHxrWork,
  addHxrTrain,
  addHxrProcess,
  addHxrZS,
  getHxrList
} from '@/api/RecruitmentManagement/candidate.js'
export default {
    name: "newAdd",
    components:{addressForm, EssentialForm,educationalTable,certificateTable,occupationalTable,projectTable,trainingTable},
    data() { 
        return { 
            addVisible:false,
        }
    },
    methods: { 
        dialogIsShow() {
            this.$emit("add",{addVisible:this.addVisible})
        },
        addSubmit() {
            // console.log(this.$refs['form1'])
            this.$refs['form1'].validate(async (valid) => {
                console.log(valid)
                if (valid) {
                const HxrInfo = this.$refs.form1.formLabelAlign
                const HxrAddress = this.$refs.form2.addressForm
                const HxrOBJ = Object.assign({},HxrInfo,HxrAddress)
                await addHxrInfo(HxrOBJ).then((res)=> {
                    // console.log(res)
                })
                const xlTable = this.$refs.table1.educationalData
                for (let i = 0; i < xlTable.length; i++) {
                    xlTable[i].lsygh = HxrInfo.lsygh
                    await addHxrStudy(xlTable[i]).then((res)=>{
                    console.log(res,"学历表")
                    })
                }
                const pxTable = this.$refs.table2.trainingData
                for (let i = 0; i < pxTable.length; i++) {
                    pxTable[i].lsygh = HxrInfo.lsygh
                    await addHxrTrain(pxTable[i]).then((res)=>{
                    console.log(res,"培训表")
                    })
                }
                const gzTable = this.$refs.table3.occupationalData
                for (let i = 0; i < gzTable.length; i++) {
                    gzTable[i].lsygh = HxrInfo.lsygh
                    await addHxrWork(gzTable[i]).then((res)=>{
                    console.log(res,"工作表")
                    })
                }
                const xmTable = this.$refs.table4.projectData
                for (let i = 0; i < xmTable.length; i++) {
                    xmTable[i].lsygh = HxrInfo.lsygh
                    await addHxrProcess(xmTable[i]).then((res)=>{
                    console.log(res,"项目表")
                    })
                }
                const zsTable = this.$refs.table5.certificateData
                for (let i = 0; i < zsTable.length; i++) {
                    zsTable[i].lsygh = HxrInfo.lsygh
                    await addHxrZS(zsTable[i]).then((res)=>{
                    console.log(res,"证书表")
                    })
                }
                await getHxrList().then((res) => {
                    // console.log('更新表数据',res)
                    this.$emit("add",{
                        tableData:res.rows,
                        addVisible:this.addVisible
                    })
                })
                } else { this.$message.error("请填写候选人姓名或临时员工号！") }
             })
        },
    }
}
</script>

<style>

</style>