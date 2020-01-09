import { default as _Vue, VueConstructor, PluginFunction } from 'vue';
import VueScroll from 'vue-scroll';
import '../assets/css/index.less';
import Backdrop from './backdrop';
import Button from './button';
import Card from './card';
import Dialog from './dialog';
import Divider from './divider';
import Drawer from './drawer';
import EmptyState from './empty-state';
import FAB from './fab';
import Icon from './icon';
import IconButton from './icon-button';
import List from './list';
import ListItem from './list-item';
import Radio from './radio';
import State from './state';
import Tab from './tab';
import TabItem from './tab-item';
import TopAppBar from './top-app-bar';

_Vue.use(VueScroll, { debounce: 100 });

const components: any[] = [
  Backdrop,
  Button,
  Card,
  Dialog,
  Divider,
  Drawer,
  EmptyState,
  FAB,
  Icon,
  IconButton,
  List,
  ListItem,
  Radio,
  State,
  Tab,
  TabItem,
  TopAppBar,
];
const install: PluginFunction<any> = (Vue: typeof _Vue, opts?: any): void => {
  const {
    ripple,
    dense,
  }: any = opts || {};

  Vue.prototype.$LBZUI = {
    ripple: ripple === undefined ? true : ripple,
    dense: dense || false,
  };

  components.map((Component) => {
    Vue.use(Component.install);
  });
};

declare global {
  interface Window {
    Vue?: VueConstructor;
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.2.1',
  install,
  Backdrop,
  Button,
  Card,
  Dialog,
  Divider,
  Drawer,
  EmptyState,
  FAB,
  Icon,
  IconButton,
  List,
  ListItem,
  Radio,
  State,
  Tab,
  TabItem,
  TopAppBar,
};
