<template>
  <el-dialog title="新增申请" append-to-body :visible.sync="addDialogVisible" @close="closeDialog" width="70%">
    <el-form :model="form">
      <el-form-item>
        <el-form :inline="true">
          <el-form-item label="下单日期：">
            <el-date-picker v-model="form.xdrq" type="date" placeholder="选择日期" style="width: 120px;" size="small">
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
          <el-form-item label="关联单号">
            <el-input v-model="form.gldh" style="width: 120px;" size="small"></el-input>
          </el-form-item>
        </el-form>
      </el-form-item>
      <el-form-item>
        <el-form :inline="true">
          <el-form-item label="客户名称：">
            <el-input v-model="form.khmc" style="width: 120px;" size="small"></el-input>
          </el-form-item>
          <el-form-item label="使用部门：">
            <el-input v-model="form.sybm" style="width: 120px;" size="small"></el-input>
          </el-form-item>
          <el-form-item label="费用类型：">
            <el-select v-model="form.fylx" placeholder="请选择" style="width: 120px;" size="small">
              <el-option label="自主维保费" value="自主维保费"></el-option>
            </el-select>
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
          <el-form-item label="开票金额：">
            <el-input v-model="form.kpje" style="width: 100px;" size="small"></el-input>
            <span> 元 </span>
          </el-form-item>
          <el-form-item label="采购专员：">
            <el-input v-model="form.cgzy" style="width: 120px;" size="small"></el-input>
          </el-form-item>
          <el-form-item label="经办人：">
            <el-input v-model="form.jbr" placeholder="管理员" style="width: 120px;" size="small"></el-input>
          </el-form-item>
        </el-form>
      </el-form-item>
      <el-form-item>
        <el-form :inline="true">
          <el-form-item label="设备品牌：">
            <el-input v-model="form.sbpp" style="width: 120px;" size="small"></el-input>
          </el-form-item>
          <el-form-item label="设备名称：">
            <el-input v-model="form.sbmc" style="width: 120px;" size="small"></el-input>
          </el-form-item>
          <el-form-item label="设备型号：">
            <el-input v-model="form.sbxh" style="width: 120px;" size="small"></el-input>
          </el-form-item>
        </el-form>
      </el-form-item>
      <el-form-item>
        <el-form :inline="true">
          <el-form-item label="故障代码：">
            <el-input v-model="form.gzdm" style="width: 120px;" size="small"></el-input>
          </el-form-item>
          <el-form-item label="故障描述：">
            <el-input v-model="form.gzms" style="width: 120px;" size="small"></el-input>
          </el-form-item>
          <el-form-item label="需求日期：">
            <el-date-picker v-model="form.xqrq" type="date" placeholder="选择日期" style="width: 120px;" size="small">
            </el-date-picker>
          </el-form-item>
        </el-form>
      </el-form-item>
      <el-form-item>
        <el-form :inline="true">
          <el-form-item label="备注：">
            <el-input v-model="form.bz" style="width: 120px;" size="small"></el-input>
          </el-form-item>
          <!-- <el-form-item label="故障照片：">
            <el-input style="width: 120px;" size="small"></el-input>
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
  name: 'AddRequest',
  props: ['editData'],
  data() {
    return {
      // dialog显示框
      addDialogVisible: true,
      // form表单新增修改数据
      form: {
        xdrq: '',
        ywgsr: '',
        ywbm: '',
        xmz: '',
        dq: '',
        cglx: '',
        gldh: '',
        khmc: '',
        sybm: '',
        fylx: '',
        ywlx: '',
        glxm: '',
        htbh: '',
        kpje: '',
        cgzy: '',
        jbr: '',
        sbpp: '',
        sbmc: '',
        sbxh: '',
        gzdm: '',
        gzms: '',
        xqrq: '',
        bz: '',
      }
    }
  },
  mounted() {
    if (this.editData) {
      console.log(111);
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