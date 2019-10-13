<template>
  <article class="lbzui-components-backdrop">
    <h2 class="lbz-typography--h5"># Backdrop</h2>

    <h3 class="lbz-typography--subtitle1">$ [required]active.sync: true, false</h3>
    <h3 class="lbz-typography--subtitle1">$ subtitle (front-layer): '' (default), 'x'</h3>
    <lbz-backdrop :active.sync="vactive" ref="backdrop">
      <template #back-layer-header>
        <lbz-top-app-bar title="Page title">
          <template #start>
            <lbz-icon-button
              :active.sync="vactive"
              toggle
              on-background="primary"
              on-icon="close"
              off-icon="menu"
            />
          </template>
          <template #end>
            <lbz-icon-button
              on-background="primary"
              @click.stop="ftoggleActive()"
            >more_vert</lbz-icon-button>
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
    <lbz-backdrop :active.sync="vactive" subtitle="Subtitle">
      <template #back-layer-header>
        <lbz-top-app-bar title="Page title">
          <template #start>
            <lbz-icon-button
              :active.sync="vactive"
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
    <lbz-backdrop :active.sync="vactive" icon>
      <template #back-layer-header>
        <lbz-top-app-bar title="Page title">
          <template #start>
            <lbz-icon-button
              :active.sync="vactive"
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
    <lbz-backdrop :active.sync="vactive" divider>
      <template #back-layer-header>
        <lbz-top-app-bar title="Page title">
          <template #start>
            <lbz-icon-button
              :active.sync="vactive"
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
    <lbz-backdrop :active.sync="vactive" horizontal>
      <template #back-layer-header>
        <lbz-top-app-bar title="Page title">
          <template #start>
            <lbz-icon-button
              :active.sync="vactive"
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
    <lbz-backdrop :active.sync="vactive">
      <template #back-layer-header>
        <lbz-top-app-bar title="Page title">
          <template #start>
            <lbz-icon-button
              :active.sync="vactive"
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

    <h3 class="lbz-typography--subtitle1">$ scrim (front-layer): true, false (default)</h3>
    <lbz-backdrop :active.sync="vactive" scrim>
      <template #back-layer-header>
        <lbz-top-app-bar title="Page title">
          <template #start>
            <lbz-icon-button
              :active.sync="vactive"
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
import { Component, Ref, Vue } from 'vue-property-decorator';

@Component
export default class Backdrop extends Vue {
  @Ref('backdrop') private rbackdrop!: HTMLFormElement;

  private vactive: boolean = false;

  private ftoggleActive() {
    this.rbackdrop.ftoggle();
  }
}
</script>

<style lang="less">
.lbzui-components-backdrop {
  .lbz-backdrop {
    display: inline-block;
    position: relative;
    margin-right: 16px;
    border: 1px solid var(--lbz-theme-outline-on-surface);
    width: 360px;
    height: 614px;
  }
}
</style>
