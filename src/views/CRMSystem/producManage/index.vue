<template>
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="产品名称:">
          <el-input v-model="formInline.a" placeholder="请输入产品名称" size="small"></el-input>
        </el-form-item>
        <el-form-item label="器械分类:">
          <el-select v-model="formInline.b" clearable placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="品牌:">
          <el-select v-model="formInline.c" clearable placeholder="请选择" style="width: 150px;">
            <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="产品属性：" >
              <el-radio-group v-model="formInline.cpsx">
                <el-radio label="医疗类产品"></el-radio>
                <el-radio label="非医疗类产品"></el-radio>
              </el-radio-group>
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
        <el-table-column prop="cpbh" label="产品编码">
        </el-table-column>
        <el-table-column prop="cpmc" label="产品名称">
        </el-table-column>
        <el-table-column prop="pp" label="品牌">
        </el-table-column>
        <el-table-column prop="cpsx" label="产品属性">
        </el-table-column>
        <el-table-column prop="sxlb" label="属性类别">
        </el-table-column>
        <el-table-column prop="qxfl" label="器械分类">
        </el-table-column>
        <el-table-column prop="ggxh" label="规格型号">
        </el-table-column>
        <el-table-column prop="cpzczrq" label="产品注册证日期">
        </el-table-column>
        <el-table-column prop="qyxkzrq" label="企业许可证日期">
        </el-table-column>
        <el-table-column prop="gys" label="供应商">
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
        <el-descriptions-item label="产品编码">{{ viewList.cpbh }}</el-descriptions-item>
        <el-descriptions-item label="产品名称">{{ viewList.cpmc }}</el-descriptions-item>
        <el-descriptions-item label="品 牌">{{ viewList.pp }}</el-descriptions-item>
        <el-descriptions-item label="产品属性">{{ viewList.cpsx }}</el-descriptions-item>
        <el-descriptions-item label="属性类别">{{ viewList.sxlb }}</el-descriptions-item>
        <el-descriptions-item label="器械分类">{{ viewList.qxfl }}</el-descriptions-item>
        <el-descriptions-item label="规格型号">{{ viewList.ggxh }}</el-descriptions-item>
        <el-descriptions-item label="产品注册证日期">{{ viewList.cpzczrq }}</el-descriptions-item>
        <el-descriptions-item label="企业许可证日期">{{ viewList.qyxkzrq }}</el-descriptions-item>
        <el-descriptions-item label="供应商">{{ viewList.gys }}</el-descriptions-item>
        <!-- <el-descriptions-item label="答案" v-if="viewList.tx === '判断'">{{ viewList.radioAnswer }}</el-descriptions-item>
        <el-descriptions-item label="答案" v-if="viewList.tx === '填空'">{{ viewList.fillAnswer }}</el-descriptions-item> -->
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
  name: 'productManager',
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
          label: '技术类',
          value: '技术类'
        },
        {
          label: '管理类',
          value: '管理类'
        },
        {
          label: '财务类',
          value: '财务类'
        }
      ],
      options1: [
        {
          label: '单选',
          value: '单选'
        },
        {
          label: '多选',
          value: '多选'
        }
      ],
      tableData: [{
        cpbh:'F23232304P90250033',
        cpmc:'电压监视器',
        pp:'飞纳得',
        cpsx:'非医疗类产品',
        sxlb:'',
        qxfl:'23非医疗器械',
        ggxh:' JFY-5-1',
        cpzczrq:'',
        qyxkzrq:'',
        gys:'	宁波前湾新区奥联电子商务经营部'
      }, {
        cpbh:'F23232304P90250033',
        cpmc:'电压监视器',
        pp:'飞纳得',
        cpsx:'非医疗类产品',
        sxlb:'',
        qxfl:'23非医疗器械',
        ggxh:' JFY-5-1',
        cpzczrq:'',
        qyxkzrq:'',
        gys:'	宁波前湾新区奥联电子商务经营部'
      },{
        cpbh:'F23232304P90250033',
        cpmc:'电压监视器',
        pp:'飞纳得',
        cpsx:'非医疗类产品',
        sxlb:'',
        qxfl:'23非医疗器械',
        ggxh:' JFY-5-1',
        cpzczrq:'',
        qyxkzrq:'',
        gys:'	宁波前湾新区奥联电子商务经营部'
      },]
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