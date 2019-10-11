import { default as _Vue, PluginFunction } from 'vue';
import { LBZComponent } from '..';
import Tab from './tab.vue';

const install: PluginFunction<any> = (Vue: typeof _Vue, opts?: any) => {
  Vue.component('lbz-tab', Tab);
};
const LBZTab: LBZComponent<typeof Tab> = {
  component: Tab,
  install,
};

export default LBZTab;
