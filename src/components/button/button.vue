<template>
  <component
    v-bind="cgetAttrs"
    :class="[
      'lbz-button',
      type && `lbz-button--${ type }`,
      color && `lbz-button--${ color }`,
      {
        'is-full-width': fullWidth,
        'is-dense': cisDense,
        'is-unelevated': type === 'contained' && unelevated,
        'is-disabled': disabled
      }
    ]"
    @click="!disabled && $emit('click', $event)"
  >
    <lbz-icon v-if="icon || $slots.icon" class="lbz-button__icon">
      <template v-if="icon">{{ icon }}</template><slot v-else name="icon"/>
    </lbz-icon>
    <span class="lbz-button__label"><slot/></span>
    <lbz-state v-if="!disabled" v-bind="cgetStateAttrs"/>
  </component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LbzIcon from '../icon/icon.vue';
import LbzState from '../state/state.vue';

@Component({
  components: {
    LbzIcon,
    LbzState,
  },
})
export default class LbzButton extends Vue {
  // type: 'text' (default), 'outlined', 'contained'
  @Prop({ type: String, default: '' }) private type!: string;
  // router-link: true, false (default)
  @Prop({ type: Boolean, default: false }) private routerLink!: boolean;
  // router-link-props (router-link): {
  //   to: '' (default) || 'x' || { x: y },
  //   replace: true || false (default),
  //   append: true || false (default),
  //   exact: true || false (default),
  //   event: 'click' (default) || 'x' || ['x']
  // }
  @Prop({
    type: Object,
    default: () => ({
      to: '',
      replace: false,
      append: false,
      exact: false,
      event: 'click',
    }),
  }) private routerLinkProps!: object;
  // tag: 'button' (default), 'a', 'x'
  @Prop({ type: String, default: 'button' }) private tag!: string;
  // color: 'primary' (default), 'secondary', 'background', 'surface', 'error', 'light', 'dark'
  @Prop({ type: String, default: '' }) private color!: string;
  // full-width: true, false (default)
  @Prop({ type: Boolean, default: false }) private fullWidth!: boolean;
  // dense: undefined (default), true, false
  @Prop({ type: Boolean, default: undefined }) private dense!: undefined | boolean;
  // unelevated (type === 'contained'): true, false (default)
  @Prop({ type: Boolean, default: false }) private unelevated!: boolean;
  // disabled: true, false (default)
  @Prop({ type: Boolean, default: false }) private disabled!: boolean;
  // icon: '' (default), 'x'
  @Prop({ type: String, default: '' }) private icon!: string;

  get cgetAttrs(): object {
    const {
      to,
      replace,
      append,
      exact,
      event,
    }: any = this.routerLinkProps;
    const tag: string = this.tag;
    const disabled: boolean = tag === 'button' && this.disabled;

    return this.routerLink
      ? {
        is: 'router-link',
        to,
        replace,
        append,
        tag,
        exact,
        event,
        disabled,
      } : {
        is: tag,
        disabled,
      };
  }

  get cisDense(): boolean {
    return this.dense === undefined
      ? this.$LBZUI.dense
      : this.dense;
  }

  get cgetStateAttrs(): object {
    const isOn: boolean = this.type === 'contained' || ['background', 'surface'].includes(this.color);

    return {
      class: 'lbz-button__state',
      type: this.color === 'light' ? '' : 'primary',
      background: `${(isOn ? 'on-' : '') + (this.color || 'primary')}`,
    };
  }
}
</script>
