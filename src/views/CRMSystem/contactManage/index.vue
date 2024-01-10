<template>
  <!-- 联系人管理 -->
  <div class="assistant">
    <div class="top-form">
      <el-input
        placeholder="联系人姓名/手机号/客户名称"
        v-model="searchInput"
        class="top-input"
        suffix-icon="el-icon-search"
        clearable
        @change="search">
      </el-input>
      <div class="top-button">
        <el-button type="primary" icon="el-icon-circle-plus" @click="dialogAdd = true">新增联系人</el-button>
      </div>
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
          prop="xm"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="xb"
          label="性别">
        </el-table-column>
        <el-table-column
          prop="khmc"
          label="客户名称">
        </el-table-column>
        <el-table-column
          prop="sjh"
          label="手机号">
        </el-table-column>
        <el-table-column
          prop="yx"
          label="邮箱">
        </el-table-column>
        <el-table-column
          prop="dz"
          label="地址"
          show-overflow-tooltip
          min-width="180">
        </el-table-column>
        <el-table-column
          prop="ssbm"
          label="所属部门/科室"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="zw"
          label="职务">
        </el-table-column>
        <el-table-column
          prop="gjjcr"
          label="是否关键决策人"
          min-width="120">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          align="center"
          width="120">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="edit(scope.row)">修改</el-button>
            <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 弹框-新增联系人 -->
    <el-dialog
      title="新增"
      :visible.sync="dialogAdd"
      width="50%"
      :before-close="handleClose">
      <commenForm ref="addForm"/>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogAdd = false">取 消</el-button>
        <el-button type="primary" @click="addConfirm">确 定</el-button>
      </span>
   </el-dialog>
   <!-- 弹框-修改联系人 -->
   <el-dialog
      title="修改"
      :visible.sync="dialogEdit"
      width="50%"
      :before-close="handleClose">
      <commenForm v-if="dialogEdit" ref="editForm" v-bind:editForm="editForm"/>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogEdit = false">取 消</el-button>
        <el-button type="primary" @click="editConfirm">确 定</el-button>
      </span>
   </el-dialog>
  </div>
</template>

<script>
import commenForm from './commonForm.vue'
export default {
  name:'contactManage',
  components:{ commenForm },
  data() {
    return {
      searchInput: '',
      dialogAdd:false,
      dialogEdit:false,
      editForm:{},
      tableData:[],
    }
  },
  methods: {
    search() {
    },
    // 弹框-修改
    edit(row) {
      this.dialogEdit = true
      console.log('editRow',row)
      this.editForm = row
    },
    // 新增联系人
    addConfirm() {
      this.dialogAdd = false
      const form = this.$refs.addForm.form
      console.log('addForm',form)
      this.tableData.push(form)
      this.$refs.addForm.form = {}
    },
    // 修改联系人
    editConfirm() {
      this.dialogEdit = false
      const form = this.$refs.editForm.form
      console.log('editForm',form)
      const index = this.tableData.indexOf(this.editForm)
      this.tableData.splice(index, 1, form)
      this.$refs.editForm.form = {}
    },
    // 删除联系人
    deleteRow(index,tableData) {
      tableData.splice(index, 1)
    },
    // 弹框关闭确认
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
@import '../../../assets/styles/appMain.css';
.top-input {
  width: 260px;
}
.top-button {
  position: absolute;
  top: 0;
  right: 0;
}
</style>