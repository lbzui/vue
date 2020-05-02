<template>
  <i
    :class="[
      'material-icons lbz-icon',
      size && `lbz-icon--${size}`,
      color && `lbz-icon--${color}`,
      disabled && 'lbz-is-disabled'
    ]"
    ><slot
  /></i>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class LbzIcon extends Vue {
    // size: 18, 24 (default), 36, 48
    @Prop({ type: Number }) private size!: number;
    // color: '' (default), 'primary', 'secondary', 'error', 'light', 'dark'
    @Prop({ type: String, default: '' }) private color!: string;
    // disabled: true, false (default)
    @Prop({ type: Boolean, default: false }) private disabled!: boolean;
  }
</script>
