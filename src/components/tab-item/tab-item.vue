<template>
  <component
    v-bind="cgetAttrs"
    :class="['lbz-tab-item', cisActive && 'is-active']"
    @click.stop="fclick($event)"
  >
    <span class="lbz-tab-item__content">
      <lbz-icon v-if="icon || $slots.icon" class="lbz-tab-item__icon">
        <template v-if="icon">{{ icon }}</template><slot v-else name="icon"/>
      </lbz-icon>
      <span v-if="$slots.default" class="lbz-tab-item__label"><slot/></span>
      <span v-if="ponContent" class="lbz-tab-item__indicator"></span>
    </span>
    <span v-if="!ponContent" class="lbz-tab-item__indicator"></span>
    <lbz-state v-bind="cgetStateAttrs"/>
  </component>
</template>

<script lang="ts">
import { Component, InjectReactive, Inject, Prop, Vue } from 'vue-property-decorator';
import LbzIcon from '../icon/icon.vue';
import LbzState from '../state/state.vue';
import EventBus from '../../utils/event-bus';

@Component({
  components: {
    LbzIcon,
    LbzState,
  },
})
export default class LbzTabItem extends Vue {
  @InjectReactive('value') private prvalue!: undefined | boolean | number | string;
  @Inject('on-background') private ponBackground!: string;
  @Inject('router-link') private prouterLink!: boolean;
  @Inject('router-link-props') private prouterLinkProps!: object;
  @Inject('tag') private ptag!: string;
  @Inject('on-content') private ponContent!: boolean;

  // router-link: undefined (default), true, false
  @Prop({ type: Boolean, default: undefined }) private routerLink!: undefined | boolean;
  // to (router-link): '' (default), 'x', { x: y }
  @Prop({ type: [String, Object], default: '' }) private to!: string | object;
  // tag: '' (default), 'button', 'a', 'x'
  @Prop({ type: String, default: '' }) private tag!: string;
  // value: undefined (default), true, false, x, 'x'
  @Prop({ type: [Boolean, Number, String], default: undefined }) private value!: undefined | boolean | number | string;
  // icon: '' (default), 'x'
  @Prop({ type: String, default: '' }) private icon!: string;

  get cgetAttrs(): object {
    const {
      replace,
      append,
      exact,
      event,
    }: any = this.prouterLinkProps;
    const tag: string = this.tag || this.ptag;

    return this.cisRouterLink
      ? {
        is: 'router-link',
        to: this.to,
        replace,
        append,
        tag,
        exact,
        event,
      } : {
        is: tag,
      };
  }

  get cisRouterLink(): boolean {
    return this.routerLink === undefined
      ? this.prouterLink
      : this.routerLink;
  }

  get cisActive(): boolean {
    if (this.cisRouterLink) {
      return false;
    }

    return this.prvalue === this.value;
  }

  get cgetStateAttrs(): object {
    return {
      class: 'lbz-tab-item__state',
      type: this.ponBackground === 'light' ? '' : 'primary',
      background: ['', 'surface'].includes(this.ponBackground) ? 'primary' : `on-${this.ponBackground}`,
    };
  }

  private fclick(e: MouseEvent): void {
    if (this.cisRouterLink) {
      return;
    }

    EventBus.$emit('change', this.value, e);
  }
}
</script>
