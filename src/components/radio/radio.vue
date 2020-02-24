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
    <button class="lbz-radio__container">
      <input
        v-bind="{
          id: `${id}`,
          name: `${name}`,
          type: 'radio',
          value,
          checked: cisSelected,
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
import LbzState from '../state/state.vue';

@Component({
  components: {
    LbzState,
  },
})
export default class LbzRadio extends Vue {
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
  // disabled: true, false (default)
  @Prop({ type: Boolean, default: false }) private disabled!: boolean;

  get cisSelected(): boolean {
    return this.mchecked === this.value;
  }

  get cgetStateAttrs(): StateAttributes {
    return {
      class: 'lbz-radio__state',
      type: this.cisSelected ? 'primary' : '',
      background: this.color || 'secondary',
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
