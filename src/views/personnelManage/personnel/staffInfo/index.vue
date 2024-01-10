<template>
  <div class="assistant">
    <div v-if="personPortraitVisible">
      <div class="top-form">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="员工号搜索：">
            <el-input v-model="formInline.gh" placeholder="请输入员工号" size="small" clearable
              @clear="getAllStaffList"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="inquirer" icon="el-icon-search" size="small">查询</el-button>
          </el-form-item>
          <el-form-item class="table-into">
            <el-upload class="upload-demo" action="http://123.57.56.30:8080/system/info/add" multiple>
              <el-button icon="el-icon-upload" size="small" type="primary">导入</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item class="table-file">
            <el-upload class="upload-demo" action="http://123.57.56.30:8080/system/info/add" multiple>
              <el-button icon="el-icon-upload" size="small" type="primary">人事档案</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item class="table-add">
            <el-button type="primary" @click="addVisible = true" icon="el-icon-circle-plus-outline"
              size="small">添加</el-button>
          </el-form-item>
        </el-form>
      </div>

      <!-- 职位管理表 -->
      <div>
        <el-table :data="tableData" height="calc(100vh - 235px)" fit
          :header-cell-style="{ background: '#165DFF', color: '#fff', font: '500 14px PingFang SC' }"
          @row-dblclick="tableClick" style="width: 100%;">
          <el-table-column type="index" fixed label="序号" width="50">
          </el-table-column>
          <el-table-column prop="rzzt" fixed label="任职状态" min-width="100">
          </el-table-column>
          <el-table-column prop="gh" label="工号" min-width="120">
          </el-table-column>
          <el-table-column prop="xm" label="姓名" min-width="100">
          </el-table-column>
          <el-table-column prop="rzrq" label="入职日期" min-width="100">
          </el-table-column>
          <el-table-column prop="ssbm" label="所属部门" min-width="150">
          </el-table-column>
          <el-table-column prop="zw" label="职位" min-width="100">
          </el-table-column>
          <el-table-column prop="zj" label="职级" min-width="100">
          </el-table-column>
          <el-table-column prop="sjh" label="手机号" min-width="150">
          </el-table-column>
          <el-table-column prop="zjld" label="直接领导" min-width="100">
          </el-table-column>
          <el-table-column prop="xl" label="学历" min-width="100">
          </el-table-column>
          <el-table-column prop="zy" label="专业" min-width="100">
          </el-table-column>
          <el-table-column prop="sftsgz" label="是否特殊工种" min-width="150">
          </el-table-column>
          <el-table-column fixed="right" label="操作" align="center" width="180">
            <template slot-scope="scope">
              <el-button @click="personPortrait(scope.row)" type="text" size="small">人才画像</el-button>
              <el-button @click="handleClickEdit(scope.row)" type="text" size="small">修改</el-button>
              <el-button type="text" size="small"
                @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <!-- 高级查询的对话框 -->
      <el-dialog title="高级查询" append-to-body :visible.sync="dialogVisible" width="70%">
        <span>这是高级查询</span>
        <query></query>
      </el-dialog>

      <!-- 导入的对话框 -->
      <el-dialog title="导入" append-to-body :visible.sync="intoVisible" width="50%">
        <InportInfo />
        <span slot="footer" class="dialog-footer">
          <el-button @click="intoVisible = false">取 消</el-button>
          <el-button type="primary" @click="intoVisible = false">提 交</el-button>
        </span>
      </el-dialog>

      <!-- 人事档案 -->
      <el-dialog title="导入" append-to-body :visible.sync="fileVisible" width="80%">
        <PersonFile />
        <span slot="footer" class="dialog-footer">
          <el-button @click="fileVisible = false">取 消</el-button>
          <el-button type="primary" @click="fileVisible = false">提 交</el-button>
        </span>
      </el-dialog>

      <!-- 新增表格的对话框 -->
      <el-dialog title="添加" append-to-body :visible.sync="addVisible" width="80%" @close="colseAdd">
        <addModify v-if="addVisible" ref="addForm" />
        <span slot="footer" class="dialog-footer">
          <el-button @click="addVisible = false">取 消</el-button>
          <el-button type="primary" @click="add">提 交</el-button>
        </span>
      </el-dialog>

      <!-- 修改表格内容的对话框 -->
      <el-dialog title="修改当前职位信息" append-to-body :visible.sync="editVisible" width="80%">
        <!-- <commonForm ref="dialog" /> -->
        <addModify v-if="(isEditVisible && editVisible)" :editForm="editForm" :eduData="eduData" :traData="traData"
          :workData="workData" :famData="famData" :talData="talData" ref="editForm" />
        <span slot="footer" class="dialog-footer">
          <el-button @click="editVisible = false">取 消</el-button>
          <el-button type="primary" @click="edit">提 交</el-button>
        </span>
      </el-dialog>

      <!-- 查看表格内容的对话框 -->
      <el-dialog title="查看职位信息" append-to-body :visible.sync="checkVisible" width="60%">
        <el-descriptions>
          <el-descriptions-item label="任职状态">{{ viewForm.rzzt }}</el-descriptions-item>
          <el-descriptions-item label="工号">{{ viewForm.gh }}</el-descriptions-item>
          <el-descriptions-item label="姓名">{{ viewForm.xm }}</el-descriptions-item>
          <el-descriptions-item label="入职日期">{{ viewForm.rzrq }}</el-descriptions-item>
          <el-descriptions-item label="所属部门">{{ viewForm.ssbm }}</el-descriptions-item>
          <el-descriptions-item label="职位">{{ viewForm.zw }}</el-descriptions-item>
          <el-descriptions-item label="职级">{{ viewForm.zj }}</el-descriptions-item>
          <el-descriptions-item label="手机号">{{ viewForm.sjh }}</el-descriptions-item>
          <el-descriptions-item label="直接领导">{{ viewForm.zjld }}</el-descriptions-item>
          <el-descriptions-item label="学历">{{ viewForm.xl }}</el-descriptions-item>
          <el-descriptions-item label="专业">{{ viewForm.zy }}</el-descriptions-item>
          <el-descriptions-item label="是否特殊工种">{{ viewForm.sftsgz }}</el-descriptions-item>
        </el-descriptions>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="checkVisible = false">退出</el-button>
        </span>
      </el-dialog>

    </div>
    <div v-else>
      <el-button type="primary" @click="personPortraitVisible = true">返回</el-button>
      <div class="container">
        <screen></screen>

      </div>

    </div>
  </div>
</template>

<script>
import Screen from './components/srceen.vue'
import addModify from './components/addModify.vue';
import query from './components/query.vue'
import {
  addStaffInfo,
  getStaffList,
  getStaList,
  editStaffList,
  deleteStaff,
  addStaffEdu,
  addStaffTrain,
  addStaffWork,
  addStaffFam,
  addStaffTal,
  deleteStaffEdu,
  deleteStaffTrain,
  deleteStaffWork,
  deleteStaffFam,
  deleteStaffTal,
  getStaffEdu,
  getStaffTrain,
  getStaffWork,
  getStaffFam,
  getStaffTal,
  editStaffEdu,
  editStaffTra,
  editStaffWork,
  editStaffFam,
  editStaffTal

} from '@/api/StaffManagement/staffInfo.js'

export default {
  name: 'StaffInfo',
  components: { addModify, query, Screen },

  data() {
    return {
      dialogVisible: false,
      intoVisible: false,
      addVisible: false,
      fileVisible: false,
      checkVisible: false,
      editVisible: false,
      tableData: [],
      formInline: {
        gh: ''
      },
      viewForm: {},
      currentRow: null,
      editListGh: '',

      editForm: {},
      eduData: [],
      traData: [],
      workData: [],
      famData: [],
      talData: [],
      personPortraitVisible: true
    }
  },
  created() {
    this.getAllStaffList()
  },
  computed: {
    isEditVisible() {
      if (Object.keys(this.editForm).length > 0 && this.eduData.length > 0 && this.traData.length > 0 && this.workData.length > 0 && this.famData.length > 0 && this.talData.length > 0) {
        return true
      }
      return false
    }
  },
  methods: {
    // 获取所有员工信息
    getAllStaffList() {
      getStaffList().then((res) => {
        this.tableData = res.rows
        // console.log(res);
      })
    },
    // 新增
    add() {
      const data = this.$refs.addForm.form
      const eduData = this.$refs.addForm.educationalData
      const trainData = this.$refs.addForm.trainingData
      const workData = this.$refs.addForm.occupationalData
      const FamData = this.$refs.addForm.familyInfoData
      const TalData = this.$refs.addForm.talentData

      // 基本信息
      addStaffInfo(data).then((res) => {
        if (res.code == 200) {
          // console.log('1111111', res);
        }
      })

      // 学历经历
      for (let item = 0; item < eduData.length; item++) {
        eduData[item].gh = data.gh
        addStaffEdu(eduData[item]).then((res) => {
          if (res.code == 200) {
            // console.log('1111111', res);
          }
        })
      }
      // console.log(eduData);

      // 过往培训
      for (let item = 0; item < trainData.length; item++) {
        trainData[item].gh = data.gh
        addStaffTrain(trainData[item]).then((res) => {
          if (res.code == 200) {
            // console.log('1111111', res);
          }
        })
      }
      // console.log(trainData);

      // 工作经历
      for (let item = 0; item < workData.length; item++) {
        workData[item].gh = data.gh
        addStaffWork(workData[item]).then((res) => {
          if (res.code == 200) {
            // console.log('1111111', res);
          }
        })
      }
      // console.log(workData);

      // 家庭信息
      for (let item = 0; item < FamData.length; item++) {
        FamData[item].gh = data.gh
        addStaffFam(FamData[item]).then((res) => {
          if (res.code == 200) {
            // console.log('1111111', res);
          }
        })
      }
      // console.log(FamData);

      // 人才盘点
      for (let item = 0; item < TalData.length; item++) {
        TalData[item].gh = data.gh
        addStaffTal(TalData[item]).then((res) => {
          if (res.code == 200) {
            // console.log('1111111', res);
          }
        })
      }
      // console.log(TalData);
      this.getAllStaffList()
      this.addVisible = false
    },

    // 修改提交
    edit() {
      const data = this.$refs.editForm.form
      const eduData = this.$refs.editForm.educationalData
      const trainData = this.$refs.editForm.trainingData
      const workData = this.$refs.editForm.occupationalData
      const FamData = this.$refs.editForm.familyInfoData
      const TalData = this.$refs.editForm.talentData

      // 修改基本信息
      editStaffList(data).then((res) => {
        if (res.code == 200) {
          // console.log('1111111',res);
        }
      })

      // 学历经历
      for (let item = 0; item < eduData.length; item++) {
        eduData[item].gh = data.gh
        editStaffEdu(eduData[item]).then((res) => {
          if (res.code == 200) {
            // console.log('1111111',res);
          }
        })
      }

      // 过往培训
      for (let item = 0; item < trainData.length; item++) {
        trainData[item].gh = data.gh
        editStaffTra(trainData[item]).then((res) => {
          if (res.code == 200) {
            // console.log('1111111', res);
          }
        })
      }

      // 工作经历
      for (let item = 0; item < workData.length; item++) {
        workData[item].gh = data.gh
        editStaffWork(workData[item]).then((res) => {
          if (res.code == 200) {
            // console.log('1111111', res);
          }
        })
      }

      // 家庭信息
      for (let item = 0; item < FamData.length; item++) {
        FamData[item].gh = data.gh
        editStaffFam(FamData[item]).then((res) => {
          if (res.code == 200) {
            // console.log('1111111', res);
          }
        })
      }
      // 人才盘点
      for (let item = 0; item < TalData.length; item++) {
        TalData[item].gh = data.gh
        editStaffTal(TalData[item]).then((res) => {
          if (res.code == 200) {
            // console.log('1111111', res);
          }
        })
      }
      this.getAllStaffList()
      this.editVisible = false
    },
    //模糊查询
    inquirer() {
      if (!this.formInline.gh) {
        this.getAllStaffList()
      } else {
        getStaList(this.formInline.gh).then((res) => {
          if (res.code == 200 && res.data) {
            this.tableData = []
            this.tableData[0] = res.data
          } else {
            this.tableData = []
          }
          // console.log(res);
          // console.log('11', res.data);
        })
      }
    },
    //查看
    tableClick(row) {
      console.log(row)
      this.checkVisible = true
      this.viewForm = row
    },
    //修改
    handleClickEdit(row) {
      const gh = row.gh
      // 获取基本信息表单，给editForm，传递给子组件
      getStaList(gh).then((res) => {
        if (res.code == 200) {
          // console.log('1111', res);
          this.editForm = res.data
        }
      })
      // 学历经历     获取学历经历数据，给eduData，传递给子组件
      getStaffEdu(gh).then((res) => {
        // console.log('000000000', res);
        if (res.code == 200) {
          this.eduData = res.rows
        }
      })

      // 过往培训     获取过往培训数据，给traData，传递给子组件
      getStaffTrain(gh).then((res) => {
        // console.log('000000000', res);
        if (res.code == 200) {
          this.traData = res.rows
        }
      })

      // 工作经历     获取工作经历数据，给workData，传递给子组件
      getStaffWork(gh).then((res) => {
        // console.log('000000000', res);
        if (res.code == 200) {
          this.workData = res.rows
        }
      })

      // 家庭    获取家庭数据，给famData，传递给子组件
      getStaffFam(gh).then((res) => {
        // console.log('000000000', res);
        if (res.code == 200) {
          this.famData = res.rows
        }
      })

      // 人才盘点    获取人才盘点数据，给talData，传递给子组件
      getStaffTal(gh).then((res) => {
        // console.log('000000000', res);
        if (res.code == 200) {
          this.talData = res.rows
        }
      })
      this.editVisible = true
    },
    //删除
    deleteRow(index, rows) {
      // console.log(rows[index].gh)
      const gh = rows[index].gh
      deleteStaff(gh).then((res) => {
        if (res.code == 200) {
          rows.splice(index, 1)
        }
      })
      // 先查询学历，再删除
      getStaffEdu(gh).then((res) => {
        // console.log('000000000', res);
        if (res.code == 200) {
          const idNum = res.rows.map(row => row.id)
          // console.log(idNum);
          deleteStaffEdu(idNum).then((res) => {
            if (res.code == 200) {
              // console.log('1111', res);
            }
          })
        }
      })

      // 先查询过往培训，再删除
      getStaffTrain(gh).then((res) => {
        // console.log('000000000', res);
        if (res.code == 200) {
          const idNum = res.rows.map(row => row.id)
          deleteStaffTrain(idNum).then((res) => {
            if (res.code == 200) {
              // console.log('1111', res);
            }
          })
        }
      })

      // 先查询工作经历，再删除
      getStaffWork(gh).then((res) => {
        // console.log('000000000', res);
        if (res.code == 200) {
          const idNum = res.rows.map(row => row.id)
          deleteStaffWork(idNum).then((res) => {
            if (res.code == 200) {
              // console.log('1111', res);
            }
          })
        }
      })

      // 先查询家庭，再删除
      getStaffFam(gh).then((res) => {
        // console.log('000000000', res);
        if (res.code == 200) {
          const idNum = res.rows.map(row => row.id)
          deleteStaffFam(idNum).then((res) => {
            if (res.code == 200) {
              // console.log('1111', res);
            }
          })
        }
      })

      // 先查询人才盘点，再删除
      getStaffTal(gh).then((res) => {
        // console.log('000000000', res);
        if (res.code == 200) {
          const idNum = res.rows.map(row => row.id)
          deleteStaffTal(idNum).then((res) => {
            if (res.code == 200) {
              // console.log('1111', res);
            }
          })
        }
      })
    },
    /* 表格选中行 */
    handleCurrentChange(val) {
      this.currentRow = val;
      // console.log('1111111111111', this.currentRow);
    },
    // 关闭新增对话框后清除数据
    colseAdd() {
      this.$nextTick(() => {
        // console.log(this.$refs.addForm.cleaard));
        // this.$refs.addForm.clearData()
      })
    },
    personPortrait(row) {
      this.personPortraitVisible = false
    }

  }
}
</script>

<style scoped lang="scss">
@import '../../../../assets/styles/appMain.css';


.table-into {
  position: absolute;
  right: 185px;
  top: 0;
}

.table-file {
  position: absolute;
  right: 75px;
  top: 0;
}

.table-add {
  position: absolute;
  right: -9px;
  top: 0;
}




.container {

  width: 100%;
  height: 620px;
}
</style>

