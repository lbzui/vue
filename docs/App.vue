<template>
  <div class="lbzui">
    <lbz-drawer
      class="lbzui__drawer"
      :active.sync="vactive"
      role="navigation"
      subtitle="Material Components for Vue.js"
    >
      <template #start>
        <router-link
          class="lbz-drawer__title"
          to="/"
          tag="h1"
          exact
        >@lbzui/vue</router-link>
      </template>
      <template #center>
        <lbz-list
          tag="nav"
          router-link
          :router-link-props="{ exact: true }"
          item-tag="a"
        >
          <lbz-divider/>
          <lbz-list-item to="/">Getting started</lbz-list-item>
          <lbz-divider/>
          <span class="lbz-list__subtitle">Styles</span>
          <lbz-list-item
            v-for="item of NAV.styles"
            :key="item.path"
            :to="item.path"
          >{{ item.label }}</lbz-list-item>
          <lbz-divider/>
          <span class="lbz-list__subtitle">Components</span>
          <lbz-list-item
            v-for="item of NAV.components"
            :key="item.path"
            :to="item.path"
          >{{ item.label }}</lbz-list-item>
          <lbz-divider/>
          <span class="lbz-list__subtitle">Useful links</span>
          <lbz-list-item
            v-for="item of NAV.links"
            :key="item.path"
            :router-link="false"
            :href="item.path"
            target="_blank"
          >
            <template #center>{{ item.label }}</template>
            <template #end><lbz-icon>open_in_new</lbz-icon></template>
          </lbz-list-item>
          <lbz-divider/>
          <span class="lbz-list__subtitle">Choose theme (non-IE)</span>
          <lbz-list-item
            :router-link="false"
            tag="span"
            disabled
            style="padding: 0;"
          >
          <lbz-radio
            v-model="visDark"
            id="light-theme"
            name="light-theme"
            :value="false"
            :disabled="!vsupportsCssVars"
            @change="fsetTheme"
          >Light</lbz-radio>
          <lbz-radio
            v-model="visDark"
            id="dark-theme"
            name="dark-theme"
            :value="true"
            :disabled="!vsupportsCssVars"
            @change="fsetTheme"
          >Dark</lbz-radio>
        </lbz-list-item>
        </lbz-list>
      </template>
    </lbz-drawer>
    <main class="lbzui__main" role="main">
      <keep-alive>
        <router-view class="lbzui__main__container"/>
      </keep-alive>
    </main>
    <lbz-fab class="lbzui__fab" @click.stop="vactive = true">menu</lbz-fab>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import {
  supportsCssVars,
  isDarkModeEnabled,
  changeModeHandler,
  setModeAttrs,
  cancelContextmenu,
  lockBodyScroll,
} from '@/utils/funcs';

@Component
export default class App extends Vue {
  private NAV: object = {
    styles: [
      {
        path: '/styles/elevation',
        label: 'Elevation',
      },
      {
        path: '/styles/layout-grid',
        label: 'Layout grid',
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
    ],
    components: [
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
        path: '/components/drawer',
        label: 'Drawer',
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
        path: '/components/state',
        label: 'State',
      },
      {
        path: '/components/tab',
        label: 'Tab',
      },
      {
        path: '/components/top-app-bar',
        label: 'Top app bar',
      },
    ],
    links: [
      {
        path: 'https://github.com/lbzui/vue',
        label: 'GitHub repo',
      },
      {
        path: 'https://github.com/lbzui/vue/tree/master/docs/views',
        label: 'Code examples',
      },
      {
        path: 'https://github.com/orgs/lbzui/projects/1',
        label: 'LBZUI board',
      },
      {
        path: 'https://github.com/lbzui/vue/projects/1',
        label: '@lbzui/vue board',
      },
      // {
      //   path: 'https://github.com/lbzui/vue/issues',
      //   label: 'Issues',
      // },
      // {
      //   path: 'https://github.com/lbzui/vue/blob/master/CHANGELOG.md',
      //   label: 'Changelog',
      // },
      {
        path: 'https://material.io/',
        label: 'Material Design',
      },
      {
        path: 'https://material.io/resources/color/',
        label: 'Material Color Tool',
      },
      {
        path: 'https://material.io/resources/icons/',
        label: 'Material Icons',
      },
    ],
  };

  private vsupportsCssVars: boolean = supportsCssVars();
  private visDark: boolean = false;
  private vwidth: number = 0;
  private vactive: boolean = true;

  @Watch('$route.name')
  private frouteChanged(val: string, oldVal: string): void {
    this.fcloseDrawer();
  }

  @Watch('vactive')
  private factiveChanged(val: boolean, oldVal: boolean): void {
    lockBodyScroll(this.vwidth <= 719 && val);
  }

  private created(): void {
    cancelContextmenu();

    if (this.vsupportsCssVars) {
      this.fchangeMode();
      changeModeHandler((): void => {
        this.fchangeMode();
      });
    }

    this.fresize(document.body.clientWidth);
    window.addEventListener('resize', (): void => {
      this.fresize(document.body.clientWidth);
    });
  }

  private fcloseDrawer(): void {
    if (this.vwidth <= 719) {
      this.vactive = false;
    }
  }

  private fchangeMode(): void {
    const isDark: boolean = isDarkModeEnabled();

    this.visDark = isDark;
    this.fsetTheme(isDark);
  }

  private fresize(val: number): void {
    const isGt719: boolean = val > 719;

    if (isGt719 && this.vactive) {
      lockBodyScroll(!isGt719);
    }
    this.vwidth = val;
    this.vactive = isGt719;
  }

  private fsetTheme(val: boolean, e?: MouseEvent): void {
    setModeAttrs(val, {
      light: '#3700b3',
      dark: '#000',
    });
    this.fcloseDrawer();
  }
}
</script>

<style lang="less">
@import "./assets/css/index.less";
</style>
