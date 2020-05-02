<template>
  <div
    :class="[
      'lbz-backdrop',
      background && `lbz-backdrop--${background}`,
      cisActive && 'lbz-is-active'
    ]"
  >
    <section class="lbz-backdrop__back-layer">
      <div v-if="$slots['back-start']" class="lbz-backdrop__back-layer__header">
        <slot name="back-start" />
      </div>
      <div class="lbz-backdrop__back-layer__content">
        <slot name="back-center" />
      </div>
    </section>
    <section class="lbz-backdrop__front-layer">
      <header
        v-if="subheader || $slots['front-start'] || icon || divider"
        class="lbz-backdrop__front-layer__header"
      >
        <h2
          v-if="subheader"
          class="lbz-backdrop__front-layer__subheader"
          v-html="subheader"
        ></h2>
        <slot name="front-start" />
        <lbz-icon-button
          v-if="icon"
          class="lbz-backdrop__front-layer__icon"
          @click.stop="fclose()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </lbz-icon-button>
        <lbz-divider v-show="divider" />
      </header>
      <main
        ref="scroller"
        v-scroll="fscroll"
        :class="[
          'lbz-backdrop__front-layer__content',
          horizontal && 'lbz-is-horizontal'
        ]"
      >
        <slot name="front-center" />
        <slot />
      </main>
      <aside
        v-if="scrim"
        class="lbz-backdrop__front-layer__scrim"
        @click.stop="fclose()"
      ></aside>
    </section>
    <section v-if="$slots.popup" class="lbz-backdrop__popup">
      <slot name="popup" />
    </section>
  </div>
</template>

<script lang="ts">
  import {
    Component,
    PropSync,
    Prop,
    Ref,
    Emit,
    Vue
  } from 'vue-property-decorator';
  import LbzDivider from '../divider/divider.vue';
  import LbzIconButton from '../icon-button/icon-button.vue';

  @Component({
    components: {
      LbzDivider,
      LbzIconButton
    }
  })
  export default class LbzBackdrop extends Vue {
    // [required]active.sync: true, false
    @PropSync('active', { type: Boolean, required: true })
    private cisActive!: boolean;

    // background (auto-darkened): 'primary' (default), 'secondary', 'surface', 'light', 'dark'
    @Prop({ type: String, default: '' }) private background!: string;
    // subheader: '' (default), 'x'
    @Prop({ type: String, default: '' }) private subheader!: string;
    // icon: true, false (default)
    @Prop({ type: Boolean, default: false }) private icon!: boolean;
    // divider: true, false (default)
    @Prop({ type: Boolean, default: false }) private divider!: boolean;
    // horizontal: true, false (default)
    @Prop({ type: Boolean, default: false }) private horizontal!: boolean;
    // scrim: true, false (default)
    @Prop({ type: Boolean, default: false }) private scrim!: boolean;

    @Ref('scroller') private rscroller!: HTMLElement;

    private ftoggle(): void {
      this.cisActive = !this.cisActive;
    }

    private fopen(): void {
      this.cisActive = true;
    }

    private fclose(): void {
      this.cisActive = false;
    }

    private fscrollToTop(): void {
      this.rscroller.scrollTo(0, 0);
    }

    @Emit('scroll')
    private fscroll(e: Event, position: VueScrollPosition) {
      return this.rscroller;
    }
  }
</script>
