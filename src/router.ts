import Vue from 'vue';
import Router from 'vue-router';
import Home from './docs/Home.vue';
import NotFound from './docs/404.vue';

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
      component: () => import('./docs/styles/Elevation.vue'),
    },
    {
      path: '/styles/shadow',
      name: 'shadow',
      component: () => import('./docs/styles/Shadow.vue'),
    },
    {
      path: '/styles/surface',
      name: 'surface',
      component: () => import('./docs/styles/Surface.vue'),
    },
    {
      path: '/styles/typography',
      name: 'typography',
      component: () => import('./docs/styles/Typography.vue'),
    },

    // Components
    {
      path: '/components/backdrop',
      name: 'backdrop',
      component: () => import('./docs/components/Backdrop.vue'),
    },
    {
      path: '/components/button',
      name: 'button',
      component: () => import('./docs/components/Button.vue'),
    },
    {
      path: '/components/card',
      name: 'card',
      component: () => import('./docs/components/Card.vue'),
    },
    {
      path: '/components/dialog',
      name: 'dialog',
      component: () => import('./docs/components/Dialog.vue'),
    },
    {
      path: '/components/divider',
      name: 'divider',
      component: () => import('./docs/components/Divider.vue'),
    },
    {
      path: '/components/drawer',
      name: 'drawer',
      component: () => import('./docs/components/Drawer.vue'),
    },
    {
      path: '/components/empty-state',
      name: 'EmptyState',
      component: () => import('./docs/components/EmptyState.vue'),
    },
    {
      path: '/components/fab',
      name: 'fab',
      component: () => import('./docs/components/FAB.vue'),
    },
    {
      path: '/components/icon',
      name: 'icon',
      component: () => import('./docs/components/Icon.vue'),
    },
    {
      path: '/components/icon-button',
      name: 'icon-button',
      component: () => import('./docs/components/IconButton.vue'),
    },
    {
      path: '/components/list',
      name: 'list',
      component: () => import('./docs/components/List.vue'),
    },
    {
      path: '/components/radio',
      name: 'radio',
      component: () => import('./docs/components/Radio.vue'),
    },
    {
      path: '/components/tab',
      name: 'tab',
      component: () => import('./docs/components/Tab.vue'),
    },
    {
      path: '/components/top-app-bar',
      name: 'top-app-bar',
      component: () => import('./docs/components/TopAppBar.vue'),
    },

    // 404
    {
      path: '*',
      name: '404',
      component: NotFound,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
