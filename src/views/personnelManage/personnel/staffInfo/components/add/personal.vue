<template>
  <div class="dialog">
    <el-tag class="dialog-tag">个人信息</el-tag>
    <el-form label-width="130px" :model="personalData" size="small">
      <el-row :gutter="20">
        <el-col :span="8">
          <div>
            <el-form-item label="性别:">
              <el-radio v-model="personalData.sex" label="1">男</el-radio>
              <el-radio v-model="personalData.sex" label="2">女</el-radio>
            </el-form-item>
            <el-form-item label="年龄:">
              <el-input v-model="personalData.age"></el-input>
            </el-form-item>
            <el-form-item label="籍贯:">
              <el-input v-model="personalData.jiguan"></el-input>
            </el-form-item>
            <el-form-item label="婚育情况:">
              <el-input v-model="personalData.hyqk"></el-input>
            </el-form-item>
            <el-form-item label="现居地址（详细）:">
              <el-input v-model="personalData.xjdz"></el-input>
            </el-form-item>
            <el-form-item label="首次参加工作年月:">
              <el-date-picker v-model="personalData.sccjgzny" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="工会会员号:">
              <el-input v-model="personalData.ghhyh"></el-input>
            </el-form-item>
            <el-form-item label="开户行:">
              <el-input v-model="personalData.khh"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="民族:">
              <el-input v-model="personalData.nation"></el-input>
            </el-form-item>
            <el-form-item label="身份证号码:">
              <el-input v-model="personalData.sfzh"></el-input>
            </el-form-item>
            <el-form-item label="员工出生日期:">
              <el-date-picker v-model="personalData.ygcsrq" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="户籍地址（详细）:">
              <el-input v-model="personalData.hjdz"></el-input>
            </el-form-item>
            <el-form-item label="居住证号码:">
              <el-input v-model="personalData.jzzhm"></el-input>
            </el-form-item>
            <el-form-item label="入职前工作年限:">
              <el-input v-model="personalData.rzqgznx"></el-input>
            </el-form-item>
            <el-form-item label="个人公积金账号:">
              <el-input v-model="personalData.grgjjzh"></el-input>
            </el-form-item>
            <el-form-item label="支行信息:">
              <el-input v-model="personalData.zhxx"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="政治面貌:">
              <el-input v-model="personalData.zzmm"></el-input>
            </el-form-item>
            <el-form-item label="身份证有效期:">
              <el-date-picker v-model="personalData.sfzyxq" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="员工生日:">
              <el-input v-model="personalData.ygsr"></el-input>
            </el-form-item>
            <el-form-item label="户口性质:">
              <el-input v-model="personalData.hkxz"></el-input>
            </el-form-item>
            <el-form-item label="是否办理居住证积分:">
              <el-input v-model="personalData.sfbljzzjf"></el-input>
            </el-form-item>
            <el-form-item label="工作总年限:">
              <el-input v-model="personalData.gzznx"></el-input>
            </el-form-item>
            <el-form-item label="银行账号:">
              <el-input v-model="personalData.yhzh"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
    </el-form>

  </div>
</template>

<script>


export default {
  name: "Personal",
  data() {
    return {
      personalData: {
        sex: '',
        nation: '',
        zzmm: '',
        age: '',
        sfzh: '',
        sfzyxq: '',
        jiguan: '',
        ygcsrq: '',
        ygsr: '',
        hyqk: '',
        hjdz: '',
        hkxz: '',
        xjdz: '',
        jzzhm: '',
        sfbljzzjf: '',
        sccjgzny: '',
        rzqgznx: '',
        gzznx: '',
        ghhyh: '',
        grgjjzh: '',
        yhzh: '',
        khh: '',
        zhxx: ''
      }
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-form-item__label {
  font-size: 13px;
  font-weight: 500;
}

.el-form-item--small {
  margin-bottom: 6px;
}
</style>