<template>
  <article class="lbzui-components-tab">
    <h2 class="lbz-typography--h5"># Fixed tab</h2>

    <h3 class="lbz-typography--subtitle1">$ v-model: undefined (default), true, false, x, 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ type: 'fixed' (default), 'scrollable'</h3>
    <lbz-tab v-model="vtab0" @change="fchange">
      <lbz-tab-item
        v-for="(item, index) of 3"
        :key="index"
        :value="index"
      >Item {{ item }}</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ tag: 'nav' (default), 'x'</h3>
    <lbz-tab v-model="vtab0">
      <lbz-tab-item
        v-for="(item, index) of 3"
        :key="index"
        :value="index"
      >Nav {{ item }}</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab0" tag="div">
      <lbz-tab-item
        v-for="(item, index) of 3"
        :key="index"
        :value="index"
      >Div {{ item }}</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ on-background: 'primary', 'secondary', 'background', 'surface' (default), 'light', 'dark'</h3>
    <lbz-tab v-model="vtab0" on-background="primary">
      <lbz-tab-item
        v-for="(item, index) of 3"
        :key="index"
        :value="index"
      >Item {{ item }}</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab0" on-background="secondary">
      <lbz-tab-item
        v-for="(item, index) of 3"
        :key="index"
        :value="index"
      >Item {{ item }}</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab0" on-background="background">
      <lbz-tab-item
        v-for="(item, index) of 3"
        :key="index"
        :value="index"
      >Item {{ item }}</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab0">
      <lbz-tab-item
        v-for="(item, index) of 3"
        :key="index"
        :value="index"
      >Item {{ item }}</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab0" on-background="light">
      <lbz-tab-item
        v-for="(item, index) of 3"
        :key="index"
        :value="index"
      >Item {{ item }}</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab0" on-background="dark">
      <lbz-tab-item
        v-for="(item, index) of 3"
        :key="index"
        :value="index"
      >Item {{ item }}</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ alignment (type === 'fixed'): '' (default), 'left', 'center', 'right'</h3>
    <lbz-tab v-model="vtab0">
      <lbz-tab-item
        v-for="(item, index) of 3"
        :key="index"
        :value="index"
      >Item {{ item }}</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab0" alignment="left">
      <lbz-tab-item
        v-for="(item, index) of 3"
        :key="index"
        :value="index"
      >Item {{ item }}</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab0" alignment="center">
      <lbz-tab-item
        v-for="(item, index) of 3"
        :key="index"
        :value="index"
      >Item {{ item }}</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab0" alignment="right">
      <lbz-tab-item
        v-for="(item, index) of 3"
        :key="index"
        :value="index"
      >Item {{ item }}</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ stacked: true, false (default)</h3>
    <lbz-tab v-model="vtab0" stacked>
      <lbz-tab-item :value="0" icon="phone">Item 1</lbz-tab-item>
      <lbz-tab-item :value="1" icon="favorite">Item 2</lbz-tab-item>
      <lbz-tab-item :value="2" icon="place">Item 3</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab0">
      <lbz-tab-item :value="0" icon="phone">Item 1</lbz-tab-item>
      <lbz-tab-item :value="1" icon="favorite">Item 2</lbz-tab-item>
      <lbz-tab-item :value="2" icon="place">Item 3</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ router-link: true, false (default)</h3>
    <h3 class="lbz-typography--subtitle1">$ router-link-props (router-link): { replace: true || false (default), append: true || false (default), exact: true || false (default), event: 'click' (default) || 'x' || ['x'] }</h3>
    <lbz-tab router-link :router-link-props="{ replace: true }">
      <lbz-tab-item to="/components/tab">Router-link 1</lbz-tab-item>
      <lbz-tab-item :to="{ path: '/404' }">Router-link 2</lbz-tab-item>
      <lbz-tab-item :to="{ path: '/404' }">Router-link 3</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ item-tag: 'button' (default), 'a', 'x'</h3>
    <lbz-tab v-model="vtab0">
      <lbz-tab-item
        v-for="(item, index) of 3"
        :key="index"
        :value="index"
      >Button {{ item }}</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab0" item-tag="a">
      <lbz-tab-item
        v-for="(item, index) of 3"
        :key="index"
        href="#/components/tab"
        :value="index"
      >A {{ item }}</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ on-content: true, false (default)</h3>
    <lbz-tab v-model="vtab0" on-content>
      <lbz-tab-item
        v-for="(item, index) of 3"
        :key="index"
        :value="index"
      >Item {{ item }}</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab0">
      <lbz-tab-item
        v-for="(item, index) of 3"
        :key="index"
        :value="index"
      >Item {{ item }}</lbz-tab-item>
    </lbz-tab>

    <h2 class="lbz-typography--h5"># Scrollable tab</h2>

    <h3 class="lbz-typography--subtitle1">$ v-model: undefined (default), true, false, x, 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ type: 'fixed' (default), 'scrollable'</h3>
    <lbz-tab v-model="vtab1" type="scrollable">
      <lbz-tab-item
        v-for="(item, index) of 6"
        :key="index"
        :value="index"
      >Item {{ item }}</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ tag: 'nav' (default), 'x'</h3>
    <lbz-tab v-model="vtab1" type="scrollable">
      <lbz-tab-item
        v-for="(item, index) of 6"
        :key="index"
        :value="index"
      >Nav {{ item }}</lbz-tab-item>
    </lbz-tab>
    <lbz-tab
      v-model="vtab1"
      type="scrollable"
      tag="div"
    >
      <lbz-tab-item
        v-for="(item, index) of 6"
        :key="index"
        :value="index"
      >Div {{ item }}</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ on-background: 'primary', 'secondary', 'background', 'surface' (default), 'light', 'dark'</h3>
    <lbz-tab
      v-model="vtab1"
      type="scrollable"
      on-background="primary"
    >
      <lbz-tab-item
        v-for="(item, index) of 6"
        :key="index"
        :value="index"
      >Item {{ item }}</lbz-tab-item>
    </lbz-tab>
    <lbz-tab
      v-model="vtab1"
      type="scrollable"
      on-background="secondary"
    >
      <lbz-tab-item
        v-for="(item, index) of 6"
        :key="index"
        :value="index"
      >Item {{ item }}</lbz-tab-item>
    </lbz-tab>
    <lbz-tab
      v-model="vtab1"
      type="scrollable"
      on-background="background"
    >
      <lbz-tab-item
        v-for="(item, index) of 6"
        :key="index"
        :value="index"
      >Item {{ item }}</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab1" type="scrollable">
      <lbz-tab-item
        v-for="(item, index) of 6"
        :key="index"
        :value="index"
      >Item {{ item }}</lbz-tab-item>
    </lbz-tab>
    <lbz-tab
      v-model="vtab1"
      type="scrollable"
      on-background="light"
    >
      <lbz-tab-item
        v-for="(item, index) of 6"
        :key="index"
        :value="index"
      >Item {{ item }}</lbz-tab-item>
    </lbz-tab>
    <lbz-tab
      v-model="vtab1"
      type="scrollable"
      on-background="dark"
    >
      <lbz-tab-item
        v-for="(item, index) of 6"
        :key="index"
        :value="index"
      >Item {{ item }}</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ stacked: true, false (default)</h3>
    <lbz-tab
      v-model="vtab1"
      type="scrollable"
      stacked
    >
      <lbz-tab-item :value="0" icon="phone">Item 1</lbz-tab-item>
      <lbz-tab-item :value="1" icon="favorite">Item 2</lbz-tab-item>
      <lbz-tab-item :value="2" icon="place">Item 3</lbz-tab-item>
      <lbz-tab-item :value="3" icon="bluetooth">Item 4</lbz-tab-item>
      <lbz-tab-item :value="4" icon="keyboard_voice">Item 5</lbz-tab-item>
      <lbz-tab-item :value="5" icon="flight">Item 6</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab1" type="scrollable">
      <lbz-tab-item :value="0" icon="phone">Item 1</lbz-tab-item>
      <lbz-tab-item :value="1" icon="favorite">Item 2</lbz-tab-item>
      <lbz-tab-item :value="2" icon="place">Item 3</lbz-tab-item>
      <lbz-tab-item :value="3" icon="bluetooth">Item 4</lbz-tab-item>
      <lbz-tab-item :value="4" icon="keyboard_voice">Item 5</lbz-tab-item>
      <lbz-tab-item :value="5" icon="flight">Item 6</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ router-link: true, false (default)</h3>
    <h3 class="lbz-typography--subtitle1">$ router-link-props (router-link): { replace: true || false (default), append: true || false (default), exact: true || false (default), event: 'click' (default) || 'x' || ['x'] }</h3>
    <lbz-tab
      type="scrollable"
      router-link
      :router-link-props="{ replace: true }"
    >
      <lbz-tab-item to="/components/tab">Router-link 1</lbz-tab-item>
      <lbz-tab-item :to="{ path: '/404' }">Router-link 2</lbz-tab-item>
      <lbz-tab-item :to="{ path: '/404' }">Router-link 3</lbz-tab-item>
      <lbz-tab-item :to="{ path: '/404' }">Router-link 4</lbz-tab-item>
      <lbz-tab-item :to="{ path: '/404' }">Router-link 5</lbz-tab-item>
      <lbz-tab-item :to="{ path: '/404' }">Router-link 6</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ item-tag: 'button' (default), 'a', 'x'</h3>
    <lbz-tab v-model="vtab1" type="scrollable">
      <lbz-tab-item
        v-for="(item, index) of 6"
        :key="index"
        :value="index"
      >Button {{ item }}</lbz-tab-item>
    </lbz-tab>
    <lbz-tab
      v-model="vtab1"
      type="scrollable"
      item-tag="a"
    >
      <lbz-tab-item
        v-for="(item, index) of 6"
        :key="index"
        href="#/components/tab"
        :value="index"
      >A {{ item }}</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ on-content: true, false (default)</h3>
    <lbz-tab
      v-model="vtab1"
      type="scrollable"
      on-content
    >
      <lbz-tab-item
        v-for="(item, index) of 6"
        :key="index"
        :value="index"
      >Item {{ item }}</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab1" type="scrollable">
      <lbz-tab-item
        v-for="(item, index) of 6"
        :key="index"
        :value="index"
      >Item {{ item }}</lbz-tab-item>
    </lbz-tab>

    <h2 class="lbz-typography--h5"># Tab item</h2>

    <h3 class="lbz-typography--subtitle1">$ router-link: undefined (default), true, false</h3>
    <h3 class="lbz-typography--subtitle1">$ to (router-link): '' (default), 'x', { x: y }</h3>
    <h3 class="lbz-typography--subtitle1">$ tag: '' (default), 'button', 'a', 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ value: undefined (default), true, false, x, 'x'</h3>

    <lbz-tab v-model="vtab1">
      <lbz-tab-item :value="0">Button</lbz-tab-item>
      <lbz-tab-item
        router-link :to="{ path: '/404' }" tag="a">Router-link</lbz-tab-item>
      <lbz-tab-item
        tag="a"
        href="#/components/tab"
        :value="2"
      >A</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ icon: '' (default), 'x'</h3>
    <lbz-tab v-model="vtab1">
      <lbz-tab-item :value="0" icon="phone"/>
      <lbz-tab-item :value="1" icon="favorite"/>
      <lbz-tab-item :value="2" icon="place"/>
    </lbz-tab>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ComponentsTab extends Vue {
  private vtab0: number = 0;
  private vtab1: number = 0;

  private fchange(val: boolean | number | string, e: MouseEvent): void {
    alert(val);
    console.log(e);
  }
}
</script>
