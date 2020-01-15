import Vue from 'vue';
import Divider from './divider.vue';

(Divider as any).install = (v: typeof Vue, opts?: any): void => {
  v.component('lbz-divider', Divider);
};

export default Divider;
