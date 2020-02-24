<template>
  <article class="lbzui-components-state">
    <h2 class="lbz-typography--h5"># State (non-IE)</h2>

    <h3 class="lbz-typography--subtitle1">$ type: 'surface' (default), 'primary', 'image'</h3>
    <div class="lbzui-u-square">
      surface
      <lbz-state></lbz-state>
    </div>
    <div class="lbzui-u-square">
      primary
      <lbz-state type="primary"></lbz-state>
    </div>
    <div class="lbzui-u-square">
      image
      <lbz-state type="image"></lbz-state>
    </div>

    <h3 class="lbz-typography--subtitle1">$ background: 'primary', 'primary-variant', 'secondary', 'secondary-variant', 'background', 'surface', 'error', 'light', 'dark', 'on-primary', 'on-primary-variant', 'on-secondary', 'on-secondary-variant', 'on-background', 'on-surface' (default), 'on-error', 'on-light', 'on-dark'</h3>
    <div class="lbzui-u-square">
      primary
      <lbz-state background="primary"></lbz-state>
    </div>
    <div class="lbzui-u-square">
      primary-variant
      <lbz-state background="primary-variant"></lbz-state>
    </div>
    <div class="lbzui-u-square">
      secondary
      <lbz-state background="secondary"></lbz-state>
    </div>
    <div class="lbzui-u-square">
      secondary-variant
      <lbz-state background="secondary-variant"></lbz-state>
    </div>
    <div class="lbzui-u-square">
      background
      <lbz-state background="background"></lbz-state>
    </div>
    <div class="lbzui-u-square">
      surface
      <lbz-state background="surface"></lbz-state>
    </div>
    <div class="lbzui-u-square">
      error
      <lbz-state background="error"></lbz-state>
    </div>
    <div class="lbzui-u-square">
      light
      <lbz-state background="light"></lbz-state>
    </div>
    <div class="lbzui-u-square">
      dark
      <lbz-state background="dark"></lbz-state>
    </div>
    <div class="lbzui-u-square primary">
      on-primary
      <lbz-state background="on-primary"></lbz-state>
    </div>
    <div class="lbzui-u-square primary-variant">
      on-primary-variant
      <lbz-state background="on-primary-variant"></lbz-state>
    </div>
    <div class="lbzui-u-square secondary">
      on-secondary
      <lbz-state background="on-secondary"></lbz-state>
    </div>
    <div class="lbzui-u-square secondary-variant">
      on-secondary-variant
      <lbz-state background="on-secondary-variant"></lbz-state>
    </div>
    <div class="lbzui-u-square background">
      on-background
      <lbz-state background="on-background"></lbz-state>
    </div>
    <div class="lbzui-u-square surface">
      on-surface
      <lbz-state></lbz-state>
    </div>
    <div class="lbzui-u-square error">
      on-error
      <lbz-state background="on-error"></lbz-state>
    </div>
    <div class="lbzui-u-square light">
      on-light
      <lbz-state background="on-light"></lbz-state>
    </div>
    <div class="lbzui-u-square dark">
      on-dark
      <lbz-state background="on-dark"></lbz-state>
    </div>

    <h3 class="lbz-typography--subtitle1">$ unbounded: true, false (default)</h3>
    <div class="lbzui-u-square lbz-state-no-before--descendant" style="overflow: visible;">
      unbounded
      <lbz-state unbounded></lbz-state>
    </div>

    <h3 class="lbz-typography--subtitle1">$ centered: true, false (default)</h3>
    <div class="lbzui-u-square">
      centered
      <lbz-state centered></lbz-state>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ComponentsState extends Vue {}
</script>
