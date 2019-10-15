<template>
  <component
    v-bind="cbind"
    :class="[
      'lbz-tab-item',
      {
        'lbz-ripple': pripple,
        'is-active': cisActive
      }
    ]"
    @click.stop="fclick($event)"
  >
    <lbz-icon v-if="icon || $slots.icon" class="lbz-tab-item__icon">
      <template v-if="icon">{{ icon }}</template><slot v-else name="icon"/>
    </lbz-icon>
    <span class="lbz-tab-item__label"><slot/></span>
    <span class="lbz-tab-item__indicator"></span>
  </component>
</template>

<script lang="ts">
import { Component, Prop, InjectReactive, Inject, Vue } from 'vue-property-decorator';
import EventBus from '@/utils/event-bus.ts';

@Component
export default class TabItem extends Vue {
  // router-link: true, false (default)
  @Prop({ type: Boolean, default: false }) private routerLink!: boolean;
  // tag: '' (default), 'button', 'a', 'x'
  @Prop({ type: String, default: '' }) private tag!: string;
  // to (router-link): '' (default), 'x', { x: x }
  @Prop({ type: [String, Object], default: '' }) private to!: string;
  // [required]value: true, false, x, 'x'
  @Prop({ type: [Boolean, Number, String], required: true }) private value!: boolean | number | string;
  // icon: '' (default), 'x'
  @Prop({ type: String, default: '' }) private icon!: string;

  @InjectReactive() private pmodel!: boolean | number | string;
  @Inject() private prouterLink!: boolean;
  @Inject() private ptag!: string;
  @Inject() private pripple!: boolean;

  get cbind() {
    return this.routerLink || this.prouterLink ? {
      is: 'router-link',
      tag: this.tag || this.ptag,
      to: this.to,
    } : {
      is: this.tag || this.ptag,
    };
  }

  get cisActive() {
    return this.pmodel === this.value;
  }

  private fclick(e: MouseEvent) {
    EventBus.$emit('setValue', this.value, e);
  }
}
</script>
