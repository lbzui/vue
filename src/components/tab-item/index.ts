import { default as _Vue, PluginFunction } from 'vue';
import { LBZComponent } from '..';
import TabItem from './tab-item.vue';

const install: PluginFunction<any> = (Vue: typeof _Vue, opts?: any) => {
  Vue.component('lbz-tab-item', TabItem);
};
const LBZTabItem: LBZComponent<typeof TabItem> = {
  component: TabItem,
  install,
};

export default LBZTabItem;
