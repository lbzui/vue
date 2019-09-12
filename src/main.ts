import Vue from 'vue';
import App from './App.vue';
import router from './router';
import LBZUI from './components';

Vue.use(LBZUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#lbzui');
