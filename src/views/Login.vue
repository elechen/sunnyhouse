<template>
  <div class="Login">
    <h1>{{ msg }}</h1>
    <el-button @click="login">一键登录</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
})
export default class Login extends Vue {
  private msg = 'This is a login page';
  private login() {
    location.href = 'http://pspjjc.chenxiaofeng.vip/sunnyhouse';
  }
}
</script>
