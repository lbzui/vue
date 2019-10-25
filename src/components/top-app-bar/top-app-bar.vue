<template>
  <header
    :class="[
      'lbz-top-app-bar',
      type ? `lbz-top-app-bar--${ type }` : '',
      background ? `lbz-top-app-bar--${ background }` : '',
      inactive ? `is-inactive--${ inactive }` : '',
      {
        'is-dense': dense,
        'is-elevated': elevated
      }
    ]"
    :style="type === 'extended' && media ? { backgroundImage: `url(${ media })` } : {}"
  >
    <section class="lbz-top-app-bar__container">
      <div v-if="$slots.start" class="lbz-top-app-bar__start">
        <slot name="start"/>
      </div>
      <div v-if="title || $slots.center || $slots.default" class="lbz-top-app-bar__center">
        <h1
          v-if="title"
          v-html="title"
          class="lbz-top-app-bar__title"
        ></h1>
        <slot name="center"/>
        <slot/>
      </div>
      <div v-if="$slots.end" class="lbz-top-app-bar__end">
        <slot name="end"/>
      </div>
    </section>
    <section v-if="(['', 'standard'].includes(type)) && $slots.tab" class="lbz-top-app-bar__tab">
      <slot name="tab"/>
    </section>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TopAppBar extends Vue {
  // type: 'standard' (default), 'extended', 'short'
  @Prop({ type: String, default: '' }) private type!: string;
  // background: 'primary' (default), 'secondary', 'background', 'surface', 'light', 'dark', 'transparent'
  @Prop({ type: String, default: '' }) private background!: string;
  // inactive (type === 'standard'): '' (default), 'scroll-off', 'tab-fixed'
  @Prop({ type: String, default: '' }) private inactive!: string;
  // dense (desktop only): true, false (default)
  @Prop({ type: Boolean, default: false }) private dense!: boolean;
  // elevated: true, false (default)
  @Prop({ type: Boolean, default: false }) private elevated!: boolean;
  // title: '' (default), 'x'
  @Prop({ type: String, default: '' }) private title!: string;
  // media (type === 'extended'): '' (default), 'x'
  @Prop({ type: String, default: '' }) private media!: string;
}
</script>
