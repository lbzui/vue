<template>
  <div class="lbzui lbz-typography">
    <aside class="lbzui__drawer" role="navigation">
      <router-link tag="h1" to="/">@lbzui/vue</router-link>
      <lbz-list dense subtitle="Styles">
        <router-link
          v-for="item of vstyles"
          :key="item.path"
          :to="item.path"
          class="lbz-list-item"
        >{{ item.label }}</router-link>
      </lbz-list>
      <lbz-divider/>
      <lbz-list dense subtitle="Components">
        <router-link
          v-for="item of vcomponents"
          :key="item.path"
          :to="item.path"
          class="lbz-list-item"
        >{{ item.label }}</router-link>
      </lbz-list>
    </aside>
    <main class="lbzui__main" role="main">
      <router-view class="lbzui__main__container"/>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  private vstyles: any[] = [
    {
      path: '/styles/elevation',
      label: 'Elevation',
    },
    {
      path: '/styles/shadow',
      label: 'Shadow',
    },
    {
      path: '/styles/surface',
      label: 'Surface',
    },
    {
      path: '/styles/typography',
      label: 'Typography',
    },
  ];
  private vcomponents: any[] = [
    {
      path: '/components/backdrop',
      label: 'Backdrop',
    },
    {
      path: '/components/button',
      label: 'Button',
    },
    {
      path: '/components/card',
      label: 'Card',
    },
    {
      path: '/components/divider',
      label: 'Divider',
    },
    {
      path: '/components/fab',
      label: 'FAB',
    },
    {
      path: '/components/icon',
      label: 'Icon',
    },
    {
      path: '/components/icon-button',
      label: 'Icon button',
    },
    {
      path: '/components/list',
      label: 'List',
    },
    {
      path: '/components/top-app-bar',
      label: 'Top app bar',
    },
  ];
}
</script>

<style lang="less">
// variables (Less)
@import "~@/assets/css/variables/_state.less";

// variables (CSS)
@import "~@/assets/css/variables/layout-grid.less";
@import "~@/assets/css/variables/theme.less";

// styles
@import "~@/assets/css/styles/elevation.less";
@import "~@/assets/css/styles/surface.less";
@import "~@/assets/css/styles/typography.less";

.lbzui-square {
  display: inline-block;
  margin: 0 16px 16px 0;
  width: 180px;
  height: 180px;
  line-height: 180px;
  text-align: center;
  .lbz-surface--1();
}

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
    border-right: 1px solid var(--lbz-theme-outline-on-surface);
    width: 256px;
    .lbz-surface--16();

    h1 {
      margin: 0;
      padding: 14px var(--lbz-layout-grid-margin);
      .lbz-typography--h4();
      color: var(--lbz-theme-text-high-emphasis-on-surface);
      cursor: pointer;
    }

    .lbz-list {
      margin: 0 8px;

      .lbz-list-item {
        border-radius: 4px;
        .lbz-typography--subtitle2();
      }
    }
  }

  & &__main {
    flex: 1;
    overflow: auto;

    .lbzui__main__container {
      box-sizing: border-box;
      padding: var(--lbz-layout-grid-margin);
      min-width: calc(360px + 2 * var(--lbz-layout-grid-margin));
      min-height: 100%;
    }

    .lbz-typography--h5 {
      color: var(--lbz-theme-text-high-emphasis-on-surface);
    }
  }
}
</style>
