import Vue, { VueConstructor } from 'vue';
import {
  VueScrollPosition as ScrollPosition,
  LbzuiOptions as Options,
} from '../types';

declare global {
  // vue-scroll
  // tslint:disable no-empty-interface
  interface VueScrollPosition extends ScrollPosition {}

  interface Window {
    Vue?: VueConstructor;
  }

  // tslint:disable no-empty-interface
  interface LbzuiOptions extends Options {}

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
