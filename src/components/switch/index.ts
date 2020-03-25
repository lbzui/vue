import Vue from 'vue';
import Switch from './switch.vue';

(Switch as any).install = (vm: typeof Vue, opts?: any): void => {
  vm.component('lbz-switch', Switch);
};

export default Switch;
