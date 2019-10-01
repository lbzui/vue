<template>
  <ul
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
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class List extends Vue {
  // type (list item): 'one-line' (default), 'two-line', 'three-line'
  @Prop({ type: String, default: '' }) private type!: string;
  // dense (list item): true, false (default)
  @Prop({ type: Boolean, default: false }) private dense!: boolean;
  // subtitle: '' (default), 'x'
  @Prop({ type: String, default: '' }) private subtitle!: string;
  // placement: 'start' (default), 'center'
  @Prop({ type: String, default: '' }) private placement!: string;
}
</script>
