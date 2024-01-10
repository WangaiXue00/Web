<template>
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="职位名称:">
          <el-input v-model="formInline.zzmc" placeholder="请输入职位名称" size="small"></el-input>
        </el-form-item>
        <el-form-item label="所属部门:">
          <el-cascader v-model="formInline.ssbm" :options="options" size="small" :props="{ expandTrigger: 'hover' }"></el-cascader>
        </el-form-item>
        <el-form-item label="隶属年份:">
          <el-input v-model="formInline.ssnd" placeholder="请输入所属年度" style="width: 130px;" size="small"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="inquirer" icon="el-icon-search" size="small">查询</el-button>
        </el-form-item>
        <el-form-item class="table-add">
          <el-button type="primary" @click="dialogVisible=true" icon="el-icon-circle-plus-outline" size="small">新增</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 新增表格的对话框 -->
    <el-dialog
      title="新增"
      :visible.sync="dialogVisible"
      :append-to-body="true"
      width="50%"
      :before-close="handleClose">
      <commonForm v-if="dialogVisible" ref="addForm"/>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">提 交</el-button>
      </span>
    </el-dialog>
    <!-- 查看表格内容的对话框 -->
    <el-dialog title="查看职位信息" :append-to-body="true" :visible.sync="viewVisible" width="60%">
      <el-descriptions>
        <el-descriptions-item label="职位名称">{{ viewForm.zzmc }}</el-descriptions-item>
        <el-descriptions-item label="岗位序列">{{ viewForm.gwxl }}</el-descriptions-item>
        <el-descriptions-item label="所属年份">{{ viewForm.ssnd }}</el-descriptions-item>
        <el-descriptions-item label="申请人数">{{ viewForm.sqrs }}</el-descriptions-item>
        <el-descriptions-item label="所属部门">{{ viewForm.ssbm }}</el-descriptions-item>
        <el-descriptions-item label="申请人">{{ viewForm.sqr }}</el-descriptions-item>
        <el-descriptions-item label="申请日期">{{ viewForm.sqrq }}</el-descriptions-item>
        <el-descriptions-item label="直接领导">{{ viewForm.zjld }}</el-descriptions-item>
        <el-descriptions-item label="工作地点">{{ viewForm.gzdd }}</el-descriptions-item>
        <el-descriptions-item label="审批人">{{ viewForm.shren }}</el-descriptions-item>
        <el-descriptions-item label="期望到岗日期">{{ viewForm.qwdgrq }}</el-descriptions-item>
      </el-descriptions>
      <el-descriptions :column=1>
          <el-descriptions-item label="岗位职责" >{{ viewForm.gwzz }}</el-descriptions-item>
          <el-descriptions-item label="任职要求" >{{ viewForm.rzyq }}</el-descriptions-item>
          <el-descriptions-item label="备 注" >{{ viewForm.bz }}</el-descriptions-item>
      </el-descriptions>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="viewVisible = false">退出</el-button>
      </span>
    </el-dialog>
    <!-- 修改表格内容的对话框 -->
    <el-dialog title="修改当前职位信息" :append-to-body="true" :visible.sync="editVisible" width="50%" :before-close="handleClose">
      <!-- <commonForm ref="dialog" /> -->
      <commonForm v-if="editVisible" v-bind:editList="editList" ref="editForm"/>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="edit">提 交</el-button>
      </span>
    </el-dialog>
    <!-- 招聘计划表 -->
    <div>
      <el-table
      :data="tableData"
      height="calc(100vh - 235px)"
      fit
      :header-cell-style="{background: '#165DFF',color:'#fff',font:'500 14px PingFang SC'}"
      @row-dblclick="tableClick"
      style="width: 100%;">
      <el-table-column
        type="index"
        fixed
        label="序号"
        width="50">
      </el-table-column>
      <el-table-column
        prop="zzmc"
        fixed
        label="职位名称"
        min-width="130">
      </el-table-column>
      <el-table-column
        prop="ssnd"
        label="所属年度"
        width="100">
      </el-table-column>
      <el-table-column
        prop="sqrs"
        label="申请人数"
        min-width="80">
      </el-table-column>
      <!-- <el-table-column
        prop="yrzrs"
        label="已入职人数"
        width="100">
      </el-table-column>
      <el-table-column
        prop="syrs"
        label="剩余人数"
        width="100">
      </el-table-column> -->
      <el-table-column
        prop="ssbm"
        label="所属部门"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="zjld"
        label="直接领导"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="gwxl"
        label="岗位序列"
        min-width="120">
      </el-table-column>
      <el-table-column
        prop="gzdd"
        label="工作地点"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="sqrq"
        min-width="120"
        label="申请日期">
      </el-table-column>
      <el-table-column
        prop="sqr"
        label="申请人"
        min-width="100">
      </el-table-column>
      <!-- <el-table-column
        prop="shzt"
        label="审核状态"
        width="100">
      </el-table-column> -->
      <el-table-column
        prop="shren"
        label="审核人"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="qwdgrq"
        label="期望到岗日期"
        min-width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        align="center"
        width="180">
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
import commonForm from './components/commonForm'
import {
  addPlan,
  inquirePlan,
  editPlan,
  deletePlan
 } from '@/api/RecruitmentManagement/plan.js'
export default {
  name: 'RecruitPlan',
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
        zzmc: '',
        ssbm: '',
        ssnd: ''
      },
      viewForm: {}
    }
  },
  mounted() {
    this.getAllPlan()
  },
  methods: {
    // 获取所有招聘计划
    getAllPlan() {
      inquirePlan().then((res) => {
        this.tableData = res.rows
        console.log(this.tableData,'所有招聘计划')
      })
    },
    //模糊查询
    inquirer() {
      // console.log(this.formInline)
      inquirePlan(this.formInline).then((res) => {
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
      addPlan(data).then((res) => {
        // console.log(res)
        this.getAllPlan()
      })
      this.dialogVisible = false
    },
    // 修改提交
    edit() {
      // console.log(this.$refs.editForm.form)
      const data = this.$refs.editForm.form
      editPlan(data).then((res) => {
        console.log(res)
        this.getAllPlan()
      })
      this.editVisible = false
    },
    //删除
    deleteRow(index, rows) {
      // console.log(rows[index].id)
      deletePlan(rows[index].id).then((res) => {
        // console.log(res)
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

<style lang="scss" scoped>
@import '../../../../assets/styles/appMain.css';


.table-add {
  position: absolute;
  right: 0;
  top: 0;
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
::v-deep .el-descriptions-item__label {
  text-align: right;
}
</style>