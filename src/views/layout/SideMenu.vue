<template>
  <div class="sidebar-menu-container">
    <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      :collapse="collapse"
    >
      <side-menu-item
        v-for="route in menuList"
        :key="route.name"
        :menu-info="route"
      />
    </el-menu>
    <div style="text-align: center;width: 100%;background-color: #545c64;">
      <i 
        class="el-icon-arrow-right"
        style="width: 40px;height: 40px;font-size: 40px;"
        :class="[collapse? 'el-icon-arrow-right': 'el-icon-arrow-left' ]"
        @click="handleCollapse"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

import SideMenuItem from "./SideMenuItem.vue";
const menuList = computed(() => {
  // console.log("store.state.allInstallRoutes", store.state.allInstallRoutes);
  return store.state.allInstallRoutes;
});

const collapse = computed(() => {
  return store.state.collapse
})

const handleCollapse = () => {
  store.commit('SET_COLLAPSE')
}
</script>

<style lang="less" scoped>
</style>