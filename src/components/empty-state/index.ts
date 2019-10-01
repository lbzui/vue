import { default as _Vue, PluginFunction } from 'vue';
import { LBZComponent } from '..';
import EmptyState from './empty-state.vue';

const install: PluginFunction<any> = (Vue: typeof _Vue, opts?: any) => {
  Vue.component('lbz-empty-state', EmptyState);
};
const LBZEmptyState: LBZComponent<typeof EmptyState> = {
  component: EmptyState,
  install,
};

export default LBZEmptyState;
