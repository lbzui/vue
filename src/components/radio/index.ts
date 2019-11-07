import { default as _Vue, PluginFunction } from 'vue';
import { LBZComponent } from '..';
import Radio from './radio.vue';

const install: PluginFunction<any> = (Vue: typeof _Vue, opts?: any): void => {
  Vue.component('lbz-radio', Radio);
};
const LBZRadio: LBZComponent<typeof Radio> = {
  component: Radio,
  install,
};

export default LBZRadio;
