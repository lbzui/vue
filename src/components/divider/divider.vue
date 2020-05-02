<template>
  <hr
    :class="[
      'lbz-divider',
      onBackground && `lbz-divider--on-${onBackground}`,
      darkened && 'lbz-is-darkened'
    ]"
  />
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class LbzDivider extends Vue {
    // on-background: 'primary', 'secondary', 'background', 'surface' (default), 'error', 'light', 'dark'
    @Prop({ type: String, default: '' }) private onBackground!: string;
    // darkened: true, false (default)
    @Prop({ type: Boolean, default: false }) private darkened!: boolean;
  }
</script>
