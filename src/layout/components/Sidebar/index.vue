<template>
    <div :class="{'has-logo':showLogo}" style="padding: 0 20px;">
        <logo v-if="showLogo"/>
        <el-scrollbar :class="settings.sideTheme">
            <el-menu
                :default-active="activeMenu"
                background-color="#E7EEFC"
                text-color="#000"
                :unique-opened="true"
                active-text-color="#FFFFFF"
            >
                <sidebar-item
                    v-for="(route, index) in sidebarRouters"
                    :key="route.path  + index"
                    :item="route"
                    :base-path="route.path"
                />
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import variables from "@/assets/styles/variables.scss";

export default {
    components: { SidebarItem, Logo },
    computed: {
        ...mapState(["settings"]),
        ...mapGetters(["sidebarRouters", "sidebar"]),
        activeMenu() {
            const route = this.$route;
            const { meta, path } = route;
            // if set path, the sidebar will highlight the path you set
            if (meta.activeMenu) {
                return meta.activeMenu;
            }
            return path;
        },
        showLogo() {
            return this.$store.state.settings.sidebarLogo;
        },
        variables() {
            return variables;
        },
    }
};
</script>

<style scope lang="scss">
</style>
