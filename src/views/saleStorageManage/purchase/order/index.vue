<template>
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true">
        <el-form-item label="单号:">
          <el-input placeholder="请输入单号" style="width: 150px;" size="small" clearable></el-input>
        </el-form-item>
        <el-form-item label="供应商:">
          <el-input placeholder="请输入供应商" style="width: 150px;" size="small" clearable></el-input>
        </el-form-item>
        <el-form-item label="采购时间:">
          <el-date-picker type="date" style="width: 150px;" placeholder="选择日期" size="small">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" size="small">查询</el-button>
        </el-form-item>
        <!-- <el-form-item>
          <el-button type="primary" icon="el-icon-arrow-down" size="small">重置查询</el-button>
        </el-form-item> -->
        <el-form-item class="right-buttons">
          <el-button type="primary" icon="el-icon-circle-plus-outline" size="small" @click="addOrder">新增订单</el-button>
          <el-button v-show="refundVisible1" type="primary" icon="el-icon-circle-plus-outline" size="small"
            @click="refund">申请退货</el-button>
          <el-button v-show="refundVisible2" type="primary" icon="el-icon-circle-plus-outline" size="small"
            @click="refund">已退货</el-button>
          <el-button type="primary" icon="el-icon-check" size="small" @click="informStore">通知入库</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 采购订单表 -->
    <div>
      <el-table :data="orderData" height="calc(100vh - 235px)" fit
        :header-cell-style="{ background: '#165DFF', color: '#fff', font: '500 14px PingFang SC' }"
         style="width: 100%;">
        <el-table-column type="index" fixed label="序号" width="50"></el-table-column>
        <el-table-column prop="dddh" label="订单单号" min-width="120"></el-table-column>
        <el-table-column prop="dqzt" label="当前状态" min-width="100"></el-table-column>
        <el-table-column prop="cglx" label="采购类型" min-width="100"></el-table-column>
        <el-table-column prop="cgrq" label="采购日期" min-width="100"></el-table-column>
        <el-table-column prop="ywy" label="业务员" min-width="100"></el-table-column>
        <el-table-column prop="ywbm" label="业务部门" min-width="100"></el-table-column>
        <el-table-column prop="gys" label="供应商" min-width="100"></el-table-column>
        <el-table-column prop="lxr" label="联系人" min-width="100"></el-table-column>
        <el-table-column prop="fylx" label="费用类型" min-width="100"></el-table-column>
        <el-table-column prop="jbr" label="经办人" min-width="100"></el-table-column>
        <el-table-column prop="ddze" label="订单总额" min-width="100"></el-table-column>
        <el-table-column prop="zdr" label="制单人" min-width="100"></el-table-column>
        <el-table-column prop="zdsj" label="制单时间" min-width="100"></el-table-column>
        <el-table-column prop="sfth" label="是否退货" min-width="100"></el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="180px">
          <template slot-scope="scope">
            <!-- <el-button @click="check(scope.row)" type="text" size="small">审核</el-button> -->
            <el-button @click="editOrder(scope.row)" type="text" size="small">修改</el-button>
            <el-button @click.native.prevent="deleteRow(scope.$index, orderData)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 新增dialog框 -->
    <AddOrder v-if="addDialogVisible" :editData="editData" @close="closeDialog"></AddOrder>



  </div>
</template>
<script>
import AddOrder from './components/addOrder.vue'

export default {
  name: '',
  components: {
    AddOrder
  },
  data() {
    return {
      // 采购订单表数据
      orderData: [
        {
          dddh: '11111',
          cglx: '11111',
          ywy: '11111',
          gys: '111111',
          sfth: '是'
        },
        {
          dddh: '222222',
          cglx: '222222',
          ywy: '222222',
          gys: '222222',
          sfth: '否'

        },
        {}],
      // 新增
      addDialogVisible: false,
      // 修改
      editData: {},
      // 新增退货
      refundVisible1: false,
      refundVisible2: false
    }
  },
  methods: {

    // 点击新增按钮
    addOrder() {
      this.addDialogVisible = true
      this.editData = {}
    },

    // 修改
    editOrder(row) {
      this.editData = row
      this.addDialogVisible = true
    },
    // 删除
    deleteRow(index, orderData) {
      orderData.splice(index, 1)
    },

    // dialog框关闭
    closeDialog(val) {
      this.addDialogVisible = val
    },

    // 通知入库
    informStore() {
      this.$confirm('确认入库?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '提交成功'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消提交'
        });
      });
    },
    // 新增退货
    refund() {
      this.refundVisible = true
    },
    // 选中当前行
    handleRowClick(row) {
      if (row.sfth == '是') {
        this.refundVisible1 = false
        this.refundVisible2 = true
      } else {
        this.refundVisible1 = true
        this.refundVisible2 = false
      }


    }


  }
}
</script>
<style lang='scss' scoped>
@import '../../../../assets/styles/appMain.css';



.right-buttons {
  position: absolute;
  margin-right: 0;
  right: 0px;
  top: 0;
}
</style>