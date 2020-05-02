<template>
  <component
    :is="tag"
    :class="[
      'lbz-list',
      type && `lbz-list--${type}`,
      onBackground && `lbz-list--on-${onBackground}`,
      darkened && 'lbz-is-darkened',
      nav && 'lbz-is-nav',
      cisDense && 'lbz-is-dense'
    ]"
  >
    <span
      v-if="subheader"
      :class="['lbz-list__subheader', align && `lbz-list__subheader--${align}`]"
      v-html="subheader"
    ></span>
    <slot />
  </component>
</template>

<script lang="ts">
  import { Component, Prop, Provide, Vue } from 'vue-property-decorator';

  @Component
  export default class LbzList extends Vue {
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
        event: 'click'
      })
    })
    private routerLinkProps!: object;
    // item-tag: 'li' (default), 'a', 'x'
    @Prop({ type: String, default: 'li' }) private itemTag!: string;

    // type: 'one-line' (default), 'two-line', 'three-line'
    @Prop({ type: String, default: '' }) private type!: string;
    // on-background: 'primary', 'secondary', 'surface' (default), 'error', 'light', 'dark'
    @Prop({ type: String, default: '' }) private onBackground!: string;
    // darkened: true, false (default)
    @Prop({ type: Boolean, default: false }) private darkened!: boolean;
    // nav: true, false (default)
    @Prop({ type: Boolean, default: false }) private nav!: boolean;
    // dense: undefined (default), true, false
    @Prop({ type: Boolean, default: undefined }) private dense!: boolean;
    // align: 'start' (default), 'center'
    @Prop({ type: String, default: '' }) private align!: string;
    // subheader: '' (default), 'x'
    @Prop({ type: String, default: '' }) private subheader!: string;
    // disabled: true, false (default)
    @Prop({ type: Boolean, default: false }) private disabled!: boolean;
    // ripple: undefined (default), true, false
    @Prop({ type: Boolean, default: undefined }) private ripple!: boolean;

    @Provide('router-link') private prouterLink: boolean = this.routerLink;
    @Provide('router-link-props') private prouterLinkProps: object = this
      .routerLinkProps;
    @Provide('tag') private ptag: string = this.itemTag;
    @Provide('on-background') private ponBackground: string = this.onBackground;
    @Provide('darkened') private pdarkened: boolean = this.darkened;
    @Provide('disabled') private pdisabled: boolean = this.disabled;
    @Provide('ripple') private pripple: boolean = this.ripple;

    get cisDense(): boolean {
      return this.dense === undefined ? this.$lbzui.dense : this.dense;
    }
  }
</script>
