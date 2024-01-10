<template>
  <div class="addMax">
    <div>
      <!-- 基本信息 -->
      <el-tag class="dialog-tag">基本信息</el-tag>
      <el-form label-width="120px" :model="form" size="small" ref="formRef">
        <el-row :gutter="20">
          <el-col :span="8">
            <div>
              <el-form-item label="职位名称:">
                <el-input v-model="form.zwmc"></el-input>
              </el-form-item>
              <el-form-item label="隶属部门:">
                <el-input v-model="form.lsbm"></el-input>
              </el-form-item>
              <el-form-item label="编制人数:">
                <el-input v-model="form.bzrs"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <el-form-item label="职位编号:">
                <el-input v-model="form.bh"></el-input>
              </el-form-item>
              <el-form-item label="职级:">
                <el-input v-model="form.zj"></el-input>
              </el-form-item>
              <el-form-item label="晋升通道:">
                <el-input v-model="form.jstd"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <el-form-item label="岗位序列:">
                <el-input v-model="form.gwxl"></el-input>
              </el-form-item>
              <el-form-item label="薪资区间:">
                <el-input v-model="form.xzqj"></el-input>
              </el-form-item>
              <el-form-item label="职位概述:">
                <el-input v-model="form.zwgs"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>

      <!-- 工作关系 -->
      <el-tag class="dialog-tag">工作关系</el-tag>
      <el-form label-width="130px" :model="form" size="small" ref="formRef">
        <el-row :gutter="20">
          <el-col :span="8">
            <div>
              <el-form-item label="上级职位:">
                <el-input v-model="form.sjzw"></el-input>
              </el-form-item>
              <el-form-item label="内部沟通对象:">
                <el-input v-model="form.nbgtdx"></el-input>
              </el-form-item>
              <el-form-item label="可升迁至此的职位:">
                <el-input v-model="form.ksqzcdzw"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <el-form-item label="同部门同职级岗位:">
                <el-input v-model="form.tbmtzjgw"></el-input>
              </el-form-item>
              <el-form-item label="外部沟通对象:">
                <el-input v-model="form.wbgtdx"></el-input>
              </el-form-item>
              <el-form-item label="可转换至此的职位:">
                <el-input v-model="form.kzhzcdzw"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <el-form-item label="直接下属人数:">
                <el-input v-model="form.zjxsrs"></el-input>
              </el-form-item>
              <el-form-item label="全部下属人数:">
                <el-input v-model="form.qbxsrs"></el-input>
              </el-form-item>
              <el-form-item label="职位关系图:">
                <el-upload class="upload-demo" action="http://123.57.56.30:8080/system/info/add" multiple>
                  <i class="el-icon-upload2" style="font-size: 35px; color: #1890ff; font-weight: 600;"></i>
                </el-upload>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>

      <!-- 任职资格 -->
      <el-tag class="dialog-tag">任职资格</el-tag>
      <el-form label-width="120px" :model="form" size="small" ref="formRef">
        <el-row :gutter="20">
          <el-col :span="8">
            <div>
              <el-form-item label="基本要求:">
                <el-input v-model="form.jbyq"></el-input>
              </el-form-item>
              <el-form-item label="能力、素质:">
                <el-input v-model="form.nlsz"></el-input>
              </el-form-item>
              <el-form-item label="语言能力:">
                <el-input v-model="form.yynl"></el-input>
              </el-form-item>
              <el-form-item label="其他特殊技能:">
                <el-input v-model="form.qttsjn"></el-input>
              </el-form-item>
              <el-form-item label="其他:">
                <el-input v-model="form.qt"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <el-form-item label="教育背景:">
                <el-input v-model="form.jybj"></el-input>
              </el-form-item>
              <el-form-item label="专业知识:">
                <el-input v-model="form.zyzs"></el-input>
              </el-form-item>
              <el-form-item label="计算机能力:">
                <el-input v-model="form.jsjnl"></el-input>
              </el-form-item>
              <el-form-item label="业务了解范围:">
                <el-input v-model="form.ywljfw"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <el-form-item label="工作经验:">
                <el-input v-model="form.gzjy"></el-input>
              </el-form-item>
              <el-form-item label="业务技能:">
                <el-input v-model="form.ywjn"></el-input>
              </el-form-item>
              <el-form-item label="公文写作能力:">
                <el-input v-model="form.gwxznl"></el-input>
              </el-form-item>
              <el-form-item label="个性素养:">
                <el-input v-model="form.gxsy"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>

      <!-- 胜任力 -->
      <el-tag class="dialog-tag">胜任力</el-tag>
      <el-form label-width="130px" :model="form" size="small" ref="formRef">
        <el-row :gutter="20">
          <el-col :span="8">
            <div>
              <el-form-item label="关键能力描述(知识):">
                <el-input v-model="form.gjnlmszs"></el-input>
              </el-form-item>
              <el-form-item label="关键能力描述(能力):">
                <el-input v-model="form.gjnlmsnl"></el-input>
              </el-form-item>
              <el-form-item label="关键能力描述(特质):">
                <el-input v-model="form.gjnlmstz"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <el-form-item label="程度(知识):">
                <el-input v-model="form.cdzs"></el-input>
              </el-form-item>
              <el-form-item label="程度(能力):">
                <el-input v-model="form.cdnl"></el-input>
              </el-form-item>
              <el-form-item label="程度(特质):">
                <el-input v-model="form.cdtz"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <el-form-item label="具体表现(知识):">
                <el-input v-model="form.jtbxzs"></el-input>
              </el-form-item>
              <el-form-item label="具体表现(能力):">
                <el-input v-model="form.jtbxnl"></el-input>
              </el-form-item>
              <el-form-item label="具体表现(特质):">
                <el-input v-model="form.jtbxtz"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>

      <!-- 工作特征 -->
      <el-tag class="dialog-tag">工作特征</el-tag>
      <el-form label-width="120px" :model="form" size="small" ref="formRef">
        <el-row :gutter="20">
          <el-col :span="8">
            <div>
              <el-form-item label="室内(%):">
                <el-input v-model="form.sn"></el-input>
              </el-form-item>
              <el-form-item label="使用工具/设备:">
                <el-input v-model="form.sygjsb"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <el-form-item label="室外(%):">
                <el-input v-model="form.sw"></el-input>
              </el-form-item>
              <el-form-item label="职业危害:">
                <el-input v-model="form.zywh"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <el-form-item label="特殊场所(%):">
                <el-input v-model="form.tscs"></el-input>
              </el-form-item>
              <el-form-item label="加班情况:">
                <el-input v-model="form.jbqk"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>


      <!-- 权责范围 -->
      <el-tag class="dialog-tag">权责范围</el-tag>
      <el-form label-width="120px" :model="form" size="small" ref="formRef">
        <el-row :gutter="20">
          <el-col :span="8">
            <div>
              <el-form-item label="财务权限(%):">
                <el-input v-model="form.cwqx"></el-input>
              </el-form-item>
              <el-form-item label="责任(%):">
                <el-input v-model="form.zr"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <el-form-item label="人事权限(%):">
                <el-input v-model="form.rsqx"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <el-form-item label="业务权限(%):">
                <el-input v-model="form.ywqx"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>

      <!-- 绩效标准 -->
      <el-tag class="dialog-tag">绩效标准</el-tag>
      <el-form label-width="130px" :model="form" size="small" ref="formRef">
        <el-row :gutter="20">
          <el-col :span="8">
            <div>
              <el-form-item label="工作业绩(限1-4项):">
                <el-input v-model="form.gzyj"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <el-form-item label="技能/能力(限1-4项):">
                <el-input v-model="form.jnnl"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <el-form-item label="行为态度(限1-4项):">
                <el-input v-model="form.xwtd"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16">
            <el-form-item label="中长期考核(根据年度计划或临时性重要工作而定):" label-width="170px">
              <el-input type="textarea" :rows="2" v-model="form.zcqkh">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <!-- 审核编制 -->
      <el-tag class="dialog-tag">审核编制</el-tag>
      <el-form label-width="120px" :model="form" size="small" ref="formRef">
        <el-row :gutter="20">
          <el-col :span="8">
            <div>
              <el-form-item label="制表:">
                <el-input v-model="form.zb"></el-input>
              </el-form-item>
              <el-form-item label="编制日期:">
                <el-date-picker v-model="form.bzrq" type="date" placeholder="选择日期" style="width: 100%;">
                </el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <el-form-item label="批准:">
                <el-input v-model="form.pz"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <el-form-item label="审核:">
                <el-input v-model="form.sh"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>


      <!-- 工作职责 -->
      <el-tag class="dialog-tag">工作职责</el-tag>
      <el-button type="primary" plain size="small" @click="addDataWork">新增</el-button>
      <el-table :data="workDutyData" style="width: 100%">
        <el-table-column type="index" label="序号" width="80">
        </el-table-column>
        <el-table-column prop="zwmk " label="职责模块">
          <template slot-scope="scope">
            <el-input v-model="scope.row.zwmk" size="small"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="zzxz" label="职责细则">
          <template slot-scope="scope">
            <el-input v-model="scope.row.zzxz" size="small"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="zq" label="周期">
          <template slot-scope="scope">
            <el-input v-model="scope.row.zq" size="small"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="zhl" label="权重(%)">
          <template slot-scope="scope">
            <el-input v-model="scope.row.zhl" size="small"></el-input>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope">
            <el-button @click.native.prevent="deleteRow(scope.$index, workDutyData)" type="text" size="small">
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

  </div>
</template>
<script>
export default {
  name: "addModify",
  props: ["editForm", "workData"],
  data() {
    return {
      //基本信息
      form: {},
      form1: {},
      // 工作职责
      workDutyData: [{}]
    }
  },
  created() {
    if (this.editForm) {
      this.form = this.editForm
      this.workDutyData = this.workData
    }
    // console.log(this.editForm);
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    // 工作职责
    addDataWork() {
      const obj = {}
      this.workDutyData.push(obj)
    },
  }
}
</script>
<style lang="scss">
.dialog-footer {
  text-align: right;
  margin-top: 30px;
}

.dialog-tag {
  display: inline-block;
  margin: 10px;
}

.el-form-item__label {
  font-size: 13px;
  font-weight: 500;
}

.el-form-item--small {
  margin-bottom: 6px;
}
</style>