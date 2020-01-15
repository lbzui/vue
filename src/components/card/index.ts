import Vue from 'vue';
import Card from './card.vue';

(Card as any).install = (v: typeof Vue, opts?: any): void => {
  v.component('lbz-card', Card);
};

export default Card;
