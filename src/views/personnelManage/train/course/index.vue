<template>
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="课程名称:">
          <el-input v-model="formInline.coursename" placeholder="请输入课程名称" size="small"></el-input>
        </el-form-item>
        <el-form-item label="所属分类:">
          <el-input v-model="formInline.classification" placeholder="请输入所属分类" size="small"></el-input>
        </el-form-item>
        <!-- <el-form-item label="所属分类">
          <el-select v-model="formInline.sort" placeholder="请选择所属分类">
            <el-option label="工程师培训" value="1"></el-option>
            <el-option label="内训" value="2"></el-option>
            <el-option label="外训" value="3"></el-option>
            <el-option label="新员工培训" value="4"></el-option>
          </el-select>
        </el-form-item> -->
        <el-form-item>
          <el-button type="primary" @click="inquirer" icon="el-icon-search" size="small">查询</el-button>
        </el-form-item>
        <el-form-item class="table-add">
          <el-button type="primary" @click="dialogVisible=true" icon="el-icon-circle-plus-outline" size="small">添加</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 新增表格的对话框 -->
    <el-dialog title="新增" append-to-body :visible.sync="dialogVisible" width="60%" :before-close="handleClose">
      <commonForm ref="addForm" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 查看表格内容的对话框 -->
    <el-dialog title="查看课程管理信息" append-to-body :visible.sync="viewVisible" width="60%">
      <el-descriptions>
        <el-descriptions-item label="课程名称">{{ viewForm.courseName }}</el-descriptions-item>
        <el-descriptions-item label="所属分类">{{ viewForm.classification }}</el-descriptions-item>
        <el-descriptions-item label="内/外部培训">{{ viewForm.train }}</el-descriptions-item>
        <el-descriptions-item label="培训形式">{{ viewForm.format }}</el-descriptions-item>
        <el-descriptions-item label="考核方式">{{ viewForm.examination }}</el-descriptions-item>
        <el-descriptions-item label="课程概况">{{ viewForm.overview }}</el-descriptions-item>
      </el-descriptions>
      <hr>
      <h3>章节信息</h3>
      <el-descriptions>
        <!-- <el-descriptions-item label="章节名称">{{ viewForm.CourseTitle }}</el-descriptions-item> -->
        <el-descriptions-item label="章节数">{{ viewForm.num }}</el-descriptions-item>
        <el-descriptions-item label="参与学习人员数">{{ viewForm.stuNum }}</el-descriptions-item>
        <el-descriptions-item label="学习总时长">{{ viewForm.hour }}</el-descriptions-item>
      </el-descriptions>
      <hr>
      <h3>题库信息</h3>
      <el-descriptions v-for="item in viewQuestion" :key="item.id">
        <el-descriptions-item label="标 题">{{ item.title }}</el-descriptions-item>
        <el-descriptions-item label="题 型">{{ item.type }}</el-descriptions-item>
        <el-descriptions-item label="得 分">{{ item.score }}</el-descriptions-item>
      </el-descriptions>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="viewVisible = false">退出</el-button>
      </span>
    </el-dialog>

    <!-- 修改表格内容的对话框 -->
    <el-dialog title="修改当前课程管理信息" append-to-body :visible.sync="editVisible" width="50%">
      <!-- <commonForm ref="dialog" /> -->
      <commonForm v-if="editVisible" v-bind:editList="editList" ref="editForm" :before-close="handleClose" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="edit">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 课程管理表 -->
    <div>
      <el-table :data="tableData"
      height="calc(100vh - 235px)"
      fit
      :header-cell-style="{background: '#165DFF',color:'#fff',font:'500 14px PingFang SC'}"
        @row-dblclick="tableClick" style="width: 100%;">
        <el-table-column type="index" fixed label="序号" width="50">
        </el-table-column>
        <el-table-column prop="courseName" fixed label="课程名称" width="80">
        </el-table-column>
        <el-table-column prop="classification" label="所属分类" width="80">
        </el-table-column>
        <el-table-column prop="format" label="培训形式">
        </el-table-column>
        <el-table-column prop="examination" label="考核方式">
        </el-table-column>
        <el-table-column prop="train" label="内/外部培训">
        </el-table-column>
        <el-table-column prop="num" label="章节数">
        </el-table-column>
        <el-table-column prop="hour" label="课程时长">
        </el-table-column>
        <el-table-column prop="stuNum" label="参与学习人员数">
        </el-table-column>
        <el-table-column prop="hour" label="学习总时长">
        </el-table-column>
        <el-table-column prop="createBy" label="添加人">
        </el-table-column>
        <el-table-column prop="createTime" label="添加时间">
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
import { addCourse, inquireCourse, editCourse, deleteCourse } from '@/api/TrainingManagement/course.js'
import { inquireChapter } from '@/api/TrainingManagement/chapter.js'
import { inquireExam1 } from '@/api/TrainingManagement/QuestionBank.js'

export default {
  name: 'Course',
  components: { commonForm },
  data() {
    return {
      dialogVisible: false,
      viewVisible: false,
      editVisible: false,
      editList: {},
      tableData: [],
      formInline: {
        coursename: '',
        classification: ''
      },
      viewForm: {},
      viewChapter: [],
      viewQuestion: []
    }
  },
  mounted() {
    this.getAllCourse()
  },
  methods: {
    // 获取所有培训计划
    getAllCourse() {
      inquireCourse().then(res => {
        this.tableData = res.rows
      })
    },
    //模糊查询
    inquirer() {
      inquireCourse(this.formInline).then(res => {
        console.log(res)
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
      addCourse(data).then(res => {
        this.getAllCourse()
      })
      this.dialogVisible = false
    },
    // 修改提交
    edit() {
      const data = this.$refs.editForm.form
      editCourse(data).then(res => {
        console.log(res)
        this.getAllCourse()
      })
      this.editVisible = false
    },
    //删除
    deleteRow(index, rows) {
      deleteCourse(rows[index].id).then(res => {
        console.log(res)
      })
      rows.splice(index, 1)
    },
    //查看
    tableClick(row) {
      this.viewVisible = true
      this.viewForm = row
      inquireChapter({ courseid: row.id }).then(res => {
        // console.log(res)
        this.viewChapter = res.rows
        console.log(this.viewChapter)
      })
      inquireExam1({ id: row.id }).then(res => {
        // console.log(res)
        this.viewQuestion = res.rows
        console.log(this.viewQuestion)
      })
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