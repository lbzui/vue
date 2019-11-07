import { default as _Vue, PluginFunction } from 'vue';
import { LBZComponent } from '..';
import Drawer from './drawer.vue';

const install: PluginFunction<any> = (Vue: typeof _Vue, opts?: any): void => {
  Vue.component('lbz-drawer', Drawer);
};
const LBZDrawer: LBZComponent<typeof Drawer> = {
  component: Drawer,
  install,
};

export default LBZDrawer;
