<template>
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true">
        <el-form-item label="产品名称：">
          <el-input placeholder="" style="width: 120px;" size="small" clearable></el-input>
        </el-form-item>
        <el-form-item label="产品型号：">
          <el-input size="small" style="width: 120px;" clearable></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" icon="el-icon-search" size="small">查询</el-button>
        </el-form-item>
        <el-form-item class="right-buttons">
          <el-button type="primary" icon="el-icon-circle-plus-outline" size="small">盘带开单</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 盘点管理表 -->
    <div>
      <el-table :data="checkData" height="calc(100vh - 235px)" fit
            :header-cell-style="{ background: '#165DFF', color: '#fff', font: '500 14px PingFang SC' }"
             style="width: 100%;">
        <el-table-column type="index" fixed label="序号" width="50"></el-table-column>
        <el-table-column prop="pdrq" label="盘点日期" min-width="120"></el-table-column>
        <el-table-column prop="jbr" label="经办人" min-width="120"></el-table-column>
        <el-table-column prop="jbrbm" label="经办人部门" min-width="130"></el-table-column>
        <el-table-column prop="pdck" label="盘点仓库" min-width="120"></el-table-column>
        <el-table-column prop="kyzsl" label="亏盈总数量" min-width="130"></el-table-column>
        <el-table-column prop="kyzje" label="亏盈总金额" min-width="130"></el-table-column>
        <el-table-column prop="bz" label="备注" min-width="120"></el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="180px">
          <template slot-scope="scope">
            <el-button @click="editCheck(scope.row)" type="text" size="small">修改</el-button>
            <el-button @click.native.prevent="deleteRow(scope.$index, checkData)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>


  </div>
</template>
<script>
export default {
  name: 'Acceptance',
  data() {
    return {
      // 盘点管理表数据
      checkData: [
        {
          jbr: '11111',
          kyzsl: '111111',

        },
        {
          jbr: '222222',
          kyzsl: '22222',

        },
        {}],
      // 修改
      editData: {},
    }
  },
  methods: {
    // 点击修改按钮
    editCheck(row) {
      this.editData = row
      // this.addDialogVisible = true
    },

    // 点击删除按钮
    deleteRow(index, checkData) {
      checkData.splice(index, 1)
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