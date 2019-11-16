<template>
  <component
    v-bind="cgetAttrs"
    :class="[
      'lbz-list-item',
      {
        'lbz-ripple': !cisDisabled && pripple,
        'is-active': active,
        'is-selected': selected,
        'is-disabled': cisDisabled
      }
    ]"
    @click="!cisDisabled && $emit('click', $event)"
  >
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
import { Component, Prop, Inject, Vue } from 'vue-property-decorator';

@Component
export default class ListItem extends Vue {
  // router-link: undefined (default), true, false
  @Prop({ type: Boolean, default: undefined }) private routerLink!: undefined | boolean;
  // to (router-link): '' (default), 'x', { x: x }
  @Prop({ type: [String, Object], default: '' }) private to!: string | object;
  // tag: '' (default), li', 'a', 'x'
  @Prop({ type: String, default: '' }) private tag!: string;
  // active: true, false (default)
  @Prop({ type: Boolean, default: false }) private active!: boolean;
  // selected: true, false (default)
  @Prop({ type: Boolean, default: false }) private selected!: boolean;
  // disabled: undefined (default), true, false
  @Prop({ type: Boolean, default: undefined }) private disabled!: undefined | boolean;

  @Inject('router-link') private prouterLink!: boolean;
  @Inject('router-link-props') private prouterLinkProps!: object;
  @Inject('tag') private ptag!: string;
  @Inject('ripple') private pripple!: boolean;
  @Inject('disabled') private pdisabled!: boolean;

  get cgetAttrs(): object {
    const {
      replace,
      append,
      exact,
      event,
    }: any = (this.prouterLinkProps as any);
    const tag: string = this.tag || this.ptag;

    return this.cisRouterLink
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

  get cisRouterLink(): boolean {
    return this.routerLink === undefined
      ? this.prouterLink
      : this.routerLink;
  }

  get cisDisabled(): boolean {
    return this.disabled === undefined
      ? this.pdisabled
      : this.disabled;
  }
}
</script>
