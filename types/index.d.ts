import Vue from 'vue';

// vue-scroll
export interface VueScrollPosition {
  readonly scrollTop: number;
  readonly scrollLeft: number;
}

export interface LbzuiOptions {
  dense: boolean;
  ripple: boolean;
  [key: string]: any;
}

export interface LbzSnackbarOptions {
  duration?: number;
  class?: string;
  align?: string;
  stacked?: boolean;
  actionLabel?: string;
  actionClick?: () => void;
}

export interface LbzSnackbar {
  (label: string, duration?: number | LbzSnackbarOptions): void;
}

declare module 'vue/types/vue' {
  export interface Vue {
    $lbzui: LbzuiOptions;
    $lbzSnackbar: LbzSnackbar;
  }
}

declare module '@lbzui/vue' {
  class LbzuiComponent extends Vue {
    static install(vm: typeof Vue, opts?: LbzuiOptions): void;
  }

  export const version: string;

  export function install(vm: typeof Vue, opts?: LbzuiOptions): void;

  export class Backdrop extends LbzuiComponent {}
  export class Button extends LbzuiComponent {}
  export class Card extends LbzuiComponent {}
  export class Checkbox extends LbzuiComponent {}
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
  export class Snackbar extends LbzuiComponent {}
  export class State extends LbzuiComponent {}
  export class Switch extends LbzuiComponent {}
  export class Tab extends LbzuiComponent {}
  export class TabItem extends LbzuiComponent {}
  export class TopAppBar extends LbzuiComponent {}
}
