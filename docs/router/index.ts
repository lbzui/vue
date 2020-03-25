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
    path: '/components/checkbox',
    name: 'checkbox',
    component: () => import(/* webpackChunkName: "checkbox" */ '../views/components/Checkbox.vue'),
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
    path: '/components/switch',
    name: 'switch',
    component: () => import(/* webpackChunkName: "switch" */ '../views/components/Switch.vue'),
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

  // Utilities
  {
    path: '/utilities/aspect-ratio',
    name: 'aspect-ratio',
    component: () => import(/* webpackChunkName: "aspect-ratio" */ '../views/utilities/AspectRatio.vue'),
  },
  {
    path: '/utilities/clearfix',
    name: 'clearfix',
    component: () => import(/* webpackChunkName: "clearfix" */ '../views/utilities/Clearfix.vue'),
  },
  {
    path: '/utilities/elevation',
    name: 'elevation',
    component: () => import(/* webpackChunkName: "elevation" */ '../views/utilities/Elevation.vue'),
  },
  {
    path: '/utilities/layout-grid',
    name: 'layout-grid',
    component: () => import(/* webpackChunkName: "layout-grid" */ '../views/utilities/LayoutGrid.vue'),
  },
  {
    path: '/utilities/shadow',
    name: 'shadow',
    component: () => import(/* webpackChunkName: "shadow" */ '../views/utilities/Shadow.vue'),
  },
  {
    path: '/utilities/surface',
    name: 'surface',
    component: () => import(/* webpackChunkName: "surface" */ '../views/utilities/Surface.vue'),
  },
  {
    path: '/utilities/truncate',
    name: 'truncate',
    component: () => import(/* webpackChunkName: "truncate" */ '../views/utilities/Truncate.vue'),
  },
  {
    path: '/utilities/typography',
    name: 'typography',
    component: () => import(/* webpackChunkName: "typography" */ '../views/utilities/Typography.vue'),
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
  linkExactActiveClass: 'lbz-is-activated',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
