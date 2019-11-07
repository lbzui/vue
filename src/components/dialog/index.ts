import { default as _Vue, PluginFunction } from 'vue';
import { LBZComponent } from '..';
import Dialog from './dialog.vue';

const install: PluginFunction<any> = (Vue: typeof _Vue, opts?: any): void => {
  Vue.component('lbz-dialog', Dialog);
};
const LBZDialog: LBZComponent<typeof Dialog> = {
  component: Dialog,
  install,
};

export default LBZDialog;
