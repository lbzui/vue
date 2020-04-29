# Using @lbzui/vue in Vue.js

## Step 1: Create a new project via [Vue CLI](https://cli.vuejs.org/)

```bash
# npm
npm i @vue/cli -g

# or yarn
yarn global add @vue/cli

# in Windows, run `winpty vue.cmd create <project-name>`
vue add <project-name>
```

> NOTE: Build a Material theme? Please pick `Less` CSS pre-processor!

## Step 2: Install @lbzui/vue in your project

```bash
# npm
npm i @lbzui/vue -S

# or yarn
yarn add @lbzui/vue
```

## Step 3: Import @lbzui/vue in your code

```ts
// src/main.ts
import '@lbzui/vue/lib/lbzui.css'
import LBZUI from '@lbzui/vue'

Vue.use(LBZUI, {
  dense: false,
  ripple: true
})
```

Or use individual components (recommended):

```ts
// src/main.ts
import '@lbzui/vue/lib/lbzui.css'
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

Globally configure `<router-link>` default active class for exact matches:

```ts
// src/router/index.ts
const router = new VueRouter({
  linkExactActiveClass: 'lbz-is-activated'
})
```

## Step 4: Build a Material theme

> NOTE: If you just want to use the compiled CSS, you can skip to [Step 5](#step-5-use-components-like-button).

Create your own Material theme by customizing values for [Layout grid](https://material.io/design/layout/responsive-layout-grid.html), [Shape](https://material.io/design/shape/about-shape.html#shape-customization-tool), [Theme](https://material.io/resources/color/), and more.

Install devDependencies:

```bash
# npm
## upgrade Less to 3.5.0+
npm i less@latest -D

## convert modern CSS
npm i postcss-preset-env -D

## convert pixel units to rem units (optional)
npm i postcss-pxtorem -D

# or yarn
yarn add less postcss-preset-env postcss-pxtorem --dev

# in Windows, run `winpty vue.cmd add style-resources-loader`
vue add style-resources-loader
```

Import CSS resources in `src/assets/css/lbzui/index.less`:

```less
@import '~normalize.css';

// all:
// @import '~@lbzui/vue/src/assets/css/index.less';

// or individual (recommended):
@import '~@lbzui/vue/src/assets/css/base.less';

@import '~@lbzui/vue/src/assets/css/utilities/aspect-ratio.less';
@import '~@lbzui/vue/src/assets/css/utilities/clearfix.less';
@import '~@lbzui/vue/src/assets/css/utilities/elevation.less';
@import '~@lbzui/vue/src/assets/css/utilities/layout-grid.less';
@import '~@lbzui/vue/src/assets/css/utilities/surface.less';
@import '~@lbzui/vue/src/assets/css/utilities/truncate.less';
@import '~@lbzui/vue/src/assets/css/utilities/typography.less';

@import '~@lbzui/vue/src/assets/css/components/backdrop.less';
@import '~@lbzui/vue/src/assets/css/components/button.less';
@import '~@lbzui/vue/src/assets/css/components/card.less';
@import '~@lbzui/vue/src/assets/css/components/checkbox.less';
@import '~@lbzui/vue/src/assets/css/components/dialog.less';
@import '~@lbzui/vue/src/assets/css/components/divider.less';
@import '~@lbzui/vue/src/assets/css/components/drawer.less';
@import '~@lbzui/vue/src/assets/css/components/empty-state.less';
@import '~@lbzui/vue/src/assets/css/components/fab.less';
@import '~@lbzui/vue/src/assets/css/components/icon.less';
@import '~@lbzui/vue/src/assets/css/components/icon-button.less';
@import '~@lbzui/vue/src/assets/css/components/list.less';
@import '~@lbzui/vue/src/assets/css/components/list-item.less';
@import '~@lbzui/vue/src/assets/css/components/radio.less';
@import '~@lbzui/vue/src/assets/css/components/snackbar.less';
@import '~@lbzui/vue/src/assets/css/components/state.less';
@import '~@lbzui/vue/src/assets/css/components/switch.less';
@import '~@lbzui/vue/src/assets/css/components/tab.less';
@import '~@lbzui/vue/src/assets/css/components/tab-item.less';
@import '~@lbzui/vue/src/assets/css/components/top-app-bar.less';
```

Then import it in `src/main.ts`:

```ts
import './assets/css/lbzui/index.less'
```

Prepend variables and mixins to all less files in `vue.config.js`:

```js
const path = require('path')

const LBZUI_CSS_PATH = 'node_modules/@lbzui/vue/src/assets/css/'

function resolve (dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // variables
        // resolve(`${LBZUI_CSS_PATH}variables/_*.less`),

        resolve(`${LBZUI_CSS_PATH}variables/_elevation.less`),
        // resolve(`${LBZUI_CSS_PATH}variables/_layout-grid.less`),
        resolve('src/assets/css/lbzui/_layout-grid.less'), // your custom layout grid
        resolve(`${LBZUI_CSS_PATH}variables/_motion.less`),
        // resolve(`${LBZUI_CSS_PATH}variables/_shape.less`),
        resolve('src/assets/css/lbzui/_shape.less'), // your custom shape
        resolve(`${LBZUI_CSS_PATH}variables/_state.less`),
        resolve(`${LBZUI_CSS_PATH}variables/_surface.less`),
        // resolve(`${LBZUI_CSS_PATH}variables/_theme.less`),
        resolve('src/assets/css/lbzui/_theme.less'), // your custom theme
        resolve(`${LBZUI_CSS_PATH}variables/_variables.less`),

        // mixins
        resolve(`${LBZUI_CSS_PATH}utilities/_*.less`)
      ]
    }
  }
}
```

Use PostCSS plugins to convert CSS in `package.json` or `postcss.config.js`:

```json
// package.json (if you prefer placing config in package.json)
"postcss": {
  "plugins": {
    "postcss-preset-env": {
      "stage": 3,
      "autoprefixer": {
        "flexbox": "no-2009",
        "grid": "no-autoplace"
      },
      "importFrom": [
        "src/assets/css/lbzui/variables.css"
      ]
    },
    "postcss-pxtorem": {
      "unitPrecision": 8,
      "propList": [
        "font",
        "font-size",
        "line-height"
      ]
    }
  }
},
```

```js
// postcss.config.js (if you prefer placing config in dedicated config files)
module.exports = {
  plugins: {
    // https://github.com/csstools/postcss-preset-env#options
    'postcss-preset-env': {
      stage: 3,
      autoprefixer: {
        flexbox: 'no-2009',
        grid: 'no-autoplace'
      },
      importFrom: [
        // 'node_modules/@lbzui/vue/src/assets/css/variables/variables.css'
        'src/assets/css/lbzui/variables.css' // your custom CSS Variables
      ]
    },
    // https://github.com/cuth/postcss-pxtorem#options
    'postcss-pxtorem': {
      unitPrecision: 8,
      propList: [
        'font',
        'font-size',
        'line-height'
      ]
    }
  }
}
````

## Step 5: Use components like Button

```vue
<template>
  <lbz-button @click.stop="fclick">Hello world</lbz-button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HelloWorld',
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

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons&display=block">
```
