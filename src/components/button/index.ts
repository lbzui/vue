import { default as _Vue } from 'vue';
import Button from './button.vue';

(Button as any).install = (Vue: typeof _Vue, opts?: any): void => {
  Vue.component('lbz-button', Button);
};

export default Button;
