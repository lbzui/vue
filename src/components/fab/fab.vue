<template>
  <component
    :is="tag"
    :class="[
      'lbz-fab',
      type && `lbz-fab--${ type }`,
      background && `lbz-fab--${ background }`,
      inactive && 'is-inactive'
    ]"
    @click="$emit('click', $event)"
  >
    <lbz-icon v-if="$slots.default" class="lbz-fab__icon"><slot/></lbz-icon>
    <span v-if="type === 'extended'" class="lbz-fab__label">{{ label }}</span>
    <lbz-state v-bind="cgetStateAttrs"/>
  </component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LbzIcon from '../icon/icon.vue';
import LbzState from '../state/state.vue';

@Component({
  components: {
    LbzIcon,
    LbzState,
  },
})
export default class LbzFAB extends Vue {
  // type: 'standard' (default), 'mini', 'extended'
  @Prop({ type: String, default: '' }) private type!: string;
  // tag: 'button' (default), 'a', 'x'
  @Prop({ type: String, default: 'button' }) private tag!: string;
  // background: 'primary', 'primary-variant', 'secondary' (default), 'background', 'surface', 'light', 'dark'
  @Prop({ type: String, default: '' }) private background!: string;
  // inactive: true, false (default)
  @Prop({ type: Boolean, default: false }) private inactive!: boolean;
  // label (type === 'extended'): '' (default), 'x'
  @Prop({ type: String, default: '' }) private label!: string;

  get cgetStateAttrs(): object {
    return {
      class: 'lbz-fab__state',
      type: this.background === 'light' ? '' : 'primary',
      background: `on-${this.background || 'secondary'}`,
    };
  }
}
</script>
