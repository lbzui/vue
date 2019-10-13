<template>
  <li
    :class="[
      'lbz-list-item',
      {
        'lbz-ripple': !disabled && ripple,
        'is-active': active,
        'is-selected': selected,
        'is-disabled': disabled
      }
    ]"
    @click="disabled ? '' : $emit('click', $event)"
  >
    <div v-if="$slots.start" class="lbz-list-item__start">
      <slot name="start"/>
    </div>
    <div v-if="$slots.center || $slots.default" class="lbz-list-item__center">
      <slot name="center"/>
      <slot/>
    </div>
    <div v-if="$slots.end" class="lbz-list-item__end">
      <slot name="end"/>
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ListItem extends Vue {
  // ripple: true (default), false
  @Prop({ type: Boolean, default: true }) private ripple!: boolean;
  // active: true, false (default)
  @Prop({ type: Boolean, default: false }) private active!: boolean;
  // selected: true, false (default)
  @Prop({ type: Boolean, default: false }) private selected!: boolean;
  // disabled: true, false (default)
  @Prop({ type: Boolean, default: false }) private disabled!: boolean;
}
</script>