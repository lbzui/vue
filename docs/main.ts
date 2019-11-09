import Vue from 'vue';
import VueScroll from 'vue-scroll';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import LBZUI from '@/components';

Vue.use(VueScroll, { debounce: 100 });
Vue.use(LBZUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#lbzui');
