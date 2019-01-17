<template>
  <div id="app" class="app">
    <div class="content">
      <keep-alive :include="cacheComponents">
        <router-view></router-view>
      </keep-alive>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import 'weui';
import Vue from 'vue';
import Home from '@/views/Home.vue';
export default class App extends Vue {
  private cacheComponents = 'Home';
}
</script>

<style>
html {
  height: 100%;
}
body {
  height: 100%;
  background-color: #f8f8f8;
}
</style>
<style scoped>
.app {
  height: 100%;
}
.content {
  min-height: calc(100% - 91px);
}
</style>

