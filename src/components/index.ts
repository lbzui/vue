import Vue, { PluginFunction } from 'vue';
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
import Switch from './switch';
import Tab from './tab';
import TabItem from './tab-item';
import TopAppBar from './top-app-bar';

Vue.use(VueScroll, { debounce: 100 });

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
  Switch,
  Tab,
  TabItem,
  TopAppBar,
];
const install: PluginFunction<any> = (v: typeof Vue, opts?: LbzuiOptions): void => {
  const {
    ripple,
    dense,
  }: any = opts || {};

  v.prototype.$lbzui = {
    ripple: ripple === undefined ? true : ripple,
    dense: dense || false,
  };

  components.map((Component) => {
    v.use(Component.install);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.3.0',
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
  Switch,
  Tab,
  TabItem,
  TopAppBar,
};
