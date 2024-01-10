<template>
  <div class="assistant">
    <div class="top-form">
      员工号搜索:
      <el-input v-model="ygh" placeholder="请输入员工号" clearable @clear="getAllLaborCont" class="top-input">
      </el-input>

      <div class="top-container">
        <el-button type="primary" @click="inquirer" icon="el-icon-search" size="small">查询</el-button>
        <!-- <el-button type="primary" @click="dialogVisible = true" icon="el-icon-search" size="small">高级查询</el-button> -->
      </div>
      <div class="top-button">
        <el-button type="primary" icon="el-icon-upload" @click="applyVisible = true" size="small">申请</el-button>
        <el-button type="primary" icon="el-icon-circle-plus" @click="laborVisible = true" size="small">生成劳动合同</el-button>
        <el-button type="primary" icon="el-icon-circle-plus" @click="uploadVisible = true" size="small">上传</el-button>
        <el-button type="primary" icon="el-icon-circle-plus" @click="cancelVisible = true" size="small">作废</el-button>
        <el-button type="primary" icon="el-icon-circle-plus" @click="exportVisible = true" size="small">导出</el-button>
      </div>
    </div>

    <!-- 劳动合同管理表 -->
    <div>
      <el-table :data="tableData" height="calc(100vh - 235px)" fit
        :header-cell-style="{ background: '#165DFF', color: '#fff', font: '500 14px PingFang SC' }"
        @row-dblclick="tableClick" style="width: 100%;">
        <el-table-column type="index" fixed label="序号" width="50">
        </el-table-column>
        <el-table-column prop="sqsj" fixed label="申请时间" min-width="100">
        </el-table-column>
        <el-table-column prop="shzt" label="审核状态" min-width="100">
        </el-table-column>
        <el-table-column prop="ygh" label="员工号" min-width="100">
        </el-table-column>
        <el-table-column prop="xm" label="姓名" min-width="100">
        </el-table-column>
        <el-table-column prop="rzsj" label="入职时间" min-width="100">
        </el-table-column>
        <el-table-column prop="ywbm" label="业务部门" min-width="120">
        </el-table-column>
        <el-table-column prop="ssgs" label="所属公司" min-width="100">
        </el-table-column>
        <el-table-column prop="htlx" label="合同类型" min-width="100">
        </el-table-column>
        <el-table-column prop="htqx" label="合同期限" min-width="100">
        </el-table-column>
        <el-table-column prop="htksrq" label="合同开始日期" min-width="120">
        </el-table-column>
        <el-table-column prop="htjsrq" label="合同结束日期" min-width="120">
        </el-table-column>
        <el-table-column prop="htsyqx" label="合同试用期期限" min-width="120">
        </el-table-column>
        <el-table-column prop="syqksrq" label="试用期开始日期" min-width="120">
        </el-table-column>
        <el-table-column prop="syqjsrq" label="试用期结束日期" min-width="120">
        </el-table-column>
        <el-table-column prop="htzzrq" label="合同转正日期" min-width="120">
        </el-table-column>
        <el-table-column prop="htzw" label="合同职位" min-width="100">
        </el-table-column>
        <el-table-column prop="htzsxz" label="合同正式薪资" min-width="120">
        </el-table-column>
        <el-table-column prop="htsyqxz" label="合同试用期薪资" min-width="120">
        </el-table-column>
        <el-table-column prop="htqdcs" label="合同签订次数 " width="120">
        </el-table-column>
        <el-table-column prop="htfj" label="合同附件" min-width="100">
        </el-table-column>
        <el-table-column prop="htqsb" label="合同签收表" min-width="100">
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="180">
          <template slot-scope="scope">
            <!-- <el-button @click="handleClickEdit(scope.row)" type="text" size="small">修改</el-button> -->
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
    <el-dialog title="劳动合同申请" append-to-body :visible.sync="applyVisible" width="80%">
      <Apply v-if="applyVisible" ref="appForm" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="applyVisible = false">取 消</el-button>
        <el-button type="primary" @click="apply">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 生成劳动合同的对话框 -->
    <el-dialog title="生成" append-to-body :visible.sync="laborVisible" width="20%">
      <CreatContrat />
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="laborVisible = false">确 定</el-button>
        <el-button @click="laborVisible = false">取 消</el-button>
      </span>
    </el-dialog>

    <!-- 作废劳动合同的对话框 -->
    <el-dialog title="作废" append-to-body :visible.sync="cancelVisible" width="20%">
      <CreatContrat />
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="cancelVisible = false">确 定</el-button>
        <el-button @click="cancelVisible = false">取 消</el-button>
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
      <addModify v-if="editVisible" v-bind:editList="editList" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="editVisible = false">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 查看表格内容的对话框 -->
    <el-dialog title="查看职位信息" append-to-body :visible.sync="checkVisible" width="60%">
      <el-descriptions>
        <el-descriptions-item label="申请时间">{{ viewForm.applicateDate }}</el-descriptions-item>
        <el-descriptions-item label="审核状态">{{ viewForm.Status }}</el-descriptions-item>
        <el-descriptions-item label="员工号">{{ viewForm.employeeID }}</el-descriptions-item>
        <el-descriptions-item label="姓名">{{ viewForm.Name }}</el-descriptions-item>
        <el-descriptions-item label="入职时间">{{ viewForm.enrollDate }}</el-descriptions-item>
        <el-descriptions-item label="业务部门">{{ viewForm.Department }}</el-descriptions-item>
        <el-descriptions-item label="所属公司">{{ viewForm.Companies }}</el-descriptions-item>
        <el-descriptions-item label="合同类型">{{ viewForm.contractType }}</el-descriptions-item>
        <el-descriptions-item label="合同期限">{{ viewForm.contractPeriod }}</el-descriptions-item>
        <el-descriptions-item label="合同开始日期">{{ viewForm.contractBeginDate }}</el-descriptions-item>
        <el-descriptions-item label="合同结束日期">{{ viewForm.contractEndDate }}</el-descriptions-item>
        <el-descriptions-item label="合同试用期期限">{{ viewForm.contractProbationPeriod }}</el-descriptions-item>
        <el-descriptions-item label="试用期开始日期">{{ viewForm.ProbationBeginDate }}</el-descriptions-item>
        <el-descriptions-item label="试用期结束日期">{{ viewForm.ProbationEndDate }}</el-descriptions-item>
        <el-descriptions-item label="合同转正日期">{{ viewForm.contractFormalDate }}</el-descriptions-item>
        <el-descriptions-item label="合同职位">{{ viewForm.contractPosition }}</el-descriptions-item>
        <el-descriptions-item label="合同正式薪资">{{ viewForm.contractFormalSalary }}</el-descriptions-item>
        <el-descriptions-item label="合同试用期薪资">{{ viewForm.contractProbationSalary }}</el-descriptions-item>
        <el-descriptions-item label="合同签订次数">{{ viewForm.contractSignNum }}</el-descriptions-item>
        <el-descriptions-item label="合同附件">{{ viewForm.contractFile }}</el-descriptions-item>
        <el-descriptions-item label="合同签收表">{{ viewForm.contracTreceiptForm }}</el-descriptions-item>
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
  addLaborContract,
  inquireLaborContract,
  inquireOnlyLaborContract,
  // editLaborContract,
  deleteLaborContract
} from '@/api/StaffManagement/laborContSign.js'

export default {
  name: 'LaborContSign',
  components: { addModify, query, Apply, CreatContrat, Upload },
  data() {
    return {
      dialogVisible: false,
      applyVisible: false,
      laborVisible: false,
      uploadVisible: false,
      cancelVisible: false,
      exportVisible: false,
      editVisible: false,
      checkVisible: false,
      tableData: [],

      ygh: '',

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
      if (!this.ygh) {
        this.getAllLaborCont()
      } else {
        inquireOnlyLaborContract(this.ygh).then((res) => {
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

    // 新增申请
    apply() {
      // console.log(this.$refs)
      const data = this.$refs.appForm.labortContData
      addLaborContract(data).then((res) => {
        if (res.code == 200) {
          // console.log('222222', res)
        }
      })
      this.getAllLaborCont()
      this.applyVisible = false
    },

    //删除
    deleteRow(index, rows) {
      // console.log(rows[index].ygh)
      const ygh = rows[index].ygh
      deleteLaborContract(ygh).then((res) => {
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
</style>