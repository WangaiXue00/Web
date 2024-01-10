<template>
  <div class="assistant" style="display: flex;">
    <div style="width: 20%;padding: 10px;border-right:1px solid #ccc;">
        <el-input placeholder="请输入岗位" v-model="input" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <div>
            <div class="top-right" v-for="(item,i) in posts" :key="i" @click="search(item)">{{ item }}</div>
        </div>
    </div>
    <div style="width: 80%;margin-left:10px ;">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="智能推荐" name="first">
                <div class='midden' v-for="(item,i) in list" :key="i">
                    <div style="width: 10%;border-right: 1px solid #ccc;">
                        <el-image style="width: 100px;height: 140px;" :src="item.url" />
                    </div>
                    <div style="width: 50%;font: 600 15px 雅黑;">
                        <div style="margin-bottom: 10px;">
                            <span class="mideen-center">{{ item.name}}</span>
                            <span>{{ item.position }}</span>
                        </div>
                        <div style="margin-bottom: 10px;font: 700 13px 楷体;">
                            <span class="mideen-center">{{ item.sex}}</span>
                            <span class="mideen-center">{{ item.age}}</span>
                            <span class="mideen-center">{{ item.address}}</span>
                            <span>{{ item.year }}</span>
                        </div>
                        <div style="margin-bottom: 10px;" v-for="(work,i) in item.works" :key="i">
                            <span class="mideen-center">{{ work.position}}</span>
                            <span class="mideen-center">{{ work.corporation }}</span>
                            <span>{{ work.term }}</span>
                        </div>
                        <div>
                            <span class="mideen-center">{{ item.school}}</span>
                            <span class="mideen-center">{{ item.profession}}</span>
                            <span class="mideen-center">{{ item.education}}</span>
                            <span>{{ item.time }}</span>
                        </div>
                    </div>
                    <div style="width: 40%;position: relative;">
                        <div class="bottom-bt">
                            <el-button style="background: linear-gradient(to right,rgb(41, 123, 230), #7649df);color: #fff;" round icon="el-icon-check" autofocus @click="add(item)">采纳</el-button>
                            <el-button round icon="el-icon-close">不合适</el-button>
                        </div>
                        <div class="bottom-recommend">
                            <div>
                                <span>推荐指数：</span>
                                <el-rate
                                v-model="item.rate"
                                    style="display: inline-block;"
                                    disabled
                                    show-score
                                    text-color="#ff9900"
                                    score-template="{value}分">
                                </el-rate>
                            </div>
                            <div>
                                <span>推荐原因：</span>
                                <el-tag style="margin:0 10px 5px 0;" v-for="(tag,i) in item.resons" :key="i">{{ tag }}</el-tag>
                            </div>
                        </div>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="所有人才库" name="second">配置管理</el-tab-pane>
        </el-tabs>
        
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            input:'',
            activeName: 'first',
            posts:['JAVA开发工程师','结构设计师(上海)','总部营销财务COE专业','网络工程师(北京)','JAVA开发工程师','结构设计师(上海)','网络工程师(北京)','JAVA开发工程师','总部营销财务COE专业','JAVA开发工程师','结构设计师(上海)','总部营销财务COE专业','网络工程师(北京)','JAVA开发工程师','结构设计师(上海)','网络工程师(北京)','JAVA开发工程师','总部营销财务COE专业','网络工程师(北京)','JAVA开发工程师','结构设计师(上海)','网络工程师(北京)','JAVA开发工程师','总部营销财务COE专业','网络工程师(北京)','JAVA开发工程师','结构设计师(上海)','网络工程师(北京)','JAVA开发工程师','总部营销财务COE专业'],
            list: [{
                url:require('@/assets/images/image1.jpg'),
                name:'许玮伦',
                position:'销售经理',
                sex:'女',
                age:'30岁',
                address:'苏州市',
                year:'5年工作经验',
                works:[{
                    position:'销售经理',
                    corporation:'浙江智泓科技有限公司',
                    term:'2020-07至今'
                },{
                    position:'产品销售',
                    corporation:'浙江智泓科技有限公司',
                    term:'2015-07至2020-07'
                }],
                school:'南京农业大学',
                profession:'计算机科学技术',
                education:'硕士',
                time:'2013-09至2015-07',
                rate:4,
                resons: ['教育良好','技能相符','技能相符相符相符','技能相符相符相符','技能相符相符相符','技能相符相符相符']
            },{
                url:require('@/assets/images/image2.jpg'),
                name:'许玮伦',
                position:'销售经理',
                sex:'女',
                age:'30岁',
                address:'苏州市',
                year:'8年工作经验',
                works:[{
                    position:'销售经理',
                    corporation:'浙江智泓科技有限公司',
                    term:'2020-07至今'
                },{
                    position:'产品销售',
                    corporation:'浙江智泓科技有限公司',
                    term:'2015-07至2020-07'
                }],
                school:'南京农业大学',
                profession:'计算机科学技术',
                education:'硕士',
                time:'2013-09至2015-07',
                rate:3.8,
                resons: ['教育良好','技能相符','技能相符相符相符','技能相符相符相符','技能相符相符相符','技能相符相符相符']
            },{
                url:require('@/assets/images/image3.jpg'),
                name:'许玮伦',
                position:'销售经理',
                sex:'女',
                age:'30岁',
                address:'苏州市',
                year:'5年工作经验',
                works:[{
                    position:'销售经理',
                    corporation:'浙江智泓科技有限公司',
                    term:'2020-07至今'
                },{
                    position:'产品销售',
                    corporation:'浙江智泓科技有限公司',
                    term:'2015-07至2020-07'
                }],
                school:'南京农业大学',
                profession:'计算机科学技术',
                education:'硕士',
                time:'2013-09至2015-07',
                rate:3,
                resons: ['教育良好','技能相符','技能相符相符相符','技能相符相符相符','技能相符相符相符','技能相符相符相符']
            },{
                url:require('@/assets/images/image1.jpg'),
                name:'许玮伦',
                position:'销售经理',
                sex:'女',
                age:'30岁',
                address:'苏州市',
                year:'5年工作经验',
                works:[{
                    position:'销售经理',
                    corporation:'浙江智泓科技有限公司',
                    term:'2020-07至今'
                },{
                    position:'产品销售',
                    corporation:'浙江智泓科技有限公司',
                    term:'2015-07至2020-07'
                }],
                school:'南京农业大学',
                profession:'计算机科学技术',
                education:'硕士',
                time:'2013-09至2015-07',
                rate:4,
                resons: ['教育良好','技能相符','技能相符相符相符','技能相符相符相符','技能相符相符相符','技能相符相符相符']
            },{
                url:require('@/assets/images/image3.jpg'),
                name:'许玮伦',
                position:'销售经理',
                sex:'女',
                age:'30岁',
                address:'苏州市',
                year:'5年工作经验',
                works:[{
                    position:'销售经理',
                    corporation:'浙江智泓科技有限公司',
                    term:'2020-07至今'
                },{
                    position:'产品销售',
                    corporation:'浙江智泓科技有限公司',
                    term:'2015-07至2020-07'
                }],
                school:'南京农业大学',
                profession:'计算机科学技术',
                education:'硕士',
                time:'2013-09至2015-07',
                rate:3,
                resons: ['教育良好','技能相符','技能相符相符相符','技能相符相符相符','技能相符相符相符','技能相符相符相符']
            }]
        }
    },
    methods: {
        handleClick(tab, event) {
            // console.log(tab, event);
        },
        add(res) {
            // console.log(res)
        },
        search(res) {
            console.log(res)
        }
    }
}
</script>

<style lang="scss"  scoped >
::v-deep .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
}
.top-right {
    width: 80%;
    height: 40px;
    line-height: 40px;
    margin-left:10px ;
}
.midden {
    display: flex;
    width: 100%;
    height: 200px;
    background-color: #fff;
    margin-top:15px;
    padding: 40px 30px 20px 30px;
    border-radius: 10px;
}
.mideen-center {
    padding: 0 10px;
    margin-right:10px ;
    border-right: 1px solid rgb(204, 204, 204,0.8)
}
.bottom-bt {
    display: none;
}
.bottom-recommend {
    position: absolute;
    bottom: 0;
    font: 700 14px 黑体;
}
.midden:hover {
    background: linear-gradient(
        to right,
        rgba(114, 185, 243, 0.2),
        rgb(168, 69, 226,0.2)
    );
    .bottom-bt {
    display: block;
}
}
</style>