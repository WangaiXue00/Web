<template>
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="所属年度:">
          <el-date-picker v-model="formInline.khnd" type="year" placeholder="选择年" format="yyyy年" value-format="yyyy">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="所属部门:">
          <el-input v-model="formInline.bm" placeholder="请输入所属部门" size="small"></el-input>
        </el-form-item>
        <el-form-item label="考核人:">
          <el-input v-model="formInline.xm" placeholder="请输入考核人" size="small"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="inquirer" icon="el-icon-search" size="small">查询</el-button>
        </el-form-item>

        <el-form-item class="table-add">
          <el-button type="primary" @click="dialogVisible=true" icon="el-icon-circle-plus-outline" size="small">添加</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 新增表格的对话框 -->
    <el-dialog title="新增" append-to-body :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
      <commonForm ref="addForm" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 查看表格内容的对话框 -->
    <el-dialog title="查看年度绩效目标信息" append-to-body :visible.sync="viewVisible" width="60%">
      <el-descriptions>
        <el-descriptions-item label="考核年度">{{ viewForm.khnd }}</el-descriptions-item>
        <el-descriptions-item label="状 态">{{ viewForm.zt }}</el-descriptions-item>
        <el-descriptions-item label="部 门">{{ viewForm.bm }}</el-descriptions-item>
        <el-descriptions-item label="姓 名">{{ viewForm.xm }}</el-descriptions-item>
        <el-descriptions-item label="绩效目标">{{ viewForm.jxmb }}</el-descriptions-item>
        <el-descriptions-item label="直接领导">{{ viewForm.zjld }}</el-descriptions-item>
        <el-descriptions-item label="总得分(自评)">{{ viewForm.zdfzp }}</el-descriptions-item>
        <el-descriptions-item label="直接领导评分">{{ viewForm.zjldpf }}</el-descriptions-item>
        <el-descriptions-item label="部门总监评分">{{ viewForm.bmzjpf }}</el-descriptions-item>
        <el-descriptions-item label="绩效得分">{{ viewForm.jxdf }}</el-descriptions-item>
        <el-descriptions-item label="面谈时间">{{ viewForm.mtsj }}</el-descriptions-item>
      </el-descriptions>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="viewVisible = false">退出</el-button>
      </span>
    </el-dialog>

    <!-- 修改表格内容的对话框 -->
    <el-dialog title="修改当前年度绩效目标信息" append-to-body :visible.sync="editVisible" width="50%">
      <!-- <commonForm ref="dialog" /> -->
      <commonForm v-if="editVisible" v-bind:editList="editList" ref="editForm" :before-close="handleClose" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="edit">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 年度绩效目标表 -->
    <div>
      <el-table :data="tableData"
      height="calc(100vh - 235px)"
      fit
      :header-cell-style="{background: '#165DFF',color:'#fff',font:'500 14px PingFang SC'}"
        @row-dblclick="tableClick" style="width: 100%;line-height: 10px;">
        <el-table-column type="index" fixed label="序号" width="50">
        </el-table-column>
        <el-table-column prop="khnd" label="考核年度">
        </el-table-column>
        <el-table-column prop="zt" label="状 态">
        </el-table-column>
        <el-table-column prop="bm" label="部 门">
        </el-table-column>
        <el-table-column prop="xm" label="姓 名">
        </el-table-column>
        <el-table-column prop="jxmb" label="绩效目标">
        </el-table-column>
        <el-table-column prop="zjld" label="直接领导">
        </el-table-column>
        <el-table-column prop="zdfzp" label="总得分(自评)">
        </el-table-column>
        <el-table-column prop="zjldpf" label="直接领导评分">
        </el-table-column>
        <el-table-column prop="bmzjpf" label="部门总监评分">
        </el-table-column>
        <el-table-column prop="jxdf" label="绩效得分">
        </el-table-column>
        <el-table-column prop="mtsj" label="面谈时间">
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="180">
          <template slot-scope="scope">
            <el-button @click="handleClickEdit(scope.row)" type="text" size="small">修改</el-button>
            <el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

  </div>
</template>

<script>
import commonForm from './components/commonForm.vue'
import { addTarget, inquireTarget, editTarget, deleteTarget } from '@/api/PerformanceManagement/target.js'
export default {
  name: 'Evaluation',
  components: { commonForm },
  data() {
    return {
      dialogVisible: false,
      viewVisible: false,
      editVisible: false,
      editList: {},
      tableData: [],
      options: [],
      formInline: {
        bm: '',
        xm: '',
        khnd: ''
      },
      viewForm: {}
    }
  },
  mounted() {
    this.getAllTarget()
  },
  methods: {
    // 获取所有招聘计划
    getAllTarget() {
      inquireTarget().then(res => {
        this.tableData = res.rows
        // console.log(this.tableData,'所有招聘计划')
      })
    },
    //模糊查询
    inquirer() {
      inquireTarget(this.formInline).then(res => {
        this.tableData = res.rows
        // console.log(this.tableData,'所有招聘计划')
      })
    },
    //新增弹窗的关闭提示方法
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    // 新增提交
    add() {
      // console.log(this.$refs.addForm.form)
      const data = this.$refs.addForm.form
      addTarget(data).then(res => {
        // console.log(res)
        this.getAllTarget()
      })
      this.dialogVisible = false
    },
    // 修改提交
    edit() {
      // console.log(this.$refs.editForm.form)
      const data = this.$refs.editForm.form
      editTarget(data).then(res => {
        console.log(res)
        this.getAllTarget()
      })
      this.editVisible = false
    },

    //删除
    deleteRow(index, rows) {
      deleteTarget(rows[index].id).then(res => {
        console.log(res)
      })
      rows.splice(index, 1)
    },
    //查看
    tableClick(row) {
      // console.log(row)
      this.viewVisible = true
      this.viewForm = row
    },
    //修改
    handleClickEdit(row) {
      this.editVisible = true
      // console.log(row)
      this.editList = row
      //父组件可以直接修改子组件的变量
      // this.$refs.dialog.form = row;
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../../../assets/styles/appMain.css';

.table-add {
  position: absolute;
  right: 0px;
  top: 0px;
  margin-right: 0 !important;
}
::v-deep .el-descriptions-item__label {
  width: 120px;
  text-align: right;
  justify-content: flex-end;
}
::v-deep .el-input__inner {
  border-radius: 6px;
}
</style>