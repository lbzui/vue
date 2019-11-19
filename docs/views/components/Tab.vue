<template>
  <article class="lbzui-components-tab">
    <h2 class="lbz-typography--h5"># Fixed tab</h2>

    <h3 class="lbz-typography--subtitle1">$ [required]v-model: true, false, x, 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ type: 'fixed' (default), 'scrollable'</h3>
    <lbz-tab v-model="vtab0" @change="fchange">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ tag: 'nav' (default), 'x'</h3>
    <lbz-tab v-model="vtab0">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab0" tag="div">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ on-background: 'primary', 'secondary', 'surface' (default), 'light', 'dark'</h3>
    <lbz-tab v-model="vtab0" on-background="primary">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab0" on-background="secondary">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab0">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab0" on-background="light">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab0" on-background="dark">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ alignment (type === 'fixed'): '' (default), 'left', 'center', 'right'</h3>
    <lbz-tab v-model="vtab0">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab0" alignment="left">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab0" alignment="center">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab0" alignment="right">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ stacked: true, false (default)</h3>
    <lbz-tab v-model="vtab0" stacked>
      <lbz-tab-item :value="0" icon="phone">Item</lbz-tab-item>
      <lbz-tab-item :value="1" icon="favorite">Item</lbz-tab-item>
      <lbz-tab-item :value="2" icon="place">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab0">
      <lbz-tab-item :value="0" icon="phone">Item</lbz-tab-item>
      <lbz-tab-item :value="1" icon="favorite">Item</lbz-tab-item>
      <lbz-tab-item :value="2" icon="place">Item</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ router-link: true, false (default)</h3>
    <h3 class="lbz-typography--subtitle1">$ router-link-props (router-link): { replace: true || false (default), append: true || false (default), exact: true || false (default), event: 'click' (default) || 'x' || ['x'] }</h3>
    <lbz-tab
      v-model="vtab0"
      router-link
      :router-link-props="{ replace: true }"
    >
      <lbz-tab-item to="/404" :value="0">Router-link</lbz-tab-item>
      <lbz-tab-item :to="{ path: '/404' }" :value="1">Router-link</lbz-tab-item>
      <lbz-tab-item :to="{ path: '/404' }" :value="2">Router-link</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ item-tag: 'button' (default), 'a', 'x'</h3>
    <lbz-tab v-model="vtab0">
      <lbz-tab-item :value="0">Button</lbz-tab-item>
      <lbz-tab-item :value="1">Button</lbz-tab-item>
      <lbz-tab-item :value="2">Button</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab0" item-tag="a">
      <lbz-tab-item :value="0" href="#/components/tab">A</lbz-tab-item>
      <lbz-tab-item :value="1" href="#/components/tab">A</lbz-tab-item>
      <lbz-tab-item :value="2" href="#/components/tab">A</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ ripple: true (default), false</h3>
    <lbz-tab v-model="vtab0">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab0" :ripple="false">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ on-content: true, false (default)</h3>
    <lbz-tab v-model="vtab0" on-content>
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab0">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>

    <h2 class="lbz-typography--h5"># Scrollable tab</h2>

    <h3 class="lbz-typography--subtitle1">$ [required]v-model: true, false, x, 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ type: 'fixed' (default), 'scrollable'</h3>
    <lbz-tab v-model="vtab1" type="scrollable">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
      <lbz-tab-item :value="3">Item</lbz-tab-item>
      <lbz-tab-item :value="4">Item</lbz-tab-item>
      <lbz-tab-item :value="5">Item</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ tag: 'nav' (default), 'x'</h3>
    <lbz-tab v-model="vtab1" type="scrollable">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
      <lbz-tab-item :value="3">Item</lbz-tab-item>
      <lbz-tab-item :value="4">Item</lbz-tab-item>
      <lbz-tab-item :value="5">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab
      v-model="vtab1"
      type="scrollable"
      tag="div"
    >
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
      <lbz-tab-item :value="3">Item</lbz-tab-item>
      <lbz-tab-item :value="4">Item</lbz-tab-item>
      <lbz-tab-item :value="5">Item</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ on-background: 'primary', 'secondary', 'surface' (default), 'light', 'dark'</h3>
    <lbz-tab
      v-model="vtab1"
      type="scrollable"
      on-background="primary"
    >
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
      <lbz-tab-item :value="3">Item</lbz-tab-item>
      <lbz-tab-item :value="4">Item</lbz-tab-item>
      <lbz-tab-item :value="5">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab
      v-model="vtab1"
      type="scrollable"
      on-background="secondary"
    >
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
      <lbz-tab-item :value="3">Item</lbz-tab-item>
      <lbz-tab-item :value="4">Item</lbz-tab-item>
      <lbz-tab-item :value="5">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab1" type="scrollable">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
      <lbz-tab-item :value="3">Item</lbz-tab-item>
      <lbz-tab-item :value="4">Item</lbz-tab-item>
      <lbz-tab-item :value="5">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab
      v-model="vtab1"
      type="scrollable"
      on-background="light"
    >
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
      <lbz-tab-item :value="3">Item</lbz-tab-item>
      <lbz-tab-item :value="4">Item</lbz-tab-item>
      <lbz-tab-item :value="5">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab
      v-model="vtab1"
      type="scrollable"
      on-background="dark"
    >
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
      <lbz-tab-item :value="3">Item</lbz-tab-item>
      <lbz-tab-item :value="4">Item</lbz-tab-item>
      <lbz-tab-item :value="5">Item</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ stacked: true, false (default)</h3>
    <lbz-tab
      v-model="vtab1"
      type="scrollable"
      stacked
    >
      <lbz-tab-item :value="0" icon="phone">Item</lbz-tab-item>
      <lbz-tab-item :value="1" icon="favorite">Item</lbz-tab-item>
      <lbz-tab-item :value="2" icon="place">Item</lbz-tab-item>
      <lbz-tab-item :value="3" icon="bluetooth">Item</lbz-tab-item>
      <lbz-tab-item :value="4" icon="keyboard_voice">Item</lbz-tab-item>
      <lbz-tab-item :value="5" icon="flight">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab1" type="scrollable">
      <lbz-tab-item :value="0" icon="phone">Item</lbz-tab-item>
      <lbz-tab-item :value="1" icon="favorite">Item</lbz-tab-item>
      <lbz-tab-item :value="2" icon="place">Item</lbz-tab-item>
      <lbz-tab-item :value="3" icon="bluetooth">Item</lbz-tab-item>
      <lbz-tab-item :value="4" icon="keyboard_voice">Item</lbz-tab-item>
      <lbz-tab-item :value="5" icon="flight">Item</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ router-link: true, false (default)</h3>
    <h3 class="lbz-typography--subtitle1">$ router-link-props (router-link): { replace: true || false (default), append: true || false (default), exact: true || false (default), event: 'click' (default) || 'x' || ['x'] }</h3>
    <lbz-tab
      v-model="vtab1"
      type="scrollable"
      router-link
      :router-link-props="{ replace: true }"
    >
      <lbz-tab-item to="/404" :value="0">Router-link</lbz-tab-item>
      <lbz-tab-item :to="{ path: '/404' }" :value="1">Router-link</lbz-tab-item>
      <lbz-tab-item :to="{ path: '/404' }" :value="2">Router-link</lbz-tab-item>
      <lbz-tab-item :to="{ path: '/404' }" :value="3">Router-link</lbz-tab-item>
      <lbz-tab-item :to="{ path: '/404' }" :value="4">Router-link</lbz-tab-item>
      <lbz-tab-item :to="{ path: '/404' }" :value="5">Router-link</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ item-tag: 'button' (default), 'a', 'x'</h3>
    <lbz-tab v-model="vtab1" type="scrollable">
      <lbz-tab-item :value="0">Button</lbz-tab-item>
      <lbz-tab-item :value="1">Button</lbz-tab-item>
      <lbz-tab-item :value="2">Button</lbz-tab-item>
      <lbz-tab-item :value="3">Button</lbz-tab-item>
      <lbz-tab-item :value="4">Button</lbz-tab-item>
      <lbz-tab-item :value="5">Button</lbz-tab-item>
    </lbz-tab>
    <lbz-tab
      v-model="vtab1"
      type="scrollable"
      item-tag="a"
    >
      <lbz-tab-item :value="0" href="#/components/tab">A</lbz-tab-item>
      <lbz-tab-item :value="1" href="#/components/tab">A</lbz-tab-item>
      <lbz-tab-item :value="2" href="#/components/tab">A</lbz-tab-item>
      <lbz-tab-item :value="3" href="#/components/tab">A</lbz-tab-item>
      <lbz-tab-item :value="4" href="#/components/tab">A</lbz-tab-item>
      <lbz-tab-item :value="5" href="#/components/tab">A</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ ripple: true (default), false</h3>
    <lbz-tab v-model="vtab1" type="scrollable">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
      <lbz-tab-item :value="3">Item</lbz-tab-item>
      <lbz-tab-item :value="4">Item</lbz-tab-item>
      <lbz-tab-item :value="5">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab
      v-model="vtab1"
      type="scrollable"
      :ripple="false"
    >
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
      <lbz-tab-item :value="3">Item</lbz-tab-item>
      <lbz-tab-item :value="4">Item</lbz-tab-item>
      <lbz-tab-item :value="5">Item</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ on-content: true, false (default)</h3>
    <lbz-tab
      v-model="vtab1"
      type="scrollable"
      on-content
    >
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
      <lbz-tab-item :value="3">Item</lbz-tab-item>
      <lbz-tab-item :value="4">Item</lbz-tab-item>
      <lbz-tab-item :value="5">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab1" type="scrollable">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
      <lbz-tab-item :value="3">Item</lbz-tab-item>
      <lbz-tab-item :value="4">Item</lbz-tab-item>
      <lbz-tab-item :value="5">Item</lbz-tab-item>
    </lbz-tab>

    <h2 class="lbz-typography--h5"># Tab item</h2>

    <h3 class="lbz-typography--subtitle1">$ router-link: undefined (default), true, false</h3>
    <h3 class="lbz-typography--subtitle1">$ to (router-link): '' (default), 'x', { x: x }</h3>
    <h3 class="lbz-typography--subtitle1">$ tag: '' (default), 'button', 'a', 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ [required]value: true, false, x, 'x'</h3>

    <lbz-tab v-model="vtab1">
      <lbz-tab-item :value="0">Button</lbz-tab-item>
      <lbz-tab-item
        router-link
        :to="{ path: '/404' }"
        tag="a"
        :value="1"
      >Router-link</lbz-tab-item>
      <lbz-tab-item
        tag="a"
        :value="2"
        href="#/components/tab"
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
export default class Tab extends Vue {
  private vtab0: number = 0;
  private vtab1: number = 0;

  private fchange(val: boolean | number | string, e: MouseEvent): void {
    alert(val);
    console.log(e);
  }
}
</script>
