<template>
  <div class="assistant">
    <div class="top-form">
      <el-input
        placeholder="证书关键字检索"
        v-model="searchInput"
        class="top-input"
        suffix-icon="el-icon-search"
        @change="search"
        clearable>
      </el-input>
      <el-button type="primary" @click="searchVisible = true">高级检索</el-button>
      <div class="top-button">
        <el-button type="primary" icon="el-icon-circle-plus" @click="addVisible = true">添加证书</el-button>
      </div>
    </div>
    <div>
      <el-table
        :data="tableData"
        height="calc(100vh - 235px)"
				:header-cell-style="{background: '#165DFF',color:'#fff',font:'500 14px PingFang SC'}"
  			@row-dblclick="tableClick"
        style="width: 100%">
        <el-table-column
          type="index"
          fixed
          label="序号"
          width="50">
        </el-table-column>
        <el-table-column
          prop="employeeId"
          fixed
          label="员工号"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="employeeName"
          label="姓 名">
        </el-table-column>
        <el-table-column
          prop="dept"
          min-width="100"
          label="所属部门">
        </el-table-column>
        <el-table-column
          prop="position"
          label="职位"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="certificateType"
          label="证书类别"
          width="120">
        </el-table-column>
        <el-table-column
          prop="specialAttention"
          label="特别关注证书"
          width="120">
          <template slot-scope="scope">
            <span>{{ scope.row.specialAttention === 1 ? '是':'否' }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="specialWorkType"
          label="特殊工种类型"
          width="120">
        </el-table-column>
        <el-table-column
          prop="certificateSummary"
          min-width="120"
          label="证书摘要">
        </el-table-column>
        <el-table-column
          prop="certificateName"
          label="证书名称"
          min-width="200">
        </el-table-column>
        <el-table-column
          prop="issuingAuthority"
          label="发证单位"
          min-width="220">
        </el-table-column>
        <el-table-column
          prop="issueDate"
          label="发证日期"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="isPermanent"
          label="是否长期">
          <template slot-scope="scope">
            <span>{{ scope.row.isPermanent === 1 ? '是':'否' }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="expiryDate"
          label="有效期"
          width="120">
        </el-table-column>
        <el-table-column
          prop="certificatePdf"
          label="附 件">
          <template slot-scope="scope">
            <el-link v-if="scope.row.fj" type="primary" icon="el-icon-view" :href="'https://ssl.mdtservice.cn/'+scope.row.fj" target="_blank">查看</el-link>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          align="center"
          width="120">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="editHandleClick(scope.row)">修改</el-button>
            <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      title="高级检索"
      append-to-body
      :visible.sync="searchVisible"
      width="90%">
      <el-form :inline="true" :model="formInline" size="mini">
        <!-- <el-form-item label="任职状态:">
          <el-radio-group v-model="formInline.rzzt">
            <el-radio :label="3" style="margin-right: 5px;">在职</el-radio>
            <el-radio :label="6">离职</el-radio>
          </el-radio-group>
        </el-form-item> -->
        <el-form-item label="姓 名:">
          <el-select v-model="formInline.employeeName" placeholder="请选择" style="width: 100px;">
            <el-option
              v-for="item in nameOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="职位:">
          <el-input v-model="formInline.position" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="业务部门:">
          <el-select v-model="formInline.dept" placeholder="请选择" style="width: 100px;">
            <el-option
              v-for="item in bmOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否是特殊工种:">
          <el-radio-group v-model="formInline.specialAttention">
            <el-radio :label="1" style="margin-right: 5px;">是</el-radio>
            <el-radio :label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="证书摘要:">
          <el-input v-model="formInline.certificateSummary" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="有效截止日期:">
          <el-date-picker
            v-model="formInline.expiryDate"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
            style="width: 120px;">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="searchVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">查 询</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="添加证书"
      append-to-body
      :visible.sync="addVisible"
      width="40%">
      <zsForm ref="addForm" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="addVisible = false">取 消</el-button>
        <el-button type="primary" @click="addDialog">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="查看"
      append-to-body
      :visible.sync="viewVisible"
      width="50%">
      <el-descriptions :column=2>
        <el-descriptions-item label="所属员工" >{{ viewForm.employeeName }}</el-descriptions-item>
        <el-descriptions-item label="证书类别" >{{ viewForm.certificateType }}</el-descriptions-item>
        <el-descriptions-item label="特别关注证书" >{{ viewForm.specialAttention }}</el-descriptions-item>
        <el-descriptions-item label="特殊工种类型" >{{ viewForm.specialWorkType }}</el-descriptions-item>
        <el-descriptions-item label="证书摘要	" >{{ viewForm.certificateSummary }}</el-descriptions-item>
        <el-descriptions-item label="证书名称	" >{{ viewForm.certificateName }}</el-descriptions-item>
        <el-descriptions-item label="发证单位" >{{ viewForm.issuingAuthority }}</el-descriptions-item>
        <el-descriptions-item label="发证日期" >{{ viewForm.issueDate }}</el-descriptions-item>
        <el-descriptions-item label="是否长期	" >{{ viewForm.isPermanent }}</el-descriptions-item>
        <el-descriptions-item label="有效期截止日" >{{ viewForm.expiryDate }}</el-descriptions-item>
        <el-descriptions-item label="证书PDF" ><el-link v-if="viewForm.fj" type="primary" :href="'https://ssl.mdtservice.cn/'+viewForm.fj" target="_blank">查看</el-link></el-descriptions-item>
      </el-descriptions>
      <span slot="footer" class="dialog-footer">
        <el-button @click="viewVisible = false">取 消</el-button>
        <el-button type="primary" @click="viewVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="修改"
      append-to-body
      :visible.sync="editVisible"
      width="40%">
      <zsForm v-if="editVisible" ref="editForm" :editForm = "editform"/>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="editDialog">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import zsForm from './components/zsForm.vue'
import {
  addCertificate,
  getCertificate,
  editCertificate,
  deletCertificate
} from '@/api/certificate/certificate.js'
export default {
  name: 'Manage',
  components: { zsForm },
  data() {
    return {
      searchInput:'',
      searchVisible:false,
      addVisible:false,
      viewVisible:false,
      editVisible:false,
      formInline:{},
      editform:{},
      viewForm:{},
      nameOptions:[],
      bmOptions:[],
      tableData:[]
    }
  },
  mounted() {
    this.getAllCertificate()
  },
  methods:{
    // 查询所有证书
    getAllCertificate() {
      getCertificate().then((res) => {
        this.tableData = res.rows
      })
    },
    // 双击表格查看
    tableClick(row) {
      this.viewForm = row
      this.viewVisible = true
    },
    // 修改
    editHandleClick(row) {
      console.log(row)
      this.editVisible = true
      this.editform = row
    },
    // 关键字查询
    search() {
      getCertificate({certificateName:this.searchInput}).then((res) => {
        this.tableData = res.rows
      })
    },
    // 高级查询
    onSubmit() {
      getCertificate(this.formInline).then((res) => {
        this.tableData = res.rows
      })
      this.searchVisible = false
    },
    // 新增证书
    addDialog() {
      console.log(this.$refs.addForm.form)
      const obj = this.$refs.addForm.form
      addCertificate(obj).then((res)=> {
        if (res && res.code === 200) {
          this.$message.success('新增成功！')
        }
      })
      this.getAllCertificate()
      this.addVisible = false
    },
    // 修改证书
    editDialog() {
      const obj = this.$refs.editForm.form
      editCertificate(obj).then((res)=> {
        if (res && res.code === 200) {
          this.getAllCertificate()
          this.$message.success('修改成功！')
        }
      })
      this.editVisible = false
    },
    // 删除
    deleteRow(index, rows) {
      const id = rows[index].id
      deletCertificate(id).then((res) => { 
        if(res && res.code === 200) {
          this.$message.error('删除成功！')
        }
      })
      rows.splice(index, 1)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../../../assets/styles/appMain.css';
.top-input {
  width: 260px;
  margin-right: 10px;
}
.top-button {
  position: absolute;
  top: 0;
  right: 0;
}
::v-deep .el-form-item__label {
    font-size: 14px;
    font-weight: 500;
}
.el-form-item--mini {
    margin-right: 20px;
}
</style>