<template>
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true">
        <el-form-item label="发票号码：">
          <el-input placeholder="请输入" style="width: 120px;" size="small" clearable></el-input>
        </el-form-item>
        <el-form-item label="经办人：">
          <el-input size="small" style="width: 120px;" clearable></el-input>
        </el-form-item>
        <el-form-item label="开票日期：">
          <el-date-picker type="date" placeholder="选择日期" style="width: 120px;" size="small">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" size="small">查询</el-button>
        </el-form-item>
        <el-form-item class="right-buttons">
          <el-button type="primary" icon="el-icon-circle-plus-outline" size="small">添加</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 发票管理表 -->
    <div>
      <el-table :data="billData" height="calc(100vh - 235px)" fit
        :header-cell-style="{ background: '#165DFF', color: '#fff', font: '500 14px PingFang SC' }"
         style="width: 100%;">
        <el-table-column type="index" fixed label="序号" width="50"></el-table-column>
        <el-table-column prop="fpzt" label="发票状态" min-width="120"></el-table-column>
        <el-table-column prop="qsrq" label="签收日期" min-width="100"></el-table-column>
        <el-table-column prop="kprq" label="开票日期" min-width="100"></el-table-column>
        <el-table-column prop="fphm" label="发票号码" min-width="100"></el-table-column>
        <el-table-column prop="fplx" label="发票类型" min-width="100"></el-table-column>
        <el-table-column prop="jbr" label="经办人" min-width="100"></el-table-column>
        <el-table-column prop="ddzje" label="订单总金额" min-width="100"></el-table-column>
        <el-table-column prop="bckpe" label="本次开票额" min-width="100"></el-table-column>
        <el-table-column prop="ykpje" label="已开票金额" min-width="100"></el-table-column>
        <el-table-column prop="wkpje" label="未开票金额" min-width="100"></el-table-column>
        <el-table-column prop="gys" label="供应商" min-width="100"></el-table-column>
        <el-table-column prop="bz" label="备注" min-width="100"></el-table-column>
        <el-table-column prop="sjfksj" label="实际付款时间" min-width="100"></el-table-column>
        <el-table-column prop="fkje" label="付款金额" min-width="100"></el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="180px">
          <template slot-scope="scope">
            <el-button @click="editBill(scope.row)" type="text" size="small">修改</el-button>
            <el-button @click.native.prevent="deleteRow(scope.$index, billData)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>


  </div>
</template>
<script>
export default {
  name: 'Bill',
  data() {
    return {
      // 发票管理表数据
      billData: [
        {
          fphm: '11111',
          jbr: '111111',
          ddzje: '11111',
        },
        {
          fphm: '22222',
          jbr: '22222',
          ddzje: '22222',
        },
        {}],
      // 修改
      editData: {},
    }
  },
  methods: {
    // 点击修改按钮
    editBill(row) {
      this.editData = row
      // this.addDialogVisible = true
    },

    // 点击删除按钮
    deleteRow(index, billData) {
      billData.splice(index, 1)
    },
  }
}
</script>
<style scoped lang="scss">
@import '../../../../assets/styles/appMain.css';

.right-buttons {
  position: absolute;
  margin-right: 0;
  right: 0px;
  top: 0;
}
</style>