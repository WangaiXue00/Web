<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" size="small">
        <el-form-item label="题目：" label-width="100px">
            <el-input v-model="form.tm" style="width: 70%;"></el-input>
            <span style="font-size: 12px;margin-left: 5px;">填空位置请用下划线标明</span>
        </el-form-item>
        <el-form-item label="题目类别：" label-width="100px">
            <el-select v-model="form.tmlb" placeholder="请选择题目类别" style="width: 35%;">
            <el-option label="技术类" value="技术类"></el-option>
            <el-option label="管理类" value="管理类"></el-option>
            <el-option label="财务类" value="财务类"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="题型：" label-width="100px">
            <el-radio-group v-model="form.tx" @change="txChange">
                <el-radio label="单选"></el-radio>
                <el-radio label="多选"></el-radio>
                <el-radio label="判断"></el-radio>
                <el-radio label="填空"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="得分：" label-width="100px">
            <el-input v-model="form.df" style="width: 35%;"></el-input>
        </el-form-item>
        <el-form-item label="选项：" label-width="100px" v-if="form.tx == '单选'||form.tx == '多选'">
            <el-table
                :data="form.optionData"
                style="width: 100%">
                <el-table-column
                type="index"
                :index="indexMethod">
                </el-table-column>
                <el-table-column
                prop="xx"
                label="选项"
                width="400">
                    <template slot-scope="scope">
                        <el-input
                        v-model="scope.row.xx"
                        size="mini"/>
                    </template>
                </el-table-column>
                <el-table-column
                prop="zqda"
                label="正确答案">
                    <template slot-scope="scope">
                        <el-checkbox v-model="scope.row.zqda"></el-checkbox>
                    </template>
                </el-table-column>
                <el-table-column
                    align="right">
                    <template slot="header" slot-scope>
                        <el-button type="primary" icon="el-icon-plus" circle @click="addOption"></el-button>
                    </template>
                    <template slot-scope="scope">
                        <el-button
                        @click.native.prevent="deleteRow(scope.$index, form.optionData)"
                        type="text"
                        size="small">
                        删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-form-item>
        <el-form-item label="答案：" label-width="100px" v-if="form.tx == '判断'">
            <el-radio-group v-model="form.radioAnswer">
            <el-radio label="对"></el-radio>
            <el-radio label="错"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="答案：" label-width="100px" v-if="form.tx == '填空'">
            <el-input v-model="form.fillAnswer" style="width:35%;"></el-input>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    name:"titleForm",
    props: [ "editForm" ],
    data() {
        return {
            form:{
                tm:'',
                tmlb:'',
                tx:'单选',
                df:null,
                optionData:[],
                radioAnswer:'',
                fillAnswer:''
            }
        }
    },
    created() {
        if (this.editForm) {
            this.form = this.editForm
        }
    },
    methods: {
      indexMethod(index) {
        return String.fromCharCode(index +'A'.charCodeAt() );
      },
      //新增选项
      addOption() {
        const obj = {
            xx:'',
            zqda:''
        }
        this.form.optionData.push(obj)
      },
    //   题型变化使form为空
      txChange(value){
        console.log(value)
        if(value==='单选' || value === '多选') { 
            this.form.radioAnswer = '',
            this.form.fillAnswer = ''
        } else if (value === '填空') {
            this.form.radioAnswer = '',
            this.form.optionData = []
        } else {
            this.form.fillAnswer = '',
            this.form.optionData = []
        }
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    }
}
</script>

<style scoped lang="scss">
::v-deep .el-form-item__label {
    font-size: 14px;
    font-weight: 500;
}
::v-deep .el-form-item {
    margin-bottom: 8px;
}
</style>