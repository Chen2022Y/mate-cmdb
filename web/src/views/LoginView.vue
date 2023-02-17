<script setup xmlns="http://www.w3.org/1999/html">
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import AboutView from "@/views/AboutView.vue";

onMounted(() => {
  document.title = '登录 Mate CMDB'
})
let username = ref("");
let password = ref("");
let loadingRef = ref(false);
const router = useRouter();

function handleClick() {
  loadingRef.value = true;
  router.push({
    path:'/dashboard'
  })
}

</script>
<template>
<!--  布局，纵向分割-->
  <n-layout class="login-view" has-sider>
    <n-layout-sider width="40%" :native-scrollbar="false">
<!--      导入关于CMDB介绍的组件-->
      <AboutView style="text-align: center;" ></AboutView>
    </n-layout-sider>

<!--    整个登录器div-->
    <n-layout-content>
    <div class="login-center">
<!--    <n-card class="card-center">-->
    <div class="title">Login Mate CMDB</div>
    <div class="box">
      <n-input  v-model:value="username" type="text" round placeholder="请输入用户名:"/>
    </div>
    <div class="box">
      <n-input v-model:value="password" type="password" round placeholder="请输入密码:"/>
    </div>
      <div class="box forget-password" style="text-align: right;font-size: 8pt">
        忘记密码
      </div>
      <div class="box" style="text-align: center;margin-top: 15px">
      <n-button :loading="loadingRef" @click="handleClick" strong secondary round type="primary" >
        登&nbsp;录
      </n-button>
      </div>
<!--    </n-card>-->
    </div>
    </n-layout-content>
  </n-layout>
</template>
<style scoped>
.login-view {
  width: 100%;
  height: 100%;
}

.login-center{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.title {
  font-size: 20pt;
  text-align: center;
}

.box {
  width: 260px;
  margin-top: 10px;
}

.forget-password{
  font-size: 8pt;
  text-align: right;
  color: cadetblue;
}

.forget-password:hover {
  text-decoration-line: underline;
  cursor: pointer;
}

</style>
