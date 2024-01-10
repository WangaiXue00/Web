<template>
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true">
        <el-form-item label="供应商：">
          <el-input placeholder="请输入" style="width: 120px;" size="small" clearable></el-input>
        </el-form-item>
        <el-form-item label="采购类型：">
          <el-input style="width: 120px;" size="small" clearable></el-input>
        </el-form-item>
        <el-form-item label="费用类型：">
          <el-input style="width: 120px;" size="small" clearable></el-input>
        </el-form-item>
        <el-form-item label="申请人：">
          <el-input style="width: 120px;" size="small" clearable></el-input>
        </el-form-item>
        <el-form-item label="申请日期：">
          <el-date-picker type="date" placeholder="选择日期" style="width: 120px;" size="small">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" size="small">查询</el-button>
        </el-form-item>
        <el-form-item class="right-buttons">
          <el-button type="primary" icon="el-icon-circle-plus-outline" size="small">付款申请</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 付款管理表 -->
    <div >
      <el-table :data="paymentData" height="calc(100vh - 235px)" fit
            :header-cell-style="{ background: '#165DFF', color: '#fff', font: '500 14px PingFang SC' }"
             style="width: 100%;">
        <el-table-column type="index" fixed label="序号" width="50"></el-table-column>
        <el-table-column prop="zt" label="状态" min-width="120"></el-table-column>
        <el-table-column prop="sqrq" label="申请日期" min-width="100"></el-table-column>
        <el-table-column prop="sqr" label="申请人" min-width="100"></el-table-column>
        <el-table-column prop="cglx" label="采购类型" min-width="100"></el-table-column>
        <el-table-column prop="jbr" label="经办人" min-width="100"></el-table-column>
        <el-table-column prop="fylx" label="费用类型" min-width="100"></el-table-column>
        <el-table-column prop="skdw" label="收款单位" min-width="100"></el-table-column>
        <el-table-column prop="ddzje" label="订单总金额" min-width="100"></el-table-column>
        <el-table-column prop="bcfke" label="本次付款额" min-width="100"></el-table-column>
        <el-table-column prop="yfkje" label="已付款金额" min-width="100"></el-table-column>
        <el-table-column prop="wfkje" label="未付款金额" min-width="100"></el-table-column>
        <el-table-column prop="bz" label="备注" min-width="100"></el-table-column>
        <el-table-column prop="fplx" label="发票类型" min-width="100"></el-table-column>
        <el-table-column prop="kprq" label="开票日期" min-width="100"></el-table-column>
        <el-table-column prop="fphm" label="发票号码" min-width="100"></el-table-column>
        <el-table-column prop="kpje" label="开票金额" min-width="100"></el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="180px">
          <template slot-scope="scope">
            <el-button @click="check(scope.row)" type="text" size="small">审核</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>


  </div>
</template>
<script>
export default {
  name: 'Payment',
  data() {
    return {
      // 付款管理表数据
      paymentData: [
        {
          sqr: '111111',
          ddzje: '11111',
        },
        {
          sqr: '222222',
          ddzje: '222222',
        },
        {}],
      // 修改
      // editData: {},
    }
  },
  methods: {
    // 点击审核按钮
    check(row) {
      // this.editData = row
      // this.addDialogVisible = true
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