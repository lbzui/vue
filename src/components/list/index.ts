import { default as _Vue, PluginFunction } from 'vue';
import { LBZComponent } from '..';
import List from './list.vue';

const install: PluginFunction<any> = (Vue: typeof _Vue, opts?: any): void => {
  Vue.component('lbz-list', List);
};
const LBZList: LBZComponent<typeof List> = {
  component: List,
  install,
};

export default LBZList;
