<template>
  <div class="dispatch-container">
    <el-card class="dispatch-item">
      <div slot="header">
        <span class="item-title">待派工</span>
      </div>
      <div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="serve" label="服务单号" width="180">
          </el-table-column>
          <el-table-column prop="state" label="当前状态" width="180">
          </el-table-column>
          <el-table-column prop="mark" label="标记">
          </el-table-column>
          <el-table-column prop="time" label="报修时间">
          </el-table-column>
          <el-table-column prop="handle" label="处理时长">
          </el-table-column>
        </el-table>
      </div>
    </el-card>
    <el-card class="dispatch-item">
      <div slot="header">
        <span class="item-title">操作日志</span>
      </div>
      <div>
        <el-table :data="operateData" style="width: 100%">
          <el-table-column prop="time" label="操作时间" width="180">
          </el-table-column>
          <el-table-column prop="persion" label="操作人" width="180">
          </el-table-column>
          <el-table-column prop="content" label="操作内容">
          </el-table-column>
        </el-table>
      </div>
    </el-card>
    <el-row :gutter="10">
      <el-col :span="12">
        <el-card class="dispatch-item">
          <div slot="header">
            <span class="item-title">报价信息</span>
          </div>
          <div>
            <el-row class="label-row">
              <el-col :span="4" class="left-label">服务单号：</el-col>
              <el-col :span="20">ZX1690187855115</el-col>
            </el-row>
            <el-row class="label-row">
              <el-col :span="4" class="left-label">报修人：</el-col>
              <el-col :span="20">李兆堃</el-col>
            </el-row>
            <el-row class="label-row">
              <el-col :span="4" class="left-label">客户名称：</el-col>
              <el-col :span="20">上海市第一康复医院（测试）</el-col>
            </el-row>
            <el-row class="label-row">
              <el-col :span="4" class="left-label">配件费：</el-col>
              <el-col :span="20">0.00 </el-col>
            </el-row>
            <el-row class="label-row">
              <el-col :span="4" class="left-label">服务费：</el-col>
              <el-col :span="20">0.00</el-col>
            </el-row>
            <el-row class="label-row">
              <el-col :span="4" class="left-label">外修费：</el-col>
              <el-col :span="20">0.00</el-col>
            </el-row>
            <el-row class="label-row">
              <el-col :span="4" class="left-label">合计金额：</el-col>
              <el-col :span="20">0.00</el-col>
            </el-row>
            <el-row class="label-row">
              <el-col :span="4" class="left-label">附加费：</el-col>
              <el-col :span="20">0.00</el-col>
            </el-row>
            <el-row class="label-row">
              <el-col :span="4" class="left-label">税率：</el-col>
              <el-col :span="20">0%</el-col>
            </el-row>
            <el-row class="label-row">
              <el-col :span="4" class="left-label">税额：</el-col>
              <el-col :span="20">0.00</el-col>
            </el-row>
            <el-row class="label-row">
              <el-col :span="4" class="left-label">价税合计：</el-col>
              <el-col :span="20">0.00</el-col>
            </el-row>
            <el-row class="label-row">
              <el-col :span="4" class="left-label">优惠金额：</el-col>
              <el-col :span="20">0.00</el-col>
            </el-row>
            <el-row class="label-row">
              <el-col :span="4" class="left-label">实际应收：</el-col>
              <el-col :span="20">0.00</el-col>
            </el-row>
            <el-row class="label-row">
              <el-col :span="4" class="left-label">额外成本：</el-col>
              <el-col :span="20">0.00</el-col>
            </el-row>
            <el-row class="label-row">
              <el-col :span="4" class="left-label">交接日期：</el-col>
              <el-col :span="20">2023-08-02</el-col>
            </el-row>
            <el-row class="label-row">
              <el-col :span="4" class="left-label">审批人：</el-col>
              <el-col :span="20"></el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="dispatch-item">
          <div slot="header">
            <span class="item-title">放行检验</span>
          </div>
          <div>
            <el-row class="label-row">
              <el-col :span="4" class="left-label">服务单号：</el-col>
              <el-col :span="20">ZX1690187855115</el-col>
            </el-row>
            <el-row class="label-row">
              <el-col :span="4" class="left-label">报修人：</el-col>
              <el-col :span="20">李兆堃</el-col>
            </el-row>
            <el-row class="label-row">
              <el-col :span="4" class="left-label">客户名称：</el-col>
              <el-col :span="20">上海市第一康复医院（测试）</el-col>
            </el-row>
            <el-row class="label-row">
              <el-col :span="4" class="left-label">设备名称：</el-col>
              <el-col :span="20">康复踏车</el-col>
            </el-row>
            <el-row class="label-row">
              <el-col :span="4" class="left-label">设备型号：</el-col>
              <el-col :span="20">SYC03-D08</el-col>
            </el-row>
            <el-row class="label-row">
              <el-col :span="4" class="left-label">序列号：</el-col>
              <el-col :span="20">C03-D0818010802</el-col>
            </el-row>
            <el-row class="label-row">
              <el-col :span="4" class="left-label">建议报价：</el-col>
              <el-col :span="20">0元 ~ 0元</el-col>
            </el-row>
            <el-row class="label-row">
              <el-col :span="4" class="left-label">接地电阻（mΩ）： </el-col>
              <el-col :span="20"></el-col>
            </el-row>
            <el-row class="label-row">
              <el-col :span="4" class="left-label">外壳漏电流（µA）： </el-col>
              <el-col :span="20"></el-col>
            </el-row>
            <el-row class="label-row">
              <el-col :span="4" class="left-label">检测结果：</el-col>
              <el-col :span="20"></el-col>
            </el-row>
            <el-row class="label-row">
              <el-col :span="4" class="left-label">检测人员：</el-col>
              <el-col :span="20"></el-col>
            </el-row>
            <el-row class="label-row">
              <el-col :span="4" class="left-label">检测日期：</el-col>
              <el-col :span="20"></el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Dispatch',
  data () {
    return {
      tableData: [
        {
          serve: 'ZX1690187855115',
          state: '已建单待派工',
          mark: '2023-07-24 16:37:35',
          time: '8天18时',
          handle: '有预约'
        },
        {
          serve: 'ZX1690187855116',
          state: '已建单待派工',
          mark: '2023-07-24 16:37:35',
          time: '8天18时',
          handle: '有预约'
        },
        {
          serve: 'ZX1690187855117',
          state: '已建单待派工',
          mark: '2023-07-24 16:37:35',
          time: '8天18时',
          handle: '有预约'
        },
      ],
      operateData: [
        {
          serve: 'ZX1690187855115',
          state: '已建单待派工',
          time: '2023-07-24 16:37:35',
          persion: '李兆堃',
          content: '院方人员扫码报修'
        },
        {
          serve: 'ZX1690187855115',
          state: '已建单待派工',
          time: '2023-07-24 16:37:35',
          persion: '李兆堃',
          content: '院方人员扫码报修'
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.dispatch-container {
  padding: 5px 15px 15px;

  .dispatch-item {
    margin: 10px 0 0;

    .item-title {
      font-size: 18px;
      font-weight: 900;
    }

    .label-row {
      margin: 8px 0;
      font-size: 15px;

      .left-label {
        text-align: right;
      }
    }

    &.quotation {
      width: 50%;
    }
  }
}
</style>