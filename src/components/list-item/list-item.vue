<template>
  <component
    v-bind="cgetAttrs"
    :class="[
      'lbz-list-item',
      {
        'lbz-is-selected': selected,
        'lbz-is-activated': activated,
        'lbz-is-disabled': cisDisabled
      }
    ]"
    @click="!cisDisabled && $emit('click', $event)"
  >
    <lbz-state v-if="!cisDisabled" v-bind="cgetStateAttrs"/>
    <div v-if="$slots.start" class="lbz-list-item__start">
      <slot name="start"/>
    </div>
    <div v-if="$slots.center || $slots.default" class="lbz-list-item__center">
      <slot name="center"/>
      <slot/>
    </div>
    <div v-if="$slots.end" class="lbz-list-item__end">
      <slot name="end"/>
    </div>
  </component>
</template>

<script lang="ts">
import { Component, Inject, Prop, Vue } from 'vue-property-decorator';
import LbzState from '../state/state.vue';

@Component({
  components: {
    LbzState,
  },
})
export default class LbzListItem extends Vue {
  @Inject('router-link') private prouterLink!: boolean;
  @Inject('router-link-props') private prouterLinkProps!: object;
  @Inject('tag') private ptag!: string;
  @Inject('on-background') private ponBackground!: string;
  @Inject('disabled') private pdisabled!: boolean;
  @Inject('ripple') private pripple!: boolean;

  // router-link: undefined (default), true, false
  @Prop({ type: Boolean, default: undefined }) private routerLink!: boolean;
  // to (router-link): '' (default), 'x', { x: y }
  @Prop({ type: [String, Object], default: '' }) private to!: string | object;
  // tag: '' (default), li', 'a', 'x'
  @Prop({ type: String, default: '' }) private tag!: string;

  // selected: true, false (default)
  @Prop({ type: Boolean, default: false }) private selected!: boolean;
  // activated: true, false (default)
  @Prop({ type: Boolean, default: false }) private activated!: boolean;
  // disabled: undefined (default), true, false
  @Prop({ type: Boolean, default: undefined }) private disabled!: boolean;
  // ripple: undefined (default), true, false
  @Prop({ type: Boolean, default: undefined }) private ripple!: boolean;

  get cgetAttrs(): ComponentAttributes {
    const isRouterLink: boolean = this.routerLink === undefined
      ? this.prouterLink
      : this.routerLink;
    const {
      replace,
      append,
      exact,
      event,
    }: any = this.prouterLinkProps;
    const tag: string = this.tag || this.ptag;

    return isRouterLink
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

  get cisDisabled(): boolean {
    return this.disabled === undefined
      ? this.pdisabled
      : this.disabled;
  }

  get cgetStateAttrs(): StateAttributes {
    const isPrimary: boolean = this.activated && ['', 'surface'].includes(this.ponBackground);

    return {
      class: 'lbz-list-item__state',
      type: ['', 'surface', 'light'].includes(this.ponBackground) ? '' : 'primary',
      background: isPrimary ? 'primary' : (this.ponBackground ? `on-${this.ponBackground}` : ''),
      ripple: this.ripple === undefined ? this.pripple : this.ripple,
    };
  }
}
</script>
