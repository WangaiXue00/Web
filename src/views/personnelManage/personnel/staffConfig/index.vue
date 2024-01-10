<template>
  <div class="assistant">
    <div class="top-form">
      员工号搜索:
      <el-input v-model="ygh" placeholder="请输入员工号" clearable @clear="getAllPerConfig" class="top-input">
      </el-input>

      <div class="top-container">
        <el-button type="primary" @click="inquirer" icon="el-icon-search" size="small">查询</el-button>
        <!-- <el-button type="primary" @click="dialogVisible = true" icon="el-icon-search" size="small">高级查询</el-button> -->
      </div>
      <div class="top-button">
        <el-button type="primary" icon="el-icon-upload" @click="treeVisible = true" size="small">树级结构</el-button>
        <el-button type="primary" icon="el-icon-circle-plus" @click="addVisible = true" size="small">添加</el-button>
      </div>
    </div>

    <!-- 人员配置管理表 -->
    <div>
      <el-table :data="tableData" height="calc(100vh - 235px)" fit
        :header-cell-style="{ background: '#165DFF', color: '#fff', font: '500 14px PingFang SC' }"
        @row-dblclick="tableClick" style="width: 100%;">
        <el-table-column type="index" fixed label="序号" width="50">
        </el-table-column>
        <el-table-column prop="sqr" fixed label="申请人" min-width="110">
        </el-table-column>
        <el-table-column prop="sqrq" label="申请日期" min-width="120">
        </el-table-column>
        <el-table-column prop="ddr" label="调动人" min-width="110">
        </el-table-column>
        <el-table-column prop="ygh" label="员工号" min-width="120">
        </el-table-column>
        <!-- <el-table-column prop="rzrq" label="入职日期" width="110">
        </el-table-column> -->
        <el-table-column prop="ybm" label="原部门" min-width="110">
        </el-table-column>
        <el-table-column prop="yld" label="原领导" min-width="110">
        </el-table-column>
        <el-table-column prop="ddhbm" label="调动后部门" min-width="110">
        </el-table-column>
        <el-table-column prop="ddhld" label="调动后领导" min-width="110">
        </el-table-column>
        <el-table-column prop="sxrq" label="生效日期" min-width="110">
        </el-table-column>
        <!-- <el-table-column prop="tpzt" label="调配状态" width="100">
        </el-table-column>
        <el-table-column prop="fwsc" label="服务时长" width="100">
        </el-table-column> -->
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

    <!-- 树级结构 -->
    <el-dialog title="树级结构" append-to-body :visible.sync="treeVisible" width="50%">
      <span>这是树级结构</span>
      <TreeStruct />
      <span slot="footer" class="dialog-footer">
        <el-button @click="treeVisible = false">取 消</el-button>
        <el-button type="primary" @click="treeVisible = false">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 新增表格的对话框 -->
    <el-dialog title="添加" append-to-body :visible.sync="addVisible" width="80%">
      <AddModify v-if="addVisible" ref="addForm"></AddModify>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 修改表格内容的对话框 -->
    <el-dialog title="修改当前人员配置信息" append-to-body :visible.sync="editVisible" width="80%">
      <!-- <commonForm ref="dialog" /> -->
      <AddModify v-if="editVisible" v-bind:editList="editList" ref="editForm" />
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
        <el-descriptions-item label="调动人">{{ viewForm.Transfer }}</el-descriptions-item>
        <el-descriptions-item label="员工号">{{ viewForm.employeeID }}</el-descriptions-item>
        <el-descriptions-item label="入职日期">{{ viewForm.enrollDate }}</el-descriptions-item>
        <el-descriptions-item label="原部门">{{ viewForm.beforeDep }}</el-descriptions-item>
        <el-descriptions-item label="原领导">{{ viewForm.beforeLeader }}</el-descriptions-item>
        <el-descriptions-item label="调动后部门">{{ viewForm.afterDep }}</el-descriptions-item>
        <el-descriptions-item label="调动后领导">{{ viewForm.afterLeader }}</el-descriptions-item>
        <el-descriptions-item label="生效日期">{{ viewForm.effectiveDate }}</el-descriptions-item>
        <el-descriptions-item label="调配状态">{{ viewForm.deployState }}</el-descriptions-item>
        <el-descriptions-item label="服务时长">{{ viewForm.serviceTime }}</el-descriptions-item>
      </el-descriptions>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="checkVisible = false">退出</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import TreeStruct from './components/treeStruct.vue';
import AddModify from './components/addModify.vue'
import query from '@/views/personnelManage/personnel/laborContSign/components/query.vue';

import {
  addPerConfig,
  inquireAllPerConfig,
  inquireOnlyPerConfig,
  editPerConfig,
  deletePerConfig
} from '@/api/StaffManagement/personConfig.js'

export default {
  name: 'StaffConfig',
  components: { TreeStruct, AddModify, query },
  data() {
    return {
      dialogVisible: false,
      treeVisible: false,
      addVisible: false,
      checkVisible: false,
      editVisible: false,
      tableData: [],

      ygh: '',

      viewForm: {},
      editList: {},


      currentRow: null
    }
  },
  created() {
    this.getAllPerConfig()
  },
  methods: {
    // 获取所有职位信息
    getAllPerConfig() {
      inquireAllPerConfig().then((res) => {
        if (res.code == 200) {
          // console.log('111111111111', res);
          this.tableData = res.rows
        }
      })
    },

    //模糊查询
    inquirer() {
      if (!this.ygh) {
        this.getAllPerConfig()
      } else {
        inquireOnlyPerConfig(this.ygh).then((res) => {
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
      addPerConfig(data).then((res) => {
        if (res.code == 200) {
          // console.log('222222', res)
        }
      })
      this.getAllPerConfig()
      this.addVisible = false
    },

    // 修改提交
    edit() {
      // console.log(this.$refs.editForm.form)
      const data = this.$refs.editForm.personalData
      // console.log('22222222', data);
      editPerConfig(data).then((res) => {
        if (res.code == 200) {
          // console.log(res);
        }
      })
      this.getAllPerConfig()
      this.editVisible = false
    },

    //删除
    deleteRow(index, rows) {
      // console.log(rows[index].ygh)
      const ygh = rows[index].ygh
      deletePerConfig(ygh).then((res) => {
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
      console.log(row)
      this.editList = row
      //父组件可以直接修改子组件的变量
      // this.$refs.dialog.form = row;
    },

    /* 表格选中行 */
    handleCurrentChange(val) {
      this.currentRow = val;
      // console.log('1111111111111', this.currentRow);
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