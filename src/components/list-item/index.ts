import { default as _Vue, PluginFunction } from 'vue';
import { LBZComponent } from '..';
import ListItem from './list-item.vue';

const install: PluginFunction<any> = (Vue: typeof _Vue, opts?: any): void => {
  Vue.component('lbz-list-item', ListItem);
};
const LBZListItem: LBZComponent<typeof ListItem> = {
  component: ListItem,
  install,
};

export default LBZListItem;
