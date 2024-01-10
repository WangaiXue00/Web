<template>
  <div>
    <!-- 基本信息 -->
    <el-tag class="dialog-tag">基本信息</el-tag>
    <el-form label-width="120px" :model="basicInfoData" size="small">
      <el-row :gutter="20">
        <el-col :span="8">
          <div>
            <el-form-item label="姓名:">
              <el-input v-model="basicInfoData.xm"></el-input>
            </el-form-item>
            <el-form-item label="所属部门:">
              <el-input v-model="basicInfoData.ssbm"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="员工号:">
              <el-input v-model="basicInfoData.ygh"></el-input>
            </el-form-item>
            <el-form-item label="职位:">
              <el-input v-model="basicInfoData.zw"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="入职日期:">
              <el-date-picker v-model="basicInfoData.rzrq" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
    </el-form>

    <!-- 基本薪资 -->
    <el-tag class="dialog-tag">基本薪资</el-tag>
    <el-form label-width="130px" :model="basicSalary" size="small">
      <el-row :gutter="20">
        <el-col :span="8">
          <div>
            <el-form-item label="发放月份:">
              <el-date-picker v-model="workDate" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd"
                placeholder="选择月份" style="width: 100%;" clearable @change="changeDate(basicSalary.gzyf)">
              </el-date-picker>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="标准薪资:">
              <el-input v-model="basicSalary.bzxz"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="实发工资:">
              <el-input v-model="basicSalary.sfgz"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
    </el-form>

    <!-- 增项 -->
    <el-tag class="dialog-tag">增项</el-tag>
    <el-form label-width="130px" :model="basicSalary" size="small">
      <el-row :gutter="20">
        <el-col :span="8">
          <div>
            <el-form-item label="奖金:">
              <el-input v-model="basicSalary.jj"></el-input>
            </el-form-item>
            <el-form-item label="加班费:">
              <el-input v-model="basicSalary.jbf"></el-input>
            </el-form-item>
            <el-form-item label="其他增项:">
              <el-input v-model="basicSalary.qtzx"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="提成:">
              <el-input v-model="basicSalary.tc"></el-input>
            </el-form-item>
            <el-form-item label="值备班:">
              <el-input v-model="basicSalary.zbb"></el-input>
            </el-form-item>
            <el-form-item label="增项合计:">
              <el-input v-model="basicSalary.zxhj"></el-input>
            </el-form-item>

          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="高温费:">
              <el-input v-model="basicSalary.gwf"></el-input>
            </el-form-item>
            <el-form-item label="补发:">
              <el-input v-model="basicSalary.bf"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
    </el-form>

    <!-- 减项 -->
    <el-tag class="dialog-tag">减项</el-tag>
    <el-form label-width="130px" :model="basicSalary" size="small">
      <el-row :gutter="20">
        <el-col :span="8">
          <div>
            <el-form-item label="事假:">
              <el-input v-model="basicSalary.sj"></el-input>
            </el-form-item>
            <el-form-item label="减项合计:">
              <el-input v-model="basicSalary.jxhj"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="病假:">
              <el-input v-model="basicSalary.bj"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="其他扣款:">
              <el-input v-model="basicSalary.qtkk"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
    </el-form>

    <!-- 代扣 -->
    <el-tag class="dialog-tag">代扣</el-tag>
    <el-form label-width="140px" :model="basicSalary" size="small">
      <el-row :gutter="20">
        <el-col :span="8">
          <div>
            <el-form-item label="社保个人缴纳部分:">
              <el-input v-model="basicSalary.sbgrjnbf"></el-input>
            </el-form-item>
            <el-form-item label="公积金公司缴纳部分:">
              <el-input v-model="basicSalary.gjjgsjnbf"></el-input>
            </el-form-item>

          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="社保公司缴纳部分:">
              <el-input v-model="basicSalary.sbgsjnbf"></el-input>
            </el-form-item>
            <el-form-item label="个人所得税:">
              <el-input v-model="basicSalary.grsds"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="公积金个人缴纳部分:">
              <el-input v-model="basicSalary.gjjgrjnbf"></el-input>
            </el-form-item>
            <el-form-item label="个人代扣合计:">
              <el-input v-model="basicSalary.grdkhj"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
    </el-form>

  </div>
</template>

<script>


export default {
  name: 'AddModify',
  components: {},
  props: ["editList", "bascsalary"],
  data() {
    return {
      form: {},
      workDate: '',
      // 基本信息
      basicInfoData: {},
      basicSalary: {}
    }
  },
  created() {
    if (this.editList) {
      this.basicInfoData = this.editList
      if (this.bascsalary.length !== 0) {
        this.basicSalary = this.bascsalary[this.bascsalary.length - 1]
        this.workDate = this.basicSalary.gzyf
      }
    }
  },
  destroyed() {
    // console.log(this.basicSalary);
  },
  watch: {
    "workDate"(newV, oldV) {
      if (this.editList && this.bascsalary.length !== 0) {
        // console.log('子组件1', this.bascsalary[0].gzyf);
        // console.log('子组件2', this.workDate);

        this.bascsalary.forEach(item => {
          // console.log('111', item.gzyf);
          if (item.gzyf === newV) {
            this.basicSalary = item;
            // console.log('222', newV);
          } else {
            this.basicSalary = {}
          }
        })
      }
    }
  },


  methods: {
    changeDate(gzyf) {
      // if (this.editList && this.bascsalary.length !== 0) {
      //   this.bascsalary.forEach(item => {
      //     if (item.gzyf == gzyf) {
      //       this.basicSalary = item;
      //     } else {
      //       this.basicSalary = {}
      //     }
      //   })
      // }
    },
  }
}
</script>

<style lang="scss">
.el-form-item__label {
  font-size: 13px;
  font-weight: 500;
}

.el-form-item--small {
  margin-bottom: 6px;
}
</style>