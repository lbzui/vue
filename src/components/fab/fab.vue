<template>
  <button
    :class="[
      'lbz-fab',
      type ? `lbz-fab--${ type }` : '',
      background ? `lbz-fab--${ background }` : '',
      {
        'lbz-ripple': ripple,
        'is-exited': exited
      }
    ]"
    @click="$emit('click', $event)"
  >
    <lbz-icon v-if="$slots.default" class="lbz-fab__icon"><slot/></lbz-icon>
    <span v-if="type === 'extended'" class="lbz-fab__label">{{ label }}</span>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FAB extends Vue {
  // type: 'standard' (default), 'mini', 'extended'
  @Prop({ type: String, default: '' }) private type!: string;
  // background: 'primary', 'primary-variant', 'secondary' (default)
  @Prop({ type: String, default: '' }) private background!: string;
  // ripple: true (default), false
  @Prop({ type: Boolean, default: true }) private ripple!: boolean;
  // exited: true, false (default)
  @Prop({ type: Boolean, default: false }) private exited!: boolean;
  // label (type === 'extended'): '' (default), 'x'
  @Prop({ type: String, default: '' }) private label!: string;
}
</script>
