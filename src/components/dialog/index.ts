import { default as _Vue } from 'vue';
import Dialog from './dialog.vue';

(Dialog as any).install = (Vue: typeof _Vue, opts?: any): void => {
  Vue.component('lbz-dialog', Dialog);
};

export default Dialog;
