<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px" size="small">
      <el-row :gutter="20">
        <el-col :span="12">
          <div>
            <el-form-item label="产品编号：">
              <el-input v-model="form.cpbh"></el-input>
            </el-form-item>
            <!-- 下拉列表 -->
            <el-form-item label="一级分类：">
              <el-input v-model="form.yjfl"></el-input>
            </el-form-item>
            <el-form-item label="属性类别：">
              <el-radio v-model="form.sxlb" label="1">整机</el-radio>
              <el-radio v-model="form.sxlb" label="2">配件</el-radio>
              <el-radio v-model="form.sxlb" label="3">耗材</el-radio>
            </el-form-item>
            <el-form-item label="规格型号：">
              <el-input v-model="form.ggxh"></el-input>
            </el-form-item>
            <el-form-item label="储运条件：">
              <el-radio v-model="form.cytj" label="1">常规</el-radio>
              <el-radio v-model="form.cytj" label="2">冷链</el-radio>
            </el-form-item>
            <el-form-item label="产品品牌：">
              <el-input v-model="form.cppp"></el-input>
            </el-form-item>
            <el-form-item label="成本价：">
              <el-input v-model="form.cbj"></el-input>
            </el-form-item>
            <el-form-item label="厂家产品编号：">
              <el-input v-model="form.cjcpbh"></el-input>
            </el-form-item>
            <el-form-item label="内部价：">
              <el-input v-model="form.nbj"></el-input>
            </el-form-item>
            <el-form-item label="产品名称：">
              <el-input v-model="form.cpmc"></el-input>
            </el-form-item>
            <el-form-item v-if="form.cpsx==='医疗类产品'" label="产品注册证：">
              <el-input v-model="form.cpzcz"></el-input>
            </el-form-item>
            <el-form-item v-if="form.cpsx==='医疗类产品'" label="产品备案凭证：">
              <el-input v-model="form.cpbapz"></el-input>
            </el-form-item>
            <el-form-item v-if="form.cpsx==='医疗类产品'" label-width="130px" label="生产企业许可证：">
              <el-input v-model="form.scqyxkz"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div>
            <el-form-item label="产品属性：">
              <el-radio-group v-model="form.cpsx" @change="txChange">
                <el-radio label="医疗类产品"></el-radio>
                <el-radio label="非医疗类产品"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="二级分类：">
              <el-input v-model="form.ejfl"></el-input>
            </el-form-item>
            <el-form-item label="供应商：">
              <el-input v-model="form.gys"></el-input>
            </el-form-item>
            <el-form-item label="计价单位：">
              <el-input v-model="form.jjdw"></el-input>
            </el-form-item>
            <el-form-item label="生产企业：">
              <el-input v-model="form.scqy"></el-input>
            </el-form-item>
            <el-form-item label="适配机型：">
              <el-input v-model="form.spjx"></el-input>
            </el-form-item>
            <el-form-item label="零售价：">
              <el-input v-model="form.lsj"></el-input>
            </el-form-item>
            <el-form-item label="内部价：">
              <el-input v-model="form.nbj"></el-input>
            </el-form-item>
            <el-form-item label="器械分类：">
              <el-select style="width: 100%;" v-model="form.qxfl">
                <el-option label="01有源手术器械" value="01有源手术器械">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="管理分类：">
              <el-select style="width: 100%;" v-model="form.glfl">
                <el-option label="Ⅰ类" value="Ⅰ类"></el-option>
                <el-option label="Ⅱ类" value="Ⅱ类"></el-option>
                <el-option label="Ⅲ类" value="Ⅲ类"></el-option>
                <el-option label="非医疗类" value="非医疗类"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item v-if="form.cpsx==='医疗类产品'" label="有效期限：">
              <el-input v-model="form.yxqx"></el-input>
            </el-form-item>
            <el-form-item v-if="form.cpsx==='医疗类产品'" label-width="140px" label="生产企业备案凭证：">
              <el-input v-model="form.scqybapz"></el-input>
            </el-form-item>
            <el-form-item v-if="form.cpsx==='医疗类产品'" label="有效期限：">
              <el-input v-model="form.yxqx"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>

    </el-form>
  </div>
</template>

<script>
export default {
  name: 'commonForm',
  props: ['editForm'],
  data() {
    return {
      form: {
        cpsx: '医疗类产品',
        yllcpList: {}
      }
    }
  },
  created() {
    if (this.editForm) {
      this.form = this.editForm
    }
  },
  methods: {
    //   题型变化使form为空
    // txChange(value) {
    //   console.log(value)
    //   if(value='医疗类产品'){
    //   }
    // }
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