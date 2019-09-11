<template>
  <div
    :class="[
      'lbz-backdrop',
      { 'is-active': cisActive }
    ]"
  >
    <div class="lbz-backdrop__back-layer">
      <div v-if="$slots['back-layer-header']" class="lbz-backdrop__back-layer__header">
        <slot name="back-layer-header"/>
      </div>
      <main class="lbz-backdrop__back-layer__content">
        <slot name="back-layer-content"/>
      </main>
    </div>
    <div class="lbz-backdrop__front-layer">
      <header class="lbz-backdrop__front-layer__header">
        <h2 v-if="subtitle || $slots['front-layer-header']" class="lbz-backdrop__front-layer__header__title">
          <template v-if="subtitle">{{ subtitle }}</template><slot v-else name="front-layer-header"/>
        </h2>
        <lbz-icon-button
          v-if="icon"
          class="lbz-backdrop__front-layer__header__icon"
          @click.stop="fclick($event)"
        >expand_less</lbz-icon-button>
        <lbz-divider v-show="divider"/>
      </header>
      <main
        :class="[
          'lbz-backdrop__front-layer__content',
          { 'is-horizontal': horizontal }
        ]"
      >
        <slot name="front-layer-content"/>
        <slot/>
      </main>
      <aside
        v-if="scrim"
        class="lbz-backdrop__front-layer__scrim"
        @click.stop="fclick($event)"
      ></aside>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, PropSync, Prop, Emit, Vue } from 'vue-property-decorator';

@Component
export default class Backdrop extends Vue {
  // active: true, false (default)
  @PropSync('active', { type: Boolean, default: false }) private cisActive !: boolean;
  // subtitle (front-layer): '' (default), 'x'
  @Prop({ type: String, default: '' }) private subtitle!: string;
  // icon (front-layer): true, false (default)
  @Prop({ type: Boolean, default: false }) private icon!: boolean;
  // divider (front-layer): true, false (default)
  @Prop({ type: Boolean, default: false }) private divider!: boolean;
  // horizontal (front-layer): true, false (default)
  @Prop({ type: Boolean, default: false }) private horizontal!: boolean;
  // scrim (front-layer): true, false (default)
  @Prop({ type: Boolean, default: false }) private scrim!: boolean;

  @Emit('click')
  private fclick(e: MouseEvent) {
    this.cisActive = !this.cisActive;
  }
}
</script>
