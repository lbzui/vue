<template>
  <article class="lbzui-components-icon">
    <h2 class="lbz-typography--h5"># Icon</h2>

    <lbz-icon>favorite</lbz-icon>
    <lbz-icon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
        />
      </svg>
    </lbz-icon>
    <lbz-icon>
      <img src="../../assets/img/logo.png" />
    </lbz-icon>

    <h3 class="lbz-typography--subtitle1">$ size: 18, 24 (default), 36, 48</h3>

    <lbz-icon :size="18">favorite</lbz-icon>
    <lbz-icon>favorite</lbz-icon>
    <lbz-icon :size="36">favorite</lbz-icon>
    <lbz-icon :size="48">favorite</lbz-icon>

    <h3 class="lbz-typography--subtitle1">
      $ color: '' (default), 'primary', 'secondary', 'error', 'light', 'dark'
    </h3>

    <lbz-icon>favorite</lbz-icon>
    <lbz-icon color="primary">favorite</lbz-icon>
    <lbz-icon color="secondary">favorite</lbz-icon>
    <lbz-icon color="error">favorite</lbz-icon>
    <lbz-icon color="light">favorite</lbz-icon>
    <lbz-icon color="dark">favorite</lbz-icon>

    <h3 class="lbz-typography--subtitle1">$ disabled: true, false (default)</h3>

    <lbz-icon disabled>favorite</lbz-icon>
    <lbz-icon color="primary" disabled>favorite</lbz-icon>
    <lbz-icon color="secondary" disabled>favorite</lbz-icon>
    <lbz-icon color="error" disabled>favorite</lbz-icon>
    <lbz-icon color="light" disabled>favorite</lbz-icon>
    <lbz-icon color="dark" disabled>favorite</lbz-icon>
  </article>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class ComponentsIcon extends Vue {}
</script>
