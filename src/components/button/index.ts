import { default as _Vue, PluginFunction } from 'vue';
import { LBZComponent } from '..';
import Button from './button.vue';

const install: PluginFunction<any> = (Vue: typeof _Vue, opts?: any) => {
  Vue.component('lbz-button', Button);
};
const LBZButton: LBZComponent<typeof Button> = {
  component: Button,
  install,
};

export default LBZButton;
