<template>
  <div>
    <el-tag class="dialog-tag">学历信息</el-tag>
      <el-button type="primary" plain size="mini" @click="addData">新增</el-button>
    <el-table
      :data="educationalData"
      style="width: 100%">
      <el-table-column
        prop="studygroup"
        label="学历类型"
        width="120">
        <template slot-scope="scope">
            <el-select v-model="scope.row.studygroup" size="mini">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </template>
      </el-table-column>
      <el-table-column
        prop="study "
        label="学历"
        width="100">
        <template slot-scope="scope">
            <el-select v-model="scope.row.study" size="mini">
                <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </template>
      </el-table-column>
      <el-table-column
        prop="studystarttime"
        label="入学时间"
        width="100">
        <template slot-scope="scope">
            <el-date-picker
                v-model="scope.row.studystarttime"
                type="date"
                size="mini"
                style="width: 100%;"
                value-format="yyyy-MM-dd"
                placeholder="选择日期">
            </el-date-picker>
        </template>
      </el-table-column>
      <el-table-column
        prop="graduatetime"
        label="毕业时间"
        width="100">
        <template slot-scope="scope">
            <el-date-picker
                v-model="scope.row.graduatetime"
                type="date"
                size="mini"
                style="width: 100%;"
                value-format="yyyy-MM-dd"
                placeholder="选择日期">
            </el-date-picker>
        </template>
      </el-table-column>
      <el-table-column
        prop="graduateschoo"
        label="毕业院校">
        <template slot-scope="scope">
            <el-input v-model="scope.row.graduateschoo" size="mini"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        prop="studyzhuanye"
        label="学习专业">
        <template slot-scope="scope">
            <el-input v-model="scope.row.studyzhuanye" size="mini"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        prop="xuewei"
        label="学位">
        <template slot-scope="scope">
            <el-select v-model="scope.row.xuewei" size="mini">
                <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
            <el-button
            @click.native.prevent="deleteRow(scope.$index, educationalData)"
            type="text"
            size="small">
            移除
            </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
    name: "educationalTable",
    data() {
        return { 
            educationalData:[{}],
            options:[{
                value:'全日制教育',
                label:'全日制教育'
            },{
                value:'非全日制教育',
                label:'非全日制教育'
            },{
                value:'无',
                label:'无'
            }],
            options1:[{
                value:'本科',
                label:'本科'
            },{
                value:'硕士研究生',
                label:'硕士研究生'
            },{
                value:'博士研究生',
                label:'博士研究生'
            }],
            options2:[{
                value:'无',
                label:'无'
            },{
                value:'学士',
                label:'学士'
            },{
                value:'硕士',
                label:'硕士'
            },{
                value:'博士',
                label:'博士'
            }]
        }
    },
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      addData() {
        const obj = {
            studygroup:'',
            study:'',
            studystarttime:'',
            graduatetime:'',
            graduateschoo:'',
            studyzhuanye:'',
            xuewei:'' 
        }
        this.educationalData.push(obj)
      }
    },
}
</script>

<style lang="scss" scoped>
::v-deep .el-table .el-table__header-wrapper th {
    font-size: 12px;
    height: 20px;
    padding: 5px 0;
}
::v-deep .el-table__row {
    height:30px
}
::v-deep .el-table--medium .el-table__cell {
    padding: 2px 0;
}
</style>