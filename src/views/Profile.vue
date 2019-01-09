<template>
  <div class="Profile">
    <h1>This is an profile page</h1>
    <div v-for="(value, key) in loginUser" :key="key">
      <p>{{ key }}: {{ value }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ElementUI from 'element-ui';
import * as user from '../models/user';

@Component({
})
export default class Profile extends Vue {
  private loginUser: user.User = { openid: '0000' };
  private mounted() {
    this.loginUser = user.get() as user.User;
  }
}
</script>
