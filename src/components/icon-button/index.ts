import Vue from 'vue';
import IconButton from './icon-button.vue';

(IconButton as any).install = (v: typeof Vue, opts?: any): void => {
  v.component('lbz-icon-button', IconButton);
};

export default IconButton;
