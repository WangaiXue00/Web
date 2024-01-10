<template>
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true">
        <el-form-item label="单号：">
          <el-input placeholder="请输入单号" style="width: 120px;" size="small" clearable></el-input>
        </el-form-item>
        <el-form-item label="供应商：">
          <el-input size="small" style="width: 120px;" clearable></el-input>
        </el-form-item>
        <el-form-item label="产品名称：">
          <el-input size="small" style="width: 120px;" clearable></el-input>
        </el-form-item>
        <el-form-item label="产品型号：">
          <el-input size="small" style="width: 120px;" clearable></el-input>
        </el-form-item>
        <el-form-item label="入库时间：">
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

    <!-- 入库管理表 -->
    <div>
      <el-table :data="inStoreData" height="calc(100vh - 235px)" fit
        :header-cell-style="{ background: '#165DFF', color: '#fff', font: '500 14px PingFang SC' }"
         style="width: 100%;">
        <el-table-column type="index" fixed label="序号" width="50"></el-table-column>
        <el-table-column prop="rkdh" label="入库单号" min-width="120"></el-table-column>
        <el-table-column prop="rksj" label="入库时间" min-width="100"></el-table-column>
        <el-table-column prop="zt" label="状态" min-width="100"></el-table-column>
        <el-table-column prop="rklx" label="入库类型" min-width="100"></el-table-column>
        <el-table-column prop="gldh" label="关联单号" min-width="100"></el-table-column>
        <el-table-column prop="jbr" label="经办人" min-width="100"></el-table-column>
        <el-table-column prop="gyskh" label="供应商/客户" min-width="100"></el-table-column>
        <el-table-column prop="bz" label="备注" min-width="100"></el-table-column>
        <el-table-column prop="czr" label="操作人" min-width="100"></el-table-column>
        <el-table-column prop="czsj" label="操作时间" min-width="100"></el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="180px">
          <template slot-scope="scope">
            <el-button @click="editInStore(scope.row)" type="text" size="small">修改</el-button>
            <el-button @click.native.prevent="deleteRow(scope.$index, inStoreData)" type="text"
              size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>


  </div>
</template>
<script>
export default {
  name: 'inStore',
  data() {
    return {
      // 入库管理表数据
      inStoreData: [
        {
          ysdh: '11111',
          sqr: '111111',
          ysry: '11111',
          gyskh: '111111'
        },
        {
          ysdh: '22222',
          sqr: '222222',
          ysry: '22222',
          gyskh: '22222'
        },
        {}],
      // 修改
      editData: {},
    }
  },
  methods: {
    // 点击修改按钮
    editInStore(row) {
      this.editData = row
      // this.addDialogVisible = true
    },

    // 点击删除按钮
    deleteRow(index, inStoreData) {
      inStoreData.splice(index, 1)
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