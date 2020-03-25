import Vue from 'vue';
import ListItem from './list-item.vue';

(ListItem as any).install = (vm: typeof Vue, opts?: any): void => {
  vm.component('lbz-list-item', ListItem);
};

export default ListItem;
