<template>
  <article class="lbzui-components-backdrop">
    <h2 class="lbz-typography--h5"># Backdrop</h2>

    <h3 class="lbz-typography--subtitle1">$ [required]active.sync: true, false</h3>
    <h3 class="lbz-typography--subtitle1">$ subtitle: '' (default), 'x'</h3>
    <div class="lbzui-u-app">
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
              <lbz-icon-button on-background="primary" @click.stop="ftoggleActive()">more_vert</lbz-icon-button>
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
    </div>
    <div class="lbzui-u-app">
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
    </div>

    <h3 class="lbz-typography--subtitle1">$ icon: true, false (default)</h3>
    <div class="lbzui-u-app">
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
    </div>

    <h3 class="lbz-typography--subtitle1">$ divider: true, false (default)</h3>
    <div class="lbzui-u-app">
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
    </div>

    <h3 class="lbz-typography--subtitle1">$ horizontal: true, false (default)</h3>
    <div class="lbzui-u-app">
      <lbz-backdrop :active.sync="vactive" horizontal @scroll="fscroll">
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
    </div>
    <div class="lbzui-u-app">
      <lbz-backdrop :active.sync="vactive" @scroll="fscroll">
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
    </div>

    <h3 class="lbz-typography--subtitle1">$ scrim: true, false (default)</h3>
    <div class="lbzui-u-app">
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
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'vue-property-decorator';

@Component
export default class Backdrop extends Vue {
  @Ref('backdrop') private rbackdrop!: HTMLFormElement;

  private vactive: boolean = false;

  private ftoggleActive(): void {
    this.rbackdrop.ftoggle();
  }

  private fscroll(el: object, e: Event, position: object): void {
    console.log((el as any).scrollHeight);
    console.log(e);
    alert(JSON.stringify(position));
  }
}
</script>
