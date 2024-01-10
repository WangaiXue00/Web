<template>
  <div class="assistant">
    <div class="top-form">
      <el-input
        placeholder="请输入应聘职位/人才等级/学历"
        v-model="searchInput"
        class="top-input"
        suffix-icon="el-icon-search"
        clearable
        @change="search">
      </el-input>
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
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="sex"
          label="性别">
        </el-table-column>
        <el-table-column
          prop="age"
          label="年龄">
        </el-table-column>
        <el-table-column
          prop="minzu"
          label="民族">
        </el-table-column>
        <el-table-column
          prop="phonenumber"
          label="手机号">
        </el-table-column>
        <el-table-column
          prop="xueli"
          label="学历">
        </el-table-column>
        <el-table-column
          prop="rcdj"
          label="人才等级">
        </el-table-column>
        <el-table-column
          prop="ypzw"
          label="应聘职位">
        </el-table-column>
        <el-table-column
          prop="zpqd"
          label="应聘渠道">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          align="center"
          width="200">
          <template slot-scope="scope">
            <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">删除</el-button>
            <el-button type="text" size="small" @click="portraitDialog(scope.row)">人员画像</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--人员画像弹框  -->
    <el-dialog
      title="人员画像"
      :append-to-body="true"
      :visible.sync="portraitVisible"
      width="80%">
      <Portrait v-if="portraitVisible" v-bind:portraitForm="portraitForm" />
    </el-dialog>
    <!-- 查看所属招聘计划信息的对话框 -->
    <el-dialog
      title="查看职位信息"
      :append-to-body="true"
      :visible.sync="viewVisible"
      width="50%">
      <el-descriptions>
        <el-descriptions-item label="职位名称" >{{ viewForm.zzmc }}</el-descriptions-item>
        <el-descriptions-item label="岗位序列" >{{ viewForm.gwxl }}</el-descriptions-item>
        <el-descriptions-item label="所属年份" >{{ viewForm.ssnd }}</el-descriptions-item>
        <el-descriptions-item label="申请人数" >{{ viewForm.sqrs }}</el-descriptions-item>
        <el-descriptions-item label="所属部门" >{{ viewForm.ssbm }}</el-descriptions-item>
        <el-descriptions-item label="申请人" >{{ viewForm.sqr }}</el-descriptions-item>
        <el-descriptions-item label="申请日期" >{{ viewForm.sqrq }}</el-descriptions-item>
        <el-descriptions-item label="直接领导" >{{ viewForm.zjld }}</el-descriptions-item>
        <el-descriptions-item label="工作地点" >{{ viewForm.gzdd }}</el-descriptions-item>
        <el-descriptions-item label="审批人" >{{ viewForm.shren }}</el-descriptions-item>
        <el-descriptions-item label="期望到岗日期" >{{ viewForm.qwdgrq }}</el-descriptions-item>
      </el-descriptions>
      <el-descriptions :column="1">
          <el-descriptions-item label="岗位职责" >{{ viewForm.gwzz }}</el-descriptions-item>
          <el-descriptions-item label="任职要求" >{{ viewForm.rzyq }}</el-descriptions-item>
          <el-descriptions-item label="备 注" >{{ viewForm.bz }}</el-descriptions-item>
      </el-descriptions>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="viewVisible = false">退出</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Portrait from "../candidate/components/portrait.vue"
import {
  getTalentPool,
  deleteTalentPool,
  inquirePlan
} from "@/api/RecruitmentManagement/talentPool.js"
export default {
  name: 'TalentPool',
  components:{Portrait},
  data() {
    return { 
      searchInput:'',
      portraitVisible:false,
      resumeVisible:false,
      talentVisible:false,
      viewVisible:false,
      addVisible:false,
      tableData:[],
      form:{
        isAdd:''
      },
      viewForm:{},
      portraitForm:{}
    }
  },
  mounted() { 
    // 获取列表
    this.getALLTalentPool()
 },
  methods: { 
    // 获取所有人才库列表
    getALLTalentPool() {
      getTalentPool().then((res) => {
        // console.log(res)
        this.tableData = res.rows
      })
    },
    // 模糊搜索
    search() {
      getTalentPool({ypzw:this.searchInput}).then((res)=> {
        if (res.total===0) {
          getTalentPool({rcdj:this.searchInput}).then((res)=> {
            if (res.total === 0) {
              getTalentPool({xueli:this.searchInput}).then((res)=> {
              this.tableData = res.rows
              })
             }
          this.tableData = res.rows
          })
        }
        this.tableData = res.rows
      })
    },
    // 双击表格
    tableClick(row) {
      // console.log(row)
      this.viewForm = {}
      inquirePlan({zzmc:row.ypzw}).then((res) => {
        if (res.total !== 0) {
          this.viewForm = res.rows[0]
        }
      })
      this.viewVisible = true
      console.log(this.viewForm)
    },
    resumeChange(e) {
      this.resumeVisible = e
    },
    addChange(e) {
      this.addVisible = e
    },
    // 人员画像
    portraitDialog(row) {
      this.portraitForm = row
      this.portraitVisible = true
    },    
    // 删除
    deleteRow(index, rows) {
      // console.log(rows[index])
      deleteTalentPool(rows[index].id).then((res) => {
        if(res.code === 200) {
          this.$message.error('删除成功！');
          this.getALLTalentPool()
        }
      })
      rows.splice(index, 1);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../assets/styles/appMain.css';
.top-input {
  width: 280px;
}

</style>