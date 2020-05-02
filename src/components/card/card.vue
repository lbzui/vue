<template>
  <component
    :is="tag"
    :class="[
      'lbz-card',
      type && `lbz-card--${type}`,
      background && `lbz-card--${background}`,
      darkened && 'lbz-is-darkened',
      disabled && 'lbz-is-disabled'
    ]"
    @click="!disabled && $emit('click', $event)"
  >
    <lbz-state v-if="!disabled" v-bind="cgetStateAttrs" />
    <div v-if="$slots.start" class="lbz-card__header">
      <slot name="start" />
    </div>
    <div v-if="$slots.center || $slots.default" class="lbz-card__content">
      <slot name="center" />
      <slot />
    </div>
    <div v-if="$slots.end" class="lbz-card__actions">
      <slot name="end" />
    </div>
  </component>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import LbzState from '../state/state.vue';

  @Component({
    components: {
      LbzState
    }
  })
  export default class LbzCard extends Vue {
    // tag: 'div' (default), 'a', 'x'
    @Prop({ type: String, default: 'div' }) private tag!: string;

    // type: 'elevated' (default), 'outlined'
    @Prop({ type: String, default: '' }) private type!: string;
    // background: 'primary', 'secondary', 'surface' (default), 'error', 'light', 'dark'
    @Prop({ type: String, default: '' }) private background!: string;
    // darkened: true, false (default)
    @Prop({ type: Boolean, default: false }) private darkened!: boolean;
    // disabled: true, false (default)
    @Prop({ type: Boolean, default: false }) private disabled!: boolean;
    // ripple: undefined (default), true, false
    @Prop({ type: Boolean, default: undefined }) private ripple!: boolean;

    get cgetStateAttrs(): LbzStateAttributes {
      return {
        class: 'lbz-card__state',
        type: ['primary', 'secondary', 'error'].includes(this.background)
          ? 'primary'
          : '',
        background: this.background ? `on-${this.background}` : '',
        darkened: this.darkened,
        ripple: this.ripple
      };
    }
  }
</script>
