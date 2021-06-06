<template>
  <div class="app-container">
    <side-bar-menu v-show="showMenu"/>
    <router-view v-show="!showMenu"></router-view>
  </div>
</template>

<script setup>
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
import SideBarMenu from '@/views/layout/index.vue'
import { computed } from 'vue'
import {
  useRoute
} from 'vue-router'
const route = useRoute()
const showMenu = computed(() => {
  console.log('showMenu', route.meta.hidden)
  return !(route.meta && route.meta.hidden)
})
</script>

<style lang="less" scoped>
</style>
<style>

</style>