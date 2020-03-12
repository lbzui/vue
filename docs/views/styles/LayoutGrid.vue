<template>
  <article class="lbzui-styles-layout-grid">
    <h2 class="lbz-typography--h5"># Layout grid (IE unfriendly)</h2>

    <div class="lbzui-u-rectangle lbz-layout-grid">
      <div class="lbz-layout-grid__cell">.lbz-layout-grid__cell</div>
      <div class="lbz-layout-grid__cell">.lbz-layout-grid__cell</div>
      <div class="lbz-layout-grid__cell">.lbz-layout-grid__cell</div>
    </div>
    <div class="lbzui-u-rectangle lbz-layout-grid">
      <div class="lbz-layout-grid__cell align--start lbzui-cell">.align--start</div>
      <div class="lbz-layout-grid__cell align--center lbzui-cell">.align--center</div>
      <div class="lbz-layout-grid__cell align--end lbzui-cell">.align--end</div>
      <div class="lbz-layout-grid__cell align--stretch">.align--stretch</div>
    </div>
    <div class="lbzui-u-rectangle lbz-layout-grid">
      <div class="lbz-layout-grid__cell span--1">.span--1</div>
      <div class="lbz-layout-grid__cell span--3">.span--3</div>
      <div class="lbz-layout-grid__cell span--8">.span--8</div>
    </div>
    <div class="lbzui-u-rectangle lbz-layout-grid">
      <div class="lbz-layout-grid__cell start--1">.start--1</div>
      <div class="lbz-layout-grid__cell start--2 span--8">.start--2.span--8</div>
      <div class="lbz-layout-grid__cell start--10 end--13">.start--10.end--13</div>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class StylesLayoutGrid extends Vue {}
</script>
