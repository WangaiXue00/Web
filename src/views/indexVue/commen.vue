<template>
  <div>
    <el-breadcrumb separator="/" style="margin-bottom: 10px;">
      <el-breadcrumb-item>工作台</el-breadcrumb-item>
      <el-breadcrumb-item>常用功能</el-breadcrumb-item>
      <el-breadcrumb-item>添加常用</el-breadcrumb-item>
    </el-breadcrumb>
    <el-tabs tab-position="left" style="height: 500px;border: 1px solid #ddd;padding: 10px;">
        <el-tab-pane label="最近使用">
            <div style="margin:0 10px;">
                <el-input placeholder="搜索你想要添加的功能" v-model="search" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search" style="color: #fff; background-color: #165dff;"></el-button>
                </el-input>
                <div style="height:460px;overflow-y: scroll;">
                    <div style="position: relative;width: 100%;margin:10px 5px;" v-for="(item, index) in list" :key="index">
                        <el-avatar shape="square" :size="80" style="border-radius: 20px;font-size: 18px;">icon</el-avatar>
                        <div style="position: absolute;top: 20%;left: 90px;">
                            <div style="text-align: start;font: 900 20px 黑体;">{{ item.name }}</div>
                            <div style="font-size: 14px;">一站式智能服务平台</div>
                        </div>
                        <div style="position: absolute;top: 20%;right: 40px;">
                            <el-button v-if="item.isShow" type="text" style="color: red;margin-right: 20px;">移除</el-button>
                            <el-button v-else type="primary" plain>添加</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </el-tab-pane>
        <el-tab-pane label="业务系统">业务系统</el-tab-pane>
        <el-tab-pane label="财务系统">财务系统</el-tab-pane>
        <el-tab-pane label="人事系统">人事系统</el-tab-pane>
        <el-tab-pane label="进销存">进销存</el-tab-pane>
        <el-tab-pane label="系统管理">系统管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
    name:'commen',
    props:['edList'],
    data() {
        return {
            search:'',
            list:[{
                name:'服务台',
                isShow:true
            },{
                name:'周报',
                isShow:true
            },{
                name:'审批',
                isShow:true
            },{
                name:'面试管理',
                isShow:true
            },{
                name:'汇报',
                isShow:true
            },{
                name:'打卡',
                isShow:true
            },{
                name:'补卡',
                isShow:true
            },{
                name:'公告',
                isShow:true
            },{
                name:'文件管理',
                isShow:true
            },{
                name:'查看日程',
                isShow:true
            }],
        }
    },
    created() { 
        for(let i = 0;i<this.list.length;i++) {
            let n = 0
            for(let item of this.edList) {
                if (item.name === this.list[i].name) {
                    break
                }
                n += 1
            }
            if(n > this.edList.length-1)  { this.list[i].isShow = false }
        }
    }
}
</script>

<style scoped lang="scss">
.input-with-select {
    width: 70%;
}
</style>