
  <template>
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="设备名称:">
          <el-input style="width: 130px;" v-model="formInline.sbmc" placeholder="请输入设备名称" size="small"></el-input>
        </el-form-item>
        <el-form-item label="规格型号:">
          <el-input style="width: 130px;" v-model="formInline.ggxh" placeholder="请输入规格型号" size="small"></el-input>
        </el-form-item>
        <el-form-item label="设备品牌:">
          <el-input style="width: 130px;" v-model="formInline.sbpp" placeholder="设备品牌" size="small"></el-input>
        </el-form-item>
        <el-form-item label="计划PM日期:">
          <el-date-picker style="width: 230px;" v-model="formInline.jhpmrq" type="daterange" size="small" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="inquirer" icon="el-icon-search" size="small">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-delete" size="small">作废</el-button>
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
    <el-dialog title="查看保养派工记录" :visible.sync="viewVisible" width="60%">
      <el-descriptions>
        <el-descriptions-item label="计划编号">{{ viewForm.jhbh }}</el-descriptions-item>
        <el-descriptions-item label="计划名称">{{ viewForm.jhmc }}</el-descriptions-item>
        <el-descriptions-item label="计划状态">{{ viewForm.jhzt }}</el-descriptions-item>
        <el-descriptions-item label="客户名称">{{ viewForm.khmc }}</el-descriptions-item>
        <el-descriptions-item label="项目名称">{{ viewForm.xmmc }}</el-descriptions-item>
        <el-descriptions-item label="合同编号">{{ viewForm.htbh }}</el-descriptions-item>

        <el-descriptions-item label="合同开始日期">{{ viewForm.htksrq }}</el-descriptions-item>
        <el-descriptions-item label="合同结束日期">{{ viewForm.htjsrq }}</el-descriptions-item>
        <el-descriptions-item label="设备编号">{{ viewForm.sbbh }}</el-descriptions-item>
        <el-descriptions-item label="设备名称">{{ viewForm.sbmc }}</el-descriptions-item>
        <el-descriptions-item label="设备品牌">{{ viewForm.sbpp }}</el-descriptions-item>
        <el-descriptions-item label="规格型号">{{ viewForm.ggxh }}</el-descriptions-item>
        <el-descriptions-item label="序列号">{{ viewForm.xlh }}</el-descriptions-item>

        <el-descriptions-item label="所属科室">{{ viewForm.ssks }}</el-descriptions-item>
        <el-descriptions-item label="计划负责人">{{ viewForm.jhfzr }}</el-descriptions-item>
        <el-descriptions-item label="计划PM日期">{{ viewForm.jhpmrq }}</el-descriptions-item>
        <el-descriptions-item label="PM类型">{{ viewForm.pmlx }}</el-descriptions-item>
        <el-descriptions-item label="计划序数">{{ viewForm.jhxs }}</el-descriptions-item>
        <el-descriptions-item label="备注">{{ viewForm.bz }}</el-descriptions-item>
      </el-descriptions>
      <el-divider></el-divider>
      <h3>PM记录</h3>
      <br>
      <el-descriptions>
        <el-descriptions-item label="部件照片">{{ viewForm.fwdh }}</el-descriptions-item>
        <el-descriptions-item label="PM报告">{{ viewForm.dqzt }}</el-descriptions-item>
        <el-descriptions-item label="备注">{{ viewForm.bj }}</el-descriptions-item>
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
        <el-table-column prop="jhbh" label="计划编号">
        </el-table-column>
        <el-table-column prop="jhmc" label="计划名称">
        </el-table-column>
        <el-table-column prop="jhzt" label="计划状态">
        </el-table-column>
        <el-table-column prop="khmc" label="客户名称">
        </el-table-column>
        <el-table-column prop="xmmc" label="项目名称">
        </el-table-column>
        <el-table-column prop="htbh" label="合同编号">
        </el-table-column>
        <el-table-column prop="htksrq" label="合同开始日期">
        </el-table-column>
        <el-table-column prop="htjsrq" label="合同结束日期">
        </el-table-column>
        <el-table-column prop="sbbh" label="设备编号">
        </el-table-column>
        <el-table-column prop="sbmc" label="设备名称">
        </el-table-column>
        <el-table-column prop="ggxh" label="规格型号">
        </el-table-column>
        <el-table-column prop="xlh" label="序列号">
        </el-table-column>
        <el-table-column prop="ssks" label="所属科室">
        </el-table-column>
        <el-table-column prop="jhpmrq" label="计划PM日期">
        </el-table-column>
        <el-table-column prop="pmlx" label="PM类型">
        </el-table-column>
        <el-table-column prop="jhxs" label="计划序数">
        </el-table-column>
        <el-table-column prop="bz" label="备注">
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
          jhbh: 'M2023514194839',
          jhmc: '彭山区人民医院',
          jhzt: '已提交执行',
          khmc: '彭山区人民医院',

          xmmc: '项目1',
          htbh: 'test1',
          htksrq: '2023-07-21',
          htjsrq: '2023-07-21',

          sbbh: 'M2023514194839',
          sbmc: 'CC',
          sbpp: '通用电气',
          ggxh: 'BB',

          xlh: 'QQ',
          ssks: 'WW',
          jhfzr: 'AA',
          jhpmrq: 'TT',

          pmlx: 'NN',
          jhxs: 'MM',
          bz: 'KK'
        },
        {
          jhbh: 'M2023514194839',
          jhmc: '彭山区人民医院',
          jhzt: '已提交执行',
          khmc: '彭山区人民医院',

          xmmc: '项目1',
          htbh: 'test1',
          htksrq: '2023-07-21',
          htjsrq: '2023-07-21',

          sbbh: 'M2023514194839',
          sbmc: 'CC',
          sbpp: '通用电气',
          ggxh: 'BB',

          xlh: 'QQ',
          ssks: 'WW',
          jhfzr: 'AA',
          jhpmrq: 'TT',

          pmlx: 'NN',
          jhxs: 'MM',
          bz: 'KK'
        },
        {
          jhbh: 'M2023514194839',
          jhmc: '彭山区人民医院',
          jhzt: '已提交执行',
          khmc: '彭山区人民医院',

          xmmc: '项目1',
          htbh: 'test1',
          htksrq: '2023-07-21',
          htjsrq: '2023-07-21',

          sbbh: 'M2023514194839',
          sbmc: 'CC',
          sbpp: '通用电气',
          ggxh: 'BB',

          xlh: 'QQ',
          ssks: 'WW',
          jhfzr: 'AA',
          jhpmrq: 'TT',

          pmlx: 'NN',
          jhxs: 'MM',
          bz: 'KK'
        },
        {
          jhbh: 'M2023514194839',
          jhmc: '彭山区人民医院',
          jhzt: '已提交执行',
          khmc: '彭山区人民医院',

          xmmc: '项目1',
          htbh: 'test1',
          htksrq: '2023-07-21',
          htjsrq: '2023-07-21',

          sbbh: 'M2023514194839',
          sbmc: 'CC',
          sbpp: '通用电气',
          ggxh: 'BB',

          xlh: 'QQ',
          ssks: 'WW',
          jhfzr: 'AA',
          jhpmrq: 'TT',

          pmlx: 'NN',
          jhxs: 'MM',
          bz: 'KK'
        },
        {
          jhbh: 'M2023514194839',
          jhmc: '彭山区人民医院',
          jhzt: '已提交执行',
          khmc: '彭山区人民医院',

          xmmc: '项目1',
          htbh: 'test1',
          htksrq: '2023-07-21',
          htjsrq: '2023-07-21',

          sbbh: 'M2023514194839',
          sbmc: 'CC',
          sbpp: '通用电气',
          ggxh: 'BB',

          xlh: 'QQ',
          ssks: 'WW',
          jhfzr: 'AA',
          jhpmrq: 'TT',

          pmlx: 'NN',
          jhxs: 'MM',
          bz: 'KK'
        },
        {
          jhbh: 'M2023514194839',
          jhmc: '彭山区人民医院',
          jhzt: '已提交执行',
          khmc: '彭山区人民医院',

          xmmc: '项目1',
          htbh: 'test1',
          htksrq: '2023-07-21',
          htjsrq: '2023-07-21',

          sbbh: 'M2023514194839',
          sbmc: 'CC',
          sbpp: '通用电气',
          ggxh: 'BB',

          xlh: 'QQ',
          ssks: 'WW',
          jhfzr: 'AA',
          jhpmrq: 'TT',

          pmlx: 'NN',
          jhxs: 'MM',
          bz: 'KK'
        },
        {
          jhbh: 'M2023514194839',
          jhmc: '彭山区人民医院',
          jhzt: '已提交执行',
          khmc: '彭山区人民医院',

          xmmc: '项目1',
          htbh: 'test1',
          htksrq: '2023-07-21',
          htjsrq: '2023-07-21',

          sbbh: 'M2023514194839',
          sbmc: 'CC',
          sbpp: '通用电气',
          ggxh: 'BB',

          xlh: 'QQ',
          ssks: 'WW',
          jhfzr: 'AA',
          jhpmrq: 'TT',

          pmlx: 'NN',
          jhxs: 'MM',
          bz: 'KK'
        },
        {
          jhbh: 'M2023514194839',
          jhmc: '彭山区人民医院',
          jhzt: '已提交执行',
          khmc: '彭山区人民医院',

          xmmc: '项目1',
          htbh: 'test1',
          htksrq: '2023-07-21',
          htjsrq: '2023-07-21',

          sbbh: 'M2023514194839',
          sbmc: 'CC',
          sbpp: '通用电气',
          ggxh: 'BB',

          xlh: 'QQ',
          ssks: 'WW',
          jhfzr: 'AA',
          jhpmrq: 'TT',

          pmlx: 'NN',
          jhxs: 'MM',
          bz: 'KK'
        },
        {},
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
</style>