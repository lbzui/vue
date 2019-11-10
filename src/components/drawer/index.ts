import { default as _Vue } from 'vue';
import Drawer from './drawer.vue';

(Drawer as any).install = (Vue: typeof _Vue, opts?: any): void => {
  Vue.component('lbz-drawer', Drawer);
};

export default Drawer;
