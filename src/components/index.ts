import { default as _Vue, VueConstructor, PluginFunction } from 'vue';
import Backdrop from './backdrop';
import Button from './button';
import Divider from './divider';
import Icon from './icon';
import IconButton from './icon-button';
import TopAppBar from './top-app-bar';

const components: any[] = [
  Backdrop,
  Button,
  Divider,
  Icon,
  IconButton,
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
  Divider,
  Icon,
  IconButton,
  TopAppBar,
};
