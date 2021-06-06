<template>
    <template v-if="menuData.children && menuData.children.length">
      <el-submenu
        v-if="!(menuData.meta && menuData.meta.hidden)"
        :index="menuData.path"
        popper-append-to-body
      >
        
        <template #title>
          <i class="el-icon-menu"></i>
           <span>{{ menuData.meta.title }}</span>
        </template>
        <side-menu-item
          v-for="route in menuData.children"
          :key="route.name"
          :menuInfo="route"
        />
      </el-submenu>
    </template>
    <template
      v-if="
        (!menuData.children || !menuData.children.length) &&
        !(menuData.meta && menuData.meta.hidden)
      "
    >
      <el-menu-item :index="menuData.path">
        <i class="el-icon-menu"></i>
        <template #title>{{ menuData.meta.title }}</template>
      </el-menu-item>
    </template>
</template>

<script setup>
import { ref, defineProps, toRefs } from "vue";

const props = defineProps({
  menuInfo: Object,
});

const menuData = ref(props.menuInfo || {});
const handleClick = () => {
  count.value++;
};
</script>

<style>
</style>