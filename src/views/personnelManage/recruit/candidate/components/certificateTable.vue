<template>
  <div>
    <el-tag class="dialog-tag">各种证书</el-tag>
    <el-button type="primary" plain size="mini" @click="addData">新增</el-button>
    <el-table
      :data="certificateData"
      style="width: 100%">
      <el-table-column
        prop="teshugongzhong"
        label="是否是特殊工种"
        width="130">
        <template slot-scope="scope">
            <el-radio v-model="scope.row.teshugongzhong" label="1" size="mini">是</el-radio>
            <el-radio v-model="scope.row.teshugongzhong" label="0" size="mini">否</el-radio>
        </template>
      </el-table-column>
      <el-table-column
        prop="leixing "
        label="特殊工种类型"
        width="100">
        <template slot-scope="scope">
            <el-input v-model="scope.row.leixing" size="mini"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        prop="zsmc"
        label="证书名称">
        <template slot-scope="scope">
            <el-input v-model="scope.row.zsmc" size="mini"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        prop="zszy"
        label="证书摘要">
        <template slot-scope="scope">
            <el-input v-model="scope.row.zszy" size="mini"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        prop="fzdw"
        label="发证单位">
        <template slot-scope="scope">
            <el-input v-model="scope.row.fzdw" size="mini"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        prop="fzrq"
        label="发证日期"
        width="100">
        <template slot-scope="scope">
            <el-date-picker
                v-model="scope.row.fzrq"
                type="date"
                size="mini"
                placeholder="选择日期">
            </el-date-picker>
        </template>
      </el-table-column>
      <el-table-column
        prop="sfcq"
        label="是否长期"
        width="130">
        <template slot-scope="scope">
            <el-radio v-model="scope.row.sfcq" label="1" size="mini">是</el-radio>
            <el-radio v-model="scope.row.sfcq" label="0" size="mini">否</el-radio>
        </template>
      </el-table-column>
      <el-table-column
        prop="zsjzrq"
        label="证书有效期截止日"
        width="130">
        <template slot-scope="scope">
            <el-date-picker
                v-model="scope.row.zsyxqjzr"
                type="date"
                size="mini"
                style="width: 100%;"
                value-format="yyyy-MM-dd"
                placeholder="选择日期">
            </el-date-picker>
        </template>
      </el-table-column>
      <el-table-column
        prop="zspdf"
        label="证书PDF">
        <template slot-scope="scope">
            <el-input v-model="scope.row.zspdf" size="mini"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
            <el-button
            @click.native.prevent="deleteRow(scope.$index, certificateData)"
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
    name: 'certificateTable',
    data() { 
        return {
            certificateData:[{}]
        }
    },
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      addData() {
        const obj = {
          teshugongzhong:'',
          leixing:'',
          zsmc:'',
          zszy:'',
          fzdw:'',
          fzrq:'',
          sfcq:'',
          zsjzrq:'',
          zspdf:'' 
        }
        this.certificateData.push(obj)
      }
    },
}
</script>

<style lang="scss" scoped>
::v-deep .el-table .el-table__header-wrapper th {
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
::v-deep .el-radio {
    margin: 0 8px;
    font-size: 8px;
}
</style>