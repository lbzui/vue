import Vue from 'vue';
import Button from './button.vue';

(Button as any).install = (v: typeof Vue, opts?: any): void => {
  v.component('lbz-button', Button);
};

export default Button;
