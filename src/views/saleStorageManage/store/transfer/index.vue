<template>
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true">
        <el-form-item label="单号：">
          <el-input placeholder="请输入单号" style="width: 120px;" size="small" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" size="small">查询</el-button>
        </el-form-item>
        <el-form-item class="right-buttons">
          <el-button type="primary" icon="el-icon-circle-plus-outline" size="small">添加</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 调拔管理表 -->
    <div >
      <el-table :data="transferData" height="calc(100vh - 235px)" fit
        :header-cell-style="{ background: '#165DFF', color: '#fff', font: '500 14px PingFang SC' }"
         style="width: 100%;">
        <el-table-column type="index" fixed label="序号" width="50"></el-table-column>
        <el-table-column prop="tbdh" label="调拔单号" min-width="120"></el-table-column>
        <el-table-column prop="sqsj" label="申请时间" min-width="100"></el-table-column>
        <el-table-column prop="zt" label="状态" min-width="100"></el-table-column>
        <el-table-column prop="tcck" label="调出仓库" min-width="100"></el-table-column>
        <el-table-column prop="trck" label="调入仓库" min-width="100"></el-table-column>
        <el-table-column prop="sl" label="数量" min-width="100"></el-table-column>
        <el-table-column prop="je" label="金额" min-width="100"></el-table-column>
        <el-table-column prop="bz" label="备注" min-width="100"></el-table-column>
        <el-table-column prop="sqr" label="申请人" min-width="100"></el-table-column>
        <el-table-column prop="sqbm" label="申请部门" min-width="100"></el-table-column>
        <el-table-column prop="jbr" label="经办人" min-width="100"></el-table-column>
        <el-table-column prop="kdr" label="开单人" min-width="100"></el-table-column>
        <el-table-column prop="kdsj" label="开单时间" min-width="100"></el-table-column>
        <!-- <el-table-column fixed="right" label="操作" align="center" width="180px">
          <template slot-scope="scope">
            <el-button @click="editOutStore(scope.row)" type="text" size="small">修改</el-button>
            <el-button @click.native.prevent="deleteRow(scope.$index, transferData)" type="text"
              size="small">删除</el-button>
          </template>
        </el-table-column> -->
      </el-table>
    </div>


  </div>
</template>
<script>
export default {
  name: 'Transfer',
  data() {
    return {
      // 调拔管理表数据
      transferData: [
        {
          tbdh: '11111',
          sqr: '111111',
          tcck: '11111',
          trck: '111111'
        },
        {
          tbdh: '222222',
          sqr: '222222',
          tcck: '222222',
          trck: '222222'
        },
        {
          sqbm: '11111',
          jbr: '111111',
          kdr: '111111',
          kdsj: '111111'
        },{},{},{},{},{},{},{},{},
        {},{},{},{},{},{},{},{},{}]
      // 修改
      // editData: {},
    }
  },
  methods: {
    // 点击修改按钮
    // editOutStore(row) {
    //   this.editData = row
    //   // this.addDialogVisible = true
    // },

    // 点击删除按钮
    // deleteRow(index, transferData) {
    //   transferData.splice(index, 1)
    // },
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
::v-deep .el-table__header-wrapper {
  width:100% !important;
}
::v-deep .el-table__body-wrapper {
  width: 100% !important;
  &::-webkit-scrollbar {
    width: 0;
  }
}
</style>