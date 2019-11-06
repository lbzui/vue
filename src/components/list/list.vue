<template>
  <component
    :is="tag"
    :class="[
      'lbz-list',
      type ? `lbz-list--${ type }` : '',
      { 'is-dense': dense }
    ]"
  >
    <span
      v-if="subtitle"
      v-html="subtitle"
      :class="[
        'lbz-list__subtitle',
        placement ? `lbz-list__subtitle--${ placement }` : ''
      ]"
    ></span>
    <slot/>
  </component>
</template>

<script lang="ts">
import { Component, Prop, Provide, Vue } from 'vue-property-decorator';

@Component({
  name: 'lbz-list',
})
export default class List extends Vue {
  // type: 'one-line' (default), 'two-line', 'three-line'
  @Prop({ type: String, default: '' }) private type!: string;
  // tag: 'ul' (default), 'nav', 'x'
  @Prop({ type: String, default: 'ul' }) private tag!: string;
  // dense: true, false (default)
  @Prop({ type: Boolean, default: false }) private dense!: boolean;
  // subtitle: '' (default), 'x'
  @Prop({ type: String, default: '' }) private subtitle!: string;
  // placement: 'start' (default), 'center'
  @Prop({ type: String, default: '' }) private placement!: string;
  // router-link: true, false (default)
  @Prop({ type: Boolean, default: false }) private routerLink!: boolean;
  // item-tag: 'li' (default), 'a', 'x'
  @Prop({ type: String, default: 'li' }) private itemTag!: string;
  // ripple: true (default), false
  @Prop({ type: Boolean, default: true }) private ripple!: boolean;
  // disabled: true, false (default)
  @Prop({ type: Boolean, default: false }) private disabled!: boolean;

  @Provide('router-link') private prouterLink: boolean = this.routerLink;
  @Provide('tag') private ptag: string = this.itemTag;
  @Provide('ripple') private pripple: boolean = this.ripple;
  @Provide('disabled') private pdisabled: boolean = this.disabled;
}
</script>
