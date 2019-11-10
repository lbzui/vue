import { default as _Vue } from 'vue';
import TopAppBar from './top-app-bar.vue';

(TopAppBar as any).install = (Vue: typeof _Vue, opts?: any): void => {
  Vue.component('lbz-top-app-bar', TopAppBar);
};

export default TopAppBar;
