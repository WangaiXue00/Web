<template>
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="员工号搜索：">
          <el-input v-model="formInline.ygh" placeholder="请输入员工号" size="small" clearable
            @clear="getAllLaborCont"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="inquirer" icon="el-icon-search" size="small">查询</el-button>
        </el-form-item>
        <!-- <el-form-item>
          <el-button type="primary" @click="dialogVisible = true" icon="el-icon-search" size="small">高级查询</el-button>
        </el-form-item> -->
        <!-- <el-form-item class="table-inform">
          <el-button type="primary" @click="informVisible = true" icon="el-icon-circle-plus-outline"
            size="small">通知</el-button>
        </el-form-item> -->
        <el-form-item class="table-export">
          <el-button type="primary" @click="exportVisible = true" icon="el-icon-circle-plus-outline"
            size="small">导出</el-button>
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
        <!-- <el-table-column prop="empStatus" fixed label="任职状态" width="100">
        </el-table-column> -->
        <el-table-column prop="ygh" label="工号" min-width="120">
        </el-table-column>
        <el-table-column prop="xm" label="姓名" min-width="120">
        </el-table-column>
        <el-table-column prop="rzsj" label="入职日期" min-width="130">
        </el-table-column>
        <el-table-column prop="ywbm" label="所属部门" min-width="150">
        </el-table-column>
        <el-table-column prop="htzw" label="职位" min-width="120">
        </el-table-column>
        <!-- <el-table-column prop="Rank" label="职级" width="100">
        </el-table-column> -->
        <!-- <el-table-column prop="mobileNum" label="手机号" width="150">
        </el-table-column>
        <el-table-column prop="Leader" label="直接领导" width="100">
        </el-table-column> -->
        <el-table-column prop="htksrq" label="劳动合同末次签订日期" min-width="200">
        </el-table-column>
        <el-table-column prop="htfj" label="劳动合同" min-width="200">
        </el-table-column>
        <!-- <el-table-column fixed="right" label="操作" align="center" width="180">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
          </template>
        </el-table-column> -->
      </el-table>
    </div>

    <!-- 高级查询的对话框 -->
    <!-- <el-dialog title="高级查询" append-to-body :visible.sync="dialogVisible" width="70%" :before-close="handleClose">
      <span>这是高级查询</span>
      <query></query>
    </el-dialog> -->

    <!-- 通知的对话框 -->
    <!-- <el-dialog title="通知" append-to-body :visible.sync="informVisible" width="70%" :before-close="handleClose">
      <Inform />
      <span slot="footer" class="dialog-footer">
        <el-button @click="informVisible = false">取 消</el-button>
        <el-button type="primary" @click="informVisible = false">提 交</el-button>
      </span>
    </el-dialog> -->

    <!-- 导出的对话框 -->
    <el-dialog title="导出" append-to-body :visible.sync="exportVisible" width="50%" :before-close="handleClose">
      <Export />
      <span slot="footer" class="dialog-footer">
        <el-button @click="exportVisible = false">取 消</el-button>
        <el-button type="primary" @click="exportVisible = false">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 修改表格内容的对话框 -->
    <!-- <el-dialog title="修改当前职位信息" append-to-body :visible.sync="editVisible" width="80%" :before-close="handleClose">
      <addModify v-if="editVisible" v-bind:editList="editList" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="editVisible = false">提 交</el-button>
      </span>
    </el-dialog>
 -->
    <!-- 查看表格内容的对话框 -->
    <el-dialog title="查看职位信息" append-to-body :visible.sync="checkVisible" width="60%">
      <el-descriptions>
        <el-descriptions-item label="任职状态">{{ viewForm.empStatus }}</el-descriptions-item>
        <el-descriptions-item label="工号">{{ viewForm.employeeID }}</el-descriptions-item>
        <el-descriptions-item label="姓名">{{ viewForm.Name }}</el-descriptions-item>
        <el-descriptions-item label="入职日期">{{ viewForm.enrollDate }}</el-descriptions-item>
        <el-descriptions-item label="所属部门">{{ viewForm.DepName }}</el-descriptions-item>
        <el-descriptions-item label="职位">{{ viewForm.Position }}</el-descriptions-item>
        <el-descriptions-item label="职级">{{ viewForm.Rank }}</el-descriptions-item>
        <el-descriptions-item label="手机号">{{ viewForm.mobileNum }}</el-descriptions-item>
        <el-descriptions-item label="直接领导">{{ viewForm.Leader }}</el-descriptions-item>
        <el-descriptions-item label="劳动合同末次签订日期">{{ viewForm.contractDate }}</el-descriptions-item>
        <el-descriptions-item label="劳动合同">{{ viewForm.Contract }}</el-descriptions-item>
      </el-descriptions>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="checkVisible = false">退出</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import query from '@/views/personnelManage/personnel/laborContract/components/query.vue';
import Inform from './components/inform.vue'
import Export from './components/export.vue'

import {
  inquireLaborContract,
  inquireOnlyLaborContract,
} from '@/api/StaffManagement/laborContSign.js'

export default {
  name: 'LaborContract',
  components: { query, Inform, Export },
  data() {
    return {
      dialogVisible: false,
      informVisible: false,
      exportVisible: false,
      checkVisible: false,
      editVisible: false,
      tableData: [],
      formInline: {
        ygh: ''
      },
      viewForm: {},
      editList: {},
      currentRow: null
    }
  },
  created() {
    this.getAllLaborCont()
  },
  methods: {
    // 获取所有职位信息
    getAllLaborCont() {
      inquireLaborContract().then((res) => {
        if (res.code == 200) {
          // console.log('111111111111', res);
          this.tableData = res.rows
        }
      })
    },
    //模糊查询
    inquirer() {
      if (!this.formInline.ygh) {
        this.getAllLaborCont()
      } else {
        inquireOnlyLaborContract(this.formInline.ygh).then((res) => {
          if (res.code == 200 && res.data) {
            console.log(res);
            this.tableData = []
            this.tableData[0] = res.data
          } else {
            this.tableData = []
          }
        })
      }
    },
    //双击查看
    tableClick(row) {
      console.log(row)
      this.checkVisible = true
      this.viewForm = row
    },
    //修改
    /* handleClickEdit(row) {
      this.editVisible = true
      console.log(row)
      this.editList = row
      //父组件可以直接修改子组件的变量
      // this.$refs.dialog.form = row;
    }, */
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
      console.log('1111111111111', this.currentRow);
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../../../assets/styles/appMain.css';


.table-inform {
  position: absolute;
  right: 11%;
  top: 0;
}

.table-export {
  position: absolute;
  right: -9px;
  top: 0;
}
</style>