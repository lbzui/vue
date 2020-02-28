<template>
  <article class="lbzui-components-state">
    <h2 class="lbz-typography--h5"># State (non-IE)</h2>

    <h3 class="lbz-typography--subtitle1">$ type: 'surface' (default), 'primary', 'image'</h3>
    <div class="lbzui-u-square">
      Surface
      <lbz-state></lbz-state>
    </div>
    <div class="lbzui-u-square">
      Primary
      <lbz-state type="primary"></lbz-state>
    </div>
    <div class="lbzui-u-square">
      Image
      <lbz-state type="image"></lbz-state>
    </div>

    <h3 class="lbz-typography--subtitle1">$ background: 'primary', 'primary-variant', 'secondary', 'secondary-variant', 'background', 'surface', 'error', 'light', 'dark', 'on-primary', 'on-primary-variant', 'on-secondary', 'on-secondary-variant', 'on-background', 'on-surface' (default), 'on-error', 'on-light', 'on-dark'</h3>
    <div class="lbzui-u-square">
      Primary
      <lbz-state background="primary"></lbz-state>
    </div>
    <div class="lbzui-u-square">
      Primary-variant
      <lbz-state background="primary-variant"></lbz-state>
    </div>
    <div class="lbzui-u-square">
      Secondary
      <lbz-state background="secondary"></lbz-state>
    </div>
    <div class="lbzui-u-square">
      Secondary-variant
      <lbz-state background="secondary-variant"></lbz-state>
    </div>
    <div class="lbzui-u-square">
      Background
      <lbz-state background="background"></lbz-state>
    </div>
    <div class="lbzui-u-square">
      Surface
      <lbz-state background="surface"></lbz-state>
    </div>
    <div class="lbzui-u-square">
      Error
      <lbz-state background="error"></lbz-state>
    </div>
    <div class="lbzui-u-square">
      Light
      <lbz-state background="light"></lbz-state>
    </div>
    <div class="lbzui-u-square">
      Dark
      <lbz-state background="dark"></lbz-state>
    </div>
    <div class="lbzui-u-square primary">
      On-primary
      <lbz-state background="on-primary"></lbz-state>
    </div>
    <div class="lbzui-u-square primary-variant">
      On-primary-variant
      <lbz-state background="on-primary-variant"></lbz-state>
    </div>
    <div class="lbzui-u-square secondary">
      On-secondary
      <lbz-state background="on-secondary"></lbz-state>
    </div>
    <div class="lbzui-u-square secondary-variant">
      On-secondary-variant
      <lbz-state background="on-secondary-variant"></lbz-state>
    </div>
    <div class="lbzui-u-square background">
      On-background
      <lbz-state background="on-background"></lbz-state>
    </div>
    <div class="lbzui-u-square surface">
      On-surface
      <lbz-state></lbz-state>
    </div>
    <div class="lbzui-u-square error">
      On-error
      <lbz-state background="on-error"></lbz-state>
    </div>
    <div class="lbzui-u-square light">
      On-light
      <lbz-state background="on-light"></lbz-state>
    </div>
    <div class="lbzui-u-square dark">
      On-dark
      <lbz-state background="on-dark"></lbz-state>
    </div>

    <h3 class="lbz-typography--subtitle1">$ unbounded: true, false (default)</h3>
    <div class="lbzui-u-square lbz-state-no-before--descendant" style="overflow: visible;">
      Unbounded
      <lbz-state unbounded></lbz-state>
    </div>

    <h3 class="lbz-typography--subtitle1">$ centered: true, false (default)</h3>
    <div class="lbzui-u-square">
      Centered
      <lbz-state centered></lbz-state>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ComponentsState extends Vue {}
</script>
