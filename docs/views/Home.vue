<template>
  <article class="lbzui-home">
    <h2 class="lbz-typography--h4">@lbzui/vue<span class="lbz-typography--subtitle1">Material Components for Vue.js</span></h2>

    <p class="lbz-typography--body2">
      <a href="https://www.npmjs.com/package/@lbzui/vue" target="_blank">
        <img src="https://img.shields.io/npm/v/@lbzui/vue" alt="npm version">
      </a>
      <a href="https://www.npmjs.com/package/@lbzui/vue" target="_blank">
        <img src="https://img.shields.io/npm/dm/@lbzui/vue" alt="npm monthly downloads">
      </a>
      <a href="https://www.npmjs.com/package/@lbzui/vue" target="_blank">
        <img src="https://img.shields.io/npm/dt/@lbzui/vue" alt="npm downloads">
      </a>
      <a href="https://github.com/lbzui/vue/blob/master/LICENSE" target="_blank">
        <img src="https://img.shields.io/npm/l/@lbzui/vue" alt="npm license">
      </a>
      <a href="https://github.com/lbzui/vue" target="_blank">
        <img src="https://img.shields.io/github/stars/lbzui/vue" alt="GitHub stars">
      </a>
      <a href="https://github.com/lbzui/vue" target="_blank">
        <img src="https://img.shields.io/github/forks/lbzui/vue" alt="GitHub forks">
      </a>
    </p>

    <p class="lbz-typography--body1">@lbzui/vue is now available in <a href="https://github.com/lbzui/vue/projects/1" target="_blank">BETA</a><lbz-icon>open_in_new</lbz-icon>, but you can read in more depth on <a href="https://github.com/lbzui/vue/projects/2" target="_blank">API documentation</a><lbz-icon>open_in_new</lbz-icon> and this documentation website to develop.</p>
    <p class="lbz-typography--body1">If you have any questions, ideas or you want to discuss with it, <a href="https://github.com/lbzui/vue/issues/new" target="_blank">create an issue</a><lbz-icon>open_in_new</lbz-icon> or email to <a href="mailto:lbz_ui@163.com">lbz_ui@163.com</a>.</p>

    <h2 class="lbz-typography--h5"># Features</h2>

    <p class="lbz-typography--body1">- Follow the principles of <a href="https://material.io/" target="_blank">Material Design</a><lbz-icon>open_in_new</lbz-icon></p>
    <p class="lbz-typography--body1">- Support <a href="https://material.io/design/color/the-color-system.html" target="_blank">light</a><lbz-icon>open_in_new</lbz-icon> and <a href="https://material.io/design/color/dark-theme.html" target="_blank">dark</a><lbz-icon>open_in_new</lbz-icon> theme</p>
    <p class="lbz-typography--body1">- Customize <a href="https://material.io/design/layout/responsive-layout-grid.html" target="_blank">layout grid</a><lbz-icon>open_in_new</lbz-icon>, <a href="https://material.io/design/shape/about-shape.html#shape-customization-tool" target="_blank">shape</a><lbz-icon>open_in_new</lbz-icon>, <a href="https://material.io/resources/color/" target="_blank">theme</a><lbz-icon>open_in_new</lbz-icon>, and more</p>
    <p class="lbz-typography--body1">- Fit responsive web design (desktop first)</p>
    <p class="lbz-typography--body1">- Use <a href="https://vuejs.org/" target="_blank">Vue</a><lbz-icon>open_in_new</lbz-icon> (2.6.0+), <a href="http://www.typescriptlang.org/" target="_blank">TypeScript</a><lbz-icon>open_in_new</lbz-icon>, <a href="http://lesscss.org/" target="_blank">Less</a><lbz-icon>open_in_new</lbz-icon> (3.5.0+), <a href="https://postcss.org/" target="_blank">PostCSS</a><lbz-icon>open_in_new</lbz-icon>, etc</p>

    <h2 class="lbz-typography--h5"># Quick start</h2>

    <p class="lbz-typography--body1">Read GitHub <a href="https://github.com/lbzui/vue#quick-start" target="_blank">README.md</a><lbz-icon>open_in_new</lbz-icon> for more information on how to use @lbzui/vue in your own project.</p>

    <h2 class="lbz-typography--h5"># Browser support</h2>

    <p class="lbz-typography--body1">@lbzui/vue supports <a href="https://browserl.ist/?q=%3E%3D+1%25" target="_blank">all modern browsers</a><lbz-icon>open_in_new</lbz-icon> and IE 10+ (<strong>Layout grid</strong> works unfriendly, and <strong>Dark theme</strong> does not supported).</p>
    <p class="lbz-typography--body1">May work in other browsers but it's untested.</p>

    <h2 class="lbz-typography--h5"># Changelog</h2>

    <p class="lbz-typography--body1">Detailed changes for each release are documented in the <a href="https://github.com/lbzui/vue/releases" target="_blank">release notes</a><lbz-icon>open_in_new</lbz-icon>.</p>

    <h2 class="lbz-typography--h5"># LICENSE</h2>

    <p class="lbz-typography--body1"><a href="https://github.com/lbzui/vue/blob/master/LICENSE" target="_blank">MIT</a><lbz-icon>open_in_new</lbz-icon></p>
    <p class="lbz-typography--body1">Copyright (c) 2019-present <a href="https://lanbizhong.com/" target="_blank">LAN Bizhong</a><lbz-icon>open_in_new</lbz-icon></p>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>
