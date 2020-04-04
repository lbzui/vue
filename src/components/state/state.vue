<template>
  <span
    :class="[
      'lbz-state',
      type && `lbz-state--${type}`,
      background && `lbz-state-bg--${background}`,
      darkened && 'lbz-is-darkened',
      cisRipple && 'lbz-ripple',
      cisRipple && unbounded && 'lbz-is-unbounded'
    ]"
    @touchstart.passive="ftouchstart($event)"
    @touchmove.passive="ftouchmove($event)"
    @touchend.passive="ftouchend($event)"
    @mousedown.passive="fmousedown($event)"
    @mouseup.passive="fmouseup($event)"
  ></span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { lbzfSupportsCssVariables, lbzfSupportsTouch } from '../../utils/funcs';

interface LbzRippleCoordinate {
  readonly top: number;
  readonly left: number;
}

interface LbzRippleTranslate {
  readonly x: number;
  readonly y: number;
}

@Component
export default class LbzState extends Vue {
  // type: 'surface' (default), 'primary', 'image'
  @Prop({ type: String, default: '' }) private type!: string;
  // background: 'primary', 'primary-variant', 'secondary', 'secondary-variant',
  //             'background', 'surface', 'error', 'light', 'dark',
  //             'on-primary', 'on-primary-variant', 'on-secondary', 'on-secondary-variant',
  //             'on-background', 'on-surface' (default), 'on-error', 'on-light', 'on-dark'
  @Prop({ type: String, default: '' }) private background!: string;
  // darkened: true, false (default)
  @Prop({ type: Boolean, default: false }) private darkened!: boolean;
  // ripple: undefined (default), true, false
  @Prop({ type: Boolean, default: undefined }) private ripple!: boolean;
  // unbounded: true, false (default)
  @Prop({ type: Boolean, default: false }) private unbounded!: boolean;
  // centered: true, false (default)
  @Prop({ type: Boolean, default: false }) private centered!: boolean;

  private vsupportsTouch: boolean = lbzfSupportsTouch();
  private vframeTimer: any = 0;
  private venterTimer: any = 0;
  private vleaveTimer: any = 0;

  get cisRipple(): boolean {
    if (!lbzfSupportsCssVariables()) {
      return false;
    }

    return this.ripple === undefined
      ? this.$lbzui.ripple
      : this.ripple;
  }

  private beforeDestroy(): void {
    if (this.cisRipple) {
      window.cancelAnimationFrame(this.vframeTimer);
      clearTimeout(this.venterTimer);
      clearTimeout(this.vleaveTimer);
      this.vframeTimer = 0;
      this.venterTimer = 0;
      this.vleaveTimer = 0;
    }
  }

  private ftouchstart(e: TouchEvent): void {
    if (!this.cisRipple) {
      return;
    }

    this.fenter(e);
  }

  private ftouchmove(e: TouchEvent): void {
    if (!this.cisRipple) {
      return;
    }
  }

  private ftouchend(e: TouchEvent): void {
    if (!this.cisRipple) {
      return;
    }

    this.fleave(e);
  }

  private fmousedown(e: MouseEvent): void {
    if (!this.cisRipple || this.vsupportsTouch) {
      return;
    }

    this.fenter(e);
  }

  private fmouseup(e: MouseEvent): void {
    if (!this.cisRipple || this.vsupportsTouch) {
      return;
    }

    this.fleave(e);
  }

  private fenter(e: TouchEvent | MouseEvent): void {
    const target: HTMLSpanElement = (e as any).target;
    const { offsetWidth, offsetHeight }: any = target;
    const maxRadius: number = Math.max(offsetWidth, offsetHeight);
    const initialSize: number = Math.floor(maxRadius * .6);
    const radius: number = this.centered
      ? maxRadius
      : Math.sqrt(Math.pow(offsetWidth, 2) + Math.pow(offsetHeight, 2)) + 10;
    const size: number = this.centered && initialSize % 2 !== 0
      ? initialSize - 1
      : initialSize;

    target.style.setProperty('--lbz-ripple-size', `${size}px`);
    target.style.setProperty('--lbz-ripple-scale', `${radius / size}`);

    if (this.centered) {
      const coordinate: LbzRippleCoordinate = {
        top: Math.round((offsetHeight - size) / 2),
        left: Math.round((offsetWidth - size) / 2),
      };

      target.style.setProperty('--lbz-ripple-top', `${coordinate.top}px`);
      target.style.setProperty('--lbz-ripple-left', `${coordinate.left}px`);
    } else {
      const clientRect: ClientRect = target.getBoundingClientRect();
      const touch: any = e.type === 'touchstart'
        ? (e as TouchEvent).changedTouches[0]
        : (e as MouseEvent);
      const translateStart: LbzRippleTranslate = {
        x: (touch.pageX - (window.pageXOffset + clientRect.left)) - size / 2,
        y: (touch.pageY - (window.pageYOffset + clientRect.top)) - size / 2,
      };
      const translateEnd: LbzRippleTranslate = {
        x: (offsetWidth - size) / 2,
        y: (offsetHeight - size) / 2,
      };

      target.style.setProperty('--lbz-ripple-translate-start', `${translateStart.x}px, ${translateStart.y}px, 0`);
      target.style.setProperty('--lbz-ripple-translate-end', `${translateEnd.x}px, ${translateEnd.y}px, 0`);
    }

    this.vframeTimer = window.requestAnimationFrame((): void => {
      target.classList.add('lbz-ripple-enter');
    });
  }

  private fleave(e: TouchEvent | MouseEvent): void {
    const target: HTMLSpanElement = (e as any).target;

    this.venterTimer = setTimeout((): void => {
      target.classList.remove('lbz-ripple-enter');
      target.classList.add('lbz-ripple-leave');

      this.vleaveTimer = setTimeout((): void => {
        target.classList.remove('lbz-ripple-leave');
      }, 225);
    }, 150);
  }
}
</script>
