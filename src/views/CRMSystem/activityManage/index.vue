<template>
  <!-- 活动管理 -->
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="活动名称：">
          <el-input v-model="formInline.a" placeholder="请输入活动名称" size="small"></el-input>
        </el-form-item>
        <el-form-item label="关联对象：">
          <el-select v-model="formInline.b" clearable placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" size="small">查询</el-button>
        </el-form-item>
        <el-form-item class="table-add">
          <el-button type="primary" @click="addVisible=true" icon="el-icon-circle-plus-outline" size="small">新增</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-table :data="tableData" height="calc(100vh - 235px)" :header-cell-style="{background: '#165DFF',color:'#fff',font:'500 14px PingFang SC'}" style="width: 100%">
        <el-table-column type="index">
        </el-table-column>
        <el-table-column prop="hdmc" label="活动名称">
        </el-table-column>
        <el-table-column prop="cjr" label="创建人">
        </el-table-column>
        <el-table-column prop="hdlx" label="活动类型">
        </el-table-column>
        <el-table-column prop="kssj" label="开始时间">
        </el-table-column>
        <el-table-column prop="jzsj" label="截止时间">
        </el-table-column>
        <el-table-column prop="hdys" label="活动预算">
        </el-table-column>
        <el-table-column prop="hddz" label="互动地址">
        </el-table-column>

        <el-table-column fixed="right" label="操作" align="center" width="180">
          <template slot-scope="scope">
            <el-button @click="handleClickView(scope.row)" type="text" size="small">查看</el-button>
            <el-button @click="handleClickEdit(scope.row)" type="text" size="small">修改</el-button>
            <el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 新增 -->
    <el-dialog title="新增" :append-to-body="true" :visible.sync="addVisible" width="50%">
      <commonForm ref="addForm" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="addVisible = false">取 消</el-button>
        <el-button type="primary" @click="addDialog">提 交</el-button>
      </span>
    </el-dialog>
    <!-- 查看 -->
    <el-dialog title="查看" :append-to-body="true" :visible.sync="viewVisible" width="50%">
      <el-descriptions :column='1'>
        <el-descriptions-item label="活动名称">{{ viewList.hdmc }}</el-descriptions-item>
        <el-descriptions-item label="创建人">{{ viewList.cjr }}</el-descriptions-item>
        <el-descriptions-item label="活动类型">{{ viewList.hdlx }}</el-descriptions-item>
        <el-descriptions-item label="开始时间">{{ viewList.kssj }}</el-descriptions-item>
        <el-descriptions-item label="截止时间">{{ viewList.jzsj }}</el-descriptions-item>
        <el-descriptions-item label="活动预算">{{ viewList.hdys }}</el-descriptions-item>
        <el-descriptions-item label="互动地址">{{ viewList.hddz }}</el-descriptions-item>
      </el-descriptions>
      <span slot="footer" class="dialog-footer">
        <el-button @click="viewVisible = false">取 消</el-button>
        <el-button type="primary" @click="viewVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 修改 -->
    <el-dialog title="修改" :append-to-body="true" :visible.sync="editVisible" width="50%">
      <commonForm v-if="editVisible" :editForm="editform" ref="editData" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="editDialog">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
 
 <script>
import commonForm from './components/commonForm.vue'
//  import {deleteQuestion} from '@/api/RecruitmentManagement/questionBank.js'
export default {
  name: 'activityManager',
  components: { commonForm },
  data() {
    return {
      formInline: {},
      editform: {},
      viewList: {},
      addVisible: false,
      viewVisible: false,
      editVisible: false,
      options: [
        {
          label: '全部',
          value: '全部'
        },
        {
          label: '客户',
          value: '客户'
        },
        {
          label: '线索',
          value: '线索'
        }
      ],
      tableData: [{
        hdmc:'活动名称1',
        cjr:'创建人1',
        hdlx:'活动类型1',
        kssj:'开始时间1',
        jzsj:'截止时间1',
        hdys:'活动预算1',
        hddz:'互动地址1'
      },{
        hdmc:'活动名称2',
        cjr:'创建人1',
        hdlx:'活动类型1',
        kssj:'开始时间1',
        jzsj:'截止时间1',
        hdys:'活动预算1',
        hddz:'互动地址1'
      },{
        hdmc:'活动名称3',
        cjr:'创建人1',
        hdlx:'活动类型1',
        kssj:'开始时间1',
        jzsj:'截止时间1',
        hdys:'活动预算1',
        hddz:'互动地址1'
      }]
    }
  },
  mounted() {
    this.getAllQuestion()
  },
  methods: {
    // 获取所有题目
    getAllQuestion() {
      console.log('获取数据列表')
    },
    // 查询
    inquirer() {
      console.log('查询')
    },
    // 新增
    addDialog() {
      this.addVisible = false
      // console.log(this.$refs.addForm.form)
      const addOBJ = this.$refs.addForm.form
      console.log('addOBJ', addOBJ)
      // console.log('data',data)
      this.tableData.push(this.$refs.addForm.form)

    },
    //删除
    deleteRow(index, rows) {
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
    // 提交修改
    editDialog() {
      console.log('修改', this.$refs.editData.form)
      const editOBJ = this.$refs.editData.form

      this.editVisible = false
    }
  }
}
</script>
 
 <style lang="scss" scoped>
@import '../../../assets/styles/appMain.css';
.table-add {
  position: absolute;
  right: 0;
  top: 0;
  margin-right: 0 !important;
}
</style>