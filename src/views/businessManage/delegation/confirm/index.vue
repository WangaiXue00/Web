
<template>
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="工单号:">
          <el-input style="width: 130px;" v-model="formInline.gdh" placeholder="请输入工单号" size="small"></el-input>
        </el-form-item>
        <el-form-item label="客户名称:">
          <el-input style="width: 130px;" v-model="formInline.khmc" placeholder="请输入客户名称" size="small"></el-input>
        </el-form-item>
        <el-form-item label="受理时间:">
          <el-date-picker style="width: 230px;" v-model="formInline.slsj" type="daterange" size="small" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="工程师:">
          <el-input style="width: 130px;" v-model="formInline.gcs" placeholder="工程师" size="small"></el-input>
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
    <el-dialog title="新增" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
      <commonForm ref="addForm" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 查看表格内容的对话框 -->
    <el-dialog title="查看委外管理记录" :visible.sync="viewVisible" width="60%">
      <el-descriptions>
        <el-descriptions-item label="服务单号">{{ viewForm.fwdh }}</el-descriptions-item>
        <el-descriptions-item label="当前状态">{{ viewForm.dqzt }}</el-descriptions-item>
        <el-descriptions-item label="标记">{{ viewForm.bj }}</el-descriptions-item>
        <el-descriptions-item label="保修时间">{{ viewForm.bxsj }}</el-descriptions-item>
        <el-descriptions-item label="处理时长">{{ viewForm.clsc }}</el-descriptions-item>
        <el-descriptions-item label="主承修人">{{ viewForm.zcxr }}</el-descriptions-item>

        <el-descriptions-item label="客户名称">{{ viewForm.khmc }}</el-descriptions-item>
        <el-descriptions-item label="报修人">{{ viewForm.bxr }}</el-descriptions-item>
        <el-descriptions-item label="保修电话">{{ viewForm.bxdh }}</el-descriptions-item>
        <el-descriptions-item label="设备编号">{{ viewForm.sbbh }}</el-descriptions-item>
        <el-descriptions-item label="设备名称">{{ viewForm.sbmc }}</el-descriptions-item>
        <el-descriptions-item label="设备品牌">{{ viewForm.sbpp }}</el-descriptions-item>
        <el-descriptions-item label="保修状态">{{ viewForm.bxzt }}</el-descriptions-item>
        <el-descriptions-item label="启用日期">{{ viewForm.qyrq }}</el-descriptions-item>

      </el-descriptions>
      <el-divider></el-divider>
      <h3>处理过程</h3>
      <br>
      <el-descriptions>
        <el-descriptions-item label="操作时间">{{ viewForm.fwdh }}</el-descriptions-item>
        <el-descriptions-item label="处理人">{{ viewForm.dqzt }}</el-descriptions-item>
        <el-descriptions-item label="处理时长">{{ viewForm.bj }}</el-descriptions-item>
        <el-descriptions-item label="故障原因">{{ viewForm.bxsj }}</el-descriptions-item>
        <el-descriptions-item label="处理措施/结果">{{ viewForm.clsc }}</el-descriptions-item>
        <el-descriptions-item label="处理进度">{{ viewForm.fwdh }}</el-descriptions-item>
        <el-descriptions-item label="下步处理">{{ viewForm.dqzt }}</el-descriptions-item>
        <el-descriptions-item label="下步处理人">{{ viewForm.bj }}</el-descriptions-item>
        <el-descriptions-item label="下步协作人">{{ viewForm.bxsj }}</el-descriptions-item>
        <el-descriptions-item label="下步维修服务器">{{ viewForm.bj }}</el-descriptions-item>
        <el-descriptions-item label="操作人">{{ viewForm.bxsj }}</el-descriptions-item>
      </el-descriptions>

      <el-divider></el-divider>
      <h3>附件</h3>
      <el-descriptions>
        <el-descriptions-item label="类型">{{ viewForm.fwdh }}</el-descriptions-item>
        <el-descriptions-item label="附件">{{ viewForm.dqzt }}</el-descriptions-item>
        <el-descriptions-item label="创建人">{{ viewForm.bj }}</el-descriptions-item>
        <el-descriptions-item label="创建时间">{{ viewForm.bxsj }}</el-descriptions-item>
      </el-descriptions>

      <el-divider></el-divider>
      <h3>备件/耗材</h3>
      <el-descriptions>
        <el-descriptions-item label="产品编号">{{ viewForm.fwdh }}</el-descriptions-item>
        <el-descriptions-item label="名称">{{ viewForm.dqzt }}</el-descriptions-item>
        <el-descriptions-item label="规格/型号">{{ viewForm.bj }}</el-descriptions-item>
        <el-descriptions-item label="品牌">{{ viewForm.bxsj }}</el-descriptions-item>
        <el-descriptions-item label="单位">{{ viewForm.fwdh }}</el-descriptions-item>
        <el-descriptions-item label="数量">{{ viewForm.dqzt }}</el-descriptions-item>
        <el-descriptions-item label="当前库存">{{ viewForm.bj }}</el-descriptions-item>
        <el-descriptions-item label="已申请采购">{{ viewForm.bxsj }}</el-descriptions-item>
        <el-descriptions-item label="是否已出库">{{ viewForm.fwdh }}</el-descriptions-item>
        <el-descriptions-item label="序列号">{{ viewForm.dqzt }}</el-descriptions-item>
        <el-descriptions-item label="保修期">{{ viewForm.bj }}</el-descriptions-item>
        <el-descriptions-item label="截止日期">{{ viewForm.bxsj }}</el-descriptions-item>
        <el-descriptions-item label="备注">{{ viewForm.bxsj }}</el-descriptions-item>
      </el-descriptions>
      <el-divider></el-divider>
      <h3>服务价格</h3>
      <el-descriptions>
        <el-descriptions-item label="项目名称">{{ viewForm.bxsj }}</el-descriptions-item>
        <el-descriptions-item label="项目分类">{{ viewForm.fwdh }}</el-descriptions-item>
        <el-descriptions-item label="数量">{{ viewForm.dqzt }}</el-descriptions-item>
        <el-descriptions-item label="未税单价">{{ viewForm.bj }}</el-descriptions-item>
        <el-descriptions-item label="税率(%)">{{ viewForm.bxsj }}</el-descriptions-item>
        <el-descriptions-item label="含税金额">{{ viewForm.fwdh }}</el-descriptions-item>
        <el-descriptions-item label="税额">{{ viewForm.dqzt }}</el-descriptions-item>
        <el-descriptions-item label="工时">{{ viewForm.bj }}</el-descriptions-item>
        <el-descriptions-item label="技术员">{{ viewForm.bxsj }}</el-descriptions-item>
        <el-descriptions-item label="是否完工">{{ viewForm.bxsj }}</el-descriptions-item>
        <el-descriptions-item label="备注">{{ viewForm.bxsj }}</el-descriptions-item>
      </el-descriptions>

      <el-divider></el-divider>
      <h3>费用支出</h3>
      <el-descriptions>
        <el-descriptions-item label="支出项目">{{ viewForm.bxsj }}</el-descriptions-item>
        <el-descriptions-item label="金额">{{ viewForm.fwdh }}</el-descriptions-item>
        <el-descriptions-item label="已结算金额">{{ viewForm.dqzt }}</el-descriptions-item>
        <el-descriptions-item label="备注">{{ viewForm.bj }}</el-descriptions-item>
        <el-descriptions-item label="创建人">{{ viewForm.bxsj }}</el-descriptions-item>
        <el-descriptions-item label="创建时间">{{ viewForm.fwdh }}</el-descriptions-item>
      </el-descriptions>

      <el-divider></el-divider>
      <h3>操作日志</h3>
      <el-descriptions>
        <el-descriptions-item label="操作时间">{{ viewForm.bxsj }}</el-descriptions-item>
        <el-descriptions-item label="操作人">{{ viewForm.fwdh }}</el-descriptions-item>
        <el-descriptions-item label="操作内容">{{ viewForm.dqzt }}</el-descriptions-item>
      </el-descriptions>

      <!-- <el-divider></el-divider>
      <h3>报价信息</h3> -->

      <!-- <el-divider></el-divider>
      <h3>发票信息</h3> -->

      <!-- <el-divider></el-divider>
      <h3>放行检查</h3> -->

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="viewVisible = false">退出</el-button>
      </span>
    </el-dialog>

    <!-- 修改表格内容的对话框 -->
    <el-dialog title="修改当前保养派工记录" :visible.sync="editVisible" width="50%">
      <!-- <commonForm ref="dialog" /> -->
      <commonForm v-if="editVisible" v-bind:editList="editList" ref="editForm" :before-close="handleClose" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="edit">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 年度绩效目标表 -->
    <div>
      <el-table :data="tableData"
      height="calc(100vh - 235px)"
      fit
      :header-cell-style="{background: '#165DFF',color:'#fff',font:'500 14px PingFang SC'}"
       @row-dblclick="tableClick" style="width: 100%;">
        <el-table-column type="index" fixed label="序号" width="50">
        </el-table-column>
        <el-table-column prop="fwdh" label="服务单号">
        </el-table-column>
        <el-table-column prop="dqzt" label="当前状态">
        </el-table-column>
        <el-table-column prop="bj" label="标记">
        </el-table-column>
        <el-table-column prop="bxsj" label="保修时间">
        </el-table-column>
        <el-table-column prop="clsc" label="处理时长">
        </el-table-column>
        <el-table-column prop="zcxr" label="主承修人">
        </el-table-column>
        <el-table-column prop="khmc" label="客户名称">
        </el-table-column>
        <el-table-column prop="bxr" label="报修人">
        </el-table-column>
        <el-table-column prop="bxdh" label="保修电话">
        </el-table-column>
        <el-table-column prop="sbbh" label="设备编号">
        </el-table-column>
        <el-table-column prop="sbmc" label="设备名称">
        </el-table-column>
        <el-table-column prop="sbpp" label="设备品牌">
        </el-table-column>
        <el-table-column prop="bxzt" label="保修状态">
        </el-table-column>
        <el-table-column prop="qyrq" label="启用日期">
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
// import { addTarget, inquireTarget, editTarget, deleteTarget } from '@/api/PerformanceManagement/target.js'
export default {
  name: 'Plan',
  components: { commonForm },
  data() {
    return {
      dialogVisible: false,
      viewVisible: false,
      editVisible: false,
      editList: {},
      tableData: [
        {
          fwdh: 'M2023514194839',
          dqzt: '彭山区人民医院',
          bj: '已提交执行',
          bxsj: '彭山区人民医院1',

          clsc: '项目1',
          zcxr: 'test1',
          khmc: '2023-07-21',
          bxr: '2023-07-21',

          bxdh: 'M2023514194839',
          sbbh: 'CT',
          sbmc: '通用电气',
          sbpp: 'KK',

          bxzt: 'BB',
          qyrq: 'UU'
        },
        {
          fwdh: 'M2023514194839',
          dqzt: '彭山区人民医院',
          bj: '已提交执行',
          bxsj: '彭山区人民医院1',

          clsc: '项目1',
          zcxr: 'test1',
          khmc: '2023-07-21',
          bxr: '2023-07-21',

          bxdh: 'M2023514194839',
          sbbh: 'CT',
          sbmc: '通用电气',
          sbpp: 'KK',

          bxzt: 'BB',
          qyrq: 'UU'
        },
        {
          fwdh: 'M2023514194839',
          dqzt: '彭山区人民医院',
          bj: '已提交执行',
          bxsj: '彭山区人民医院1',

          clsc: '项目1',
          zcxr: 'test1',
          khmc: '2023-07-21',
          bxr: '2023-07-21',

          bxdh: 'M2023514194839',
          sbbh: 'CT',
          sbmc: '通用电气',
          sbpp: 'KK',

          bxzt: 'BB',
          qyrq: 'UU'
        },
        {
          fwdh: 'M2023514194839',
          dqzt: '彭山区人民医院',
          bj: '已提交执行',
          bxsj: '彭山区人民医院1',

          clsc: '项目1',
          zcxr: 'test1',
          khmc: '2023-07-21',
          bxr: '2023-07-21',

          bxdh: 'M2023514194839',
          sbbh: 'CT',
          sbmc: '通用电气',
          sbpp: 'KK',

          bxzt: 'BB',
          qyrq: 'UU'
        },
        {
          fwdh: 'M2023514194839',
          dqzt: '彭山区人民医院',
          bj: '已提交执行',
          bxsj: '彭山区人民医院1',

          clsc: '项目1',
          zcxr: 'test1',
          khmc: '2023-07-21',
          bxr: '2023-07-21',

          bxdh: 'M2023514194839',
          sbbh: 'CT',
          sbmc: '通用电气',
          sbpp: 'KK',

          bxzt: 'BB',
          qyrq: 'UU'
        },
        {
          fwdh: 'M2023514194839',
          dqzt: '彭山区人民医院',
          bj: '已提交执行',
          bxsj: '彭山区人民医院1',

          clsc: '项目1',
          zcxr: 'test1',
          khmc: '2023-07-21',
          bxr: '2023-07-21',

          bxdh: 'M2023514194839',
          sbbh: 'CT',
          sbmc: '通用电气',
          sbpp: 'KK',

          bxzt: 'BB',
          qyrq: 'UU'
        },
        {
          fwdh: 'M2023514194839',
          dqzt: '彭山区人民医院',
          bj: '已提交执行',
          bxsj: '彭山区人民医院1',

          clsc: '项目1',
          zcxr: 'test1',
          khmc: '2023-07-21',
          bxr: '2023-07-21',

          bxdh: 'M2023514194839',
          sbbh: 'CT',
          sbmc: '通用电气',
          sbpp: 'KK',

          bxzt: 'BB',
          qyrq: 'UU'
        },
        {
          fwdh: 'M2023514194839',
          dqzt: '彭山区人民医院',
          bj: '已提交执行',
          bxsj: '彭山区人民医院1',

          clsc: '项目1',
          zcxr: 'test1',
          khmc: '2023-07-21',
          bxr: '2023-07-21',

          bxdh: 'M2023514194839',
          sbbh: 'CT',
          sbmc: '通用电气',
          sbpp: 'KK',

          bxzt: 'BB',
          qyrq: 'UU'
        },
        {
          fwdh: 'M2023514194839',
          dqzt: '彭山区人民医院',
          bj: '已提交执行',
          bxsj: '彭山区人民医院1',

          clsc: '项目1',
          zcxr: 'test1',
          khmc: '2023-07-21',
          bxr: '2023-07-21',

          bxdh: 'M2023514194839',
          sbbh: 'CT',
          sbmc: '通用电气',
          sbpp: 'KK',

          bxzt: 'BB',
          qyrq: 'UU'
        },
        {},
        {},
        {},
        {},
        {},
        {}
      ],
      options: [],
      formInline: {
        khnd: '',
        xm: ''
      },
      viewForm: {}
    }
  },
  mounted() {
    this.getAllTarget()
  },
  methods: {
    // 获取所有招聘计划
    getAllTarget() {
      // inquireTarget().then(res => {
      //   this.tableData = res.rows
      //   // console.log(this.tableData,'所有招聘计划')
      // })
    },
    //模糊查询
    inquirer() {
      // inquireTarget(this.formInline).then(res => {
      //   this.tableData = res.rows
      //   // console.log(this.tableData,'所有招聘计划')
      // })
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
      // console.log(this.$refs.addForm.form)
      const data = this.$refs.addForm.form
      // addTarget(data).then(res => {
      //   // console.log(res)
      //   this.getAllTarget()
      // })
      this.dialogVisible = false
    },
    // 修改提交
    edit() {
      // console.log(this.$refs.editForm.form)
      const data = this.$refs.editForm.form
      // editTarget(data).then(res => {
      //   console.log(res)
      //   this.getAllTarget()
      // })
      this.editVisible = false
    },

    //删除
    deleteRow(index, rows) {
      // deleteTarget(rows[index].id).then(res => {
      //   console.log(res)
      // })
      rows.splice(index, 1)
    },
    //查看
    tableClick(row) {
      // console.log(row)
      this.viewVisible = true
      this.viewForm = row
    },
    //修改
    handleClickEdit(row) {
      this.editVisible = true
      // console.log(row)
      this.editList = row
      //父组件可以直接修改子组件的变量
      // this.$refs.dialog.form = row;
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
.flag {
  margin-left: 50px;
  display: inline-block;
  padding-top: 10px;
  margin-right: 10px;
}
.table-add {
  position: absolute;
  right: 0;
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
</style>