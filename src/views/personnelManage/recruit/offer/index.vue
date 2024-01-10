<template>
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="职位名称:">
          <el-input v-model="formInline.ypzw" placeholder="请输入职位名称" size="small"></el-input>
        </el-form-item>
        <el-form-item label="候选人姓名:">
          <el-input  style="width:150px" v-model="formInline.name" placeholder="请输入候选人姓名" size="small"></el-input>
        </el-form-item>
        <el-form-item label="所属部门:">
          <el-cascader
            style="width:150px"
            v-model="formInline.ywbm"
            :options="options"
            size="small"
            :props="{ expandTrigger: 'hover' }"></el-cascader>
        </el-form-item>
        <el-form-item label="offer发出日期:">
          <el-date-picker
            v-model="formInline.offcrq"
            align="right"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd"
            :picker-options="pickerOptions">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="inquirer" icon="el-icon-search" size="small">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-table
        :data="tableData"
        height="calc(100vh - 235px)"
        :header-cell-style="{background: '#165DFF',color:'#fff',font:'500 14px PingFang SC'}"
        @row-dblclick="tableClick"
        style="width: 100%;text-align:left;">
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
          min-width="140">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓 名"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="sex"
          label="性 别">
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮 箱"
          min-width="180">
        </el-table-column>
        <el-table-column
          prop="phonenumber"
          label="手机号"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="ypzw"
          label="职 位"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="ywbm"
          label="业务部门"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="zjld"
          label="直接领导">
        </el-table-column>
        <el-table-column
          prop="yjrzrq"
          label="预计入职日期"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="lyspzt"
          label="录用审批状态 "
          min-width="140">
        </el-table-column>
        <el-table-column
          prop="offcrq"
          label="Offer发出日期"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="sfjsly"
          label="是否接受录用"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="zsxz"
          label="正式薪资"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="syqxz"
          label="试用期薪资"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="offerfj"
          label="offer附件"
          min-width="100">
          <template slot-scope="scope">
            <el-link v-if="scope.row.offerfj" type="primary" icon="el-icon-view" :href="scope.row.offerfj" target="_blank">查看</el-link>
            <el-link v-else type="danger" disabled>暂未生成</el-link>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          align="center"
          width="180">
          <template slot-scope="scope">
            <el-button type="text" size="small" 
              @click="apply(scope.row)"
              >录用申请</el-button>
            <el-button @click="handleClickEdit(scope.row)" type="text" size="small">审批</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 审批弹框 -->
    <el-dialog
      title="审批"
      :append-to-body="true"
      :visible.sync="examineVisible"
      width="60%">
      <div>
        <div style="background-color: #ccc;text-align: center;font: 600 16px 黑体">审批记录</div>
        <el-table
          :data="examineTableData"
          style="width: 100%">
          <el-table-column
            prop="jdmc"
            label="节点名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="cllx"
            label="处理类型"
            width="120">
          </el-table-column>
          <el-table-column
            prop="clzt"
            label="处理状态">
          </el-table-column>
          <el-table-column
            prop="clr"
            label="处理人"
            width="80">
          </el-table-column>
          <el-table-column
            prop="clsj"
            label="处理时间"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="备注"
            width="180">
          </el-table-column>
        </el-table>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="danger" @click="examineVisible = false">审批不通过</el-button>
        <el-button type="primary" @click="examineVisible = false">审批通过</el-button>
      </span>
    </el-dialog>
    <!-- 录用申请弹框 -->
    <el-dialog
      title="录用申请"
      :append-to-body="true"
      :visible.sync="applyVisible"
      width="50%">
      <div>
        <el-form ref="form" :model="applyForm" label-width="100px">
          <el-row :gutter="20">
            <el-col :span="8"><div>
              <el-form-item label="姓名:">{{ applyForm.name }}</el-form-item>
              <el-form-item label="直接领导:">
                <el-select v-model="applyForm.zjld" placeholder="请选择直接领导">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="预计入职日期:">
                <el-date-picker type="date"
                  placeholder="选择日期" 
                  v-model="applyForm.yjrzrq"
                  value-format="yyyy-MM-dd"
                  style="width: 100%;"></el-date-picker>
              </el-form-item>
              <el-form-item label="试用期薪资:">
                <el-input v-model="applyForm.syqxz"></el-input>
              </el-form-item>
            </div></el-col>
            <el-col :span="8"><div>
              <el-form-item label="临时员工号:">{{ applyForm.lsygh }}</el-form-item>
              <el-form-item label="职 位:">
                <el-select v-model="applyForm.ypzw" placeholder="请选择职位">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="试用期期限:">
                <el-select v-model="applyForm.syqqx" placeholder="请选择试用期期限">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="正式薪资:">
                <el-input v-model="applyForm.zsxz"></el-input>
              </el-form-item>
            </div></el-col>
            <el-col :span="8"><div>
              <el-form-item label="业务部门:">
                <el-select v-model="applyForm.ywbm" placeholder="请选择职位">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select></el-form-item>
              <el-form-item label="职 级:">
                <el-select v-model="applyForm.zj" placeholder="请选择职级">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="劳动合同期限:">
                <el-select v-model="applyForm.ldhtqx" placeholder="请选择劳动合同期限">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="审批流程:">
                <el-select v-model="applyForm.splc" placeholder="请选择审批流程">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </div></el-col>
          </el-row>
          <el-form-item label="备 注:">
            <el-input type="textarea" v-model="applyForm.bz"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="applyVisible = false">取 消</el-button>
        <el-button type="primary" @click="applySubmit">提交申请</el-button>
      </span>
    </el-dialog>
    <!-- 自画像弹框 -->
    <el-dialog
      title="提示"
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
  getOfferList,
  editOffer
} from "@/api/RecruitmentManagement/offer.js"
export default {
  name: 'Offer',
  components: { Portrait },
  data() {
    return { 
      formInline:{},
      options:[],
      examineVisible:false,
      applyVisible:false,
      portraitVisible:false,
      pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
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
      tableData: [],
      examineTableData:[],
      applyForm:{},
      portraitForm:{}
    }
  },
  mounted() {
    this.getAllOfferList()
  },
  methods:{
    // 获取所有offer信息
    getAllOfferList() {
      getOfferList().then((res)=> {
        this.tableData = res.rows
      })
    },
    // 模糊查询
    inquirer() {
      getOfferList(this.formInline).then((res)=> {
        this.tableData = res.rows
      })
    },
    tableClick(row) {
      this.portraitForm = row
      this.portraitVisible = true
    },
    apply(row) {
      this.applyVisible = true
      // this.applyForm.name = row.name
      // this.applyForm.lsygh = row.lsygh
      this.applyForm = row
    },
    // 提交录用申请
    applySubmit() {
      editOffer(this.applyForm).then((res) => {
        if (res.code === 200) {
          this.getAllOfferList()
          this.$message.success('成功提交录用申请')
        }
      })
      this.applyVisible = false
    },
    handleClickEdit() {
      this.examineVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>

::v-deep .el-form-item__label {
    font-weight: 500;
}
.el-form-item--mini {
    margin-bottom: 6px;
}
</style>