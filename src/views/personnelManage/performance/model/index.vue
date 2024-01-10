<template>
  <div class="assistant">
    <div class="top-form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="模板名称:">
          <el-input v-model="formInline.mbmc" placeholder="请输入模板名称" size="small" clearable @clear="getAllModel"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="inquirer" icon="el-icon-search" size="small">查询</el-button>
        </el-form-item>
        <div class="flag">
          <el-radio v-model="radio" label="1" size="small">评定开放</el-radio>
          <el-radio v-model="radio" label="2" size="small">评定关闭</el-radio>

          <el-radio v-model="radio1" label="1" size="small">年中修改开放</el-radio>
          <el-radio v-model="radio1" label="2" size="small">年中修改关闭</el-radio>
        </div>
        <el-form-item>
          <el-button type="primary" icon="el-icon-document" size="small">保存</el-button>
        </el-form-item>

        <el-form-item class="table-add">
          <el-button type="primary" @click="addOrigin" icon="el-icon-circle-plus-outline" size="small">添加</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 新增表格的对话框 -->
    <el-dialog title="新增绩效模版信息" append-to-body :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
      <!-- <commonForm ref="addForm" :editList="editList" :changeKhwdData="changeKhwdData" :khwdData="khwdData" :methodName="methodName" /> -->
      <commonForm ref="addForm" :methodName="methodName" :trimgroupByDeptIdData="trimgroupByDeptIdData" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 双击查看表格内容的对话框 -->
    <el-dialog title="查看绩效模板设定信息" append-to-body :visible.sync="viewVisible" width="60%">
      <el-descriptions>
        <el-descriptions-item label="模板名称">{{ viewForm.mbmc }}</el-descriptions-item>
        <el-descriptions-item label="状 态">{{ viewForm.zt }}</el-descriptions-item>
        <el-descriptions-item label="添加时间">{{ viewForm.tjsj }}</el-descriptions-item>
        <el-descriptions-item label="添加人">{{ viewForm.tjr }}</el-descriptions-item>
        <el-descriptions-item label="备 注">{{ viewForm.bz }}</el-descriptions-item>
      </el-descriptions>

      <el-divider v-if="khwdData.length!==0"></el-divider>
      <el-tag v-if="khwdData.length!==0">该模版的考核维度展示</el-tag>
      <br>
      <el-descriptions v-for="item in khwdData" :key="item.id">
        <el-descriptions-item label="关键维度">{{ item.gjwd }}</el-descriptions-item>
        <el-descriptions-item label="得分占比">{{ item.dfzb }}</el-descriptions-item>
      </el-descriptions>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="viewVisible = false">退出</el-button>
      </span>
    </el-dialog>

    <!-- 修改表格内容的对话框 -->
    <el-dialog title="修改当前绩效模板设定信息" append-to-body :visible.sync="editVisible" width="50%">
      <commonForm v-if="editVisible" :deleteKhwdData="deleteKhwdData" :trimgroupByDeptIdData="trimgroupByDeptIdData" v-bind:editList="editList" :methodName="methodName" :khwdData="khwdData" :changeKhwdData="changeKhwdData" ref="editForm" :before-close="handleClose" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="edit">提 交</el-button>
      </span>
    </el-dialog>

    <!-- 绩效模板设定表 -->
    <div>
      <el-table :data="tableData"
      height="calc(100vh - 235px)"
      fit
      :header-cell-style="{background: '#165DFF',color:'#fff',font:'500 14px PingFang SC'}"
       @row-dblclick="tableClick" style="width: 100%;line-height: 10px;">
        <el-table-column type="index" fixed label="序号" width="50">
        </el-table-column>
        <el-table-column prop="mbmc" label="模板名称">
        </el-table-column>
        <el-table-column prop="zt" label="状 态">
        </el-table-column>
        <el-table-column prop="tjsj" label="添加时间">
        </el-table-column>
        <el-table-column prop="tjr" label="添加人">
        </el-table-column>
        <el-table-column prop="bz" label="备 注">
        </el-table-column>
        <!-- <el-table-column prop="khrybh" label="人员编号数组">
        </el-table-column> -->
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
import commonForm from './components/commonForm.vue'
// import { addModel, inquireModel, editModel, deleteModel } from '@/api/PerformanceManagement/model.js'
import { addJxmbsd, inquireJxmbsd, editJxmbsd, deleteJxmbsd } from '@/api/PerformanceManagement/jxmbsd.js'
import { addKhwd, inquireKhwd, editKhwd, deleteKhwd } from '@/api/PerformanceManagement/khwd.js'
import { inquireYhxx } from '@/api/PerformanceManagement/yhxx.js'
export default {
  name: 'Model',
  components: { commonForm },
  data() {
    return {
      radio: '1',
      radio1: '1',
      dialogVisible: false,
      viewVisible: false,
      editVisible: false,
      editList: {},
      tableData: [],
      options: [],
      formInline: {
        mbmc: ''
      },
      viewForm: {},
      khwdData: [],
      khwdOriginSum: 0,
      methodName: '',
      deleteIds: [],
      groupByDeptIdData: [],
      trimgroupByDeptIdData: []
    }
  },
  mounted() {
    this.getAllModel()
  },
  methods: {
    // 原数据根据 某一字段 进行分组 我这是根据部门id 分好组的数据传到组件那边显示出来
    getArrayGroupByKey(originalArr, field) {
      let tempArr = []
      let endData = []
      for (let i = 0; i < originalArr.length; i++) {
        if (tempArr.indexOf(originalArr[i][field]) === -1) {
          endData.push({
            [field]: originalArr[i][field],
            data: [originalArr[i]]
          })
          tempArr.push(originalArr[i][field])
        } else {
          for (let j = 0; j < endData.length; j++) {
            if (endData[j][field] == originalArr[i][field]) {
              endData[j].data.push(originalArr[i])
              break
            }
          }
        }
      }
      return endData // 最终输出
    },
    // 获取所有
    getAllModel() {
      inquireJxmbsd().then(res => {
        this.tableData = res.rows
      })
    },

    // 点击新增按钮后
    addOrigin() {
      this.dialogVisible = true
      this.methodName = 'add'
      // 本来想着就是直接新增考核维度信息表就行，但是首次提交连mbid还没确定

      // 然后开始下一个显示出适用人员
      inquireYhxx().then(res => {
        console.log('点击新增后', res.rows)

        this.groupByDeptIdData = this.getArrayGroupByKey(res.rows, 'deptId')
        // console.log(this.groupByDeptIdData)

        const tempgroupByDeptIdData = []
        // trimgroupByDeptIdData  上面数据封装好传给子组件的数据
        for (let i = 0; i < this.groupByDeptIdData.length; i++) {
          for (let j = 0; j < this.groupByDeptIdData[i].data.length; j++) {
            let tempChildren = []
            for (let k = 0; k < this.groupByDeptIdData[i].data.length; k++) {
              tempChildren.push({ id: this.groupByDeptIdData[i].data[j].userId, label: this.groupByDeptIdData[i].data[j].userName })
            }
            tempgroupByDeptIdData[i] = { id: this.groupByDeptIdData[i].deptId, label: this.groupByDeptIdData[i].data[j].dept.deptName, children: tempChildren }
          }
        }
        this.trimgroupByDeptIdData = tempgroupByDeptIdData
        // console.log(this.trimgroupByDeptIdData)
      })
      // console.log('come here', this.trimgroupByDeptIdData)
    },

    // 新增提交
    add() {
      const data = this.$refs.addForm.form
      const tree = this.$refs.addForm.getCheckedNodes()
      const temp = []
      console.log(data)
      console.log('tree', tree)

      // 获取勾选上的人员
      for (let i = 0; i < tree.length; i++) {
        if (!tree[i].children) {
          temp.push(tree[i].id)
        }
      }
      // 放进temp数组中存放
      console.log(temp)

      data.khrybh = temp.toString()
      console.log(data)

      addJxmbsd(data).then(res => {
        console.log(res)
        this.getAllModel()
        // editJxmbsd({ mbid: res.mbid, khrybh: temp }).then(res => {
        //   console.log(res)
        //   this.getAllModel()
        // })
      })

      // 中部分(新增条数 其中无请修改的部分)
      // for (let i = 0; i < this.khwdData.length; i++) {
      //   // console.log('+新增成功', this.khwdData[i])
      //   addKhwd(this.khwdData[i]).then(res => {
      //     console.log('+新增成功', res)
      //   })
      // }

      this.dialogVisible = false
    },
    changeKhwdData() {
      if (this.methodName == 'edit') {
        const data = this.$refs.editForm.form
        console.log('add a row')
        const obj = { mbid: data.mbid }
        this.khwdData.push(obj)
        console.log('Add a row ', this.khwdData)
      } else {
        // 添加功能
        const obj = {}
        this.khwdData.push(obj)
      }
    },
    //模糊查询
    inquirer() {
      inquireJxmbsd(this.formInline).then(res => {
        this.tableData = res.rows
      })
    },
    //新增弹窗的关闭提示方法
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },

    // 修改提交
    edit() {
      // console.log('here', this.khwdData)
      // console.log('---', this.$refs.editForm.form)
      const data = this.$refs.editForm.form

      // this.khwdData.length为点击提交前的值 >= 点击修改是就确定的khwdOriginSum初始值
      // 中部分(原本修改条数)
      for (let i = 0; i < this.khwdOriginSum; i++) {
        editKhwd(this.khwdData[i]).then(res => {
          console.log('+修改成功', res)
        })
      }
      // 中部分(新增条数)
      for (let i = this.khwdOriginSum; i < this.khwdData.length; i++) {
        // console.log('+新增成功', this.khwdData[i])
        addKhwd(this.khwdData[i]).then(res => {
          console.log('+新增成功', res)
        })
      }

      for (let i = 0; i < this.deleteIds.length; i++) {
        deleteKhwd(this.deleteIds[i]).then(res => {
          console.log('-删除成功', res)
        })
      }
      // console.log(this.deleteIds)

      // 点提交后 再由当前状态下的勾选情况重新存 khrybh的字段
      const tree = this.$refs.editForm.getCheckedNodes()
      const temp = []
      // console.log('tree', tree)

      // 获取勾选上的人员
      for (let i = 0; i < tree.length; i++) {
        if (!tree[i].children) {
          temp.push(tree[i].id)
        }
      }
      // 放进temp数组中存放
      // console.log(temp)

      data.khrybh = temp.toString()
      // console.log(data)
      // 上部分 和最下面一块更新
      editJxmbsd(data).then(res => {
        console.log('最后更新的结果', res)
        this.getAllModel()
      })
      this.editVisible = false
    },
    //点击修改
    handleClickEdit(row) {
      this.editVisible = true
      this.methodName = 'edit'
      console.log(row.mbid)
      this.editList = row
      inquireKhwd({ mbid: row.mbid }).then(res => {
        // console.log('该模版的所考核维度结果：', res)
        // console.log('考核维度结果条数：', res.total)
        this.khwdOriginSum = res.total
        this.khwdData = res.rows
      })

      // 先显示出列表
      inquireYhxx().then(res => {
        // console.log('点击新增后', res.rows)

        this.groupByDeptIdData = this.getArrayGroupByKey(res.rows, 'deptId')
        // console.log(this.groupByDeptIdData)

        const tempgroupByDeptIdData = []
        // trimgroupByDeptIdData  上面数据封装好传给子组件的数据
        for (let i = 0; i < this.groupByDeptIdData.length; i++) {
          for (let j = 0; j < this.groupByDeptIdData[i].data.length; j++) {
            let tempChildren = []
            for (let k = 0; k < this.groupByDeptIdData[i].data.length; k++) {
              tempChildren.push({ id: this.groupByDeptIdData[i].data[j].userId, label: this.groupByDeptIdData[i].data[j].userName })
            }
            tempgroupByDeptIdData[i] = { id: this.groupByDeptIdData[i].deptId, label: this.groupByDeptIdData[i].data[j].dept.deptName, children: tempChildren }
          }
        }
        this.trimgroupByDeptIdData = tempgroupByDeptIdData
      })
      // 再根据数据库中的【】 取到回显出来
      inquireJxmbsd({ mbid: row.mbid }).then(res => {
        // console.log('根据mbid取到这条记录的被选中人员字符串', res.rows[0].khrybh)
        let temp = res.rows[0].khrybh
        let strArr = temp.split(',')
        const tree = this.$refs.editForm.setCheckedKeys(strArr)
      })

      // const tree = this.$refs.addForm.setCheckedKeys([])
    },
    // 内部khwd
    deleteKhwdData(id) {
      this.deleteIds.push(id)
    },
    //外部删除
    deleteRow(index, rows) {
      // console.log(rows[index].mbid)
      deleteJxmbsd(rows[index].mbid).then(res => {
        console.log(res)
      })
      rows.splice(index, 1)
    },
    //查看
    tableClick(row) {
      console.log('查看这一行信息', row)
      this.viewVisible = true
      this.viewForm = row

      inquireKhwd({ mbid: row.mbid }).then(res => {
        console.log('查看这一行信息所有考核维度结果：', res)
        console.log('考核维度结果条数：', res.total)
        this.khwdData = res.rows
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../../../assets/styles/appMain.css';
.title {
  margin: 30px 3rem 35px;
  font-size: 26px;
  font-weight: 500;
  padding-bottom: 5px;
  border-bottom: 3px solid #ccc;
}
.flag {
  margin-left: 50px;
  display: inline-block;
  padding-top: 10px;
  margin-right: 10px;
}
// .top-form {
//   position: relative;
//   margin: 30px 3rem 0;
// }
.table-add {
  position: absolute;
  right: 0px;
  top: 0px;
  margin-right: 0 !important;
}
::v-deep .el-descriptions-item__label {
  width: 120px;
  text-align: right;
  justify-content: flex-end;
}
::v-deep .el-input__inner {
  border-radius: 6px;
}
</style>