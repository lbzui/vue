<template>
  <button
    :class="[
      'lbz-button',
      type ? `lbz-button--${ type }` : '',
      color ? `lbz-button--${ color }` : '',
      {
        'lbz-ripple': !disabled && ripple,
        'is-full-width': fullWidth,
        'is-dense': dense,
        'is-unelevated': type === 'contained' && unelevated
      }
    ]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <lbz-icon v-if="icon || $slots.icon" class="lbz-button__icon">
      <template v-if="icon">{{ icon }}</template><slot v-else name="icon"/>
    </lbz-icon>
    <span class="lbz-button__label"><slot/></span>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  // type: 'text' (default), 'outlined', 'contained'
  @Prop({ type: String, default: '' }) private type!: string;
  // color: 'primary' (default), 'secondary', 'error', 'light', 'dark'
  @Prop({ type: String, default: '' }) private color!: string;
  // ripple: true (default), false
  @Prop({ type: Boolean, default: true }) private ripple!: boolean;
  // full-width: true, false (default)
  @Prop({ type: Boolean, default: false }) private fullWidth!: boolean;
  // dense: true, false (default)
  @Prop({ type: Boolean, default: false }) private dense!: boolean;
  // unelevated (type === 'contained'): true, false (default)
  @Prop({ type: Boolean, default: false }) private unelevated!: boolean;
  // disabled: true, false (default)
  @Prop({ type: Boolean, default: false }) private disabled!: boolean;
  // icon: '' (default), 'x'
  @Prop({ type: String, default: '' }) private icon!: string;
}
</script>
