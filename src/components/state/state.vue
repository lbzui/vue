<template>
  <div :class="['lbz-state', type && `lbz-state--${ type }`]"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LbzState extends Vue {
  // type: 'surface' (default), 'primary', 'image'
  @Prop({ type: String, default: '' }) private type!: string;}
</script>
