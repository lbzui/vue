<template>
  <transition name="lbz-snackbar" @after-leave="fafterLeave">
    <div
      v-if="vactive"
      :class="[
        'lbz-snackbar',
        valign && `lbz-snackbar--${valign}`,
        vstacked && 'lbz-is-stacked',
        vclass
      ]"
    >
      <div class="lbz-snackbar__container">
        <div class="lbz-snackbar__label" v-html="vlabel"></div>
        <div v-if="vactionLabel" class="lbz-snackbar__action">
          <lbz-button @click.stop="factionClick($event)">{{ vactionLabel }}</lbz-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LbzButton from '../button/button.vue';

@Component({
  components: {
    LbzButton,
  },
})
export default class LbzSnackbar extends Vue {
  private vactive: boolean = false;
  private vlabel: string = '';
  private vduration: number = 5000;
  private vclass: string = '';
  private valign: string = '';
  private vstacked: boolean = false;
  private vactionLabel: string = '';

  private vtimer: any = 0;

  private mounted(): void {
    this.vtimer = setTimeout((): void => {
      if (this.vactive) {
        this.vactive = false;
      }
    }, this.vduration);
  }

  private beforeDestroy(): void {
    clearTimeout(this.vtimer);
    this.vtimer = 0;
  }

  private fafterLeave(): void {
    clearTimeout(this.vtimer);
    this.vtimer = 0;
  }
}
</script>
