import Vue from 'vue';
import Snackbar from './snackbar.vue';

(Snackbar as any).install = (v: typeof Vue, opts?: any): void => {
  v.component('lbz-snackbar', Snackbar);
};

export default Snackbar;
