<template>
  <article class="lbzui-components-state">
    <h2 class="lbz-typography--h5"># State (non-IE)</h2>

    <h3 class="lbz-typography--subtitle1">$ type: 'surface' (default), 'primary', 'image'</h3>

    <div class="lbzui-square">
      Surface
      <lbz-state></lbz-state>
    </div>
    <div class="lbzui-square">
      Primary
      <lbz-state type="primary"></lbz-state>
    </div>
    <div class="lbzui-square">
      Image
      <lbz-state type="image"></lbz-state>
    </div>

    <h3 class="lbz-typography--subtitle1">$ background: 'primary', 'primary-variant', 'secondary', 'secondary-variant', 'background', 'surface', 'error', 'light', 'dark', 'on-primary', 'on-primary-variant', 'on-secondary', 'on-secondary-variant', 'on-background', 'on-surface' (default), 'on-error', 'on-light', 'on-dark'</h3>

    <div class="lbzui-square">
      Primary
      <lbz-state background="primary"></lbz-state>
    </div>
    <div class="lbzui-square">
      Primary-variant
      <lbz-state background="primary-variant"></lbz-state>
    </div>
    <div class="lbzui-square">
      Secondary
      <lbz-state background="secondary"></lbz-state>
    </div>
    <div class="lbzui-square">
      Secondary-variant
      <lbz-state background="secondary-variant"></lbz-state>
    </div>
    <div class="lbzui-square">
      Background
      <lbz-state background="background"></lbz-state>
    </div>
    <div class="lbzui-square">
      Surface
      <lbz-state background="surface"></lbz-state>
    </div>
    <div class="lbzui-square">
      Error
      <lbz-state background="error"></lbz-state>
    </div>
    <div class="lbzui-square">
      Light
      <lbz-state background="light"></lbz-state>
    </div>
    <div class="lbzui-square">
      Dark
      <lbz-state background="dark"></lbz-state>
    </div>
    <div class="lbzui-square lbzui-color-background--primary">
      On-primary
      <lbz-state background="on-primary"></lbz-state>
    </div>
    <div class="lbzui-square lbzui-color-background--primary-variant">
      On-primary-variant
      <lbz-state background="on-primary-variant"></lbz-state>
    </div>
    <div class="lbzui-square lbzui-color-background--secondary">
      On-secondary
      <lbz-state background="on-secondary"></lbz-state>
    </div>
    <div class="lbzui-square lbzui-color-background--secondary-variant">
      On-secondary-variant
      <lbz-state background="on-secondary-variant"></lbz-state>
    </div>
    <div class="lbzui-square lbzui-color-background--background">
      On-background
      <lbz-state background="on-background"></lbz-state>
    </div>
    <div class="lbzui-square lbzui-color-background--surface">
      On-surface
      <lbz-state></lbz-state>
    </div>
    <div class="lbzui-square lbzui-color-background--error">
      On-error
      <lbz-state background="on-error"></lbz-state>
    </div>
    <div class="lbzui-square lbzui-color-background--light">
      On-light
      <lbz-state background="on-light"></lbz-state>
    </div>
    <div class="lbzui-square lbzui-color-background--dark">
      On-dark
      <lbz-state background="on-dark"></lbz-state>
    </div>

    <h3 class="lbz-typography--subtitle1">$ ripple: undefined (default), true, false</h3>

    <div class="lbzui-square">
      Ripple
      <lbz-state ripple></lbz-state>
    </div>
    <div class="lbzui-square">
      Non-ripple
      <lbz-state :ripple="false"></lbz-state>
    </div>

    <h3 class="lbz-typography--subtitle1">$ unbounded: true, false (default)</h3>

    <div class="lbzui-square lbz-state-no-before--descendant" style="overflow: visible;">
      Unbounded
      <lbz-state unbounded></lbz-state>
    </div>

    <h3 class="lbz-typography--subtitle1">$ centered: true, false (default)</h3>

    <div class="lbzui-square">
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
