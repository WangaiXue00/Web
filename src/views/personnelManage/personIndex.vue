<template>
  <div>
    <div style="display: flex; height: 795px;margin:0 10px 20px;">
        <div style="width: 74%;height: 100%;background-color: #fff;margin-right: 20px;padding:0 30px;border-radius: 10px;">
            <div class="dPerformance" style="margin:30px 0 20px;">部门绩效</div>
            <div class="DP-TOP-father" style="display: flex;overflow: auto; white-space: nowrap;">
                <div v-for="(item,i) in section" :key="i" class="DP-top">
                    <div style="display:flex; justify-content: space-between;width:260px;margin:20px 20px 0;">
                        <div class="DP-top-title">{{ item.title }}<span style="width: 11px;height: 15px;font: bold 12px DIN;">%</span></div>
                        <div class="DP-top-icon" :style="item.style"><i class="iconfont" :class="item.icon"></i></div>
                    </div>
                    <div class="DP-top-section">{{ item.name }}</div>
                    <el-progress style="width: 85%;margin:5px 20px;" :color="item.color" :percentage="item.percentage" :show-text="false" ></el-progress>
                    <div class="DP-top-text">{{ item.text }}</div>
                </div>
            </div>
            <div class="dPerformance" style="margin: 0 30px 20px;">中层领导绩效</div>
            <div id="performance" style="width: 98%;height:450px;margin-right: 5px;"></div>
        </div>
        <div style="width: 25%;height: 100%;">
            <div style="height: 290px;background-color: #fff;margin-bottom: 20px;border-radius: 10px;padding: 30px 0 0 30px;overflow-y: scroll;">
                <div class="dPerformance" style="margin-bottom: 10px;">数据总览</div>
                <div style="display: flex;flex-wrap: wrap;">
                    <div class="dataOV">
                        <div style="display: flex;padding: 4px 3px;">
                            <img  src="@/assets/images/Frame4.png" alt="">
                            <span class="dataOV-text">1.2</span>
                        </div>
                        <div class="dataOV-content">公司人效对比</div>
                    </div>
                    <div class="dataOV">
                        <div style="display: flex;padding: 4px 3px;">
                            <img  src="@/assets/images/Frame1.png" alt="">
                            <span class="dataOV-text">498</span>
                        </div>
                        <div class="dataOV-content">公司总人数</div>
                    </div>
                    <div class="dataOV">
                        <div style="display: flex;padding: 4px 3px;">
                            <img  src="@/assets/images/Frame2.png" alt="">
                            <span class="dataOV-text">32</span>
                        </div>
                        <div class="dataOV-content">本月入职人数</div>
                    </div>
                    <div class="dataOV">
                        <div style="display: flex;padding: 4px 3px;">
                            <img  src="@/assets/images/Frame3.png" alt="">
                        <span class="dataOV-text">15</span>
                        </div>
                        <div class="dataOV-content">本月离职人数</div>
                    </div>
                </div>
            </div>
            <div style="height: 485px;background-color: #fff;border-radius: 10px;padding:30px;overflow-y: scroll;">
                <div class="dPerformance" style="margin-bottom:10px;">提醒</div>
                <div  style="display: flex;flex-wrap: wrap;">
                    <div class="warn">
                        <div class="warn-left">
                            <div style="font: 500 14px PingFang SC;color:#444444;margin-bottom: 6px;">待入职</div>
                            <div style="overflow:hidden;width: 95%;height:20px;font: 400 14px PingFang SC;color: rgba(68,68,68,0.9);text-overflow: ellipsis;white-space: nowrap;">李媛媛、王洪立、葛二蛋、王富贵、李媛媛、王洪立、葛二蛋、王富贵</div>
                        </div>
                        <div class="warn-right">
                            <span style="font: 500 20px DIN;color:#165DFF;">27</span>
                            <i class="el-icon-arrow-right"></i>
                        </div>
                    </div>
                    <div class="warn">
                        <div class="warn-left">
                            <div style="font: 500 14px PingFang SC;color:#444444;margin-bottom: 6px;">合同续约</div>
                            <div style="overflow:hidden;width: 95%;height:20px;font: 400 14px PingFang SC;color: rgba(68,68,68,0.9);text-overflow: ellipsis;white-space: nowrap;">李媛媛、王洪立、葛二蛋、王富贵、李媛媛、王洪立、葛二蛋、王富贵</div>
                        </div>
                        <div class="warn-right">
                            <span style="font: 500 20px DIN;color:#165DFF;">32</span>
                            <i class="el-icon-arrow-right"></i>
                        </div>
                    </div>
                    <div class="warn">
                        <div class="warn-left">
                            <div style="font: 500 14px PingFang SC;color:#444444;margin-bottom: 6px;">员工转正</div>
                            <div style="overflow:hidden;width: 95%;height:20px;font: 400 14px PingFang SC;color: rgba(68,68,68,0.9);text-overflow: ellipsis;white-space: nowrap;">李媛媛、王洪立、葛二蛋、王富贵、李媛媛、王洪立、葛二蛋、王富贵</div>
                        </div>
                        <div class="warn-right">
                            <span style="font: 500 20px DIN;color:#165DFF;">50</span>
                            <i class="el-icon-arrow-right"></i>
                        </div>
                    </div>
                    <div class="warn">
                        <div class="warn-left">
                            <div style="font: 500 14px PingFang SC;color:#444444;margin-bottom: 6px;">员工关怀</div>
                            <div style="overflow:hidden;width: 95%;height:20px;font: 400 14px PingFang SC;color: rgba(68,68,68,0.9);text-overflow: ellipsis;white-space: nowrap;">李媛媛、王洪立、葛二蛋、王富贵、李媛媛、王洪立、葛二蛋、王富贵</div>
                        </div>
                        <div class="warn-right">
                            <span style="font: 500 20px DIN;color:#165DFF;">30</span>
                            <i class="el-icon-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div style="display: flex; height: 442px;margin: 10px 10px 20px;">
        <!-- 人才盘点 -->
        <div style="width: 33%;background-color: #fff;margin-right: 20px;padding:20px 30px;border-radius: 10px;">
            <h1 class="dPerformance">人才盘点</h1>
            <div class="talent">
                <div style="position: absolute;top: 0;left: -5%;width: 12px;height: 51px;font-size: 12px;color: #86909C;">价值观</div>
                <div style="position: absolute;bottom: -7%;right: 0;width: 54px;height: 17px;font-size: 12px;color: #86909C;">绩效/能力</div>
                <div class="talent-item" v-for="item in 9" :key="item">
                    <div class="talent-count">28</div>
                    <div class="talent-content">人员数据：15人</div>
                    <div class="talent-content">人员占比：80%</div>
                </div>
            </div>
        </div>
        <!-- 离职员工绩效分析 -->
        <div style="width: 33%;background-color: #fff;margin-right: 20px;padding:20px 20px 20px 30px;border-radius: 10px;">
            <h1 class="dPerformance">离职员工绩效分析</h1>
            <div id="turnoverPerformance" style="width: 100%;height: 350px;"></div>
        </div>
        <!-- 部门离职人数统计 -->
        <div style="width: 32%;background-color: #fff;padding:20px 30px;border-radius: 10px;">
            <h1 class="dPerformance">部门离职人数统计</h1>
            <div id="dimission" style="width:100%;height: 350px;"></div>
        </div>
    </div>
    <!-- 同行薪资对比、人员结构 -->
    <div style="display: flex; height: 442px;margin: 10px 10px 20px;">
        <div style="width: 67%;background-color: #fff;margin-right: 20px;padding:20px 30px;border-radius: 10px;">
            <h1 class="dPerformance">同行薪资对比</h1>
            <div style="display:flex;">
                <div id="payComparison" style="width:50%;height: 350px;"></div>
                <div id="recruit" style="width:50%;height: 350px;"></div>
            </div>
        </div>
        <div style="position: relative;width: 32%;background-color: #fff;border-radius: 10px;padding:20px 30px;">
            <h1 class="dPerformance">人员结构</h1>
            <div style="position: absolute;top:32px;left:120px;display: flex;">
              <div class="button" :class="active1 === 1 ? 'active':''" size="mini" @click="personnelClick(1)">年龄</div>
              <div class="button" :class="active1 === 2 ? 'active':''" size="mini" @click="personnelClick(2)">司龄</div>
              <div class="button" :class="active1 === 3 ? 'active':''" size="mini" @click="personnelClick(3)">学历</div>
            </div>
            <div id="personnelStructure" style="width: 100%;height: 350px;"></div>
        </div>
    </div>
    <!-- 培训概览 -->
    <div style="height: 444px;background-color: #fff;margin: 10px 10px 20px;border-radius: 10px;padding:20px 30px;">
        <h1 class="dPerformance">培训概览</h1>
        <div style="display: block; width: 100%;">
            <el-table
                :data="tableData"
                style="width: 100%"
                :header-cell-style="{'background': '#165DFF','color':'#fff','font':'500 17px PingFang SC'}"
                :cell-style="{'width':'235px','font':'400 17px PingFang SC','color':'#222222'}"
                :row-class-name="tableRowClassName">
                <el-table-column
                width="60">
                </el-table-column>
                <el-table-column
                prop="section"
                label="部门">
                </el-table-column>
                <el-table-column
                prop="initiator"
                label="部门发起人">
                </el-table-column>
                <el-table-column
                prop="address"
                label="培训地点">
                </el-table-column>
                <el-table-column
                prop="theme"
                show-overflow-tooltip
                label="培训主题"
                width="350">
                    <template slot-scope="scope">
                        <div style="width: 235px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{ scope.row.theme }}</div>
                    </template>
                </el-table-column>
                <el-table-column
                prop="score"
                label="平均得分"
                width="220">
                <template slot-scope="scope">
                    <el-rate
                      v-model="scope.row.score"
                      disabled>
                    </el-rate>
                </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
    <div style="display: flex; height: 431px;margin: 10px;">
        <!-- 各部门成本预算 -->
        <div style="width: 33%;background-color: #fff;margin-right: 20px;padding:20px 30px;border-radius: 10px;">
            <h1 class="dPerformance">各部门成本预算</h1>
            <div id="budget" style="width: 100%;height:340px;"></div>
        </div>
        <!-- 工资成本统计 -->
        <div style="position: relative; width: 33%;background-color: #fff;margin-right: 20px;padding:20px 30px;border-radius: 10px;">
            <h1 class="dPerformance">工资成本统计</h1>
            <div style="position: absolute;top:32px;left:160px;display: flex;">
              <div class="button" :class="active2 === 1 ? 'active':''" size="mini" @click="wageClick(1)">总计</div>
              <div class="button" :class="active2 === 2 ? 'active':''" size="mini" @click="wageClick(2)">人均</div>
            </div>
            <div id="wage" style="width:100%;height: 350px;"></div>
        </div>
        <!-- 五险一金成本统计 -->
        <div style="position: relative; width: 33%;background-color: #fff;border-radius: 10px;padding:20px 30px;">
            <h1 class="dPerformance">五险一金成本统计</h1>
            <span style="position: absolute;top:38px;right:25px;color: #86909C;font-Size:16px;">未缴纳社保人数：<span style="color:#FB3030">40</span><i class="el-icon-arrow-right"></i></span>
            <div id="insurance" style="width:100%;height: 350px;"></div>
        </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import qiunVueUcharts from '@qiun/vue-ucharts'
export default {
    components: {
        qiunVueUcharts
    },
    name: "personIndex",
    data() {
        return {
            tableData: [{
                    section: '市场部',
                    initiator: '葛二蛋',
                    address: '市场部会议室',
                    theme:'如何扩展市场规模，提高团队哈哈哈哈哈哈哈哈',
                    score:5
                }, {
                    section: '运营部',
                    initiator: '李富贵',
                    address: '运营部会议室',
                    theme:'如何扩展市场规模，提高团队哈哈哈哈哈哈哈哈',
                    score:4
                }, {
                    section: '销售部',
                    initiator: '张歆艺',
                    address: '销售部会议室',
                    theme:'如何扩展市场规模，提高团队哈哈哈哈哈哈哈哈',
                    score:4.5
                }, {
                    section: '设计部',
                    initiator: '李舒淇',
                    address: '设计部会议室',
                    theme:'如何扩展市场规模，提高团队哈哈哈哈哈哈哈哈',
                    score:3.5
                }, {
                    section: '研发部',
                    initiator: '王富贵',
                    address: '研发部会议室',
                    theme:'如何扩展市场规模，提高团队哈哈哈哈哈哈哈哈',
                    score:5
                }, {
                    section: '总经办',
                    initiator: '李元整',
                    address: '总经办会议室',
                    theme:'如何扩展市场规模，提高团队哈哈哈哈哈哈哈哈',
                    score:3
            }],
            section:[
                {
                    name: '销售部',
                    title:50,
                    icon: 'icon-up',
                    percentage:50,
                    color:'#165DFF',
                    style:"background: linear-gradient(180deg, #70A6F6 0%, #347CE8 100%);",
                    text:'年度预计销售额：1000万元  当前完成销售额900'
                },{
                    name: '采购部',
                    title:40,
                    icon: 'icon-gwc',
                    percentage:40,
                    color:'#F84A4A',
                    style:"background: linear-gradient(180deg, #FF8383 0%, #FC3D3D 100%);",
                    text:'采购部预计本年节省100万元 当前以节省70万'
                },{
                    name: '市场部',
                    title:70,
                    icon: 'icon-dp',
                    percentage:70,
                    color:'#23C88A',
                    style:'background: linear-gradient(180deg, #4DF3AB 0%, #0FBE7D 100%);',
                    text:'年度预计销售额：1000万元  当前完成销售额900'
                }
            ],
            offset: {
                left: 0,
                top: 0,
            },
            active1:1,
            active2:1
        }
    },
    mounted() {
        this.DPdraw()
        this.dimissionDraw()
        this.PCDraw()
        this.TPdraw()
        this.recruitDraw()
        this.personnelStructure()
        this.budgetDraw()
        this.wageDraw()
        this.insuranceDeaw()
    },
    methods: {
        tableRowClassName({rowIndex}) {
            if (rowIndex%2  === 1) {
                return 'success-row';
            }
        },
        //人员结构按钮组点击事件
        personnelClick(index) {
            // console.log(index)
            this.active1 = index
        },
        // 工资成本统计按钮点击事件
        wageClick(index) {
            this.active2 = index
        },
        // 中层领导绩效图表
        DPdraw() {
            var chartDom = document.getElementById('performance');
            var myChart = echarts.init(chartDom);
            var option;
            option = {
            legend: {
                left:'30',
            },
            grid: {
                top: '20%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                name: '(个)',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                name: '(姓名)',
                data: ['李瑗瑗', '李二蛋', '王欣欣', '李富贵', '张欣怡']
            },
            series: [
                {
                name: '绩效得分',
                type: 'bar',
                barWidth:40,
                barGap:30,
                label:{
                    show: true, // 开启显示
                    position: 'right', // 在右边显示
                    distance: 15, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效
                    verticalAlign: 'middle',
                    textStyle: {
                        color: '#165DFF', // 顶部数据的颜色
                        font:'400 14px PingFang SC'  //顶部数据的字体样式
                    },
                },
                itemStyle:{
                    color:'#165DFF',
                    backgroundColor:'#DEE8FF'
                },
                showBackground: true, //柱状背景
                backgroundStyle: { //背景颜色，加透明度
                    color: 'rgba(222,232,255,0.2)'
                },
                data: [247, 460, 146, 380, 230]
                },
            ]
            };
            option && myChart.setOption(option);
        },
        // 离职员工绩效分析图表
        TPdraw() {
            var chartDom = document.getElementById('turnoverPerformance');
            var myChart = echarts.init(chartDom);
            var option
            var data = [
                    { value: 20, name: '100分以上',color: '#5079E9'},
                    { value: 60, name: '90-100分',color: '#FAA234'},
                    { value: 20, name: '80-90分',color: '#B795FA'},
                    { value: 10, name: '70-80分',color: '#FDD6C4'},
                    { value: 10, name: '70分以下',color: '#98CDF2'}
                ]
            var keys = Object.keys(data)
            var color = ['#5079E9','#FAA234','#B795FA','#FDD6C4','#98CDF2'],
            option = {
            legend: {
                top: '17%',
                left: '62%',
                width: 100,
                itemGap:25,
                itemWidth: 16,
                itemHeight:16,
                textStyle:{
                    fontSize:14,
                    color: '#464255',
                    rich:{
                        one:{
                            width:65,
                            color:'#464255',
                            fontSize:14
                        },
                        two: {
                            width:25,
                            color:'#464255',
                            fontSize:14
                        }
                    }
                },
                formatter: (name) => {
                    // formatter格式化函数动态呈现数据
                    // console.log(name,option.series[0].data);
                    var data = option.series[0].data;//获取数据
                    var target; // 遍历拿到数据
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].name == name) {
                            target = data[i].value;
                        }
                    }
                    return `{one|${name}}  {two|${target}%}`;
                        // 富文本第一列样式应用    富文本第二列样式应用
                },
            },
            color:['#5079E9','#FAA234','#B795FA','#FDD6C4','#98CDF2'],
            series: [
                {
                name: 'Access From',
                type: 'pie',
                radius: ['55%', '63%'],
                center: ['31%','45%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center',
                    formatter:function(params) {
                        if (params.dataIndex === 0) {
                            // console.log('params',params)
                            return `{n|${params.name}} \n \n {nm|${params.data.value}%}`
                        }
                    },
                },
                emphasis: {
                    label:{
                        show:true,
                        formatter:function(params) {
                            if (params.dataIndex !== 0) {
                                // console.log('params',params)
                                return `{n|${params.name}} \n \n {nm|${params.data.value}%}`
                            }
                        },
                        rich:{
                            n: {
                                fontSize:16,
                                fontFamily:'PingFang SC',
                                color: "#CFD3D8"
                            },
                            nm:{
                                fontSize:46,
                                fontFamily:'DIN',
                                fontWeight: "bold",
                                color:"inherit"
                            }
                        },
                    }
                },
                labelLine: {
                    show: false
                },
                data: data.map((item, index) => { return { 
                        value: item.value, 
                        name: item.name, 
                        itemStyle: { 
                            borderRadius:'50%',
                            shadowBlur: 10, 
                            shadowColor:color[index], // 根据颜色列表设置不同的阴影颜色
                            shadowOffsetX: 0, 
                            shadowOffsetY: 0
                            }
                        }
                    })
                }
            ]
            };

            option && myChart.setOption(option);
            // 默认第一个高亮
            myChart.dispatchAction({
                type:'highlight',
                seriesIndex: 0,
                dataIndex: 0
            })
            
            myChart.on('mouseover',function(e){
                // 取消所有高亮
                console.log(keys)
                myChart.dispatchAction({
                    type:'downplay',
                    seriesIndex: 0,
                    dataIndex: keys
                })
                // 当前高亮
                myChart.dispatchAction({
                    type:'highlight',
                    seriesIndex: 0,
                    dataIndex: e.dataIndex
                })
            })
            myChart.on('mouseout',function(e){
                // 取消所有高亮
                myChart.dispatchAction({
                    type:'downplay',
                    seriesIndex: 0,
                    dataIndex: keys
                })
                // 第一个高亮
                myChart.dispatchAction({
                    type:'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                })
            })
        },
        // 部门离职人数统计图表
        dimissionDraw() {
            var chartDom = document.getElementById('dimission');
            var myChart = echarts.init(chartDom);
            var option;
            option = {
            legend: {
                left:'0'
            },
            xAxis: [
                {
                type: 'category',
                data: ['销售部','财务部','行政部','开发部','运营部'],
                // axisPointer: {
                //     type: 'shadow'
                // }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '(人)',
                    min: 0,
                    max: 250,
                    interval: 50
                },{
                    type: 'value',
                    name: '(%)',
                    min: 0,
                    max: 100,
                    interval: 20
                }
            ],
            series: [
                {
                    name: '离职人数',
                    type: 'bar',
                    barWidth:10,
                    itemStyle: {
                        borderRadius: [20,20,0,0],
                        color:'#165DFF'
                    },
                    label:{
                        show: true, // 开启显示
                        position: 'top', // 在右边显示
                        distance: 10, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效
                        verticalAlign: 'middle',
                        textStyle: {
                            color: '#165DFF', // 顶部数据的颜色
                            font:'400 12px PingFang SC'  //顶部数据的字体样式
                        },
                    },
                    data: [100,165,140,67,68]
                },
                {
                    name: '离职率',
                    type: 'line',
                    smooth: true,
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                        },
                        label: {
                            show:true,
                            color: '#FFAA6C',
                            font:'400 12px PingFang SC' ,
                            position: 'top', // 在右边显示
                            distance: 10, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效
                            verticalAlign: 'middle'
                        },
                    },
                    emphasis:{
                        label: {
                            show:true,
                            color: '#FFAA6C',
                            font:'400 12px PingFang SC' ,
                            position: 'top', // 在右边显示
                            distance: 10, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效
                            verticalAlign: 'middle'
                        },
                    },
                    itemStyle: {
                        color:'#FAA234'
                    },
                    yAxisIndex: 1,
                    data: [90,50,83,70,40]
                }
            ]
            };

            option && myChart.setOption(option);
        },
        // 同行薪资对比图表1
        PCDraw() {
            var chartDom = document.getElementById('payComparison');
            var myChart = echarts.init(chartDom);
            var option;
            option = {
            legend: {
                left:'0'
            },
            xAxis: [
                {
                type: 'category',
                data: ['销售部','财务部','行政部','开发部','运营部'],
                // axisPointer: {
                //     type: 'shadow'
                // }
                }
            ],
            yAxis: [
                {
                type: 'value',
                name: '(K)',
                min: 0,
                max: 100,
                interval: 10
                }
            ],
            series: [
                {
                name: '同行业',
                type: 'bar',
                barWidth:10,
                // barGap:1,
                itemStyle: {
                    borderRadius: [20,20,0,0],
                    color:'#165DFF'
                },
                label:{
                    show: true, // 开启显示
                    position: 'top', // 在顶部显示
                    distance: 10, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效
                    verticalAlign: 'middle',
                    textStyle: {
                        color: '#165DFF', // 顶部数据的颜色
                        font:'400 12px PingFang SC'  //顶部数据的字体样式
                    },
                },
                data: [80,90,60,100,50]
                },
                {
                name: '本公司',
                type: 'bar',
                barWidth:10,
                itemStyle: {
                    borderRadius: [20,20,0,0],
                    color:'#BAC5FF'
                },
                label:{
                    show: true, // 开启显示
                    position: 'top', // 在右边显示
                    distance: 10, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效
                    verticalAlign: 'middle',
                    textStyle: {
                        color: '#7058FF', // 顶部数据的颜色
                        font:'400 12px PingFang SC'  //顶部数据的字体样式
                    },
                },
                data: [70,80,40,90,40]
                }
            ]
            };
            option && myChart.setOption(option);
        },
        // 同行薪资对比图表2
        recruitDraw() {
            var chartDom = document.getElementById('recruit');
            var myChart = echarts.init(chartDom);
            var option;
            option = {
            legend: {
                left:'0'
            },
            xAxis: [
                {
                type: 'category',
                data: ['销售部','财务部','行政部','开发部','运营部'],
                }
            ],
            yAxis: [
                {
                type: 'value',
                name: '(人)',
                min: 0,
                max: 250,
                interval: 50
                }
            ],
            series: [
                {
                name: '招聘达成',
                type: 'bar',
                barWidth:10,
                // barGap:1,
                itemStyle: {
                    borderRadius: [20,20,0,0],
                    color:'#165DFF'
                },
                label:{
                    show: true, // 开启显示
                    position: 'top', // 在顶部显示
                    distance: 10, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效
                    verticalAlign: 'middle',
                    textStyle: {
                        color: '#165DFF', // 顶部数据的颜色
                        font:'400 12px PingFang SC'  //顶部数据的字体样式
                    },
                },
                data: [100,165,140,67,68]
                }
            ]
            };
            option && myChart.setOption(option);
        },
        // 人员结构图表
        personnelStructure() {
            var chartDom = document.getElementById('personnelStructure');
            var myChart = echarts.init(chartDom);
            var option;
            var data = [
                    { value: 15, name: '25岁以下'},
                    { value: 40, name: '26-35岁'},
                    { value: 20, name: '36-45岁'},
                    { value: 10, name: '46-55岁'},
                    { value: 15, name: '55岁以上'}
                ]
            var keys = Object.keys(data)
            var color = ['#5079E9','#FAA234','#B795FA','#FDD6C4','#98CDF2'],
            option = {
            legend: {
                top: '17%',
                left: '62%',
                width: 100,
                itemGap:25,
                itemWidth: 16,
                itemHeight:16,
                textStyle:{
                    fontSize:14,
                    color: '#464255',
                    rich:{
                        one:{
                            width:55,
                            color:'#464255',
                            fontSize:14
                        },
                        two: {
                            width:20,
                            color:'#464255',
                            fontSize:14
                        }
                    }
                },
                formatter: (name) => {
                    // formatter格式化函数动态呈现数据
                    // console.log(name,option.series[0].data);
                    var data = option.series[0].data;//获取数据
                    var target; // 遍历拿到数据
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].name == name) {
                            target = data[i].value;
                        }
                    }
                    return `{one|${name}}  {two|${target}%}`;
                        // 富文本第一列样式应用    富文本第二列样式应用
                },
            },
            color:['#5079E9','#FAA234','#B795FA','#FDD6C4','#98CDF2'],
            series: [
                {
                name: 'Access From',
                type: 'pie',
                radius: ['50%', '58%'],
                center: ['31%','45%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center',
                },
                emphasis: {
                        label: {
                            show: true,
                            top:0,
                            formatter:function(params) {
                                // console.log('params',params)
                                return `{n|${params.name}} \n \n {nm|${params.data.value}%}`
                            },
                            rich:{
                                n: {
                                    fontSize:16,
                                    fontFamily:'PingFang SC',
                                    color: "#CFD3D8"
                                },
                                nm:{
                                    fontSize:46,
                                    fontFamily:'DIN',
                                    fontWeight: "bold",
                                    color: "inherit"
                                }
                        }
                        },
                        
                },
                labelLine: {
                    show: false
                },
                data: data.map((item, index) => { return { 
                        value: item.value, 
                        name: item.name, 
                        itemStyle: { 
                                borderRadius:'50%',
                                shadowBlur: 10, 
                                shadowColor:color[index], // 根据颜色列表设置不同的阴影颜色
                                shadowOffsetX: 0, 
                                shadowOffsetY: 0
                            }
                        }
                    })
                }
            ]
            };
            option && myChart.setOption(option);
            // 默认第一个高亮
            myChart.dispatchAction({
                type:'highlight',
                seriesIndex: 0,
                dataIndex: 0
            })
            
            myChart.on('mouseover',function(e){
                // 取消所有高亮
                console.log(keys)
                myChart.dispatchAction({
                    type:'downplay',
                    seriesIndex: 0,
                    dataIndex: keys
                })
                // 当前高亮
                myChart.dispatchAction({
                    type:'highlight',
                    seriesIndex: 0,
                    dataIndex: e.dataIndex
                })
            })
            myChart.on('mouseout',function(e){
                // 取消所有高亮
                myChart.dispatchAction({
                    type:'downplay',
                    seriesIndex: 0,
                    dataIndex: keys
                })
                // 第一个高亮
                myChart.dispatchAction({
                    type:'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                })
            })
        },
        // 各部门成本预算图表
        budgetDraw() {
            var chartDom = document.getElementById('budget');
            var myChart = echarts.init(chartDom);
            var option;
            option = {
                tooltip: {
                    show:true,
                    backgroundColor: 'transparent',
                    borderColor:"transparent",
                    extraCssText:'box-shadow:0 0 0px rgba(0,0,0,0)',
                    padding:0,
                    heght:20,
                },
                legend: {
                    left:'0'
                },
                xAxis: {
                    type: 'value',
                    name: '(万)',
                    min:0,
                    max:1000
                },
                yAxis: {
                    type: 'category',
                    data: ['销售部','财务部','行政部','开发部','运营部']
                },
                series: [
                    {
                        barWidth:10,
                        name: '部门经费',
                        type: 'bar',
                        // emphasis:{
                        //     label: {
                        //         show:true,
                        //         color: '#FB3030',
                        //         formatter: function (params) {
                        //             return `${params.data.count}万  ${params.data.value}% \n\n`;
                        //         },
                        //     }
                        // },
                        emphasis:{
                            disabled:true
                        },
                        tooltip: {
                            trigger:'item',
                            position: function(point,params, dom, rect,) {
                                const num1 = point[0] - 40
                                const num2 = point[1] - 30
                                // console.log(point,111,num)
                                return [num1,num2]
                            },
                            textStyle:{
                                color: '#FB3030'
                            },
                            formatter: function (params) {
                                const template = 
                                `<span>
                                    ￥ ${params.data.value}万  ${params.data.count}% 
                                </span>`
                                return template
                            },
                        },
                        itemStyle:{
                            borderRadius: [0,10,10,0],
                            color: '#F0F5FF',
                        },
                        data: [{value:800,count:80}, {value:950,count:95}, {value:750,count:75}, {value:900,count:90}, {value:850,count:85}]
                    },
                    {
                        barGap:'-100%',
                        barWidth:10,
                        name: '部门已用经费',
                        type: 'bar',
                        // emphasis:{
                        //     label: {
                        //         show:true,
                        //         color: '#165DFF',
                        //         formatter: function (params) {
                        //             return `${params.data.count}万  ${params.data.value}% \n\n`;
                        //         },
                        //     }
                        // },
                        emphasis:{
                            disabled:true
                        },
                        tooltip: {
                            trigger:'item',
                            position: function(point,params, dom, rect,) {
                                const num1 = point[0] - 40
                                const num2 = point[1] - 30
                                // console.log(point,111,num)
                                return [num1,num2]
                            },
                            textStyle:{
                                color: '#165DFF'
                            },
                            formatter: function (params) {
                                return  `<span>￥ ${params.data.value}万  ${params.data.count}% </span>`;
                            },
                        },
                        itemStyle:{
                            borderRadius:[0,10,10,0],
                            color: '#165DFF',
                        },
                        data: [{value:720,count:90}, {value:760,count:80}, {value:540,count:72}, {value:540,count:60}, {value:640,count:75.3}]
                    }
                ]
                };
            option && myChart.setOption(option);
        },
        // 工资成本统计图表
        wageDraw() {
            var chartDom = document.getElementById('wage');
            var myChart = echarts.init(chartDom);
            var option;
            option = {
            legend: {
                left:'0'
            },
            xAxis: [
                {
                type: 'category',
                data: ['一月','二月','三月','四月','五月'],
                // axisPointer: {
                //     type: 'shadow'
                // }
                }
            ],
            yAxis: [
                {
                type: 'value',
                name: '(万)',
                min: 0,
                max: 250,
                interval: 50
                }
            ],
            series: [
                {
                    name: '今年各月',
                    type: 'bar',
                    barWidth:20,
                    // barGap:1,
                    itemStyle: {
                        borderRadius: [5,5,0,0],
                        color:'#165DFF'
                    },
                    label:{
                        show: true, // 开启显示
                        position: 'top', // 在顶部显示
                        distance: 10, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效
                        verticalAlign: 'middle',
                        textStyle: {
                            color: '#165DFF', // 顶部数据的颜色
                            font:'400 12px PingFang SC'  //顶部数据的字体样式
                        },
                    },
                    data: [240,90,199,98,158]
                },
                {
                    barGap:0,
                    name: '去年同比',
                    type: 'bar',
                    barWidth:20,
                    itemStyle: {
                        borderRadius: [5,5,0,0],
                        color:'#BAC5FF'
                    },
                    label:{
                        show: true, // 开启显示
                        position: 'top', // 在右边显示
                        distance: 10, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效
                        verticalAlign: 'middle',
                        textStyle: {
                            color: '#165DFF', // 顶部数据的颜色
                            font:'400 12px PingFang SC'  //顶部数据的字体样式
                        },
                    },
                    data: [170,140,148,136,210]
                    }
                ]
            };
            option && myChart.setOption(option);
        },
        // 五险一金成本统计图表
        insuranceDeaw() {
            var chartDom = document.getElementById('insurance');
            var myChart = echarts.init(chartDom);
            var option;
            option = {
            legend: {
                left:'0'
            },
            xAxis: [
                {
                type: 'category',
                data: ['一月','二月','三月','四月','五月'],
                // axisPointer: {
                //     type: 'shadow'
                // }
                }
            ],
            yAxis: [
                {
                type: 'value',
                name: '(万)',
                min: 0,
                max: 250,
                interval: 50
                }
            ],
            series: [
                {
                    name: '今年各月',
                    type: 'bar',
                    barWidth:20,
                    // barGap:1,
                    itemStyle: {
                        borderRadius: [5,5,0,0],
                        color:'#7548F4'
                    },
                    label:{
                        show: true, // 开启显示
                        position: 'top', // 在顶部显示
                        distance: 10, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效
                        verticalAlign: 'middle',
                        textStyle: {
                            color: '#7548F4', // 顶部数据的颜色
                            font:'400 12px PingFang SC'  //顶部数据的字体样式
                        },
                    },
                    data: [240,90,199,98,158]
                },
                {
                    barGap:0,
                    name: '去年同期',
                    type: 'bar',
                    barWidth:20,
                    itemStyle: {
                        borderRadius: [5,5,0,0],
                        color:'#DAD0FF'
                    },
                    label:{
                        show: true, // 开启显示
                        position: 'top', // 在顶部显示
                        distance: 10, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效
                        verticalAlign: 'middle',
                        textStyle: {
                            color: '#7548F4', // 顶部数据的颜色
                            font:'400 12px PingFang SC'  //顶部数据的字体样式
                        },
                    },
                    data: [170,140,148,136,210]
                    }
                ]
            }
            option && myChart.setOption(option);
        },
    }
}
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
    display: none;
}
::v-deep .el-table .success-row {
    background: #F1F4FF;
}
.iconfont {
    font-size: 22px;
    color: #fff;
}
.dPerformance {
    height: 28px;
    font-size: 20px;
    font-family:PingFang SC;
    font-weight: 600;
    color: #222222;
    line-height: 23px;
}
.DP-top {
    width: 300px;
    height: 146px;
    display: inline-block;
    background: #F7F8FA;
    border-radius: 8px 8px 8px 8px;
    margin: 0 20px 40px 0;
    flex-shrink: 0;
    .DP-top-title {
        width: 31px;
        height: 34px;
        color: #333;
        text-align: center;
        font: bold 28px DIN;
    }
    .DP-top-section {
        width: 54px;
        height: 25px;
        font-size: 18px;
        font-family: PingFang SC, PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 21px;
        margin: 0 20px;
    }
    .DP-top-text {
        width: 260px;
        height: 17px;
        font-size: 12px;
        font-family: PingFang SC, PingFang SC;
        font-weight: 400;
        color: rgba(34,34,34,0.8);
        line-height: 14px;
        margin:6px 20px ;
    }
}
.DP-top ::-webkit-scrollbar {
    display: none;
}
.DP-top-icon {
    width: 44px;
    height: 44px;
    color: #fff;
    border-radius:50%;
    padding: 10px;
}
.dataOV{
    width:45%;
    height: 86px;
    background: #F7F8FA;
    border-radius: 10px 10px 10px 10px;
    margin: 10px 10px 0 0;
    padding: 15px 21px;
    .dataOV-text {
        width: 33px;
        height: 29px;
        font-size: 24px;
        font-family: DIN, DIN;
        font-weight: bold;
        color: #444444;
        line-height: 28px;
        margin-left: 6px;
    }
    .dataOV-content {
        width: 90px;
        height: 21px;
        font-size: 15px;
        font-family: PingFang SC, PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 18px;
    }
}
.warn {
    position: relative;
    width: 100%;
    height: 86px;
    background: #F7F8FA;
    border-radius: 10px 10px 10px 10px;
    margin-top:10px;
    padding: 10px;
}

.warn-left {
    width: 80%;
    height: 45px;
    padding: 10px;
}
.warn-right {
    position: absolute;
    top: 35%;
    right: 10px;
}
.talent {
    position: relative;
    display: flex;
    width: 90%;
    height: 323px;
    flex-wrap: wrap;
    border-left: 1px solid #B6C2D2;
    border-bottom: 1px solid #B6C2D2;
}
.talent-item {
    width:30%;
    height: 97px;
    margin: 0 0 10px 3%;
}
.talent-item:nth-child(4n-1) {
    background-color: #F5FAFF;
}
.talent-item:nth-child(4n) {
    background-color: #FBF9FF;
}
.talent-item:nth-child(4n+1) {
    background-color: #F5FFF1;
}
.talent-item:nth-child(4n+2) {
    background-color: #FFF8F1;
}
.talent-count {
    text-align: right;
    font-size: 20px;
    font-family: DIN, DIN;
    font-weight: bold;
    color: #165DFF;
    line-height: 23px;
    margin: 10px 10px 7px;
}
.talent-content {
    font-size: 14px;
    font-family: PingFang SC, PingFang SC;
    font-weight: 400;
    color: rgba(34,34,34,0.8);
    line-height: 16px;
    margin-bottom: 4px;
    overflow: auto;
    white-space: nowrap;
}
// 按钮的正常样式
.button {
    width: 52px;
    height: 32px;
    color: #4D4D4D;
    text-align: center;
    line-height: 32px;
}
// 按钮的驻留样式
.active {
    width: 52px;
    height: 32px;
    text-align: center;
    color: #165DFF;
    padding: 4px 0;
    font: 400 16px PingFang SC;
    background: rgb(20, 91, 255,0.1);
    border-radius: 4px 4px 4px 4px;
}
</style>