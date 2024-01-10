<template>
  <div id="clientChart" ref="clientChart" :style="{ width: width, height: height }"></div>
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
      this.chart = echarts.init(this.$refs.clientChart)
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
          }
        },
        legend: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [30, 40, 25, 60, 50, 44]
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#clientChart {
  top: -20px
}
</style>