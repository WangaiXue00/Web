<template>
  <div class="navbar">
    <!-- <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container"
      @toggleClick="toggleSideBar" /> -->

    <!-- <breadcrumb id="breadcrumb-container" class="breadcrumb-container" v-if="!topNav" /> -->
    <!-- <top-nav id="topmenu-container" class="topmenu-container" v-if="topNav" /> -->

    <div style="margin-left: 20px;">
      <el-input class="search" placeholder="搜索" prefix-icon="el-icon-search" v-model="input">
      </el-input>
    </div>
    <div class="right-menu">
      <template v-if="device !== 'mobile'">

        <el-link :underline="false" class="right-menu-item hover-effect">使用手册</el-link>

        <el-tooltip content="待办" effect="dark" placement="bottom">
          <i class="iconfont icon-xinxi right-menu-item hover-effect"></i>
        </el-tooltip>
        <el-tooltip content="通知" effect="dark" placement="bottom">
          <i class="iconfont icon-xiaoxi right-menu-item hover-effect" style="font-size: 25px;"></i>
        </el-tooltip>

        <!-- <el-tooltip content="源码地址" effect="dark" placement="bottom">
          <ruo-yi-git id="ruoyi-git" class="right-menu-item hover-effect" />
        </el-tooltip> -->

        <!-- <el-tooltip content="文档地址" effect="dark" placement="bottom">
          <ruo-yi-doc id="ruoyi-doc" class="right-menu-item hover-effect" />
        </el-tooltip> -->

        <!-- <screenfull id="screenfull" class="right-menu-item hover-effect" /> -->

        <!-- <el-tooltip content="布局大小" effect="dark" placement="bottom">
          <size-select id="size-select" class="right-menu-item hover-effect" />
        </el-tooltip> -->

      </template>

      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar" class="user-avatar">
          <span style="margin-left: 11px;">张三</span>
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/user/profile">
            <el-dropdown-item>个人中心</el-dropdown-item>
          </router-link>
          <el-dropdown-item @click.native="setting = true">
            <span>布局设置</span>
          </el-dropdown-item>
          <el-dropdown-item divided @click.native="logout">
            <span>退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import TopNav from '@/components/TopNav'
import Hamburger from '@/components/Hamburger'
import Screenfull from '@/components/Screenfull'
import SizeSelect from '@/components/SizeSelect'
import Search from '@/components/HeaderSearch'
import RuoYiGit from '@/components/RuoYi/Git'
import RuoYiDoc from '@/components/RuoYi/Doc'

export default {
  components: {
    Breadcrumb,
    TopNav,
    Hamburger,
    Screenfull,
    SizeSelect,
    Search,
    RuoYiGit,
    RuoYiDoc
  },
  data() {
    return {
      input: ''
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'device'
    ]),
    setting: {
      get() {
        return this.$store.state.settings.showSettings
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'showSettings',
          value: val
        })
      }
    },
    topNav: {
      get() {
        return this.$store.state.settings.topNav
      }
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      this.$confirm('确定注销并退出系统吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('LogOut').then(() => {
          location.href = '/index';
        })
      }).catch(() => { });
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  height: 100px;
  // line-height: 100px;
  align-items: center;
  // overflow: hidden;
  justify-content: space-between;
  background-color: #F7F9FC;

  .hamburger-container {
    // line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .topmenu-container {
    position: absolute;
    left: 50px;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    display: flex;
    align-items: center;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      // display: inline-block;
      padding: 0 16px;
      // height: 100%;
      font-size: 20px;
      font-family: PingFang SC, PingFang SC;
      font-weight: 500;
      color: #222222;
      // vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        // margin-top: 5px;
        // position: relative;

        .user-avatar {
          cursor: pointer;
          vertical-align: middle;
          width: 56px;
          height: 56px;
          border-radius: 28px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          margin-left: 18px;
          // position: absolute;
          // right: -20px;
          // top: 30px;
          font-size: 18px;
        }
      }
    }
  }
}

::v-deep .el-input__icon {
  height: 52px;
  line-height: 52px;
  font-size: 17px;
}

::v-deep .el-input__inner {
  width: 589px;
  height: 52px;
  border-radius: 10px 10px 10px 10px;
  background-color: #EFF1F6;
  text-indent: 2px;
  font-size: 16px;

}
</style>