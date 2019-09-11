<template>
  <main>
    <lbz-backdrop
      :active.sync="isActive"
      subtitle="Subtitle"
      icon
      divider
      horizontal
    >
      <template #back-layer-header>
        <lbz-top-app-bar title="Page title">
          <template #start>
            <lbz-icon-button
              :active.sync="isActive"
              toggle
              on-background="primary"
              on-icon="close"
              off-icon="menu"
            />
          </template>
          <template #end>
            <lbz-icon-button on-background="primary">more_vert</lbz-icon-button>
          </template>
        </lbz-top-app-bar>
      </template>
      <template #back-layer-content>
        <div style="height: 1200px;">Back layer content</div>
      </template>
      <template #front-layer-content>
        <article style="width: 2400px; height: 100%;">Front layer content</article>
      </template>
    </lbz-backdrop>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Backdrop extends Vue {
  private isActive: boolean = false;
}
</script>
