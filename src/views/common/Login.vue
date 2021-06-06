<template>
  <div class="login-container">
    <div class="login-form">
      <el-form :model="loginForm" :rules="rules" label-width="100px">
        <el-form-item label="账号" prop="username">
          <el-input v-model="loginForm.username" />
        </el-form-item>
        <el-form-item label="账号" prop="password">
          <el-input v-model="loginForm.password" show-password />
        </el-form-item>
        <el-form-item>
          <!-- admin/admin -->
          <el-button type="primary" @click="handleLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref } from "vue";

const store = useStore();
const router = useRouter();
const rules = ref({});
const loginForm = ref({
  username: "",
  password: "",
});

const handleLogin = () => {
  const params = loginForm.value;
  store
    .dispatch("login", params)
    .then((res) => {
      router.push("/");
    })
    .catch((error) => {
      console.log("login error", error);
    });
};
</script>

<style lang="less" scoped>
.login-container {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-form {
    width: 500px;
    height: 240px;
    padding-top: 40px;
    border: 1px solid blue;
    .el-input {
      width: 62.5%;
    }
  }
}
</style>