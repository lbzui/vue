import Vue from 'vue';
import { LbzSnackbarOptions } from '../../../types';
import Snackbar from './snackbar.vue';

interface LbzSnackbarData {
  vactive: boolean;
  vlabel: string;
  vduration?: number;
  vclass?: string;
  valign?: string;
  vstacked?: boolean;
  vactionLabel?: string;
  factionClick?: () => void;
}

const LbzSnackbarConstructor: typeof Vue = Vue.extend(Snackbar);
const vms: any[] = []; // Vue instances
let vm: any; // Vue instance

function fopenNextSnackbar(): void {
  if (!vm) {
    vm = new LbzSnackbarConstructor();
  }

  if (!vm.vactive && vms.length) {
    const vmd: any = vms.shift();

    for (const item in vmd) {
      if (item !== 'factionClick') {
        vm[item] = vmd[item];
      }
    }

    if (vmd.vactionLabel) {
      vm.factionClick = (): void => {
        vm.vactive = false;
        vmd.factionClick();
      };
    }

    const fafterLeave = vm.fafterLeave;
    vm.fafterLeave = (): void => {
      fafterLeave();
      vm = null;
      fopenNextSnackbar();
    };

    vm.$mount();
    document.body.appendChild(vm.$el);
    vm.vactive = true;
  }
}

const LbzSnackbar = (
  label: string,
  duration?: number | LbzSnackbarOptions
): void => {
  if (Vue.prototype.$isServer || !label) {
    // SSR
    return;
  }

  const vmd: LbzSnackbarData = {
    vactive: false,
    vlabel: label,
    vduration: 5000,
    vclass: '',
    valign: '',
    vstacked: false,
    vactionLabel: '',
    factionClick: undefined
  };

  if (duration) {
    if (typeof duration === 'object') {
      const opts: LbzSnackbarOptions = duration;
      const ms: number = (opts as any).duration;

      if (ms && ms >= 4000 && ms <= 10000) {
        vmd.vduration = ms;
      }

      if (opts.class) {
        vmd.vclass = opts.class;
      }

      if (opts.align) {
        vmd.valign = opts.align;
      }

      if (opts.actionLabel && typeof opts.actionClick === 'function') {
        if (opts.stacked) {
          vmd.vstacked = opts.stacked;
        }

        vmd.vactionLabel = opts.actionLabel;
        vmd.factionClick = opts.actionClick;
      }
    } else if (!isNaN(duration) && duration >= 4000 && duration <= 10000) {
      vmd.vduration = duration;
    }
  }

  vms.push(vmd);

  fopenNextSnackbar();
};

export default LbzSnackbar;
