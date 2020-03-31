<template>
  <div
    :class="[
      'lbz-radio',
      color && `lbz-radio--${color}`,
      onBackground && `lbz-radio--on-${onBackground}`,
      darkened && 'lbz-is-darkened',
      cisChecked && 'lbz-is-checked',
      disabled && 'lbz-is-disabled'
    ]"
    @click.stop="!disabled && fclick($event)"
  >
    <button class="lbz-radio__container">
      <input
        v-bind="{
          id: `${id}`,
          type: 'radio',
          value,
          checked: cisChecked,
          disabled
        }"
      >
      <div class="lbz-radio__circle"></div>
      <lbz-state v-if="!disabled" v-bind="cgetStateAttrs"/>
    </button>
    <label
      v-if="$slots.default"
      class="lbz-radio__label"
      :for="`${id}`"
    ><slot/></label>
  </div>
</template>

<script lang="ts">
import { Component, Model, Prop, Emit, Vue } from 'vue-property-decorator';
import { lbzfRandomId } from '../../utils/funcs';
import LbzState from '../state/state.vue';

@Component({
  components: {
    LbzState,
  },
})
export default class LbzRadio extends Vue {
  // [required]v-model: true, false, x, 'x'
  @Model('change', { type: [Boolean, Number, String], required: true }) private mchecked!: boolean | number | string;

  // id: 'lbz-radio-x' (default), 'x'
  @Prop({ type: String, default: `lbz-radio-${lbzfRandomId()}` }) private id!: string;
  // [required]value: true, false, x, 'x'
  @Prop({ type: [Boolean, Number, String], required: true }) private value!: boolean | number | string;
  // color: 'primary', 'secondary' (default)
  @Prop({ type: String, default: '' }) private color!: string;
  // on-background: 'primary', 'secondary', 'surface' (default), 'error', 'light', 'dark'
  @Prop({ type: String, default: '' }) private onBackground!: string;
  // darkened: true, false (default)
  @Prop({ type: Boolean, default: false }) private darkened!: boolean;
  // disabled: true, false (default)
  @Prop({ type: Boolean, default: false }) private disabled!: boolean;
  // ripple: undefined (default), true, false
  @Prop({ type: Boolean, default: undefined }) private ripple!: boolean;

  get cisChecked(): boolean {
    return this.mchecked === this.value;
  }

  get cgetStateAttrs(): LbzStateAttributes {
    return {
      class: 'lbz-radio__state',
      type: ['primary', 'secondary', 'error'].includes(this.onBackground) || this.cisChecked ? 'primary' : '',
      background: this.cisChecked ? (this.color || 'secondary') : (this.onBackground ? `on-${this.onBackground}` : ''),
      darkened: this.darkened && !this.cisChecked,
      ripple: this.ripple,
      unbounded: true,
      centered: true,
    };
  }

  @Emit('change')
  private fclick(e: MouseEvent) {
    return this.value;
  }
}
</script>
