import { default as _Vue, PluginFunction } from 'vue';
import { LBZComponent } from '..';
import Backdrop from './backdrop.vue';

const install: PluginFunction<any> = (Vue: typeof _Vue, opts?: any): void => {
  Vue.component('lbz-backdrop', Backdrop);
};
const LBZBackdrop: LBZComponent<typeof Backdrop> = {
  component: Backdrop,
  install,
};

export default LBZBackdrop;
