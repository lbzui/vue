import Vue from 'vue';
import List from './list.vue';

(List as any).install = (v: typeof Vue, opts?: any): void => {
  v.component('lbz-list', List);
};

export default List;
