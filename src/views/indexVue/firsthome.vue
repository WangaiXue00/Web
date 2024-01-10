<template>
  <div>
    <div class="container">
      <div class="left">
        <div class="left-top">
          <div class="top-title">张三，早上好</div>
          <div class="top-contain">
            <div style="width: 28%; display: flex; align-items: center;">
              <div style="width: 90px; height: 90px; margin-right: 20px; ">
                <img src="@/assets/images/tianqi.png" alt="" style="width: 100%; height: 100%;">
                <!-- <i class="iconfont icon-duoyun" style="font-size: 90px;"></i> -->
              </div>
              <div>
                <div style="height: 28px;font-size: 20px; color: #222222;line-height: 23px;margin-bottom: 10px;">-8℃</div>
                <div style="height: 22px;font-size: 16px;color: #808080;line-height: 19px;">2023-11-07&nbsp;&nbsp;星期一
                </div>
              </div>
            </div>
            <div style="width: 18%; height: 87px; align-items: center;" v-for="(item, index) in 4" :key="index">
              <div style="height: 28px;font-size: 20px;color: #222222;line-height: 23px; margin-left: 0 0 10px 4px;">待审批
              </div>
              <div>
                <span style="height: 49px;font-size: 40px;font-weight: bold;color: #222222;line-height: 47px;">12</span>
                <span style="height: 20px;font-size: 14px;color: #808080;line-height: 16px;">相较昨日<i
                    class="el-icon-caret-bottom" style="color: red;"></i>
                  3</span>
              </div>
            </div>
          </div>
        </div>
        <div class="left-middle1">
          <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
            <div style="height: 28px;font-size: 20px;font-weight: 600;color: #222222;line-height: 23px;">常用功能</div>
            <el-button style="height: 22px;font-size: 16px;color: #165DFF;line-height: 19px;" type="text"
              @click="allFeature">全部功能</el-button>
          </div>
          <div style="display: flex;flex-wrap: nowrap; padding: 0 30px 0 30px;">
            <div style="width: 14.28%;text-align: center;margin:0 0 16px 0;" v-for="(item, index) in frequentlyList"
              :key="index" @click="toggleCross(index)">
              <el-avatar :style="{ backgroundColor: item.showCross ? '#7F7F7F' : '' }"
                style=" border-radius: 20px; overflow: visible; position: relative;" shape="square" :size="80">
                <i v-if="item.showCross"
                  style="position: absolute; font-size: 20px; top: -5px; right: -5px; color: red; cursor: pointer;"
                  @click.stop="removeItem(index)" class="el-icon-error"></i>
                icon
              </el-avatar>
              <div style="height: 20px;font-size: 14px;line-height: 16px;margin-top: 14px;">{{ item.name }}</div>
            </div>
            <div style="width: 14.28%;text-align: center;margin:0 0 16px 0;" @click="dialogVisible = true">
              <el-avatar style="border-radius: 20px;" shape="square" :size="80"><i class="el-icon-plus"></i></el-avatar>
              <div style="height: 20px;font-size: 14px;line-height: 16px;margin-top: 10px;">添加常用</div>
            </div>
          </div>

        </div>
        <div class="left-middle2">
          <div style="height: 28px; display: flex; justify-content: space-between; margin-bottom: 20px;">
            <div style="height: 28px;font-size: 20px;font-weight: 600;color: #222222;line-height: 23px;">待办事项</div>
            <el-link style="height: 22px;font-size: 16px;color: #165DFF;line-height: 19px;" type="primary">更多</el-link>
          </div>
          <div
            style="height: 55px; display: flex;justify-content: space-between;align-items: center; margin-bottom: 40px; "
            v-for="(item, index) in 4" :key="index">
            <div style="display: flex;">
              <el-avatar :size="55"
                style="margin-right: 20px; font-size: 22px; background-color: rgb(22, 93, 255);">签</el-avatar>
              <div>
                <div style="height: 25px;font-size: 18px;color: #222222;line-height: 21px;margin-bottom: 10px;">
                  请签字【营销中心】张一山提交的流程</div>
                <div style="height: 20px;font-size: 14px;color: #808080;line-height: 16px;">请签字【营销中心】张一山提交的流程</div>
              </div>
            </div>
            <div style="height: 25px;font-size: 18px;color: #808080;line-height: 21px;">2023.11.07 09:30:45</div>
          </div>


        </div>
        <div class="left-bottom">
          <div style="height: 28px; display: flex; justify-content: space-between;">
            <div style="font-size: 20px;font-weight: 600;color: #000000;line-height: 23px;">公司公告</div>
            <el-link style="font-size: 16px;color: #165DFF;line-height: 28px;" type="primary">更多</el-link>
          </div>
          <div style="height: 25px; display: flex;justify-content: space-between;margin-top: 20px;"
            v-for="(item, index) in 4" :key="index">
            <span
              style="font-size: 18px;color: #222222;line-height: 25px;">山东麟云信息科技公司明天将要在高新区举办开发者大会，出席部门：经理部门、运营部门、市场部门、研发部门、销售...</span>
            <span style="font-size: 18px;color: #808080;line-height: 25px;">2023/11/18</span>
          </div>
        </div>

      </div>
      <div class="right">
        <div class="right-top">
          <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
            <div style="height: 28px;font-size: 20px;font-weight: 600;color: #222222;line-height: 23px; ">我的日程</div>
            <el-link style="height: 22px;font-size: 16px;color: #165DFF;line-height: 19px;" type="primary">添加</el-link>
          </div>

          <Calendar />

          <div style="height: 90px;  margin: 10px 0px;padding: 20px; background-color: rgb(247, 248, 250); display: flex;"
            v-for="(item, index) in 4" :key="index">
            <div style="width: 8px;height: 8px;background-color: blue; border-radius: 50%; margin-top: 5px;"></div>
            <div style=" margin-left: 10px;">
              <div style="height: 20px;font-size: 14px;font-weight: 500;color: #3D3D3D;line-height: 16px;">价值评估会议提醒</div>
              <div style="height: 20px;font-size: 14px;color: #3D3D3D;line-height: 16px;margin-top: 10px;">16:00 - 17:00
              </div>
            </div>

          </div>
          <div style="height: 20px;font-size: 14px;color: #165DFF;line-height: 16px; text-align: center; margin: 10px;">
            还有2个日程
            <i class="el-icon-arrow-down"></i>
          </div>
        </div>
        <div class="right-bottom">
          <div style="height: 28px;display: flex; justify-content: space-between;">
            <div style="font-size: 20px;font-weight: 600;color: #000000;line-height: 23px;">行业要闻</div>
            <el-link style="height: 22px;font-size: 16px;color: #165DFF;line-height: 19px;" type="primary">更多</el-link>
          </div>
          <div style="height: 20px;line-height: 20px; display: flex;justify-content: space-between;margin: 20px 0px;"
            v-for="(item, index) in 4" :key="index">
            <span style="font-size: 14px;color: #222222;">关于开展员工行为规范检查的通知</span>
            <span style="font-size: 14px; color: gray;">2023/11/18</span>
            <i class="iconfont icon-xiangshang4" style="font-size: 12px; color: red;"></i>
          </div>
        </div>
      </div>
      <el-dialog :visible.sync="dialogVisible" width="50%" append-to-body>
        <h3 slot="title" style="font: 600 20px 黑体;margin: 0;">添加常用</h3>
        <Commen v-bind:edList="frequentlyList" />
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import Calendar from './calendar.vue'
import Commen from './commen.vue'
export default {
  components: { Calendar, Commen },
  data() {
    return {
      value: new Date(),
      dialogVisible: false,
      show: false,
      frequentlyList: [{
        name: '打卡', showCross: false
      }, {
        name: '补卡', showCross: false
      }, {
        name: '公告', showCross: false
      }, {
        name: '文件管理', showCross: false
      }, {
        name: '汇报', showCross: false
      }, {
        name: '周报', showCross: false
      },
      ],
    }
  },
  methods: {
    allFeature() {
      this.$emit("getShow", this.show);
    },
    toggleCross(index) {
      // 隐藏所有叉号
      this.frequentlyList.forEach((item, i) => {
        this.$set(this.frequentlyList, i, { ...item, showCross: false });
      });

      // 显示或隐藏当前点击的叉号
      this.$set(this.frequentlyList, index, { ...this.frequentlyList[index], showCross: !this.frequentlyList[index].showCross });
    },
    removeItem(index) {
      this.frequentlyList.splice(index, 1);
    },
  }
}
</script>
<style lang='scss' scoped>
.container {
  display: flex;
  font-family: PingFang SC, PingFang SC;
}

.left {
  width: 73%;
  margin:0 10px 10px;
}

.left-top {
  height: 170px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px 10px 10px 10px;
  padding: 20px;
  margin-bottom: 20px;

  .top-title {
    height: 31px;
    font-size: 22px;
    
    font-weight: 600;
    color: #222222;
    line-height: 26px;
    margin-bottom: 10px;
  }

  .top-contain {
    display: flex;
  }
}

.left-middle1 {
  height: 198px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px 10px 10px 10px;

}

.left-middle2 {
  height: 438px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px 10px 10px 10px;

}

.left-bottom {
  height: 248px;
  padding: 20px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px 10px 10px 10px;
}

.right {
  width: 27%;
  margin:0 10px 10px;
  background-color: rgb(247, 249, 252);
}

.right-top {
  height: 846px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px 10px 10px 10px;

}

.right-bottom {
  height: 248px;
  padding: 20px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px 10px 10px 10px;

}
</style>