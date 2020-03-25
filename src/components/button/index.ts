import Vue from 'vue';
import Button from './button.vue';

(Button as any).install = (vm: typeof Vue, opts?: any): void => {
  vm.component('lbz-button', Button);
};

export default Button;
