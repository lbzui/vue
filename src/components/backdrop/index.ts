import { default as _Vue } from 'vue';
import Backdrop from './backdrop.vue';

(Backdrop as any).install = (Vue: typeof _Vue, opts?: any): void => {
  Vue.component('lbz-backdrop', Backdrop);
};

export default Backdrop;
