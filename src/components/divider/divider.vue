<template>
  <hr
    class="lbz-divider"
    :class="[color ? `lbz-divider--${ color }` : '']"
  >
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Divider extends Vue {
  // color: 'primary', 'secondary', 'background', 'surface' (default), 'error'
  @Prop({ type: String, default: '' }) private color!: string;
}
</script>
