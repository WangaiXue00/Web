<template>
    <!-- 项目实施 -->
    <div class="assistant">
        <div class="top-form">
            <el-form :inline="true" :model="formInline" size="small">
                <el-form-item label="立项编号:">
                <el-input v-model="formInline.lxbh"
                    placeholder="请输入立项编号"
                    style="width: 130px;"></el-input>
                </el-form-item>
                <el-form-item label="项目名称:">
                <el-input v-model="formInline.xmmc"
                    placeholder="请输入项目名称"
                    style="width: 130px;"></el-input>
                </el-form-item>
                <el-form-item label="客户名称:">
                <el-select v-model="formInline.khmc" 
                    clearable
                    placeholder="请选择"
                    style="width: 100px;">
                    <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                </el-form-item>
                <el-form-item label="项目进度:">
                <el-select v-model="formInline.xmjd" 
                    clearable
                    placeholder="请选择"
                    style="width: 100px;">
                    <el-option
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                </el-form-item>
                <el-form-item label="项目发起人:">
                <el-select v-model="formInline.xmfqr" 
                    clearable
                    placeholder="请选择"
                    style="width: 100px;">
                    <el-option
                    v-for="item in options3"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                </el-form-item>
                <!-- <el-form-item label="立项时间:">
                <el-date-picker
                    v-model="formInline.lxsj"
                    type="date"
                    value-format="yyyy-MM-dd"
                    placeholder="选择日期"
                    style="width: 120px;">
                </el-date-picker>
                </el-form-item> -->
                <el-form-item>
                <el-button type="primary" @click="inquirer" icon="el-icon-search">查询</el-button>
                </el-form-item>
            </el-form>
            <div class="top-button">
                <el-button type="primary" icon="el-icon-circle-plus" @click="addDialogVisible = true">新增实施计划</el-button>
            </div>
        </div>
        <div>
            <el-table
                :data="tableData"
                height="calc(100vh - 235px)"
                fit
                :header-cell-style="{background: '#165DFF',color:'#fff',font:'500 14px PingFang SC'}"
                style="width: 100%">
                <el-table-column
                type="index"
                fixed
                label="序号"
                width="50">
                </el-table-column>
                <el-table-column
                prop="xmdh"
                label="项目单号">
                </el-table-column>
                <el-table-column
                prop="xmmc"
                label="项目名称">
                </el-table-column>
                <el-table-column
                prop="sqrq"
                label="申请日期">
                </el-table-column>
                <el-table-column
                prop="ywlx"
                label="业务类型">
                </el-table-column>
                <el-table-column
                prop="xsry"
                label="销售人员"
                min-width="100">
                </el-table-column>
                <el-table-column
                prop="xmfqr"
                label="项目发起人"
                min-width="100">
                </el-table-column>
                <el-table-column
                prop="ywbm"
                label="业务部门">
                </el-table-column>
                <el-table-column
                prop="khmc"
                label="客户名称"
                show-overflow-tooltip
                min-width="120">
                </el-table-column>
                <el-table-column
                prop="htbh"
                label="合同编号">
                </el-table-column>
                <el-table-column
                fixed="right"
                label="操作"
                align="center"
                width="120">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="showTable(scope.row)">查看</el-button>
                    <el-button type="text" size="small" @click="editTable(scope.row)">修改</el-button>
                    <!-- <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">删除</el-button> -->
                </template>
                </el-table-column>
            </el-table>
        </div>
        <!-- 新增实施计划 -->
        <el-dialog
            title="新增实施计划"
            :visible.sync="addDialogVisible"
            width="60%"
            :before-close="handleClose">
            <addEdit />
            <span slot="footer" class="dialog-footer">
                <el-button @click="addDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addDialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 修改实施计划 -->
        <el-dialog
            title="修改实施计划"
            :visible.sync="editDialogVisible"
            width="60%"
            :before-close="handleClose">
            <addEdit />
            <span slot="footer" class="dialog-footer">
                <el-button @click="editDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="editDialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 查看实施计划 -->
        <el-dialog
            title="查看实施计划"
            :visible.sync="showDialogVisible"
            width="60%"
            :before-close="handleClose">
            <showTable />
            <span slot="footer" class="dialog-footer">
                <el-button @click="showDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="showDialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import addEdit from "./components/addEdit.vue"
import showTable from "./components/showTable.vue"
export default {
    name: "implementation",
    components: {addEdit,showTable},
    data() {
        return { 
            addDialogVisible:false,
            editDialogVisible:false,
            showDialogVisible:false,
            formInline:{},
            tableData:[{},{}],
            options1:[{
                value: '医院1',
                label: '医院1'
            },{
                value: '医院2',
                label: '医院2'
            }],
            options2:[{
                value: '进度1',
                label: '进度1'
            },{
                value: '进度2',
                label: '进度2'
            }],
            options3:[{
                value: '发起人1',
                label: '发起人1'
            },{
                value: '发起人2',
                label: '发起人2'
            }],
        }
    },
    methods: {
        inquirer() {
        },
        showTable(row) {
            console.log(row)
            this.showDialogVisible = true
        },
        editTable(row) {
            console.log(row)
            this.editDialogVisible = true
        },
        // 弹框退出确认
        handleClose(done) {
            this.$confirm('确认关闭？')
            .then(_ => {
                done();
            })
            .catch(_ => {});
        }
    }
}
</script>

<style scoped lang="scss">
@import '../../../../assets/styles/appMain.css';
::v-deep .el-descriptions__header {
  position: relative;
  padding: 5px 0;
}
::v-deep .el-descriptions__title {
  position: absolute;
  top: 0;
  left: 40%;
}
::v-deep .el-descriptions-item__label {
  text-align: right !important;
}
.top-button {
  position: absolute;
  top: 0;
  right: 0;
}
</style>