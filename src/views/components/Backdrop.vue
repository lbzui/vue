<template>
  <article>
    <h2 class="lbz-typography--h5"># Backdrop</h2>

    <h3 class="lbz-typography--subtitle1">$ active.sync: true, false (default)</h3>
    <lbz-backdrop :active.sync="isActive" ref="backdrop">
      <template #back-layer-header>
        <lbz-top-app-bar title="Page title">
          <template #start>
            <lbz-icon-button
              :active.sync="isActive"
              toggle
              on-background="primary"
              on-icon="close"
              off-icon="menu"
            />
          </template>
          <template #end>
            <lbz-icon-button on-background="primary" @click.stop="$refs.backdrop.fclick();">more_vert</lbz-icon-button>
          </template>
        </lbz-top-app-bar>
      </template>
      <template #back-layer-content>
        <div>Back layer content</div>
      </template>
      <template #front-layer-content>
        <article>Front layer content</article>
      </template>
    </lbz-backdrop>

    <h3 class="lbz-typography--subtitle1">$ subtitle (front-layer): '' (default), 'x'</h3>
    <lbz-backdrop :active.sync="isActive" subtitle="Subtitle">
      <template #back-layer-header>
        <lbz-top-app-bar title="Page title">
          <template #start>
            <lbz-icon-button
              :active.sync="isActive"
              toggle
              on-background="primary"
              on-icon="close"
              off-icon="menu"
            />
          </template>
          <template #end>
            <lbz-icon-button on-background="primary">more_vert</lbz-icon-button>
          </template>
        </lbz-top-app-bar>
      </template>
      <template #back-layer-content>
        <div>Back layer content</div>
      </template>
      <template #front-layer-content>
        <article>Front layer content</article>
      </template>
    </lbz-backdrop>

    <h3 class="lbz-typography--subtitle1">$ icon (front-layer): true, false (default)</h3>
    <lbz-backdrop :active.sync="isActive" icon>
      <template #back-layer-header>
        <lbz-top-app-bar title="Page title">
          <template #start>
            <lbz-icon-button
              :active.sync="isActive"
              toggle
              on-background="primary"
              on-icon="close"
              off-icon="menu"
            />
          </template>
          <template #end>
            <lbz-icon-button on-background="primary">more_vert</lbz-icon-button>
          </template>
        </lbz-top-app-bar>
      </template>
      <template #back-layer-content>
        <div>Back layer content</div>
      </template>
      <template #front-layer-content>
        <article>Front layer content</article>
      </template>
    </lbz-backdrop>

    <h3 class="lbz-typography--subtitle1">$ divider (front-layer): true, false (default)</h3>
    <lbz-backdrop :active.sync="isActive" divider>
      <template #back-layer-header>
        <lbz-top-app-bar title="Page title">
          <template #start>
            <lbz-icon-button
              :active.sync="isActive"
              toggle
              on-background="primary"
              on-icon="close"
              off-icon="menu"
            />
          </template>
          <template #end>
            <lbz-icon-button on-background="primary">more_vert</lbz-icon-button>
          </template>
        </lbz-top-app-bar>
      </template>
      <template #back-layer-content>
        <div>Back layer content</div>
      </template>
      <template #front-layer-content>
        <article>Front layer content</article>
      </template>
    </lbz-backdrop>

    <h3 class="lbz-typography--subtitle1">$ horizontal (front-layer): true, false (default)</h3>
    <lbz-backdrop :active.sync="isActive" :horizontal="false">
      <template #back-layer-header>
        <lbz-top-app-bar title="Page title">
          <template #start>
            <lbz-icon-button
              :active.sync="isActive"
              toggle
              on-background="primary"
              on-icon="close"
              off-icon="menu"
            />
          </template>
          <template #end>
            <lbz-icon-button on-background="primary">more_vert</lbz-icon-button>
          </template>
        </lbz-top-app-bar>
      </template>
      <template #back-layer-content>
        <div style="height: 1280px;">Back layer content</div>
      </template>
      <template #front-layer-content>
        <article style="height: 1280px;">Front layer content</article>
      </template>
    </lbz-backdrop>
    <lbz-backdrop :active.sync="isActive" horizontal>
      <template #back-layer-header>
        <lbz-top-app-bar title="Page title">
          <template #start>
            <lbz-icon-button
              :active.sync="isActive"
              toggle
              on-background="primary"
              on-icon="close"
              off-icon="menu"
            />
          </template>
          <template #end>
            <lbz-icon-button on-background="primary">more_vert</lbz-icon-button>
          </template>
        </lbz-top-app-bar>
      </template>
      <template #back-layer-content>
        <div style="height: 1280px;">Back layer content</div>
      </template>
      <template #front-layer-content>
        <article style="width: 1280px; height: 100%;">Front layer content</article>
      </template>
    </lbz-backdrop>

    <h3 class="lbz-typography--subtitle1">$ scrim (front-layer): true, false (default)</h3>
    <lbz-backdrop :active.sync="isActive" scrim>
      <template #back-layer-header>
        <lbz-top-app-bar title="Page title">
          <template #start>
            <lbz-icon-button
              :active.sync="isActive"
              toggle
              on-background="primary"
              on-icon="close"
              off-icon="menu"
            />
          </template>
          <template #end>
            <lbz-icon-button on-background="primary">more_vert</lbz-icon-button>
          </template>
        </lbz-top-app-bar>
      </template>
      <template #back-layer-content>
        <div>Back layer content</div>
      </template>
      <template #front-layer-content>
        <article>Front layer content</article>
      </template>
    </lbz-backdrop>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Backdrop extends Vue {
  private isActive: boolean = false;
}
</script>
