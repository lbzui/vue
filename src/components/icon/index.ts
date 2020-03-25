import Vue from 'vue';
import Icon from './icon.vue';

(Icon as any).install = (vm: typeof Vue, opts?: any): void => {
  vm.component('lbz-icon', Icon);
};

export default Icon;
