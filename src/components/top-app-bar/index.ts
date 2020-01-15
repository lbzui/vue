import Vue from 'vue';
import TopAppBar from './top-app-bar.vue';

(TopAppBar as any).install = (v: typeof Vue, opts?: any): void => {
  v.component('lbz-top-app-bar', TopAppBar);
};

export default TopAppBar;
