<template>
  <el-dialog title="新增订单" :visible.sync="addDialogVisible" @close="closeDialog" width="70%">
    <el-form :model="form">
      <el-form-item>
        <el-form :inline="true">
          <el-form-item label="采购日期：">
            <el-date-picker v-model="form.cgrq" type="date" placeholder="选择日期" style="width: 120px;" size="small">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="业务归属人：">
            <el-select v-model="form.ywgsr" placeholder="请选择" style="width: 120px;" size="small">
              <el-option label="ccc" value="ccc"></el-option>
              <el-option label="ddd" value="ddd"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="业务部门：">
            <el-select v-model="form.ywbm" placeholder="请选择" style="width: 120px;" size="small">
              <el-option label="ccc" value="ccc"></el-option>
              <el-option label="ddd" value="ddd"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="项目组：">
            <el-input v-model="form.xmz" style="width: 120px;" size="small"></el-input>
          </el-form-item>
          <el-form-item label="地区：">
            <el-select v-model="form.dq" placeholder="请选择" style="width: 120px;" size="small">
              <el-option label="ccc" value="ccc"></el-option>
              <el-option label="ddd" value="ddd"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-form-item>
      <el-form-item>
        <el-form :inline="true">
          <el-form-item label="采购类型：">
            <el-radio-group v-model="form.cglx">
              <el-radio label="单次服务">单次服务</el-radio>
              <el-radio label="零配件">零配件</el-radio>
              <el-radio label="设备">设备</el-radio>
              <el-radio label="年度服务">年度服务</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="经办人：">
            <el-input v-model="form.jbr" placeholder="管理员" style="width: 120px;" size="small"></el-input>
          </el-form-item>
          <el-form-item label="采购申请单：">
            <el-input v-model="form.cgsqd" placeholder="管理员" style="width: 120px;" size="small"></el-input>
          </el-form-item>
        </el-form>
      </el-form-item>
      <el-form-item>
        <el-form :inline="true">
          <el-form-item label="业务类型：">
            <el-select v-model="form.ywlx" placeholder="请选择" style="width: 120px;" size="small">
              <el-option label="球管保修" value="球管保修"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="客户名称：">
            <el-input v-model="form.khmc" style="width: 120px;" size="small"></el-input>
          </el-form-item>
          <el-form-item label="销售报价：">
            <el-input v-model="form.xsbj" style="width: 120px;" size="small"></el-input>
          </el-form-item>
        </el-form>
      </el-form-item>
      <el-form-item>
        <el-form :inline="true">
          <el-form-item label="供应商：">
            <el-input v-model="form.gys" style="width: 120px;" size="small"></el-input>
          </el-form-item>
          <el-form-item label="联系人：">
            <el-input v-model="form.lxr" style="width: 120px;" size="small"></el-input>
          </el-form-item>
          <el-form-item label="联系电话：">
            <el-input v-model="form.lxdh" style="width: 120px;" size="small"></el-input>
          </el-form-item>

        </el-form>
      </el-form-item>
      <el-form-item>
        <el-form :inline="true">
          <el-form-item label="费用类型：">
            <el-select v-model="form.fylx" placeholder="请选择" style="width: 120px;" size="small">
              <el-option label="自主维保费" value="自主维保费"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="关联项目：">
            <el-input v-model="form.glxm" style="width: 120px;" size="small"></el-input>
          </el-form-item>
          <el-form-item label="合同编号：">
            <el-input v-model="form.htbh" style="width: 120px;" size="small"></el-input>
          </el-form-item>
        </el-form>
      </el-form-item>
      <el-form-item>
        <el-form :inline="true">
          <el-form-item label="入库仓库：">
            <el-input v-model="form.rkck" style="width: 120px;" size="small"></el-input>
          </el-form-item>
          <!-- <el-form-item label="附件：">
            <el-input v-model="form.sbmc" style="width: 120px;" size="small"></el-input>
          </el-form-item> -->
        </el-form>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">取 消</el-button>
      <el-button type="primary" @click="closeDialog">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: 'AddOrder',
  props: ['editData'],
  data() {
    return {
      // dialog显示框
      addDialogVisible: true,
      // form表单新增修改数据
      form: {
        cgrq: '',
        ywgsr: '',
        ywbm: '',
        xmz: '',
        dq: '',
        cglx: '',
        jbr: '',
        cgsqd: '',
        ywlx: '',
        khmc: '',
        xsbj: '',
        gys: '',
        lxr: '',
        lxdh: '',
        fylx: '',
        glxm: '',
        htbh: '',
        rkck: '',
      }
    }
  },
  mounted() {
    if (this.editData) {
      // console.log(111);
      this.form = this.editData
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close', false);
    }
  }
}
</script>
<style lang='less' scoped></style>