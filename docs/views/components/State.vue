<template>
  <article class="lbzui-components-state">
    <h2 class="lbz-typography--h5"># State (ripple: non-IE)</h2>

    <h3 class="lbz-typography--subtitle1">
      $ type: 'surface' (default), 'primary', 'image'
    </h3>

    <div class="lbzui-square">
      Surface
      <lbz-state />
    </div>
    <div class="lbzui-square">
      Primary
      <lbz-state type="primary" />
    </div>
    <div class="lbzui-square">
      Image
      <lbz-state type="image" />
    </div>

    <h3 class="lbz-typography--subtitle1">
      $ background: 'primary', 'primary-variant', 'secondary',
      'secondary-variant', 'background', 'surface', 'error', 'light', 'dark',
      'on-primary', 'on-primary-variant', 'on-secondary',
      'on-secondary-variant', 'on-background', 'on-surface' (default),
      'on-error', 'on-light', 'on-dark'
    </h3>

    <div class="lbzui-square">
      Primary
      <lbz-state background="primary" />
    </div>
    <div class="lbzui-square">
      Primary-variant
      <lbz-state background="primary-variant" />
    </div>
    <div class="lbzui-square">
      Secondary
      <lbz-state background="secondary" />
    </div>
    <div class="lbzui-square">
      Secondary-variant
      <lbz-state background="secondary-variant" />
    </div>
    <div class="lbzui-square">
      Background
      <lbz-state background="background" />
    </div>
    <div class="lbzui-square">
      Surface
      <lbz-state background="surface" />
    </div>
    <div class="lbzui-square">
      Error
      <lbz-state background="error" />
    </div>
    <div class="lbzui-square">
      Light
      <lbz-state background="light" />
    </div>
    <div class="lbzui-square">
      Dark
      <lbz-state background="dark" />
    </div>
    <div class="lbzui-square lbzui-color-background--primary">
      On-primary
      <lbz-state background="on-primary" />
    </div>
    <div class="lbzui-square lbzui-color-background--primary-variant">
      On-primary-variant
      <lbz-state background="on-primary-variant" />
    </div>
    <div class="lbzui-square lbzui-color-background--secondary">
      On-secondary
      <lbz-state background="on-secondary" />
    </div>
    <div class="lbzui-square lbzui-color-background--secondary-variant">
      On-secondary-variant
      <lbz-state background="on-secondary-variant" />
    </div>
    <div class="lbzui-square lbzui-color-background--background">
      On-background
      <lbz-state background="on-background" />
    </div>
    <div class="lbzui-square lbzui-color-background--surface">
      On-surface
      <lbz-state />
    </div>
    <div class="lbzui-square lbzui-color-background--error">
      On-error
      <lbz-state background="on-error" />
    </div>
    <div class="lbzui-square lbzui-color-background--light">
      On-light
      <lbz-state background="on-light" />
    </div>
    <div class="lbzui-square lbzui-color-background--dark">
      On-dark
      <lbz-state background="on-dark" />
    </div>

    <h3 class="lbz-typography--subtitle1">$ darkened: true, false (default)</h3>

    <div class="lbzui-square lbzui-color-background--primary lbzui-is-darkened">
      On-primary
      <lbz-state background="on-primary" darkened />
    </div>
    <div
      class="lbzui-square lbzui-color-background--primary-variant lbzui-is-darkened"
    >
      On-primary-variant
      <lbz-state background="on-primary-variant" darkened />
    </div>
    <div
      class="lbzui-square lbzui-color-background--secondary lbzui-is-darkened"
    >
      On-secondary
      <lbz-state background="on-secondary" darkened />
    </div>
    <div
      class="lbzui-square lbzui-color-background--secondary-variant lbzui-is-darkened"
    >
      On-secondary-variant
      <lbz-state background="on-secondary-variant" darkened />
    </div>
    <div
      class="lbzui-square lbzui-color-background--background lbzui-is-darkened"
    >
      On-background
      <lbz-state background="on-background" darkened />
    </div>
    <div class="lbzui-square lbzui-color-background--error lbzui-is-darkened">
      On-error
      <lbz-state background="on-error" darkened />
    </div>
    <div class="lbzui-square lbzui-color-background--light lbzui-is-darkened">
      On-light
      <lbz-state background="on-light" darkened />
    </div>
    <div class="lbzui-square lbzui-color-background--dark lbzui-is-darkened">
      On-dark
      <lbz-state background="on-dark" darkened />
    </div>

    <h3 class="lbz-typography--subtitle1">
      $ ripple: undefined (default), true, false
    </h3>

    <div class="lbzui-square">
      Ripple
      <lbz-state ripple />
    </div>
    <div class="lbzui-square">
      Non-ripple
      <lbz-state :ripple="false" />
    </div>

    <h3 class="lbz-typography--subtitle1">
      $ unbounded: true, false (default)
    </h3>

    <div
      class="lbzui-square lbz-state-no-before--descendant"
      style="overflow: visible;"
    >
      Unbounded
      <lbz-state unbounded />
    </div>

    <h3 class="lbz-typography--subtitle1">$ centered: true, false (default)</h3>

    <div class="lbzui-square">
      Centered
      <lbz-state centered />
    </div>
  </article>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class ComponentsState extends Vue {}
</script>
