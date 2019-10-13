<template>
  <article class="lbzui-components-empty-state">
    <h2 class="lbz-typography--h5"># Empty state</h2>

    <h3 class="lbz-typography--subtitle1">$ title: '' (default), 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ subtitle: '' (default), 'x'</h3>
    <lbz-empty-state title="Your lab, everywhere">
      <template #start>
        <img src="../../assets/img/logo.png">
      </template>
      <template #end>
        <lbz-button type="contained">Get started</lbz-button>
      </template>
    </lbz-empty-state>
    <lbz-empty-state subtitle="Find experiments happening nearby.">
      <template #start>
        <img src="../../assets/img/logo.png">
      </template>
      <template #end>
        <lbz-button type="contained">Get started</lbz-button>
      </template>
    </lbz-empty-state>
    <lbz-empty-state
      title="Your lab, everywhere"
      subtitle="Find experiments happening nearby."
    >
      <template #start>
        <img src="../../assets/img/logo.png">
      </template>
      <template #end>
        <lbz-button type="contained">Get started</lbz-button>
      </template>
    </lbz-empty-state>
  </article>
</template>

<style lang="less">
.lbzui-components-empty-state {
  .lbz-empty-state {
    border: 1px solid var(--lbz-theme-outline-on-surface);
    width: 360px;
    height: 614px;

    + .lbz-empty-state {
      margin-top: 16px;
    }
  }
}
</style>
