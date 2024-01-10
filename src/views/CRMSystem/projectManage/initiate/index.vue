<template>
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="立项编号:">
          <el-input v-model="formInline.lxbh" size="small" :style="{ width: '120px' }"></el-input>
        </el-form-item>
        <el-form-item label="项目名称:">
          <el-input v-model="formInline.xmmc" size="small" :style="{ width: '120px' }"></el-input>
        </el-form-item>
        <el-form-item label="客户名称:">
          <!-- <el-input v-model="formInline.khmc" size="small" :style="{ width: '120px' }"></el-input> -->
          <el-select v-model="formInline.khmc" filterable placeholder="请选择或输入" :style="{ width: '120px' }">
            <el-option label="上海孟超肿瘤医院" value="上海孟超肿瘤医院"></el-option>
            <el-option label="上海市宝山区罗店医院" value="上海市宝山区罗店医院"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="项目进度:">
          <!-- <el-input v-model="formInline.xmjd" size="small" :style="{ width: '120px' }"></el-input> -->
          <el-select v-model="formInline.xmjd" placeholder="请选择" :style="{ width: '120px' }">
            <el-option label="待提交审批" value="待提交审批"></el-option>
            <el-option label="审批中" value="审批中"></el-option>
            <el-option label="审批通过" value="审批通过"></el-option>
            <el-option label="审核拒绝" value="审核拒绝"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="项目发起人:">
          <!-- <el-input v-model="formInline.xmfqr" size="small" :style="{ width: '120px' }"></el-input> -->
          <el-select v-model="formInline.xmfqr" filterable placeholder="请选择或输入" :style="{ width: '120px' }">
            <el-option label="张三" value="张三"></el-option>
            <el-option label="李四" value="李四"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="inquirer" icon="el-icon-search" size="small">查询</el-button>
        </el-form-item>
        <el-form-item class="table-add">
          <el-button type="primary" @click="dialogVisible = true" icon="el-icon-circle-plus-outline"
            size="small">项目申请</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 客户表 -->
    <div>
      <el-table :data="tableData" height="calc(100vh - 235px)" fit
        :header-cell-style="{ background: '#165DFF', color: '#fff', font: '500 14px PingFang SC' }"
        @row-dblclick="tableClick" style="width: 100%;">
        <el-table-column type="index" fixed label="序号" width="50">
        </el-table-column>
        <el-table-column prop="sqrq" fixed label="申请日期" min-width="100">
        </el-table-column>
        <el-table-column prop="dq" label="地区" width="100">
        </el-table-column>
        <el-table-column prop="khmc" label="客户名称" min-width="100">
        </el-table-column>
        <el-table-column prop="ywlx" label="业务类型" min-width="100">
        </el-table-column>
        <el-table-column prop="xmjd" label="项目进度" min-width="100">
        </el-table-column>
        <el-table-column prop="zjbfrq" label="最近拜访日期" min-width="110">
        </el-table-column>
        <el-table-column prop="ywgsr" label="业务归属人" min-width="100">
        </el-table-column>
        <el-table-column prop="xmnx" label="项目年限" min-width="100">
        </el-table-column>
        <el-table-column prop="hkzq" label="回款周期" min-width="100">
        </el-table-column>
        <el-table-column prop="xmys" label="项目预算" min-width="100">
        </el-table-column>
        <el-table-column prop="zdxmgl" label="重点项目管理" min-width="110">
        </el-table-column>
        <el-table-column prop="sfzb" label="是否招标" min-width="100">
        </el-table-column>
        <el-table-column prop="bz" label="备注" min-width="100">
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="180">
          <template slot-scope="scope">
            <!-- <el-button @click="handleClickEdit(scope.row)" type="text" size="small">修改</el-button> -->
            <el-button @click="handleClickCheck(scope.row)" type="text" size="small">审批</el-button>
            <el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index, tableData)">撤回</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 新增表格的对话框 -->
    <el-dialog title="新增" :visible.sync="dialogVisible" :append-to-body="true" width="50%">
      <commonForm v-if="dialogVisible" ref="addForm" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 审核对话框 -->
    <el-dialog title="审核" :append-to-body="true" :visible.sync="examineVisible" width="60%">
      <el-table :data="examineData" style="width: 100%">
        <el-table-column prop="jdmc" label="节点名称" width="180">
        </el-table-column>
        <el-table-column prop="cllx" label="处理类型" width="180">
        </el-table-column>
        <el-table-column prop="clzt" label="处理状态">
        </el-table-column>
        <el-table-column prop="clr" label="处理人" width="180">
        </el-table-column>
        <el-table-column prop="clsj" label="处理时间" width="180">
        </el-table-column>
        <el-table-column prop="bz" label="备注">
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="danger" @click="examineVisible = false">审核不通过</el-button>
        <el-button type="primary" @click="examinePass">审核通过</el-button>
      </span>
    </el-dialog>

    <!-- 查看表格内容的对话框 -->
    <el-dialog title="查看客户信息" :append-to-body="true" :visible.sync="viewVisible" width="60%">
      <el-descriptions border>
        <el-descriptions-item label="申请日期">{{ viewForm.sqrq }}</el-descriptions-item>
        <el-descriptions-item label="地区">{{ viewForm.dq }}</el-descriptions-item>
        <el-descriptions-item label="客户名称">{{ viewForm.khmc }}</el-descriptions-item>
        <el-descriptions-item label="业务类型">{{ viewForm.ywlx }}</el-descriptions-item>
        <el-descriptions-item label="项目进度">{{ viewForm.xmjd }}</el-descriptions-item>
        <el-descriptions-item label="最近拜访日期">{{ viewForm.zjbfrq }}</el-descriptions-item>
        <el-descriptions-item label="业务归属人">{{ viewForm.ywgsr }}</el-descriptions-item>
        <el-descriptions-item label="项目年限">{{ viewForm.xmnx }}</el-descriptions-item>
        <el-descriptions-item label="回款周期">{{ viewForm.hkzq }}</el-descriptions-item>
        <el-descriptions-item label="项目预算">{{ viewForm.xmys }}</el-descriptions-item>
        <el-descriptions-item label="重点项目管理">{{ viewForm.zdxmgl }}</el-descriptions-item>
        <el-descriptions-item label="是否招标">{{ viewForm.sfzb }}</el-descriptions-item>
      </el-descriptions>
      <viewInfo />

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="viewVisible = false">退出</el-button>
      </span>
    </el-dialog>
    <!-- 修改表格内容的对话框 -->
    <!-- <el-dialog title="修改当前职位信息" :append-to-body="true" :visible.sync="editVisible" width="50%">
      <commonForm v-if="editVisible" v-bind:editList="editList" ref="editForm" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="edit">提 交</el-button>
      </span>
    </el-dialog> -->

  </div>
</template>
<script>
import commonForm from './components/commonForm.vue'
import viewInfo from './components/viewInfo.vue'
export default {
  name: '',
  components: { commonForm, viewInfo },
  data() {
    return {
      formInline: {},
      examineVisible: false,
      tableData: [
        {
          sqrq: 2024 - 1 - 5,
          dq: '北京'


        },
        {}
      ],
      examineData: [{
        jdmc: '第一个节点',
        cllx: '指定具体负责人',
        clzt: '待审核',
        clr: '张三（审批专用）',
        clsj: '2023-07-26 16:23:33',
        bz: ''
      }],
      dialogVisible: false,
      // editVisible: false,
      viewVisible: false,
      viewForm: {}
    }
  },

  methods: {
    //模糊查询
    inquirer() {
    },
    //查看
    tableClick(row) {
      // console.log(row)
      this.viewVisible = true
      this.viewForm = row
    },

    // 新增提交
    add() {

      this.dialogVisible = false
    },
    // 修改提交
    // edit() {

    //   this.editVisible = false
    // },

    // 审核
    handleClickCheck() {
      this.examineVisible = true
    },
    // 审核通过
    examinePass() {
      this.$confirm('确认审核通过？')
        .then(_ => {
          this.examineVisible = false
        })
        .catch(_ => { });
    },
    //修改
    // handleClickEdit(row) {
    //   this.editVisible = true
    //   this.editList = row
    // },
    //删除
    deleteRow(index, rows) {

      rows.splice(index, 1)
    },
  }
}
</script>
<style lang='scss' scoped>
@import '../../../../assets/styles/appMain.css';

::v-deep .el-descriptions--medium.is-bordered .el-descriptions-item__cell {
  width: 90px;
}

.table-add {
  position: absolute;
  right: 0;
  top: 0;
  margin-right: 0 !important;
}
</style>