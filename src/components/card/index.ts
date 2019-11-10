import { default as _Vue } from 'vue';
import Card from './card.vue';

(Card as any).install = (Vue: typeof _Vue, opts?: any): void => {
  Vue.component('lbz-card', Card);
};

export default Card;
