import Vue from 'vue';
import List from './list.vue';

(List as any).install = (vm: typeof Vue, opts?: any): void => {
  vm.component('lbz-list', List);
};

export default List;
