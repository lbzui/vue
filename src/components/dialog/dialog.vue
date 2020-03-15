<template>
  <transition name="lbz-dialog">
    <div
      v-if="cisActive"
      :class="[
        'lbz-dialog',
        type && `lbz-dialog--${type}`,
        {
          'lbz-is-scrollable': type === 'confirmation' && scrollable,
          'lbz-is-stacked': cisAlertAndConfirmation && stacked
        }
      ]"
    >
      <div class="lbz-dialog__container">
        <template v-if="title || $slots.start">
          <lbz-top-app-bar
            v-if="type === 'full-screen'"
            class="lbz-dialog__header"
            elevated
            :title="title"
          >
            <template #start>
              <lbz-icon-button on-background="primary" @click.stop="fclose()">close</lbz-icon-button>
            </template>
            <template #end>
              <slot name="start"/>
            </template>
          </lbz-top-app-bar>
          <header v-else class="lbz-dialog__header">
            <h2
              v-if="title"
              class="lbz-dialog__title"
              v-html="title"
            ></h2>
            <slot name="start"/>
          </header>
        </template>
        <div
          v-if="$slots.center || $slots.default"
          class="lbz-dialog__content"
          :style="type !== 'full-screen' && contentHeight ? { height: contentHeight } : {}"
        >
          <slot name="center"/>
          <slot/>
        </div>
        <footer v-if="cisAlertAndConfirmation && $slots.end" class="lbz-dialog__actions">
          <slot name="end"/>
        </footer>
      </div>
      <div
        v-if="type !== 'full-screen'"
        class="lbz-dialog__scrim"
        @click.stop="fclose()"
      ></div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, PropSync, Prop, Watch, Vue } from 'vue-property-decorator';
import { lockBodyScroll } from '../../utils/funcs';
import LbzIconButton from '../icon-button/icon-button.vue';
import LbzTopAppBar from '../top-app-bar/top-app-bar.vue';

@Component({
  components: {
    LbzIconButton,
    LbzTopAppBar,
  },
})
export default class LbzDialog extends Vue {
  // [required]active.sync: true, false
  @PropSync('active', { type: Boolean, required: true }) private cisActive!: boolean;

  // type: 'alert' (default), 'simple', 'confirmation', 'full-screen (mobile only)'
  @Prop({ type: String, default: '' }) private type!: string;
  // scrollable (type === 'confirmation'): true, false (default)
  @Prop({ type: Boolean, default: false }) private scrollable!: boolean;
  // stacked (['', 'alert', 'confirmation'].includes(type)): true, false (default)
  @Prop({ type: Boolean, default: false }) private stacked!: boolean;
  // title: '' (default), 'x'
  @Prop({ type: String, default: '' }) private title!: string;
  // content-height (type !== 'full-screen'): '' (default), 'x'
  @Prop({ type: String, default: '' }) private contentHeight!: string;
  // append-to-body: true, false (default)
  @Prop({ type: Boolean, default: false }) private appendToBody!: boolean;
  // lock-scroll: true (default), false
  @Prop({ type: Boolean, default: true }) private lockScroll!: boolean;

  get cisAlertAndConfirmation(): boolean {
    return ['', 'alert', 'confirmation'].includes(this.type);
  }

  @Watch('cisActive')
  private factiveChanged(val: boolean, oldVal: boolean): void {
    this.$nextTick().then(() => {
      this.$emit(val ? 'open' : 'close');
      if (this.lockScroll) {
        lockBodyScroll(val);
      }
    });
  }

  private mounted(): void {
    if (this.appendToBody) {
      document.body.appendChild(this.$el);
    }
  }

  private ftoggle(): void {
    this.cisActive = !this.cisActive;
  }

  private fopen(): void {
    this.cisActive = true;
  }

  private fclose(): void {
    this.cisActive = false;
  }
}
</script>
