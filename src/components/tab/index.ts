import Vue from 'vue';
import Tab from './tab.vue';

(Tab as any).install = (vm: typeof Vue, opts?: any): void => {
  vm.component('lbz-tab', Tab);
};

export default Tab;
