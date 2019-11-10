<template>
  <component
    :is="tag"
    :class="[
      'lbz-fab',
      type ? `lbz-fab--${ type }` : '',
      background ? `lbz-fab--${ background }` : '',
      {
        'lbz-ripple': ripple,
        'is-inactive': inactive
      }
    ]"
    @click="$emit('click', $event)"
  >
    <lbz-icon v-if="$slots.default" class="lbz-fab__icon"><slot/></lbz-icon>
    <span v-if="type === 'extended'" class="lbz-fab__label">{{ label }}</span>
  </component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LbzIcon from '../icon/icon.vue';

@Component({
  components: {
    LbzIcon,
  },
})
export default class FAB extends Vue {
  // type: 'standard' (default), 'mini', 'extended'
  @Prop({ type: String, default: '' }) private type!: string;
  // tag: 'button' (default), 'a', 'x'
  @Prop({ type: String, default: 'button' }) private tag!: string;
  // background: 'primary', 'primary-variant', 'secondary' (default), 'surface', 'light', 'dark'
  @Prop({ type: String, default: '' }) private background!: string;
  // ripple: true (default), false
  @Prop({ type: Boolean, default: true }) private ripple!: boolean;
  // inactive: true, false (default)
  @Prop({ type: Boolean, default: false }) private inactive!: boolean;
  // label (type === 'extended'): '' (default), 'x'
  @Prop({ type: String, default: '' }) private label!: string;
}
</script>
