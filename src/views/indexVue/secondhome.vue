<template>
  <div>
    <el-button @click="allFeature" type="text" style="margin: 0;"><i class="el-icon-back"></i>返回首页</el-button>
    <div class="contain">
        <h2 style="font: 700 26px 黑体;">常用功能</h2>
        <el-tabs v-model="activeName1" type="card" @tab-click="handleClick">
          <el-tab-pane label="添加常用" name="first">
            <div style="display: flex;flex-wrap: wrap;">
              <div class="all-item" v-for="(item, index) in frequentlyList" :key="index">
                <el-avatar shape="square" :size="70" style="border-radius: 20px;font-size: 18px;">icon</el-avatar>
                <div style="position: absolute;top: 20%;left: 80px;">
                    <div style="text-align: start;font: 600 20px 黑体;">{{ item.name }}</div>
                    <div style="font-size: 12px;">一站式智能服务平台</div>
                </div>
                <el-dropdown class="all-item-dropdown" @command="handleCommon">
                    <span class="el-dropdown-link"><i class="el-icon-more"></i></span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item :command="beforeHandleCommand(item,'1')">排序</el-dropdown-item>
                        <el-dropdown-item :command="beforeHandleCommand(item,'0')">移除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
              </div>
              <div style="position: relative;width: 18%;margin: 5px;">
                <div @click="dialogVisible = true">
                    <el-avatar shape="square" :size="70" style="background-color: #f5f6f7;border-radius: 20px;"><i class="el-icon-plus" style="color: #6d737b;font:700 18px 黑体;"></i></el-avatar>
                </div>
                <div style="position: absolute;top: 20%;left: 80px;">
                    <div style="text-align: start;font: 600 20px 黑体;">添加常用</div>
                    <div style="font-size: 12px;">添加想要添加的功能</div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="排序" name="second">配置管理</el-tab-pane>
        </el-tabs>
    </div>
    <div class="contain">
        <h2 style="font: 700 26px 黑体;">全部应用</h2>
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
          <el-tab-pane label="最近使用" name="first">
            <div style="display: flex;flex-wrap: wrap;">
              <div class="all-item" v-for="(item, index) in allList" :key="index">
                <el-avatar shape="square" :size="70" style="border-radius: 20px;font-size: 18px;">icon</el-avatar>
                <div style="position: absolute;top: 20%;left: 80px;">
                    <div style="text-align: start;font: 600 20px 黑体;">{{ item.name }}</div>
                    <div style="font-size: 12px;">一站式智能服务平台</div>
                </div>
                <el-dropdown class="all-item-dropdown" @command="handleCommand">
                    <span class="el-dropdown-link"><i class="el-icon-more"></i></span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item :command="beforeHandleCommand(item,'1')">设为常用</el-dropdown-item>
                        <el-dropdown-item :command="beforeHandleCommand(item,'0')">移除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="业务" name="second">业务</el-tab-pane>
          <el-tab-pane label="财务" name="third">财务</el-tab-pane>
          <el-tab-pane label="进销存" name="fourth">进销存</el-tab-pane>
          <el-tab-pane label="人事" name="fifth">人事</el-tab-pane>
          <el-tab-pane label="系统" name="sixth">系统</el-tab-pane>
        </el-tabs>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="50%"
      append-to-body>
      <h3 slot="title" style="font: 600 20px 黑体;margin: 0;">添加常用</h3>
      <Commen v-bind:edList="frequentlyList"/>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Commen from './commen.vue'
export default {
    name:"second",
    components:{Commen},
    data() {
        return {
            activeName1:'first',
            activeName2:'first',
            dialogVisible:false,
            show:true,
            frequentlyList:[{
                name:'打卡'
            },{
                name:'补卡'
            },{
                name:'公告'
            },{
                name:'文件管理'
            },{
                name:'汇报'
            },{
                name:'周报'
            }],
            allList: [{
                name:'服务台'
            },{
                name:'周报'
            },{
                name:'审批'
            },{
                name:'汇报'
            },{
                name:'打卡'
            },{
                name:'补卡'
            },{
                name:'公告'
            },{
                name:'文件管理'
            },{
                name:'查看日程'
            },{
                name:'面试管理'
            }]
        }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      allFeature() {
      this.$emit("getShow", this.show);
      },
      beforeHandleCommand(item,command) {
        return {
            'item':item,
            'command':command
        }
      },
      handleCommon(command) {
        // console.log(command)
        switch (command.command) {
            case '1'://排序
                
            case '0'://移除
                const list = this.frequentlyList
                this.frequentlyList = list.filter((item) => {
                    return item !== command.item
                })
                break
        }
      },
      handleCommand(command) {
        // console.log(command)
        switch (command.command) {
            case '1'://设为常用
                let n = 0
                for(let i of this.frequentlyList) {
                    if (i.name === command.item.name) {
                        this.$message.error('该功能已被加入常用')
                        break
                    }
                    n += 1
                }
                if(n > this.frequentlyList.length-1)  { this.frequentlyList.push(command.item) }
                break
            case '0'://移除
                const list = this.allList
                this.allList = list.filter((item) => {
                    return item !== command.item
                })
                break
        }
      }
    }
}
</script>

<style scoped lang="scss">
::v-deep .el-tabs--card > .el-tabs__header .el-tabs__nav {
    border: none;
}
::v-deep .el-tabs--card > .el-tabs__header {
    border: none;
}
::v-deep .el-tabs--card > .el-tabs__header .el-tabs__item {
    border: none;
}
::v-deep .el-tabs__item.is-active {
    color: #165dff;
    background-color: #e8efff;
    border-radius: 5px;
}
.contain {
    width: auto;
    height: 41vh;
    background-color: #fff;
    margin:20px;
    padding:5px 20px;
    border-radius: 20px;
    overflow-y: scroll;
}
.all-item {
    position: relative;
    width: 18%;
    margin: 10px 5px;
}
.all-item-dropdown {
    display: none;
}
.all-item:hover {
    background-color: #f5f6f7;
    border-radius: 20px;
    .all-item-dropdown {
        display: block;
        position: absolute;
        top: 0;
        right: 20px;
    }
}
</style>