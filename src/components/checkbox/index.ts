import Vue from 'vue';
import Checkbox from './checkbox.vue';

(Checkbox as any).install = (vm: typeof Vue, opts?: any): void => {
  vm.component('lbz-checkbox', Checkbox);
};

export default Checkbox;
