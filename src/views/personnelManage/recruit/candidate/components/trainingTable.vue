<template>
  <div>
    <el-tag class="dialog-tag">培训记录</el-tag>
    <el-button type="primary" plain size="mini" @click="addData">新增</el-button>
    <el-table
      :data="trainingData"
      style="width: 100%">
      <el-table-column
        prop="trainstarttime"
        label="培训开始时间"
        width="130">
        <template slot-scope="scope">
          <el-date-picker
                v-model="scope.row.trainstarttime"
                type="date"
                size="mini"
                style="width: 100%;"
                value-format="yyyy-MM-dd"
                placeholder="选择日期">
            </el-date-picker>
        </template>
      </el-table-column>
      <el-table-column
        prop="trainstoptime"
        label="培训结束时间"
        width="130">
        <template slot-scope="scope">
          <el-date-picker
                v-model="scope.row.trainstoptime"
                type="date"
                size="mini"
                style="width: 100%;"
                value-format="yyyy-MM-dd"
                placeholder="选择日期">
            </el-date-picker>
        </template>
      </el-table-column>
      <el-table-column
        prop="trainjigou"
        label="培训机构"
        width="100">
        <template slot-scope="scope">
            <el-input v-model="scope.row.trainjigou" size="mini"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        prop="trainproject"
        label="培训项目"
        width="100">
        <template slot-scope="scope">
            <el-input v-model="scope.row.trainproject" size="mini"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        prop="trainfazhengdanwei"
        label="培训发证单位"
        width="100">
        <template slot-scope="scope">
            <el-input v-model="scope.row.trainfazhengdanwei" size="mini"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        prop="trainzhengshu"
        label="培训证书名称">
        <template slot-scope="scope">
            <el-input v-model="scope.row.trainzhengshu" size="mini"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
            <el-button
            @click.native.prevent="deleteRow(scope.$index, trainingData)"
            type="text"
            size="small">
            移除
            </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
    name:'trainingTable',
    data() {
        return { 
            trainingData:[{}]
        }
    },
    methods: { 
        deleteRow(index, rows) {
        rows.splice(index, 1);
        },
        addData() {
            const obj = { 
              trainstarttime:'',
              trainstoptime:'',
              trainjigou:'',
              trainproject:'',
              trainfazhengdanwei:'',
              trainzhengshu:''
            }
            this.trainingData.push(obj)
        }
    }
}
</script>

<style lang="scss" scoped>
::v-deep .el-table .el-table__header-wrapper th,
.el-table .el-table__fixed-header-wrapper th {
    font-size: 12px;
    height: 20px;
    padding: 5px 0;
}
::v-deep .el-table__row {
    height:30px
}
::v-deep .el-table--medium .el-table__cell {
    padding: 2px 0;
}
.el-date-editor--daterange.el-input__inner {
    width: 180px;
}
</style>