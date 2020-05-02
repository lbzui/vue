<template>
  <article class="lbzui-utilities-truncate">
    <h2 class="lbz-typography--h5"># Truncate</h2>

    <div class="lbzui-square">
      <p class="lbz-truncate--1">.lbz-truncate--1.lbz-truncate--1</p>
    </div>
    <div class="lbzui-square">
      <p class="lbz-truncate--2">
        .lbz-truncate--2.lbz-truncate--2.lbz-truncate--2
      </p>
    </div>
    <div class="lbzui-square">
      <p class="lbz-truncate--3">
        .lbz-truncate--3.lbz-truncate--3.lbz-truncate--3.lbz-truncate--3
      </p>
    </div>
  </article>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class UtilitiesTruncate extends Vue {}
</script>
