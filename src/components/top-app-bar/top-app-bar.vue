<template>
  <header
    :class="[
      'lbz-top-app-bar',
      type ? `lbz-top-app-bar--${ type }` : '',
      background ? `lbz-top-app-bar--${ background }` : '',
      {
        'is-dense': dense,
        'is-elevated': elevated,
        'is-inactive': !active
      }
    ]"
    :style="type === 'extended' && media ? { backgroundImage: `url(${ media })` } : {}"
  >
    <section v-if="$slots.start" class="lbz-top-app-bar__start">
      <slot name="start"/>
    </section>
    <section v-if="title || $slots.center" class="lbz-top-app-bar__center">
      <h1 class="lbz-top-app-bar__title">
        <template v-if="title">{{ title }}</template><slot v-else name="center"/>
      </h1>
    </section>
    <section v-if="$slots.end" class="lbz-top-app-bar__end">
      <slot name="end"/>
    </section>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TopAppBar extends Vue {
  // active: true (default), false
  @Prop({ type: Boolean, default: true }) private active!: boolean;
  // type: 'regular' (default), 'extended', 'short'
  @Prop({ type: String, default: '' }) private type!: string;
  // background: 'primary' (default), 'secondary', 'surface', 'transparent'
  @Prop({ type: String, default: '' }) private background!: string;
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
