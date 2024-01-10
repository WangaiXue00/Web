<template>
 <div class="assistant">
  <div class="top-form">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="题目名称:">
        <el-input v-model="formInline.tm" placeholder="请输入题目名称" size="small"></el-input>
      </el-form-item>
      <el-form-item label="题目类别:">
        <el-select v-model="formInline.tmlb" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="题目类型:">
        <el-select v-model="formInline.tx" clearable placeholder="请选择">
          <el-option
            v-for="item in options1"
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
        prop="tm"
        label="题目"
        width="300">
      </el-table-column>
      <el-table-column
        prop="tmlb"
        label="题目类别">
      </el-table-column>
      <el-table-column
        prop="tx"
        label="题型">
      </el-table-column>
      <el-table-column
        prop="df"
        label="得分">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        align="center"
        width="180">
        <template slot-scope="scope">
          <el-button @click="handleClickView(scope.row)" type="text" size="small">查看</el-button>
          <el-button @click="handleClickEdit(scope.row)" type="text" size="small">修改</el-button>
          <el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <!-- 新增 -->
  <el-dialog
    title="新增"
    :append-to-body="true"
    :visible.sync="addVisible"
    width="50%">
    <TitleForm ref="addForm"/>
    <span slot="footer" class="dialog-footer">
      <el-button @click="addVisible = false">取 消</el-button>
      <el-button type="primary" @click="addDialog">提 交</el-button>
    </span>
  </el-dialog>
  <!-- 查看 -->
  <el-dialog
    title="查看"
    :append-to-body="true"
    :visible.sync="viewVisible"
    width="50%">
    <el-descriptions :column = '1'>
      <el-descriptions-item label="题目">{{ viewList.tm }}</el-descriptions-item>
      <el-descriptions-item label="题目类别">{{ viewList.tmlb }}</el-descriptions-item>
      <el-descriptions-item label="题型">{{ viewList.tx }}</el-descriptions-item>
      <el-descriptions-item label="得分">{{ viewList.df }}</el-descriptions-item>
      <el-descriptions-item label="答案" v-if="viewList.tx === '单选'||viewList.tx === '多选'">
        <el-table
                :data="viewList.optionData"
                style="width: 100%">
                <el-table-column
                type="index"
                :index="indexMethod">
                </el-table-column>
                <el-table-column
                prop="xx"
                label="选项"
                width="400">
                    <template slot-scope="scope">
                        <el-input
                        v-model="scope.row.xx"
                        disabled
                        size="mini"/>
                    </template>
                </el-table-column>
                <el-table-column
                prop="zqda"
                label="正确答案">
                    <template slot-scope="scope">
                        <el-checkbox v-model="scope.row.zqda" disabled></el-checkbox>
                    </template>
                </el-table-column>
            </el-table>
      </el-descriptions-item>
      <el-descriptions-item label="答案" v-if="viewList.tx === '判断'">{{ viewList.radioAnswer }}</el-descriptions-item>
      <el-descriptions-item label="答案" v-if="viewList.tx === '填空'">{{ viewList.fillAnswer }}</el-descriptions-item>
    </el-descriptions>
    <span slot="footer" class="dialog-footer">
      <el-button @click="viewVisible = false">取 消</el-button>
      <el-button type="primary" @click="viewVisible = false">确 定</el-button>
    </span>
  </el-dialog>
  <!-- 修改 -->
  <el-dialog
    title="修改"
    :append-to-body="true"
    :visible.sync="editVisible"
    width="50%">
    <TitleForm v-if="editVisible" :editForm="editform" ref="editData"/>
    <span slot="footer" class="dialog-footer">
      <el-button @click="editVisible = false">取 消</el-button>
      <el-button type="primary" @click="editDialog">确 定</el-button>
    </span>
  </el-dialog>
 </div>
</template>

<script>
import TitleForm from './components/titleForm.vue'
import {
  getQuestion,
  addQuestion,
  editQuestion,
  deleteQuestion
} from '@/api/RecruitmentManagement/questionBank.js'
export default {
  name: 'QuestionBank',
  components: { TitleForm },
  data() {
      return {
        formInline:{},
        editform:{},
        viewList:{},
        addVisible:false,
        viewVisible:false,
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
        options1:[{
          label: '单选',
          value:'单选'
        },{
          label: '多选',
          value:'多选'
        },{
          label: '判断',
          value:'判断'
        },{
          label: '填空',
          value:'填空'
        }],
        tableData: [],
      }
    },
    mounted() {
      this.getAllQuestion()
    },
    methods: {
      // table表序号修改形式为A、B、C.....
      indexMethod(index) {
        return String.fromCharCode(index +'A'.charCodeAt() );
      },
      // 获取所有题目
      getAllQuestion() {
        getQuestion().then((res) => {
          this.tableData = res.rows
          for (let i = 0; i < res.total;i++ ) {
            this.tableData[i].optionData = JSON.parse(this.tableData[i].optionData)
          }
          console.log('获取题目',this.tableData)
        })
        
      },
      // 查询
      inquirer() {
        // console.log('查询')
        getQuestion(this.formInline).then((res) => {
          this.tableData = res.rows
          for (let i = 0; i < res.total;i++ ) {
            this.tableData[i].optionData = JSON.parse(this.tableData[i].optionData)
          }
        })
      },
      // 新增
      addDialog() {
        this.addVisible = false 
        // console.log(this.$refs.addForm.form)
        const addOBJ = this.$refs.addForm.form
        addOBJ.optionData = JSON.stringify(addOBJ.optionData)
        console.log('addOBJ',addOBJ)
        // const data = JSON.parse(addOBJ.optionData)
        // console.log('data',data)
        // this.tableData.push(this.$refs.addForm.form)
        addQuestion(addOBJ).then((res) => { 
          if (res &&res.code === 200) {
            // console.log('新增',res)
            this.$message.success('新增成功！')
            this.getAllQuestion()
          }
        })
        this.$refs.addForm.form = {tm:'',
                tmlb:'',
                tx:'',
                df:null,
                optionData:[],
                radioAnswer:'',
                fillAnswer:''}
      },
      //删除
      deleteRow(index, rows) {
        deleteQuestion(rows[index].tmid).then((res) => {
          if (res.code === 200) {
            this.$message.error('删除成功！')
          }
        })
        rows.splice(index, 1)
      },
      //查看
      handleClickView(row) {
        this.viewVisible = true
        this.viewList = row
      },
      // 修改
      handleClickEdit(row) {
        this.editVisible = true
        // console.log(row)
        this.editform = row
      },
      // 取消修改
      // cancel() {
      //   this.editVisible = false
      // }
      // 提交修改
      editDialog() {
        console.log('修改',this.$refs.editData.form)
        const editOBJ = this.$refs.editData.form
        editOBJ.optionData = JSON.stringify(editOBJ.optionData)
        editQuestion(editOBJ).then((res) => {
          if (res && res.code === 200) {
            this.$message.success('修改成功！')
            this.getAllQuestion()
          }
        })
        this.editVisible = false
      }
    }
}
</script>

<style lang="scss" scoped>
@import '../../../../assets/styles/appMain.css';
.table-add {
  position: absolute;
  right: 0;
  top: 0;
  margin-right: 0 !important;
}
</style>