<template>
  <div class="Login">
    <h1>{{ msg }}</h1>
    <div class="weui-btn-area"> 
      <a @click="login" class="weui-btn weui-btn_primary">一键登录</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
const weui = require('weui.js');

@Component
export default class Login extends Vue {
  private msg = 'This is a login page';
  private login() {
    location.href = 'http://pspjjc.chenxiaofeng.vip/sunnyhouse';
  }
}
</script>

<style>
</style>

