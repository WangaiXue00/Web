<template>
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true">
        <el-form-item label="申请单号搜索：">
          <el-input placeholder="请输入单号" size="small" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" size="small">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-arrow-down" size="small" @click="gjSearch">高级查询</el-button>
        </el-form-item>
        <el-form-item class="right-buttons">
          <el-button type="primary" icon="el-icon-circle-plus-outline" size="small" @click="addRequest">新增申请</el-button>
          <el-button type="primary" icon="el-icon-check" size="small" @click="commit">提交采购员</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 高级查询 -->
    <!-- <div v-show="searchVisible" style="margin: 0 45px;">
      <el-form ref="searchRef" :model="searchData">
        <el-form-item>
          <el-form :inline="true">
            <el-form-item label="申请单号:">
              <el-input v-model="searchData.sqdh" placeholder="" style="width: 120px;" size="small"></el-input>
            </el-form-item>
            <el-form-item label="采购类型:" class="left">
              <el-radio-group v-model="searchData.cglx">
                <el-radio label="单次服务">单次服务</el-radio>
                <el-radio label="零配件">零配件</el-radio>
                <el-radio label="设备">设备</el-radio>
                <el-radio label="年度服务">年度服务</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="申请状态:" class="left">
              <el-select placeholder="请选择" style="width: 120px;" size="small" v-model="searchData.sqzt">
                <el-option label="aaa" value="aaa"></el-option>
                <el-option label="bbb" value="bbb"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="客户名称:" class="left">
              <el-input v-model="searchData.khmc" style="width: 120px;" size="small"></el-input>
            </el-form-item>

          </el-form>
        </el-form-item>
        <el-form-item>
          <el-form :inline="true">
            <el-form-item label="业务部门:">
              <el-select placeholder="请选择" style="width: 120px;" size="small" v-model="searchData.ywbm">
                <el-option label="ccc" value="ccc"></el-option>
                <el-option label="ddd" value="ddd"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="业务归属人:">
              <el-input v-model="searchData.ywgsr" style="width: 120px;" size="small"></el-input>
            </el-form-item>
            <el-form-item label="关联项目:">
              <el-input v-model="searchData.glxm" placeholder="" style="width: 120px;" size="small"></el-input>
            </el-form-item>
            <el-form-item label="立项编号:">
              <el-input v-model="searchData.lxbh" style="width: 120px;" size="small"></el-input>
            </el-form-item>
            <el-form-item label="申请日期:">
              <el-date-picker v-model="searchData.sqrq" type="date" placeholder="选择日期" style="width: 120px;" size="small">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="关联单号:">
              <el-input v-model="searchData.gldh" style="width: 120px;" size="small"></el-input>
            </el-form-item>

          </el-form>
        </el-form-item>
        <el-form-item>
          <el-form :inline="true">
            <el-form-item label="采购专员:">
              <el-input v-model="searchData.cgzy" style="width: 120px;" size="small"></el-input>
            </el-form-item>
            <el-form-item label="产品编号:">
              <el-input v-model="searchData.cpbh" style="width: 120px;" size="small"></el-input>
            </el-form-item>
            <el-form-item label="产品名称:">
              <el-input v-model="searchData.cpmc" style="width: 120px;" size="small"></el-input>
            </el-form-item>
            <el-form-item label="规格型号:">
              <el-input v-model="searchData.ggxh" style="width: 120px;" size="small"></el-input>
            </el-form-item>
            <el-form-item label="设备名称:">
              <el-input v-model="searchData.sbmc" style="width: 120px;" size="small"></el-input>
            </el-form-item>
            <el-form-item label="设备型号:">
              <el-input v-model="searchData.sbxh" style="width: 120px;" size="small"></el-input>
            </el-form-item>
          </el-form>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" size="small">查询</el-button>
          <el-button type="primary" icon="el-icon-arrow-up" size="small" @click="searchVisible = false">收起</el-button>
        </el-form-item>
      </el-form>
    </div> -->

    <!-- 新增dialog框 -->
    <AddRequest v-if="addDialogVisible" append-to-body :editData="editData" @close="closeDialog"></AddRequest>
    <!-- 采购申请表 -->
    <div>
      <el-table :data="requestData" height="calc(100vh - 235px)" fit
        :header-cell-style="{ background: '#165DFF', color: '#fff', font: '500 14px PingFang SC' }"
         style="width: 100%;">
        <el-table-column type="index" fixed label="序号" width="50"></el-table-column>
        <el-table-column prop="cgsqdh" label="采购申请单号" min-width="120"></el-table-column>
        <el-table-column prop="dqzt" label="当前状态" min-width="100"></el-table-column>
        <el-table-column prop="cglx" label="采购类型" min-width="100"></el-table-column>
        <el-table-column prop="xdrq" label="下单日期" min-width="100"></el-table-column>
        <el-table-column prop="ywgsr" label="业务归属人" min-width="100"></el-table-column>
        <el-table-column prop="ywbm" label="业务部门" min-width="100"></el-table-column>
        <el-table-column prop="khmc" label="客户名称" min-width="100"></el-table-column>
        <el-table-column prop="sybm" label="使用部门" min-width="100"></el-table-column>
        <el-table-column prop="fylx" label="费用类型" min-width="100"></el-table-column>
        <el-table-column prop="ywlx" label="业务类型" min-width="100"></el-table-column>
        <el-table-column prop="cgy" label="采购员" min-width="100"></el-table-column>
        <el-table-column prop="kpje" label="开票金额" min-width="100"></el-table-column>
        <el-table-column prop="zdr" label="制单人" min-width="100"></el-table-column>
        <el-table-column prop="zdsj" label="制单时间" min-width="100"></el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="180px">
          <template slot-scope="scope">
            <el-button @click="check(scope.row)" type="text" size="small">审核</el-button>
            <el-button @click="editRequest(scope.row)" type="text" size="small">修改</el-button>
            <el-button @click.native.prevent="deleteRow(scope.$index, requestData)" type="text"
              size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>


    <!-- 审核的对话框 -->
    <el-dialog title="审核" append-to-body :visible.sync="checkVisible" width="50%">
      <el-table :data="checkData" style="width: 100%;">
        <el-table-column prop="cgsqdh" label="采购申请单号"></el-table-column>
        <el-table-column prop="cglx" label="采购类型"></el-table-column>
        <el-table-column prop="ywgsr" label="业务归属人"></el-table-column>
        <el-table-column prop="cgy" label="采购员"></el-table-column>
        <el-table-column prop="kpje" label="开票金额"></el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="danger" @click="checkVisible = false">审核不通过</el-button>
        <el-button type="primary" @click="checkVisible = false">审核通过</el-button>
      </span>
    </el-dialog>


    <!-- 职位管理表 -->
    <!-- <div  style="margin: 0 45px;">
      <el-table :data="tableData" height="66vh" highlight-current-row @current-change="handleCurrentChange"
        :header-cell-style="{ background: '#ddd', color: '#000000', font: 'normal 600 14px 黑体' }"
         style="width: 100%;line-height: 10px;">
        <el-table-column type="index" fixed label="序号" width="50">
        </el-table-column>
        <el-table-column prop="zwzt" fixed label="职位状态" width="100">
        </el-table-column>
        <el-table-column prop="zwmc" label="职位名称" width="150">
        </el-table-column>
        <el-table-column prop="bh" label="编号" width="150">
        </el-table-column>
        <el-table-column prop="gwxl" label="岗位序列" width="100">
        </el-table-column>
        <el-table-column prop="zj" label="职级" width="100">
        </el-table-column>
        <el-table-column prop="lsbm" label="隶属部门" width="200">
        </el-table-column>
        <el-table-column prop="bzrs" label="编制人数" width="100">
        </el-table-column>
        <el-table-column prop="jstd" label="晋升通道" width="100">
        </el-table-column>
        <el-table-column prop="xzqj" label="薪资区间" width="150">
        </el-table-column>
        <el-table-column prop="zwgs" label="职位概述" width="200">
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="180">
          <template slot-scope="scope">
            <el-button @click="editRequest(scope.row)" type="text" size="small">修改</el-button>
            <el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
          </template>
        </el-table-column>
      </el-table> -->
    <!-- </div> -->
  </div>
</template>

<script>
import AddRequest from './components/addRequest.vue'

export default {
  name: 'Request',
  components: {
    AddRequest
  },
  data() {
    return {
      // 采购申请表数据
      requestData: [
        {
          sybm: '11111',
          khmc: '222222',
          cgsqdh: '11111',
          ywgsr: '111111'
        },
        {
          cgsqdh: '2222',
          ywgsr: '2222'
        },
        {}],
      // 高级查询
      searchVisible: false,
      searchData: {
        // sqdh: '',
        // cglx: '',
        // sqzt: '',
        // khmc: '',
        // ywgsr: '',
        // ywbm: '',
        // glxm: '',
        // lxbh: '',
        // sqrq: '',
        // gldh: '',
        // cgzy: '',
        // cpbh: '',
        // cpmc: '',
        // ggxh: '',
        // sbmc: '',
        // sbxh: ''
      },
      // 新增
      addDialogVisible: false,
      // 修改
      editData: {},
      // 审核
      checkVisible: false,
      checkData: [],
    }
  },
  methods: {
    // 高级搜索
    gjSearch() {
      this.searchVisible = true
      this.searchData = {}
    },
    // dialog框关闭
    closeDialog(val) {
      this.addDialogVisible = val
    },
    // 点击新增按钮
    addRequest() {
      this.addDialogVisible = true
      this.editData = {}
    },
    // 点击修改按钮
    editRequest(row) {
      this.editData = row
      this.addDialogVisible = true
    },
    // 点击删除按钮
    deleteRow(index, requestData) {
      requestData.splice(index, 1)
    },
    // 提交采购员
    commit() {
      this.$confirm('确认提交采购员?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '提交成功'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消提交'
        });
      });
    },
    // 审核
    check(row) {
      this.checkData = []
      this.checkData.push(row)
      this.checkVisible = true
      // Object.assign(this._data, this.$options.data())
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