<template>
  <el-card>
    <div class="center-container">
      <div class="charts-box">
        <qiun-vue-ucharts type="word" :opts="opts" :chartData="chartData" />
      </div>
      <div class="box-center">
        <!-- <img src="@/assets/images/微信图片_20231101194407.png" alt="" style="height: 100px;width: 100px;" /> -->
        <div style="font-weight: 600;">张深 0009787</div>
        <div>
          <ul style="display: flex; flex-direction: row; justify-content: space-between ;">
            <li style="margin-right: 10px;">
              <i class="iconfont icon-icontouxiang"></i>
              男
            </li>
            <li style="margin-right: 10px;">
              <i class="iconfont icon-dangao"></i>
              42
            </li>
            <li style="margin-right: 10px;">
              <i class="iconfont icon-tianpingzuo"></i>
              总装车间
            </li>
            <li style="margin-right: 10px;">
              <i class="iconfont icon-first-aid"></i>
              车间主任
            </li>
          </ul>

        </div>
      </div>
      <div class="box-bottom">
        <ul class="grid">
          <li v-for="(item, index) in 6" :key="index">
            <i class="iconfont icon-first-aid"></i>
            <div>行业经验</div>
            <div>18年</div>
          </li>

        </ul>
      </div>
    </div>
  </el-card>
</template>

<script>
import qiunVueUcharts from '@qiun/vue-ucharts'
export default {
  components: {
    qiunVueUcharts
  },
  data() {
    return {
      chartData: {},
      //您可以通过修改 config-ucharts.js 文件中下标为 ['word'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
      opts: {
        color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
        padding: undefined,
        enableScroll: false,
        extra: {
          word: {
            type: "normal",
            autoColors: false
          }
        }
      }
    };
  },
  mounted() {
    this.getServerData();
  },
  methods: {
    getServerData() {
      //模拟从服务器获取数据时的延时
      setTimeout(() => {
        //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
        let res = {
          series: [
            {
              name: "精通英语",
              textSize: 25,
              data: undefined
            },
            {
              name: "具备前瞻性",
              textSize: 20,
              data: undefined
            },
            {
              name: "决策力",
              textSize: 20,
              data: undefined
            },
            {
              name: "责任心",
              textSize: 20,
              data: undefined
            },
            {
              name: "抗压能力强",
              textSize: 20,
              data: undefined
            },
            {
              name: "劳模典范",
              textSize: 20,
              data: undefined
            },
            {
              name: "责任心强",
              textSize: 20,
              data: undefined
            },
            {
              name: "西北工业大学",
              textSize: 10,
              data: undefined
            },
            {
              name: "逻辑清晰",
              textSize: 12,
              data: undefined
            },
            {
              name: "值得信赖",
              textSize: 10,
              data: undefined
            },


          ]
        };
        this.chartData = JSON.parse(JSON.stringify(res));
      }, 500);
    },
  }
}
</script>

<style>
li {
  list-style: none;
}

.charts-box {
  /* background-color: rgba(64, 146, 253, 0.2); */
  width: 450px;
  height: 200px;
}

.center-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 560px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1),
              0 -2px 4px rgba(0, 0, 0, 0.1),
              2px 0 4px rgba(0, 0, 0, 0.1),
              -2px 0 4px rgba(0, 0, 0, 0.1); */

  /* background-color: rgba(64, 146, 253, 0.1); */

}

.box-center {
  flex: 1;
  /* background-color: red; */
  justify-content: center;
  align-self: center;
  display: flex;
  flex-direction: column;

  align-items: center;

}

.box-bottom {
  flex: 1;
  height: 100%;
  /* background-color: green; */
}

.grid {
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: space-around;
  padding: 0;
  margin: 0;
}

.grid li {
  flex-basis: 32.3%;
  box-sizing: border-box;
  background-color: rgba(162, 135, 248, 0.5);
  margin: 1px;
  position: relative;
  border-radius: 5%;

}

.grid li i {
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 50px;
  color: #fff;
}

.grid li div:first-of-type {

  font-size: 12px;
  color: #fff;

  margin: 10px 0 5px 10px;
}

.grid li div:last-of-type {
  font-size: 16px;
  color: #fff;
  font-weight: 600;
  margin: 0 0 5px 10px;
}
</style>