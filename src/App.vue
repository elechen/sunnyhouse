<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
