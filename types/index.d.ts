import Vue from 'vue';

export interface LbzuiOptions {
  ripple: boolean;
  dense: boolean;
  [key: string]: any;
}

// vue-scroll
export interface VueScrollPosition {
  readonly scrollTop: number;
  readonly scrollLeft: number;
}

declare module '@lbzui/vue' {
  class LbzuiComponent extends Vue {
    static install(v: typeof Vue, opts?: LbzuiOptions): void;
  }

  export const version: string;

  export function install(v: typeof Vue, opts?: LbzuiOptions): void;

  export class Backdrop extends LbzuiComponent {}
  export class Button extends LbzuiComponent {}
  export class Card extends LbzuiComponent {}
  export class Dialog extends LbzuiComponent {}
  export class Divider extends LbzuiComponent {}
  export class Drawer extends LbzuiComponent {}
  export class EmptyState extends LbzuiComponent {}
  export class FAB extends LbzuiComponent {}
  export class Icon extends LbzuiComponent {}
  export class IconButton extends LbzuiComponent {}
  export class List extends LbzuiComponent {}
  export class ListItem extends LbzuiComponent {}
  export class Radio extends LbzuiComponent {}
  export class State extends LbzuiComponent {}
  export class Tab extends LbzuiComponent {}
  export class TabItem extends LbzuiComponent {}
  export class TopAppBar extends LbzuiComponent {}
}

declare module 'vue/types/vue' {
  export interface Vue {
    $lbzui: LbzuiOptions;
  }
}
