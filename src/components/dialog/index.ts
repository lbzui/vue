import Vue from 'vue';
import Dialog from './dialog.vue';

(Dialog as any).install = (vm: typeof Vue, opts?: any): void => {
  vm.component('lbz-dialog', Dialog);
};

export default Dialog;
