<template>
  <span
    :class="[
      'lbz-state',
      type && `lbz-state--${type}`,
      background && `lbz-state-bg--${background}`,
      selected && 'is-selected',
      activated && 'is-activated',
      cisRipple && 'lbz-ripple',
      cisRipple && unbounded && 'lbz-ripple--unbounded'
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
import { supportsTouch, supportsCssVariables } from '../../utils/funcs';

interface RippleCoordinate {
  readonly top: number;
  readonly left: number;
}

interface RippleTranslate {
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
  // selected: true, false (default)
  @Prop({ type: Boolean, default: false }) private selected!: boolean;
  // activated: true, false (default)
  @Prop({ type: Boolean, default: false }) private activated!: boolean;
  // unbounded: true, false (default)
  @Prop({ type: Boolean, default: false }) private unbounded!: boolean;
  // centered: true, false (default)
  @Prop({ type: Boolean, default: false }) private centered!: boolean;

  private vsupportsTouch: boolean = supportsTouch();
  private vframeTimer: any = 0;
  private venterTimer: any = 0;
  private vleaveTimer: any = 0;

  get cisRipple(): boolean {
    return this.$lbzui.ripple && supportsCssVariables();
  }

  private beforeDestroy(): void {
    if (this.cisRipple) {
      window.cancelAnimationFrame(this.vframeTimer);
      clearTimeout(this.venterTimer);
      clearTimeout(this.vleaveTimer);
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
      const coordinate: RippleCoordinate = {
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
      const translateStart: RippleTranslate = {
        x: (touch.pageX - (window.pageXOffset + clientRect.left)) - size / 2,
        y: (touch.pageY - (window.pageYOffset + clientRect.top)) - size / 2,
      };
      const translateEnd: RippleTranslate = {
        x: (offsetWidth - size) / 2,
        y: (offsetHeight - size) / 2,
      };

      target.style.setProperty('--lbz-ripple-translate-start', `${translateStart.x}px, ${translateStart.y}px`);
      target.style.setProperty('--lbz-ripple-translate-end', `${translateEnd.x}px, ${translateEnd.y}px`);
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
