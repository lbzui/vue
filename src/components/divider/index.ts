import Vue from 'vue';
import Divider from './divider.vue';

(Divider as any).install = (vm: typeof Vue, opts?: any): void => {
  vm.component('lbz-divider', Divider);
};

export default Divider;
