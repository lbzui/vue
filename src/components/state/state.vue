<template>
  <span
    :class="[
      'lbz-state',
      type && `lbz-state--${ type }`,
      background && `lbz-state-bg--${ background }`,
      unscalable && 'is-unscalable',
      cisRipple && 'lbz-ripple'
    ]"
    @touchstart="ftouchstart($event)"
    @touchmove="ftouchmove($event)"
    @touchend="ftouchend($event)"
    @mousedown="fmousedown($event)"
    @mouseup="fmouseup($event)"
  ></span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { supportsCssVars } from '../../utils/funcs';

@Component
export default class LbzState extends Vue {
  // type: 'surface' (default), 'primary', 'image'
  @Prop({ type: String, default: '' }) private type!: string;
  // background: 'primary', 'primary-variant', 'secondary', 'secondary-variant',
  //             'background', 'surface', 'error', 'light', 'dark',
  //             'on-primary', 'on-primary-variant', 'on-secondary', 'on-secondary-variant',
  //             'on-background', 'on-surface' (default), 'on-error', 'on-light', 'on-dark'
  @Prop({ type: String, default: '' }) private background!: string;
  // unscalable: true, false (default)
  @Prop({ type: Boolean, default: false }) private unscalable!: boolean;

  private frameTimer = 0;
  private enterTimer = 0;
  private leaveTimer = 0;

  get cisRipple(): boolean {
    return this.$LBZUI.ripple && supportsCssVars();
  }

  private beforeDestroy(): void {
    if (this.cisRipple) {
      window.cancelAnimationFrame(this.frameTimer);
      clearTimeout(this.enterTimer);
      clearTimeout(this.leaveTimer);
    }
  }

  private ftouchstart(e: TouchEvent): void {
    if (!this.cisRipple) {
      return;
    }

    e.preventDefault();

    this.fenter(e);
  }

  private ftouchmove(e: TouchEvent): void {
    if (!this.cisRipple) {
      return;
    }

    e.preventDefault();
  }

  private ftouchend(e: TouchEvent): void {
    if (!this.cisRipple) {
      return;
    }

    e.preventDefault();

    this.fleave(e);
  }

  private fmousedown(e: MouseEvent): void {
    if (!this.cisRipple) {
      return;
    }

    this.fenter(e);
  }

  private fmouseup(e: MouseEvent): void {
    if (!this.cisRipple) {
      return;
    }

    this.fleave(e);
  }

  private fenter(e: Event): void {
    const target = (e as any).target;
    const { offsetWidth, offsetHeight } = target;
    const clientRect = target.getBoundingClientRect();
    const radius = Math.sqrt(Math.pow(offsetWidth, 2) + Math.pow(offsetHeight, 2)) + 10;
    const size = Math.floor(Math.max(offsetWidth, offsetHeight) * .6);
    const touch = e.type === 'touchstart'
      ? (e as TouchEvent).changedTouches[0]
      : (e as MouseEvent);
    const translateStart = {
      x: (touch.pageX - (window.pageXOffset + clientRect.left)) - size / 2,
      y: (touch.pageY - (window.pageYOffset + clientRect.top)) - size / 2,
    };
    const translateEnd = {
      x: (offsetWidth - size) / 2,
      y: (offsetHeight - size) / 2,
    };

    target.style.setProperty('--lbz-ripple-size', `${size}px`);
    target.style.setProperty('--lbz-ripple-translate-start', `${translateStart.x}px, ${translateStart.y}px`);
    target.style.setProperty('--lbz-ripple-translate-end', `${translateEnd.x}px, ${translateEnd.y}px`);
    target.style.setProperty('--lbz-ripple-scale', `${radius / size}`);

    this.frameTimer = window.requestAnimationFrame((): void => {
      target.classList.add('lbz-ripple-enter');
    });
  }

  private fleave(e: Event): void {
    const target = (e as any).target;

    this.enterTimer = setTimeout((): void => {
      target.classList.remove('lbz-ripple-enter');
      target.classList.add('lbz-ripple-leave');

      this.leaveTimer = setTimeout((): void => {
        target.classList.remove('lbz-ripple-leave');
      }, 225);
    }, 150);
  }
}
</script>
