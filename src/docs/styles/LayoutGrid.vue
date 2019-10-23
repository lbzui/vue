<template>
  <article class="lbzui-styles-layout-grid">
    <h2 class="lbz-typography--h5"># Layout grid (IE unfriendly)</h2>
    <div class="lbz-layout-grid">
      <div class="lbz-layout-grid__cell">.lbz-layout-grid__cell</div>
      <div class="lbz-layout-grid__cell">.lbz-layout-grid__cell</div>
      <div class="lbz-layout-grid__cell">.lbz-layout-grid__cell</div>
    </div>
    <div class="lbz-layout-grid">
      <div class="lbz-layout-grid__cell align-start lbzui-cell">.align-start</div>
      <div class="lbz-layout-grid__cell align-center lbzui-cell">.align-center</div>
      <div class="lbz-layout-grid__cell align-end lbzui-cell">.align-end</div>
      <div class="lbz-layout-grid__cell align-stretch">.align-stretch</div>
    </div>
    <div class="lbz-layout-grid">
      <div class="lbz-layout-grid__cell span1">.span1</div>
      <div class="lbz-layout-grid__cell span3">.span3</div>
      <div class="lbz-layout-grid__cell span8">.span8</div>
    </div>
    <div class="lbz-layout-grid">
      <div class="lbz-layout-grid__cell start1">.start1</div>
      <div class="lbz-layout-grid__cell start2 span8">.start2.span8</div>
      <div class="lbz-layout-grid__cell start10 end13">.start10.end13</div>
    </div>
  </article>
</template>

<style lang="less">
.lbzui-styles-layout-grid {
  .lbz-layout-grid {
    border: 1px solid var(--lbz-theme-outline-on-surface);

    .lbz-layout-grid__cell {
      height: 180px;
      background-color: var(--lbz-theme-outline-on-surface);
    }

    .lbzui-cell {
      height: 90px;
    }

    + .lbz-layout-grid {
      margin-top: 16px;
    }
  }
}
</style>
