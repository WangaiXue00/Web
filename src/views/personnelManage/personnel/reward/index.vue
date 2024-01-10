<template>
  <div class="assistant">
    <div class="top-form">
      员工号搜索:
      <el-input v-model="ygh" placeholder="请输入员工号" clearable @clear="getAllReward" class="top-input">
      </el-input>

      <div class="top-container">
        <el-button type="primary" @click="inquirer" icon="el-icon-search" size="small">查询</el-button>
        <!-- <el-button type="primary" @click="dialogVisible = true" icon="el-icon-search" size="small">高级查询</el-button> -->
      </div>
      <div class="top-button">
        <el-button type="primary" icon="el-icon-upload" @click="dealVisible = true" size="small">处理</el-button>
        <el-button type="primary" icon="el-icon-circle-plus" @click="addVisible = true" size="small">添加</el-button>
        <el-button type="primary" icon="el-icon-circle-plus" @click="exportVisible = true" size="small">导出</el-button>
      </div>
    </div>

    <!-- 惩奖管理表 -->
    <div>
      <el-table :data="tableData" height="calc(100vh - 235px)" fit
        :header-cell-style="{ background: '#165DFF', color: '#fff', font: '500 14px PingFang SC' }"
        @row-dblclick="tableClick" style="width: 100%;">
        <el-table-column type="index" fixed label="序号" width="50">
        </el-table-column>
        <el-table-column prop="ygh" fixed label="员工号" min-width="100">
        </el-table-column>
        <el-table-column prop="xm" label="姓名" min-width="110">
        </el-table-column>
        <el-table-column prop="rzsj" label="入职时间" min-width="100">
        </el-table-column>
        <el-table-column prop="ywbm" label="业务部门" min-width="90">
        </el-table-column>
        <el-table-column prop="zw" label="职 位" min-width="90">
        </el-table-column>
        <el-table-column prop="zj" label="职 级" min-width="110">
        </el-table-column>
        <el-table-column prop="jclx" label="奖惩类型" min-width="100">
        </el-table-column>
        <el-table-column prop="jcrq" label="奖惩日期" min-width="100">
        </el-table-column>
        <el-table-column prop="jcfs" label="奖惩方式" min-width="100">
        </el-table-column>
        <el-table-column prop="jcsx" label="奖惩事项" min-width="120">
        </el-table-column>
        <el-table-column prop="jcms" label="奖惩描述" min-width="120">
        </el-table-column>
        <el-table-column prop="jj" label="奖金" min-width="120">
        </el-table-column>
        <el-table-column prop="jcsqr" label="奖惩申请人" min-width="120">
        </el-table-column>
        <el-table-column prop="jcpdf" label="奖惩PDF" min-width="120">
        </el-table-column>
        <el-table-column prop="sfycl" label="是否已处理" min-width="120">
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

    <!-- 处理的对话框 -->
    <el-dialog title="处理" append-to-body :visible.sync="dealVisible" width="20%">
      <Deal />
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dealVisible = false">确 定</el-button>
        <el-button @click="dealVisible = false">取 消</el-button>
      </span>
    </el-dialog>

    <!-- 新增表格的对话框 -->
    <el-dialog title="添加" append-to-body :visible.sync="addVisible" width="80%">
      <addModify v-if="addVisible" ref="addForm"></addModify>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">提 交</el-button>
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
      <addModify v-if="editVisible" v-bind:editList="editList" ref="editForm" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="edit">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 查看表格内容的对话框 -->
    <el-dialog title="查看职位信息" append-to-body :visible.sync="checkVisible" width="60%">
      <el-descriptions>
        <el-descriptions-item label="员工号">{{ viewForm.ygh }}</el-descriptions-item>
        <el-descriptions-item label="姓名">{{ viewForm.xm }}</el-descriptions-item>
        <el-descriptions-item label="入职时间">{{ viewForm.rzsj }}</el-descriptions-item>
        <el-descriptions-item label="业务部门">{{ viewForm.ywbm }}</el-descriptions-item>
        <el-descriptions-item label="职 位">{{ viewForm.zw }}</el-descriptions-item>
        <el-descriptions-item label="职 级">{{ viewForm.zj }}</el-descriptions-item>
        <el-descriptions-item label="奖惩类型">{{ viewForm.jclx }}</el-descriptions-item>
        <el-descriptions-item label="奖惩日期">{{ viewForm.jcrq }}</el-descriptions-item>
        <el-descriptions-item label="奖惩方式">{{ viewForm.jcfs }}</el-descriptions-item>
        <el-descriptions-item label="奖惩事项">{{ viewForm.jcsx }}</el-descriptions-item>
        <el-descriptions-item label="奖惩描述">{{ viewForm.jcms }}</el-descriptions-item>
        <el-descriptions-item label="奖金">{{ viewForm.jj }}</el-descriptions-item>
        <el-descriptions-item label="奖惩申请人">{{ viewForm.jcsqr }}</el-descriptions-item>
        <el-descriptions-item label="奖惩PDF">{{ viewForm.jcpdf }}</el-descriptions-item>
        <el-descriptions-item label="是否已处理">{{ viewForm.sfycl }}</el-descriptions-item>
      </el-descriptions>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="checkVisible = false">退出</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import addModify from './components/addModify.vue';
import query from '@/views/personnelManage/personnel/laborContSign/components/query.vue';
import Deal from './components/deal.vue'

import {
  inquireReward,
  inquireOnlyReward,
  addReward,
  editReward,
  deleteReward
} from '@/api/StaffManagement/reward.js'

export default {
  name: 'Reward',
  components: { addModify, query, Deal },
  data() {
    return {
      dialogVisible: false,
      dealVisible: false,
      addVisible: false,
      exportVisible: false,
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
    this.getAllReward()
  },
  methods: {

    // 获取所有职位信息
    getAllReward() {
      inquireReward().then((res) => {
        if (res.code == 200) {
          this.tableData = res.rows
        }
      })
    },
    //模糊查询
    inquirer() {
      if (!this.ygh) {
        this.getAllReward()
      } else {
        inquireOnlyReward(this.ygh).then((res) => {
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
      // console.log(this.$refs.addForm.form)
      const data = this.$refs.addForm.personalData
      addReward(data).then((res) => {
        if (res.code == 200) {
          // console.log(res)
        }
      })
      this.getAllReward()
      this.addVisible = false
    },

    // 修改提交
    edit() {
      // console.log(this.$refs.editForm.form)
      const data = this.$refs.editForm.personalData
      console.log('22222222', data);
      editReward(data).then((res) => {
        if (res.code == 200) {
          // console.log(res);
        }
      })
      this.getAllReward()
      this.editVisible = false
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
    //删除
    deleteRow(index, rows) {
      // console.log(rows[index].ygh)
      const ygh = rows[index].ygh
      deleteReward(ygh).then((res) => {
        if (res.code == 200) {
          console.log(res)
          rows.splice(index, 1)
        }
      })
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