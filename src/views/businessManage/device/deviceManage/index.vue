
<template>
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="设备名称:">
          <el-input  style="width: 130px;" v-model="formInline.sbmc" placeholder="请输入设备名称" size="small"></el-input>
        </el-form-item>
        <el-form-item label="设备型号:">
          <el-input  style="width: 130px;" v-model="formInline.sbxh" placeholder="请输入设备型号" size="small"></el-input>
        </el-form-item>
        <!-- <el-form-item label="受理时间:">
          <el-date-picker v-model="formInline.slsj" type="daterange" size="small" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item> -->
        <el-form-item label="设备序列号:">
          <el-input  style="width: 150px;" v-model="formInline.sbxlh" placeholder="请输入设备序列号" size="small"></el-input>
        </el-form-item>
        <el-form-item label="所属医院:">
          <el-input  style="width: 130px;" v-model="formInline.ssyy" placeholder="请输入所属医院" size="small"></el-input>
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
    <el-dialog title="查看当前设备档案管理记录" :visible.sync="viewVisible" width="60%">
      <el-descriptions>
        <el-descriptions-item label="设备编号">{{ viewForm.sbbh }}</el-descriptions-item>
        <el-descriptions-item label="所属医院">{{ viewForm.ssyy }}</el-descriptions-item>
        <el-descriptions-item label="设备名称">{{ viewForm.sbmc }}</el-descriptions-item>
        <el-descriptions-item label="规格型号">{{ viewForm.ggxh }}</el-descriptions-item>
        <el-descriptions-item label="计量类型">{{ viewForm.jllx }}</el-descriptions-item>
        <el-descriptions-item label="强调周期">{{ viewForm.qdzq }}</el-descriptions-item>

        <el-descriptions-item label="设备序列号">{{ viewForm.sbxlh }}</el-descriptions-item>
        <el-descriptions-item label="生产厂商">{{ viewForm.sccs }}</el-descriptions-item>

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
    <el-dialog title="修改当前设备档案管理记录" :visible.sync="editVisible" width="50%">
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
        @row-dblclick="tableClick" style="width: 100%;line-height: 10px;">
        <el-table-column type="index" fixed label="序号" width="50">
        </el-table-column>
        <el-table-column prop="sbbh" label="设备编号">
        </el-table-column>
        <el-table-column prop="ssyy" label="所属医院">
        </el-table-column>
        <el-table-column prop="sbmc" label="设备名称">
        </el-table-column>
        <el-table-column prop="ggxh" label="规格型号">
        </el-table-column>
        <el-table-column prop="jllx" label="计量类型">
        </el-table-column>
        <el-table-column prop="qdzq" label="强调周期">
        </el-table-column>
        <el-table-column prop="sbxlh" label="设备序列号">
        </el-table-column>
        <el-table-column prop="sccs" label="生产厂商">
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
  name: 'DeviceManage',
  components: { commonForm },
  data() {
    return {
      dialogVisible: false,
      viewVisible: false,
      editVisible: false,
      editList: {},
      tableData: [
        {
          sbbh: '12023102614503351',
          ssyy: '眉山市东坡区万胜镇卫生院',
          sbmc: 'Brivo XR316',
          ggxh: 'CT',

          jllx: '非强检',
          qdzq: '1',
          sbxlh: '1',
          sccs: '1'
        },
        {
          sbbh: '12023102614503351',
          ssyy: '眉山市东坡区万胜镇卫生院',
          sbmc: 'Brivo XR316',
          ggxh: 'CT',

          jllx: '非强检',
          qdzq: '1',
          sbxlh: '1',
          sccs: '1'
        },
        {
          sbbh: '12023102614503351',
          ssyy: '眉山市东坡区万胜镇卫生院',
          sbmc: 'Brivo XR316',
          ggxh: 'CT',

          jllx: '非强检',
          qdzq: '1',
          sbxlh: '1',
          sccs: '1'
        },
        {
          sbbh: '12023102614503351',
          ssyy: '眉山市东坡区万胜镇卫生院',
          sbmc: 'Brivo XR316',
          ggxh: 'CT',

          jllx: '非强检',
          qdzq: '1',
          sbxlh: '1',
          sccs: '1'
        },
        {
          sbbh: '12023102614503351',
          ssyy: '眉山市东坡区万胜镇卫生院',
          sbmc: 'Brivo XR316',
          ggxh: 'CT',

          jllx: '非强检',
          qdzq: '1',
          sbxlh: '1',
          sccs: '1'
        },
        {
          sbbh: '12023102614503351',
          ssyy: '眉山市东坡区万胜镇卫生院',
          sbmc: 'Brivo XR316',
          ggxh: 'CT',

          jllx: '非强检',
          qdzq: '1',
          sbxlh: '1',
          sccs: '1'
        },
        {
          sbbh: '12023102614503351',
          ssyy: '眉山市东坡区万胜镇卫生院',
          sbmc: 'Brivo XR316',
          ggxh: 'CT',

          jllx: '非强检',
          qdzq: '1',
          sbxlh: '1',
          sccs: '1'
        },
        {
          sbbh: '12023102614503351',
          ssyy: '眉山市东坡区万胜镇卫生院',
          sbmc: 'Brivo XR316',
          ggxh: 'CT',

          jllx: '非强检',
          qdzq: '1',
          sbxlh: '1',
          sccs: '1'
        },
        {},
        {},
        {},
        {},
        {},
        {},
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
