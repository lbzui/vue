<template>
  <component
    :is="tag"
    :class="[
      'lbz-tab',
      type ? `lbz-tab--${ type }` : '',
      onBackground ? `lbz-tab--on-${ onBackground }` : '',
      type !== 'scrollable' && alignment ? `lbz-tab--${ alignment }` : '',
      { 'is-stacked': stacked }
    ]"
  >
    <div class="lbz-tab__container"><slot/></div>
  </component>
</template>

<script lang="ts">
import { Component, Model, Prop, ProvideReactive, Provide, Emit, Vue } from 'vue-property-decorator';
import EventBus from '@/utils/event-bus.ts';

@Component
export default class Tab extends Vue {
  // [required]v-model: true, false, x, 'x'
  @Model('change', { type: [Boolean, Number, String], required: true }) private model!: boolean | number | string;

  // type: 'fixed' (default), 'scrollable'
  @Prop({ type: String, default: '' }) private type!: string;
  // tag: 'nav' (default), 'x'
  @Prop({ type: String, default: 'nav' }) private tag!: string;
  // on-background: 'primary', 'secondary', 'surface' (default), 'light', 'dark'
  @Prop({ type: String, default: '' }) private onBackground!: string;
  // alignment (type === 'fixed'): '' (default), 'left', 'center', 'right'
  @Prop({ type: String, default: '' }) private alignment!: string;
  // stacked: true, false (default)
  @Prop({ type: Boolean, default: false }) private stacked!: boolean;
  // router-link: true, false (default)
  @Prop({ type: Boolean, default: false }) private routerLink!: boolean;
  // item-tag: 'button' (default), 'a', 'x'
  @Prop({ type: String, default: 'button' }) private itemTag!: string;
  // ripple: true (default), false
  @Prop({ type: Boolean, default: true }) private ripple!: boolean;

  @ProvideReactive() private pmodel: boolean | number | string = this.model;
  @Provide() private prouterLink: boolean = this.routerLink;
  @Provide() private ptag: string = this.itemTag;
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
  }
}
</script>
