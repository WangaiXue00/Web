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
        </el-table-column>
        <el-table-column
        prop="ksrq"
        label="开始日期">
        </el-table-column>
        <el-table-column
        prop="jsrq"
        label="结束日期">
        </el-table-column>
        <el-table-column
        prop="jhnr"
        label="计划内容">
        </el-table-column>
        <el-table-column
        prop="cyry"
        label="参于人员">
        </el-table-column>
    </el-table>
    <el-descriptions class="margin-top" :column="1" :labelStyle="{'width':'180px'}" border>
        <el-descriptions-item label="审批意见：" ></el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
name: "showTable",
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
        }
    }
}
</script>

<style>

</style>