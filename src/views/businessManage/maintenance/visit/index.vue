<template>
  <!-- 右侧 -->
  <div class="box-right">
    <div class="crm-box">

      <div style="display: flex">
        <div class="target">
          <!-- <p style="display: flex; align-items: center; margin: 10px 0">
            <span style="margin-right: 15px">年度目标</span>
            <el-progress :percentage="82" style="width: 27vw"></el-progress>
          </p>
          <p style="display: flex; align-items: center">
            <span style="margin-right: 15px">本月目标</span>
            <el-progress :percentage="82" style="width: 17vw"></el-progress>
          </p> -->
          111
        </div>
        <div>
          222
        </div>
      </div>
    </div>
    <!-- 公司概况 -->
    <div class="introduce">
      <el-card body-style="background-color:#f2f4f7;height:48vh">
        <div slot="header" class="clearfix">
          <span style="font-weight: bold">333</span>
        </div>
        <div style="
            height: 17vh;
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
          ">
          <div class="set-padding" style="
              height: 100%;
              width: 49.4%;
              background-color: white;
              display: flex;
            ">
            <div style="width: 20%">
              <!-- <p class="set-title" style="margin-bottom: 12px; padding-right: 3px">
                指标
              </p> -->
              555
            </div>
            <!-- <Target height="28vh" width="40vw" style="top: -50%" /> -->
          </div>
          <div class="set-padding" style="
              height: 100%;
              width: 49.4%;
              background-color: white;
              display: flex;
            ">
            <!-- <div style="width: 35%">
              <p class="set-title" style="margin-bottom: 12px; padding-right: 3px">
                员工洞察
              </p>
              <p style="font-size: 20px; font-weight: bold; margin-bottom: 5px">
                20000 <span style="font-size: 0.8rem; color: #888">名</span>
              </p>
              <p style="font-size: 13px; color: #999">员工数量</p>
            </div> -->
            <Staff height="28vh" width="40vw" />
            666
          </div>
        </div>
        <div style="
            height: 30vh;
            display: flex;
            justify-content: space-between;
            overflow: hidden;
          ">
          <div class="set-padding" style="
              padding-bottom: 10px;
              height: 100%;
              width: 49.4%;
              background-color: white;
            ">
            <div style="background-color: white" class="set-padding">
              <div>
                777
              </div>
            </div>
            <!-- <div style="background-color: white" class="set-padding">
              <div>
                <p class="set-title" style="margin-bottom: 1.5vh">
                  有效合同完成率
                </p>
                <p style="font-size: 20px; font-weight: bold; margin-bottom: 3px">
                  20000%
                </p>
                <p style="font-size: 13px; color: #999">
                  较同期 <span style="color: #d43636">↑20%</span>
                </p>
              </div>
            </div>
            <div style="background-color: white" class="set-padding">
              <div>
                <p class="set-title" style="margin-bottom: 1.5vh">收款完成率</p>
                <p style="font-size: 20px; font-weight: bold; margin-bottom: 3px">
                  20000%
                </p>
                <p style="font-size: 13px; color: #999">
                  较同期 <span style="color: #d43636">↑20%</span>
                </p>
              </div>
            </div>
            <div style="background-color: white" class="set-padding">
              <div>
                <p class="set-title" style="margin-bottom: 1.5vh">收入完成率</p>
                <p style="font-size: 20px; font-weight: bold; margin-bottom: 3px">
                  20000%
                </p>
                <p style="font-size: 13px; color: #999">
                  较同期 <span style="color: #d43636">↑20%</span>
                </p>
              </div>
            </div> -->
          </div>
          <div class="set-padding" style="
              padding-bottom: 10px;
              height: 100%;
              width: 49.4%;
              background-color: white;
            ">
            <p>888</p>
            <!-- <div style="height:20vh;width:100%;background-color: #1890ff;"></div> -->
            <!-- <Client height="35vh" /> -->
            <!-- <p style="font-size:20px;font-weight:bold">20000%</p> -->
            <!-- <p style="font-size:13px;color:#999">客户数量</p> -->
          </div>
        </div>
      </el-card>
    </div>
    <!-- 行业要闻和常用服务 -->
    <el-row style="margin-top: 15px" :gutter="15">
      <el-col :span="12">
        <el-card body-style="height:200px;overflow:auto">
          <div slot="header" class="clearfix">
            <span style="font-weight: bold">999</span>
          </div>
          <!-- <ul style="margin: 0; padding: 0 15px">
            <li style="padding: 5px; font-size: 1rem" v-for="item in 6" :key="item">
              企业智能化发展平台产品发布
            </li>
          </ul> -->
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card body-style="height:200px;overflow:auto">
          <div slot="header" class="clearfix">
            <span style="font-weight: bold">000</span>
          </div>

        </el-card>
      </el-col>
    </el-row>
    <!-- <Right /> -->
  </div>
</template>

<script>
// import Target from './commonPage/echarts/Target'
// import Client from './commonPage/echarts/Client'
// import Staff from './commonPage/echarts/Staff'
// import Right from './commonPage/index.vue'

export default {
  // components: { Staff, Target, Client },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.box-right {
  // width: 67%;
  width: 100%;
  height: 100%;

  p {
    margin: 0;
  }

  .crm-box {
    height: 120px;
    padding: 15px;
    width: 100%;
    background-color: #f7f8fa;
    border-radius: 5px;

    .target {
      width: 30%;
      margin-left: 40px;
    }

    .target-detail {
      width: 40%;
      // display: flex;
      // justify-content: end;
    }
  }

  .introduce {
    margin-top: 15px;

    .set-padding {
      padding: 10px;
    }

    .set-title {
      background-color: #d0e5e6;
      color: #00a6ac;
      padding: 1% 2%;
      font-size: 14px;
      display: inline-block;
    }

    ::v-deep.el-card__body {
      padding: 0;
    }
  }

  .service-box {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 8%;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      p:first-child {
        background-color: #bcd3f1;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
