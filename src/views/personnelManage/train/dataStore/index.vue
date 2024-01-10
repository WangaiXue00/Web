<template>
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="资料名称:">
          <el-input v-model="formInline.name" placeholder="请输入资料名称" size="small"></el-input>
        </el-form-item>
        <el-form-item label="资料分类:">
          <el-input v-model="formInline.category" placeholder="请输入资料分类" size="small"></el-input>
          <!-- <el-select v-model="formInline.category" placeholder="请选择资料分类">
            <el-option label="工程师培训" value="1"></el-option>
            <el-option label="内训" value="2"></el-option>
            <el-option label="外训" value="3"></el-option>
            <el-option label="新员工培训" value="4"></el-option>
          </el-select> -->
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="inquirer" icon="el-icon-search" size="small">查询</el-button>
        </el-form-item>
        <el-form-item class="table-add">
          <el-button type="primary" @click="dialogVisible=true" icon="el-icon-circle-plus-outline" size="small">添加</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 新增表格的对话框 -->
    <el-dialog title="新增" append-to-body :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
      <commonForm ref="addForm" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 查看表格内容的对话框 -->
    <el-dialog title="查看培训资料信息" append-to-body :visible.sync="viewVisible" width="60%">
      <el-descriptions :column="1">
        <el-descriptions-item label="资料名称">{{ viewForm.name }}</el-descriptions-item>
        <el-descriptions-item label="资料分类">{{ viewForm.category }}</el-descriptions-item>
        <el-descriptions-item label="添加人">{{ viewForm.createUser }}</el-descriptions-item>
        <el-descriptions-item label="添加时间">{{ viewForm.createTime }}</el-descriptions-item>
        <el-descriptions-item label="资料说明">{{ viewForm.note }}</el-descriptions-item>
        <el-descriptions-item label="资料内容">{{ viewForm.information }}</el-descriptions-item>
      </el-descriptions>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="viewVisible = false">退出</el-button>
      </span>
    </el-dialog>

    <!-- 修改表格内容的对话框 -->
    <el-dialog title="修改当前培训资料信息" append-to-body :visible.sync="editVisible" width="50%">
      <!-- <commonForm ref="dialog" /> -->
      <commonForm v-if="editVisible" v-bind:editList="editList" ref="editForm" :before-close="handleClose" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="edit">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 培训资料表 -->
    <div>
      <el-table :data="tableData" 
      height="calc(100vh - 235px)"
      fit
      :header-cell-style="{background: '#165DFF',color:'#fff',font:'500 14px PingFang SC'}"
       @row-dblclick="tableClick" style="width: 100%;">
        <el-table-column type="index" fixed label="序号" width="50">
        </el-table-column>
        <el-table-column prop="name" fixed label="资料名称">
        </el-table-column>
        <el-table-column prop="category" label="所属分类">
        </el-table-column>
        <el-table-column prop="createUser" label="添加人">
        </el-table-column>
        <el-table-column prop="createTime" label="添加时间">
        </el-table-column>
        <el-table-column prop="note" label="资料说明">
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="180">
          <template slot-scope="scope">
            <el-button @click="handleClickEdit(scope.row)" type="text" size="small">修改</el-button>
            <el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import commonForm from './components/commonForm.vue'
import { addResource, inquireResource, editResource, deleteResource } from '@/api/TrainingManagement/trainResource.js'
export default {
  name: 'DataStore',
  components: { commonForm },
  data() {
    return {
      dialogVisible: false,
      viewVisible: false,
      editVisible: false,
      editList: {},
      tableData: [],
      formInline: {
        name: '',
        category: ''
      },
      viewForm: {}
    }
  },
  mounted() {
    this.getAllResource()
  },
  methods: {
    // 获取所有培训资料
    getAllResource() {
      inquireResource().then(res => {
        this.tableData = res.rows
      })
    },
    //模糊查询
    inquirer() {
      inquireResource(this.formInline).then(res => {
        this.tableData = res.rows
      })
    },
    //新增弹窗的关闭提示方法
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    // 新增提交
    add() {
      // console.log(this.$refs.addForm.form)
      const data = this.$refs.addForm.form
      addResource(data).then(res => {
        this.getAllResource()
      })
      this.dialogVisible = false
    },
    // 修改提交
    edit() {
      const data = this.$refs.editForm.form
      editResource(data).then(res => {
        this.getAllResource()
      })
      this.editVisible = false
    },
    //删除
    deleteRow(index, rows) {
      deleteResource(rows[index].id).then(res => {
        console.log(res)
      })
      rows.splice(index, 1)
    },
    //查看
    tableClick(row) {
      this.viewVisible = true
      this.viewForm = row
    },
    //修改
    handleClickEdit(row) {
      this.editVisible = true
      this.editList = row
    }
  }
}
</script>


<style scoped lang="scss">
@import '../../../../assets/styles/appMain.css';

.title {
  margin: 30px 3rem 35px;
  font-size: 26px;
  font-weight: 500;
  padding-bottom: 5px;
  border-bottom: 3px solid #ccc;
}
// .top-form {
//   position: relative;
//   margin: 30px 3rem 0;
// }
.table-add {
  position: absolute;
  right: 0px;
  top: 0px;
  margin-right: 0 !important;
}
::v-deep .el-descriptions-item__label {
  width: 120px;
  text-align: right;
  justify-content: flex-end;
}
::v-deep .el-input__inner {
  border-radius: 6px;
}
</style>