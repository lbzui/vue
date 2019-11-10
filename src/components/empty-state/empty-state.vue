<template>
  <div class="lbz-empty-state">
    <figure>
      <div v-if="$slots.start" class="lbz-empty-state__media">
        <slot name="start"/>
      </div>
      <figcaption>
        <h3
          v-if="title"
          v-html="title"
          class="lbz-empty-state__title"
        ></h3>
        <p
          v-if="subtitle"
          v-html="subtitle"
          class="lbz-empty-state__subtitle"
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
export default class EmptyState extends Vue {
  // title: '' (default), 'x'
  @Prop({ type: String, default: '' }) private title!: string;
  // subtitle: '' (default), 'x'
  @Prop({ type: String, default: '' }) private subtitle!: string;
}
</script>
