import Vue from 'vue';
import TabItem from './tab-item.vue';

(TabItem as any).install = (v: typeof Vue, opts?: any): void => {
  v.component('lbz-tab-item', TabItem);
};

export default TabItem;
