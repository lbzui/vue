# Using @lbzui/vue in Nuxt.js

## Step 1: Create a new project via [Create Nuxt App](https://github.com/nuxt/create-nuxt-app)

```bash
# npm
npx create-nuxt-app <project-name>

# or yarn
yarn create nuxt-app <project-name>
```

...

## Step 2: Install @lbzui/vue in your project

```bash
# npm
npm i @lbzui/vue -S

# or yarn
yarn add @lbzui/vue
```

## Step 3: Import @lbzui/vue in your code

```js
// plugins/lbzui.js
import Vue from 'vue'
import LBZUI from '@lbzui/vue'

Vue.use(LBZUI, {
  dense: false,
  ripple: true
})
```

Or use individual components (recommended):

```ts
import Vue from 'vue'
import {
  Backdrop,
  Button,
  Card,
  Checkbox,
  Dialog,
  Divider,
  Drawer,
  EmptyState,
  FAB,
  Icon,
  IconButton,
  List,
  ListItem,
  Radio,
  Snackbar,
  State,
  Switch,
  Tab,
  TabItem,
  TopAppBar
} from '@lbzui/vue'

Vue.prototype.$lbzui = {
  dense: false,
  ripple: true
}

Vue.use(Backdrop)
Vue.use(Button)
Vue.use(Card)
Vue.use(Checkbox)
Vue.use(Dialog)
Vue.use(Divider)
Vue.use(Drawer)
Vue.use(EmptyState)
Vue.use(FAB)
Vue.use(Icon)
Vue.use(IconButton)
Vue.use(List)
Vue.use(ListItem)
Vue.use(Radio)
Vue.use(State)
Vue.use(Switch)
Vue.use(Tab)
Vue.use(TabItem)
Vue.use(TopAppBar)

Vue.prototype.$lbzSnackbar = Snackbar
```

Add CSS resource and components in `nuxt.config.js`:

```js
export default {
  css: ['@lbzui/vue/lib/lbzui.css'],

  plugins: ['~/plugins/lbzui.js'],

  router: {
    // Globally configure `<router-link>` default active class for exact matches
    linkExactActiveClass: 'lbz-is-activated'
  }
}
```

## Step 4: Build a Material theme

> NOTE: If you just want to use the compiled CSS, you can skip to [Step 5](#step-5-use-components-like-button).

Create your own Material theme by customizing values for [Layout grid](https://material.io/design/layout/responsive-layout-grid.html), [Shape](https://material.io/design/shape/about-shape.html#shape-customization-tool), [Theme](https://material.io/resources/color/), and more.

Install devDependencies:

```bash
# npm
## Less (3.5.0+)
npm i less less-loader -D
npm i @nuxtjs/style-resources -D

## CSS resets
npm i normalize.css -D

## convert pixel units to rem units (optional)
npm i postcss-pxtorem -D

# or yarn
yarn add less less-loader @nuxtjs/style-resources normalize.css postcss-pxtorem --dev
```

Import CSS source code in `assets/css/lbzui/index.less`:

```less
@import "normalize.css";

/*! ~@lbzui/vue v0.5.2 | MIT License | https://github.com/lbzui/vue */
body {
  background-color: var(--lbz-theme-background);
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  -webkit-tap-highlight-color: transparent;

  // lock-body-scroll
  &.lbz-is-locked {
    overflow: hidden;
  }
}

a {
  text-decoration: none;
  color: var(--lbz-theme-primary);
  outline: none;
}

::selection {
  color: var(--lbz-theme-text-high-emphasis-on-secondary);
  background-color: var(--lbz-theme-secondary);
}

// Variables
@import "~@lbzui/vue/src/assets/css/variables/layout-grid.less";
@import "~@lbzui/vue/src/assets/css/variables/shape.less";
@import "~@lbzui/vue/src/assets/css/variables/surface.less";
@import "~@lbzui/vue/src/assets/css/variables/theme.less";

// Utilities
@import "~@lbzui/vue/src/assets/css/utilities/aspect-ratio.less";
@import "~@lbzui/vue/src/assets/css/utilities/clearfix.less";
@import "~@lbzui/vue/src/assets/css/utilities/elevation.less";
@import "~@lbzui/vue/src/assets/css/utilities/layout-grid.less";
@import "~@lbzui/vue/src/assets/css/utilities/surface.less";
@import "~@lbzui/vue/src/assets/css/utilities/truncate.less";
@import "~@lbzui/vue/src/assets/css/utilities/typography.less";

// Components
@import "~@lbzui/vue/src/assets/css/components/backdrop.less";
@import "~@lbzui/vue/src/assets/css/components/button.less";
@import "~@lbzui/vue/src/assets/css/components/card.less";
@import "~@lbzui/vue/src/assets/css/components/checkbox.less";
@import "~@lbzui/vue/src/assets/css/components/dialog.less";
@import "~@lbzui/vue/src/assets/css/components/divider.less";
@import "~@lbzui/vue/src/assets/css/components/drawer.less";
@import "~@lbzui/vue/src/assets/css/components/empty-state.less";
@import "~@lbzui/vue/src/assets/css/components/fab.less";
@import "~@lbzui/vue/src/assets/css/components/icon.less";
@import "~@lbzui/vue/src/assets/css/components/icon-button.less";
@import "~@lbzui/vue/src/assets/css/components/list.less";
@import "~@lbzui/vue/src/assets/css/components/list-item.less";
@import "~@lbzui/vue/src/assets/css/components/radio.less";
@import "~@lbzui/vue/src/assets/css/components/snackbar.less";
@import "~@lbzui/vue/src/assets/css/components/state.less";
@import "~@lbzui/vue/src/assets/css/components/switch.less";
@import "~@lbzui/vue/src/assets/css/components/tab.less";
@import "~@lbzui/vue/src/assets/css/components/tab-item.less";
@import "~@lbzui/vue/src/assets/css/components/top-app-bar.less";
```

Add some configurations in `nuxt.config.js`:

```js
export default {
  css: ['~assets/css/lbzui/index.less'],

  buildModules: ['@nuxtjs/style-resources'],

  styleResources: {
    less: [
      // variables
      // './node_modules/@lbzui/vue/src/assets/css/variables/_*.less',

      './node_modules/@lbzui/vue/src/assets/css/variables/_elevation.less',
      // './node_modules/@lbzui/vue/src/assets/css/variables/_layout-grid.less',
      './assets/css/lbzui/_layout-grid.less',
      './node_modules/@lbzui/vue/src/assets/css/variables/_motion.less',
      // './node_modules/@lbzui/vue/src/assets/css/variables/_shape.less',
      './assets/css/lbzui/_shape.less',
      './node_modules/@lbzui/vue/src/assets/css/variables/_state.less',
      './node_modules/@lbzui/vue/src/assets/css/variables/_surface.less',
      // './node_modules/@lbzui/vue/src/assets/css/variables/_theme.less',
      './assets/css/lbzui/_theme.less',

      // mixins
      './node_modules/@lbzui/vue/src/assets/css/utilities/_*.less'
    ]
  },

  build: {
    transpile: ['@lbzui/vue'],
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        'postcss-pxtorem': {
          unitPrecision: 8,
          propList: ['font', 'font-size', 'line-height']
        }
      },
      preset: {
        // Change the postcss-preset-env settings
        stage: 3,
        autoprefixer: {
          flexbox: 'no-2009',
          grid: 'no-autoplace'
        },
        importFrom: ['./assets/css/lbzui/variables.css']
      }
    }
  }
}
```

## Step 5: Use components like Button

```vue
<template>
  <lbz-button @click.stop="fclick">Hello world</lbz-button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    fclick(e: MouseEvent): void {
      alert('Hello @lbzui/vue!')
    }
  }
}
</script>
```

All examples? Please view [code examples](/tree/master/docs/views) for details.

## Step 6: Optionally import [Roboto font](https://fonts.google.com/specimen/Roboto) and [Material Icons](https://material.io/resources/icons/) from Google CDN

```js
// nuxt.config.js
export default {
  head: {
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Material+Icons&display=block'
      }
    ]
  }
}
```
