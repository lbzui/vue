<template>
  <component
    v-bind="cgetAttrs"
    :class="[
      'lbz-tab-item',
      {
        'lbz-ripple': pripple,
        'is-active': cisActive
      }
    ]"
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
  </component>
</template>

<script lang="ts">
import { Component, Prop, InjectReactive, Inject, Vue } from 'vue-property-decorator';
import EventBus from '@/utils/event-bus.ts';

@Component({
  name: 'lbz-tab-item',
})
export default class TabItem extends Vue {
  // router-link: undefined (default), true, false
  @Prop({ type: Boolean, default: undefined }) private routerLink!: undefined | boolean;
  // tag: '' (default), 'button', 'a', 'x'
  @Prop({ type: String, default: '' }) private tag!: string;
  // to (router-link): '' (default), 'x', { x: x }
  @Prop({ type: [String, Object], default: '' }) private to!: string | object;
  // [required]value: true, false, x, 'x'
  @Prop({ type: [Boolean, Number, String], required: true }) private value!: boolean | number | string;
  // icon: '' (default), 'x'
  @Prop({ type: String, default: '' }) private icon!: string;

  @InjectReactive('value') private prvalue!: boolean | number | string;
  @Inject('router-link') private prouterLink!: boolean;
  @Inject('tag') private ptag!: string;
  @Inject('ripple') private pripple!: boolean;
  @Inject('on-content') private ponContent!: boolean;

  get cgetAttrs(): object {
    return this.cisRouterLink
      ? {
        is: 'router-link',
        tag: this.tag || this.ptag,
        to: this.to,
      } : {
        is: this.tag || this.ptag,
      };
  }

  get cisRouterLink(): boolean {
    return this.routerLink === undefined
      ? this.prouterLink
      : this.routerLink;
  }

  get cisActive(): boolean {
    return this.prvalue === this.value;
  }

  private fclick(e: MouseEvent): void {
    EventBus.$emit('change', this.value, e);
  }
}
</script>
