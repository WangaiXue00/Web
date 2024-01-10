<template>
  <div>
    <el-descriptions class="margin-top" :column="3" border>
    <template slot="title">
        <span>实施计划登记</span>
    </template>
    <el-descriptions-item label="业务类型">
        kooriookami
    </el-descriptions-item>
    <el-descriptions-item label="立项编号">
        kooriookami
    </el-descriptions-item>
    <el-descriptions-item label="项目名称">
        kooriookami
    </el-descriptions-item>
    <el-descriptions-item label="项目发起人">
        kooriookami
    </el-descriptions-item>
    <el-descriptions-item label="客户名称	">
        kooriookami
    </el-descriptions-item>
    <el-descriptions-item label="合同编号">
        kooriookami
    </el-descriptions-item>
    </el-descriptions>
    <el-table
        :data="tableData"
        style="width: 100%;margin: 5px;">
        <el-table-column
        prop="jhmc"
        label="计划名称">
        <template slot-scope="scope">
            <el-input v-model="scope.row.jhmc"></el-input>
        </template>
    </el-table-column>
        <el-table-column
        prop="ksrq"
        label="开始日期">
        <template slot-scope="scope">
            <el-date-picker
                v-model="scope.row.ksrq"
                type="date"
                style="width: 100%;"
                value-format="yyyy-dd-MM"
                placeholder="选择日期">
            </el-date-picker>
        </template>
    </el-table-column>
        <el-table-column
        prop="jsrq"
        label="结束日期">
        <template slot-scope="scope">
            <el-date-picker
                v-model="scope.row.jsrq"
                type="date"
                style="width: 100%;"
                value-format="yyyy-dd-MM"
                placeholder="选择日期">
            </el-date-picker>
        </template>
    </el-table-column>
        <el-table-column
        prop="jhnr"
        label="计划内容">
        <template slot-scope="scope">
            <el-input v-model="scope.row.jhnr"></el-input>
        </template>
        </el-table-column>
        <el-table-column
        prop="cyry"
        label="参于人员">
        <template slot-scope="scope">
            <el-input v-model="scope.row.cyry"></el-input>
        </template>
        </el-table-column>
        <el-table-column
        align="center">
        <template slot="header" slot-scope>
            <el-button type="primary" icon="el-icon-plus" circle @click="addOption"></el-button>
        </template>
        <template slot-scope="scope">
            <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small">
            删除
            </el-button>
        </template>
    </el-table-column>
    </el-table>
    <el-descriptions class="margin-top" :column="2" border>
        <el-descriptions-item label="附件：">
            <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :file-list="fileList">
                <i class="el-icon-upload2"></i>
            </el-upload>
        </el-descriptions-item>
        <el-descriptions-item label="审批流程：">
            <el-select v-model="splc" 
                clearable
                placeholder="请选择"
                style="width: 150px;">
                <el-option
                v-for="item in options4"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
    name: "addEdit",
    data() {
        return {
            tableData:[{
                jhmc:'软件部署'
            },{
                jhmc:'设备巡检计划'
            },{
                jhmc:'设备PM计划'
            },{
                jhmc:'设备质控计划'
            }],
            options4: [{
                value: '无需审批',
                label: '无需审批'
            },{
                value: '100万到小于等于500万立项审批',
                label: '100万到小于等于500万立项审批'
            },{
                value: '大于500万立项审批',
                label: '大于500万立项审批'
            },{
                value: '小于100万立项审批',
                label: '小于100万立项审批'
            }],
            fileList:[],
            splc:'',
        }
    },
    methods: {
        // 实施计划登记表格的新增一行
        addOption() {
            this.tableData.push({})
        },
        // 实施计划登记表格的删除
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },
    }
}
</script>

<style lang="scss" scoped>

.upload-demo {
    width: 150px;
    color:#165DFF;
    font-size: 26px;
}
</style>