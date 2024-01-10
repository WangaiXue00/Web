<template>
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="培训课程:">
          <el-input v-model="formInline.coursename" placeholder="请输入培训课程" size="small"></el-input>
        </el-form-item>
        <el-form-item label="培训员工:">
          <el-input v-model="formInline.userName" placeholder="请输入培训员工" size="small"></el-input>
        </el-form-item>
        <el-form-item label="培训日期:">
          <el-date-picker v-model="formInline.begintime" type="daterange" size="small" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
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
    <el-dialog title="查看培训评价信息" append-to-body :visible.sync="viewVisible" width="60%">
      <el-descriptions>
        <el-descriptions-item label="课程名称">{{ viewForm.coursename }}</el-descriptions-item>
        <!-- <el-descriptions-item label="所属分类">{{ viewForm.Categories }}</el-descriptions-item> -->
        <el-descriptions-item label="培训形式">{{ viewForm.type }}</el-descriptions-item>
        <!-- <el-descriptions-item label="考核方式">{{ viewForm.EvaluationMode }}</el-descriptions-item> -->
        <!-- <el-descriptions-item label="内/外部培训">{{ viewForm.InOrOut }}</el-descriptions-item> -->
        <el-descriptions-item label="员工姓名">{{ viewForm.userName }}</el-descriptions-item>
        <el-descriptions-item label="培训日期">{{ viewForm.begintime }}</el-descriptions-item>
        <el-descriptions-item label="评价时间">{{ viewForm.evaluationTime }}</el-descriptions-item>
        <el-descriptions-item label="评价内容">{{ viewForm.evaluation }}</el-descriptions-item>
      </el-descriptions>
      <!-- <el-descriptions :column="1">
        <el-descriptions-item label="备 注">{{ viewForm.Note }}</el-descriptions-item>
      </el-descriptions> -->
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="viewVisible = false">退出</el-button>
      </span>
    </el-dialog>

    <!-- 修改表格内容的对话框 -->
    <el-dialog title="修改当前培训评价信息" append-to-body :visible.sync="editVisible" width="50%">
      <!-- <commonForm ref="dialog" /> -->
      <commonForm v-if="editVisible" v-bind:editList="editList" ref="editForm" :before-close="handleClose" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="edit">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 培训评价表 -->
    <div>
      <el-table :data="tableData" 
      height="calc(100vh - 235px)"
      fit
      :header-cell-style="{background: '#165DFF',color:'#fff',font:'500 14px PingFang SC'}"
       @row-dblclick="tableClick" style="width: 100%;line-height: 10px;">
        <el-table-column type="index" fixed label="序号" width="50">
        </el-table-column>
        <el-table-column prop="coursename" label="课程名称">
        </el-table-column>
        <!-- <el-table-column prop="Categories" label="所属分类">
        </el-table-column> -->
        <el-table-column prop="type" label="培训形式">
        </el-table-column>
        <!-- <el-table-column prop="EvaluationMode" label="考核方式">
        </el-table-column>
        <el-table-column prop="InOrOut" label="内/外部培训">
        </el-table-column> -->
        <el-table-column prop="userName" label="员工姓名">
        </el-table-column>
        <el-table-column prop="begintime" label="培训日期">
        </el-table-column>
        <el-table-column prop="evaluationTime" label="评价时间">
        </el-table-column>
        <el-table-column prop="evaluation" label="评价内容">
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
import { addTrain, inquireTrain, editTrain, deleteTrain } from '@/api/TrainingManagement/trainPlan.js'
export default {
  name: 'Comment',
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
        coursename: '',
        userName: '',
        begintime: ''
      },
      viewForm: {}
    }
  },
  mounted() {
    this.getAllTrain()
  },
  methods: {
    // 获取所有培训计划
    getAllTrain() {
      inquireTrain().then(res => {
        this.tableData = res.rows
      })
    },
    //模糊查询
    inquirer() {
      inquireTrain(this.formInline).then(res => {
        this.tableData = res.rows
        // console.log(this.tableData, '----')
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
      const data = this.$refs.addForm.form
      addTrain(data).then(res => {
        this.getAllTrain()
      })
      this.dialogVisible = false
    },
    // 修改提交
    edit() {
      const data = this.$refs.editForm.form
      editTrain(data).then(res => {
        // console.log(res)
        this.getAllTrain()
      })
      this.editVisible = false
    },
    //删除
    deleteRow(index, rows) {
      deleteTrain(rows[index].id).then(res => {
        console.log(res)
      })
      rows.splice(index, 1)
    },
    //查看
    tableClick(row) {
      this.viewVisible = true
      this.viewForm = row
    },
    //修改
    handleClickEdit(row) {
      this.editVisible = true
      this.editList = row
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../../../assets/styles/appMain.css';


// .top-form {
//   position: relative;
//   margin: 30px 3rem 0;
// }
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
.el-tag {
  margin-bottom: 20px;
}
</style>