<template>
  <div>
    <el-tag class="dialog-tag">项目经验</el-tag>
    <el-button type="primary" plain size="mini" @click="addData">新增</el-button>
    <el-table
      :data="projectData"
      style="width: 100%">
      <el-table-column
        prop="starttime"
        label="过往项目开始时间"
        width="130">
        <template slot-scope="scope">
          <el-date-picker
                v-model="scope.row.starttime"
                type="date"
                size="mini"
                style="width: 100%;"
                value-format="yyyy-MM-dd"
                placeholder="选择日期">
            </el-date-picker>
        </template>
      </el-table-column>
      <el-table-column
        prop="stoptime"
        label="过往项目结束时间"
        width="130">
        <template slot-scope="scope">
          <el-date-picker
                v-model="scope.row.stoptime"
                type="date"
                size="mini"
                style="width: 100%;"
                value-format="yyyy-MM-dd"
                placeholder="选择日期">
            </el-date-picker>
        </template>
      </el-table-column>
      <el-table-column
        prop="xmname"
        label="项目名称">
        <template slot-scope="scope">
            <el-input v-model="scope.row.xmname" size="mini"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        prop="xmmiaoshu"
        label="项目描述">
        <template slot-scope="scope">
            <el-input v-model="scope.row.xmmiaoshu" size="mini"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        prop="xiangmuchengguo"
        label="项目成果">
        <template slot-scope="scope">
            <el-input v-model="scope.row.xiangmuchengguo" size="mini"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
            <el-button
            @click.native.prevent="deleteRow(scope.$index, projectData)"
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
    name: 'projectTable',
    data() {
      return { 
        projectData:[{}]
      }
    },
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      addData() {
        const obj = {
          starttime:'',
          stoptime:'',
          xmname:'',
          xmmiaoshu:'',
          xiangmuchengguo:'' 
        }
        this.projectData.push(obj)
      }
    },
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