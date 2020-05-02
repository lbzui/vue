<template>
  <transition name="lbz-drawer">
    <aside
      v-show="cisActive"
      :class="[
        'lbz-drawer',
        type && `lbz-drawer--${type}`,
        background && `lbz-drawer--${background}`,
        cisFullScreen && 'lbz-is-full-screen',
        cisActive && 'lbz-is-active'
      ]"
    >
      <div class="lbz-drawer__container">
        <template v-if="$slots.start || title || subtitle || $slots.append">
          <lbz-top-app-bar
            v-if="cisFullScreen"
            :background="background || 'transparent'"
            :title="title"
          >
            <template #start>
              <lbz-icon-button
                :on-background="background"
                darkened
                @click.stop="fclose()"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </lbz-icon-button>
            </template>
            <template v-if="$slots.start" #end>
              <slot name="start" />
            </template>
            <template v-if="$slots.append" #append>
              <slot name="append" />
            </template>
          </lbz-top-app-bar>
          <header v-else class="lbz-drawer__header">
            <slot name="start" />
            <h3 v-if="title" class="lbz-drawer__title" v-html="title"></h3>
            <p
              v-if="subtitle"
              class="lbz-drawer__subtitle"
              v-html="subtitle"
            ></p>
            <slot name="append" />
          </header>
        </template>
        <div class="lbz-drawer__content">
          <slot name="center" />
          <slot />
        </div>
        <div v-if="$slots.end" class="lbz-drawer__footer">
          <slot name="end" />
        </div>
      </div>
      <div class="lbz-drawer__scrim" @click.stop="fclose()"></div>
    </aside>
  </transition>
</template>

<script lang="ts">
  import {
    Component,
    PropSync,
    Prop,
    Watch,
    Vue
  } from 'vue-property-decorator';
  import {
    lbzfIsMobileBreakpoint,
    lbzfLockBodyScroll
  } from '../../utils/funcs';
  import LbzIconButton from '../icon-button/icon-button.vue';
  import LbzTopAppBar from '../top-app-bar/top-app-bar.vue';

  @Component({
    components: {
      LbzIconButton,
      LbzTopAppBar
    }
  })
  export default class LbzDrawer extends Vue {
    // active.sync: true (default), false
    @PropSync('active', { type: Boolean, default: true })
    private cisActive!: boolean;

    // type: 'standard' (default), 'modal', 'bottom (mobile only)'
    @Prop({ type: String, default: '' }) private type!: string;
    // background (auto-darkened): 'primary', 'secondary', 'surface' (default), 'light', 'dark'
    @Prop({ type: String, default: '' }) private background!: string;
    // full-screen (type === 'bottom'): true, false (default)
    @Prop({ type: Boolean, default: false }) private fullScreen!: boolean;
    // title: '' (default), 'x'
    @Prop({ type: String, default: '' }) private title!: string;
    // subtitle: '' (default), 'x'
    @Prop({ type: String, default: '' }) private subtitle!: string;
    // lock-body-scroll: true (default), false
    @Prop({ type: Boolean, default: true }) private lockBodyScroll!: boolean;

    private visMobile = false;

    get cisStandard(): boolean {
      return ['', 'standard'].includes(this.type);
    }

    get cisFullScreen(): boolean {
      return this.type === 'bottom' && this.fullScreen;
    }

    @Watch('cisActive')
    private factiveChanged(val: boolean): void {
      this.$emit(val ? 'open' : 'close');

      if (this.lockBodyScroll) {
        lbzfLockBodyScroll(this.cisStandard ? this.visMobile && val : val);
      }
    }

    private mounted(): void {
      if (this.cisStandard) {
        this.fresize();
        window.addEventListener('resize', this.fresize);
      }
    }

    private beforeDestroy(): void {
      if (this.cisStandard) {
        window.removeEventListener('resize', this.fresize);
      }
    }

    private fresize(): void {
      if (!this.cisStandard) {
        return;
      }

      this.visMobile = lbzfIsMobileBreakpoint();

      if (this.lockBodyScroll && !this.visMobile && this.cisActive) {
        lbzfLockBodyScroll(false);
      }

      this.cisActive = !this.visMobile;
    }

    private ftoggle(): void {
      this.cisActive = !this.cisActive;
    }

    private fopen(): void {
      this.cisActive = true;
    }

    private fclose(): void {
      this.cisActive = false;
    }
  }
</script>
