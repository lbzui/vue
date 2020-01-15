import Vue from 'vue';
import EmptyState from './empty-state.vue';

(EmptyState as any).install = (v: typeof Vue, opts?: any): void => {
  v.component('lbz-empty-state', EmptyState);
};

export default EmptyState;
