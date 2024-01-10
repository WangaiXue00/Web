<template>
  <div class="main">
    <div class="box left">
      <div class="boxLeft1">
        <el-card>
          <div slot="header" class="clearfix">
            <span style="font-weight: 600;">近三年年度绩效统计</span>
          </div>
          <ul>
            <li v-for="(item, index) in 3" :key="index">
              <div class="div1">2021</div>
              <div class="div2"></div>
              <div class="div3">A</div>
              <div class="div4">规划与统整力、决策力强、行业经验丰富,行业经验丰富</div>
            </li>

          </ul>
        </el-card>
      </div>
      <div class="boxLeft2">
        <el-card>
          <div slot="header" class="clearfix">
            <span style="font-weight: 600;">专业职称认证</span>
          </div>
          <!-- <el-divider ></el-divider> -->
        </el-card>
      </div>
      <div class="boxLeft3">
        <el-card class="card">
          <div slot="header" class="clearfix">
            <span style="font-weight: 600;">专业能力</span>
          </div>
          <div style="display: flex; flex-direction: column; height: 100%;width: 100%;">
            <div class="card1"
              style="flex: 1;margin-bottom: 1%; display: flex; flex-direction: row;background-color: #00000005">
              <span
                style="background-image: linear-gradient(to right,rgb(254, 238, 187),#ffffff);background-color: rgba(254, 238, 187,0.6); flex: 1.2;text-align: center;font-size: 15px;display: flex;justify-content: center;align-items: center; ">
                <i class="iconfont icon-zhuanli" style="font-size: 50px; color:#ffffff ;justify-content: center;"></i>
                专利发明
              </span>
              <span style="flex: 2.5;justify-content: center; align-items: center;display: flex;">
                <el-row :gutter="20">
                  <el-col :span="8" v-for="(item, index) in 3" :key="index">
                    <div>
                      <el-statistic title="5项" style="font-size: 15px">
                        <template slot="formatter">
                          发明专利
                        </template>
                      </el-statistic>
                    </div>
                  </el-col>
                </el-row>
              </span>
            </div>
            <div class="card2"
              style="flex: 1;margin-bottom: 1%; display: flex; flex-direction: row;background-color: #00000005">
              <span
                style="background-color: rgba(200, 228, 232,0.6);flex: 1.2;text-align: center;font-size: 15px;display: flex;justify-content: center;align-items: center; ">
                <i class="iconfont icon-EC_gerenwengao-xueshulunwen"
                  style="font-size: 50px; color:#ffffff ;justify-content: center;"></i>
                专利发明
              </span>
              <span style="flex: 2.5;justify-content: center; align-items: center;display: flex;">
                <el-row :gutter="20">
                  <el-col :span="8" v-for="(item, index) in 3" :key="index">
                    <div>
                      <el-statistic title="5项" style="font-size: 15px">
                        <template slot="formatter">
                          发明专利
                        </template>
                      </el-statistic>
                    </div>
                  </el-col>
                </el-row>
              </span>
            </div>
          </div>
        </el-card>
      </div>
    </div>
    <div class="box">
      <Center></Center>
    </div>
    <div class="box right">
      <div class="boxRight1">
        <el-card>
          <div slot="header" class="clearfix">
            <span style="font-weight: 600;">公司经历</span>
          </div>
          <div>
            <span>2006.09.15入职，已入职16年3月20天</span>
          </div>
        </el-card>
      </div>
      <div class="boxRight2">
        <el-card>
          <div slot="header" class="clearfix">
            <span style="font-weight: 600;">项目经验</span>
          </div>
          <div class="block">
            <el-timeline>
              <el-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp">
                {{ activity.content }}
              </el-timeline-item>
            </el-timeline>
          </div>
        </el-card>
      </div>
      <div class="boxRight3">
        <el-card>
          <div slot="header" class="clearfix">
            <span style="font-weight: 600;">人才盘点</span>

          </div>
          <!-- <div style="display: flex; flex-direction: row;">
            <div class="block" style="flex: 1; display: flex;flex-direction: column;">
              <el-timeline :reverse="reverse">
                <el-timeline-item v-for="(activity, index) in levalactivities" :key="index"
                  :timestamp="activity.timestamp">
                  {{ activity.content }}
                </el-timeline-item>
              </el-timeline>
            </div>

            <div style="flex: 2.5;">
              <ul>
                <li>1</li>
                <li>3</li>
                <li>3</li>
              </ul>
            </div>
          </div> -->
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import Center from './center.vue'
export default {
  components: {
    Center
  },
  data() {
    return {
      activities: [{
        content: '新能源S系列车型投产项目',
        timestamp: '2018-04-15'
      }, {
        content: '乘用车型改款项目',
        timestamp: '2018-04-13'
      }, {
        content: '新能源X系列车型试制项目',
        timestamp: '2018-04-11'
      }],
      levalactivities: [{
        content: '高',
        size: 'large',
        type: 'primary',
        icon: 'el-icon-more'
      }, {
        content: '中',
        color: '#0bbd87'
      }, {
        content: '低',
        size: 'large'
      }]

    };
  }
}
</script>

<style >
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.main {
  display: flex;
  height: 100%;
}

.main .box {
  flex: 1;
  /* border: 1px solid black; */
  /* padding: 10px; */
  margin: 0.5% 0;
  /* background-color: green; */

}

.main .left {

  display: flex;
  flex-direction: column;
  height: 100%;
}

.main .right {

  display: flex;
  flex-direction: column;
  height: 100%;
}

.main .left .boxLeft1 {
  flex: 1;
}

.main .right .boxRight1 {
  flex: 1;
}

.main .left .boxLeft2 {
  flex: 1;
}

.main .right .boxRight2 {
  flex: 1;
}

.main .left .boxLeft3 {
  flex: 1.2;
}

.main .right .boxRight3 {
  flex: 1.2;
}

.main .left .boxLeft1 .el-card__body {
  height: 140px;
  padding: 2%;
}

.main .left .boxLeft2 .el-card__body {
  height: 165px;
  padding: 0.2%;
}

.main .left .boxLeft3 .el-card__body {
  height: 160px;
  padding: 2%;
}

.main .right .boxRight1 .el-card__body {
  height: 140px;
  padding: 2%;
}

.main .right .boxRight2 .el-card__body {
  height: 165px;
  padding: 0.2%;
}

.main .right .boxRight3 .el-card__body {
  height: 160px;
  padding: 2%;
}

.boxLeft1 ul {
  display: flex;
  height: 100%;
}

.boxRight3 ul {
  display: flex;
  height: 100%;
}

.boxRight3 ul li {
  flex: 1;
  flex-direction: row;
  list-style: none;
  background-color: rgb(240, 255, 255);
  justify-content: space-between;
  padding: 0.5%;
  margin: 1%;
  position: relative;
}


.boxLeft1 ul li {
  flex: 1;
  flex-direction: row;
  list-style: none;
  background-color: rgb(240, 255, 255);
  justify-content: space-between;
  padding: 0.5%;
  margin: 1%;
  position: relative;
}

.boxLeft1 ul li .div1 {
  position: absolute;
  top: 0;
  left: 0;
  height: 12%;
  width: 40%;
  background-color: rgb(168, 178, 233);
  color: #fff;
  font-size: 15px;
}

.boxLeft1 ul li .div2 {
  position: absolute;
  top: 0;
  left: 40%;

  width: 0;
  height: 0;
  border-left: 0;
  border-right: 10px solid transparent;
  border-bottom: 0;
  border-top: 17px solid rgb(168, 178, 233);
}

.boxLeft1 ul li .div3 {
  position: absolute;
  top: 15%;
  left: 40%;
  font-weight: 600;
  font-size: 25px;
}

.boxLeft1 ul li .div4 {
  position: absolute;
  bottom: 2%;
  left: 0;
  font-size: 13px;
  padding: 1%;
}

.el-statistic .con .number {
  font-size: 15px !important;
  padding: 0 4px;
}

.block {
  margin: 17px 10px;
}
</style>