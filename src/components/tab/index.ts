import Vue from 'vue';
import Tab from './tab.vue';

(Tab as any).install = (v: typeof Vue, opts?: any): void => {
  v.component('lbz-tab', Tab);
};

export default Tab;
