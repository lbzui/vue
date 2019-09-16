import { default as _Vue, PluginFunction } from 'vue';
import { LBZComponent } from '..';
import Card from './card.vue';

const install: PluginFunction<any> = (Vue: typeof _Vue, opts?: any) => {
  Vue.component('lbz-card', Card);
};
const LBZCard: LBZComponent<typeof Card> = {
  component: Card,
  install,
};

export default LBZCard;
