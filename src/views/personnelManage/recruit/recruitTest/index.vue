<template>
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="测试说明:">
          <el-input v-model="formInline.cssm" size="small"></el-input>
        </el-form-item>
        <el-form-item label="测试分类:">
          <el-select v-model="formInline.tmlb" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="inquirer" icon="el-icon-search" size="small">查询</el-button>
        </el-form-item>
        <el-form-item class="table-add">
          <el-button type="primary" @click="addVisible=true" icon="el-icon-circle-plus-outline" size="small">新增</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-table
        :data="tableData"
        height="calc(100vh - 235px)"
	      :header-cell-style="{background: '#165DFF',color:'#fff',font:'500 14px PingFang SC'}"
          style="width: 100%">
        <el-table-column
          type="index">
        </el-table-column>
        <el-table-column
          prop="cssm"
          label="测试说明"
          width="600">
        </el-table-column>
        <el-table-column
          prop="tmlb"
          label="所属分类">
        </el-table-column>
        <el-table-column
          prop="tms"
          label="题目数">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          align="center"
          width="180">
          <template slot-scope="scope">
            <el-button @click="handleClickView(scope.row)" type="text" size="small">打印</el-button>
            <el-button @click="handleClickEdit(scope.row)" type="text" size="small">修改</el-button>
            <el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      title="新增测试"
      :append-to-body="true"
      :visible.sync="addVisible"
      :modal-append-to-body="false"
      width="50%">
      <common ref="addForm" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="addVisible = false">取 消</el-button>
        <el-button type="primary" @click="addTest">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="修改"
      :append-to-body="true"
      :visible.sync="editVisible"
      width="50%">
      <common v-if="editVisible" :editDialog="editForm" ref="editForm"/>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="editTest">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import common from './components/common.vue'
import { 
  getRecruitTest,
  addRecruitTest,
  editRecruitTest,
  deleteRecruitTest
} from '@/api/RecruitmentManagement/recruitTest.js'
export default {
  name: 'RecruitTest',
  components: { common },
  data() { 
    return {
      addVisible:false,
      editVisible:false,
      options:[{
          label: '技术类',
          value:'技术类'
        },{
          label: '管理类',
          value:'管理类'
        },{
          label: '财务类',
          value:'财务类'
        }],
      formInline:{},
      editForm:{},
      tableData:[],
    }
  },
  mounted() {
    this.getAllTest()
  },
  methods: {
    // 获取所有测试信息
    getAllTest(row) {
      getRecruitTest(row).then((res) => {
        if (res && res.code === 200) {
          this.tableData = res.rows
        }
        for (let i = 0; i < res.total;i++ ) {
          // console.log('tableData[i].tmtk',this.tableData[i].tmtk)
            if( this.tableData[i].tmtk ) {
              this.tableData[i].tmtk = JSON.parse(this.tableData[i].tmtk)
              this.tableData[i].tms = this.tableData[i].tmtk.length
            } else {
              this.tableData[i].tmtk = []
              this.tableData[i].tms = 0
            }
          }
      })
    },
    // 查询
    inquirer() {
      this.getAllTest(this.formInline)
    },
    // 打印
    handleClickView(row) {
      window.open('https://ssl.mdtservice.cn/UserFiles/pdf/Offer_34.pdf','_blank');
    },
    // 新增测试
    addTest() {
      // console.log(this.$refs.addForm)
      // const obj = {
      //   cssm:this.$refs.addForm.addForm.cssm,
      //   ssfl:this.$refs.addForm.addForm.ssfl,
      //   tms:this.$refs.addForm.tmTableData.length,
      //   tmTableData:this.$refs.addForm.tmTableData
      // }
      // this.tableData.push(obj)
      // this.$refs.addForm.addForm.cssm = ''
      // this.$refs.addForm.addForm.ssfl = ''
      // this.$refs.addForm.tmTableData = []
      // this.addVisible = false
      const tmlb = this.$refs.addForm.addForm.tmlb
      const cssm = this.$refs.addForm.addForm.cssm
      const tmtk = JSON.stringify(this.$refs.addForm.tmTableData)
      addRecruitTest({
        tmlb:tmlb,
        cssm:cssm,
        tmtk:tmtk
      }).then((res) => {if (res&&res.code === 200){
        this.$message.success('成功新增测试！')
        this.getAllTest()
      }})
      this.addVisible = false
    },
    // 修改
    handleClickEdit(row) {
      this.editVisible = true
      this.editForm = {}
      // row.tmtk = JSON.parse(row.tmtk)
      this.editForm = row
    },
    // 修改测试
    editTest() {
      // console.log(this.$refs.editForm)
      const id = this.$refs.editForm.addForm.id
      const tmlb = this.$refs.editForm.addForm.tmlb
      const cssm = this.$refs.editForm.addForm.cssm
      const tmtk = JSON.stringify(this.$refs.editForm.tmTableData)
      // console.log(tmlb,cssm,tmtk)
      editRecruitTest({
        id:id,
        tmlb:tmlb,
        cssm:cssm,
        tmtk:tmtk
      }).then((res) => {
        if (res && res.code === 200) {
          this.$message.success('修改成功！')
          this.getAllTest()
        }
      })
      this.editVisible = false
    },
    //删除
    deleteRow(index, rows) {
      deleteRecruitTest(rows[index].id).then((res) => {
        if(res && res.code === 200) {
          this.$message.error('删除成功!')
        }
      })
      rows.splice(index, 1)
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../assets/styles/appMain.css';
.table-add {
  position: absolute;
  right:0;
  top: 0;
  margin-right: 0 !important;
}
</style>