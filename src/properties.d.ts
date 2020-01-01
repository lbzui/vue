import Vue from 'vue';

interface LBZUI {
  ripple: boolean;
  dense: boolean;
}

declare module 'vue/types/vue' {
  interface Vue {
    $LBZUI: LBZUI;
  }
}
