import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../views/404.vue';

Vue.use(VueRouter);

const routes = [
  // Home
  {
    path: '/',
    name: 'home',
    component: Home,
  },

  // Styles
  {
    path: '/styles/elevation',
    name: 'elevation',
    component: () => import(/* webpackChunkName: "elevation" */ '../views/styles/Elevation.vue'),
  },
  {
    path: '/styles/layout-grid',
    name: 'layout-grid',
    component: () => import(/* webpackChunkName: "layout-grid" */ '../views/styles/LayoutGrid.vue'),
  },
  {
    path: '/styles/shadow',
    name: 'shadow',
    component: () => import(/* webpackChunkName: "shadow" */ '../views/styles/Shadow.vue'),
  },
  {
    path: '/styles/surface',
    name: 'surface',
    component: () => import(/* webpackChunkName: "surface" */ '../views/styles/Surface.vue'),
  },
  {
    path: '/styles/typography',
    name: 'typography',
    component: () => import(/* webpackChunkName: "typography" */ '../views/styles/Typography.vue'),
  },
  {
    path: '/styles/utility',
    name: 'utility',
    component: () => import(/* webpackChunkName: "utility" */ '../views/styles/Utility.vue'),
  },

  // Components
  {
    path: '/components/backdrop',
    name: 'backdrop',
    component: () => import(/* webpackChunkName: "backdrop" */ '../views/components/Backdrop.vue'),
  },
  {
    path: '/components/button',
    name: 'button',
    component: () => import(/* webpackChunkName: "button" */ '../views/components/Button.vue'),
  },
  {
    path: '/components/card',
    name: 'card',
    component: () => import(/* webpackChunkName: "card" */ '../views/components/Card.vue'),
  },
  {
    path: '/components/dialog',
    name: 'dialog',
    component: () => import(/* webpackChunkName: "dialog" */ '../views/components/Dialog.vue'),
  },
  {
    path: '/components/divider',
    name: 'divider',
    component: () => import(/* webpackChunkName: "divider" */ '../views/components/Divider.vue'),
  },
  {
    path: '/components/drawer',
    name: 'drawer',
    component: () => import(/* webpackChunkName: "drawer" */ '../views/components/Drawer.vue'),
  },
  {
    path: '/components/empty-state',
    name: 'empty-state',
    component: () => import(/* webpackChunkName: "empty-state" */ '../views/components/EmptyState.vue'),
  },
  {
    path: '/components/fab',
    name: 'fab',
    component: () => import(/* webpackChunkName: "fab" */ '../views/components/FAB.vue'),
  },
  {
    path: '/components/icon',
    name: 'icon',
    component: () => import(/* webpackChunkName: "icon" */ '../views/components/Icon.vue'),
  },
  {
    path: '/components/icon-button',
    name: 'icon-button',
    component: () => import(/* webpackChunkName: "icon-button" */ '../views/components/IconButton.vue'),
  },
  {
    path: '/components/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "list" */ '../views/components/List.vue'),
  },
  {
    path: '/components/radio',
    name: 'radio',
    component: () => import(/* webpackChunkName: "radio" */ '../views/components/Radio.vue'),
  },
  {
    path: '/components/state',
    name: 'state',
    component: () => import(/* webpackChunkName: "state" */ '../views/components/State.vue'),
  },
  {
    path: '/components/tab',
    name: 'tab',
    component: () => import(/* webpackChunkName: "tab" */ '../views/components/Tab.vue'),
  },
  {
    path: '/components/top-app-bar',
    name: 'top-app-bar',
    component: () => import(/* webpackChunkName: "top-app-bar" */ '../views/components/TopAppBar.vue'),
  },

  // 404
  {
    path: '*',
    name: '404',
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
  linkExactActiveClass: 'is-active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
