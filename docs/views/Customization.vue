<template>
  <article class="lbzui-customization">
    <h2 class="lbz-typography--h4">Customization</h2>

    <p class="lbz-typography--body1">Create your own Material theme by customizing values for <a href="https://material.io/design/layout/responsive-layout-grid.html" target="_blank" rel="noopener">Layout grid</a><lbz-icon>open_in_new</lbz-icon>, <a href="https://material.io/design/shape/about-shape.html#shape-customization-tool" target="_blank" rel="noopener">Shape</a><lbz-icon>open_in_new</lbz-icon>, <a href="https://material.io/resources/color/" target="_blank" rel="noopener">Theme</a><lbz-icon>open_in_new</lbz-icon>, and more.</p>

    <h3 class="lbz-typography--h5"># Layout grid</h3>

    <lbz-list class="lbzui-rectangle" subheader="Columns, gutters, and margins">
      <lbz-list-item>
        <template #center>#lbz-layout-grid.desktop[column]</template>
        <template #end>12</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-layout-grid.desktop[gutter]</template>
        <template #end>24px</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-layout-grid.desktop[margin]</template>
        <template #end>24px</template>
      </lbz-list-item>
      <lbz-divider/>
      <lbz-list-item>
        <template #center>#lbz-layout-grid.tablet[column]</template>
        <template #end>8</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-layout-grid.tablet[gutter]</template>
        <template #end>16px</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-layout-grid.tablet[margin]</template>
        <template #end>16px</template>
      </lbz-list-item>
      <lbz-divider/>
      <lbz-list-item>
        <template #center>#lbz-layout-grid.mobile[column]</template>
        <template #end>4</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-layout-grid.mobile[gutter]</template>
        <template #end>16px</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-layout-grid.mobile[margin]</template>
        <template #end>16px</template>
      </lbz-list-item>
    </lbz-list>

    <h3 class="lbz-typography--h5"># Shape</h3>

    <lbz-list class="lbzui-rectangle" subheader="Sizes">
      <lbz-list-item>
        <template #center>#lbz-shape.size[small]</template>
        <template #end>4px</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-shape.size[medium]</template>
        <template #end>4px</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-shape.size[large]</template>
        <template #end>0</template>
      </lbz-list-item>
    </lbz-list>

    <h3 class="lbz-typography--h5"># Theme</h3>

    <lbz-list class="lbzui-rectangle" subheader="Light theme colors">
      <lbz-list-item>
        <template #center>#lbz-theme.light[primary]</template>
        <template #end>#6200ee</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-theme.light[primary-variant]</template>
        <template #end>#3700b3</template>
      </lbz-list-item>
      <lbz-divider/>
      <lbz-list-item>
        <template #center>#lbz-theme.light[secondary]</template>
        <template #end>#03dac6</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-theme.light[secondary-variant]</template>
        <template #end>#018786</template>
      </lbz-list-item>
      <lbz-divider/>
      <lbz-list-item>
        <template #center>#lbz-theme.light[background]</template>
        <template #end>#fff</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-theme.light[surface]</template>
        <template #end>#fff</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-theme.light[error]</template>
        <template #end>#b00020</template>
      </lbz-list-item>
      <lbz-divider/>
      <lbz-list-item>
        <template #center>#lbz-theme.light[on-primary]</template>
        <template #end>#fff</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-theme.light[on-primary-variant]</template>
        <template #end>#fff</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-theme.light[on-secondary]</template>
        <template #end>#000</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-theme.light[on-secondary-variant]</template>
        <template #end>#000</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-theme.light[on-background]</template>
        <template #end>#000</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-theme.light[on-surface]</template>
        <template #end>#000</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-theme.light[on-error]</template>
        <template #end>#fff</template>
      </lbz-list-item>
    </lbz-list>
    <lbz-list class="lbzui-rectangle" subheader="Dark theme colors">
      <lbz-list-item>
        <template #center>#lbz-theme.dark[primary]</template>
        <template #end>#bb86fc</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-theme.dark[primary-variant]</template>
        <template #end>#3700b3</template>
      </lbz-list-item>
      <lbz-divider/>
      <lbz-list-item>
        <template #center>#lbz-theme.dark[secondary]</template>
        <template #end>#03dac6</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-theme.dark[secondary-variant]</template>
        <template #end>#03dac6</template>
      </lbz-list-item>
      <lbz-divider/>
      <lbz-list-item>
        <template #center>#lbz-theme.dark[background]</template>
        <template #end>#121212</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-theme.dark[surface]</template>
        <template #end>#121212</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-theme.dark[error]</template>
        <template #end>#cf6679</template>
      </lbz-list-item>
      <lbz-divider/>
      <lbz-list-item>
        <template #center>#lbz-theme.dark[on-primary]</template>
        <template #end>#000</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-theme.dark[on-primary-variant]</template>
        <template #end>#fff</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-theme.dark[on-secondary]</template>
        <template #end>#000</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-theme.dark[on-secondary-variant]</template>
        <template #end>#000</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-theme.dark[on-background]</template>
        <template #end>#fff</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-theme.dark[on-surface]</template>
        <template #end>#fff</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-theme.dark[on-error]</template>
        <template #end>#000</template>
      </lbz-list-item>
    </lbz-list>
    <br>
    <lbz-list class="lbzui-rectangle" subheader="Typography and iconography colors">
      <lbz-list-item>
        <template #center>#lbz-theme-text.light[high-emphasis]</template>
        <template #end>#fff</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-theme-text.light[medium-emphasis]</template>
        <template #end>rgba(255, 255, 255, .74)</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-theme-text.light[disabled]</template>
        <template #end>rgba(255, 255, 255, .38)</template>
      </lbz-list-item>
      <lbz-divider/>
      <lbz-list-item>
        <template #center>#lbz-theme-text.dark[high-emphasis]</template>
        <template #end>rgba(0, 0, 0, .87)</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-theme-text.dark[medium-emphasis]</template>
        <template #end>rgba(0, 0, 0, .6)</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-theme-text.dark[disabled]</template>
        <template #end>rgba(0, 0, 0, .38)</template>
      </lbz-list-item>
    </lbz-list>
    <br>
    <lbz-list class="lbzui-rectangle" subheader="Outline colors">
      <lbz-list-item>
        <template #center>#lbz-theme-outline[light]</template>
        <template #end>rgba(255, 255, 255, .12)</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-theme-outline[dark]</template>
        <template #end>rgba(0, 0, 0, .12)</template>
      </lbz-list-item>
    </lbz-list>
    <br>
    <lbz-list class="lbzui-rectangle" subheader="Scrim backgrounds">
      <lbz-list-item>
        <template #center>#lbz-theme-scrim[light]</template>
        <template #end>rgba(255, 255, 255, .5)</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>#lbz-theme-scrim[dark]</template>
        <template #end>rgba(0, 0, 0, .32)</template>
      </lbz-list-item>
    </lbz-list>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Customization extends Vue {}
</script>
