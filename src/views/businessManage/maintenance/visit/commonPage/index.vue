<template>
  <div class="home-container" v-if="sysBoard.opened">
    <!-- 左侧 -->
    <div class="box-left">
      <div style="background-color: white; margin-bottom: 15px; border-radius: 4px">
        <div style="height: 12vh; display: flex; justify-content: space-between">
          <div class="email-box" style="background-color: #347bf0">
            <p>待办事项</p>
            <p style="font-size: 30px; margin-top: 10px">3</p>
          </div>
          <div class="email-box" style="background-color: #259596">
            <p>我的邮件</p>
            <p style="font-size: 30px; margin-top: 10px">7</p>
          </div>
        </div>
        <p style="font-weight: bold; padding: 20px 0 0 20px">我的日程</p>
        <el-divider></el-divider>
        <div class="plan-box">
          <div style="margin-right: 70px">
            <p>剩余日程</p>
            <p style="color: orange; margin-top: 10px">4</p>
          </div>
          <div style="border-left: 1px solid #aeafb1; padding-left: 15px">
            <p>距下个日程</p>
            <p style="color: orange; margin-top: 10px">5时30分9秒</p>
          </div>
        </div>
        <div class="schedule-box">
          <el-calendar :range="[getDate.start, getDate.end]"> </el-calendar>
          <!-- <el-empty description="暂无更多日程安排"></el-empty> -->
        </div>
      </div>
      <el-card body-style="height:190px;overflow:auto">
        <div slot="header" class="clearfix">
          <span style="font-weight: bold">项目跟踪</span>
        </div>
        <p v-for="item in 7" :key="item" style="padding: 5px; margin: 0">
          <span>企业智能化发展平台项目跟进情况</span>
          <span style="float: right">黄文达</span>
        </p>
      </el-card>
    </div>

    <!-- 右侧 -->
    <!-- <Right /> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import Right from '@/layout/components/system/home/commonPage/index'

export default {
  name: 'systemCom',
  components: { Right },
  data() {
    return {}
  },

  computed: {
    ...mapState({
      sysBoard: state => state.app.sysBoard
    }),
    getDate() {
      const today = new Date().getDay() === 0 ? 7 : new Date().getDay()
      const year = new Date().getFullYear()
      const month = new Date().getMonth() + 1
      const date = new Date().getDate()
      const span = date + 1 - today
      const result = {
        start: year + '-' + month + '-' + span,
        end: year + '-' + month + '-' + (span + 6)
      }
      return result
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.home-container {
  width: 100vw;
  height: calc(100% - 50px);
  background-color: #f2f4f7;
  position: fixed;
  bottom: 0;
  box-shadow: 0 -1px 10px rgb(224, 223, 223);
  z-index: 2000;
  padding: 30px 60px;
  display: flex;
  overflow: auto;

  // .box-left,
  // .box-right {
  //   margin-bottom: 10vh
  // }

  .box-left {
    width: 33%;
    height: 100%;
    margin-right: 25px;

    ::v-deep.el-divider--horizontal {
      margin-top: 5px;
    }

    .plan-box {
      background-color: #283c4c;
      border-radius: 3px;
      height: 12vh;
      margin: -5px 10px;
      display: flex;
      align-items: center;
      color: white;
      padding-left: 25px;

      p {
        margin: 0;
      }
    }

    .email-box {
      height: 100%;
      width: 50%;
      padding: 1.6vh 0 0 40px;
      color: white;
      border-radius: 3px;
      margin: 20px;

      p {
        margin: 0;
      }
    }

    .schedule-box {
      height: 35vh;
      margin: 20px 10px 0 10px;

      ::v-deep.el-empty {
        padding: 30px;
      }

      ::v-deep.el-empty__image svg {
        width: 55px;
      }

      ::v-deep.el-calendar__header {
        padding: 0;
        padding-bottom: 10px;
      }

      ::v-deep.el-calendar__body {
        padding: 0;
      }

      // ::v-deep.el-calendar-table td.is-today {
      //   background-color: aqua;
      // }

      ::v-deep.el-calendar-table thead th {
        padding: 5px 0;
      }

      ::v-deep.el-calendar-table .el-calendar-day {
        height: auto;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
