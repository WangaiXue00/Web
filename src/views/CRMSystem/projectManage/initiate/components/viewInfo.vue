<template>
  <div>

    <!-- 项目跟踪 -->
    <div>
      <el-tag class="dialog-tag">项目跟踪</el-tag>
      <el-table :data="projectTrack" fit style="width: 100%;margin-bottom: 10px;" border>
        <el-table-column type="index" fixed label="序号" width="50">
        </el-table-column>
        <el-table-column prop="sqrq" label="拜访日期">
        </el-table-column>
        <el-table-column prop="sqrq" label="目的达成情况及沟通细节" min-width="130">
        </el-table-column>
        <el-table-column prop="sqrq" label="实施人">
        </el-table-column>
        <el-table-column prop="sqrq" label="拜访联系人">
        </el-table-column>
        <el-table-column prop="sqrq" label="联系电话">
        </el-table-column>
        <el-table-column prop="sqrq" label="支持人员">
        </el-table-column>
        <el-table-column prop="sqrq" label="成功率">
        </el-table-column>
      </el-table>
    </div>
    <!-- 审批流程 -->
    <div>
      <el-tag class="dialog-tag">审批流程</el-tag>
      <el-table :data="approvalProcess" fit style="width: 100%;margin-bottom: 10px;" border>
        <el-table-column type="index" fixed label="序号" width="50">
        </el-table-column>
        <el-table-column prop="sqrq" label="节点名称">
        </el-table-column>
        <el-table-column prop="sqrq" label="处理类型">
        </el-table-column>
        <el-table-column prop="sqrq" label="处理状态">
        </el-table-column>
        <el-table-column prop="sqrq" label="处理人">
        </el-table-column>
        <el-table-column prop="sqrq" label="处理时间">
        </el-table-column>
        <el-table-column prop="sqrq" label="备注">
        </el-table-column>
      </el-table>
    </div>
    <!-- 投标登记 -->
    <div>
      <el-tag class="dialog-tag">投标登记</el-tag>
      <el-table :data="Registration" fit style="width: 100%;margin-bottom: 10px;" border>
        <el-table-column type="index" fixed label="序号" width="50">
        </el-table-column>
        <el-table-column prop="sqrq" label="招标编号">
        </el-table-column>
        <el-table-column prop="sqrq" label="开标日期">
        </el-table-column>
        <el-table-column prop="sqrq" label="招标方式">
        </el-table-column>
        <el-table-column prop="sqrq" label="招标人名称">
        </el-table-column>
        <el-table-column prop="sqrq" label="招标代理人">
        </el-table-column>
        <el-table-column prop="sqrq" label="招标预算">
        </el-table-column>
        <el-table-column prop="sqrq" label="是否需要保证金">
        </el-table-column>
        <el-table-column prop="sqrq" label="保证金金额">
        </el-table-column>
      </el-table>
    </div>
    <!-- 投标付款 -->
    <div>
      <el-tag class="dialog-tag">投标付款</el-tag>
      <el-table :data="payment" fit style="width: 100%;margin-bottom: 10px;" border>
        <el-table-column type="index" fixed label="序号" width="50">
        </el-table-column>
        <el-table-column prop="sqrq" label="款项状态">
        </el-table-column>
        <el-table-column prop="sqrq" label="申请时间">
        </el-table-column>
        <el-table-column prop="sqrq" label="申请人">
        </el-table-column>
        <el-table-column prop="sqrq" label="款项类型">
        </el-table-column>
        <el-table-column prop="sqrq" label="付款金额">
        </el-table-column>
        <el-table-column prop="sqrq" label="付款日期">
        </el-table-column>
        <el-table-column prop="sqrq" label="退还日期">
        </el-table-column>
        <el-table-column prop="sqrq" label="支付日期">
        </el-table-column>
        <el-table-column prop="sqrq" label="支付凭证">
        </el-table-column>
        <el-table-column prop="sqrq" label="余额">
        </el-table-column>
      </el-table>
    </div>
    <!-- 项目附件 -->
    <div>
      <el-tag class="dialog-tag">项目附件</el-tag>
      <el-table :data="projectFile" fit style="width: 100%;margin-bottom: 10px;" border>
        <el-table-column type="index" fixed label="序号" width="50">
        </el-table-column>
        <el-table-column prop="sqrq" label="类型">
        </el-table-column>
        <el-table-column prop="sqrq" label="附件">
        </el-table-column>
        <el-table-column prop="sqrq" label="创建人">
        </el-table-column>
        <el-table-column prop="sqrq" label="创建时间">
        </el-table-column>
      </el-table>
    </div>
    <!-- 操作日志 -->
    <div>
      <el-tag class="dialog-tag">操作日志</el-tag>
      <el-table :data="operationLog" fit style="width: 100%;margin-bottom: 10px;" border>
        <el-table-column type="index" fixed label="序号" width="50">
        </el-table-column>
        <el-table-column prop="sqrq" label="操作时间">
        </el-table-column>
        <el-table-column prop="sqrq" label="操作人">
        </el-table-column>
        <el-table-column prop="sqrq" label="操作内容">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "viewInfo",
  props: ["editList"],
  data() {
    return {
      // 项目跟踪
      projectTrack: [{}],
      // 审批流程
      approvalProcess: [{}],
      // 立项申请
      projectApply: [{}],
      // 投标登记
      Registration: [{}],
      // 投标付款
      payment: [{}],
      // 项目附件
      projectFile: [{}],
      // 操作日志
      operationLog: [{}]
    }
  },
  created() {
    // console.log('111111111', this.isMedical);
    // console.log(this.editList)
    // if (this.editList) {
    //   this.form = JSON.parse(JSON.stringify(this.editList))
    //   // console.log(this.form,'form')
    // } else {
    //   this.form = {

    //   }
    // }
  }
}
</script>

<style scoped lang="scss">
.dialog-tag {
  display: inline-block;
  margin: 10px 5px 5px 0;
}

::v-deep .el-table__header-wrapper {
  width: 100%;
}

::v-deep .el-form-item__label {
  font-size: 13px;
  font-weight: 500;
}

::v-deep .el-form-item {
  margin-bottom: 8px;
}
</style>
