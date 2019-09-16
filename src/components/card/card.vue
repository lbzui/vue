<template>
  <div
    :class="[
      'lbz-card',
      type ? `lbz-card--${ type }` : '',
      { 'is-elevated': elevated }
    ]"
  >
    <div v-if="$slots.start" class="lbz-card__primary">
      <slot name="start"/>
    </div>
    <div
      :class="[
        'lbz-card__primary-action',
        { 'lbz-ripple': ripple }
      ]"
    >
      <slot name="center"/>
      <slot/>
    </div>
    <div v-if="$slots.end" class="lbz-card__actions">
      <slot name="end"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Card extends Vue {
  // type: 'elevated' (default), 'outlined'
  @Prop({ type: String, default: '' }) private type!: string;
  // ripple: true (default), false
  @Prop({ type: Boolean, default: true }) private ripple!: boolean;
  // elevated: true, false (default)
  @Prop({ type: Boolean, default: false }) private elevated!: boolean;
}
</script>
