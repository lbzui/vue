<template>
  <div class="lbzui lbz-typography">
    <aside class="lbzui__drawer" role="navigation">
      <router-link tag="h1" to="/">@lbzui/vue</router-link>
      <h2>Styles:</h2>
      <nav class="lbzui__nav">
        <router-link to="/styles/elevation">Elevation</router-link> |
        <router-link to="/styles/shadow">Shadow</router-link> |
        <router-link to="/styles/surface">Surface</router-link> |
        <router-link to="/styles/typography">Typography</router-link>
      </nav>
      <h2>Components:</h2>
      <nav class="lbzui__nav">
        <router-link to="/components/backdrop">Backdrop</router-link> |
        <router-link to="/components/button">Button</router-link> |
        <router-link to="/components/card">Card</router-link> |
        <router-link to="/components/divider">Divider</router-link> |
        <router-link to="/components/fab">FAB</router-link> |
        <router-link to="/components/icon">Icon</router-link> |
        <router-link to="/components/icon-button">Icon button</router-link> |
        <router-link to="/components/top-app-bar">Top app bar</router-link>
      </nav>
    </aside>
    <main class="lbzui__main" role="main">
      <router-view class="lbzui__main__wrapper"/>
    </main>
  </div>
</template>

<style lang="less">
// variables (Less)
@import "./assets/css/variables/_state.less";

// variables (CSS)
@import "./assets/css/variables/layout-grid.less";
@import "./assets/css/variables/theme.less";

// styles
@import "./assets/css/styles/elevation.less";
@import "./assets/css/styles/surface.less";
@import "./assets/css/styles/typography.less";

.lbzui {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  height: 100%;
  color: var(--lbz-theme-text-medium-emphasis-on-surface);

  & &__drawer {
    flex: none;
    overflow-x: hidden;
    overflow-y: auto;
    position: relative;
    .lbz-elevation--16();
    width: 256px;
    .lbz-surface--16();

    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 1px;
      background-color: var(--lbz-theme-outline-on-surface);
      content: "";
    }

    h1 {
      margin: 0;
      padding: 14px var(--lbz-layout-grid-margin);
      .lbz-typography--h4();
      color: var(--lbz-theme-text-high-emphasis-on-surface);
    }
  }

  & &__main {
    flex: 1;
    overflow: auto;

    .lbzui__main__wrapper {
      box-sizing: border-box;
      padding: var(--lbz-layout-grid-margin);
      min-width: calc(360px + 2 * var(--lbz-layout-grid-margin));
      min-height: 100%;
    }

    .lbz-typography--h5 {
      color: var(--lbz-theme-text-high-emphasis-on-surface);
    }

    .square {
      display: inline-block;
      margin: 0 16px 16px 0;
      width: 180px;
      height: 180px;
      line-height: 180px;
      text-align: center;
      .lbz-surface--1();
    }

    .lbz-backdrop {
      display: inline-block;
      position: relative;
      margin-right: 16px;
      border: 1px solid var(--lbz-theme-outline-on-surface);
      width: 360px;
      height: 614px;
    }

    .lbz-card {
      display: flex;
      margin-bottom: 16px;
      width: 344px;
    }

    .lbz-fab {
      position: relative;
      right: 0;
      bottom: 0;
      margin-right: 16px;
    }

    .lbz-top-app-bar {
      position: static;
      margin-bottom: 16px;

      &.lbz-top-app-bar--short {
        margin-right: 16px;
      }
    }
  }
}
</style>
