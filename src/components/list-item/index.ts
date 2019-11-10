import { default as _Vue } from 'vue';
import ListItem from './list-item.vue';

(ListItem as any).install = (Vue: typeof _Vue, opts?: any): void => {
  Vue.component('lbz-list-item', ListItem);
};

export default ListItem;
