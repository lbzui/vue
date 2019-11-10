import { default as _Vue } from 'vue';
import Divider from './divider.vue';

(Divider as any).install = (Vue: typeof _Vue, opts?: any): void => {
  Vue.component('lbz-divider', Divider);
};

export default Divider;
