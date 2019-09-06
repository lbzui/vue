<template>
  <div class="lbzui">
    <header class="lbzui__header" role="banner">
      <router-link tag="h1" to="/">LBZUI</router-link>
      <h2>Styles:</h2>
      <nav class="lbzui__nav" role="navigation">
        <router-link to="/styles/elevation">Elevation</router-link>
      </nav>
    </header>
    <router-view class="lbzui_main" role="main"/>
  </div>
</template>

<style lang="less">
.lbzui {
  .lbzui__header {}

  .lbzui_main {
    .square {
      display: inline-block;
      width: 160px;
      height: 160px;
    }
  }
}
</style>
