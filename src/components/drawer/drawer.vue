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
        <template v-if="$slots.start || title || subtitle || $slots.bottom">
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
              >close</lbz-icon-button>
            </template>
            <template v-if="$slots.start" #end>
              <slot name="start"/>
            </template>
            <template v-if="$slots.bottom" #bottom>
              <slot name="bottom"/>
            </template>
          </lbz-top-app-bar>
          <header v-else class="lbz-drawer__header">
            <slot name="start"/>
            <h3
              v-if="title"
              class="lbz-drawer__title"
              v-html="title"
            ></h3>
            <p
              v-if="subtitle"
              class="lbz-drawer__subtitle"
              v-html="subtitle"
            ></p>
            <slot name="bottom"/>
          </header>
        </template>
        <div class="lbz-drawer__content">
          <slot name="center"/>
          <slot/>
        </div>
      </div>
      <div class="lbz-drawer__scrim" @click.stop="fclose()"></div>
    </aside>
  </transition>
</template>

<script lang="ts">
import { Component, PropSync, Prop, Watch, Vue } from 'vue-property-decorator';
import { lockBodyScroll } from '../../utils/funcs';
import LbzIconButton from '../icon-button/icon-button.vue';
import LbzTopAppBar from '../top-app-bar/top-app-bar.vue';

@Component({
  components: {
    LbzIconButton,
    LbzTopAppBar,
  },
})
export default class LbzDrawer extends Vue {
  // active.sync: true (default), false
  @PropSync('active', { type: Boolean, default: true }) private cisActive!: boolean;

  // type: 'standard' (default), 'modal', 'bottom (mobile only)'
  @Prop({ type: String, default: '' }) private type!: string;
  // background (darkened): 'primary', 'secondary', 'surface' (default), 'light', 'dark'
  @Prop({ type: String, default: '' }) private background!: string;
  // full-screen (type === 'bottom'): true, false (default)
  @Prop({ type: Boolean, default: false }) private fullScreen!: boolean;
  // title: '' (default), 'x'
  @Prop({ type: String, default: '' }) private title!: string;
  // subtitle: '' (default), 'x'
  @Prop({ type: String, default: '' }) private subtitle!: string;
  // lock-body-scroll: true (default), false
  @Prop({ type: Boolean, default: true }) private lockBodyScroll!: boolean;

  private visMobile: boolean = false;

  get cisStandard(): boolean {
    return ['', 'standard'].includes(this.type);
  }

  get cisFullScreen(): boolean {
    return this.type === 'bottom' && this.fullScreen;
  }

  @Watch('cisActive')
  private factiveChanged(val: boolean, oldVal: boolean): void {
    this.$nextTick().then(() => {
      this.$emit(val ? 'open' : 'close');

      if (this.lockBodyScroll) {
        lockBodyScroll(this.cisStandard ? (this.visMobile && val) : val);
      }
    });
  }

  private created(): void {
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

    this.visMobile = document.body.clientWidth < 600;

    if (this.lockBodyScroll && !this.visMobile && this.cisActive) {
      lockBodyScroll(false);
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
