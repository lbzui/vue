import Vue from 'vue';
import FAB from './fab.vue';

(FAB as any).install = (v: typeof Vue, opts?: any): void => {
  v.component('lbz-fab', FAB);
};

export default FAB;
