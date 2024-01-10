<template>
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true">
        <el-form-item label="销售单号：">
          <el-input placeholder="请输入单号" size="small" clearable></el-input>
        </el-form-item>
        <el-form-item label="客户名称：">
          <el-input size="small" clearable></el-input>
        </el-form-item>
        <el-form-item label="计划开票时间：">
          <el-input size="small" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" size="small">查询</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 到期开票提醒表 -->
    <div>
      <el-table :data="billData" height="calc(100vh - 235px)" fit
        :header-cell-style="{ background: '#165DFF', color: '#fff', font: '500 14px PingFang SC' }"
         style="width: 100%;">
        <el-table-column type="index" fixed label="序号" width="50"></el-table-column>
        <el-table-column prop="qx" label="期限" min-width="110"></el-table-column>
        <el-table-column prop="xsdh" label="销售单号" min-width="130"></el-table-column>
        <el-table-column prop="khmc" label="客户名称" min-width="130"></el-table-column>
        <el-table-column prop="lxr" label="联系人" min-width="130"></el-table-column>
        <el-table-column prop="lxdh" label="联系电话" min-width="130"></el-table-column>
        <el-table-column prop="jhkpsj" label="计划开票时间" min-width="130"></el-table-column>
        <el-table-column prop="kpje" label="开票金额" min-width="130"></el-table-column>
        <el-table-column prop="kplx" label="开票类型" min-width="130"></el-table-column>
        <el-table-column prop="bz" label="备注" min-width="180"></el-table-column>
        <!-- <el-table-column fixed="right" label="操作" align="center" width="180px">
          <template slot-scope="scope">
            <el-button @click="check(scope.row)" type="text" size="small">审核</el-button>
            <el-button @click="editRequest(scope.row)" type="text" size="small">修改</el-button>
            <el-button @click.native.prevent="deleteRow(scope.$index, billData)" type="text" size="small">删除</el-button>
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
      // 到期开票提醒表数据
      billData: [
        {
          qx: '3天',
          xsdh: '111111',
          lxr: '11111',
        },
        {
          qx: '5天',
          xsdh: '222222',
          lxr: '22222222',
        },
        {}],
    }
  }

}
</script>
<style lang='scss' scoped>
@import '../../../../assets/styles/appMain.css';
</style>