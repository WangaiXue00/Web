<template>
  <div>
    <Firsthome v-if="show" @getShow = "getShow" />
    <Secondhome v-else @getShow = "getShow"/>
  </div>
</template>

<script>
import Firsthome from './firsthome.vue';
import Secondhome from './secondhome.vue';
export default {
    name: "workbench",
    components: { Firsthome,Secondhome },
    data() {
        return {
            show:true
        }
    },
    methods: {
        getShow(val) {
            this.show = val
        },
    }
}
</script>

<style>

</style>