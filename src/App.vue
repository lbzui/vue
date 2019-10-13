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
      <lbz-divider/>
      <lbz-list dense subtitle="Choose theme">
        <lbz-list-item>
          <lbz-radio
            v-model="vtheme"
            id="light"
            name="light"
            value="light"
            @change="fsetTheme"
          >Light</lbz-radio>
          <lbz-radio
            v-model="vtheme"
            id="dark"
            name="dark"
            value="dark"
            @change="fsetTheme"
          >Dark</lbz-radio>
        </lbz-list-item>
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
      path: '/components/dialog',
      label: 'Dialog',
    },
    {
      path: '/components/divider',
      label: 'Divider',
    },
    {
      path: '/components/empty-state',
      label: 'Empty state',
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
      path: '/components/radio',
      label: 'Radio',
    },
    {
      path: '/components/tab',
      label: 'Tab',
    },
    {
      path: '/components/top-app-bar',
      label: 'Top app bar',
    },
  ];
  private vtheme: string = 'light';

  private fsetTheme(val: string, e: MouseEvent) {
    document.documentElement.setAttribute('theme', val);
  }
}
</script>

<style lang="less">
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
  width: 100%;
  height: 100%;
  .lbz-typography--body1();
  color: var(--lbz-theme-text-medium-emphasis-on-surface);

  & &__drawer {
    overflow-x: hidden;
    overflow-y: auto;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    .lbz-elevation--16();
    box-sizing: border-box;
    border-right: 1px solid var(--lbz-theme-outline-on-surface);
    width: 256px;
    .lbz-surface--16();

    h1 {
      margin: 0;
      padding: 14px 16px;
      .lbz-typography--h4();
      color: var(--lbz-theme-text-high-emphasis-on-surface);
      cursor: pointer;
    }

    .lbz-list {
      margin: 0 8px;

      .lbz-list__subtitle {
        padding-right: 8px;
        padding-left: 8px;
        .lbz-typography--body2();
      }

      .lbz-list-item {
        border-radius: 4px;
        padding-right: 8px;
        padding-left: 8px;
        .lbz-typography--subtitle2();

        + .lbz-list-item {
          margin-top: 8px;
        }
      }
    }
  }

  & &__main {
    overflow-x: auto;
    margin-left: 256px;
    min-height: 100%;

    .lbzui__main__container {
      box-sizing: border-box;
      padding: var(--lbz-layout-grid-margin);
      min-width: calc(360px + 2 * var(--lbz-layout-grid-margin));
    }

    .lbz-typography--h5 {
      color: var(--lbz-theme-text-high-emphasis-on-surface);
    }
  }
}
</style>
