import { default as _Vue, VueConstructor, PluginFunction } from 'vue';
import Divider from './divider';
import Icon from './icon';

const components: any[] = [
  Divider,
  Icon,
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
  Divider,
  Icon,
};
