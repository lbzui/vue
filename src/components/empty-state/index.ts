import Vue from 'vue';
import EmptyState from './empty-state.vue';

(EmptyState as any).install = (vm: typeof Vue, opts?: any): void => {
  vm.component('lbz-empty-state', EmptyState);
};

export default EmptyState;
