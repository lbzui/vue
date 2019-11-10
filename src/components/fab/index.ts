import { default as _Vue } from 'vue';
import FAB from './fab.vue';

(FAB as any).install = (Vue: typeof _Vue, opts?: any): void => {
  Vue.component('lbz-fab', FAB);
};

export default FAB;
