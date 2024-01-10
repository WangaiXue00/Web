<template>
  <div>
    <el-tag class="dialog-tag">过往培训</el-tag>
    <el-button type="primary" plain size="small" @click="addData">新增</el-button>
    <el-table :data="trainingData" style="width: 100%">
      <el-table-column prop="pxqzsj" label="培训起止时间" width="200">
        <template slot-scope="scope">
          <el-date-picker v-model="scope.row.pxqzsj" type="daterange" size="medium" range-separator="至"
            start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </template>
      </el-table-column>
      <el-table-column prop="pxjg" label="培训机构" width="120">
        <template slot-scope="scope">
          <el-input v-model="scope.row.pxjg" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="pxxm" label="培训项目" width="120">
        <template slot-scope="scope">
          <el-input v-model="scope.row.pxxm" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="pxfzdw" label="培训发证单位" width="120">
        <template slot-scope="scope">
          <el-input v-model="scope.row.pxfzdw" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="pxzsmc" label="培训证书名称">
        <template slot-scope="scope">
          <el-input v-model="scope.row.pxzsmc" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button @click.native.prevent="deleteRow(scope.$index, trainingData)" type="text" size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'PastTrain',
  data() {
    return {
      trainingData: [{}]
    }
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    addData() {
      const obj = {
        pxqzsj: '',
        pxjg: '',
        pxxm: '',
        pxfzdw: '',
        pxzsmc: ''
      }
      this.trainingData.push(obj)
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-table .el-table__header-wrapper th,
.el-table .el-table__fixed-header-wrapper th {
  font-size: 8px;
  height: 20px;
  padding: 5px 0;
}

::v-deep .el-table__row {
  height: 30px
}

::v-deep .el-table--medium .el-table__cell {
  padding: 2px 0;
}

.el-date-editor--daterange.el-input__inner {
  width: 180px;
}
</style>