import Vue from 'vue';
import FAB from './fab.vue';

(FAB as any).install = (vm: typeof Vue, opts?: any): void => {
  vm.component('lbz-fab', FAB);
};

export default FAB;
