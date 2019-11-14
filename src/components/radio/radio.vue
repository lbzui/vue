<template>
  <div
    :class="[
      'lbz-radio',
      color && `lbz-radio--${ color }`,
      cisSelected && 'is-checked',
      disabled && 'is-disabled'
    ]"
    @click.stop="!disabled && fclick($event)"
  >
    <button :class="['lbz-radio__container', { 'lbz-ripple': !disabled && ripple }]">
      <input
        type="radio"
        v-bind="{
          id: `${id}`,
          name: `${name}`,
          value,
          checked: cisSelected,
          disabled
        }"
      >
      <div class="lbz-radio__circle"></div>
    </button>
    <label
      v-if="$slots.default"
      :for="`${id}`"
      class="lbz-radio__label"
    ><slot/></label>
  </div>
</template>

<script lang="ts">
import { Component, Model, Prop, Emit, Vue } from 'vue-property-decorator';

@Component
export default class Radio extends Vue {
  // [required]v-model: true, false, x, 'x'
  @Model('change', { type: [Boolean, Number, String], required: true }) private mchecked!: boolean | number | string;

  // id: true, false, x, '' (default), 'x'
  @Prop({ type: [Boolean, Number, String], default: '' }) private id!: boolean | number | string;
  // name: true, false, x, '' (default), 'x'
  @Prop({ type: [Boolean, Number, String], default: '' }) private name!: boolean | number | string;
  // [required]value: true, false, x, 'x'
  @Prop({ type: [Boolean, Number, String], required: true }) private value!: boolean | number | string;
  // color: 'primary', 'secondary' (default)
  @Prop({ type: String, default: '' }) private color!: string;
  // ripple: true (default), false
  @Prop({ type: Boolean, default: true }) private ripple!: boolean;
  // disabled: true, false (default)
  @Prop({ type: Boolean, default: false }) private disabled!: boolean;

  get cisSelected(): boolean {
    return this.mchecked === this.value;
  }

  @Emit('change')
  private fclick(e: MouseEvent) {
    return this.value;
  }
}
</script>
