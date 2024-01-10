<template>
  <div id="staffChart" ref="staffChart" :style="{ width: width, height: height }"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  data() {
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
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    if (this.echarts) {
      this.echarts.dispose()
      this.echarts = null
    }
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.staffChart)
      this.chart.setOption(this.option1)
    }
  },
  computed: {
    option1() {
      return {
        tooltip: {
          // trigger: 'axis',
          // axisPointer: {
          //   type: 'cross'
          // },
          position: function (point) {
            // 固定在顶部
            return [point[0] - 50, point[1] - 80]
          },
          valueFormatter: value => value + '名'
        },
        // legend: {},
        xAxis: {
          data: ['试用', '一年', '两年', '三年', '四年', '五年']
        },
        yAxis: {},
        series: [
          {
            name: '员工数量',
            type: 'bar',
            itemStyle: {
              color: '#8fcd76'
            },
            // data: [30, 40, 25, 60, 50, 44]
            data: [
              30,
              {
                value: 43,
                itemStyle: {
                  color: '#5c7bd9'
                }
              },
              {
                value: 75,
                itemStyle: {
                  color: '#f29f4d'
                }
              },
              {
                value: 66,
                itemStyle: {
                  color: '#da33a6'
                }
              },
              {
                value: 84,
                itemStyle: {
                  color: '#5be0d8'
                }
              },
              {
                value: 84,
                itemStyle: {
                  color: '#5be0d8'
                }
              }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#staffChart {
  top: -50%;
}
</style>