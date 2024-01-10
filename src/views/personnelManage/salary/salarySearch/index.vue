<template>
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="姓名搜索：">
          <el-input v-model="formInline.xm" placeholder="请输入姓名" size="small" clearable @clear="getAllSalary"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="inquirer" icon="el-icon-search" size="small">查询</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 基本薪资表 -->
    <div>
      <el-table :data="tableData" height="calc(100vh - 235px)" fit
        :header-cell-style="{ background: '#165DFF', color: '#fff', font: '500 14px PingFang SC' }"
        @row-dblclick="tableClick" style="width: 100%;">
        <el-table-column type="index" fixed label="序号" width="60">
        </el-table-column>
        <el-table-column prop="ygh" label="员工号" min-width="110">
        </el-table-column>
        <el-table-column prop="xm" label="姓名" min-width="110">
        </el-table-column>
        <el-table-column prop="gzyf" label="工资月份" min-width="120">
        </el-table-column>
        <el-table-column prop="bzxz" label="标准薪资" min-width="110">
        </el-table-column>
        <el-table-column label="增 项">
          <el-table-column prop="jj" label="奖金" min-width="100">
          </el-table-column>
          <el-table-column prop="tc" label="提成" min-width="100">
          </el-table-column>
          <el-table-column prop="gwf" label="高温费" min-width="100">
          </el-table-column>
          <el-table-column prop="jbf" label="加班费" min-width="100">
          </el-table-column>
          <el-table-column prop="zbb" label="值备班" min-width="100">
          </el-table-column>
          <el-table-column prop="bf" label="补发" min-width="100">
          </el-table-column>
          <el-table-column prop="qtzx" label="其他增项" min-width="100">
          </el-table-column>
        </el-table-column>
        <el-table-column prop="zxhj" label="增项合计" min-width="110">
        </el-table-column>
        <el-table-column label="减项">
          <el-table-column prop="sj" label="事假" min-width="100">
          </el-table-column>
          <el-table-column prop="bj" label="病假" min-width="100">
          </el-table-column>
          <el-table-column prop="tqkk" label="其他扣款" min-width="100">
          </el-table-column>
        </el-table-column>
        <el-table-column prop="jxhj" label="减项合计" min-width="110">
        </el-table-column>
        <el-table-column label="代扣">
          <el-table-column prop="sbgrjnbf" label="社保个人缴纳部分" min-width="140">
          </el-table-column>
          <el-table-column prop="sbgsjnbf" label="社保公司缴纳部分" min-width="140">
          </el-table-column>
          <el-table-column prop="gjjgrjnbf" label="公积金个人缴纳部分" min-width="150">
          </el-table-column>
          <el-table-column prop="gjjgsjnbf" label="公积金公司缴纳部分" min-width="150">
          </el-table-column>
          <el-table-column prop="grsds" label="个人所得税" min-width="120">
          </el-table-column>
        </el-table-column>
        <el-table-column prop="grdkhj" label="个人代扣合计" min-width="120">
        </el-table-column>
        <el-table-column prop="sfgz" label="实发工资" min-width="120">
        </el-table-column>
      </el-table>
    </div>


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
import {
  getBascSalary,
} from '@/api/SalaryManagement/salarySearch.js'
export default {
  name: 'SalarySearch',
  components: {},
  data() {
    return {
      checkVisible: false,
      tableData: [],
      formInline: {
        xm: ''
      },
      viewForm: {},
      currentRow: null
    }
  },
  created() {
    this.getAllSalary()
  },
  methods: {
    // 获取所有职位信息
    getAllSalary() {
      getBascSalary().then((res) => {
        if (res.code == 200) {
          // console.log('111111111111', res);
          this.tableData = res.rows
        }
      })
    },
    //模糊查询
    inquirer() {
      if (!this.formInline.xm) {
        this.getAllSalary()
      } else {
        getBascSalary(this.formInline).then((res) => {
          // console.log(res);
          if (res.code == 200 && res.rows) {
            this.tableData = res.rows
          } else {
            this.tableData = []
          }
        })
      }
    },
    //查看
    tableClick(row) {
      this.checkVisible = true
      this.viewForm = row
    },

    /* 表格选中行 */
    handleCurrentChange(val) {
      this.currentRow = val;
    },
  }
}
</script>

<style scoped lang="scss">
@import '../../../../assets/styles/appMain.css';
</style>