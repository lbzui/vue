import Vue from 'vue';
import TabItem from './tab-item.vue';

(TabItem as any).install = (vm: typeof Vue, opts?: any): void => {
  vm.component('lbz-tab-item', TabItem);
};

export default TabItem;
