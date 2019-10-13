<template>
  <button
    :class="[
      !toggle ? 'material-icons' : '',
      'lbz-icon-button',
      onBackground ? `lbz-icon-button--on-${ onBackground }` : '',
      {
        'lbz-ripple': !disabled && ripple,
        'is-active': toggle && cisActive
      }
    ]"
    :disabled="disabled"
    @click="fclick($event)"
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
  </button>
</template>

<script lang="ts">
import { Component, PropSync, Prop, Emit, Vue } from 'vue-property-decorator';

@Component
export default class IconButton extends Vue {
  // active.sync (toggle): true, false (default)
  @PropSync('active', { type: Boolean, default: false }) private cisActive !: boolean;

  // toggle: true, false (default)
  @Prop({ type: Boolean, default: false }) private toggle!: boolean;
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

  @Emit('click')
  private fclick(e: MouseEvent) {
    if (this.toggle) {
      this.cisActive = !this.cisActive;
    }
  }
}
</script>
