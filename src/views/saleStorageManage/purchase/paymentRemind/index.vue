<template>
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true">
        <el-form-item label="采购单号：">
          <el-input placeholder="请输入单号" size="small" clearable></el-input>
        </el-form-item>
        <el-form-item label="供应商：">
          <el-input size="small" clearable></el-input>
        </el-form-item>
        <el-form-item label="计划付款时间：">
          <el-input size="small" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" size="small">查询</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 付款到期提醒表 -->
    <div>
      <el-table :data="payData" height="calc(100vh - 235px)" fit
        :header-cell-style="{ background: '#165DFF', color: '#fff', font: '500 14px PingFang SC' }"
         style="width: 100%;">
        <el-table-column type="index" fixed label="序号" width="50"></el-table-column>
        <el-table-column prop="qx" label="期限" min-width="110"></el-table-column>
        <el-table-column prop="cgdh" label="采购单号" min-width="120"></el-table-column>
        <el-table-column prop="gys" label="供应商" min-width="120"></el-table-column>
        <el-table-column prop="jhfksj" label="计划付款时间" min-width="130"></el-table-column>
        <el-table-column prop="fkje" label="付款金额" min-width="120"></el-table-column>
        <el-table-column prop="fkfs" label="付款方式" min-width="120"></el-table-column>
        <el-table-column prop="zhm" label="账户名" min-width="120"></el-table-column>
        <el-table-column prop="yh" label="银行" min-width="120"></el-table-column>
        <el-table-column prop="yhzh" label="银行账号" min-width="120"></el-table-column>
        <el-table-column prop="bz" label="备注" min-width="130"></el-table-column>
        <!-- <el-table-column fixed="right" label="操作" align="center" width="180px">
          <template slot-scope="scope">
            <el-button @click="check(scope.row)" type="text" size="small">审核</el-button>
            <el-button @click="editRequest(scope.row)" type="text" size="small">修改</el-button>
            <el-button @click.native.prevent="deleteRow(scope.$index, payData)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column> -->
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      // 采购申请表数据
      payData: [
        {
          qx: '3天',
          cgdh: '111111',
          fkje: '11111',
        },
        {
          qx: '5天',
          cgdh: '222222',
          fkje: '22222222',
        },
        {}],
    }
  }

}
</script>
<style lang='scss' scoped>
@import '../../../../assets/styles/appMain.css';
</style>