import Vue from 'vue';
import Backdrop from './backdrop.vue';

(Backdrop as any).install = (v: typeof Vue, opts?: any): void => {
  v.component('lbz-backdrop', Backdrop);
};

export default Backdrop;
