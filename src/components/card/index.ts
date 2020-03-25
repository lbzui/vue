import Vue from 'vue';
import Card from './card.vue';

(Card as any).install = (vm: typeof Vue, opts?: any): void => {
  vm.component('lbz-card', Card);
};

export default Card;
