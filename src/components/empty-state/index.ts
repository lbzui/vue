import { default as _Vue } from 'vue';
import EmptyState from './empty-state.vue';

(EmptyState as any).install = (Vue: typeof _Vue, opts?: any): void => {
  Vue.component('lbz-empty-state', EmptyState);
};

export default EmptyState;
