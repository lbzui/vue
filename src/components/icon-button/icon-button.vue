<template>
  <component
    v-bind="cgetAttrs"
    :class="[
      !toggle ? 'material-icons' : '',
      'lbz-icon-button',
      onBackground ? `lbz-icon-button--on-${ onBackground }` : '',
      {
        'lbz-ripple': !disabled && ripple,
        'is-active': toggle && cisActive,
        'is-disabled': disabled
      }
    ]"
    @click="disabled ? '' : fclick($event)"
  >
    <template v-if="toggle">
      <lbz-icon class="lbz-icon-button__icon lbz-icon-button__icon--on">
        <template v-if="onIcon">{{ onIcon }}</template><slot v-else-if="$slots['on-icon']" name="on-icon"/>
      </lbz-icon>
      <lbz-icon class="lbz-icon-button__icon lbz-icon-button__icon--off">
        <template v-if="offIcon">{{ offIcon }}</template><slot v-else-if="$slots['off-icon']" name="off-icon"/>
      </lbz-icon>
    </template>
    <template v-else><slot/></template>
  </component>
</template>

<script lang="ts">
import { Component, PropSync, Prop, Emit, Vue } from 'vue-property-decorator';
import LbzIcon from '../icon/icon.vue';

@Component({
  components: {
    LbzIcon,
  },
})
export default class IconButton extends Vue {
  // active.sync (toggle): true, false (default)
  @PropSync('active', { type: Boolean, default: false }) private cisActive!: boolean;

  // toggle: true, false (default)
  @Prop({ type: Boolean, default: false }) private toggle!: boolean;
  // router-link (!toggle): true, false (default)
  @Prop({ type: Boolean, default: false }) private routerLink!: boolean;
  // tag: 'button' (default), 'a', 'x'
  @Prop({ type: String, default: 'button' }) private tag!: string;
  // to (!toggle && router-link): '' (default), 'x', { x: x }
  @Prop({ type: [String, Object], default: '' }) private to!: string | object;
  // on-background: 'primary', 'secondary', 'background', 'surface' (default), 'error', 'light', 'dark'
  @Prop({ type: String, default: '' }) private onBackground!: string;
  // ripple: true (default), false
  @Prop({ type: Boolean, default: true }) private ripple!: boolean;
  // disabled: true, false (default)
  @Prop({ type: Boolean, default: false }) private disabled!: boolean;
  // on-icon (toggle): '' (default), 'x'
  @Prop({ type: String, default: '' }) private onIcon!: string;
  // off-icon (toggle): '' (default), 'x'
  @Prop({ type: String, default: '' }) private offIcon!: string;

  get cgetAttrs(): object {
    return !this.toggle && this.routerLink
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

  @Emit('click')
  private fclick(e: MouseEvent): void {
    if (this.toggle) {
      this.cisActive = !this.cisActive;
    }
  }
}
</script>
