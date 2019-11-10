import { default as _Vue } from 'vue';
import Radio from './radio.vue';

(Radio as any).install = (Vue: typeof _Vue, opts?: any): void => {
  Vue.component('lbz-radio', Radio);
};

export default Radio;
