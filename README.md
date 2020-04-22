# @lbzui/vue

[![npm version](https://img.shields.io/npm/v/@lbzui/vue)](https://www.npmjs.com/package/@lbzui/vue)
[![npm monthly downloads](https://img.shields.io/npm/dm/@lbzui/vue)](https://www.npmjs.com/package/@lbzui/vue)
[![npm downloads](https://img.shields.io/npm/dt/@lbzui/vue)](https://www.npmjs.com/package/@lbzui/vue)
[![npm license](https://img.shields.io/npm/l/@lbzui/vue)](https://github.com/lbzui/vue/blob/master/LICENSE)

> Material Components for Vue.js

@lbzui/vue is now available in [BETA](https://github.com/lbzui/vue/projects/1), but you can read in more depth on [API documentation](https://github.com/lbzui/vue/projects/2) and [documentation website](https://lbzui-vue.lanbizhong.com/) to develop.

If you have any questions, ideas or you want to discuss with it, [create an issue](https://github.com/lbzui/vue/issues/new) or email to lbz_ui@163.com.

## Features

- Follow the principles of [Material Design](https://material.io/)
- Support [Light](https://material.io/design/color/the-color-system.html) and [Dark](https://material.io/design/color/dark-theme.html) theme, and easily adapt darkened UIs to dark theme
- Customize [Layout grid](https://material.io/design/layout/responsive-layout-grid.html), [Shape](https://material.io/design/shape/about-shape.html#shape-customization-tool), [Theme](https://material.io/resources/color/), and more
- Fit Responsive Web Design (desktop first)
- Use [Vue.js](https://vuejs.org/) (2.6.0+), [TypeScript](http://www.typescriptlang.org/), [Less.js](http://lesscss.org/) (3.5.0+), [PostCSS](https://postcss.org/), etc
- Compatible with [SSR](https://ssr.vuejs.org/) (Server-Side Rendering)
- Enable [`<router-link>`](https://router.vuejs.org/api/#router-link-props) and custom tag of Components

## Usage

### Using via CDN

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>hello-world</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons&display=block">
    <link rel="stylesheet" href="https://unpkg.com/@lbzui/vue/lib/lbzui.css">
  </head>
  <body>
    <div id="app">
      <lbz-button icon="favorite" @click.stop="fclick">Hello world</lbz-button>
    </div>
    <script src="https://unpkg.com/vue@2.6.11"></script>
    <script src="https://unpkg.com/@lbzui/vue"></script>
    <script>
      new Vue({
        el: '#app',
        methods: {
          fclick(e) { alert('Hello @lbzui/vue!') }
        }
      })
    </script>
  </body>
</html>
```

### Using via NPM

Install:

```bash
# npm
npm i @lbzui/vue -S

# or yarn
yarn add @lbzui/vue
```

Then import:

```js
import '@lbzui/vue/lib/lbzui.css'
import LBZUI from '@lbzui/vue'

Vue.use(LBZUI, {
  dense: false,
  ripple: true
})
```

Use components like Button:

```vue
<template>
  <lbz-button @click.stop="fclick">Hello world</lbz-button>
</template>

<script>
export default {
  name: 'hello-world',
  methods: {
    fclick(e) { alert('Hello @lbzui/vue!') }
  }
}
</script>
```

> Jumpstart a new project? Please visit:
>- [Using @lbzui/vue in Vue.js](/README.VUE.md)
>- [Using @lbzui/vue in Nuxt.js](/README.NUXT.md)

## Browser support

@lbzui/vue supports all [modern browsers](https://browserl.ist/?q=%3E%3D+1%25) (IE: **Layout grid** works unfriendly, and **Dark theme** does not supported).

May work in other browsers but it's untested.

## Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/lbzui/vue/releases).

## LICENSE

[MIT](/LICENSE)

Copyright (c) 2019-present [LAN Bizhong](https://lanbizhong.com/)
