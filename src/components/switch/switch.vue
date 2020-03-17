<template>
  <div
    :class="[
      'lbz-switch',
      color && `lbz-switch--${color}`,
      cisChecked && 'lbz-is-checked',
      disabled && 'lbz-is-disabled'
    ]"
    @click.stop="!disabled && fclick($event)"
  >
    <button class="lbz-switch__container">
      <div class="lbz-switch__track"></div>
      <div class="lbz-switch__thumb-underlay">
        <input
          v-bind="{
            id: `${id}`,
            name: `${name}`,
            type: 'checkbox',
            value: vvalue,
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
import LbzState from '../state/state.vue';

@Component({
  components: {
    LbzState,
  },
})
export default class LbzSwitch extends Vue {
  // [required]v-model: true, false, x, 'x'
  @Model('change', { type: [Boolean, Number, String], required: true }) private mchecked!: boolean | number | string;

  // id: '' (default), 'x'
  @Prop({ type: String, default: '' }) private id!: string;
  // name: '' (default), 'x'
  @Prop({ type: String, default: '' }) private name!: string;
  // true-value: true (default), false, x, 'x'
  @Prop({ type: [Boolean, Number, String], default: true }) private trueValue!: boolean | number | string;
  // false-value: true, false (default), x, 'x'
  @Prop({ type: [Boolean, Number, String], default: false }) private falseValue!: boolean | number | string;
  // color: 'primary', 'secondary' (default)
  @Prop({ type: String, default: '' }) private color!: string;
  // disabled: true, false (default)
  @Prop({ type: Boolean, default: false }) private disabled!: boolean;
  // ripple: undefined (default), true, false
  @Prop({ type: Boolean, default: undefined }) private ripple!: boolean;

  private vvalue: boolean | number | string = this.mchecked;

  get cisChecked(): boolean {
    return this.mchecked === this.trueValue;
  }

  get cgetStateAttrs(): StateAttributes {
    return {
      class: 'lbz-switch__state',
      type: this.cisChecked ? 'primary' : '',
      background: this.cisChecked ? (this.color || 'secondary') : '',
      ripple: this.ripple,
      unbounded: true,
      centered: true,
    };
  }

  @Emit('change')
  private fclick(e: MouseEvent) {
    this.vvalue = this.cisChecked
      ? this.falseValue
      : this.trueValue;

    return this.vvalue;
  }
}
</script>
