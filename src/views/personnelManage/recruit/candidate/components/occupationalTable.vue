<template>
  <div>
    <el-tag class="dialog-tag">工作经历</el-tag>
    <el-button type="primary" plain size="mini" @click="addData">新增</el-button>
    <el-table
      :data="occupationalData"
      style="width: 100%">
      <el-table-column
        prop="workleibie"
        label="岗位类别"
        width="120">
        <template slot-scope="scope">
            <el-select v-model="scope.row.workleibie" size="mini">
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
        prop="gongsiqiye "
        label="公司企业"
        width="100">
        <template slot-scope="scope">
            <el-input v-model="scope.row.gongsiqiye" size="mini"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        prop="renzhizhiwu"
        label="任职职务"
        width="100">
        <template slot-scope="scope">
            <el-input v-model="scope.row.renzhizhiwu" size="mini"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        prop="zhiwuleibie"
        label="职务类别"
        width="100">
        <template slot-scope="scope">
            <el-select v-model="scope.row.zhiwuleibie" size="mini">
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
        prop="zhuguangongzuo"
        label="主管工作">
        <template slot-scope="scope">
            <el-input v-model="scope.row.zhuguangongzuo" size="mini"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        prop="starttime"
        label="起始时间"
        width="130">
        <template slot-scope="scope">
            <el-date-picker
                v-model="scope.row.starttime"
                type="date"
                size="mini"
                style="width: 100%;"
                value-format="yyyy-MM-dd"
                placeholder="选择日期">
            </el-date-picker>
        </template>
      </el-table-column>
      <el-table-column
        prop="stoptime"
        label="截止时间"
        width="130">
        <template slot-scope="scope">
            <el-date-picker
                v-model="scope.row.stoptime"
                type="date"
                size="mini"
                style="width: 100%;"
                value-format="yyyy-MM-dd"
                placeholder="选择日期">
            </el-date-picker>
        </template>
      </el-table-column>
      <el-table-column
        prop="lizhiyuanyin"
        label="离职原因">
        <template slot-scope="scope">
            <el-input v-model="scope.row.lizhiyuanyin" size="mini"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        prop="workyear"
        label="过往工作年限"
        width="100">
        <template slot-scope="scope">
            <el-input v-model="scope.row.workyear" size="mini"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        prop="workwage"
        label="过往工作月薪"
        width="100">
        <template slot-scope="scope">
            <el-input v-model="scope.row.workwage" size="mini"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        prop="zhengmingren"
        label="证明人">
        <template slot-scope="scope">
            <el-input v-model="scope.row.zhengmingren" size="mini"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        prop="zhengmingrenphone"
        label="证明人电话">
        <template slot-scope="scope">
            <el-input v-model="scope.row.zhengmingrenphone" size="mini"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
            <el-button
            @click.native.prevent="deleteRow(scope.$index, occupationalData)"
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
    name:'occupationalTable',
    data() { 
        return { 
            occupationalData:[{}],
            options:[{
                value:'国企',
                label:'国企'
            },{
                value:'合资企业',
                label:'合资企业'
            },{
                value:'私营企业',
                label:'私营企业'
            },{
                value:'外资企业',
                label:'外资企业'
            },{
                value:'政府部门',
                label:'政府部门'
            }],
            option1:[{
                value:'管理',
                label:'管理'
            },{
                value:'技术',
                label:'管理'
            },{
                value:'其他',
                label:'管理'
            },{
                value:'营销',
                label:'管理'
            }]
        }
    },
    methods: { 
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },
        addData() {
            const obj = {
                workleibie:'',
                gongsiqiye:'',
                renzhizhiwu:'',
                zhiwuleibie:'',
                zhuguangongzuo:'',
                starttime:'',
                stoptime:'',
                lizhiyuanyin:'',
                workyear:'',
                workwage:'',
                zhengmingren:'',
                zhengmingrenphone:''
            }
            this.occupationalData.push(obj)
        }
    }
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