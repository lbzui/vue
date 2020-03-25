import Vue from 'vue';
import Backdrop from './backdrop.vue';

(Backdrop as any).install = (vm: typeof Vue, opts?: any): void => {
  vm.component('lbz-backdrop', Backdrop);
};

export default Backdrop;
