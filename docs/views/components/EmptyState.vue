<template>
  <article class="lbzui-components-empty-state">
    <h2 class="lbz-typography--h5"># Empty state</h2>

    <h3 class="lbz-typography--subtitle1">$ title: '' (default), 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ subtitle: '' (default), 'x'</h3>
    <div class="lbzui-u-app">
      <lbz-empty-state title="Your lab, everywhere">
        <template #start>
          <img src="../../assets/img/placeholder@1x1.png">
        </template>
        <template #end>
          <lbz-button type="contained">Get started</lbz-button>
        </template>
      </lbz-empty-state>
    </div>
    <div class="lbzui-u-app">
      <lbz-empty-state subtitle="Find experiments happening nearby.">
        <template #start>
          <img src="../../assets/img/placeholder@1x1.png">
        </template>
        <template #end>
          <lbz-button type="contained">Get started</lbz-button>
        </template>
      </lbz-empty-state>
    </div>
    <div class="lbzui-u-app">
      <lbz-empty-state title="Your lab, everywhere" subtitle="Find experiments happening nearby.">
        <template #start>
          <img src="../../assets/img/placeholder@1x1.png">
        </template>
        <template #end>
          <lbz-button type="contained">Get started</lbz-button>
        </template>
      </lbz-empty-state>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ComponentsEmptyState extends Vue {}
</script>
