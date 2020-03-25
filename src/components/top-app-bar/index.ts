import Vue from 'vue';
import TopAppBar from './top-app-bar.vue';

(TopAppBar as any).install = (vm: typeof Vue, opts?: any): void => {
  vm.component('lbz-top-app-bar', TopAppBar);
};

export default TopAppBar;
