<template>
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="客户名称:">
          <el-input v-model="formInline.khmc" placeholder="请输入客户名称" size="small"></el-input>
        </el-form-item>
        <el-form-item>
          <el-radio-group v-model="formInline.isMedical">
            <el-radio label="医疗机构"></el-radio>
            <el-radio label="非医疗机构"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="inquirer" icon="el-icon-search" size="small">查询</el-button>
        </el-form-item>
        <el-form-item class="table-add">
          <el-button type="primary" @click="dialogVisible = true" icon="el-icon-circle-plus-outline"
            size="small">新增</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 客户表 -->
    <div>
      <el-table :data="tableData" height="calc(100vh - 235px)" fit
        :header-cell-style="{ background: '#165DFF', color: '#fff', font: '500 14px PingFang SC' }"
        @row-dblclick="tableClick" style="width: 100%;">
        <el-table-column type="index" fixed label="序号" width="50">
        </el-table-column>
        <el-table-column prop="khmc" fixed label="客户名称" min-width="130">
        </el-table-column>
        <el-table-column prop="gsgs" label="归属公司" width="100">
        </el-table-column>
        <el-table-column prop="khlx" label="客户类型" min-width="80">
        </el-table-column>
        <el-table-column prop="yydj" label="医院等级" min-width="80">
        </el-table-column>
        <el-table-column prop="cws" label="床位数" min-width="80">
        </el-table-column>
        <el-table-column prop="khdh" label="客户电话" min-width="100">
        </el-table-column>
        <el-table-column prop="ssssq" label="所属省市区" min-width="100">
        </el-table-column>
        <el-table-column prop="khdz" label="客户地址" min-width="120">
        </el-table-column>
        <el-table-column prop="cdfzr" label="场地负责人" min-width="100">
        </el-table-column>
        <el-table-column prop="fzrdh" min-width="120" label="负责人电话">
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="180">
          <template slot-scope="scope">
            <el-button @click="handleClickEdit(scope.row)" type="text" size="small">修改</el-button>
            <el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 新增表格的对话框 -->
    <el-dialog title="新增" :visible.sync="dialogVisible" :append-to-body="true" width="50%">
      <commonForm v-if="dialogVisible" ref="addForm" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 查看表格内容的对话框 -->
    <el-dialog title="查看客户信息" :append-to-body="true" :visible.sync="viewVisible" width="60%">
      <el-descriptions>
        <el-descriptions-item label="客户名称">{{ viewForm.khmc }}</el-descriptions-item>
        <el-descriptions-item label="归属公司">{{ viewForm.gsgs }}</el-descriptions-item>
        <el-descriptions-item label="客户类型">{{ viewForm.khlx }}</el-descriptions-item>
        <el-descriptions-item label="医院等级">{{ viewForm.yydj }}</el-descriptions-item>
        <el-descriptions-item label="客户电话">{{ viewForm.khdh }}</el-descriptions-item>
        <el-descriptions-item label="所属省市区">{{ viewForm.ssssq }}</el-descriptions-item>
        <el-descriptions-item label="客户地址">{{ viewForm.khdz }}</el-descriptions-item>
        <el-descriptions-item label="场地负责人">{{ viewForm.cdfzr }}</el-descriptions-item>
        <el-descriptions-item label="负责人电话">{{ viewForm.fzrdh }}</el-descriptions-item>
      </el-descriptions>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="viewVisible = false">退出</el-button>
      </span>
    </el-dialog>
    <!-- 修改表格内容的对话框 -->
    <el-dialog title="修改当前职位信息" :append-to-body="true" :visible.sync="editVisible" width="50%">
      <!-- <commonForm ref="dialog" /> -->
      <commonForm v-if="editVisible" v-bind:editList="editList" ref="editForm" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="edit">提 交</el-button>
      </span>
    </el-dialog>

  </div>
</template>
<script>
import commonForm from './components/commonForm.vue'
export default {
  name: '',
  components: { commonForm },
  data() {
    return {
      formInline: {},
      tableData: [{ cws: 2 }, { cws: 3 }],
      dialogVisible: false,
      editVisible: false,
      viewVisible: false,
      viewForm: {}
    }
  },
  watch: {
    'formInline.isMedical'(nerVal) {
      // console.log(nerVal,old);
      if (nerVal === '非医疗机构') {
        for (let i = 0; i < this.tableData.length; i++) {
          // 保存原始数据
          this.tableData[i].originalCws = this.tableData[i].cws;
          this.tableData[i].cws = null; // 或者使用 undefined
        }
        // this.tableData.cws = ''
      } else if (nerVal === '医疗机构') {
        for (let i = 0; i < this.tableData.length; i++) {
          // 还原原始数据
          this.tableData[i].cws = this.tableData[i].originalCws;
          // 清除原始数据，如果不再需要
          this.tableData[i].originalCws = null;
        } 
      }
    }
  },
  methods: {
    //模糊查询
    inquirer() {
    },
    //查看
    tableClick(row) {
      // console.log(row)
      this.viewVisible = true
      this.viewForm = row
    },

    // 新增提交
    add() {

      this.dialogVisible = false
    },
    // 修改提交
    edit() {

      this.editVisible = false
    },
    //修改
    handleClickEdit(row) {
      this.editVisible = true
      this.editList = row

    },
    //删除
    deleteRow(index, rows) {

      rows.splice(index, 1)
    },
  }
}
</script>
<style lang='scss' scoped>
@import '../../../assets/styles/appMain.css';

.table-add {
  position: absolute;
  right: 0;
  top: 0;
  margin-right: 0 !important;
}
</style>