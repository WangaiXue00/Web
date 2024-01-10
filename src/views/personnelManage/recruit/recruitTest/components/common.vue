<template>
    <div>
        <el-form ref="form" :model="addForm" label-width="80px">
          <el-form-item label="题目类别:">
            <el-select v-model="addForm.tmlb" placeholder="请选择题目类别">
              <el-option label="财务类" value="财务类"></el-option>
              <el-option label="管理类" value="管理类"></el-option>
              <el-option label="技术类" value="技术类"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="测试说明:">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入测试说明"
              v-model="addForm.cssm">
            </el-input>
          </el-form-item>
        </el-form>
        <el-table
          :data="tmTableData"
          style="width: 100%">
          <el-table-column
            prop="tm"
            label="标 题"
            width="400">
          </el-table-column>
          <el-table-column
            prop="tx"
            label="题 型">
          </el-table-column>
          <el-table-column
            prop="df"
            label="得 分">
          </el-table-column>
          <el-table-column
            fixed="right"
            width="120">
            <template slot="header" slot-scope>
              <el-button type="primary" icon="el-icon-plus" circle @click="dialogVisible = true"></el-button>
            </template>
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tmTableData)"
                type="text"
                size="small">
                移除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-dialog
            title="选择题库"
            :visible.sync="dialogVisible"
            append-to-body
            width="50%">
            <div>
                <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini">
                    <el-form-item label="标题:">
                        <el-input v-model="formInline.tm" placeholder="标题"></el-input>
                    </el-form-item>
                    <el-form-item label="题型:">
                        <el-radio-group v-model="formInline.tx">
                          <el-radio style="margin-right: 5px;" label="">所有</el-radio>
                          <el-radio style="margin-right: 5px;" label="单选"></el-radio>
                          <el-radio style="margin-right: 5px;" label="多选"></el-radio>
                          <el-radio style="margin-right: 5px;" label="判断"></el-radio>
                          <el-radio style="margin-right: 5px;" label="填空"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </el-form>
                <el-table
                    ref="multipleTable"
                    :data="tkTableData"
                    tooltip-effect="dark"
                    style="width: 100%">
                    <el-table-column
                    type="index"
                    width="40">
                    </el-table-column>
                    <el-table-column
                    type="selection"
                    width="55">
                    </el-table-column>
                    <el-table-column
                    prop="tm"
                    label="标 题"
                    width="300">
                    </el-table-column>
                    <el-table-column
                    prop="tx"
                    label="题 型">
                    </el-table-column>
                    <el-table-column
                    prop="df"
                    label="得 分">
                    </el-table-column>
                </el-table>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addTM">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import {
  getQuestion
} from '@/api/RecruitmentManagement/recruitTest.js'
export default {
    name:'common',
    props: ["editDialog"],
    data() {
        return {
            dialogVisible:false,
            addForm:{},
            formInline:{},
            tmTableData:[],
            tkTableData:[]
        }
    },
    created() {
        if(this.editDialog) {
            this.addForm = this.editDialog
            this.tmTableData = this.editDialog.tmtk
        }
        this.getAllQuestion()
    },
    methods: {
      // 查询题库信息
      getAllQuestion(row) {
        getQuestion(row).then((res) => { 
          if (res && res.code === 200) {
            this.tkTableData = res.rows
            // console.log('tkTableData',res.total,this.tkTableData)
            for (let i = 0; i < res.total;i++ ) {
              // console.log(this.tkTableData[i].optionData)
              if(this.tkTableData[i].optionData.length !== 0) { 
                this.tkTableData[i].optionData = JSON.parse(this.tkTableData[i].optionData) 
              } else { 
                this.tkTableData[i].optionData = []
              }
            }
          }
        })
      },
      onSubmit() {
          // console.log('查询')
        this.getAllQuestion(this.formInline)
      },
      addTM() {
          // console.log(this.$refs.multipleTable.selection)
          this.tmTableData = this.$refs.multipleTable.selection
          this.dialogVisible = false
      },
      //删除
      deleteRow(index, rows) {
      rows.splice(index, 1)
      },
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