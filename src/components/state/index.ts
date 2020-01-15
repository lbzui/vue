import Vue from 'vue';
import State from './state.vue';

(State as any).install = (v: typeof Vue, opts?: any): void => {
  v.component('lbz-state', State);
};

export default State;
