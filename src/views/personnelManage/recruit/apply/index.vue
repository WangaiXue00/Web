<template>
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
        <el-form-item label="所属年份:">
          <el-input v-model="formInline.ssnf"
            placeholder="请输入所属年份"
            style="width: 130px;"></el-input>
        </el-form-item>
        <el-form-item label="职位:">
          <el-input v-model="formInline.zwmc"
            placeholder="请输入职位名称"></el-input>
        </el-form-item>
        <el-form-item label="所属部门:">
          <el-select v-model="formInline.ssbm" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="申请日期:">
          <el-date-picker
            v-model="formInline.sqrq"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
            style="width: 120px;">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="inquirer" icon="el-icon-search">查询</el-button>
        </el-form-item>
      </el-form>
      <div class="top-button">
        <el-button type="primary" icon="el-icon-circle-plus" @click="addVisible=true" size="small">新增</el-button>
      </div>
    </div>
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
          prop="ssnf"
          fixed
          min-width="100"
          label="所属年度">
        </el-table-column>
        <el-table-column
          prop="zwmc"
          fixed
          label="职位名称"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="sqrs"
          min-width="80"
          label="申请人数">
        </el-table-column>
        <el-table-column
          prop="ssbm"
          min-width="100"
          label="所属部门">
        </el-table-column>
        <el-table-column
          prop="zjld"
          min-width="100"
          label="直接领导">
        </el-table-column>
        <el-table-column
          prop="gwxl"
          min-width="100"
          label="岗位序列">
        </el-table-column>
        <el-table-column
          prop="gzdd"
          min-width="100"
          label="工作地点">
        </el-table-column>
        <el-table-column
          prop="sqrq"
          label="申请日期"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="sqr"
          min-width="80"
          label="申请人">
        </el-table-column>
        <el-table-column
          prop="shzt"
          min-width="100"
          label="审核状态">
        </el-table-column>
        <el-table-column
          prop="qwdgrq"
          label="期望到岗日期"
          min-width="150">
        </el-table-column>
        <el-table-column
          prop="rzyq"
          label="工作经验要求"
          min-width="160">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          align="center"
          width="200">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="isExamine(scope.row)">审核</el-button>
            <el-button type="text" size="small" @click="handleClickEdit(scope.row)" >修改</el-button>
            <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 新增对话框 -->
    <el-dialog
      title="新增招聘申请"
      :append-to-body="true"
      :visible.sync="addVisible"
      width="50%">
      <Form ref="addForm"/>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">提 交</el-button>
      </span>
    </el-dialog>
    <!-- 查看职位信息 -->
    <el-dialog
      title="查看职位信息"
      :append-to-body="true"
      :visible.sync="viewVisible"
      width="50%">
      <el-descriptions>
        <el-descriptions-item label="职位名称" >{{ viewForm.zwmc }}</el-descriptions-item>
        <el-descriptions-item label="岗位序列" >{{ viewForm.gwxl }}</el-descriptions-item>
        <el-descriptions-item label="所属年份" >{{ viewForm.ssnf }}</el-descriptions-item>
        <el-descriptions-item label="申请人数" >{{ viewForm.sqrs }}</el-descriptions-item>
        <el-descriptions-item label="所属部门" >{{ viewForm.ssbm }}</el-descriptions-item>
        <el-descriptions-item label="申请人" >{{ viewForm.sqr }}</el-descriptions-item>
        <el-descriptions-item label="申请日期" >{{ viewForm.sqrq }}</el-descriptions-item>
        <el-descriptions-item label="直接领导" >{{ viewForm.zjld }}</el-descriptions-item>
        <el-descriptions-item label="工作地点" >{{ viewForm.gzdd }}</el-descriptions-item>
        <el-descriptions-item label="期望到岗日期" >{{ viewForm.qwdgrq }}</el-descriptions-item>
        <el-descriptions-item label="添加人" >{{ viewForm.createBy }}</el-descriptions-item>
        <el-descriptions-item label="添加时间" >{{ viewForm.createTime }}</el-descriptions-item>
      </el-descriptions>
      <el-descriptions :column="1">
          <el-descriptions-item label="岗位职责">{{ viewForm.Info1 }}</el-descriptions-item>
          <el-descriptions-item label="任职要求" >{{ viewForm.Info2 }}</el-descriptions-item>
          <el-descriptions-item label="备 注" >{{ viewForm.Note }}</el-descriptions-item>
      </el-descriptions>
      <span slot="footer" class="dialog-footer">
        <el-button @click="viewVisible = false">取 消</el-button>
        <el-button type="primary" @click="viewVisible = false">提 交</el-button>
      </span>
    </el-dialog>
    <!-- 审核对话框 -->
    <el-dialog
      title="审核"
      :append-to-body="true"
      :visible.sync="examineVisible"
      width="60%">
      <el-table
        :data="examineData"
        style="width: 100%">
        <el-table-column
          prop="jdmc"
          label="节点名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="cllx"
          label="处理类型"
          width="180">
        </el-table-column>
        <el-table-column
          prop="clzt"
          label="处理状态">
        </el-table-column>
        <el-table-column
          prop="clr"
          label="处理人"
          width="180">
        </el-table-column>
        <el-table-column
          prop="clsj"
          label="处理时间"
          width="180">
        </el-table-column>
        <el-table-column
          prop="bz"
          label="备注">
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="danger" @click="examineVisible = false">审核不通过</el-button>
        <el-button type="primary" @click="examinePass">审核通过</el-button>
      </span>
    </el-dialog>
    <!-- 修改对话框 -->
    <el-dialog
      title="修改"
      :append-to-body="true"
      :visible.sync="editVisible"
      width="50%">
      <Form v-if="editVisible" v-bind:editList="editList" ref="editForm"/>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="edit">提 交</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Form from './components/commonForm.vue'
import {
  addApply,
  editApply,
  deleteApply,
  searchApply,
  searchExamine,
} from '@/api/RecruitmentManagement/apply.js'
export default {
  name: 'RecruitApply',
  components: { Form },
  data() { 
    return {
      addVisible:false,
      viewVisible:false,
      editList:{},
      examineVisible:false,
      editVisible:false,
      options:[{
        label:"部门一",
        value:"部门一"
      },{
        label:"部门二",
        value:"部门二"
      }],
      formInline:{},
      viewForm:{},
      tableData:[],
      examineData:[{
        jdmc:'第一个节点',
        cllx:'指定具体负责人',
        clzt:'待审核',
        clr:'张三（审批专用）',
        clsj:'2023-07-26 16:23:33',
        bz:''
      }]
    }
  },
  mounted() {
    this.getAllApply()
  },
  methods:{ 
    // 查询所有招聘申请
    getAllApply() {
      searchApply().then((res)=>{
        this.tableData=res.rows
      })
    },
    // 双击表格查看
    tableClick(row) {
      console.log(row)
      this.viewVisible = true
      this.viewForm = row
    },
    // 查询
    inquirer() {
      this.tableData = []
      const obj = this.formInline
      console.log(obj,"查询按钮")
      searchApply(obj).then((res)=> {
        this.tableData = res.rows
      })
    },
    // 新增
    add() {
      console.log(this.$refs.addForm.form)
      const data = this.$refs.addForm.form
      data['shzt']='待审核'
      addApply(data).then((res)=> {
        // console.log(res,'新增招聘申请')
        this.getAllApply()
      })
      this.addVisible = false
    },
    // 审核
    isExamine() {
      this.examineVisible = true
    },
    // 删除表格
    deleteRow(index, rows) {
      deleteApply(rows[index].id).then((res)=>{
        if (res && res.code===200) {
          this.$message.error('删除成功')
        }
      })
      rows.splice(index, 1);
    },
    // 审核通过
    examinePass() {
      this.$confirm('确认审核通过？')
          .then(_ => {
            this.examineVisible = false
          })
          .catch(_ => {});
    },
    //修改
    handleClickEdit(row) {
      this.editVisible=true
      console.log(row)
      this.editList = row
      //父组件可以直接修改子组件的变量
      // this.$refs.dialog.form = row;
    },
    // 修改提交
    edit(){
      console.log(this.$refs.editForm.form,'招聘申请修改')
      const obj = this.$refs.editForm.form
      editApply(obj).then((res)=> {
        if (res && res.code === 200) {
          this.$message.success('修改成功')
          this.getAllApply()
        }
      })
      this.editVisible = false
    }
   }
}
</script>

<style lang="scss" scoped>
@import '../../../../assets/styles/appMain.css';
.top-button {
  position: absolute;
  top: 0;
  right: 0;
}
::v-deep .el-descriptions-item__label {
  text-align: right;
}
</style>