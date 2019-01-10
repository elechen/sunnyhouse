<template>
  <div class="agreement">
    <p>{{content}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Agreement extends Vue {
  private content = '约定细节';
}
</script>