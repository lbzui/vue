import Vue from 'vue';
import Switch from './switch.vue';

(Switch as any).install = (v: typeof Vue, opts?: any): void => {
  v.component('lbz-switch', Switch);
};

export default Switch;
