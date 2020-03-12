<template>
  <article class="lbzui-components-divider">
    <h2 class="lbz-typography--h5"># Divider</h2>

    <lbz-divider/>

    <h3 class="lbz-typography--subtitle1">$ on-background: 'primary', 'secondary', 'background', 'surface' (default), 'error', 'light', 'dark'</h3>

    <lbz-divider on-background="primary"/>
    <br>
    <lbz-divider on-background="secondary"/>
    <br>
    <lbz-divider on-background="background"/>
    <br>
    <lbz-divider/>
    <br>
    <lbz-divider on-background="error"/>
    <br>
    <lbz-divider on-background="light"/>
    <br>
    <lbz-divider on-background="dark"/>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ComponentsDivider extends Vue {}
</script>
