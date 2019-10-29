<template>
  <component
    v-bind="cattrs"
    :class="[
      'lbz-list-item',
      {
        'lbz-ripple': !cisDisabled && pripple,
        'is-active': active,
        'is-selected': selected,
        'is-disabled': cisDisabled
      }
    ]"
    @click="cisDisabled ? '' : $emit('click', $event)"
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

@Component({
  name: 'lbz-list-item',
})
export default class ListItem extends Vue {
  // router-link: true, false, undefined (default)
  @Prop({ type: Boolean, default: undefined }) private routerLink!: boolean;
  // tag: '' (default), li', 'a', 'x'
  @Prop({ type: String, default: '' }) private tag!: string;
  // to (router-link): '' (default), 'x', { x: x }
  @Prop({ type: [String, Object], default: '' }) private to!: string;
  // active: true, false (default)
  @Prop({ type: Boolean, default: false }) private active!: boolean;
  // selected: true, false (default)
  @Prop({ type: Boolean, default: false }) private selected!: boolean;
  // disabled: true, false, undefined (default)
  @Prop({ type: Boolean, default: undefined }) private disabled!: boolean;

  @Inject() private prouterLink!: boolean;
  @Inject() private ptag!: string;
  @Inject() private pripple!: boolean;
  @Inject() private pdisabled!: boolean;

  get cattrs() {
    return this.cisRouterLink
      ? {
        is: 'router-link',
        tag: this.tag || this.ptag,
        to: this.to,
      } : {
        is: this.tag || this.ptag,
      };
  }

  get cisRouterLink() {
    return this.routerLink === undefined
      ? this.prouterLink
      : this.routerLink;
  }

  get cisDisabled() {
    return this.disabled === undefined
      ? this.pdisabled
      : this.disabled;
  }
}
</script>
