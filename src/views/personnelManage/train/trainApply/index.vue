<template>
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="课程名称:">
          <el-input v-model="formInline.courseName" placeholder="请输入课程名称" size="small"></el-input>
        </el-form-item>
        <el-form-item label="申请人:">
          <el-cascader v-model="formInline.userName" :options="options" size="small" :props="{ expandTrigger: 'hover' }"></el-cascader>
        </el-form-item>
        <el-form-item label="申请日期:">
          <el-date-picker v-model="formInline.time" type="daterange" size="small" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
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
    <el-dialog title="查看培训申请信息" append-to-body :visible.sync="viewVisible" width="60%">
      <el-descriptions>
        <el-descriptions-item label="申请人">{{ viewForm.userName }}</el-descriptions-item>
        <el-descriptions-item label="所属部门">{{ viewForm.dept }}</el-descriptions-item>
        <el-descriptions-item label="申请时间">{{ viewForm.time }}</el-descriptions-item>
        <el-descriptions-item label="申请课程">{{ viewForm.courseName }}</el-descriptions-item>
        <el-descriptions-item label="课程时间">{{ viewForm.courseTime }}</el-descriptions-item>
        <el-descriptions-item label="培训单位">{{ viewForm.unit }}</el-descriptions-item>
        <el-descriptions-item label="培训费用">{{ viewForm.money }}</el-descriptions-item>
        <el-descriptions-item label="申请状态">{{ viewForm.status }}</el-descriptions-item>
      </el-descriptions>
      <hr>
      <h3>审核记录</h3>
      <el-descriptions>
        <el-descriptions-item label="课程名称">{{ viewForm.courseName }}</el-descriptions-item>
        <el-descriptions-item label="处理类型">{{ viewForm.service }}</el-descriptions-item>
        <el-descriptions-item label="处理状态">{{ viewForm.type }}</el-descriptions-item>
        <!-- <el-descriptions-item label="处理人">{{ viewForm.ApplyLesson }}</el-descriptions-item> -->
        <!-- <el-descriptions-item label="处理时间">{{ viewForm.courseTime }}</el-descriptions-item> -->
        <el-descriptions-item label="备注">{{ viewForm.note }}</el-descriptions-item>
      </el-descriptions>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="viewVisible = false">退出</el-button>
      </span>
    </el-dialog>
    <!-- 修改表格内容的对话框 -->
    <el-dialog title="修改当前培训申请信息" append-to-body :visible.sync="editVisible" width="50%">
      <!-- <commonForm ref="dialog" /> -->
      <commonForm v-if="editVisible" v-bind:editList="editList" ref="editForm" :before-close="handleClose" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="edit">提 交</el-button>
      </span>
    </el-dialog>
    <!-- 培训申请表 -->
    <div>
      <el-table :data="tableData" 
      height="calc(100vh - 235px)"
      fit
      :header-cell-style="{background: '#165DFF',color:'#fff',font:'500 14px PingFang SC'}"
       @row-dblclick="tableClick" style="width: 100%;">
        <el-table-column type="index" fixed label="序号" width="50">
        </el-table-column>
        <el-table-column prop="userName" fixed label="申请人">
        </el-table-column>
        <el-table-column prop="dept" label="所属部门">
        </el-table-column>
        <el-table-column prop="time" label="申请时间">
        </el-table-column>
        <el-table-column prop="courseName" label="申请课程">
        </el-table-column>
        <el-table-column prop="courseTime" label="课程时间">
        </el-table-column>
        <el-table-column prop="unit" label="培训单位">
        </el-table-column>
        <el-table-column prop="money" label="培训费用">
        </el-table-column>
        <el-table-column prop="status" label="申请状态">
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
import { addApply, inquireApply, editApply, deleteApply } from '@/api/TrainingManagement/trainApply.js'
export default {
  name: 'TrainApply',
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
        courseName: '',
        userName: '',
        time: ''
      },
      viewForm: {}
    }
  },
  mounted() {
    this.getAllApply()
  },
  methods: {
    getAllApply() {
      inquireApply().then(res => {
        this.tableData = res.rows
        // console.log(this.tableData,'所有招聘计划')
      })
    },
    //模糊查询
    inquirer() {
      inquireApply(this.formInline).then(res => {
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
    add() {
      // console.log(this.$refs.addForm.form)
      const data = this.$refs.addForm.form
      addApply(data).then(res => {
        // console.log(res)
        this.getAllApply()
      })
      this.dialogVisible = false
    },
    // 修改提交
    edit() {
      // console.log(this.$refs.editForm.form)
      const data = this.$refs.editForm.form
      editApply(data).then(res => {
        console.log(res)
        this.getAllApply()
      })
      this.editVisible = false
    },

    //删除
    deleteRow(index, rows) {
      deleteApply(rows[index].id).then(res => {
        console.log(res)
      })
      rows.splice(index, 1)
    },
    //查看
    tableClick(row) {
      console.log(row)
      this.viewVisible = true
      this.viewForm = row
    },
    //修改
    handleClickEdit(row) {
      this.editVisible = true
      console.log(row)
      this.editList = row
      //父组件可以直接修改子组件的变量
      // this.$refs.dialog.form = row;
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../../../assets/styles/appMain.css';

.title {
  margin: 30px 3rem 35px;
  font-size: 26px;
  font-weight: 500;
  padding-bottom: 5px;
  border-bottom: 3px solid #ccc;
}
// .top-form {
//   position: relative;
//   margin: 30px 3rem 0;
// }
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
</style>