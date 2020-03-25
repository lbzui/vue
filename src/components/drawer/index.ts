import Vue from 'vue';
import Drawer from './drawer.vue';

(Drawer as any).install = (vm: typeof Vue, opts?: any): void => {
  vm.component('lbz-drawer', Drawer);
};

export default Drawer;
