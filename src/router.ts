import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },

    // styles
    {
      path: '/styles/elevation',
      name: 'elevation',
      component: () => import('./views/styles/Elevation.vue'),
    },
    {
      path: '/styles/shadow',
      name: 'shadow',
      component: () => import('./views/styles/Shadow.vue'),
    },
    {
      path: '/styles/surface',
      name: 'surface',
      component: () => import('./views/styles/Surface.vue'),
    },
    {
      path: '/styles/typography',
      name: 'typography',
      component: () => import('./views/styles/Typography.vue'),
    },
  ],
});
