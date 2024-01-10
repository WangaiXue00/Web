<template>
  <div class="assistant">
    <div class="top-form">
      申请人：
      <el-input v-model="serch.xm" placeholder="请输入内容" size="small" style="width: 130px;" clearable></el-input>
      申请日期:
      <el-date-picker v-model="serch.sqrq" type="date" size="small" value-format="yyyy-MM-dd" clearable placeholder="选择日期"
        style="width: 130px;">
      </el-date-picker>


      <div class="top-container">
        <el-button type="primary" @click="inquirer" icon="el-icon-search" size="small">查询</el-button>
      </div>
      <div class="top-button">
        <el-button type="primary" icon="el-icon-upload" @click="applyVisible = true" size="small">申请调薪调岗</el-button>
      </div>
    </div>

    <!-- 劳动合同管理表 -->
    <div>
      <el-table :data="tableData" height="calc(100vh - 235px)" fit
        :header-cell-style="{ background: '#165DFF', color: '#fff', font: '500 14px PingFang SC' }"
        @row-dblclick="tableClick" style="width: 100%;">
        <el-table-column type="index" fixed label="序号" width="50">
        </el-table-column>
        <el-table-column prop="sqrq" fixed label="申请日期" min-width="100">
        </el-table-column>
        <el-table-column prop="dqzt" label="当前状态" min-width="100">
        </el-table-column>
        <el-table-column prop="xm" label="姓名" min-width="100">
        </el-table-column>
        <el-table-column prop="tzqbm" label="调整前部门" min-width="100">
        </el-table-column>
        <el-table-column prop="tzhbm" label="调整后部门" min-width="100">
        </el-table-column>
        <el-table-column prop="tzqzw" label="调整前职位" min-width="120">
        </el-table-column>
        <el-table-column prop="tzhzw" label="调整后职位" min-width="100">
        </el-table-column>
        <el-table-column prop="tzqxz" label="调整前薪资" min-width="100">
        </el-table-column>
        <el-table-column prop="tzhxz" label="调整后薪资" min-width="100">
        </el-table-column>
        <el-table-column prop="txbfb" label="调薪百分比" min-width="120">
        </el-table-column>
        <el-table-column prop="bdsxrq" label="变动生效日期" min-width="120">
        </el-table-column>
        <el-table-column prop="bz" label="备注" min-width="120">
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="180">
          <template slot-scope="scope">
            <!-- <el-button @click="handleClickEdit(scope.row)" type="text" size="small">修改</el-button> -->
            <el-button type="text" size="small" @click="isExamine(scope.row)">审核</el-button>
            <!-- <el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button> -->
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 申请的对话框 -->
    <el-dialog title="申请调岗调薪" append-to-body :visible.sync="applyVisible" width="80%">
      <Apply v-if="applyVisible" ref="addForm" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="applyVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 审核的对话框 -->
    <el-dialog title="审核" append-to-body :visible.sync="verifyVisible" width="50%">
      <el-table :data="verifyData" style="width: 100%;">
        <el-table-column prop="jdmc" label="节点名称"></el-table-column>
        <el-table-column prop="cllx" label="处理类型"></el-table-column>
        <el-table-column prop="clzt" label="处理状态"></el-table-column>
        <el-table-column prop="clr" label="处理人"></el-table-column>
        <el-table-column prop="clsj" label="处理时间"></el-table-column>
        <el-table-column prop="bz" label="备注"></el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="danger" @click="verifyVisible = false">审核不通过</el-button>
        <el-button type="primary" @click="verifyPass">审核通过</el-button>
      </span>
    </el-dialog>




    <!-- 修改表格内容的对话框 -->
    <el-dialog title="修改当前职位信息" append-to-body :visible.sync="editVisible" width="80%">
      <!-- <commonForm ref="dialog" /> -->
      <addModify v-if="editVisible" v-bind:editList="editList" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="editVisible = false">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 查看表格内容的对话框 -->
    <el-dialog title="查看职位信息" append-to-body :visible.sync="checkVisible" width="60%">
      <el-descriptions>
        <el-descriptions-item label="申请日期">{{ viewForm.sqrq }}</el-descriptions-item>
        <el-descriptions-item label="当前状态">{{ viewForm.dqzt }}</el-descriptions-item>
        <el-descriptions-item label="姓名">{{ viewForm.xm }}</el-descriptions-item>
        <el-descriptions-item label="调整前部门">{{ viewForm.tzqbm }}</el-descriptions-item>
        <el-descriptions-item label="调整后部门">{{ viewForm.tzhbm }}</el-descriptions-item>
        <el-descriptions-item label="调整前职位">{{ viewForm.tzqzw }}</el-descriptions-item>
        <el-descriptions-item label="调整后职位">{{ viewForm.tzhzw }}</el-descriptions-item>
        <el-descriptions-item label="调整前薪资">{{ viewForm.tzqxz }}</el-descriptions-item>
        <el-descriptions-item label="调整后薪资">{{ viewForm.tzhxz }}</el-descriptions-item>
        <el-descriptions-item label="调薪百分比">{{ viewForm.txbfb }}</el-descriptions-item>
        <el-descriptions-item label="变动生效日期">{{ viewForm.bdsxrq }}</el-descriptions-item>
        <el-descriptions-item label="备注">{{ viewForm.bz }}</el-descriptions-item>
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
import CreatContrat from './components/creatContrat.vue'
import Upload from './components/upload.vue'

import {
  inquirePosSal,
  addPosSal
} from '@/api/SalaryManagement/traPosSalary.js'
export default {
  name: 'TransferPositionSalary',
  components: { addModify, query, Apply, CreatContrat, Upload },
  data() {
    return {
      applyVisible: false,
      verifyVisible: false,
      editVisible: false,
      checkVisible: false,
      tableData: [],
      serch: {
        xm: '',
        sqrq: ''
      },
      // 审核数据
      verifyData: [{
        jdmc: '第一个节点',
        cllx: '指定部门负责人',
        clzt: '待审核',
        clr: '唐晓勇',
        clsj: '2023-07-26 16:23:33',
        bz: ''
      }],
      viewForm: {},
      editList: {},
      currentRow: null
    }
  },
  created() {
    this.getAllPosSalary()
  },
  methods: {

    // 获取所有职位信息
    getAllPosSalary() {
      inquirePosSal().then((res) => {
        if (res.code == 200) {
          // console.log('111111111111', res);
          this.tableData = res.rows
        }
      })
    },

    //模糊查询
    inquirer() {
      if (!this.serch.xm && !this.serch.sqrq) {
        this.getAllPosSalary()
      } else {
        inquirePosSal(this.serch).then((res) => {
          if (res.code == 200 && res.rows) {
            // console.log(res);
            this.tableData = res.rows
          } else {
            this.tableData = []
          }
        })
      }
    },

    // 新增申请调岗调薪提交
    add() {
      // console.log(this.$refs)
      const data = this.$refs.addForm.personalData
      data.dqzt = '审核中'
      data.bdsxrq = new Date()
      // console.log('11111', data);
      addPosSal(data).then((res) => {
        if (res.code == 200) {
          // console.log('222222', res)
        }
      })
      this.getAllPosSalary()
      this.applyVisible = false
    },

    // 审核
    isExamine(row) {
      this.verifyVisible = true
    },

    // 审核通过
    verifyPass() {
      this.$confirm('确认审核通过？')
        .then(_ => {
          this.verifyVisible = false
        })
        .catch(_ => { });
    },

    //双击查看
    tableClick(row) {
      // console.log(row)
      this.checkVisible = true
      this.viewForm = row
    },
    //修改
    /*  handleClickEdit(row) {
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
  left: 410px;
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
