<template>
  <div>
    <el-button class="addbutton" type="primary" plain size="medium" @click="addData">新增</el-button>
    <el-table :data="familyInfoData" style="width: 100%">
      <el-table-column prop="gwlb" label="档案类别" width="200">
        <template slot-scope="scope">
          <el-select v-model="scope.row.gwlb" size="medium">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="gsqy " label="档案说明" width="300">
        <template slot-scope="scope">
          <el-input v-model="scope.row.gsqy" size="medium"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="rzzw" label="状态" width="250">
        <template slot-scope="scope">
          <el-radio v-model="scope.row.sfwtsgz" label="1" size="medium">有效</el-radio>
          <el-radio v-model="scope.row.sfwtsgz" label="2" size="medium">已作废</el-radio>
        </template>
      </el-table-column>
      <el-table-column prop="zwlb" label="档案附件" width="200">
        <!-- <template slot-scope="scope">
          <el-select v-model="scope.row.zwlb" size="medium">
            <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </template> -->
        <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" multiple>
          <i class="el-icon-upload2" style="font-size: 30px; color: #1890ff;"></i>
        </el-upload>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button @click.native.prevent="deleteRow(scope.$index, familyInfoData)" type="text" size="medium">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'PersonFile',
  data() {
    return {
      familyInfoData: [{}],
      options: [{
        value: '服务期协议',
        label: '服务期协议'
      }, {
        value: '绩效',
        label: '绩效'
      }, {
        value: '惩奖PDF',
        label: '惩奖PDF'
      }, {
        value: '劳动合同附件',
        label: '劳动合同附件'
      }, {
        value: '培训证书',
        label: '培训证书'
      }, {
        value: '证件照',
        label: '证件照'
      }]
    }
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    addData() {
      const obj = {
        gwlb: '',
        gsqy: '',
        rzzw: '',
        zwlb: '',
        zggz: '',
        qssj: '',
        jzsj: '',
        lzyy: '',
        gwgznx: '',
        gwgzyx: '',
        zmr: '',
        zmrdh: ''
      }
      this.familyInfoData.push(obj)
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-table .el-table__header-wrapper th {
  font-size: 15px;
  height: 35px;
  padding: 10px 0;
}

::v-deep .el-table__row {
  height: 35px
}

::v-deep .el-table--medium .el-table__cell {
  padding: 10px 0;
}

::v-deep .el-radio {
  margin: 0 8px;
  font-size: 10px;
}

.addbutton {
  margin-bottom: 10px;
}
</style>