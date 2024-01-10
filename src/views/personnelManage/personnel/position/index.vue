<template>
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="编号搜索：">
          <el-input v-model="formInline.bh" placeholder="请输入编号" size="small" clearable @clear="getAllPos"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="inquirer" icon="el-icon-search" size="small">查询</el-button>
        </el-form-item>
        <el-form-item class="table-into">
          <el-upload class="upload-demo" action="http://123.57.56.30:8080/system/info/add" multiple>
            <el-button icon="el-icon-upload" size="small" type="primary">导入</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item class="table-add">
          <el-button type="primary" @click="addVisible = true" icon="el-icon-circle-plus-outline"
            size="small">添加</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 导入的对话框 -->
    <el-dialog title="导入" append-to-body :visible.sync="intoVisible" width="50%">
      <span>这是导入</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="intoVisible = false">取 消</el-button>
        <el-button type="primary" @click="intoVisible = false">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 新增表格的对话框 -->
    <el-dialog title="添加" append-to-body :visible.sync="addVisible" width="80%">
      <addModify v-if="addVisible" ref="addForm"></addModify>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 修改表格内容的对话框 -->
    <el-dialog title="修改当前职位信息" append-to-body :visible.sync="editVisible" width="80%">
      <!-- <commonForm ref="dialog" /> -->
      <addModify v-if="(isEditVisible && editVisible)" :editForm="editForm" :workData="workData" ref="editForm" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="edit">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 查看表格内容的对话框 -->
    <el-dialog title="查看职位信息" append-to-body :visible.sync="checkVisible" width="50%">
      <el-descriptions>
        <el-descriptions-item label="职位状态">{{ viewForm.zwzt }}</el-descriptions-item>
        <el-descriptions-item label="职位名称">{{ viewForm.zwmc }}</el-descriptions-item>
        <el-descriptions-item label="编号">{{ viewForm.bh }}</el-descriptions-item>
        <el-descriptions-item label="岗位序列">{{ viewForm.gwxl }}</el-descriptions-item>
        <el-descriptions-item label="职级">{{ viewForm.zj }}</el-descriptions-item>
        <el-descriptions-item label="隶属部门">{{ viewForm.lsbm }}</el-descriptions-item>
        <el-descriptions-item label="编制人数">{{ viewForm.bzrs }}</el-descriptions-item>
        <el-descriptions-item label="晋升通道">{{ viewForm.jstd }}</el-descriptions-item>
        <el-descriptions-item label="薪资区间">{{ viewForm.xzqj }}</el-descriptions-item>
      </el-descriptions>
      <el-descriptions :column="1">
        <el-descriptions-item label="岗位职责">{{ viewForm.PositionDes }}</el-descriptions-item>
      </el-descriptions>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="checkVisible = false">退出</el-button>
      </span>
    </el-dialog>

    <!-- 职位管理表 -->
    <div>
      <el-table :data="tableData" height="calc(100vh - 235px)" fit
        :header-cell-style="{ background: '#165DFF', color: '#fff', font: '500 14px PingFang SC' }"
        @row-dblclick="tableClick" style="width: 100%;">
        <el-table-column type="index" fixed label="序号" width="50">
        </el-table-column>
        <el-table-column prop="zwzt" fixed label="职位状态" min-width="100">
        </el-table-column>
        <el-table-column prop="zwmc" label="职位名称" min-width="120">
        </el-table-column>
        <el-table-column prop="bh" label="编号" min-width="120">
        </el-table-column>
        <el-table-column prop="gwxl" label="岗位序列" widtmin-widthh="120">
        </el-table-column>
        <el-table-column prop="zj" label="职级" min-width="80">
        </el-table-column>
        <el-table-column prop="lsbm" label="隶属部门" min-width="100">
        </el-table-column>
        <el-table-column prop="bzrs" label="编制人数" min-width="90">
        </el-table-column>
        <el-table-column prop="jstd" label="晋升通道" min-width="100">
        </el-table-column>
        <el-table-column prop="xzqj" label="薪资区间" min-width="120">
        </el-table-column>
        <el-table-column prop="zwgs" label="职位概述" min-width="200">
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
import addModify from './components/addModify.vue';
import query from './components/query.vue';
import {
  getAllPosList,
  getOnlyPosList,
  getWorkDuty,
  addPosInfo,
  addWorkDuty,
  editPosInfo,
  editWorkDuty,
  deleteInfo,
  deleteWorkDuty,
  addPlan,
  editPlan,
  deletePlan,
} from '@/api/StaffManagement/position.js'

export default {
  name: 'Position',
  components: { addModify, query },
  data() {
    return {
      dialogVisible: false,
      intoVisible: false,
      addVisible: false,
      checkVisible: false,
      editVisible: false,
      tableData: [],
      formInline: {
        bh: ''
      },
      viewForm: {},
      editList: {},
      // 修改时传递给子组件
      editForm: {},
      workData: []
    }
  },
  created() {
    this.getAllPos()
  },
  computed: {
    isEditVisible() {
      if (Object.keys(this.editForm).length > 0 && this.workData.length > 0) {
        return true
      }
      return false
    }
  },
  methods: {
    // 获取所有职位信息
    getAllPos() {
      getAllPosList().then((res) => {
        if (res.code == 200) {
          // console.log('11111', res)
          this.tableData = res.rows
        }
      })
    },

    //模糊查询
    inquirer() {
      if (!this.formInline.bh) {
        this.getAllPos()
      } else {
        getOnlyPosList(this.formInline.bh).then((res) => {
          if (res.code == 200 && res.data) {
            // console.log(res);
            this.tableData = []
            this.tableData[0] = res.data
          } else {
            this.tableData = []
          }
        })
      }
    },

    // 新增提交
    add() {
      const data = this.$refs.addForm.form
      const workDutyData = this.$refs.addForm.workDutyData
      addPosInfo(data).then((res) => {
        if (res.code == 200) {
          // console.log('11111', res)
        }
      })
      // 工作职责
      for (let item = 0; item < workDutyData.length; item++) {
        workDutyData[item].bh = data.bh
        addWorkDuty(workDutyData[item]).then((res) => {
          if (res.code == 200) {
            // console.log('1111111111', res);
          }
        })
      }
      this.getAllPos()
      this.addVisible = false
    },

    // 修改提交
    edit() {
      const data = this.$refs.editForm.form
      const workDutyData = this.$refs.editForm.workDutyData
      // 修改基本信息
      editPosInfo(data).then((res) => {
        if (res.code == 200) {
          // console.log('1111111',res);
        }
      })
      // 修改工作职责
      for (let item = 0; item < workDutyData.length; item++) {
        workDutyData[item].bh = data.bh
        editWorkDuty(workDutyData[item]).then((res) => {
          if (res.code == 200) {
            // console.log('1111111',res);
          }
        })
      }
      this.getAllPos()
      this.editVisible = false
    },

    //查看
    tableClick(row) {
      console.log(row)
      this.checkVisible = true
      this.viewForm = row
    },
    //修改
    handleClickEdit(row) {
      const bh = row.bh
      // 获取基本信息表单，给editForm，传递给子组件
      getOnlyPosList(bh).then((res) => {
        if (res.code == 200) {
          // console.log('1111', res);
          this.editForm = res.data
        }
      })

      // 工作职责    获取工作职责数据，给workDutyData，传递给子组件
      getWorkDuty(bh).then((res) => {
        if (res.code == 200) {
          // console.log('2222222', res);
          this.workData = res.rows
        }
      })
      this.editVisible = true
    },
    //删除
    deleteRow(index, rows) {
      const bh = rows[index].bh
      deleteInfo(bh).then((res) => {
        if (res.code == 200) {
          rows.splice(index, 1)
        }
      })

      // 先查询工作职责，再删除
      getWorkDuty(bh).then((res) => {
        if (res.code == 200) {
          const idNum = res.rows.map(row => row.id)
          // console.log(idNum);
          deleteWorkDuty(idNum).then((res) => {
            if (res.code == 200) {
              // console.log('1111', res);
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../../../assets/styles/appMain.css';


.table-into {
  position: absolute;
  right: 75px;
  top: 0;
}

.table-add {
  position: absolute;
  right: -9px;
  top: 0;
}
</style>