<template>
  <div class="assistant">
    <div class="top-form">
      员工号搜索:
      <el-input v-model="gh" placeholder="请输入员工号" clearable @clear="getAllDepart" class="top-input">
      </el-input>

      <div class="top-container">
        <el-button type="primary" @click="inquirer" icon="el-icon-search" size="small">查询</el-button>
        <!-- <el-button type="primary" @click="dialogVisible = true" icon="el-icon-search" size="small">高级查询</el-button> -->
      </div>
      <div class="top-button">
        <el-button type="primary" icon="el-icon-upload" @click="applyVisible = true" size="small">申请</el-button>
        <!-- <el-button type="primary" icon="el-icon-upload" size="small">审核</el-button> -->
        <el-button type="primary" icon="el-icon-circle-plus" @click="uploadVisible = true" size="small">上传</el-button>
        <el-button type="primary" icon="el-icon-circle-plus" @click="exportVisible = true" size="small">导出</el-button>
      </div>
    </div>

    <!-- 离职管理表 -->
    <div>
      <el-table :data="tableData" height="calc(100vh - 235px)" fit
        :header-cell-style="{ background: '#165DFF', color: '#fff', font: '500 14px PingFang SC' }"
        @row-dblclick="tableClick" style="width: 100%;">
        <el-table-column type="index" fixed label="序号" width="80">
        </el-table-column>
        <el-table-column prop="xm" fixed label="申请人" min-width="110">
        </el-table-column>
        <el-table-column prop="gh" label="员工号" min-width="120">
        </el-table-column>
        <el-table-column prop="zw" label="职位" min-width="110">
        </el-table-column>
        <el-table-column prop="ssbm" label="所属部门" min-width="120">
        </el-table-column>
        <el-table-column prop="sqrq" label="申请日期" min-width="120">
        </el-table-column>
        <el-table-column prop="rzrq" label="入职日期" min-width="120">
        </el-table-column>
        <el-table-column prop="lzrq" label="离职日期" min-width="120">
        </el-table-column>
        <el-table-column prop="jjr" label="交接人" min-width="120">
        </el-table-column>
        <el-table-column prop="shzt" label="审核状态" min-width="120">
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="180">
          <template slot-scope="scope">
            <el-button @click="handleClickEdit(scope.row)" type="text" size="small">修改</el-button>
            <el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 高级查询的对话框 -->
    <el-dialog title="高级查询" append-to-body :visible.sync="dialogVisible" width="70%">
      <span>这是高级查询</span>
      <query></query>

    </el-dialog>

    <!-- 申请的对话框 -->
    <el-dialog title="申请" append-to-body :visible.sync="applyVisible" width="80%">
      <Apply v-if="applyVisible" ref="addForm" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="applyVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 上传的对话框 -->
    <el-dialog title="上传" append-to-body :visible.sync="uploadVisible" width="50%">
      <Upload />
      <span slot="footer" class="dialog-footer">
        <el-button @click="uploadVisible = false">取 消</el-button>
        <el-button type="primary" @click="uploadVisible = false">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 导出的对话框 -->
    <el-dialog title="导出" append-to-body :visible.sync="exportVisible" width="50%">
      <span slot="footer" class="dialog-footer">
        <el-button @click="exportVisible = false">取 消</el-button>
        <el-button type="primary" @click="exportVisible = false">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 修改表格内容的对话框 -->
    <el-dialog title="修改当前职位信息" append-to-body :visible.sync="editVisible" width="80%">
      <!-- <commonForm ref="dialog" /> -->
      <Apply v-if="editVisible" v-bind:editList="editList" ref="editForm" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="edit">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 查看表格内容的对话框 -->
    <el-dialog title="查看职位信息" append-to-body :visible.sync="checkVisible" width="60%">
      <el-descriptions>
        <el-descriptions-item label="申请人">{{ viewForm.Applicant }}</el-descriptions-item>
        <el-descriptions-item label="申请日期">{{ viewForm.applicateDate }}</el-descriptions-item>
        <el-descriptions-item label="类型">{{ viewForm.Type }}</el-descriptions-item>
        <el-descriptions-item label="员工号">{{ viewForm.employeeID }}</el-descriptions-item>
        <el-descriptions-item label="姓 名">{{ viewForm.Name }}</el-descriptions-item>
        <el-descriptions-item label="入职日期">{{ viewForm.enrollDate }}</el-descriptions-item>
        <el-descriptions-item label="所属部门">{{ viewForm.DepName }}</el-descriptions-item>
        <el-descriptions-item label="职 位">{{ viewForm.Position }}</el-descriptions-item>
        <el-descriptions-item label="交接人">{{ viewForm.Successor }}</el-descriptions-item>
        <el-descriptions-item label="审核状态">{{ viewForm.Status }}</el-descriptions-item>
      </el-descriptions>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="checkVisible = false">退出</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import addModify from '@/views/personnelManage/personnel/laborContSign/components/addModify.vue';
import query from '@/views/personnelManage/personnel/laborContSign/components/query.vue';
import Apply from './components/apply.vue'
import Upload from './components/upload.vue'

import {
  addDepartApp,
  inquireDepartApp,
  inquireOnlyDepartApp,
  editDepartApp,
  deleteDepartApp
} from '@/api/StaffManagement/depart.js'

export default {
  name: 'Depart',
  components: { addModify, query, Apply, Upload },
  data() {
    return {
      dialogVisible: false,
      applyVisible: false,
      uploadVisible: false,
      exportVisible: false,
      checkVisible: false,
      editVisible: false,
      tableData: [],

      gh: '',
      viewForm: {},
      editList: {},
      currentRow: null
    }
  },
  created() {
    this.getAllDepart()
  },
  methods: {
    // 获取所有职位信息
    getAllDepart() {
      inquireDepartApp().then((res) => {
        if (res.code == 200) {
          // console.log('111111111111', res);
          this.tableData = res.rows
        }
      })
    },

    //模糊查询
    inquirer() {
      if (!this.gh) {
        this.getAllDepart()
      } else {
        inquireOnlyDepartApp(this.gh).then((res) => {
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

    // 新增提交
    add() {
      // console.log(this.$refs)
      const data = this.$refs.addForm.personalData
      addDepartApp(data).then((res) => {
        if (res.code == 200) {
          // console.log('222222', res)
        }
      })
      this.getAllDepart()
      this.applyVisible = false
    },

    // 修改提交
    edit() {
      // console.log(this.$refs.editForm.form)
      const data = this.$refs.editForm.personalData
      // console.log('22222222', data);
      editDepartApp(data).then((res) => {
        if (res.code == 200) {
          console.log(res);
        }
      })
      this.getAllDepart()
      this.editVisible = false
    },

    //删除
    deleteRow(index, rows) {
      // console.log(rows[index].ygh)
      const gh = rows[index].gh
      deleteDepartApp(gh).then((res) => {
        if (res.code == 200) {
          console.log(res)
          rows.splice(index, 1)
        }
      })
    },



    //双击查看
    tableClick(row) {
      console.log(row)
      this.checkVisible = true
      this.viewForm = row
    },
    //修改
    handleClickEdit(row) {
      this.editVisible = true
      // console.log(row)
      this.editList = row
      //父组件可以直接修改子组件的变量
      // this.$refs.dialog.form = row;
    },

    /* 表格选中行 */
    handleCurrentChange(val) {
      this.currentRow = val;
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../../../assets/styles/appMain.css';


.top-input {
  width: 250px;
}

.top-container {
  position: absolute;
  top: 0;
  left: 350px;
}

.top-button {
  position: absolute;
  top: 0;
  right: 0px;
}

.table-inform {
  position: absolute;
  right: 11%;
  top: 0;
}

.table-export {
  position: absolute;
  right: 4%;
  top: 0;
}
</style>