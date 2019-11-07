import { default as _Vue, PluginFunction } from 'vue';
import { LBZComponent } from '..';
import TopAppBar from './top-app-bar.vue';

const install: PluginFunction<any> = (Vue: typeof _Vue, opts?: any): void => {
  Vue.component('lbz-top-app-bar', TopAppBar);
};
const LBZTopAppBar: LBZComponent<typeof TopAppBar> = {
  component: TopAppBar,
  install,
};

export default LBZTopAppBar;
