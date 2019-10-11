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

    // Styles
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

    // Components
    {
      path: '/components/backdrop',
      name: 'backdrop',
      component: () => import('./views/components/Backdrop.vue'),
    },
    {
      path: '/components/button',
      name: 'button',
      component: () => import('./views/components/Button.vue'),
    },
    {
      path: '/components/card',
      name: 'card',
      component: () => import('./views/components/Card.vue'),
    },
    {
      path: '/components/dialog',
      name: 'dialog',
      component: () => import('./views/components/Dialog.vue'),
    },
    {
      path: '/components/divider',
      name: 'divider',
      component: () => import('./views/components/Divider.vue'),
    },
    {
      path: '/components/empty-state',
      name: 'EmptyState',
      component: () => import('./views/components/EmptyState.vue'),
    },
    {
      path: '/components/fab',
      name: 'fab',
      component: () => import('./views/components/FAB.vue'),
    },
    {
      path: '/components/icon',
      name: 'icon',
      component: () => import('./views/components/Icon.vue'),
    },
    {
      path: '/components/icon-button',
      name: 'icon-button',
      component: () => import('./views/components/IconButton.vue'),
    },
    {
      path: '/components/list',
      name: 'list',
      component: () => import('./views/components/List.vue'),
    },
    {
      path: '/components/radio',
      name: 'radio',
      component: () => import('./views/components/Radio.vue'),
    },
    {
      path: '/components/tab',
      name: 'tab',
      component: () => import('./views/components/Tab.vue'),
    },
    {
      path: '/components/top-app-bar',
      name: 'top-app-bar',
      component: () => import('./views/components/TopAppBar.vue'),
    },
  ],
});
