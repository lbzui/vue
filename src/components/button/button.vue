<template>
  <component
    v-bind="cgetAttrs"
    :class="[
      'lbz-button',
      type ? `lbz-button--${ type }` : '',
      color ? `lbz-button--${ color }` : '',
      {
        'lbz-ripple': !disabled && ripple,
        'is-full-width': fullWidth,
        'is-dense': dense,
        'is-unelevated': type === 'contained' && unelevated,
        'is-disabled': disabled
      }
    ]"
    @click="disabled ? '' : $emit('click', $event)"
  >
    <lbz-icon v-if="icon || $slots.icon" class="lbz-button__icon">
      <template v-if="icon">{{ icon }}</template><slot v-else name="icon"/>
    </lbz-icon>
    <span class="lbz-button__label"><slot/></span>
  </component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LbzIcon from '../icon/icon.vue';

@Component({
  components: {
    LbzIcon,
  },
})
export default class Button extends Vue {
  // type: 'text' (default), 'outlined', 'contained'
  @Prop({ type: String, default: '' }) private type!: string;
  // router-link: true, false (default)
  @Prop({ type: Boolean, default: false }) private routerLink!: boolean;
  // tag: 'button' (default), 'a', 'x'
  @Prop({ type: String, default: 'button' }) private tag!: string;
  // to (router-link): '' (default), 'x', { x: x }
  @Prop({ type: [String, Object], default: '' }) private to!: string | object;
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

  get cgetAttrs(): object {
    return this.routerLink
      ? {
        is: 'router-link',
        tag: this.tag,
        to: this.to,
        disabled: this.tag === 'button' && this.disabled,
      } : {
        is: this.tag,
        disabled: this.tag === 'button' && this.disabled,
      };
  }
}
</script>
