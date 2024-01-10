<template>
  <div>
    <el-tag class="dialog-tag">家庭关系</el-tag>
    <el-button type="primary" plain size="small" @click="addData">新增</el-button>
    <el-table :data="familyInfoData" style="width: 100%">
      <el-table-column prop="gwlb" label="亲属关系" width="120">
        <template slot-scope="scope">
          <el-select v-model="scope.row.gwlb" size="small">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="gsqy " label="姓名" width="100">
        <template slot-scope="scope">
          <el-input v-model="scope.row.gsqy" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="rzzw" label="出生年月" width="100">
        <template slot-scope="scope">
          <el-date-picker v-model="scope.row.qssj" type="date" size="small" placeholder="选择日期">
          </el-date-picker>
        </template>
      </el-table-column>
      <el-table-column prop="zwlb" label="政治面貌" width="120">
        <template slot-scope="scope">
          <el-select v-model="scope.row.zwlb" size="small">
            <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="zggz" label="单位及职务">
        <template slot-scope="scope">
          <el-input v-model="scope.row.zggz" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="qssj" label="联系电话" width="100">
        <template slot-scope="scope">
          <el-input v-model="scope.row.zggz" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="jzsj" label="备注" width="100">
        <template slot-scope="scope">
          <el-input v-model="scope.row.zggz" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="lzyy" label="紧急联系人" width="130">
        <template slot-scope="scope">
          <el-radio v-model="scope.row.sfwtsgz" label="1" size="small">是</el-radio>
          <el-radio v-model="scope.row.sfwtsgz" label="2" size="small">否</el-radio>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button @click.native.prevent="deleteRow(scope.$index, familyInfoData)" type="text" size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'FamilyInfo',
  data() {
    return {
      familyInfoData: [{}],
      options: [{
        value: '父亲',
        label: '父亲'
      }, {
        value: '母亲',
        label: '母亲'
      }, {
        value: '儿子',
        label: '儿子'
      }, {
        value: '女儿',
        label: '女儿'
      }, {
        value: '妻子',
        label: '妻子'
      }, {
        value: '丈夫',
        label: '丈夫'
      }],
      options1: [{
        value: '共青团员',
        label: '共青团员'
      }, {
        value: '民主党派成员',
        label: '民主党派成员'
      }, {
        value: '群众',
        label: '群众'
      }, {
        value: '中国共产党党员',
        label: '中国共产党党员'
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