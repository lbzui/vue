<template>
  <component
    :is="tag"
    :class="[
      'lbz-card',
      type ? `lbz-card--${ type }` : '',
      { 'lbz-ripple': ripple }
    ]"
    @click="$emit('click', $event)"
  >
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

@Component({
  name: 'lbz-card',
})
export default class Card extends Vue {
  // type: 'elevated' (default), 'outlined'
  @Prop({ type: String, default: '' }) private type!: string;
  // tag: 'div' (default), 'a', 'x'
  @Prop({ type: String, default: 'div' }) private tag!: string;
  // ripple: true (default), false
  @Prop({ type: Boolean, default: true }) private ripple!: boolean;
}
</script>
