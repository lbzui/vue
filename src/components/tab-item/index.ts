import { default as _Vue } from 'vue';
import TabItem from './tab-item.vue';

(TabItem as any).install = (Vue: typeof _Vue, opts?: any): void => {
  Vue.component('lbz-tab-item', TabItem);
};

export default TabItem;
