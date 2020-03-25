import Vue from 'vue';
import IconButton from './icon-button.vue';

(IconButton as any).install = (vm: typeof Vue, opts?: any): void => {
  vm.component('lbz-icon-button', IconButton);
};

export default IconButton;
