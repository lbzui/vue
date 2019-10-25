import { default as _Vue, PluginFunction } from 'vue';
import { LBZComponent } from '..';
import Icon from './icon.vue';

const install: PluginFunction<any> = (Vue: typeof _Vue, opts?: any) => {
  Vue.component('lbz-icon', Icon);
};
const LBZIcon: LBZComponent<typeof Icon> = {
  component: Icon,
  install,
};

export default LBZIcon;
