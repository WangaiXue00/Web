<template>
  <div>
    <el-tag class="dialog-tag">人才盘点</el-tag>
    <el-button type="primary" plain size="small" @click="addData">新增</el-button>
    <el-table :data="occupationalData" style="width: 100%">
      <el-table-column prop="gwlb" label="人才盘点年度" width="120">
        <template slot-scope="scope">
          <el-input v-model="scope.row.gsqy" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="gsqy " label="人才类别" width="110">
        <template slot-scope="scope">
          <el-select v-model="scope.row.zwlb" size="small">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="rzzw" label="主要工作职责" width="100">
        <template slot-scope="scope">
          <el-input v-model="scope.row.rzzw" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="zwlb" label="主要优势/自己" width="100">
        <template slot-scope="scope">
          <el-input v-model="scope.row.gsqy" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="zggz" label="主要劣势/自己" width="100">
        <template slot-scope="scope">
          <el-input v-model="scope.row.zggz" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="qssj" label="参加的培训/自己" width="110">
        <template slot-scope="scope">
          <el-input v-model="scope.row.gsqy" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="jzsj" label="其他资质" width="100">
        <template slot-scope="scope">
          <el-input v-model="scope.row.gsqy" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="lzyy" label="主要优势/上级" width="100">
        <template slot-scope="scope">
          <el-input v-model="scope.row.lzyy" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="gwgznx" label="主要劣势/上级" width="100">
        <template slot-scope="scope">
          <el-input v-model="scope.row.gwgznx" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="gwgzyx" label="工作效率" width="100">
        <template slot-scope="scope">
          <el-select v-model="scope.row.zwlb" size="small">
            <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="zmr" label="可晋升职务潜力" width="110">
        <template slot-scope="scope">
          <el-select v-model="scope.row.zwlb" size="small">
            <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="zmrdh" label="职位后备人选" width="100">
        <template slot-scope="scope">
          <el-input v-model="scope.row.zmrdh" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="zmrdh" label="是否需要淘汰/替换" width="130">
        <template slot-scope="scope">
          <el-radio v-model="scope.row.sfwtsgz" label="1" size="small">是</el-radio>
          <el-radio v-model="scope.row.sfwtsgz" label="2" size="small">否</el-radio>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button @click.native.prevent="deleteRow(scope.$index, occupationalData)" type="text" size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'TalentView',
  data() {
    return {
      occupationalData: [{}],
      options: [{
        value: '待提升人才',
        label: '待提升人才'
      }, {
        value: '核心人才',
        label: '核心人才'
      }, {
        value: '普通人才',
        label: '普通人才'
      }, {
        value: '潜力人才',
        label: '潜力人才'
      }],
      options1: [{
        value: '低',
        label: '低'
      }, {
        value: '一般',
        label: '一般'
      }, {
        value: '高',
        label: '高'
      }],
      options2: [{
        value: '人事实习生',
        label: '人事实习生'
      }, {
        value: '助理工程师',
        label: '助理工程师'
      }, {
        value: '财务专员',
        label: '财务专员'
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
      this.occupationalData.push(obj)
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-table .el-table__header-wrapper th {
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

::v-deep .el-radio {
  margin: 0 8px;
  font-size: 8px;
}
</style>