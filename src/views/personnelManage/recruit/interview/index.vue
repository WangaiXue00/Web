<template>
  <div class="assistant">
    <div class="top-form">
      <el-input
        placeholder="请输入候选人姓名/职位名称/手机号"
        v-model="searchInput"
        class="top-input"
        suffix-icon="el-icon-search"
        clearable
        @change="search">
      </el-input>
      <!-- <span>
        面试结果：
        <el-radio-group v-model="radio">
          <el-radio :label="2">全部</el-radio>
          <el-radio :label="0">未通过</el-radio>
          <el-radio :label="1">通过</el-radio>
        </el-radio-group>
      </span> -->
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
          prop="lsygh"
          fixed
          label="临时员工号"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="name"
          fixed
          label="姓名"
          min-width="50">
        </el-table-column>
        <el-table-column
          prop="sex"
          label="性别"
          min-width="50">
        </el-table-column>
        <el-table-column
          prop="birthdate"
          label="出生日期"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="age"
          label="年龄"
          min-width="50">
        </el-table-column>
        <el-table-column
          prop="minzu"
          label="民族"
          min-width="80">
        </el-table-column>
        <el-table-column
          prop="phonenumber"
          min-width="120"
          label="手机号">
        </el-table-column>
        <el-table-column
          prop="ypzw"
          label="职位"
          fit>
        </el-table-column>
        <el-table-column
          prop="yjrzrq"
          label="预计入职日期"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="mszt"
          label="面试状态"
          min-width="120">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          align="center"
          width="180">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="addClick(scope.row)">安排面试</el-button>
            <el-button type="text" size="small" @click="editClick(scope.row)">提交面试结果</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 安排面试 -->
    <el-dialog
      title="安排面试"
      :append-to-body="true"
      :visible.sync="addVisible"
      width="60%">
      <div>
        <el-form ref="formInline" :model="formInline" label-width="150px" size="small">
          <el-row>
            <el-col :span="12">
              <el-form-item label="候选人姓名:">{{formInline.name}}</el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="职位:">{{formInline.ypzw}}</el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div>
          <el-form :inline="true" 
          v-for="(item,i) in list" :key="i"
          :model="list[i]" 
          >
            <el-form-item>
              <label slot="label" style="font-weight:500;">第{{i+1}}次面试预约时间：</label>
              <el-date-picker
                v-model="list[i].msyysj"
                type="date"
                class="date"
                value-format="yyyy-MM-dd"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="面试官:">
              <el-select v-model="list[i].msg"
                placeholder="请选择面试官"
                style="width: 140px;">
                <el-option label="面试官一" value="面试官一"></el-option>
                <el-option label="面试官二" value="面试官二"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="面试形式:">
              <el-input v-model="list[i].msxs"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addVisible = false">取 消</el-button>
        <el-button type="primary" :disabled="disabled" @click="addSubmit">提 交</el-button>
      </span>
    </el-dialog>
    <!-- 提交面试结果 -->
    <el-dialog
      title="提交面试结果"
      :append-to-body="true"
      :visible.sync="editVisible"
      width="50%">
      <div>
        <el-form ref="form" :model="form" label-width="150px" size="small">
          <el-row>
            <el-col :span="12">
              <el-form-item label="候选人姓名:">{{form.name}}</el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="职位:">{{form.ypzw}}</el-form-item>
            </el-col>
          </el-row>
        </el-form>
          <el-row>
            <el-col :span="12" v-for="(item,i) in list" :key="i">
                <div style=" border: 1px solid #ccc;margin-right:5px ;">
                <div style="background-color: #ccc;text-align: center;color: #fff;">第{{i+1}}次面试</div>
                <el-form ref="msjgForm" :model="list[i]" label-width="150px" size="small">
                  <el-form-item label="面试官:" >{{list[i].msg}}</el-form-item>
                  <el-form-item label="预约时间:" >{{list[i].msyysj}}</el-form-item>
                  <el-form-item label="实际面试时间:">
                    <el-date-picker
                      style="width: 90%;"
                      v-model="list[i].sjmssj"
                      type="datetime"
                      value-format="yyyy-MM-dd HH:mm:ss"
                      placeholder="选择日期时间"
                      align="right"
                      :picker-options="pickerOptions">
                    </el-date-picker>
                  </el-form-item>
                  <el-form-item label="面试结果:">
                    <el-radio-group v-model="list[i].msdjg">
                      <el-radio label="未通过">未通过</el-radio>
                      <el-radio label="通过">通过</el-radio>
                      <el-radio label="提前录取">提前录取</el-radio>
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label="面试意见:">
                    <el-input
                      style="width: 90%;"
                      type="textarea"
                      :rows="2"
                      placeholder="请输入内容"
                      v-model="list[i].msyj">
                    </el-input>
                  </el-form-item>
                </el-form>
              </div>
            </el-col>
          </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <!-- <el-button type="success" @click="editSubmit">修改</el-button> -->
        <el-button type="primary" @click="addResultSubmit">新 增</el-button>
      </span>
    </el-dialog>
    <!-- 自画像 -->
    <el-dialog
      title="自画像"
      :append-to-body="true"
      :visible.sync="portraitVisible"
      width="80%">
      <Portrait v-if="portraitVisible" v-bind:portraitForm="portraitForm"/>
      <span slot="footer" class="dialog-footer">
        <el-button @click="portraitVisible = false">取 消</el-button>
        <el-button type="primary" @click="portraitVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Portrait from "../candidate/components/portrait.vue"
import {
  searchInterview,
  getSchedule,
  addSchedule,
  editSchedule
} from "@/api/RecruitmentManagement/interview"
export default {
  name: 'Interview',
  components: { Portrait },
  data() { 
    return { 
      i:2,
      radio:2,
      searchInput:'',
      addVisible:false,
      editVisible:false,
      portraitVisible:false,
      disabled: false,
      tableData:[],
      list:[],
      portraitForm:{},
      pickerOptions: {
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }]
      },
      form:{},
      formInline:{},
    }
  },
  mounted() {
    this.getAllInterview()
  },
  methods: { 
    // 获取全部面试信息
    getAllInterview(){
      searchInterview().then((res)=>{
        this.tableData = res.rows
      })
    },
    // 条件查询
    search() {
      searchInterview({name:this.searchInput}).then((res)=> {
        if (res.total===0) {
          searchInterview({ypzw:this.searchInput}).then((res)=> {
            if (res.total === 0) {
              searchInterview({phonenumber:this.searchInput}).then((res)=> {
              this.tableData = res.rows
              })
             }
          this.tableData = res.rows
          })
        }
        this.tableData = res.rows
      })
    },
    // 安排面试
    addClick(row) { 
      this.disabled = false
      this.addVisible = true
      console.log(row)
      this.formInline.lsygh = row.lsygh
      this.formInline.name = row.name
      this.formInline.ypzw = row.ypzw
      getSchedule({lsygh:row.lsygh}).then((res) => {
        this.list = res.rows
        console.log('面试安排',res)
        const [lastValue] = res.rows.slice(-1)
        if(res.total === 0) {
          this.list.push({msyysj:null,sjmssj:null})
        } else if (res.total != row.apmscs && lastValue.msdjg !== '未通过') {
          this.list.push({msyysj:null,sjmssj:null})
        } else {
          this.disabled = true
        }
      })
    },
    // 提交安排面试
    addSubmit() {
      const count = this.list.length
      this.formInline.msg = this.list[count-1].msg
      this.formInline.msxs = this.list[count-1].msxs
      this.formInline.msyysj = this.list[count-1].msyysj
      this.formInline.count = count
      console.log("面试列表",this.formInline)
      addSchedule(this.formInline).then((res) => {
        if (res && res.code === 200) {
          this.$message.success('预约面试成功！')
          this.addVisible = false
        }
      })
    },
    // 点击面试结果
    editClick(row) {
      this.editVisible = true
      this.form.name = row.name
      this.form.ypzw = row.ypzw
      getSchedule({lsygh:row.lsygh}).then((res) => { 
        this.list = res.rows
        // console.log('安排面试',this.list)
      })
    },
    // 提交新增面试结果
    addResultSubmit() {
      // console.log('提交新增面试结果',this.list)
      // const i = this.list.length
      // const obj = this.list[i-1]
      for (let i = 0; i < this.list.length;i++ ) {
        const obj = this.list[i];
        editSchedule(obj).then((res) => {
        if (res && res.code === 200) {
          this.$message.success('面试结果已提交！')
        }
      })
      }
      this.getAllInterview()
      console.log('安排面试',this.list)
      this.editVisible = false
    },
    // 提交修改面试结果
    // editSubmit() {
    //   this.editVisible = false
    // },
    tableClick(row) {
      this.portraitForm = row
      this.portraitVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../assets/styles/appMain.css';
.top-input {
  width: 280px;
}
::v-deep .el-form-item__label {
    font-weight: 500;
}
.date {
  width: 150px;
}
</style>