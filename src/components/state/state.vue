<template>
  <span :class="[
    'lbz-state',
    type && `lbz-state--${ type }`,
    background && `lbz-state-background--${ background }`,
    unscalable && 'is-unscalable'
  ]"></span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LbzState extends Vue {
  // type: 'surface' (default), 'primary', 'image'
  @Prop({ type: String, default: '' }) private type!: string;
  // background: 'primary', 'primary-variant', 'secondary', 'secondary-variant',
  // 'background', 'surface', 'error', 'light', 'dark',
  // 'on-primary', 'on-primary-variant', 'on-secondary', 'on-secondary-variant',
  // 'on-background', 'on-surface' (default), 'on-error', 'on-light', 'on-dark'
  @Prop({ type: String, default: '' }) private background!: string;
  // unscalable: true, false (default)
  @Prop({ type: Boolean, default: false }) private unscalable!: boolean;
}
</script>
