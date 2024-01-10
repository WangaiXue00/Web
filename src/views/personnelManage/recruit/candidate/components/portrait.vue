<template>
  <div style="background-color: #eeeeee;">
    <div style="display: flex;height: 500px;">
        <!-- 个人信息 -->
        <div style="width: 33%;background-color: #fff;margin: 10px;">
            <div style="display: flex;justify-content: center;">
            <el-image
                style="width: 100px; height: 100px;"
                :src="url"></el-image>
            </div>
            <div class="item-person">
                <h3 style="font-weight:600;">{{ form.name }}</h3>
                <span>{{ form.sex }}</span>
                <el-tag type="success">8.5222分</el-tag>
            </div>
            <div style="margin-left: 10px;font-size: 13px;">所属招聘计划：{{ form.ypzw }}</div>
            <div style="padding: 10px;">
                <el-descriptions class="margin-top" :column="2" :size="size" >
                    <el-descriptions-item label="民族">{{ form.minzu }}</el-descriptions-item>
                    <el-descriptions-item label="年龄">{{ form.age }}</el-descriptions-item>
                </el-descriptions>
                <el-descriptions class="margin-top" :column="1" :size="size">
                    <el-descriptions-item label="出生日期">{{ form.birthdate }}</el-descriptions-item>
                    <el-descriptions-item label="外语水平">{{ form.waiyushuiping }}</el-descriptions-item>
                    <el-descriptions-item label="电脑水平">{{ form.diannaoshuiping }}</el-descriptions-item>
                    <el-descriptions-item label="预计入职日期">{{ form.yjrzrq }}</el-descriptions-item>
                    <el-descriptions-item label="是否需要宿舍">{{ form.sushe===1? '是':'否' }}</el-descriptions-item>
                    <el-descriptions-item label="推荐人姓名">{{ form.commendname }}</el-descriptions-item>
                    <el-descriptions-item label="招聘渠道">{{ form.zpqd }}</el-descriptions-item>
                </el-descriptions>
            </div>
        </div>
        <div id="main" style="width: 67%;height: 96%;background-color: #fff;margin: 10px 10px 0 10px"></div>
    </div>
    <div class="portrait">
        <!-- 地址和联系方式 -->
        <div class="portrait-item">
            <div>
                <el-tag class="tag">地址和联系方式</el-tag>
                <el-descriptions class="margin-top" :column="1" :size="size">
                    <el-descriptions-item label="手机号码" >{{ form.phonenumber }}</el-descriptions-item>
                    <el-descriptions-item label="私人邮箱" >{{ form.email }}</el-descriptions-item>
                    <el-descriptions-item label="现居地址" >{{ form.address }}</el-descriptions-item>
                    <el-descriptions-item label="户籍地址" >{{ form.hujidizhi }}</el-descriptions-item>
                    <el-descriptions-item label="户口性质" >{{ form.hukouxingzhi }}</el-descriptions-item>
                    <el-descriptions-item label="联系地址" >{{ form.lianxidizhi }}</el-descriptions-item>
                    <el-descriptions-item label="家庭固话" >{{ form.addressphone }}</el-descriptions-item>
                    <el-descriptions-item label="总工作年限" >{{ form.workyear }}</el-descriptions-item>
                </el-descriptions>
            </div>
        </div>
        <!-- 学历信息 -->
        <div class="portrait-item">
            <div style="height: 300px;">
                <el-tag class="tag">学历信息</el-tag>
                <el-steps direction="vertical" :active="studyList.length">
                    <!-- <el-step title="alertinfo" 
                      description="alertinfo" 
                      v-for="(item,i) in studyList"
                      :key="i">
                        <template slot="title">{{ item.studystarttime }} - {{ item.graduatetime }}</template>
                        <template slot="description">{{item.graduateschool}}{{item.studyzhuanye}}{{item.study}}学历</template>
                    </el-step> -->
                    <el-step title="alertinfo" 
                      description="alertinfo" v-if="studyList.length >= 1">
                        <template slot="title">{{ studyList[0].studystarttime }} - {{ studyList[0].graduatetime }}</template>
                        <template slot="description">{{studyList[0].graduateschool}}{{studyList[0].studyzhuanye}}{{studyList[0].study}}学历</template>
                    </el-step>
                    <el-step title="本科学历" 
                      description="无" v-else></el-step>
                    <!-- 硕士 -->
                    <el-step title="alertinfo" 
                      description="alertinfo" v-if="studyList.length >= 2">
                        <template slot="title">{{ studyList[1].studystarttime }} - {{ studyList[1].graduatetime }}</template>
                        <template slot="description">{{studyList[1].graduateschool}}{{studyList[1].studyzhuanye}}{{studyList[1].study}}学历</template>
                    </el-step>
                    <el-step title="硕士研究生学历" 
                      description="无" v-else></el-step>
                    <!-- 博士 -->
                    <el-step title="alertinfo" 
                      description="alertinfo" v-if="studyList.length === 3">
                        <template slot="title">{{ studyList[2].studystarttime }} - {{ studyList[2].graduatetime }}</template>
                        <template slot="description">{{studyList[2].graduateschool}}{{studyList[2].studyzhuanye}}{{studyList[2].study}}学历</template>
                    </el-step>
                    <el-step title="博士研究生学历" 
                      description="无" v-else></el-step>
                </el-steps>
            </div>
        </div>
        <!-- 面试信息 -->
        <div class="portrait-item">
            <div style="height: 300px;">
                <el-tag class="tag">面试信息</el-tag>
                <el-steps direction="vertical" :active="interviews.length + 1">
                    <el-step title="简历筛选" description="alertinfo">
                        <template slot="description">待面试</template>
                    </el-step>
                    <el-step 
                      title="alertinfo" 
                      description="alertinfo"
                      v-for="i in MSCount"
                      :key="i">
                        <template slot="title">第{{ i }}轮面试</template>
                        <template v-if="interviews[i-1]" slot="description">面试{{ interviews[i-1].msdjg}}</template>
                        <template v-else slot="description">面试未通过</template>
                    </el-step>
                </el-steps>
            </div>
        </div>
        <!-- offer信息 -->
        <!-- <div class="portrait-item">
            <div>
                <el-tag class="tag">offer信息</el-tag>
                <el-descriptions class="margin-top" :column="1" :size="size">
                    <el-descriptions-item label="姓名">智禾</el-descriptions-item>
                    <el-descriptions-item label="临时员工号">LS202308150026</el-descriptions-item>
                    <el-descriptions-item label="业务部门">开发部门</el-descriptions-item>
                    <el-descriptions-item label="职位">高级前端开发工程师</el-descriptions-item>
                    <el-descriptions-item label="职级">L6</el-descriptions-item>
                    <el-descriptions-item label="报到日期&时间">2023年7月1日早8点</el-descriptions-item>
                    <el-descriptions-item label="试用期期限">3个月</el-descriptions-item>
                    <el-descriptions-item label="劳动合同期限">18年</el-descriptions-item>
                    <el-descriptions-item label="试用期薪资">1.5w</el-descriptions-item>
                    <el-descriptions-item label="正式薪资">2w</el-descriptions-item>
                </el-descriptions>
            </div>
        </div> -->
    </div>
    <!-- 培训记录表 -->
    <div style="height: 220px;margin-top: 8px;">
        <el-tag class="tag" effect="dark">培训记录</el-tag>
        <el-table
            :data="trainData"
            height="170"
            style="width: 100%"> 
            <el-table-column
            prop="trainstarttime"
            label="培训开始时间"
            width="150">
            </el-table-column>
            <el-table-column
            prop="trainstoptime"
            label="培训结束时间"
            width="150">
            </el-table-column>
            <el-table-column
            prop="trainjigou"
            label="培训机构">
            </el-table-column>
            <el-table-column
            prop="trainproject"
            label="培训项目">
            </el-table-column>
            <el-table-column
            prop="trainfazhengdanwei"
            label="培训发证单位">
            </el-table-column>
            <el-table-column
            prop="trainzhengshu"
            label="培训证书名称">
            </el-table-column>
        </el-table>
    </div>
    <!-- 工作经历表 -->
    <div style="height: 220px;">
        <el-tag class="tag" effect="dark">工作经历</el-tag>
        <el-table
            :data="workData"
            height="170"
            style="width: 100%"> 
            <el-table-column
            prop="workleibie"
            label="岗位类别">
            </el-table-column>
            <el-table-column
            prop="gongsiqiye"
            label="公司企业">
            </el-table-column>
            <el-table-column
            prop="renzhizhiwu"
            label="任职职务">
            </el-table-column>
            <el-table-column
            prop="zhiwuleibie"
            label="职务类别">
            </el-table-column>
            <el-table-column
            prop="zhuguangongzuo"
            label="主管工作">
            </el-table-column>
            <el-table-column
            prop="starttime"
            label="起始时间"
            width="120">
            </el-table-column>
            <el-table-column
            prop="stoptime"
            label="截止时间"
            width="120">
            </el-table-column>
            <el-table-column
            prop="lizhiyuanyin"
            label="离职原因">
            </el-table-column>
            <el-table-column
            prop="workyear"
            label="过往工作年限"
            width="120">
            </el-table-column>
            <el-table-column
            prop="workwage"
            label="过往工作月薪"
            width="120">
            </el-table-column>
            <el-table-column
            prop="zhengmingren"
            label="证明人">
            </el-table-column>
            <el-table-column
            prop="zhengmingrenphone"
            label="证明人电话">
            </el-table-column>
        </el-table>
    </div>
    <!-- 项目经验表 -->
    <div style="height: 220px;">
        <el-tag class="tag" effect="dark">项目经验</el-tag>
        <el-table
            :data="projectData"
            height="170"
            style="width: 100%"> 
            <el-table-column
            prop="starttime"
            label="过往项目起始时间"
            width="150">
            </el-table-column>
            <el-table-column
            prop="stoptime"
            label="过往项目结束时间"
            width="150">
            </el-table-column>
            <el-table-column
            prop="xmname"
            label="项目名称">
            </el-table-column>
            <el-table-column
            prop="xmmiaoshu"
            label="项目描述">
            </el-table-column>
            <el-table-column
            prop="xiangmuchengguo"
            label="项目成果">
            </el-table-column>
        </el-table>
    </div>
    <!-- 证书信息表 -->
    <div style="height: 220px;">
        <el-tag class="tag" effect="dark">证书信息</el-tag>
        <el-table
            :data="certificateData"
            height="170"
            style="width: 100%"> 
            <el-table-column
            prop="teshugongzhong"
            label="是否是特殊工种">
              <template slot-scope="scope">
                <span>{{ scope.row.teshugongzhong===1 ? '是':'否' }}</span>
              </template>
            </el-table-column>
            <el-table-column
            prop="leixing"
            label="特殊工种类型">
            </el-table-column>
            <el-table-column
            prop="zsmc"
            label="证书名称">
            </el-table-column>
            <el-table-column
            prop="zszy"
            label="证书摘要">
            </el-table-column>
            <el-table-column
            prop="fzdw"
            label="发证单位">
            </el-table-column>
            <el-table-column
            prop="fzrq"
            label="发证日期">
            </el-table-column>
            <el-table-column
            prop="sfcq"
            label="是否长期">
              <template slot-scope="scope">
                <span>{{ scope.row.sfcq===1 ? '是':'否' }}</span>
              </template>
            </el-table-column>
            <el-table-column
            prop="zsjzrq"
            label="证书有效期截止日">
            </el-table-column>
            <el-table-column
            prop="zspdf"
            label="证书pdf">
            </el-table-column>
        </el-table>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import {
    getHXRInfo,
    getStudyInfo,
    getTrainInfo,
    getWorkInfo,
    getProcessInfo,
    getZSInfo,
    getInterviewCount,
    getInterviewInfo
} from '@/api/RecruitmentManagement/portrait.js'
export default {
    name: "Portrait",
    props:["portraitForm"],
    data() { 
        return {
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            size: '',
            id:'',
            MSCount:0,
            form:{},
            trainData:[],
            workData:[],
            projectData:[],
            certificateData:[],
            studyList: [],
            interviews:[],
            // 关系图数据
            seriesData: [],
            seriesLinks: [],
            categories:[],
        }
    },
    created() {
        // console.log(this.portraitForm)
        this.id = this.portraitForm.lsygh
        this.getHXR()
        this.getStudy()
        this.getTrain()
        this.getWork()
        this.getProcess()
        this.getZS()
        this.getCount()
        this.getInterview()
    },
    mounted() {
        this.draw()
    },
    methods: {
        // 关系图配置
        draw() {
            var myChart = echarts.init(document.getElementById('main'));
            this.seriesData = [{name:"瑞通",des:"root",symbolSize:80,category:0},
                        {name:"盛趣信息技术有限公司",des:"entity",symbolSize:60,category:1},
                        {name:"Golang开发工程师",des:"entity",symbolSize:60,category:1},
                        {name:"长春理工大学",des:"entity",symbolSize:60,category:1},
                        {name:"大学英语6级(CET6)",des:"entity",symbolSize:60,category:1},
                        {name:"软件设计师(软考中级)",des:"entity",symbolSize:60,category:1},
                        {name:"商场空调工",des:"entity",symbolSize:60,category:1},
                        {name:"动物生产专业",des:"entity",symbolSize:60,category:1},
                        {name:"2015.05-2018.06",des:"entity",symbolSize:60,category:1},
                        {name:"大学毕业",des:"entity","symbolSize":60,category:1},
                        {name:"渠道商务",des:"entity",symbolSize:60,category:1}]
            this.seriesLinks = [{source:"瑞通",target:"盛趣信息技术有限公司",name:"",des:"link"},
                        {source:"瑞通",target:"Golang开发工程师",name:"",des:"link"},
                        {source:"瑞通",target:"长春理工大学",name:"",des:"link"},
                        {source:"瑞通",target:"大学英语6级(CET6)",name:"",des:"link"},
                        {source:"瑞通",target:"软件设计师(软考中级)",name:"",des:"link"},
                        {source:"瑞通",target:"商场空调工",name:"",des:"link"},
                        {source:"瑞通",target:"动物生产专业",name:"",des:"link"},
                        {source:"瑞通",target:"2015.05-2018.06",name:"",des:"link"},
                        {source:"瑞通",target:"大学毕业",name:"",des:"link"},
                        {source:"瑞通",target:"渠道商务",name:"",des:"link"}]
            for (var i = 0; i < 2; i++) {
                this.categories[i] = {
                    name: '类目' + i
                };
            }
            let option = {
                // 图的标题
                title: {
                    text: '候选人图谱'
                },
                // 提示框的配置
                // tooltip: {
                //     formatter: function (x) {
                //         return x.data.des;
                //     }
                // },
                // 工具箱
                toolbox: {
                    // 显示工具箱
                    show: true,
                    feature: {
                        mark: {
                            show: true
                        },
                        // 还原
                        restore: {
                            show: true
                        },
                        // 保存为图片
                        saveAsImage: {
                            show: true
                        }
                    }
                },
                // legend: [{
                //     // selectedMode: 'single',
                //     data: this.categories.map(function (a) {
                //         return a.name;
                //     })
                // }],
                series: [{
                    type: 'graph', // 类型:关系图
                    layout: 'force', //图的布局，类型为力导图
                    symbolSize: 40, // 调整节点的大小
                    // color:['skyblue','pink'],
                    roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移,可以设置成 'scale' 或者 'move'。设置成 true 为都开启
                    draggable: true, //每个节点的拖拉
                    edgeSymbol: ['circle', 'arrow'],
                    edgeSymbolSize: [2, 6],
                    edgeLabel: {
                        normal: {
                            textStyle: {
                                fontSize: 20
                            }
                        }
                    },
                    force: {
                        repulsion: 2500,
                        edgeLength: [10, 40]
                    },
                    lineStyle: {
                        normal: {
                            width: 1,
                            color: '#4b565b',
                        }
                    },
                    edgeLabel: {
                        normal: {
                            show: true,
                            formatter: function (x) {
                                return x.data.name;
                            }
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            textStyle: {}
                        }
                    },
                    // 数据
                    data: this.seriesData,
                    links: this.seriesLinks,
                    categories: this.categories,
                }]
            };
            myChart.setOption(option);
        },
        // 获取候选人基本信息
        getHXR() {
            this.form = {}
            getHXRInfo({lsygh:this.id}).then((res) => {
                // console.log('候选人基本信息',res)
                this.form = res.rows[0]
            })
        },
        // 获取获选人学历信息
        getStudy() {
            this.studyList = []
            getStudyInfo({lsygh:this.id}).then((res) => {
                console.log('学历信息',res)
                this.studyList = res.rows
            })
        },
        // 获取候选人培训信息
        getTrain() {
            this.trainData = []
            getTrainInfo({lsygh:this.id}).then((res) => {
                // console.log('培训信息',res)
                this.trainData = res.rows
            })
        },
        // 获取候选人工作经历信息
        getWork() {
            this.workData = []
            getWorkInfo({lsygh:this.id}).then((res) => {
                // console.log('工作经历信息',res)
                this.workData = res.rows
            })
        },
        // 获取候选人项目经验信息
        getProcess() {
            this.projectData = []
            getProcessInfo({lsygh:this.id}).then((res) => {
                // console.log('项目经验信息',res)
                this.projectData = res.rows
            })
        },
        // 获取候选人证书信息
        getZS() {
            this.certificateData = []
            getZSInfo({lsygh:this.id}).then((res) => {
                // console.log('证书信息',res)
                this.certificateData = res.rows
            })
        },
        // 获取候选人安排面试次数
        getCount() {
            this.MSCount = 0
            getInterviewCount(this.id).then((res) => {
                this.MSCount = +res.data.apmscs
                console.log('MScount',this.MSCount,typeof(this.MSCount))
            })
        },
        // 获取候选人面试信息
        getInterview() {
            this.interviews = []
            getInterviewInfo({lsygh:this.id}).then((res) => {
                this.interviews = res.rows
                console.log('面试信息',this.interviews)
            })
        }
    }
}
</script>

<style>
.portrait {
  display: flex;
  height: 400px;
}
.portrait-item {
  width: 33%;
  height: 100%;
  flex-direction:column;
  background-color: #fff;
  /* border: 1px solid #ccc; */
  margin: 10px;
}
.item-person {
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 0 10px;
}
.margin-top {
    font-size: 12px;
}
.tag {
    margin:10px 0;
}
</style>