<template>
  <component
    :is="tag"
    :class="[
      'lbz-tab',
      type && `lbz-tab--${type}`,
      onBackground && `lbz-tab--on-${onBackground}`,
      type !== 'scrollable' && alignment && `lbz-tab--${alignment}`,
      stacked && 'is-stacked'
    ]"
  >
    <div class="lbz-tab__container"><slot/></div>
  </component>
</template>

<script lang="ts">
import { Component, Model, Prop, ProvideReactive, Provide, Emit, Vue } from 'vue-property-decorator';
import EventBus from '../../utils/event-bus';

@Component
export default class LbzTab extends Vue {
  // v-model: undefined (default), true, false, x, 'x'
  @Model('change', {
    type: [Boolean, Number, String],
    default: undefined,
  }) private mvalue!: boolean | number | string;

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
  // router-link-props (router-link): {
  //   replace: true || false (default),
  //   append: true || false (default),
  //   exact: true || false (default),
  //   event: 'click' (default) || 'x' || ['x']
  // }
  @Prop({
    type: Object,
    default: () => ({
      replace: false,
      append: false,
      exact: false,
      event: 'click',
    }),
  }) private routerLinkProps!: object;
  // item-tag: 'button' (default), 'a', 'x'
  @Prop({ type: String, default: 'button' }) private itemTag!: string;
  // on-content: true, false (default)
  @Prop({ type: Boolean, default: false }) private onContent!: boolean;

  @ProvideReactive('value') private prvalue: boolean | number | string = this.mvalue;
  @Provide('on-background') private ponBackground: string = this.onBackground;
  @Provide('router-link') private prouterLink: boolean = this.routerLink;
  @Provide('router-link-props') private prouterLinkProps: object = this.routerLinkProps;
  @Provide('tag') private ptag: string = this.itemTag;
  @Provide('on-content') private ponContent: boolean = this.onContent;

  private created(): void {
    EventBus.$on('change', this.fvalueChanged);
  }

  private beforeDestroy(): void {
    EventBus.$off('change', this.fvalueChanged);
  }

  @Emit('change')
  private fvalueChanged(val: boolean | number | string, e: MouseEvent): void {
    this.prvalue = val;
  }
}
</script>
