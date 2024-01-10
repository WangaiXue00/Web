<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-row :gutter="20">
        <el-form-item label="模板名称:">
          <el-input  v-model="form.mbmc" placeholder="请输入模板名称"></el-input>
        </el-form-item>
        <el-form-item label="状 态:">
          <el-input v-model="form.zt" placeholder="请输入状态"></el-input>
        </el-form-item>
        <el-form-item label="添加时间:">
          <el-date-picker style="width: 100%;" v-model="form.tjsj" type="datetime" placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="添加人:">
          <el-input v-model="form.tjr" placeholder="请输入添加人"></el-input>
        </el-form-item>
        <el-form-item label="备 注:">
          <el-input v-model="form.bz" placeholder="请输入备注"></el-input>
        </el-form-item>
        <el-form-item hidden>
          <el-input v-model="form.khrybh"></el-input>
        </el-form-item>
      </el-row>
      <div style="margin-left: 20px;">

        <el-tag v-if="methodName!='add'" class="dialog-tag" size="medium " style="margin-right: 20px;">考核维度</el-tag>
        <el-button v-if="methodName!='add'" type="primary" plain size="mini" @click="addTalData">新增</el-button>

        <el-table v-if="methodName!='add'" :data="khwdData" style="width: 100%">
          <el-table-column prop="gjwd" label="关键维度" width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.gjwd"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="dfzb" label="得分占比 %" width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.dfzb"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="120">
            <template slot-scope="scope">
              <el-button @click.native.prevent="deleteRow(scope.$index, scope.row)" type="text">
                移除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <hr>
        <el-tag class="dialog-tag" size="medium " style="margin-right: 20px;margin-top: 20px; ">请选择适用人员</el-tag>
        <!-- <el-tree :data="checkPeople" show-checkbox node-key="id" :default-expanded-keys="[1,2]" :props="defaultProps"> -->
        <el-tree :data="trimgroupByDeptIdData" default-expand-all show-checkbox node-key="id" ref="tree" highlight-current>
        </el-tree>
        <!-- 默认获取选中的id  this.$refs.tree.getCheckedKeys() 可以考虑在整个id数组中去掉部门id-->
        <!-- this.$refs.tree.getCheckedNodes() 所有项-->
        <!-- <div class="buttons">
          <el-button @click="getCheckedNodes">通过 node 获取</el-button>
          <el-button @click="setCheckedKeys">通过 key勾选上</el-button>
        </div> -->
      </div>
    </el-form>
  </div>
</template>

<script>
import { addKhwd, inquireKhwd, editKhwd, deleteKhwd } from '@/api/PerformanceManagement/khwd.js'

export default {
  name: 'commonForm',
  props: ['editList', 'khwdData', 'methodName', 'changeKhwdData', 'deleteKhwdData', 'trimgroupByDeptIdData'],
  data() {
    return {
      form: {},
      // khwdData: [
      //   {}
      //   // {
      //   //   gjwd: '业务',
      //   //   dfzb: '0.5'
      //   // },
      //   // {
      //   //   gjwd: '创新',
      //   //   dfzb: '0.5'
      //   // },
      //   // {
      //   //   gjwd: 'test',
      //   //   dfzb: '0'
      //   // }
      // ],
      checkPeople: [
        {
          id: 1, //部门编号
          label: '财务部', //部门名
          children: [
            {
              id: 4, //员工编号
              label: '财务部人员1' //员工名
            }
          ]
        },
        {
          id: 2,
          label: '运营部',
          children: [
            {
              id: 5,
              label: '运营部人员1'
            },
            {
              id: 6,
              label: '运营部人员2'
            }
          ]
        }
      ],
      checkedList: []
    }
  },

  created() {
    if (this.editList) {
      this.form = JSON.parse(JSON.stringify(this.editList))
      // this.getAllkhwdBymbid(this.editList.mbid)
      console.log('组件的created中trimgroupByDeptIdData', this.trimgroupByDeptIdData)
      console.log('组件的created中checkPeople', this.checkPeople)
    }
  },

  methods: {
    getCheckedNodes() {
      return this.$refs.tree.getCheckedNodes()
    },

    setCheckedKeys(data) {
      return this.$refs.tree.setCheckedKeys(data)
    },
    // setCheckedKeys() {
    //   this.$refs.tree.setCheckedKeys([100])
    // },
    // getAllkhwdBymbid(mbid) {
    //   inquireKhwd(mbid).then(res => {
    //     console.log('该模版的所考核维度结果：', res)
    //     this.khwdData = res.rows
    //   })
    // },
    deleteRow(index, row) {
      // 调用删除接口
      // deleteKhwd(rows[index].id).then(res => {
      //   console.log(res)
      // })

      this.deleteKhwdData(row.id)

      for (let i = 0; i < this.khwdData.length; i++) {
        if (row.id == this.khwdData[i].id) {
          this.khwdData.splice(i, 1)
        }
      }
    },
    // 考核维度 新增
    addTalData() {
      this.changeKhwdData()
      // const obj = {}
      // this.khwdData.push(obj)
    }
  },
  computed: {
    // getCheckedNodes() {
    //   return this.$refs.tree.getCheckedNodes()
    // }
  }
}
</script>

<style>
</style>