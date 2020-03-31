<template>
  <article class="lbzui-components-top-app-bar">
    <h2 class="lbz-typography--h5"># Standard top app bar</h2>

    <h3 class="lbz-typography--subtitle1">$ type: 'standard' (default), 'extended', 'short'</h3>
    <h3 class="lbz-typography--subtitle1">$ fixed: true, false (default)</h3>
    <h3 class="lbz-typography--subtitle1">$ title: '' (default), 'x'</h3>

    <lbz-top-app-bar title="Page title"></lbz-top-app-bar>
    <lbz-top-app-bar title="Page title">
      <template #start>
        <lbz-icon-button on-background="primary" darkened>menu</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar title="Page title">
      <template #start>
        <lbz-icon-button on-background="primary" darkened>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="primary" darkened>share</lbz-icon-button>
        <lbz-icon-button on-background="primary" darkened>search</lbz-icon-button>
        <lbz-icon-button on-background="primary" darkened>more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>

    <h3 class="lbz-typography--subtitle1">$ background (darkened): 'primary' (default), 'secondary', 'background', 'surface', 'light', 'dark', 'transparent'</h3>

    <lbz-top-app-bar title="Page title">
      <template #start>
        <lbz-icon-button on-background="primary" darkened>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="primary" darkened>share</lbz-icon-button>
        <lbz-icon-button on-background="primary" darkened>search</lbz-icon-button>
        <lbz-icon-button on-background="primary" darkened>more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar background="secondary" title="Page title">
      <template #start>
        <lbz-icon-button on-background="secondary" darkened>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="secondary" darkened>share</lbz-icon-button>
        <lbz-icon-button on-background="secondary" darkened>search</lbz-icon-button>
        <lbz-icon-button on-background="secondary" darkened>more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar background="background" title="Page title">
      <template #start>
        <lbz-icon-button>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button>share</lbz-icon-button>
        <lbz-icon-button>search</lbz-icon-button>
        <lbz-icon-button>more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar background="surface" title="Page title">
      <template #start>
        <lbz-icon-button>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button>share</lbz-icon-button>
        <lbz-icon-button>search</lbz-icon-button>
        <lbz-icon-button>more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar background="light" title="Page title">
      <template #start>
        <lbz-icon-button on-background="light" darkened>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="light" darkened>share</lbz-icon-button>
        <lbz-icon-button on-background="light" darkened>search</lbz-icon-button>
        <lbz-icon-button on-background="light" darkened>more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar background="dark" title="Page title">
      <template #start>
        <lbz-icon-button on-background="dark" darkened>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="dark" darkened>share</lbz-icon-button>
        <lbz-icon-button on-background="dark" darkened>search</lbz-icon-button>
        <lbz-icon-button on-background="dark" darkened>more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar background="transparent" title="Page title">
      <template #start>
        <lbz-icon-button>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button>share</lbz-icon-button>
        <lbz-icon-button>search</lbz-icon-button>
        <lbz-icon-button>more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>

    <h3 class="lbz-typography--subtitle1">$ dense (desktop only): undefined (default), true, false</h3>

    <lbz-top-app-bar dense title="Page title">
      <template #start>
        <lbz-icon-button on-background="primary" darkened>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="primary" darkened>share</lbz-icon-button>
        <lbz-icon-button on-background="primary" darkened>search</lbz-icon-button>
        <lbz-icon-button on-background="primary" darkened>more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar :dense="false" title="Page title">
      <template #start>
        <lbz-icon-button on-background="primary" darkened>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="primary" darkened>share</lbz-icon-button>
        <lbz-icon-button on-background="primary" darkened>search</lbz-icon-button>
        <lbz-icon-button on-background="primary" darkened>more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>

    <h3 class="lbz-typography--subtitle1">$ elevated: true, false (default)</h3>

    <lbz-top-app-bar elevated title="Page title">
      <template #start>
        <lbz-icon-button on-background="primary" darkened>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="primary" darkened>share</lbz-icon-button>
        <lbz-icon-button on-background="primary" darkened>search</lbz-icon-button>
        <lbz-icon-button on-background="primary" darkened>more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>

    <h3 class="lbz-typography--subtitle1">$ inactive (type === 'standard'): '' (default), 'scroll-off', 'tab-fixed'</h3>

    <lbz-radio v-model="vinactive" value="active">Active</lbz-radio>
    <lbz-radio v-model="vinactive" value="scroll-off">Scroll-off</lbz-radio>
    <lbz-radio v-model="vinactive" value="tab-fixed">Tab-fixed</lbz-radio>
    <br>
    <div class="lbzui-rectangle">
      <lbz-top-app-bar :inactive="vinactive" title="Page title">
        <template #start>
          <lbz-icon-button on-background="primary" darkened>menu</lbz-icon-button>
        </template>
        <template #end>
          <lbz-icon-button on-background="primary" darkened>share</lbz-icon-button>
          <lbz-icon-button on-background="primary" darkened>search</lbz-icon-button>
          <lbz-icon-button on-background="primary" darkened>more_vert</lbz-icon-button>
        </template>
        <template #append>
          <lbz-tab v-model="vtab" on-background="primary">
            <lbz-tab-item
              v-for="(item, index) of 3"
              :key="index"
              :value="index"
            >Item {{ item }}</lbz-tab-item>
          </lbz-tab>
        </template>
      </lbz-top-app-bar>
    </div>

    <h2 class="lbz-typography--h5"># Extended top app bar</h2>

    <h3 class="lbz-typography--subtitle1">$ type: 'standard' (default), 'extended', 'short'</h3>
    <h3 class="lbz-typography--subtitle1">$ fixed: true, false (default)</h3>
    <h3 class="lbz-typography--subtitle1">$ title: '' (default), 'x'</h3>

    <lbz-top-app-bar type="extended" title="Page title"></lbz-top-app-bar>
    <lbz-top-app-bar type="extended" title="Page title">
      <template #start>
        <lbz-icon-button on-background="primary" darkened>menu</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar type="extended" title="Page title">
      <template #start>
        <lbz-icon-button on-background="primary" darkened>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="primary" darkened>share</lbz-icon-button>
        <lbz-icon-button on-background="primary" darkened>search</lbz-icon-button>
        <lbz-icon-button on-background="primary" darkened>more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>

    <h3 class="lbz-typography--subtitle1">$ background (darkened): 'primary' (default), 'secondary', 'background', 'surface', 'light', 'dark', 'transparent'</h3>

    <lbz-top-app-bar type="extended" title="Page title">
      <template #start>
        <lbz-icon-button on-background="primary" darkened>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="primary" darkened>share</lbz-icon-button>
        <lbz-icon-button on-background="primary" darkened>search</lbz-icon-button>
        <lbz-icon-button on-background="primary" darkened>more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar
      type="extended"
      background="secondary"
      title="Page title"
    >
      <template #start>
        <lbz-icon-button on-background="secondary" darkened>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="secondary" darkened>share</lbz-icon-button>
        <lbz-icon-button on-background="secondary" darkened>search</lbz-icon-button>
        <lbz-icon-button on-background="secondary" darkened>more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar
      type="extended"
      background="background"
      title="Page title"
    >
      <template #start>
        <lbz-icon-button>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button>share</lbz-icon-button>
        <lbz-icon-button>search</lbz-icon-button>
        <lbz-icon-button>more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar
      type="extended"
      background="surface"
      title="Page title"
    >
      <template #start>
        <lbz-icon-button>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button>share</lbz-icon-button>
        <lbz-icon-button>search</lbz-icon-button>
        <lbz-icon-button>more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar
      type="extended"
      background="light"
      title="Page title"
    >
      <template #start>
        <lbz-icon-button on-background="light" darkened>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="light" darkened>share</lbz-icon-button>
        <lbz-icon-button on-background="light" darkened>search</lbz-icon-button>
        <lbz-icon-button on-background="light" darkened>more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar
      type="extended"
      background="dark"
      title="Page title"
    >
      <template #start>
        <lbz-icon-button on-background="dark" darkened>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="dark" darkened>share</lbz-icon-button>
        <lbz-icon-button on-background="dark" darkened>search</lbz-icon-button>
        <lbz-icon-button on-background="dark" darkened>more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar
      type="extended"
      background="transparent"
      title="Page title"
    >
      <template #start>
        <lbz-icon-button>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button>share</lbz-icon-button>
        <lbz-icon-button>search</lbz-icon-button>
        <lbz-icon-button>more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>

    <h3 class="lbz-typography--subtitle1">$ dense (desktop only): undefined (default), true, false</h3>

    <lbz-top-app-bar
      type="extended"
      dense
      title="Page title"
    >
      <template #start>
        <lbz-icon-button on-background="primary" darkened>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="primary" darkened>share</lbz-icon-button>
        <lbz-icon-button on-background="primary" darkened>search</lbz-icon-button>
        <lbz-icon-button on-background="primary" darkened>more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar
      type="extended"
      :dense="false"
      title="Page title"
    >
      <template #start>
        <lbz-icon-button on-background="primary" darkened>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="primary" darkened>share</lbz-icon-button>
        <lbz-icon-button on-background="primary" darkened>search</lbz-icon-button>
        <lbz-icon-button on-background="primary" darkened>more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>

    <h3 class="lbz-typography--subtitle1">$ elevated: true, false (default)</h3>

    <lbz-top-app-bar
      type="extended"
      elevated
      title="Page title"
    >
      <template #start>
        <lbz-icon-button on-background="primary" darkened>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="primary" darkened>share</lbz-icon-button>
        <lbz-icon-button on-background="primary" darkened>search</lbz-icon-button>
        <lbz-icon-button on-background="primary" darkened>more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>

    <h3 class="lbz-typography--subtitle1">$ media (type === 'extended'): '' (default), 'x'</h3>

    <lbz-top-app-bar
      type="extended"
      background="light"
      :media="require('../../assets/img/placeholder@3x2.png')"
      title="Page title"
    >
      <template #start>
        <lbz-icon-button on-background="light">menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="light">share</lbz-icon-button>
        <lbz-icon-button on-background="light">search</lbz-icon-button>
        <lbz-icon-button on-background="light">more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>

    <h2 class="lbz-typography--h5"># Short top app bar</h2>

    <h3 class="lbz-typography--subtitle1">$ type: 'standard' (default), 'extended', 'short'</h3>
    <h3 class="lbz-typography--subtitle1">$ fixed: true, false (default)</h3>

    <lbz-top-app-bar type="short" title="Page title">
      <template #start>
        <lbz-icon-button on-background="primary" darkened>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="primary" darkened>share</lbz-icon-button>
        <lbz-icon-button on-background="primary" darkened>search</lbz-icon-button>
        <lbz-icon-button class="lbz-is-most-used" on-background="primary" darkened>more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>

    <h3 class="lbz-typography--subtitle1">$ background (darkened): 'primary' (default), 'secondary', 'background', 'surface', 'light', 'dark', 'transparent'</h3>

    <lbz-top-app-bar type="short" title="Page title">
      <template #start>
        <lbz-icon-button on-background="primary" darkened>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="primary" darkened>share</lbz-icon-button>
        <lbz-icon-button on-background="primary" darkened>search</lbz-icon-button>
        <lbz-icon-button class="lbz-is-most-used" on-background="primary" darkened>more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar
      type="short"
      background="secondary"
      title="Page title"
    >
      <template #start>
        <lbz-icon-button on-background="secondary" darkened>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="secondary" darkened>share</lbz-icon-button>
        <lbz-icon-button on-background="secondary" darkened>search</lbz-icon-button>
        <lbz-icon-button class="lbz-is-most-used" on-background="secondary" darkened>more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar
      type="short"
      background="background"
      title="Page title"
    >
      <template #start>
        <lbz-icon-button>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button>share</lbz-icon-button>
        <lbz-icon-button>search</lbz-icon-button>
        <lbz-icon-button class="lbz-is-most-used">more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar
      type="short"
      background="surface"
      title="Page title"
    >
      <template #start>
        <lbz-icon-button>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button>share</lbz-icon-button>
        <lbz-icon-button>search</lbz-icon-button>
        <lbz-icon-button class="lbz-is-most-used">more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar
      type="short"
      background="light"
      title="Page title"
    >
      <template #start>
        <lbz-icon-button on-background="light" darkened>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="light" darkened>share</lbz-icon-button>
        <lbz-icon-button on-background="light" darkened>search</lbz-icon-button>
        <lbz-icon-button class="lbz-is-most-used" on-background="light" darkened>more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar
      type="short"
      background="dark"
      title="Page title"
    >
      <template #start>
        <lbz-icon-button on-background="dark" darkened>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="dark" darkened>share</lbz-icon-button>
        <lbz-icon-button on-background="dark" darkened>search</lbz-icon-button>
        <lbz-icon-button class="lbz-is-most-used" on-background="dark" darkened>more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar
      type="short"
      background="transparent"
      title="Page title"
    >
      <template #start>
        <lbz-icon-button>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button>share</lbz-icon-button>
        <lbz-icon-button>search</lbz-icon-button>
        <lbz-icon-button class="lbz-is-most-used">more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>

    <h3 class="lbz-typography--subtitle1">$ dense (desktop only): undefined (default), true, false</h3>

    <lbz-top-app-bar
      type="short"
      dense
      title="Page title"
    >
      <template #start>
        <lbz-icon-button on-background="primary" darkened>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="primary" darkened>share</lbz-icon-button>
        <lbz-icon-button on-background="primary" darkened>search</lbz-icon-button>
        <lbz-icon-button class="lbz-is-most-used" on-background="primary" darkened>more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar
      type="short"
      :dense="false"
      title="Page title"
    >
      <template #start>
        <lbz-icon-button on-background="primary" darkened>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="primary" darkened>share</lbz-icon-button>
        <lbz-icon-button on-background="primary" darkened>search</lbz-icon-button>
        <lbz-icon-button class="lbz-is-most-used" on-background="primary" darkened>more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>

    <h3 class="lbz-typography--subtitle1">$ elevated: true, false (default)</h3>

    <lbz-top-app-bar
      type="short"
      elevated
      title="Page title"
    >
      <template #start>
        <lbz-icon-button on-background="primary" darkened>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="primary" darkened>share</lbz-icon-button>
        <lbz-icon-button on-background="primary" darkened>search</lbz-icon-button>
        <lbz-icon-button class="lbz-is-most-used" on-background="primary" darkened>more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ComponentsTopAppBar extends Vue {
  private vinactive: string = 'active';
  private vtab: number = 0;
}
</script>
