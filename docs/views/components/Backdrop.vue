<template>
  <article class="lbzui-components-backdrop">
    <h2 class="lbz-typography--h5"># Backdrop</h2>

    <h3 class="lbz-typography--subtitle1">$ [required]active.sync: true, false</h3>
    <h3 class="lbz-typography--subtitle1">$ background: 'primary' (default), 'secondary', 'dark'</h3>
    <div class="lbzui-u-app">
      <lbz-backdrop ref="backdrop" :active.sync="vactive">
        <template #back-start>
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
        <template #back-center>
          <lbz-list
            class="is-nav"
            tag="nav"
            item-tag="a"
            on-background="primary"
          >
            <lbz-list-item
              v-for="(item, index) of NAV"
              :key="index"
              :active="vindex === index"
              @click.stop="vindex = index"
            >
              <template #start>
                <lbz-icon>{{ item }}</lbz-icon>
              </template>
              <template #center>Item {{ index + 1 }}</template>
            </lbz-list-item>
          </lbz-list>
        </template>
        <template #front-center>
          <article>Front layer content</article>
        </template>
      </lbz-backdrop>
    </div>
    <div class="lbzui-u-app">
      <lbz-backdrop :active.sync="vactive" background="secondary">
        <template #back-start>
          <lbz-top-app-bar background="secondary" title="Page title">
            <template #start>
              <lbz-icon-button
                :active.sync="vactive"
                toggle
                on-background="secondary"
                on-icon="close"
                off-icon="menu"
              />
            </template>
            <template #end>
              <lbz-icon-button on-background="secondary">more_vert</lbz-icon-button>
            </template>
          </lbz-top-app-bar>
        </template>
        <template #back-center>
          <lbz-list
            class="is-nav"
            tag="nav"
            item-tag="a"
            on-background="secondary"
          >
            <lbz-list-item
              v-for="(item, index) of NAV"
              :key="index"
              :active="vindex === index"
              @click.stop="vindex = index"
            >
              <template #start>
                <lbz-icon>{{ item }}</lbz-icon>
              </template>
              <template #center>Item {{ index + 1 }}</template>
            </lbz-list-item>
          </lbz-list>
        </template>
        <template #front-center>
          <article>Front layer content</article>
        </template>
      </lbz-backdrop>
    </div>
    <div class="lbzui-u-app">
      <lbz-backdrop :active.sync="vactive" background="dark">
        <template #back-start>
          <lbz-top-app-bar background="dark" title="Page title">
            <template #start>
              <lbz-icon-button
                :active.sync="vactive"
                toggle
                on-background="dark"
                on-icon="close"
                off-icon="menu"
              />
            </template>
            <template #end>
              <lbz-icon-button on-background="dark">more_vert</lbz-icon-button>
            </template>
          </lbz-top-app-bar>
        </template>
        <template #back-center>
          <lbz-list
            class="is-nav"
            tag="nav"
            item-tag="a"
            on-background="dark"
          >
            <lbz-list-item
              v-for="(item, index) of NAV"
              :key="index"
              :active="vindex === index"
              @click.stop="vindex = index"
            >
              <template #start>
                <lbz-icon>{{ item }}</lbz-icon>
              </template>
              <template #center>Item {{ index + 1 }}</template>
            </lbz-list-item>
          </lbz-list>
        </template>
        <template #front-center>
          <article>Front layer content</article>
        </template>
      </lbz-backdrop>
    </div>

    <h3 class="lbz-typography--subtitle1">$ subtitle: '' (default), 'x'</h3>
    <div class="lbzui-u-app">
      <lbz-backdrop :active.sync="vactive" subtitle="Subtitle">
        <template #back-start>
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
        <template #back-center>
          <div>Back layer content</div>
        </template>
        <template #front-center>
          <article>Front layer content</article>
        </template>
      </lbz-backdrop>
    </div>

    <h3 class="lbz-typography--subtitle1">$ icon: true, false (default)</h3>
    <div class="lbzui-u-app">
      <lbz-backdrop :active.sync="vactive" icon>
        <template #back-start>
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
        <template #back-center>
          <div>Back layer content</div>
        </template>
        <template #front-center>
          <article>Front layer content</article>
        </template>
      </lbz-backdrop>
    </div>

    <h3 class="lbz-typography--subtitle1">$ divider: true, false (default)</h3>
    <div class="lbzui-u-app">
      <lbz-backdrop :active.sync="vactive" divider>
        <template #back-start>
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
        <template #back-center>
          <div>Back layer content</div>
        </template>
        <template #front-center>
          <article>Front layer content</article>
        </template>
      </lbz-backdrop>
    </div>

    <h3 class="lbz-typography--subtitle1">$ horizontal: true, false (default)</h3>
    <div class="lbzui-u-app">
      <lbz-backdrop
        :active.sync="vactive"
        horizontal
        @scroll="fscroll"
      >
        <template #back-start>
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
        <template #back-center>
          <div style="height: 1280px;">Back layer content</div>
        </template>
        <template #front-center>
          <article style="width: 1280px; height: 100%;">Front layer content</article>
        </template>
      </lbz-backdrop>
    </div>
    <div class="lbzui-u-app">
      <lbz-backdrop :active.sync="vactive" @scroll="fscroll">
        <template #back-start>
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
        <template #back-center>
          <div style="height: 1280px;">Back layer content</div>
        </template>
        <template #front-center>
          <article style="height: 1280px;">Front layer content</article>
        </template>
      </lbz-backdrop>
    </div>

    <h3 class="lbz-typography--subtitle1">$ scrim: true, false (default)</h3>
    <div class="lbzui-u-app">
      <lbz-backdrop :active.sync="vactive" scrim>
        <template #back-start>
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
        <template #back-center>
          <div>Back layer content</div>
        </template>
        <template #front-center>
          <article>Front layer content</article>
        </template>
      </lbz-backdrop>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'vue-property-decorator';

@Component
export default class ComponentsBackdrop extends Vue {
  @Ref('backdrop') private rbackdrop!: HTMLFormElement;

  private NAV: string[] = [
    'mail',
    'bookmark',
    'speaker_notes',
    'note',
    'place',
    'data_usage',
    'backup',
    'favorite',
    'chrome_reader_mode',
    'event',
    'blur_on',
  ];

  private vactive: boolean = false;
  private vindex: number = 0;

  private ftoggleActive(): void {
    this.rbackdrop.ftoggle();
  }

  private fscroll(el: HTMLElement, e: Event, position: VueScrollPosition): void {
    console.log(el.scrollHeight);
    console.log(e);
    alert(JSON.stringify(position));
  }
}
</script>
