import { default as _Vue, VueConstructor, PluginFunction } from 'vue';
import '../assets/css/index.less';
import Backdrop from './backdrop';
import Button from './button';
import Card from './card';
import Divider from './divider';
import EmptyState from './empty-state';
import FAB from './fab';
import Icon from './icon';
import IconButton from './icon-button';
import List from './list';
import ListItem from './list-item';
import Radio from './radio';
import TopAppBar from './top-app-bar';

const components: any[] = [
  Backdrop,
  Button,
  Card,
  Divider,
  EmptyState,
  FAB,
  Icon,
  IconButton,
  List,
  ListItem,
  Radio,
  TopAppBar,
];
const install: PluginFunction<any> = (Vue: typeof _Vue, opts?: any) => {
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

export interface LBZComponent<Component> {
  component: Component;
  install: PluginFunction<any>;
}

export default install;

export {
  install,
  Backdrop,
  Button,
  Card,
  Divider,
  EmptyState,
  FAB,
  Icon,
  IconButton,
  List,
  ListItem,
  Radio,
  TopAppBar,
};
