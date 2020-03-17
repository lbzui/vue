<template>
  <component
    :is="tag"
    :class="['lbz-card', type && `lbz-card--${type}`]"
    @click="$emit('click', $event)"
  >
    <lbz-state v-bind="cgetStateAttrs"/>
    <div v-if="$slots.start" class="lbz-card__header">
      <slot name="start"/>
    </div>
    <div v-if="$slots.center || $slots.default" class="lbz-card__content">
      <slot name="center"/>
      <slot/>
    </div>
    <div v-if="$slots.end" class="lbz-card__actions">
      <slot name="end"/>
    </div>
  </component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LbzState from '../state/state.vue';

@Component({
  components: {
    LbzState,
  },
})
export default class LbzCard extends Vue {
  // tag: 'div' (default), 'a', 'x'
  @Prop({ type: String, default: 'div' }) private tag!: string;

  // type: 'elevated' (default), 'outlined'
  @Prop({ type: String, default: '' }) private type!: string;
  // ripple: undefined (default), true, false
  @Prop({ type: Boolean, default: undefined }) private ripple!: boolean;

  get cgetStateAttrs(): StateAttributes {
    return {
      class: 'lbz-card__state',
      ripple: this.ripple,
    };
  }
}
</script>
