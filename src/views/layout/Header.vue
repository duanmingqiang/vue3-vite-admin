<template>
  <div class="header">
    <div class="user-setting">
      <el-dropdown>
        <i class="el-icon-user-solid" style="margin-right: 7px"
          ><span>{{ userName }}</span></i
        >
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              ><span @click="handleLogout">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { computed } from "vue";
const store = useStore();
const router = useRouter();
const handleLogout = () => {
  store
    .dispatch("logout")
    .then((res) => {
      ElMessage.success("退出成功^o^");
      router.push("/login");
    })
    .catch((error) => {
      console.log("error", error);
    });
};
const userName = computed(() => {
  return store.state.name;
});
</script>

<style lang="less" scoped>
.header {
  background-color: #b3c0d1;
  height: 41px;
  .user-setting {
    position: absolute;
    right: 41px;
    line-height: 41px;
  }
}
</style>