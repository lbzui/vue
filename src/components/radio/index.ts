import Vue from 'vue';
import Radio from './radio.vue';

(Radio as any).install = (v: typeof Vue, opts?: any): void => {
  v.component('lbz-radio', Radio);
};

export default Radio;
