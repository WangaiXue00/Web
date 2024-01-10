<template>
  <div class="addMax">
    <div>
      <span class="titleSpan">基本关系</span>
      <el-form :model="form" label-width="100px"
        style="border: 1px solid rgb(235, 233, 233); margin: 1px; padding: 20px 10px;">
        <el-row :gutter="24">
          <el-col :span="6">
            <div>
              <el-form-item label="职位名称:">
                <el-input v-model="form.Position" placeholder="请输入职位名称"></el-input>
              </el-form-item>
              <el-form-item label="隶属部门:">
                <el-select v-model="form.DepName" placeholder="请选择隶属部门">
                  <el-option label="岗位一" value="shanghai"></el-option>
                  <el-option label="岗位二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
              <el-form-item label="职位编号:">
                <el-input v-model="form.Num" placeholder="请输入职位编号"></el-input>
              </el-form-item>
              <el-form-item label="编制人数:">
                <el-input v-model="form.StaffNum" placeholder="请输入编制人数"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
              <el-form-item label="岗位序列:">
                <el-input v-model="form.PositionSeq"></el-input>
              </el-form-item>
              <el-form-item label="晋升通道:">
                <el-input v-model="form.Promote"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
              <el-form-item label="职级:">
                <el-input v-model="form.Rank"></el-input>
              </el-form-item>
              <el-form-item label="薪资区间:">
                <el-input v-model="form.Salary"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-form-item label="职位概述:">
          <el-input type="textarea" :rows="2" v-model="form.PositionDes" style="width: 70%;">
          </el-input>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <span class="titleSpan">工作关系</span>
      <el-form :model="form" label-width="150px"
        style="border: 1px solid rgb(235, 233, 233); margin: 1px; padding: 20px 10px;">
        <el-row :gutter="24">
          <el-col :span="6">
            <div>
              <el-form-item label="上级职位:">
                <el-input v-model="form" placeholder="请输入职位名称"></el-input>
              </el-form-item>
              <el-form-item label="内部沟通对象:">
                <el-input v-model="form"></el-input>
              </el-form-item>
              <el-form-item label="可升迁至此的职位:">
                <el-input v-model="form"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
              <el-form-item label="同部分同职级岗位:">
                <el-input v-model="form"></el-input>
              </el-form-item>
              <el-form-item label="外部沟通对象:">
                <el-input v-model="form"></el-input>
              </el-form-item>
              <el-form-item label="职位关系图:">
                <el-input v-model="form"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
              <el-form-item label="直接下属人数:">
                <el-input v-model="form"></el-input>
              </el-form-item>
              <el-form-item label="可升迁至的职位:">
                <el-input v-model="form"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
              <el-form-item label="全部下属人数:">
                <el-input v-model="form"></el-input>
              </el-form-item>
              <el-form-item label="可转换至此的职位:">
                <el-input v-model="form"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div>
      <span class="titleSpan">工作职责</span>
      <el-form label-width="150px" style="border: 1px solid rgb(235, 233, 233); margin: 1px; padding: 20px 10px;">
        <el-table :data="tableData" style="width: 100%" border>
          <el-table-column type="index" label="序号" width="100">
          </el-table-column>
          <el-table-column prop="module" label="职责模块" width="180">
          </el-table-column>
          <el-table-column prop="duties" label="职责细则" width="200">
          </el-table-column>
          <el-table-column prop="period" label="周期" width="180">
          </el-table-column>
          <el-table-column prop="weight" label="权重(%)" width="150">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form>
    </div>
    <div>
      <span class="titleSpan">任职资格</span>
      <el-form :model="form" label-width="150px"
        style="border: 1px solid rgb(235, 233, 233); margin: 1px; padding: 20px 10px;">
        <el-row :gutter="24">
          <el-col :span="6">
            <div>
              <el-form-item label="1、基本要求:">
                <el-input v-model="form" placeholder="请输入职位名称"></el-input>
              </el-form-item>
              <el-form-item label="5、专业知识:">
                <el-input v-model="form"></el-input>
              </el-form-item>
              <el-form-item label="9、公文写作能力">
                <el-input v-model="form"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
              <el-form-item label="2、教育背景:">
                <el-input v-model="form"></el-input>
              </el-form-item>
              <el-form-item label="6、业务技能:">
                <el-input v-model="form"></el-input>
              </el-form-item>
              <el-form-item label="10、其他特殊技能:">
                <el-input v-model="form"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
              <el-form-item label="3、工作经验:">
                <el-input v-model="form"></el-input>
              </el-form-item>
              <el-form-item label="7、语言能力:">
                <el-input v-model="form"></el-input>
              </el-form-item>
              <el-form-item label="11、业务了解范围:">
                <el-input v-model="form"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
              <el-form-item label="4、能力、素质:">
                <el-input v-model="form"></el-input>
              </el-form-item>
              <el-form-item label="8、计算机能力:">
                <el-input v-model="form"></el-input>
              </el-form-item>
              <el-form-item label="12、个性素养:">
                <el-input v-model="form"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-form-item label="13、其他:">
          <el-input type="textarea" :rows="2" v-model="form" style="width: 40%;">
          </el-input>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <span class="titleSpan">胜任力</span>
      <el-form :model="form" label-width="160px"
        style="border: 1px solid rgb(235, 233, 233); margin: 1px; padding: 20px 10px;">
        <el-row :gutter="20">
          <el-col :span="6">
            <div>
              <el-form-item label="关键能力描述（知识）:">
                <el-input v-model="form"></el-input>
              </el-form-item>
              <el-form-item label="程度（能力）:">
                <el-input v-model="form"></el-input>
              </el-form-item>
              <el-form-item label="具体表现（特质）:">
                <el-input v-model="form"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
              <el-form-item label="程度（知识）:">
                <el-input v-model="form"></el-input>
              </el-form-item>
              <el-form-item label="具体表现（能力）:">
                <el-input v-model="form"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
              <el-form-item label="具体表现（知识）:">
                <el-input v-model="form"></el-input>
              </el-form-item>
              <el-form-item label="关键能力描述（特质）:">
                <el-input v-model="form"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
              <el-form-item label="关键能力描述（能力）:">
                <el-input v-model="form"></el-input>
              </el-form-item>
              <el-form-item label="程度（特质）:">
                <el-input v-model="form"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "addModify",
  props: ["editList"],
  data() {
    return {
      form: {
        Status: "",
        Position: "",
        Num: "",
        PositionSeq: "",
        Rank: "",
        DepName: "",
        StaffNum: "",
        Promote: "",
        Salary: "",
        PositionDes: ""
      },
      tableData: [{
        module: '',
        duties: '',
        period: '',
        weight: '',
      }]
    }
  },
  created() {
    if (this.editList) {
      this.form = this.editList
      console.log(this.form, 'form')
    }
  },
  methods: {
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>
<style lang="scss">
.titleSpan {
  display: inline-block;
  margin: 15px 0px 10px;
}
</style>