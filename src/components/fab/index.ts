import { default as _Vue, PluginFunction } from 'vue';
import { LBZComponent } from '..';
import FAB from './fab.vue';

const install: PluginFunction<any> = (Vue: typeof _Vue, opts?: any) => {
  Vue.component('lbz-fab', FAB);
};
const LBZFAB: LBZComponent<typeof FAB> = {
  component: FAB,
  install,
};

export default LBZFAB;
