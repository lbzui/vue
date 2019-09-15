import { default as _Vue, PluginFunction } from 'vue';
import { LBZComponent } from '..';
import Fab from './fab.vue';

const install: PluginFunction<any> = (Vue: typeof _Vue, opts?: any) => {
  Vue.component('lbz-fab', Fab);
};
const LBZFab: LBZComponent<typeof Fab> = {
  component: Fab,
  install,
};

export default LBZFab;
