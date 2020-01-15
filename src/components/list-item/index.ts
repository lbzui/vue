import Vue from 'vue';
import ListItem from './list-item.vue';

(ListItem as any).install = (v: typeof Vue, opts?: any): void => {
  v.component('lbz-list-item', ListItem);
};

export default ListItem;
