<template>
  <div id="ClientChart" ref="ClientChart" :style="{ width: width, height: height }"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  data () {
    return {
      chart: null
    }
  },
  props: {
    // chartData:{
    //    type:Array,
    //    require:true
    // }
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    }
  },
  mounted () {
    this.initChart()

  },
  beforeDestroy () {
    if (this.echarts) {
      this.echarts.dispose()
      this.echarts = null
    }
  },
  methods: {
    initChart () {
      this.chart = echarts.init(this.$refs.ClientChart)
      this.chart.setOption(this.option)
    }
  },
  computed: {
    option () {
      return {
        tooltip: {
          position: function (point) {
            // 固定在顶部
            return [point[0] - 50, point[1] - 65];
          },
          valueFormatter: (value) => value + '名'
        },
        xAxis: [
          {
            type: 'value',
            // axisLabel: {
            //   formatter: '{value} %'
            // },
            // min: 0,
            // max: 100
          }
          // {
          //   type: 'value',
          //   data: [
          //     '0%',
          //     '20%',
          //     '40%',
          //     '60%',
          //     '80%',
          //     '100%',
          //   ]
          // }
        ],
        yAxis: [
          {
            type: 'category',
            inverse: true,
            data: ['潜在客户', '目标客户', '意向客户', '成交客户']
          },
        ],
        series: [
          {
            name: '客户',
            type: 'bar',
            itemStyle: {
              color: '#1e59fa'
            },
            label: {
              show: true,
              position: 'right',
              valueAnimation: true,
              // formatter: ({ data }) => { return `${data} %` }
            },
            // data: [6431, 32122, 70321, 42323]
            data: [6431, {
              value: 32122,
              // 设置单个柱子的样式
              itemStyle: {
                color: '#5c7bd9',
              }
            }, {
                value: 70321,
                // 设置单个柱子的样式
                itemStyle: {
                  color: '#f29f4d',
                }
              }, {
                value: 42323,
                // 设置单个柱子的样式
                itemStyle: {
                  color: '#da33a6',
                }
              }]
          },
        ]
      };
    }
  }
}
</script>

<style lang="scss" scoped>
#ClientChart {
  margin-top: -13%
}
</style>