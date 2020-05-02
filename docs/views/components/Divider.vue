<template>
  <article class="lbzui-components-divider">
    <h2 class="lbz-typography--h5"># Divider</h2>

    <lbz-divider />

    <h3 class="lbz-typography--subtitle1">
      $ on-background: 'primary', 'secondary', 'background', 'surface'
      (default), 'error', 'light', 'dark'
    </h3>

    <div class="lbzui-mini-rectangle lbzui-background--primary">
      <lbz-divider on-background="primary" />
    </div>
    <div class="lbzui-mini-rectangle lbzui-background--secondary">
      <lbz-divider on-background="secondary" />
    </div>
    <div class="lbzui-mini-rectangle">
      <lbz-divider on-background="background" />
    </div>
    <div class="lbzui-mini-rectangle">
      <lbz-divider />
    </div>
    <div class="lbzui-mini-rectangle lbzui-background--error">
      <lbz-divider on-background="error" />
    </div>
    <div class="lbzui-mini-rectangle lbzui-background--light">
      <lbz-divider on-background="light" />
    </div>
    <div class="lbzui-mini-rectangle lbzui-background--dark">
      <lbz-divider on-background="dark" />
    </div>

    <h3 class="lbz-typography--subtitle1">$ darkened: true, false (default)</h3>

    <div
      class="lbzui-mini-rectangle lbzui-background--primary lbzui-is-darkened"
    >
      <lbz-divider on-background="primary" darkened />
    </div>
    <div
      class="lbzui-mini-rectangle lbzui-background--secondary lbzui-is-darkened"
    >
      <lbz-divider on-background="secondary" darkened />
    </div>
    <div class="lbzui-mini-rectangle lbzui-background--error lbzui-is-darkened">
      <lbz-divider on-background="error" darkened />
    </div>
    <div class="lbzui-mini-rectangle lbzui-background--light lbzui-is-darkened">
      <lbz-divider on-background="light" darkened />
    </div>
  </article>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class ComponentsDivider extends Vue {}
</script>
