import Vue, { VueConstructor } from 'vue';

interface LBZUI {
  ripple: boolean;
  dense: boolean;
  [propName: string]: any;
}

declare module 'vue/types/vue' {
  interface Vue {
    $LBZUI: LBZUI;
  }
}

declare global {
  // vue-scroll
  interface VueScrollPosition {
    scrollTop: number;
    scrollLeft: number;
  }

  interface Window {
    Vue?: VueConstructor;
  }

  // tslint:disable no-empty-interface
  interface InstallOptions extends LBZUI {}

  interface ComponentAttributes {
    is: string;
    to?: string | object;
    replace?: boolean;
    append?: boolean;
    tag?: string;
    exact?: boolean;
    event?: string | string[];
    disabled?: boolean;
    [propName: string]: any;
  }

  interface StateAttributes {
    class: string;
    type?: string;
    background?: string;
    unscalable?: boolean;
  }
}
