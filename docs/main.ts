import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import LBZUI from '@/components';

Vue.use(LBZUI, {
  ripple: true,
  dense: false,
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#lbzui');
