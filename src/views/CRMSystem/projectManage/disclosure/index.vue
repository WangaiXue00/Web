<template>
  <!-- 项目交底 -->
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
        <el-form-item label="立项编号:">
          <el-input v-model="formInline.lxbh"
            placeholder="请输入立项编号"
            style="width: 130px;"></el-input>
        </el-form-item>
        <el-form-item label="项目名称:">
          <el-input v-model="formInline.xmmc"
            placeholder="请输入项目名称"
            style="width: 130px;"></el-input>
        </el-form-item>
        <el-form-item label="客户名称:">
          <el-select v-model="formInline.khmc" 
            clearable
            placeholder="请选择"
            style="width: 120px;">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="项目进度:">
          <el-select v-model="formInline.xmjd" 
            clearable
            placeholder="请选择"
            style="width: 120px;">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="项目发起人:">
          <el-select v-model="formInline.xmfqr" 
            clearable
            placeholder="请选择"
            style="width: 120px;">
            <el-option
              v-for="item in options3"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <!-- <el-form-item label="立项时间:">
          <el-date-picker
            v-model="formInline.lxsj"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
            style="width: 120px;">
          </el-date-picker>
        </el-form-item> -->
        <el-form-item>
          <el-button type="primary" @click="inquirer" icon="el-icon-search">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-table
        :data="tableData"
        height="calc(100vh - 235px)"
        fit
        :header-cell-style="{background: '#165DFF',color:'#fff',font:'500 14px PingFang SC'}"
        style="width: 100%">
        <el-table-column
          type="index"
          fixed
          label="序号"
          width="50">
        </el-table-column>
        <el-table-column
          prop="xmdh"
          label="项目单号">
        </el-table-column>
        <el-table-column
          prop="xmmc"
          label="项目名称">
        </el-table-column>
        <el-table-column
          prop="sqrq"
          label="申请日期">
        </el-table-column>
        <el-table-column
          prop="ywlx"
          label="业务类型">
        </el-table-column>
        <el-table-column
          prop="ywgsr"
          label="业务归属人"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="xmfqr"
          label="项目发起人"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="ywbm"
          label="业务部门">
        </el-table-column>
        <el-table-column
          prop="ywzb"
          label="业务组别">
        </el-table-column>
        <el-table-column
          prop="khmc"
          label="客户名称"
          show-overflow-tooltip
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="htbh"
          label="合同编号">
        </el-table-column>
        <el-table-column
          prop="jbxq"
          label="基本需求">
        </el-table-column>
        <el-table-column
          prop="ygbzy"
          label="医工部资源"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="yybzy"
          label="运营部资源"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="xzrsbzy"
          label="行政人事部资源"
          min-width="120">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          align="center"
          width="120">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="record(scope.row)">录入交底</el-button>
            <!-- <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">删除</el-button> -->
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      title="录入交底信息"
      :visible.sync="enterDialogVisible"
      width="60%"
      :before-close="handleClose">
      <div>
        <el-descriptions class="margin-top" :column="3" border>
          <template slot="title">
            <span>项目启动资源准备表</span>
          </template>
          <el-descriptions-item label="业务类型">
            kooriookami
          </el-descriptions-item>
          <el-descriptions-item label="立项编号">
            kooriookami
          </el-descriptions-item>
          <el-descriptions-item label="项目名称">
            kooriookami
          </el-descriptions-item>
          <el-descriptions-item label="项目发起人">
            kooriookami
          </el-descriptions-item>
          <el-descriptions-item label="客户名称	">
            kooriookami
          </el-descriptions-item>
          <el-descriptions-item label="合同编号">
            kooriookami
          </el-descriptions-item>
        </el-descriptions>
        <el-tag class="enterTag">基本需求（业务人员）</el-tag>
        <div>
          <el-table
            :data="basicData"
            style="width: 100%">
            <el-table-column
              prop="tm"
              label="条目"
              width="180">
            </el-table-column>
            <el-table-column
              prop="sm"
              label="说明"
              width="180">
            </el-table-column>
            <el-table-column
              prop="wcqk"
              label="完成情况">
              <template slot-scope="scope">
                <el-input v-model="scope.row.wcqk" size="small"></el-input>
              </template>
            </el-table-column>
            <el-table-column
              prop="bz"
              label="备注">
              <template slot-scope="scope">
                <el-input style="padding: 5px;" v-model="scope.row.bz" size="small"></el-input>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <el-tag class="enterTag">医工部资源准备</el-tag>
        <div>
          <el-table
            :data="medicalData"
            style="width: 100%">
            <el-table-column
              prop="tm"
              label="条目"
              width="180">
            </el-table-column>
            <el-table-column
              prop="sm"
              label="说明"
              width="180">
            </el-table-column>
            <el-table-column
              prop="wcqk"
              label="完成情况">
              <template slot-scope="scope">
                <el-input v-model="scope.row.wcqk" size="small"></el-input>
              </template>
            </el-table-column>
            <el-table-column
              prop="bz"
              label="备注">
              <template slot-scope="scope">
                <el-input style="padding: 5px;" v-model="scope.row.bz" size="small"></el-input>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <el-tag class="enterTag">运营部资源准备</el-tag>
        <div>
          <el-table
            :data="operationData"
            style="width: 100%">
            <el-table-column
              prop="tm"
              label="条目"
              width="180">
            </el-table-column>
            <el-table-column
              prop="sm"
              label="说明"
              width="180">
            </el-table-column>
            <el-table-column
              prop="wcqk"
              label="完成情况">
              <template slot-scope="scope">
                <el-input v-model="scope.row.wcqk" size="small"></el-input>
              </template>
            </el-table-column>
            <el-table-column
              prop="bz"
              label="备注">
              <template slot-scope="scope">
                <el-input v-model="scope.row.bz" size="small"></el-input>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <el-tag class="enterTag">行政人事部资源准备</el-tag>
        <div>
          <el-table
            :data="administrationData"
            style="width: 100%">
            <el-table-column
              prop="tm"
              label="条目"
              width="180">
            </el-table-column>
            <el-table-column
              prop="sm"
              label="说明"
              width="180">
            </el-table-column>
            <el-table-column
              prop="wcqk"
              label="完成情况">
              <template slot-scope="scope">
                <el-input v-model="scope.row.wcqk" size="small"></el-input>
              </template>
            </el-table-column>
            <el-table-column
              prop="bz"
              label="备注">
              <template slot-scope="scope">
                <el-input style="padding: 5px;" v-model="scope.row.bz" size="small"></el-input>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="enterDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="enterDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name:'disclosure',
  data() {
    return {
      enterDialogVisible:false,
      formInline:{},
      tableData:[{},{}],
      options1:[{
        value: '医院1',
        label: '医院1'
      },{
        value: '医院2',
        label: '医院2'
      }],
      options2:[{
        value: '进度1',
        label: '进度1'
      },{
        value: '进度2',
        label: '进度2'
      }],
      options3:[{
        value: '发起人1',
        label: '发起人1'
      },{
        value: '发起人2',
        label: '发起人2'
      }],
      // 基本需求（业务人员）数据
      operationData:[{
        tm:'业务配合人员',
        sm:'采购、仓库、运营、商务协助人员',
        wcqk:'',
        bz:''
      },{
        tm:'信息化',
        sm:'软件配置账号、院方信息、部署培训',
        wcqk:'',
        bz:''
      },{
        tm:'采购',
        sm:'特殊设备供应商开发、重点设备年度维保成本',
        wcqk:'',
        bz:''
      }],
      // 医工部资源数据
      medicalData:[{
        tm:'驻场人员',
        sm:'驻场团队名单',
        wcqk:'',
        bz:''
      },{
        tm:'内部培训',
        sm:'驻场手册、信息化软件、各类制度培训',
        wcqk:'',
        bz:''
      },{
        tm:'物料准备',
        sm:'办公用品、家具、维修工具、常用耗材、零配件申请',
        wcqk:'',
        bz:''
      },{
        tm:'维修场地',
        sm:'场地勘察、装修要求',
        wcqk:'',
        bz:''
      },{
        tm:'院方启动会',
        sm:'提请、沟通、推进、组织院方现场启动会',
        wcqk:'',
        bz:''
      }],
      // 运营部资源数据
      basicData:[{
        tm:'资产盘点  ',
        sm:'医院资产台账是否规范',
        wcqk:'',
        bz:''
      },{
        tm:'协助质控  ',
        sm:'是否需要协助质控',
        wcqk:'',
        bz:''
      },{
        tm:'协助计量  ',
        sm:'是否需要协助计量',
        wcqk:'',
        bz:''
      },{
        tm:'巡检及PM  ',
        sm:'巡检及PM频次',
        wcqk:'',
        bz:''
      },{
        tm:'全生命周期管理软件  ',
        sm:'是否需要全生命周期管理软件',
        wcqk:'',
        bz:''
      },{
        tm:'大屏展示  ',
        sm:'是否需要大屏展示设备信息、维修数据',
        wcqk:'',
        bz:''
      },{
        tm:'专用维修场地	  ',
        sm:'专用维修场地是否需要装修',
        wcqk:'',
        bz:''
      },{
        tm:'易损件及耗材更换  ',
        sm:'报价是否含易损件及耗材（需额外定义）更换',
        wcqk:'',
        bz:''
      },{
        tm:'带病入保设备情况  ',
        sm:'列举带病入保的设备数量，故障等',
        wcqk:'',
        bz:''
      },{
        tm:'其它要求  ',
        sm:'手动输入',
        wcqk:'',
        bz:''
      },{
        tm:'其它要求  ',
        sm:'手动输入',
        wcqk:'',
        bz:''
      }],
      // 行政人事部资源数据
      administrationData:[
        {
          tm:'驻场人员  ',
          sm:'内部转组手续',
          wcqk:'',
          bz:''
        },{
          tm:'固资准备  ',
          sm:'办公家具、办公用品、场地制度（KT板）、 维修工具等',
          wcqk:'',
          bz:''
        },{
          tm:'维修场地  ',
          sm:'	根据要求协调供应商跟进',
          wcqk:'',
          bz:''
        }]
    }
  },
  methods: {
    record(row) {
      this.enterDialogVisible = true
    },
    inquirer() {},
    // 弹框退出确认
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../../../assets/styles/appMain.css';
::v-deep .el-descriptions__header {
  position: relative;
  padding: 5px 0;
}
::v-deep .el-descriptions__title {
  position: absolute;
  top: 0;
  left: 40%;
}
::v-deep .el-descriptions-item__label {
  text-align: right !important;
}
::v-deep .el-table__header-wrapper {
  width: 100%;
}
.enterTag {
  margin: 5px 0;
  font-size: 14px;
  // background-color: #165DFF;
  // color: #fff;
  // font-weight: 700;
}
</style>