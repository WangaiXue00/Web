<template>
  <div style="background-color: #f1f1f1;padding: 5px;">
    <div class="top">
      <div class="top-left">
        <div style="font:600 16px black;margin: 10px;">运营数据</div>

        <div style="display: flex;">
          <div style="width: 25%; margin: 10px 5px;display: flex; background-color: rgb(230, 250, 254);">
            <div>
              <div style="font:500 14px black">访问量人数</div>
              <div style="font:500 12px black">(PV量)</div>
              <div style="font:500 14px black">122561</div>
            </div>
            <div style="width: 100px; height: 80px; ">
              echars
            </div>
          </div>
          <div style="width: 25%; margin: 10px 5px;display: flex; background-color: rgb(209, 238, 233);">
            <div>
              <div style="font:500 14px black">独立访客</div>
              <div style="font:500 12px black">(UV量)</div>
              <div style="font:500 14px black">113845</div>
            </div>
            <div style="width: 100px; height: 80px;">
              echars
            </div>
          </div>
          <div style="width: 25%; margin: 10px 5px;display: flex; background-color: rgb(247, 230, 253);">
            <div>
              <div style="font:500 14px black">订单转化率</div>
              <div style="font:500 14px black">78%</div>
            </div>
            <div style="width: 100px; height: 80px;">
              echars
            </div>
          </div>
          <div style="width: 25%; margin: 10px 5px;display: flex; background-color: rgb(219, 222, 238);">
            <div>
              <div style="font:500 14px black">利润增长率</div>
              <div style="font:500 14px black">65.25%</div>
            </div>
            <div style="width: 100px; height: 80px;">
              echars
            </div>
          </div>
        </div>

      </div>
      <div class="top-right1">

        <div style="margin: 10px">
          <div style="display: flex; justify-content: space-between;">
            <span style="font:600 16px black;">系统公告</span>
            <el-link type="primary" style="font-size: 12px;">查看更多</el-link>
          </div>
        </div>
        <div style="margin: 10px 5px;">
          <div class="tag-span-left">
            <el-tag type="warning">活动</el-tag>
            <span style="margin-left: 10px;">内容最新优惠活动</span>
          </div>
          <div class="tag-span-left">
            <el-tag type="danger">通知</el-tag>
            <span style="margin-left: 10px;">库存已经不足...</span>
          </div>
          <div class="tag-span-left">
            <el-tag type="success">消息</el-tag>
            <span style="margin-left: 10px;">恭喜您注册成功</span>
          </div>
        </div>
      </div>
      <div class="top-right2">

        <div style="margin: 10px">
          <div style="display: flex; justify-content: space-between;">
            <span style="font:600 16px black;">帮助文档</span>
            <el-link type="primary" style="font-size: 12px;">查看更多</el-link>
          </div>
        </div>
        <div style="margin: 10px 5px;">
          <div class="tag-span-right">
            <span>产品概括</span>
            <span>使用指南</span>
          </div>
          <div class="tag-span-right">
            <span>接入流程</span>
            <span>接口文档</span>
          </div>
          <div class="tag-span-right">
            <span>业务流程</span>
            <span>用户手册</span>
          </div>
        </div>
      </div>
    </div>
    <div class="middle1">
      <div>
        <el-avatar :size="50" class="middle1-icon">TM</el-avatar>
        <div>销售订单</div>
      </div>
      <div>
        <el-avatar :size="50" class="middle1-icon" icon="el-icon-circle-plus-outline"></el-avatar>
        <div>采购订单</div>
      </div>
      <div>
        <el-avatar :size="50" class="middle1-icon" icon="iconfont icon-yunshuzhongwuliu-xianxing"></el-avatar>
        <div>物流运输</div>
      </div>
      <div>
        <el-avatar :size="50" class="middle1-icon" icon="iconfont icon-kehuguanli"></el-avatar>
        <div>客户管理</div>
      </div>
      <div>
        <el-avatar :size="50" class="middle1-icon" icon="iconfont icon-gongyingshang-wodedingdan"></el-avatar>
        <div>供应商</div>
      </div>
      <div>
        <el-avatar :size="50" class="middle1-icon" icon="iconfont icon-yonghuguanli"></el-avatar>
        <div>用户管理</div>
      </div>
      <div>
        <el-avatar :size="50" class="middle1-icon" icon="iconfont icon-caiwu-xianxing"></el-avatar>
        <div>财务列表</div>
      </div>
      <div>
        <el-avatar :size="50" class="middle1-icon" icon="iconfont icon-rizhiyichang"></el-avatar>
        <div>异常订单</div>
      </div>

    </div>
    <div class="middle2">
      <div class="middle2-left">
        <div style="font:600 16px black;margin: 10px;">核心统计</div>
        <div style="color: rgb(133, 133, 133); margin: 10px;">2022年7月14日&nbsp;&nbsp;星期四</div>
        <div style="display: flex;">
          <div style="flex: 1; text-align: center;">
            <div style="font:600 12px black; margin: 10px 0px;">今日销售收入</div>
            <div style="font:600 18px black; margin: 10px 0px;">155654 &nbsp;&nbsp;元</div>
            <div style="font:500 11px black;margin: 10px 0px;">
              总<i class="iconfont icon-shuzhishangsheng" style="font-size: 25px; color: red;"></i> 112.61%
            </div>
          </div>
          <div style="flex: 1; text-align: center;">
            <div style="font:600 12px black; margin: 10px 0px;">今日销售订单</div>
            <div style="font:600 18px black; margin: 10px 0px;">9524 &nbsp;&nbsp;单</div>
            <div style="font:500 11px black;margin: 10px 0px;">
              总<i class="iconfont icon-shuzhixiajiang" style="font-size: 25px; color: rgb(9, 221, 9);"></i> 112.61%
            </div>
          </div>
          <div style="flex: 1; text-align: center;">
            <div style="font:600 12px black; margin: 10px 0px;">今日采购支出</div>
            <div style="font:600 18px black; margin: 10px 0px;">25213 &nbsp;&nbsp;元</div>
            <div style="font:500 11px black;margin: 10px 0px;">
              总<i class="iconfont icon-shuzhishangsheng" style="font-size: 25px; color: red;"></i> 112.61%
            </div>
          </div>
          <div style="flex: 1; text-align: center;">
            <div style="font:600 12px black; margin: 10px 0px;">今日采购单量</div>
            <div style="font:600 18px black; margin: 10px 0px;">5213 &nbsp;&nbsp;单</div>
            <div style="font:500 11px black;margin: 10px 0px;">
              总<i class="iconfont icon-shuzhixiajiang" style="font-size: 25px; color: rgb(9, 221, 9);"></i> 112.61%
            </div>
          </div>
          <div style="flex: 1; text-align: center;">
            <div style="font:600 12px black; margin: 10px 0px;">今日已付款(元)</div>
            <div style="font:600 18px black; margin: 10px 0px;">155654 &nbsp;&nbsp;元</div>
            <div style="font:500 11px black;margin: 10px 0px;">
              总<i class="iconfont icon-shuzhishangsheng" style="font-size: 25px; color: red;"></i> 112.61%
            </div>
          </div>

        </div>
      </div>
      <div class="middle2-right1">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="font:600 16px black;margin: 10px;">各品类销售占比</div>
          <div>
            <el-radio-group v-model="tabPosition" size="mini" style="margin: 10px;">
              <el-radio-button label="今日">今日</el-radio-button>
              <el-radio-button label="本周">本周</el-radio-button>
              <el-radio-button label="本月">本月</el-radio-button>
            </el-radio-group>
          </div>
        </div>

      </div>
      <div class="middle2-right2">
        <div style="display: flex; justify-content: space-between;">
          <span style="font:600 16px black; margin: 10px;">热门商品榜单</span>
          <el-link type="primary" style="font-size: 12px; margin: 10px;">查看更多</el-link>
        </div>
        <el-table :data="tableData" :default-sort="{ prop: 'saleNum', order: 'descending' }" size="mini" fit height="155"
          style="width: 98%;margin: 0px 10px;">
          <el-table-column type="index" label="排名">
          </el-table-column>
          <el-table-column prop="name" label="商品名称">
          </el-table-column>
          <el-table-column prop="saleNum" label="销售量" sortable>
          </el-table-column>
          <el-table-column prop="saleLimit" label="销售额" sortable>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="footer">
      <div style="margin: 5px 5px 20px 5px; display: flex;justify-content: space-between; align-items: center;">
        <div style="font:600 16px black;">订单量/销售额</div>
        <div>
          <span style="font-size: 14px;color: gray; ">24h实时数据展示</span>
          <el-radio-group v-model="tabPosition" size="mini" style="margin: 10px;">
            <el-radio-button label="今日">今日</el-radio-button>
            <el-radio-button label="本周">本周</el-radio-button>
            <el-radio-button label="本月">本月</el-radio-button>
          </el-radio-group>
        </div>
      </div>
      <div style="width: 100%; height: 140px;display: flex; justify-content: center; align-items: center;">
        <div id="main"></div>
      </div>
    </div>
  </div>
</template>
<script>
import * as echarts from 'echarts';
export default {
  name: '',
  data() {
    return {
      tabPosition: '今日',
      tableData: [{
        name: '冰镇南极海虾',
        saleNum: '1500',
        saleLimit: '￥32.12'
      }, {
        name: '山竹',
        saleNum: '2100',
        saleLimit: '￥32.12'
      }, {
        name: '冰镇南极海虾',
        saleNum: '1500',
        saleLimit: '￥32.12'
      }, {
        name: '冰镇南极海虾',
        saleNum: '1500',
        saleLimit: '￥32.12'
      }]
    }
  },
  mounted() {
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;

    option = {

      legend: {
        data: ['订单额', '订单数']
      },
      grid: {
        top: '20%',  // 设置距离顶部的距离
      },
      toolbox: {
        show: true,
        feature: {
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        },

        right: '15%' // 工具栏在图表的水平居中位置
      },
      xAxis: [
        {
          type: 'category',
          data: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00']
        }
      ],
      yAxis: [
        {
          type: 'value',
          position: 'left',
          name: '销售额',
          boundaryGap: false,
          min: 0,
          max: 60,
          interval: 20


        },
        {
          type: 'value',
          position: 'right',
          name: '订单量',
          boundaryGap: false,
          min: 0,
          max: 60,
          interval: 20

        }
      ],
      barGap: '100%',
      series: [
        {
          name: '订单额',
          type: 'bar',
          data: [
            20, 4, 4, 3, 10, 50, 45, 50, 55, 12, 25, 35, 5
          ],
          barWidth: 8,
          itemStyle: {
            borderRadius: [10, 10, 0, 0]  // 设置顶部圆角半径
          },
          color: 'rgb(35, 176, 239)'
        },
        {
          name: '订单数',
          type: 'bar',
          data: [
            15, 4, 4, 9, 5, 28, 58, 45, 25, 5, 55, 28, 5
          ],
          yAxisIndex: 1,
          barWidth: 8,
          itemStyle: {
            borderRadius: [10, 10, 0, 0]  // 设置顶部圆角半径
          },
          color: 'rgb(251, 161, 53)'
        }
      ]
    };
    myChart.resize({                // 这里为设置图表大小的代码
      width: 1550,
      height: 210
    });
    option && myChart.setOption(option, true);

  }
}
</script>
<style lang='scss' scoped>
.top {
  display: flex;
  width: 100%;
  height: 25%;
  margin: 5px;
}

.top-left {
  width: 64%;
  background-color: white;
  // border: 1px solid black;
}

.top-right1 {
  width: 17%;
  background-color: white;
  margin-left: 10px;
}

.top-right2 {
  width: 17%;
  background-color: white;
  margin-left: 10px;
}

.tag-span-left {
  margin: 5px;
  font-size: 14px;
}

.tag-span-right {
  margin: 10px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}

.middle1 {
  width: 100%;
  height: 15%;
  display: flex;
  margin: 10px 5px;
  background-color: white;
  // border: 1px solid black;
}

.middle1>div {
  flex: 1;
  color: rgb(56, 127, 190);
  margin: 10px;
  text-align: center;
}

.middle1-icon {
  color: rgb(52, 186, 244);
  background-color: rgb(222, 243, 253);
  font-size: 20px;
}

.middle2 {
  display: flex;
  width: 100%;
  height: 30%;
  margin: 5px;
}

.middle2-left {
  width: 50%;
  background-color: white;
  // border: 1px solid black;
}

.middle2-right1 {
  width: 25%;
  background-color: white;
  margin-left: 10px;
}

.middle2-right2 {
  width: 25%;
  background-color: white;
  margin-left: 10px;
}

.footer {
  width: 100%;
  height: 30%;
  margin: 5px;
  background-color: white;

}
</style>