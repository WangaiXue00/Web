<template>
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="培训项目:">
          <el-input v-model="formInline.project" placeholder="请输入培训项目" size="small"></el-input>
        </el-form-item>
        <el-form-item label="培训课程:">
          <el-cascader v-model="formInline.lesson" :options="options" size="small" :props="{ expandTrigger: 'hover' }"></el-cascader>
        </el-form-item>
        <el-form-item label="培训日期:">
          <el-date-picker v-model="formInline.date" type="daterange" size="small" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
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
    <el-dialog title="查看" append-to-body :visible.sync="viewVisible" width="60%">
      <el-tag size="medium">培训计划信息</el-tag>
      <el-descriptions>
        <el-descriptions-item label="培训编号">{{ viewForm.planid }}</el-descriptions-item>
        <el-descriptions-item label="培训单位/部门">{{ viewForm.dept }}</el-descriptions-item>
        <el-descriptions-item label="培训项目">{{ viewForm.program }}</el-descriptions-item>
        <el-descriptions-item label="是否必修课">{{ viewForm.type }}</el-descriptions-item>
        <el-descriptions-item label="培训人数">{{ viewForm.number }}</el-descriptions-item>
        <el-descriptions-item label="培训讲师">{{ viewForm.teacher }}</el-descriptions-item>
        <el-descriptions-item label="培训费用">{{ viewForm.money }}</el-descriptions-item>
        <el-descriptions-item label="开始时间">{{ viewForm.begintime }}</el-descriptions-item>
        <el-descriptions-item label="结束时间">{{ viewForm.endtime }}</el-descriptions-item>
        <el-descriptions-item label="培训状态">{{ viewForm.status }}</el-descriptions-item>
      </el-descriptions>

      <el-divider v-if="viewCourse.length!==0"></el-divider>
      <el-tag v-if="viewCourse.length!==0">培训课程</el-tag>
      <el-descriptions v-for="(item,i ) in viewCourse" :key="i">
        <el-descriptions-item label="课程名称">{{ item.courseName }}</el-descriptions-item>
        <el-descriptions-item label="所属分类">{{ item.classification }}</el-descriptions-item>
        <el-descriptions-item label="培训形式">{{ item.format }}</el-descriptions-item>
        <el-descriptions-item label="考核方式">{{ item.examination }}</el-descriptions-item>
        <el-descriptions-item label="内/外部培训">{{ item.train }}</el-descriptions-item>
        <el-descriptions-item label="学习时长">{{ item.hour }}</el-descriptions-item>
        <!-- <el-descriptions-item label="考试开始时间">{{ item.ExamStartTime }}</el-descriptions-item>
        <el-descriptions-item label="考试结束时间">{{ item.ExamEndTime }}</el-descriptions-item>
        <el-descriptions-item label="考试时长">{{ item.ExammingTime }}</el-descriptions-item>
        <el-descriptions-item label="满分">{{ item.FullScore }}</el-descriptions-item> -->
      </el-descriptions>

      <!-- <el-divider></el-divider>
      <el-tag>培训记录</el-tag>
      <el-descriptions>
        <el-descriptions-item label="课程名称">{{ viewForm.CourseTitle }}</el-descriptions-item>
        <el-descriptions-item label="所属分类">{{ viewForm.Subcategory }}</el-descriptions-item>
        <el-descriptions-item label="参加培训人">{{ viewForm.TrainForm }}</el-descriptions-item>
        <el-descriptions-item label="培训开始时间">{{ viewForm.EvaluationMode }}</el-descriptions-item>
        <el-descriptions-item label="培训结束时间">{{ viewForm.InOrOut }}</el-descriptions-item>
        <el-descriptions-item label="需培训时长">{{ viewForm.TrainCost }}</el-descriptions-item>
        <el-descriptions-item label="培训总时长">{{ viewForm.StartTime }}</el-descriptions-item>
        <el-descriptions-item label="是否计划内">{{ viewForm.EndTime }}</el-descriptions-item>
      </el-descriptions> -->

      <!-- <el-divider></el-divider>
      <el-tag>考试记录</el-tag>
      <el-descriptions>
        <el-descriptions-item label="课程名称">{{ viewForm.CourseTitle }}</el-descriptions-item>
        <el-descriptions-item label="所属分类">{{ viewForm.Subcategory }}</el-descriptions-item>
        <el-descriptions-item label="参考人">{{ viewForm.TrainForm }}</el-descriptions-item>
        <el-descriptions-item label="考试开始时间">{{ viewForm.EvaluationMode }}</el-descriptions-item>
        <el-descriptions-item label="考试结束时间">{{ viewForm.InOrOut }}</el-descriptions-item>
        <el-descriptions-item label="参考时长">{{ viewForm.TrainCost }}</el-descriptions-item>
        <el-descriptions-item label="得分">{{ viewForm.StartTime }}</el-descriptions-item>
        <el-descriptions-item label="是否计划内">{{ viewForm.EndTime }}</el-descriptions-item>
      </el-descriptions> -->
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="viewVisible = false">退出</el-button>
      </span>
    </el-dialog>

    <!-- 修改表格内容的对话框 -->
    <el-dialog title="修改当前培训计划信息" append-to-body :visible.sync="editVisible" width="50%">
      <!-- <commonForm ref="dialog" /> -->
      <commonForm v-if="editVisible" v-bind:editList="editList" ref="editForm" :before-close="handleClose" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="edit">取 消</el-button>
        <el-button type="primary" @click="edit">提 交</el-button>
      </span>
    </el-dialog>
    <!-- 培训计划表 -->
    <div>
      <el-table :data="tableData" 
      height="calc(100vh - 235px)"
      fit
      :header-cell-style="{background: '#165DFF',color:'#fff',font:'500 14px PingFang SC'}"
      @row-dblclick="tableClick" style="width: 100%;">
        <el-table-column type="index" fixed label="序号" width="50">
        </el-table-column>
        <el-table-column prop="planid" fixed label="培训编号">
        </el-table-column>
        <el-table-column prop="dept" label="培训单位/部门">
        </el-table-column>
        <el-table-column prop="program" label="培训项目">
        </el-table-column>
        <el-table-column prop="type" label="是否必修课">
        </el-table-column>
        <el-table-column prop="number" label="培训人数">
        </el-table-column>
        <el-table-column prop="teacher" label="培训讲师">
        </el-table-column>
        <el-table-column prop="money" label="培训费用">
        </el-table-column>
        <el-table-column prop="begintime" label="开始时间">
        </el-table-column>
        <el-table-column prop="endtime" label="结束时间">
        </el-table-column>
        <el-table-column prop="status" label="培训状态">
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
import { inquireCourseById } from '@/api/TrainingManagement/trainCourseById.js'
export default {
  name: 'TrainPlan',
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
        project: '',
        teacher: '',
        lesson: '',
        member: '',
        date: ''
      },
      viewForm: {},
      viewCourse: []
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
        console.log(res)
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
      // console.log(row.planid)
      inquireCourseById({ planid: row.planid }).then(res => {
        console.log(res)
        this.viewCourse = res.rows
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
.el-tag {
  margin-bottom: 20px;
}
</style>