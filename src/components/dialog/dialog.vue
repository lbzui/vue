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
            elevated
            :title="title"
          >
            <template #start>
              <lbz-icon-button
                on-background="primary"
                darkened
                @click.stop="fclose()"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
              </lbz-icon-button>
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
          :style="type !== 'full-screen' && height ? { height: height } : {}"
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
import { lbzfLockBodyScroll } from '../../utils/funcs';
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
  // height (type !== 'full-screen'): '' (default), 'x'
  @Prop({ type: String, default: '' }) private height!: string;
  // append-to-body: true, false (default)
  @Prop({ type: Boolean, default: false }) private appendToBody!: boolean;
  // lock-body-scroll: true (default), false
  @Prop({ type: Boolean, default: true }) private lockBodyScroll!: boolean;

  get cisAlertAndConfirmation(): boolean {
    return ['', 'alert', 'confirmation'].includes(this.type);
  }

  @Watch('cisActive')
  private factiveChanged(val: boolean, oldVal: boolean): void {
    this.$emit(val ? 'open' : 'close');

    if (this.lockBodyScroll) {
      lbzfLockBodyScroll(val);
    }
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
