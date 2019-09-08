<template>
  <button
    class="lbz-button"
    :class="[
      type ? `lbz-button--${ type }` : '',
      dense ? 'is-dense' : '',
      unelevated ? 'is-unelevated': '',
      ripple ? 'lbz-ripple' : ''
    ]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <lbz-icon v-if="icon" class="lbz-button__icon">{{ icon }}</lbz-icon>
    <i v-else-if="$slots.icon" class="lbz-button__icon"><slot name="icon"/></i>
    <span class="lbz-button__label"><slot/></span>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Divider extends Vue {
  // type: 'text' (default), 'outlined', 'contained'
  @Prop({ type: String, default: '' }) private type!: string;
  // dense: true, false (default)
  @Prop({ type: Boolean, default: false }) private dense!: boolean;
  // unelevated (type === 'contained'): true, false (default)
  @Prop({ type: Boolean, default: false }) private unelevated!: boolean;
  // ripple: true (default), false
  @Prop({ type: Boolean, default: true }) private ripple!: boolean;
  // disabled: true, false (default)
  @Prop({ type: Boolean, default: false }) private disabled!: boolean;
  // icon: '' (default), 'x'
  @Prop({ type: String, default: '' }) private icon!: string;
}
</script>
