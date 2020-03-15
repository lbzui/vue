<template>
  <article class="lbzui-utilities-layout-grid">
    <h2 class="lbz-typography--h5"># Layout grid (IE unfriendly)</h2>

    <div class="lbzui-rectangle lbz-layout-grid">
      <div class="lbz-layout-grid__cell">.lbz-layout-grid__cell</div>
      <div class="lbz-layout-grid__cell">.lbz-layout-grid__cell</div>
      <div class="lbz-layout-grid__cell">.lbz-layout-grid__cell</div>
    </div>
    <div class="lbzui-rectangle lbz-layout-grid">
      <div class="lbz-layout-grid__cell lbz-layout-grid__align--start lbzui-layout-grid__cell">.lbz-layout-grid__align--start</div>
      <div class="lbz-layout-grid__cell lbz-layout-grid__align--center lbzui-layout-grid__cell">.lbz-layout-grid__align--center</div>
      <div class="lbz-layout-grid__cell lbz-layout-grid__align--end lbzui-layout-grid__cell">.lbz-layout-grid__align--end</div>
      <div class="lbz-layout-grid__cell lbz-layout-grid__align--stretch">.lbz-layout-grid__align--stretch</div>
    </div>
    <div class="lbzui-rectangle lbz-layout-grid">
      <div class="lbz-layout-grid__cell lbz-layout-grid__span--1">.lbz-layout-grid__span--1</div>
      <div class="lbz-layout-grid__cell lbz-layout-grid__span--3">.lbz-layout-grid__span--3</div>
      <div class="lbz-layout-grid__cell lbz-layout-grid__span--8">.lbz-layout-grid__span--8</div>
    </div>
    <div class="lbzui-rectangle lbz-layout-grid">
      <div class="lbz-layout-grid__cell lbz-layout-grid__start--1">.lbz-layout-grid__start--1</div>
      <div class="lbz-layout-grid__cell lbz-layout-grid__start--2 lbz-layout-grid__span--8">.lbz-layout-grid__start--2.lbz-layout-grid__span--8</div>
      <div class="lbz-layout-grid__cell lbz-layout-grid__start--10 lbz-layout-grid__end--13">.lbz-layout-grid__start--10.lbz-layout-grid__end--13</div>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class UtilitiesLayoutGrid extends Vue {}
</script>
