import { default as _Vue } from 'vue';
import IconButton from './icon-button.vue';

(IconButton as any).install = (Vue: typeof _Vue, opts?: any): void => {
  Vue.component('lbz-icon-button', IconButton);
};

export default IconButton;
