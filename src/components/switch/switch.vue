<template>
  <div
    :class="[
      'lbz-switch',
      color && `lbz-switch--${color}`,
      onBackground && `lbz-switch--on-${onBackground}`,
      darkened && 'lbz-is-darkened',
      cisChecked && 'lbz-is-checked',
      disabled && 'lbz-is-disabled'
    ]"
  >
    <button class="lbz-switch__container">
      <div class="lbz-switch__track"></div>
      <div class="lbz-switch__thumb-underlay" @click.stop="!disabled && fclick($event)">
        <input
          v-bind="{
            id: `${id}`,
            type: 'checkbox',
            'true-value': `${trueValue}`,
            'false-value': `${falseValue}`,
            checked: cisChecked,
            disabled
          }"
        >
        <div class="lbz-switch__thumb"></div>
        <lbz-state v-if="!disabled" v-bind="cgetStateAttrs"/>
      </div>
    </button>
    <label
      v-if="$slots.default"
      class="lbz-switch__label"
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
export default class LbzSwitch extends Vue {
  // [required]v-model: true, false, x, 'x'
  @Model('change', { type: [Boolean, Number, String], required: true }) private mchecked!: boolean | number | string;

  // id: 'lbz-switch-x' (default), 'x'
  @Prop({ type: String, default: `lbz-switch-${lbzfRandomId()}` }) private id!: string;
  // true-value: true (default), false, x, 'x'
  @Prop({ type: [Boolean, Number, String], default: true }) private trueValue!: boolean | number | string;
  // false-value: true, false (default), x, 'x'
  @Prop({ type: [Boolean, Number, String], default: false }) private falseValue!: boolean | number | string;
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
    return this.mchecked === this.trueValue;
  }

  get cgetStateAttrs(): LbzStateAttributes {
    return {
      class: 'lbz-switch__state',
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
    return this.cisChecked
      ? this.falseValue
      : this.trueValue;
  }
}
</script>
