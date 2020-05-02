<template>
  <header
    :class="[
      'lbz-top-app-bar',
      type && `lbz-top-app-bar--${type}`,
      background && `lbz-top-app-bar--${background}`,
      fixed && 'lbz-is-fixed',
      cisDense && 'lbz-is-dense',
      elevated && 'lbz-is-elevated',
      inactive && `lbz-is-inactive--${inactive}`
    ]"
    :style="
      type === 'extended' && media ? { backgroundImage: `url(${media})` } : {}
    "
  >
    <section class="lbz-top-app-bar__container">
      <div v-if="$slots.start" class="lbz-top-app-bar__start">
        <slot name="start" />
      </div>
      <div
        v-if="title || $slots.center || $slots.default"
        class="lbz-top-app-bar__center"
      >
        <h1 v-if="title" class="lbz-top-app-bar__title" v-html="title"></h1>
        <slot name="center" />
        <slot />
      </div>
      <div v-if="$slots.end" class="lbz-top-app-bar__end">
        <slot name="end" />
      </div>
    </section>
    <section
      v-if="['', 'standard'].includes(type) && $slots.append"
      class="lbz-top-app-bar__append"
    >
      <slot name="append" />
    </section>
  </header>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class LbzTopAppBar extends Vue {
    // type: 'standard' (default), 'extended', 'short'
    @Prop({ type: String, default: '' }) private type!: string;
    // background (auto-darkened): 'primary' (default), 'secondary', 'surface', 'light', 'dark', 'transparent'
    @Prop({ type: String, default: '' }) private background!: string;
    // fixed: true, false (default)
    @Prop({ type: Boolean, default: false }) private fixed!: boolean;
    // dense (desktop only): undefined (default), true, false
    @Prop({ type: Boolean, default: undefined }) private dense!: boolean;
    // elevated: true, false (default)
    @Prop({ type: Boolean, default: false }) private elevated!: boolean;
    // inactive (type === 'standard'): '' (default), 'scroll-off', 'tab-fixed'
    @Prop({ type: String, default: '' }) private inactive!: string;
    // media (type === 'extended'): '' (default), 'x'
    @Prop({ type: String, default: '' }) private media!: string;
    // title: '' (default), 'x'
    @Prop({ type: String, default: '' }) private title!: string;

    get cisDense(): boolean {
      return this.dense === undefined ? this.$lbzui.dense : this.dense;
    }
  }
</script>
