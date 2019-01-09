<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button @click="sayHi">el-button</el-button>
      <a href="/profile">vue-router test</a>.
    </div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import ElementUI from 'element-ui';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private sayHi(): void {
    ElementUI.MessageBox('hi');
  }
}
</script>
