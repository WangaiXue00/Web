<template>
  <div id="TargetChart" ref="TargetChart" :style="{ width: width, height: height }"></div>
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
      this.chart = echarts.init(this.$refs.TargetChart)
      this.chart.setOption(this.option)
    }
  },
  computed: {
    option () {
      return {
        tooltip: {
          position: function (point) {
            // 固定在顶部
            return [point[0] - 50, point[1] - 80];
          },
          valueFormatter: (value) => value + '万'
        },
        // legend: {},
        xAxis: {
          data: ['合同额', '回款额', '开票额', '应收款', '逾期额']
        },
        yAxis: {
          axisLabel: {
            formatter: '{value} 万'
          },
        },
        series: [
          {
            name: '金额',
            type: 'bar',
            barWidth: '55%',
            itemStyle: {
              color: '#73c0df'
            },
            data: [100, {
              value: 43,
              // 设置单个柱子的样式
              itemStyle: {
                color: '#5c7bd9',
              }
            }, {
                value: 100,
                // 设置单个柱子的样式
                itemStyle: {
                  color: '#f29f4d',
                }
              }, {
                value: 180,
                // 设置单个柱子的样式
                itemStyle: {
                  color: '#da33a6',
                }
              }, {
                value: 43,
                // 设置单个柱子的样式
                itemStyle: {
                  color: '#5be0d8',
                }
              }]
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// #TargetChart {
//   top: -50%
// }
</style>