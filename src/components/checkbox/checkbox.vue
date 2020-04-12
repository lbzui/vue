<template>
  <div
    :class="[
      'lbz-checkbox',
      color && `lbz-checkbox--${color}`,
      onBackground && `lbz-checkbox--on-${onBackground}`,
      {
        'lbz-is-darkened': darkened,
        'lbz-is-checked': cisIndeterminate || cisChecked,
        'lbz-is-indeterminate': cisIndeterminate,
        'lbz-is-disabled': disabled
      }
    ]"
    @click.stop="!disabled && fclick($event)"
  >
    <button class="lbz-checkbox__container">
      <input
        v-bind="{
          id: `${id}`,
          type: 'checkbox',
          'true-value': `${trueValue}`,
          'false-value': `${falseValue}`,
          value: cisGroup ? `${value}` : '',
          checked: cisChecked,
          disabled
        }"
      >
      <div class="lbz-checkbox__square">
        <svg class="lbz-checkbox__checkmark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none"/>
        </svg>
        <span class="lbz-checkbox__mixedmark"></span>
      </div>
      <lbz-state v-if="!disabled" v-bind="cgetStateAttrs"/>
    </button>
    <label
      v-if="$slots.default"
      class="lbz-checkbox__label"
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
export default class LbzCheckbox extends Vue {
  // [required]v-model: true, false, x, 'x', [true, false, x, 'x']
  @Model('change', { type: [Boolean, Number, String, Array], required: true })
  private mchecked!: boolean | number | string | any[];

  // id: 'lbz-checkbox-x' (default), 'x'
  @Prop({ type: String, default: `lbz-checkbox-${lbzfRandomId()}` }) private id!: string;
  // true-value (!group): true (default), false, x, 'x'
  @Prop({ type: [Boolean, Number, String], default: true }) private trueValue!: boolean | number | string;
  // false-value (!group): true, false (default), x, 'x'
  @Prop({ type: [Boolean, Number, String], default: false }) private falseValue!: boolean | number | string;
  // value (group): true, false, x, 'x'
  @Prop({ type: [Boolean, Number, String], default: undefined }) private value!: boolean | number | string;
  // color: 'primary', 'secondary' (default)
  @Prop({ type: String, default: '' }) private color!: string;
  // on-background: 'primary', 'secondary', 'surface' (default), 'error', 'light', 'dark'
  @Prop({ type: String, default: '' }) private onBackground!: string;
  // darkened: true, false (default)
  @Prop({ type: Boolean, default: false }) private darkened!: boolean;
  // indeterminate (!group): true, false (default)
  @Prop({ type: Boolean, default: false }) private indeterminate!: boolean;
  // disabled: true, false (default)
  @Prop({ type: Boolean, default: false }) private disabled!: boolean;
  // ripple: undefined (default), true, false
  @Prop({ type: Boolean, default: undefined }) private ripple!: boolean;

  get cisGroup(): boolean {
    return Array.isArray(this.mchecked);
  }

  get cisIndeterminate(): boolean {
    return !this.cisGroup && this.indeterminate;
  }

  get cisChecked(): boolean {
    if (this.cisGroup) {
      return (this.mchecked as any[]).includes(this.value);
    }

    return this.mchecked === this.trueValue;
  }

  get cgetStateAttrs(): LbzStateAttributes {
    const isPrimary: boolean = this.cisIndeterminate || this.cisChecked;

    return {
      class: 'lbz-checkbox__state',
      type: ['primary', 'secondary', 'error'].includes(this.onBackground) || isPrimary ? 'primary' : '',
      background: isPrimary ? (this.color || 'secondary') : (this.onBackground ? `on-${this.onBackground}` : ''),
      darkened: this.darkened && !this.cisChecked,
      ripple: this.ripple,
      unbounded: true,
      centered: true,
    };
  }

  @Emit('change')
  private fclick(e: MouseEvent) {
    if (this.cisGroup) {
      const arr: any[] = this.mchecked as any[];

      if (this.cisChecked) {
        const index: number = arr.indexOf(this.value);

        if (index !== -1) {
          arr.splice(index, 1);
        }
      } else {
        arr.push(this.value);
      }

      return arr;
    } else {
      return this.cisChecked
        ? this.falseValue
        : this.trueValue;
    }
  }
}
</script>
