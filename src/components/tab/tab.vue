<template>
  <nav
    :class="[
      'lbz-tab',
      type ? `lbz-tab--${ type }` : '',
      onBackground ? `lbz-tab--on-${ onBackground }` : '',
      type !== 'scrollable' && alignment ? `lbz-tab--${ alignment }` : '',
      { 'is-stacked': stacked }
    ]"
  >
    <div class="lbz-tab__container"><slot/></div>
  </nav>
</template>

<script lang="ts">
import { Component, Model, Prop, ProvideReactive, Provide, Emit, Vue } from 'vue-property-decorator';
import EventBus from '@/utils/event-bus.ts';

@Component
export default class Tab extends Vue {
  @Model('change', { type: [Boolean, Number, String], required: true }) private model!: boolean | number | string;

  // type: 'fixed' (default), 'scrollable'
  @Prop({ type: String, default: '' }) private type!: string;
  // on-background: 'primary', 'secondary', 'surface' (default), 'light', 'dark'
  @Prop({ type: String, default: '' }) private onBackground!: string;
  // alignment (type === 'fixed'): 'left', 'center', 'right'
  @Prop({ type: String, default: '' }) private alignment!: string;
  // stacked: true, false (default)
  @Prop({ type: Boolean, default: false }) private stacked!: boolean;
  // tag: 'button' (default), 'router-link', 'a', 'x'
  @Prop({ type: String, default: 'button' }) private tag!: string;
  // ripple: true (default), false
  @Prop({ type: Boolean, default: true }) private ripple!: boolean;

  @ProvideReactive() private pmodel: boolean | number | string = this.model;
  @Provide() private ptag: string = this.tag;
  @Provide() private pripple: boolean = this.ripple;

  private created() {
    EventBus.$on('setValue', this.fvalueChanged);
  }

  private beforeDestroy() {
    EventBus.$off('setValue', this.fvalueChanged);
  }

  @Emit('change')
  private fvalueChanged(val: boolean | number | string, e: MouseEvent) {
    this.pmodel = val;
    return val;
  }
}
</script>
