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
  interface Window {
    Vue?: VueConstructor;
  }

  interface VueScrollPosition {
    scrollTop: number;
    scrollLeft: number;
  }

  interface LbzUI extends LBZUI {}
}
