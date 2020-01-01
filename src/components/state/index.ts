import { default as _Vue } from 'vue';
import State from './state.vue';

(State as any).install = (Vue: typeof _Vue, opts?: any): void => {
  Vue.component('lbz-state', State);
};

export default State;
