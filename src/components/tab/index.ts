import { default as _Vue } from 'vue';
import Tab from './tab.vue';

(Tab as any).install = (Vue: typeof _Vue, opts?: any): void => {
  Vue.component('lbz-tab', Tab);
};

export default Tab;
