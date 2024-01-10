<template>
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="培训项目:">
          <el-input v-model="formInline.program" placeholder="请输入培训项目" size="small"></el-input>
        </el-form-item>
        <el-form-item label="培训课程:">
          <el-input v-model="formInline.coursename" placeholder="请输入培训课程" size="small"></el-input>
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
    <el-dialog title="查看培训记录信息" append-to-body :visible.sync="viewVisible" width="60%">
      <el-descriptions>
        <el-descriptions-item label="培训单位/部门">{{ viewForm.dept}}</el-descriptions-item>
        <el-descriptions-item label="培训项目">{{ viewForm.program }}</el-descriptions-item>
        <el-descriptions-item label="是否必修课">{{ viewForm.type }}</el-descriptions-item>
        <el-descriptions-item label="培训人数">{{ viewForm.number }}</el-descriptions-item>
        <el-descriptions-item label="培训讲师">{{ viewForm.teacher }}</el-descriptions-item>
        <el-descriptions-item label="培训费用">{{ viewForm.money }}</el-descriptions-item>
        <el-descriptions-item label="培训状态">{{ viewForm.status }}</el-descriptions-item>
        <el-descriptions-item label="开始时间">{{ viewForm.begintime }}</el-descriptions-item>
        <el-descriptions-item label="结束时间">{{ viewForm.endtime }}</el-descriptions-item>
      </el-descriptions>
      <el-divider></el-divider>
      <el-tag>培训课程</el-tag>
      <el-descriptions>
        <el-descriptions-item label="课程名称">{{ viewForm.coursename}}</el-descriptions-item>
        <!-- <el-descriptions-item label="所属分类">{{ viewForm.TrainProj }}</el-descriptions-item>
        <el-descriptions-item label="培训形式">{{ viewForm.IsCompulsory }}</el-descriptions-item>
        <el-descriptions-item label="考核方式">{{ viewForm.TrainNumber }}</el-descriptions-item>
        <el-descriptions-item label="内/外部培训">{{ viewForm.TrainTeacher }}</el-descriptions-item> -->
        <el-descriptions-item label="培训费用">{{ viewForm.money }}</el-descriptions-item>
        <el-descriptions-item label="起始时间">{{ viewForm.begintime }}</el-descriptions-item>
        <el-descriptions-item label="结束时间">{{ viewForm.endtime }}</el-descriptions-item>
        <el-descriptions-item label="学习时长">{{ viewForm.hour }}</el-descriptions-item>
        <el-descriptions-item label="考试开始时间">{{ viewForm.examBegin }}</el-descriptions-item>
        <el-descriptions-item label="考试结束时间">{{ viewForm.examStop }}</el-descriptions-item>
        <el-descriptions-item label="考试时长">{{ viewForm.examHour }}</el-descriptions-item>
        <el-descriptions-item label="满分">{{ viewForm.score }}</el-descriptions-item>
      </el-descriptions>
      <el-divider v-if="viewAttendance.length!==0"></el-divider>
      <el-tag v-if="viewAttendance.length!==0">出勤成绩与结果分析</el-tag>
      <el-descriptions v-for="item in viewAttendance" :key="item.id">
        <el-descriptions-item label="业务部门">{{ item.dept}}</el-descriptions-item>
        <el-descriptions-item label="组 别">{{ item.group }}</el-descriptions-item>
        <el-descriptions-item label="职 位">{{ item.position }}</el-descriptions-item>
        <el-descriptions-item label="姓 名">{{ item.username }}</el-descriptions-item>
        <!-- <el-descriptions-item label="课程名称">{{ item. }}</el-descriptions-item>
        <el-descriptions-item label="培训形式">{{ item. }}</el-descriptions-item>
        <el-descriptions-item label="考核方式">{{ item. }}</el-descriptions-item>
        <el-descriptions-item label="内/外部培训">{{ item. }}</el-descriptions-item> -->
        <el-descriptions-item label="出勤情况">{{ item.attendance }}</el-descriptions-item>
        <el-descriptions-item label="考试分数">{{ item.score }}</el-descriptions-item>
        <el-descriptions-item label="是否合格">{{ item.qualified }}</el-descriptions-item>
        <el-descriptions-item label="培训备注">{{ item.note }}</el-descriptions-item>
        <!-- <el-descriptions-item label="说明">{{ item. }}</el-descriptions-item>
        <el-descriptions-item label="课程名称">{{ item.}}</el-descriptions-item>
        <el-descriptions-item label="培训形式">{{ item.type }}</el-descriptions-item>
        <el-descriptions-item label="考核方式">{{ item. }}</el-descriptions-item>
        <el-descriptions-item label="内/外部培训">{{ item. }}</el-descriptions-item> -->
        <el-descriptions-item label="应到人数">{{ item.attendanceExpected }}</el-descriptions-item>
        <el-descriptions-item label="实到人数">{{ item.attendanceActual }}</el-descriptions-item>
        <el-descriptions-item label="参加考试人数">{{ item.examParticipants }}</el-descriptions-item>
        <el-descriptions-item label="合格人数">{{ item.qualifiedCount }}</el-descriptions-item>
        <el-descriptions-item label="不合格人数">{{ item.unqualifiedCount }}</el-descriptions-item>
        <el-descriptions-item label="合格率">{{ item.passRate }}</el-descriptions-item>
        <el-descriptions-item label="最好成绩">{{ item.bestScore }}</el-descriptions-item>
        <el-descriptions-item label="最差成绩">{{ item.worstScore }}</el-descriptions-item>
        <el-descriptions-item label="平均成绩">{{ item.averageScore }}</el-descriptions-item>
      </el-descriptions>
      <!-- <el-divider></el-divider>
      <el-tag>结果分析</el-tag>
      <el-descriptions>
        <el-descriptions-item label="课程名称">{{ viewForm.TrainDept}}</el-descriptions-item>
        <el-descriptions-item label="培训形式">{{ viewForm.TrainProj }}</el-descriptions-item>
        <el-descriptions-item label="考核方式">{{ viewForm.IsCompulsory }}</el-descriptions-item>
        <el-descriptions-item label="内/外部培训">{{ viewForm.TrainNumber }}</el-descriptions-item>
        <el-descriptions-item label="应到人数">{{ viewForm.TrainTeacher }}</el-descriptions-item>
        <el-descriptions-item label="实到人数">{{ viewForm.TrainCost }}</el-descriptions-item>
        <el-descriptions-item label="参加考试人数">{{ viewForm.TrainState }}</el-descriptions-item>
        <el-descriptions-item label="合格人数">{{ viewForm.StartTime }}</el-descriptions-item>
        <el-descriptions-item label="不合格人数">{{ viewForm.EndTime }}</el-descriptions-item>
        <el-descriptions-item label="合格率">{{ viewForm.EndTime }}</el-descriptions-item>
        <el-descriptions-item label="最好成绩">{{ viewForm.EndTime }}</el-descriptions-item>
        <el-descriptions-item label="最差成绩">{{ viewForm.EndTime }}</el-descriptions-item>
        <el-descriptions-item label="平均成绩">{{ viewForm.EndTime }}</el-descriptions-item>
      </el-descriptions> -->

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="viewVisible = false">退出</el-button>
      </span>
    </el-dialog>

    <!-- 修改表格内容的对话框 -->
    <el-dialog title="修改当前培训记录信息" append-to-body :visible.sync="editVisible" width="50%">
      <!-- <commonForm ref="dialog" /> -->
      <commonForm v-if="editVisible" v-bind:editList="editList" ref="editForm" :before-close="handleClose" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="edit">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 培训记录表 -->
    <div>
      <el-table :data="tableData"
      height="calc(100vh - 235px)"
      fit
      :header-cell-style="{background: '#165DFF',color:'#fff',font:'500 14px PingFang SC'}"
       @row-dblclick="tableClick" style="width: 100%;line-height: 10px;">
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
        <!-- <el-table-column prop="CourseNum" label="课程数">
        </el-table-column>
        <el-table-column prop="CompletedNum" label="已完成课程数">
        </el-table-column>
        <el-table-column prop="UncompletedNum" label="未完成课程数">
        </el-table-column>
        <el-table-column prop="PlannedCompletionProgress" label="计划完成进度">
        </el-table-column> -->
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
import { inquireAttendance } from '@/api/TrainingManagement/AttendanceScore.js'
export default {
  name: 'TrainRecord',
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
        program: '',
        teacher: '',
        coursename: '',
        number: '',
        begintime: ''
      },
      viewForm: {},
      viewAttendance: []
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
      // console.log(row)
      // inquireCourseById({ planid: row.planid }).then(res => {
      //   console.log(res)
      //   this.viewCourse = res.rows
      // })

      inquireAttendance({ planid: row.planid }).then(res => {
        console.log(res)
        this.viewAttendance = res.rows
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