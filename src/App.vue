<template>
  <div class="lbzui lbz-typography">
    <header class="lbzui__header" role="banner">
      <router-link tag="h1" to="/">LBZUI</router-link>
      <h2>Styles:</h2>
      <nav class="lbzui__nav" role="navigation">
        <router-link to="/styles/elevation">Elevation</router-link> |
        <router-link to="/styles/shadow">Shadow</router-link> |
        <router-link to="/styles/surface">Surface</router-link> |
        <router-link to="/styles/typography">Typography</router-link>
      </nav>
      <h2>Components:</h2>
      <nav class="lbzui__nav" role="navigation">
        <router-link to="/components/backdrop">Backdrop</router-link> |
        <router-link to="/components/button">Button</router-link> |
        <router-link to="/components/divider">Divider</router-link> |
        <router-link to="/components/fab">Fab</router-link> |
        <router-link to="/components/icon">Icon</router-link> |
        <router-link to="/components/icon-button">Icon button</router-link> |
        <router-link to="/components/top-app-bar">Top app bar</router-link>
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
      margin: 16px;
      width: 160px;
      height: 160px;
    }
  }
}
</style>
