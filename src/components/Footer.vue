<template>
  <div class="page__ft">
    <div class="weui-footer">
      <p class="weui-footer__links">
        <a @click="$router.push('/')" class="weui-footer__link">阳光公寓</a>
      </p>
      <p class="weui-footer__text">Copyright © 2018-2019 阳光科技</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class HelloWorld extends Vue {
}
</script>

<style scoped>
.page__ft {
  padding-top: 40px;
  padding-bottom: 10px;
  text-align: center;
}
</style>
