<template>
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="员工号搜索：">
          <el-input v-model="formInline.ygh" placeholder="请输入员工号" size="small" clearable
            @clear="getAllSalaryInfo"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="inquirer" icon="el-icon-search" size="small">查询</el-button>
        </el-form-item>
        <el-form-item class="table-add">
          <el-button type="primary" @click="addVisible = true" icon="el-icon-circle-plus-outline"
            size="small">添加</el-button>
        </el-form-item>
        <el-form-item class="table-into">
          <el-button type="primary" @click="intoVisible = true" icon="el-icon-circle-plus-outline"
            size="small">导入</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 职位管理表 -->
    <div>
      <el-table :data="tableData" height="calc(100vh - 235px)" fit
        :header-cell-style="{ background: '#165DFF', color: '#fff', font: '500 14px PingFang SC' }"
        @row-dblclick="tableClick" style="width: 100%;">
        <el-table-column type="index" fixed label="序号" width="80">
        </el-table-column>
        <el-table-column prop="ygh" fixed label="员工号" min-width="120">
        </el-table-column>
        <el-table-column prop="xm" label="姓名" min-width="120">
        </el-table-column>
        <el-table-column prop="ssbm" label="所属部门" min-width="200">
        </el-table-column>
        <el-table-column prop="zw" label="职位" min-width="150">
        </el-table-column>
        <el-table-column prop="rzrq" label="入职日期" min-width="130">
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="180">
          <template slot-scope="scope">
            <el-button @click="handleClickEdit(scope.row)" type="text" size="small">修改</el-button>
            <el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 导入的对话框 -->
    <el-dialog title="导入" append-to-body :visible.sync="intoVisible" width="50%" :before-close="handleClose">
      <InportInfo />
      <span slot="footer" class="dialog-footer">
        <el-button @click="intoVisible = false">取 消</el-button>
        <el-button type="primary" @click="intoVisible = false">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 新增表格的对话框 -->
    <el-dialog title="添加" append-to-body :visible.sync="addVisible" width="70%">
      <addModify v-if="addVisible" ref="addForm" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="addVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 修改表格内容的对话框 -->
    <el-dialog title="修改基本薪资" append-to-body :visible.sync="editVisible" width="70%">
      <!-- <commonForm ref="dialog" /> -->
      <addModify v-if="(isEditVisible && editVisible)" :editList="editList" :bascsalary="bascsalary" ref="editForm" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="edit">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 查看表格内容的对话框 -->
    <el-dialog title="查看职位信息" append-to-body :visible.sync="checkVisible" width="60%">
      <el-descriptions>
        <el-descriptions-item label="员工号">{{ viewForm.employeeID }}</el-descriptions-item>
        <el-descriptions-item label="姓名">{{ viewForm.Name }}</el-descriptions-item>
        <el-descriptions-item label="所属部门">{{ viewForm.DepName }}</el-descriptions-item>
        <el-descriptions-item label="职位">{{ viewForm.Position }}</el-descriptions-item>
        <el-descriptions-item label="入职日期">{{ viewForm.enrollDate }}</el-descriptions-item>
      </el-descriptions>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="checkVisible = false">退出</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import addModify from './components/addModify.vue';
import InportInfo from './components/importInfo.vue'

import {
  addSalaryInfo,
  addBascSalary,
  inquireSalaryInfo,
  inquireOnlySalaryInfo,
  inquireBascSalary,
  editSalaryInfo,
  editBascSalary,
  deleteSalaryInfo
} from '@/api/SalaryManagement/salaryinfo.js'

export default {
  name: 'SalaryInfo',
  components: { addModify, InportInfo },
  data() {
    return {
      intoVisible: false,
      addVisible: false,
      checkVisible: false,
      editVisible: false,
      tableData: [],
      formInline: {
        ygh: ''
      },
      viewForm: {},
      editList: {},
      bascsalary: [],
      currentRow: null
    }
  },
  created() {
    this.getAllSalaryInfo()
  },
  computed: {
    isEditVisible() {
      if (Object.keys(this.editList).length > 0 && this.bascsalary.length > 0) {
        return true
      }
      return false
    }
  },
  methods: {
    // 获取所有个人薪资信息
    getAllSalaryInfo() {
      inquireSalaryInfo().then((res) => {
        if (res.code == 200) {
          // console.log('111111111111', res);
          this.tableData = res.rows
        }
      })
    },

    // 新增提交
    add() {
      const data = this.$refs.addForm.basicInfoData
      const salaryData = this.$refs.addForm.basicSalary
      const workDate = this.$refs.addForm.workDate

      salaryData.ygh = data.ygh
      salaryData.xm = data.xm
      salaryData.gzyf = workDate

      addSalaryInfo(data).then((res) => {
        if (res.code == 200) {
          console.log('222222', res)
        }
      })
      addBascSalary(salaryData).then((res) => {
        if (res.code == 200) {
          console.log('1111111111', res);
        }
      })
      this.getAllSalaryInfo()
      this.addVisible = false
    },

    // 修改提交
    edit() {
      const data = this.$refs.editForm.basicInfoData
      const salaryData = this.$refs.editForm.basicSalary
      const workDate = this.$refs.editForm.workDate

      salaryData.ygh = data.ygh
      salaryData.xm = data.xm
      salaryData.gzyf = workDate

      editSalaryInfo(data).then((res) => {
        if (res.code == 200) {
          // console.log('111', res);
        }
      })
      let isTrue = this.bascsalary.some((item, index) => {
        if (workDate == item.gzyf) {
          editBascSalary(salaryData).then((res) => {
            if (res.code == 200) {
              console.log('1111111111', res);
            }
          })
          return true
          // console.log(workDate);
        } else {
          return false
        }

      })
      if (!isTrue) {
        addBascSalary(salaryData).then((res) => {
          if (res.code == 200) {
            console.log('22222222', res);
          }
        })
      }
      // console.log('222', isTrue);
      this.getAllSalaryInfo()
      this.editVisible = false
    },
    //修改
    handleClickEdit(row) {
      const ygh = row.ygh
      // 获取基本信息表单，给editForm，传递给子组件
      inquireOnlySalaryInfo(ygh).then((res) => {
        if (res.code == 200) {
          // console.log('1111', res);
          this.editList = res.data
          // 基本薪资    获取基本薪资数据，给workDutyData，传递给子组件
          inquireBascSalary({ ygh: ygh }).then((res) => {
            if (res.code == 200) {
              // console.log('2222222', res);
              this.bascsalary = res.rows
              // console.log('父组件', this.bascsalary[0].gzyf);
            }
          })
        }
      })
      this.editVisible = true
    },

    //模糊查询
    inquirer() {
      if (!this.formInline.ygh) {
        this.getAllSalaryInfo()
      } else {
        inquireOnlySalaryInfo(this.formInline.ygh).then((res) => {
          if (res.code == 200 && res.data) {
            // console.log(res);
            this.tableData = []
            this.tableData[0] = res.data
          } else {
            this.tableData = []
          }
        })
      }
    },
    //查看
    tableClick(row) {
      console.log(row)
      this.checkVisible = true
      this.viewForm = row
    },

    //删除
    deleteRow(index, rows) {
      rows.splice(index, 1)
    },
    //弹窗的关闭提示方法
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => { })
    },
    /* 表格选中行 */
    handleCurrentChange(val) {
      this.currentRow = val;
      // console.log('1111111111111', this.currentRow);
    },
  }
}
</script>

<style scoped lang="scss">
@import '../../../../assets/styles/appMain.css';


.table-add {
  position: absolute;
  right: 75px;
  top: 0;
}


.table-into {
  position: absolute;
  right: -9px;
  top: 0;
}
</style>