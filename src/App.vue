<template>
  <div id="app">
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import 'weui';
import Vue from 'vue';
export default class App extends Vue {
}
</script>

<style>
body {
  background-color: #f8f8f8;
}
</style>
