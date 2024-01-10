<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px" size="small">
      <el-row :gutter="20">
        <el-col :span="12">
          <div>
            <el-form-item label="项目发起人:">
              <el-select v-model="form.xmfqr" filterable style="width: 100%;">
                <el-option label="张三" value="张三"></el-option>
                <el-option label="李四" value="李四"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="重点项目管理:">
              <el-radio-group v-model="form.zdxmgl">
                <el-radio label="是"></el-radio>
                <el-radio label="否"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="项目年限:">
              <el-input style="width: 100%;" v-model="form.xmnx"></el-input>
            </el-form-item>
            <el-form-item label="项目预算:">
              <el-input style="width: 100%;" v-model="form.xmnx"></el-input>
            </el-form-item>
            <el-form-item label="客户名称:">
              <el-select v-model="form.xmfqr" filterable style="width: 100%;">
                <el-option label="上海孟超肿瘤医院" value="上海孟超肿瘤医院"></el-option>
                <el-option label="上海市宝山区罗店医院" value="上海市宝山区罗店医院"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="联系电话:">
              <el-input style="width: 100%;" v-model="form.xmnx"></el-input>
            </el-form-item>
            <el-form-item label="直接成本:">
              <el-input style="width: 100%;" v-model="form.xmnx"></el-input>
            </el-form-item>
            <el-form-item label="招投标费用:">
              <el-input style="width: 100%;" v-model="form.xmnx"></el-input>
            </el-form-item>
            <el-form-item label="应缴税费:">
              <el-input style="width: 100%;" v-model="form.xmnx"></el-input>
            </el-form-item>
            <el-form-item label="资金利息:">
              <el-input style="width: 100%;" v-model="form.xmnx"></el-input>
            </el-form-item>
            <el-form-item label="平台费用:">
              <el-input style="width: 100%;" v-model="form.xmnx"></el-input>
            </el-form-item>
            <el-form-item label="审批流程:">
              <el-select v-model="form.xmfqr" filterable style="width: 100%;">
                <el-option label="无需审批" value="无需审批"></el-option>
                <el-option label="100万到小于等于500万立项" value="100万到小于等于500万立项"></el-option>
              </el-select>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div>
            <el-form-item label="业务类型:">
              <el-select v-model="form.ywlx" style="width: 100%;">
                <el-option label="驻场全托" value="驻场全托"></el-option>
                <el-option label="委外保修" value="委外保修"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="是否招标:">
              <el-radio-group v-model="form.sfzb">
                <el-radio label="是"></el-radio>
                <el-radio label="否"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="回款周期:">
              <el-input style="width: 100%;" v-model="form.xmnx"></el-input>
            </el-form-item>
            <el-form-item label="地区:">
              <el-select v-model="form.xmfqr" style="width: 100%;">
                <el-option label="上海" value="上海"></el-option>
                <el-option label="河南" value="河南"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="联系人:">
              <el-input style="width: 100%;" v-model="form.xmnx"></el-input>
            </el-form-item>
            <el-form-item label="项目概述:">
              <el-input type="textarea" :rows="1" style="width: 100%;" v-model="form.xmnx"></el-input>
            </el-form-item>
            <el-form-item label="提成约定:">
              <el-input style="width: 100%;" v-model="form.xmnx"></el-input>
            </el-form-item>
            <el-form-item label="分包费用:">
              <el-input style="width: 100%;" v-model="form.xmnx"></el-input>
            </el-form-item>
            <el-form-item label="业务费用:">
              <el-input style="width: 100%;" v-model="form.xmnx"></el-input>
            </el-form-item>
            <el-form-item label="主管奖励:">
              <el-input style="width: 100%;" v-model="form.xmnx"></el-input>
            </el-form-item>
            <el-form-item label="附 件:">
              <el-upload class="upload-demo" action="http://123.57.56.30:8080/system/info/add" multiple>
                <i class="el-icon-upload2" style="font-size: 35px; color: #1890ff; font-weight: 600;"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="备 注:">
              <el-input type="textarea" :rows="1" style="width: 100%;" v-model="form.xmnx"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>

      <!-- <div style="width:calc(100% - 50px); margin-left: 50px; display: flex; align-items: center;">
        <span>设备信息: </span>
        <el-table :data="form.accountInfo" fit :header-cell-style="{ font: '500 14px PingFang SC' }"
          style=" margin: 10px 0px 10px 10px; border: 1px solid rgb(236, 233, 233);">
          <el-table-column label="设备品牌" min-width="200">
            <template slot-scope="scope">
              <el-input v-model="scope.row.sbpp" size="small"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="设备名称" min-width="200">
            <template slot-scope="scope">
              <el-input v-model="scope.row.sbmc" size="small"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="规格型号" min-width="200">
            <template slot-scope="scope">
              <el-input v-model="scope.row.ggxh" size="small"></el-input>
            </template>
          </el-table-column>
          <el-table-column width="100" align="center">
            <template slot="header" slot-scope="scope">
              <el-button type="primary" plain size="mini" @click="addDevice" circle style=" border: 1px solid skyblue;">
                <i class="el-icon-plus" style="font-size: 14px; font-weight: 500;"></i>
              </el-button>
            </template>
            <template slot-scope="scope">
              <el-button type="danger" plain size="mini" @click.native.prevent="deleteRow(scope.$index, form.accountInfo)"
                circle>
                <i class="el-icon-delete" style="font-size: 14px; font-weight: 500;"></i>
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div> -->

      <el-tag class="dialog-tag">设备信息</el-tag>
      <el-button type="primary" plain size="small" @click="addDevice">新增</el-button>
      <el-table :data="form.accountInfo" style="width: 100%;margin-bottom: 20px;">
        <el-table-column type="index" label="序号" width="80">
        </el-table-column>
        <el-table-column label="设备品牌">
          <template slot-scope="scope">
            <el-input v-model="scope.row.sbpp" size="small"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="设备名称">
          <template slot-scope="scope">
            <el-input v-model="scope.row.sbmc" size="small"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="规格型号">
          <template slot-scope="scope">
            <el-input v-model="scope.row.ggxh" size="small"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="80">
          <template slot-scope="scope">
            <el-button @click.native.prevent="deleteRow(scope.$index, form.accountInfo)" type="text" size="small">
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "commonForm",
  props: ["editList"],
  data() {
    return {
      form: {
        khmc: '',
        accountInfo: [
          { sbpp: '设备 A', sbmc: '设备 A', ggxh: 'Type A' },
        ],

      },

      cities: [],     // 城市数据源
      districts: [],  // 区数据源

    }
  },
  created() {
    // console.log('111111111', this.form.isMedical);
    // console.log(this.editList)
    // if (this.editList) {
    //   this.form = JSON.parse(JSON.stringify(this.editList))
    //   // console.log(this.form,'form')
    // } else {
    //   this.form = {

    //   }
    // }
  },
  methods: {
    // 账户信息
    addDevice() {
      const obj = {
        sbpp: '', sbmc: '', ggxh: ''
      }
      this.form.accountInfo.push(obj)
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
  }
}
</script>

<style scoped lang="scss">
.dialog-tag {
  display: inline-block;
  margin: 10px 5px 5px 0;
}


// ::v-deep .el-table__header-wrapper {
//   width: 100%;
// }

::v-deep .el-form-item__label {
  font-size: 13px;
  font-weight: 500;
}

::v-deep .el-form-item {
  margin-bottom: 8px;
}
</style>
