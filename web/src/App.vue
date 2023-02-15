<script setup xmlns="http://www.w3.org/1999/html">
import {RouterView} from "vue-router";
import { darkTheme, useOsTheme} from "naive-ui";

</script>
<template>
    <n-config-provider class="app-view" id="dark-mod" :theme="useOsTheme().value === 'dark' ? darkTheme : null">
      <router-view style="width: 100%;height: 100%"></router-view>
    </n-config-provider>
</template>

<style scoped>
.app-view {
  width: 100%;
  height: 100%;
}

</style>
