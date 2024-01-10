<template>
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true">
        <el-form-item label="销售合同号：">
          <el-input placeholder="请输入合同号" style="width: 140px;" size="small" clearable></el-input>
        </el-form-item>
        <el-form-item label="客户名称：">
          <el-input style="width: 140px;" size="small" clearable></el-input>
        </el-form-item>
        <el-form-item label="合同类型：">
          <el-input style="width: 140px;" size="small" clearable></el-input>
        </el-form-item>
        <el-form-item label="销售日期：">
          <el-input style="width: 140px;" size="small" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" size="small">查询</el-button>
        </el-form-item>
        <el-form-item class="right-buttons">
          <el-button type="primary" icon="el-icon-circle-plus-outline" size="small">新增合同</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 销售合同表 -->
    <div>
      <el-table :data="contractData" height="calc(100vh - 235px)" fit
        :header-cell-style="{ background: '#165DFF', color: '#fff', font: '500 14px PingFang SC' }"
         style="width: 100%;">
        <el-table-column type="index" fixed label="序号" width="50"></el-table-column>
        <el-table-column prop="xshth" label="销售合同号" min-width="110"></el-table-column>
        <el-table-column prop="dqzt" label="当前状态" min-width="120"></el-table-column>
        <el-table-column prop="htlx" label="合同类型" min-width="120"></el-table-column>
        <el-table-column prop="xsrq" label="销售日期" min-width="130"></el-table-column>
        <el-table-column prop="ywy" label="业务员" min-width="120"></el-table-column>
        <el-table-column prop="ywbm" label="业务部门" min-width="120"></el-table-column>
        <el-table-column prop="khmc" label="客户名称" min-width="120"></el-table-column>
        <el-table-column prop="lxr" label="联系人" min-width="120"></el-table-column>
        <el-table-column prop="lxdh" label="联系电话" min-width="120"></el-table-column>
        <el-table-column prop="jshj" label="价税合计" min-width="130"></el-table-column>
        <el-table-column prop="yfje" label="已付金额" min-width="130"></el-table-column>
        <el-table-column prop="wfje" label="未付金额" min-width="130"></el-table-column>
        <el-table-column prop="zdr" label="制单人" min-width="130"></el-table-column>
        <el-table-column prop="zdsj" label="制单时间" min-width="130"></el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="180px">
          <template slot-scope="scope">
            <el-button @click="check(scope.row)" type="text" size="small">审核</el-button>
            <el-button @click="editRequest(scope.row)" type="text" size="small">修改</el-button>
            <el-button @click.native.prevent="deleteRow(scope.$index, contractData)" type="text"
              size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>


    <!-- 审核的对话框 -->
    <el-dialog title="审核" :visible.sync="checkVisible" width="50%">
      <el-table :data="checkData" style="width: 100%;">
        <el-table-column prop="xshth" label="销售合同单号"></el-table-column>
        <el-table-column prop="htlx" label="合同类型"></el-table-column>
        <el-table-column prop="xsrq" label="销售日期"></el-table-column>
        <el-table-column prop="zdr" label="制单人"></el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="danger" @click="checkVisible = false">审核不通过</el-button>
        <el-button type="primary" @click="checkVisible = false">审核通过</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'Contract',
  data() {
    return {
      // 采购申请表数据
      contractData: [
        {
          xshth: '11111',
          khmc: '111111',
          lxr: '11111',
        },
        {
          xshth: '222222',
          khmc: '222222',
          lxr: '2222222',
        },
        {}],
      // 审核
      checkVisible: false,
      checkData: [],
    }
  },
  methods: {
    // 审核
    check(row) {
      this.checkData = []
      this.checkData.push(row)
      this.checkVisible = true
      // Object.assign(this._data, this.$options.data())
    },

    // 点击修改按钮
    editRequest(row) {
      // this.editData = row
      // this.addDialogVisible = true
    },
    // 点击删除按钮
    deleteRow(index, contractData) {
      contractData.splice(index, 1)
    },
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