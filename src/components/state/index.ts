import Vue from 'vue';
import State from './state.vue';

(State as any).install = (vm: typeof Vue, opts?: any): void => {
  vm.component('lbz-state', State);
};

export default State;
