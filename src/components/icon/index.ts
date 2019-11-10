import { default as _Vue } from 'vue';
import Icon from './icon.vue';

(Icon as any).install = (Vue: typeof _Vue, opts?: any): void => {
  Vue.component('lbz-icon', Icon);
};

export default Icon;
