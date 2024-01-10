<template>
  <div class="assistant">
    <div class="top-form">
      <el-input
        placeholder="请输入姓名/手机号/邮箱"
        v-model="searchInput"
        class="top-input"
        suffix-icon="el-icon-search"
        clearable
        @change="search">
      </el-input>
      <div class="top-button">
        <el-button type="primary" icon="el-icon-upload" @click="resumeVisible = true">简历导入</el-button>
        <el-button type="primary" icon="el-icon-circle-plus" @click="addCandidate">新增候选人</el-button>
      </div>
    </div>
    <div>
      <el-table
        :data="tableData"
        height="calc(100vh - 235px)"
        fit
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
          prop="birthdate"
          label="出生日期">
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
          label="手机号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="xueli"
          label="学历">
        </el-table-column>
        <el-table-column
          prop="ypzw"
          label="应聘职位">
        </el-table-column>
        <el-table-column
          prop="zpqd"
          label="招聘渠道">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          align="center"
          width="240">
          <template slot-scope="scope">
            <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">删除</el-button>
            <el-button type="text" size="small" @click="interviewAdd(scope.row)">加入面试</el-button>
            <el-button type="text" size="small" @click="talentAdd(scope.row)">加入人才库</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--人员画像弹框  -->
    <el-dialog
      title="人员画像"
      :visible.sync="portraitVisible"
      width="80%"
      :append-to-body="true"
      :before-close="handleClose">
      <Portrait v-if="portraitVisible" v-bind:portraitForm="portraitForm"/>
    </el-dialog>
    <!-- 简历导入弹框 -->
    <el-dialog
      title="简历导入确认"
      :visible.sync="resumeVisible"
      width="70%"
      :append-to-body="true"
      :before-close="handleClose">
      <Resume @isShow="resumeChange"/>
    </el-dialog>
     <!-- 新增候选人- -->
    <el-dialog
      title="新增候选人"
      :append-to-body="true"
      :visible.sync="addVisible"
      width="70%"
      :before-close="handleClose">
      <NewAddVue v-if="addVisible" @add="addChange" />
    </el-dialog>
    <!-- 进入面试弹框 -->
    <el-dialog
      title="进入面试"
      :append-to-body="true"
      :visible.sync="interviewVisible"
      width="40%"
      :before-close="handleClose">
      <el-form ref="form" :model="interviewForm" label-width="120px" size="mini">
        <el-row :gutter="20">
          <el-col :span="12"><div>
            <el-form-item label="临时员工号:">{{ interviewForm.lsygh }}</el-form-item>
            <el-form-item label="姓名:">{{ interviewForm.name }}</el-form-item>
            <el-form-item label="出生日期:">{{ interviewForm.birthdate }}</el-form-item>
            <el-form-item label="民族:">{{ interviewForm.minzu }}</el-form-item>
            <el-form-item label="预计入职日期:">
              <el-date-picker
                v-model="interviewForm.yjrzrq"
                type="date"
                format="yyyy-MM-dd"
                style="width: 100%;"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </div></el-col>
          <el-col :span="12"><div>
            <el-form-item label="应聘职位:">{{ interviewForm.ypzw }}</el-form-item>
            <el-form-item label="性别:">{{ interviewForm.sex }}</el-form-item>
            <el-form-item label="年龄:">{{ interviewForm.age }}</el-form-item>
            <el-form-item label="手机号:">{{ interviewForm.phonenumber }}</el-form-item>
            <el-form-item label="安排面试次数:">
              <el-input v-model="interviewForm.apmscs"></el-input>
            </el-form-item>
          </div></el-col>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="interviewVisible = false">取 消</el-button>
        <el-button type="primary" @click="interviewAddVerify" :disabled="isDisabled">加入面试</el-button>
      </span>
    </el-dialog>
    <!-- 加入人才库弹框 -->
    <el-dialog
      title="加入人才库"
      :append-to-body="true"
      :visible.sync="talentVisible"
      width="30%">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="设置人才等级：">
          <el-select v-model="form.rcdj" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <!-- <el-input v-model="form.rcdj"></el-input> -->
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="talentVisible = false">取 消</el-button>
        <el-button type="primary" @click="talentAddVerify">加入人才库</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import NewAddVue from './components/newAdd.vue'
import Portrait from './components/portrait.vue'
import Resume from './components/resume.vue'
import {
  addInterview,
  searchInterview,
  getHxrList,
  deleteHxr,
  addTalentPool,
  getTalentPool,
  deleteHxrStudy,
  deleteHxrTrain,
  deleteHxrWork,
  deleteHxrProcess,
  deleteHxrZS
} from '@/api/RecruitmentManagement/candidate'
export default {
  name: 'Candidate',
  components:{Portrait,Resume,NewAddVue},
  data() {
    return { 
      searchInput:'',
      portraitVisible:false,
      resumeVisible:false,
      talentVisible:false,
      viewVisible:false,
      addVisible:false,
      addVisible1:false,
      addVisible2:false,
      interviewVisible:false,
      tableData:[],
      isDisabled:false,
      portraitForm:{},
      form:{
        rcdj:''
      },
      interviewForm:{
        mszt:'待安排面试'
      },
      viewForm:{},
      hxrID:null,
      options: [{
          value: '1',
          label: '1'
        }, {
          value: '2',
          label: '2'
        }, {
          value: '3',
          label: '3'
        }, {
          value: '4',
          label: '4'
        }],
    }
  },
  mounted() {
    this.getAllHxrList()
  },
  methods: { 
    tableClick(row) {
      // console.log(row)
      this.portraitForm = row
      this.portraitVisible = true
    },
    // 获取所有候选人列表
    getAllHxrList() {
      getHxrList().then((res)=> {
        this.tableData = res.rows
      })
    },
    // 条件查询
    search(){
      getHxrList({name:this.searchInput}).then((res)=> {
        if (res.total===0) {
          getHxrList({phonenumber:this.searchInput}).then((res)=> {
            if (res.total === 0) {
              getHxrList({email:this.searchInput}).then((res)=> {
              this.tableData = res.rows
              })
             }
          this.tableData = res.rows
          })
        }
        this.tableData = res.rows
      })
    },
    addCandidate() {
      this.addVisible = true
    },
    // 弹框退出确认
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    },
    // 加入面试
    interviewAdd(row) {
      this.interviewVisible = true
      this.isDisabled = false
      this.interviewForm = row
      // console.log(row)
      searchInterview({phonenumber:row.phonenumber,ypzw:row.ypzw}).then((res)=> {
        console.log(res)
        if (res.total === 1) {
          this.interviewForm = res.rows[0]
          this.isDisabled = true
        }
      })
    },
    // 确认加入面试
    interviewAddVerify() {
      // console.log(this.interviewForm)
      addInterview(this.interviewForm).then((res) => {
        console.log(res)
        if(res && res.code === 200) {
          this.$message.success('加入面试成功');
        }
      })
      this.interviewVisible = false
    },
    resumeChange(e) {
      this.resumeVisible = e
    },
    // 加入人才库
    // talentAdd(row) { 
    //   this.form = row
    //   getTalentPool({lsygh:row.lsygh}).then((res) => { 
    //     console.log(res)
    //     this.form['rcdj'] = res.rows[0].rcdj
    //   })
    //   // 请求接口慢所以得给弹框的显示设置一个延时器
    //   setTimeout(() => {
    //     this.talentVisible = true },100)
    //   console.log('加入人才库',this.form)
    // },
    // 异步接口请求比较慢所以第一次回显不出来，得改成同步请求
    async talentAdd(row) { 
      this.form = row
      const res = await getTalentPool({lsygh:row.lsygh})
      console.log(res)
      if (res.total !== 0) {
        this.form['rcdj'] = res.rows[0].rcdj
      }
      this.talentVisible = true
    },
    // 确认加入人才库
    talentAddVerify() {
      console.log('form',this.form)
      addTalentPool(this.form).then((res) => {
        if (res.code === 200 ) {
          this.$message.success('成功加入人才库！')
        }
      })
      this.talentVisible = false
    },
    addChange(e) {
      console.log('传值',e)
      this.addVisible = e.addVisible
      this.tableData = e.tableData
    },
    // 删除
    deleteRow(index, rows) {
      console.log('删除',rows[index])
      deleteHxr(rows[index].hxrid).then((res)=>{
        if (res.code === 200) {
          deleteHxrStudy(rows[index].lsygh).then((res) => {})
          deleteHxrTrain(rows[index].lsygh).then((res) => {})
          deleteHxrWork(rows[index].lsygh).then((res) => {})
          deleteHxrProcess(rows[index].lsygh).then((res) => {})
          deleteHxrZS(rows[index].lsygh).then((res) => {})
          this.$message.error('删除成功')
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
  width: 260px;
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
::v-deep .el-form-item {
    margin-bottom: 8px;
}
</style>