import Vue, { PluginFunction } from 'vue';
import VueScroll from 'vue-scroll';
import '../assets/css/index.less';
import Backdrop from './backdrop';
import Button from './button';
import Card from './card';
import Checkbox from './checkbox';
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
  Checkbox,
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
const install: PluginFunction<any> = (vm: typeof Vue, opts?: LbzuiOptions): void => {
  const {
    dense,
    ripple,
  }: any = opts || {};

  vm.prototype.$lbzui = {
    dense: dense || false,
    ripple: ripple === undefined ? true : ripple,
  };

  components.map((Component) => {
    vm.use(Component.install);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.4.0',
  install,
  Backdrop,
  Button,
  Card,
  Checkbox,
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
