<template>
  <transition name="lbz-drawer">
    <aside
      v-show="cisActive"
      :class="[
        'lbz-drawer',
        type && `lbz-drawer--${ type }`,
        cisFullScreen && 'is-full-screen',
        cisActive ? 'is-active' : 'is-inactive'
      ]"
    >
      <div class="lbz-drawer__container">
        <template v-if="title || subtitle || $slots.start">
          <lbz-top-app-bar
            v-if="cisFullScreen"
            background="transparent"
            :title="title"
          >
            <template #start>
              <lbz-icon-button @click.stop="fclose()">close</lbz-icon-button>
            </template>
          </lbz-top-app-bar>
          <header v-else class="lbz-drawer__header">
            <slot name="start"/>
            <h3
              v-if="title"
              v-html="title"
              class="lbz-drawer__title"
            ></h3>
            <p
              v-if="subtitle"
              v-html="subtitle"
              class="lbz-drawer__subtitle"
            ></p>
          </header>
        </template>
        <div class="lbz-drawer__content">
          <slot name="center"/>
          <slot/>
        </div>
      </div>
      <div class="lbz-drawer__scrim" @click.stop="fclose()"></div>
    </aside>
  </transition>
</template>

<script lang="ts">
import { Component, PropSync, Prop, Watch, Vue } from 'vue-property-decorator';
import LbzIconButton from '../icon-button/icon-button.vue';
import LbzTopAppBar from '../top-app-bar/top-app-bar.vue';

@Component({
  components: {
    LbzIconButton,
    LbzTopAppBar,
  },
})
export default class Drawer extends Vue {
  // active.sync: true (default), false
  @PropSync('active', { type: Boolean, default: true }) private cisActive!: boolean;

  // type: 'standard' (default), 'modal', 'bottom (mobile only)'
  @Prop({ type: String, default: '' }) private type!: string;
  // full-screen (type === 'bottom'): true, false (default)
  @Prop({ type: Boolean, default: false }) private fullScreen!: boolean;
  // title: '' (default), 'x'
  @Prop({ type: String, default: '' }) private title!: string;
  // subtitle: '' (default), 'x'
  @Prop({ type: String, default: '' }) private subtitle!: string;

  get cisFullScreen(): boolean {
    return this.type === 'bottom' && this.fullScreen;
  }

  @Watch('cisActive')
  private factiveChanged(val: boolean, oldVal: boolean): void {
    this.$nextTick().then(() => {
      this.$emit(val ? 'open' : 'close');
    });
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
