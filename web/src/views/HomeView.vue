<script setup>
</script>

<template>
  <div class="home-view">
    <div class="image-abs">
      <img src="../assets/image/community.svg" alt="" style="width: 100%; height: 100%">
    </div>
    <div class="welcome">Mate CMDB</div>
    <div class="version">v1.0.0</div>
  </div>
</template>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.welcome {
  font-size: 20pt;
}
.version {
  font-size: 10pt;
  margin-top: 10px;
}
.image-abs{
  position: absolute;
}
</style>
