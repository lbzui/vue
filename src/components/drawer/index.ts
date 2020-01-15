import Vue from 'vue';
import Drawer from './drawer.vue';

(Drawer as any).install = (v: typeof Vue, opts?: any): void => {
  v.component('lbz-drawer', Drawer);
};

export default Drawer;
