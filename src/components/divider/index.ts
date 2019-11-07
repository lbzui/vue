import { default as _Vue, PluginFunction } from 'vue';
import { LBZComponent } from '..';
import Divider from './divider.vue';

const install: PluginFunction<any> = (Vue: typeof _Vue, opts?: any): void => {
  Vue.component('lbz-divider', Divider);
};
const LBZDivider: LBZComponent<typeof Divider> = {
  component: Divider,
  install,
};

export default LBZDivider;
