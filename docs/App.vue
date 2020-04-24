<template>
  <div class="lbzui">
    <lbz-drawer
      ref="drawer"
      class="lbzui__drawer"
      :active.sync="vactive"
      role="navigation"
      subtitle="Material Components for Vue.js"
    >
      <template #start>
        <h1 class="lbz-drawer__title" @click.stop="freload">@lbzui/vue</h1>
      </template>
      <template #append>
        <lbz-divider/>
      </template>
      <template #center>
        <lbz-list
          tag="nav"
          router-link
          :router-link-props="{ exact: true }"
          item-tag="a"
          nav
        >
          <lbz-list-item to="/">Home</lbz-list-item>
          <lbz-list-item to="/customization">Customization</lbz-list-item>
          <lbz-divider/>
          <span class="lbz-list__subheader">Components</span>
          <lbz-list-item
            v-for="item of NAV.components"
            :key="item.path"
            :to="item.path"
          >{{ item.label }}</lbz-list-item>
          <lbz-divider/>
          <span class="lbz-list__subheader">Utilities</span>
          <lbz-list-item
            v-for="item of NAV.utilities"
            :key="item.path"
            :to="item.path"
          >{{ item.label }}</lbz-list-item>
          <lbz-divider/>
          <span class="lbz-list__subheader">Useful links</span>
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
        </lbz-list>
      </template>
      <template #end>
        <lbz-divider/>
        <lbz-list nav :ripple="false">
          <lbz-list-item class="lbz-state-no-before--child" :disabled="!vsupportsCssVars">
            <template #center>Dark theme (non-IE)</template>
            <template #end>
              <lbz-switch
                v-model="visDark"
                id="visDark"
                color="primary"
                :disabled="!vsupportsCssVars"
                @change="fsetTheme"
              />
            </template>
          </lbz-list-item>
        </lbz-list>
      </template>
    </lbz-drawer>
    <main class="lbzui__main" role="main">
      <transition name="lbzui__main__container">
        <keep-alive :max="10">
          <router-view class="lbzui__main__container"/>
        </keep-alive>
      </transition>
    </main>
    <lbz-fab class="lbzui__fab" @click.stop="vactive = true">menu</lbz-fab>
  </div>
</template>

<script lang="ts">
import { Component, Ref, Watch, Vue } from 'vue-property-decorator';
import {
  lbzfCancelContextmenu,
  lbzfChangeModeHandler,
  lbzfIsDarkModeEnabled,
  lbzfIsMobileBreakpoint,
  lbzfSetModeAttributes,
  lbzfSupportsCssVariables,
} from '@/utils/funcs';

@Component
export default class App extends Vue {
  @Ref('drawer') private rdrawer!: HTMLFormElement;

  private NAV: object = {
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
        path: '/components/checkbox',
        label: 'Checkbox',
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
        label: 'FAB (floating action button)',
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
        path: '/components/snackbar',
        label: 'Snackbar',
      },
      {
        path: '/components/state',
        label: 'State',
      },
      {
        path: '/components/switch',
        label: 'Switch',
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
    utilities: [
      {
        path: '/utilities/aspect-ratio',
        label: 'Aspect ratio',
      },
      {
        path: '/utilities/clearfix',
        label: 'Clearfix',
      },
      {
        path: '/utilities/elevation',
        label: 'Elevation',
      },
      {
        path: '/utilities/layout-grid',
        label: 'Layout grid',
      },
      {
        path: '/utilities/surface',
        label: 'Surface',
      },
      {
        path: '/utilities/truncate',
        label: 'Truncate',
      },
      {
        path: '/utilities/typography',
        label: 'Typography',
      },
    ],
    links: [
      {
        path: 'https://github.com/lbzui/vue',
        label: 'GitHub repo',
      },
      {
        path: 'https://github.com/lbzui/vue/projects/2',
        label: 'API documentation',
      },
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

  private vactive: boolean = !lbzfIsMobileBreakpoint();
  private vsupportsCssVars: boolean = lbzfSupportsCssVariables();
  private visDark: boolean = false;

  @Watch('$route.name')
  private frouteChanged(val: string, oldVal: string): void {
    if (this.rdrawer.visMobile) {
      this.rdrawer.fclose();
    }
  }

  private created(): void {
    lbzfCancelContextmenu();

    if (this.vsupportsCssVars) {
      this.fchangeMode();
      lbzfChangeModeHandler(this.fchangeMode);
    }
  }

  private freload(): void {
    window.location.reload();
  }

  private fchangeMode(): void {
    const isDark: boolean = lbzfIsDarkModeEnabled();

    this.visDark = isDark;
    this.fsetTheme(isDark);
  }

  private fsetTheme(val: boolean, e?: MouseEvent): void {
    lbzfSetModeAttributes(val, {
      light: '#3700b3',
      dark: '#000',
    });

    if (val && !e) {
      this.$lbzSnackbar('Dark Mode is enabled on your device.');
    }
  }
}
</script>

<style lang="less">
@import "./assets/css/index.less";
</style>
