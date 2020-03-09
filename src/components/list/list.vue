<template>
  <component
    :is="tag"
    :class="[
      'lbz-list',
      type && `lbz-list--${type}`,
      onBackground && `lbz-list--on-${onBackground}`,
      cisDense && 'is-dense'
    ]"
  >
    <span
      v-if="subtitle"
      :class="['lbz-list__subtitle', placement && `lbz-list__subtitle--${placement}`]"
      v-html="subtitle"
    ></span>
    <slot/>
  </component>
</template>

<script lang="ts">
import { Component, Prop, Provide, Vue } from 'vue-property-decorator';

@Component
export default class LbzList extends Vue {
  // type: 'one-line' (default), 'two-line', 'three-line'
  @Prop({ type: String, default: '' }) private type!: string;
  // tag: 'ul' (default), 'nav', 'x'
  @Prop({ type: String, default: 'ul' }) private tag!: string;
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
  // item-tag: 'li' (default), 'a', 'x'
  @Prop({ type: String, default: 'li' }) private itemTag!: string;
  // on-background: 'primary', 'secondary', 'surface' (default), 'light', 'dark'
  @Prop({ type: String, default: '' }) private onBackground!: string;
  // dense: undefined (default), true, false
  @Prop({ type: Boolean, default: undefined }) private dense!: boolean;
  // placement: 'start' (default), 'center'
  @Prop({ type: String, default: '' }) private placement!: string;
  // subtitle: '' (default), 'x'
  @Prop({ type: String, default: '' }) private subtitle!: string;
  // disabled: true, false (default)
  @Prop({ type: Boolean, default: false }) private disabled!: boolean;

  @Provide('router-link') private prouterLink: boolean = this.routerLink;
  @Provide('router-link-props') private prouterLinkProps: object = this.routerLinkProps;
  @Provide('tag') private ptag: string = this.itemTag;
  @Provide('on-background') private ponBackground: string = this.onBackground;
  @Provide('disabled') private pdisabled: boolean = this.disabled;

  get cisDense(): boolean {
    return this.dense === undefined
      ? this.$lbzui.dense
      : this.dense;
  }
}
</script>
