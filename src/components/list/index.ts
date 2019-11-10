import { default as _Vue } from 'vue';
import List from './list.vue';

(List as any).install = (Vue: typeof _Vue, opts?: any): void => {
  Vue.component('lbz-list', List);
};

export default List;
