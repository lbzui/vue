<template>
  <button
    class="lbz-icon-button"
    :class="[
      surface ? `lbz-icon-button--${ surface }` : '',
      !toggle ? 'material-icons' : '',
      toggle && cisOn ? 'is-active' : '',
      ripple ? 'lbz-ripple' : ''
    ]"
    :disabled="disabled"
    @click="fclick($event)"
  >
    <template v-if="toggle">
      <lbz-icon class="lbz-icon-button__icon lbz-icon-button__icon--on"><template v-if="onicon">{{ onicon }}</template><slot v-else-if="$slots.onicon" name="onicon"/></lbz-icon>
      <lbz-icon class="lbz-icon-button__icon lbz-icon-button__icon--off"><template v-if="officon">{{ officon }}</template><slot v-else-if="$slots.officon" name="officon"/></lbz-icon>
    </template>
    <template v-else><slot/></template>
  </button>
</template>

<script lang="ts">
import { Component, PropSync, Prop, Emit, Vue } from 'vue-property-decorator';

@Component
export default class Divider extends Vue {
  // active: true, false (default)
  @PropSync('active', { type: Boolean, default: false }) private cisOn !: boolean;
  // toggle: true, false (default)
  @Prop({ type: Boolean, default: false }) private toggle!: boolean;
  // surface: 'primary', 'secondary', 'surface' (default)
  @Prop({ type: String, default: '' }) private surface!: string;
  // ripple: true (default), false
  @Prop({ type: Boolean, default: true }) private ripple!: boolean;
  // disabled: true, false (default)
  @Prop({ type: Boolean, default: false }) private disabled!: boolean;
  // onicon (toggle): true, false (default)
  @Prop({ type: String, default: '' }) private onicon!: string;
  // officon (toggle): true, false (default)
  @Prop({ type: String, default: '' }) private officon!: string;

  @Emit('click')
  private fclick(e: MouseEvent) {
    if (this.toggle) {
      this.cisOn = !this.cisOn;
    }
  }
}
</script>
