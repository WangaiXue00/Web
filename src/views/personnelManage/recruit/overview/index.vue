<template>
  <div style="background-color: #f1f1f1;padding: 10px;">
    <div class="top">
        <div>
            <el-image
            style="width: 50px; height: 50px;border-radius: 50%;float: left;"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover"></el-image>
            <div style="float: left;margin-left: 5px;">
                <span style="font:700 16px black">瑞通,上午好</span>
                <span style="display: block;font:500 12px black">2023年11月1日 周三 <i class="el-icon-location"></i>北京市 🌤 20℃</span>
            </div>
        </div>
        <div>
            <el-input placeholder="请输入内容" v-model="search" style="width: 300px;float: left;">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
            <el-button style="float: right;margin-left: 10px;">+ 新建应聘者</el-button>
        </div>
    </div>
    <div class="midden">
        <el-button-group>
            <el-button size="mini">近1月</el-button>
            <el-button size="mini">近3月</el-button>
            <el-button size="mini">近半年</el-button>
        </el-button-group>
        <div style="display: flex;justify-content:space-around;">
            <div class="midden-common" style="width: 30%;">
                <div class="color-block" style="background-color: greenyellow;"></div>
                <div style="font:700 16px black">简历筛选</div>
                <div style="display: flex;">
                    <div style="margin: 10px 50px 0 0;">
                        <div style="font:700 20px black">870</div>
                        <div style="font:400 12px black">待处理新简历</div>
                    </div>
                    <div style="margin: 10px 0 0 50px;">
                        <div style="font:700 20px black">20</div>
                        <div style="font:400 12px black">待反馈的筛选</div>
                    </div>
                </div>
            </div>
            <div class="midden-common" style="width: 40%;">
                <div class="color-block" style="background-color: orangered;"></div>
                <div style="font:700 16px black">面试</div>
                <div style="display: flex;">
                    <div style="margin: 10px 50px 0 0;">
                        <div style="font:700 20px black">36</div>
                        <div style="font:400 12px black">待安排的面试</div>
                    </div>
                    <div style="margin: 10px  40px 0 40px;">
                        <div style="font:700 20px black">30</div>
                        <div style="font:400 12px black">待进行的面试</div>
                    </div>
                    <div style="margin: 10px  0 0 40px;">
                        <div style="font:700 20px black">8</div>
                        <div style="font:400 12px black">待评价的面试</div>
                    </div>
                </div></div>
            <div class="midden-common" style="width: 15%;">
                <div class="color-block" style="background-color: steelblue;"></div>
                <div style="font:700 16px black;">offer</div>
                <div style="display: flex;">
                    <div style="margin: 10px 30px 0 0;">
                        <div style="font:700 20px black;">8</div>
                        <div style="font:400 12px black;">待发offer</div>
                    </div>
                </div></div>
            <div class="midden-common" style="width: 15%;">
                <div class="color-block" style="background-color: lightcoral;"></div>
                <div style="font:700 16px black;">录用</div>
                <div style="display: flex;">
                    <div style="margin: 10px 30px 0 0;">
                        <div style="font:700 20px black;">5</div>
                        <div style="font:400 12px black;">待入职</div>
                    </div>
                </div></div>
        </div>
    </div>
    <div class="foot">
        <div class="foot-children" style="margin-right: 10px;">
            <div style="font:700 16px black;margin: 10px;">面试日程</div>
            <el-calendar :range="weekList">
                <template 
                slot="dateCell"
                slot-scope="{date,data}">
                <div style="display: flex;flex-direction: column;" @click="isClick(date,data)">
                    <span v-if="data.day == today" style="color: #0000ff ;">今</span>
                    <span v-else
                        style="height: 10px;"
                        :class="data.isSelected ? 'selected':''">
                        {{ data.day.split('-').slice(1)[1] }}
                    </span>
                    <span>.</span>
                </div>
                </template>
            </el-calendar>
            <el-timeline>
                <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :icon="activity.icon"
                :type="activity.type"
                :color="activity.color"
                :size="activity.size"
                :timestamp="activity.timestamp">
                <el-tag>{{ activity.rounds }}</el-tag>
                <span style="font-weight: 700;">{{activity.content}}</span>
                <span style="display: block;font-size: 12px;">{{ activity.description }}</span>
                </el-timeline-item>
            </el-timeline>
        </div>
        <div class="foot-children">
            <div style="margin: 10px;">
                <el-button type="primary" size="mini" round>待我处理的任务</el-button>
                <el-button size="mini" round>我安排的任务</el-button>
            </div>
            <div style="display: flex;justify-content: space-around;">
                <div class="foot-right">
                    <div class="right-first">0 待筛选的简历</div>
                    <div class="right-second">已完成的筛选 ></div>
                </div>
                <div class="foot-right">
                    <div class="right-first">42 指派给我的应聘者</div>
                </div>
            </div>
            <div style="display: flex;justify-content: space-around;margin-top: 10px;">
                <div class="foot-right">
                    <div class="right-first">5 待进行的面试</div>
                    <div class="right-second">已完成的面试 ></div>
                </div>
                <div class="foot-right">
                    <div class="right-first">4 待评价的面试</div>
                    <div class="right-second">已完成的面试 ></div>
                </div>
            </div>
            <div class="foot-right" style="width:95%;margin: 10px 0 0 20px;">
                    <div class="right-first">2 待审批的offer</div>
                    <div class="right-second">全部offer ></div>
            </div>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
    name:'overview',
    data() {
        return {
            search:'',
            weekList:[],
            today:'',
            activities: [{
                rounds:'复试',
                content: '高级产品经理 - 王莹',
                description:'杨小贝 安排|北京市海淀区上地东路35号泉汇大厦7层北森云会议室',
                timestamp: '09:00 - 10:00',
                size: 'large',
                color: '#0bbd87'
                }, {
                rounds:'初试',
                content: ' 2023校招产品经理 -吴梅等23人',
                description:'杨小贝 安排|北京市海淀区上地东路35号泉汇大厦7层北森云会议室',
                timestamp: '14:00 - 15:00',
                color: '#0bbd87'
                }, {
                rounds:'复试',
                content: '高级产品经理 - 孙佳',
                description:'杨小贝 安排|北京市海淀区上地东路35号泉汇大厦7层北森云会议室',
                timestamp: '16:30 - 17:30',
                size: 'large'
                }, {
                rounds:'初试',
                content: '高级产品经理 - 王女士',
                description:'杨小贝 安排|北京市海淀区上地东路35号泉汇大厦7层北森云会议室',
                timestamp: '20:00 - 20:50'
                }]
        }
    },
    created() {
        this.getWeekList()
    },
    methods: {
        getWeekList() {
            const now = new Date()
            const nowTime = now.getTime()
            const day = now.getDay()
            this.today = now.toISOString().slice(0, 10)
            console.log(this.today,day)
            const oneDayTime = 24*60*60*1000;
            if(day !== 0) {
                //显示周一
                const MondayTime = nowTime - (day-1)*oneDayTime;
                //显示周日
                const SundayTime = nowTime + (7-day)*oneDayTime;
                //初始化日期时间
                const start = new Date(MondayTime);
                const end = new Date(SundayTime);
                // console.log(start.toLocaleDateString())
                const monday1 = start.toLocaleDateString()
                const sunday1 = end.toLocaleDateString()
                const monday = monday1.replaceAll('/','-')
                const sunday = sunday1.replaceAll('/','-')
                this.weekList = [monday,sunday]
            } else {
                const monTime = nowTime - 6*oneDayTime
                const sunTime = nowTime
                const start = new Date(monTime);
                const end = new Date(sunTime);
                // console.log(start.toLocaleDateString())
                const monday1 = start.toLocaleDateString()
                const sunday1 = end.toLocaleDateString()
                const mon = monday1.replaceAll('/','-')
                const sun = sunday1.replaceAll('/','-')
                this.weekList = [mon,sun]
            }
            console.log(this.weekList)
        },
        isClick(date,data) {
            // const clickDay = date.getDate()
                console.log(typeof(date),11,data)
        }
    }
}
</script>

<style>
.top {
    display:flex;
    justify-content:space-between;
    width: 100%;
    height: 10%;
}
.midden {
    width: 100%;
    height: 20%;
    background: #fff;
    margin-top: 10px;
    border-radius: 5px;
    padding: 5px;
}
.midden-common {
    position: relative;
    height:100px;
    border: 1px solid #d6d4d4;
    border-radius: 5px;
    margin: 10px 10px 0 0;
    padding:10px;
}
.color-block {
    position: absolute;
    top: 13px;
    left: 0;
    width: 5px;
    height: 15px;
    border-radius: 0 3px 3px 0;
}
.foot {
    display: flex;
    width: 100%;
    height: 70%;
    margin: 10px 10px 0 0;
}
.foot-children {
    width: 50%;
    background-color: #fff;
    border-radius: 5px;
}
.foot-right{
    position: relative;
    width: 45%;
    height: 100px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
}
.foot-right:hover {
    color: orange;
    border: 2px solid orange;
}
.right-first {
    font-size: 20px;
    font-weight: 700;
}
.right-second {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 14px;
}
.selected {
    color:  #1989FA;
}
.el-calendar-table tr td:first-child  {
    border: none;
}
.el-calendar-table tr:first-child td {
    border: none;
}

.el-calendar-table tr td:first-child {
    border: none;
}
.el-calendar-table td {
    border: none;
}
.el-calendar-table .el-calendar-day {
    height: 40px;
    text-align: center;
}
</style>