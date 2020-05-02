import Vue, { VueConstructor } from 'vue';
import {
  VueScrollPosition as ScrollPosition,
  LbzuiOptions as Options
} from '../types';

declare global {
  // vue-scroll
  type VueScrollPosition = ScrollPosition;

  interface Window {
    Vue?: VueConstructor;
  }

  type LbzuiOptions = Options;

  interface LbzComponentAttributes {
    is: string;
    to?: string | object;
    replace?: boolean;
    append?: boolean;
    tag?: string;
    exact?: boolean;
    event?: string | string[];
    exactActiveClass?: string;
    disabled?: boolean;
    [key: string]: any;
  }

  interface LbzStateAttributes {
    class: string;
    type?: string;
    background?: string;
    darkened?: boolean;
    ripple?: boolean;
    unbounded?: boolean;
    centered?: boolean;
  }
}
