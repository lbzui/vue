<template>
  <div class="lbz-snackbar">
    <div class="lbz-snackbar__label"></div>
    <div class="lbz-snackbar__action"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LbzSnackbar extends Vue {}
</script>
