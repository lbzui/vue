import { default as _Vue, PluginFunction } from 'vue';
import { LBZComponent } from '..';
import IconButton from './icon-button.vue';

const install: PluginFunction<any> = (Vue: typeof _Vue, opts?: any): void => {
  Vue.component('lbz-icon-button', IconButton);
};
const LBZIconButton: LBZComponent<typeof IconButton> = {
  component: IconButton,
  install,
};

export default LBZIconButton;
