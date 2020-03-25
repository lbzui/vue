import Vue from 'vue';
import Radio from './radio.vue';

(Radio as any).install = (vm: typeof Vue, opts?: any): void => {
  vm.component('lbz-radio', Radio);
};

export default Radio;
