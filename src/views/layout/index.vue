<template>
  <div style="position: absolute; width: 100%; height: 100%">
    <el-container style="height: 100%; ">
      <el-aside :width="asideWidth" style="background-color: #545c64">
        <side-menu />
      </el-aside>
      <el-container>
        <el-header height="41px">
          <page-header />
        </el-header>
        <el-main style="">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import PageHeader from "./Header.vue";
import SideMenu from "./SideMenu.vue";
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();
const asideWidth = computed(() => {
  return store.state.collapse ? "65px" : "300px";
});
</script>
<style lang="less" scoped>
.el-header {
  padding: 0;
}
.el-main {
  padding: 0;
}
</style>