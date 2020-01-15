import Vue from 'vue';
import Dialog from './dialog.vue';

(Dialog as any).install = (v: typeof Vue, opts?: any): void => {
  v.component('lbz-dialog', Dialog);
};

export default Dialog;
