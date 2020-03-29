<template>
  <div :class="['lbz-empty-state', onBackground && `lbz-empty-state--on-${onBackground}`]">
    <figure>
      <div v-if="$slots.start" class="lbz-empty-state__media">
        <slot name="start"/>
      </div>
      <figcaption>
        <h3
          v-if="title"
          class="lbz-empty-state__title"
          v-html="title"
        ></h3>
        <p
          v-if="subtitle"
          class="lbz-empty-state__subtitle"
          v-html="subtitle"
        ></p>
        <slot name="center"/>
        <slot/>
        <div v-if="$slots.end" class="lbz-empty-state__actions">
          <slot name="end"/>
        </div>
      </figcaption>
    </figure>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LbzEmptyState extends Vue {
  // on-background (darkened): 'primary', 'secondary', 'surface' (default), 'error', 'light', 'dark'
  @Prop({ type: String, default: '' }) private onBackground!: string;
  // title: '' (default), 'x'
  @Prop({ type: String, default: '' }) private title!: string;
  // subtitle: '' (default), 'x'
  @Prop({ type: String, default: '' }) private subtitle!: string;
}
</script>
