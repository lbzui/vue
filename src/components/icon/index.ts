import Vue from 'vue';
import Icon from './icon.vue';

(Icon as any).install = (v: typeof Vue, opts?: any): void => {
  v.component('lbz-icon', Icon);
};

export default Icon;
