<template>
  <article class="lbzui-components-empty-state">
    <h2 class="lbz-typography--h5"># Empty state</h2>

    <h3 class="lbz-typography--subtitle1">
      $ on-background (auto-darkened): 'primary', 'secondary', 'surface'
      (default), 'error', 'light', 'dark'
    </h3>
    <h3 class="lbz-typography--subtitle1">$ title: '' (default), 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ subtitle: '' (default), 'x'</h3>

    <div class="lbzui-app lbzui-background--primary lbzui-is-darkened">
      <lbz-empty-state
        on-background="primary"
        title="Your lab, everywhere"
        subtitle="Find experiments happening nearby."
      >
        <template #start>
          <img src="../../assets/img/placeholder@1x1.png" />
        </template>
        <template #end>
          <lbz-button type="contained">Get started</lbz-button>
        </template>
      </lbz-empty-state>
    </div>
    <div class="lbzui-app lbzui-background--secondary lbzui-is-darkened">
      <lbz-empty-state
        on-background="secondary"
        title="Your lab, everywhere"
        subtitle="Find experiments happening nearby."
      >
        <template #start>
          <img src="../../assets/img/placeholder@1x1.png" />
        </template>
        <template #end>
          <lbz-button type="contained">Get started</lbz-button>
        </template>
      </lbz-empty-state>
    </div>
    <div class="lbzui-app">
      <lbz-empty-state
        title="Your lab, everywhere"
        subtitle="Find experiments happening nearby."
      >
        <template #start>
          <img src="../../assets/img/placeholder@1x1.png" />
        </template>
        <template #end>
          <lbz-button type="contained">Get started</lbz-button>
        </template>
      </lbz-empty-state>
    </div>
    <div class="lbzui-app lbzui-background--error lbzui-is-darkened">
      <lbz-empty-state
        on-background="error"
        title="Your lab, everywhere"
        subtitle="Find experiments happening nearby."
      >
        <template #start>
          <img src="../../assets/img/placeholder@1x1.png" />
        </template>
        <template #end>
          <lbz-button type="contained">Get started</lbz-button>
        </template>
      </lbz-empty-state>
    </div>
    <div class="lbzui-app lbzui-background--light lbzui-is-darkened">
      <lbz-empty-state
        on-background="light"
        title="Your lab, everywhere"
        subtitle="Find experiments happening nearby."
      >
        <template #start>
          <img src="../../assets/img/placeholder@1x1.png" />
        </template>
        <template #end>
          <lbz-button type="contained">Get started</lbz-button>
        </template>
      </lbz-empty-state>
    </div>
    <div class="lbzui-app lbzui-background--dark">
      <lbz-empty-state
        on-background="dark"
        title="Your lab, everywhere"
        subtitle="Find experiments happening nearby."
      >
        <template #start>
          <img src="../../assets/img/placeholder@1x1.png" />
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
