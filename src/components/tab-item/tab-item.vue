<template>
  <component
    :is="ctagName"
    :class="[
      'lbz-tab-item',
      {
        'lbz-ripple': pripple,
        'is-active': cisActive
      }
    ]"
    :[vattrName]="to"
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
  // [required]value: true, false, x, 'x'
  @Prop({ type: [Boolean, Number, String], required: true }) private value!: boolean | number | string;
  // tag: '' (default), 'button', 'router-link', 'a', 'x'
  @Prop({ type: String, default: '' }) private tag!: string;
  // to (tag === 'router-link'): '' (default), 'x'
  @Prop({ type: String, default: '' }) private to!: string;
  // icon: '' (default), 'x'
  @Prop({ type: String, default: '' }) private icon!: string;

  @InjectReactive() private pmodel!: boolean | number | string;
  @Inject() private ptag!: string;
  @Inject() private pripple!: boolean;

  private vattrName: string = this.ctagName === 'router-link' ? 'to' : '';

  get ctagName() {
    return this.tag || this.ptag;
  }

  get cisActive() {
    return this.pmodel === this.value;
  }

  private fclick(e: MouseEvent) {
    EventBus.$emit('setValue', this.value, e);
  }
}
</script>
