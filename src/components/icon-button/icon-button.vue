<template>
  <component
    v-bind="cgetAttrs"
    :class="[
      !toggle && 'material-icons',
      'lbz-icon-button',
      onBackground && `lbz-icon-button--on-${ onBackground }`,
      {
        'is-active': toggle && cisActive,
        'is-disabled': disabled
      }
    ]"
    @click="!disabled && fclick($event)"
  >
    <template v-if="toggle">
      <lbz-icon class="lbz-icon-button__icon lbz-icon-button__icon--on">
        <template v-if="onIcon">{{ onIcon }}</template><slot v-else name="on-icon"/>
      </lbz-icon>
      <lbz-icon class="lbz-icon-button__icon lbz-icon-button__icon--off">
        <template v-if="offIcon">{{ offIcon }}</template><slot v-else name="off-icon"/>
      </lbz-icon>
    </template>
    <template v-else><slot/></template>
    <lbz-state v-if="!disabled" v-bind="cgetStateAttrs"/>
  </component>
</template>

<script lang="ts">
import { Component, PropSync, Prop, Emit, Vue } from 'vue-property-decorator';
import LbzIcon from '../icon/icon.vue';
import LbzState from '../state/state.vue';

@Component({
  components: {
    LbzIcon,
    LbzState,
  },
})
export default class LbzIconButton extends Vue {
  // active.sync (toggle): true, false (default)
  @PropSync('active', { type: Boolean, default: false }) private cisActive!: boolean;

  // toggle: true, false (default)
  @Prop({ type: Boolean, default: false }) private toggle!: boolean;
  // router-link (!toggle): true, false (default)
  @Prop({ type: Boolean, default: false }) private routerLink!: boolean;
  // router-link-props (!toggle && router-link): {
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
  // on-background: 'primary', 'secondary', 'background', 'surface' (default), 'error', 'light', 'dark'
  @Prop({ type: String, default: '' }) private onBackground!: string;
  // disabled: true, false (default)
  @Prop({ type: Boolean, default: false }) private disabled!: boolean;
  // on-icon (toggle): '' (default), 'x'
  @Prop({ type: String, default: '' }) private onIcon!: string;
  // off-icon (toggle): '' (default), 'x'
  @Prop({ type: String, default: '' }) private offIcon!: string;

  get cgetAttrs(): ComponentAttributes {
    const {
      to,
      replace,
      append,
      exact,
      event,
    }: any = this.routerLinkProps;
    const tag: string = this.tag;
    const disabled: boolean = tag === 'button' && this.disabled;

    return !this.toggle && this.routerLink
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

  get cgetStateAttrs(): StateAttributes {
    return {
      class: 'lbz-icon-button__state',
      type: this.onBackground === 'light' ? '' : 'primary',
      background: this.onBackground ? `on-${this.onBackground}` : '',
      unscalable: true,
    };
  }

  @Emit('click')
  private fclick(e: MouseEvent): void {
    if (this.toggle) {
      this.cisActive = !this.cisActive;
    }
  }
}
</script>
