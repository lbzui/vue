<template>
  <article class="lbzui-components-tab">
    <h2 class="lbz-typography--h5"># Fixed tab</h2>

    <h3 class="lbz-typography--subtitle1">$ [required]v-model: true, false, x, 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ type: 'fixed' (default), 'scrollable'</h3>
    <lbz-tab v-model="vtab" @change="fchange">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ tag: 'nav' (default), 'x'</h3>
    <lbz-tab v-model="vtab">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab" tag="div">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ on-background: 'primary', 'secondary', 'surface' (default), 'light', 'dark'</h3>
    <lbz-tab v-model="vtab" on-background="primary">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab" on-background="secondary">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab" on-background="light">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab" on-background="dark">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ alignment (type === 'fixed'): '' (default), 'left', 'center', 'right'</h3>
    <lbz-tab v-model="vtab">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab" alignment="left">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab" alignment="center">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab" alignment="right">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ stacked: true, false (default)</h3>
    <lbz-tab v-model="vtab" stacked>
      <lbz-tab-item :value="0" icon="phone">Item</lbz-tab-item>
      <lbz-tab-item :value="1" icon="favorite">Item</lbz-tab-item>
      <lbz-tab-item :value="2" icon="place">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab">
      <lbz-tab-item :value="0" icon="phone">Item</lbz-tab-item>
      <lbz-tab-item :value="1" icon="favorite">Item</lbz-tab-item>
      <lbz-tab-item :value="2" icon="place">Item</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ router-link: true, false (default)</h3>
    <lbz-tab v-model="vtab" router-link>
      <lbz-tab-item :value="0" to="/components/tab">Router-link</lbz-tab-item>
      <lbz-tab-item :value="1" :to="{ name: 'backdrop' }">Router-link</lbz-tab-item>
      <lbz-tab-item :value="2" :to="{ name: 'button' }">Router-link</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ item-tag: 'button' (default), 'a', 'x'</h3>
    <lbz-tab v-model="vtab">
      <lbz-tab-item :value="0">Button</lbz-tab-item>
      <lbz-tab-item :value="1">Button</lbz-tab-item>
      <lbz-tab-item :value="2">Button</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab" item-tag="a">
      <lbz-tab-item :value="0" href="#/components/tab">A</lbz-tab-item>
      <lbz-tab-item :value="1" href="#/components/tab">A</lbz-tab-item>
      <lbz-tab-item :value="2" href="#/components/tab">A</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ ripple: true (default), false</h3>
    <lbz-tab v-model="vtab">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab" :ripple="false">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ on-content: true, false (default)</h3>
    <lbz-tab v-model="vtab" on-content>
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>

    <h2 class="lbz-typography--h5"># Scrollable tab</h2>

    <h3 class="lbz-typography--subtitle1">$ [required]v-model: true, false, x, 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ type: 'fixed' (default), 'scrollable'</h3>
    <lbz-tab v-model="vtab" type="scrollable">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
      <lbz-tab-item :value="3">Item</lbz-tab-item>
      <lbz-tab-item :value="4">Item</lbz-tab-item>
      <lbz-tab-item :value="5">Item</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ tag: 'nav' (default), 'x'</h3>
    <lbz-tab v-model="vtab" type="scrollable">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
      <lbz-tab-item :value="3">Item</lbz-tab-item>
      <lbz-tab-item :value="4">Item</lbz-tab-item>
      <lbz-tab-item :value="5">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab" type="scrollable" tag="div">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
      <lbz-tab-item :value="3">Item</lbz-tab-item>
      <lbz-tab-item :value="4">Item</lbz-tab-item>
      <lbz-tab-item :value="5">Item</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ on-background: 'primary', 'secondary', 'surface' (default), 'light', 'dark'</h3>
    <lbz-tab v-model="vtab" type="scrollable" on-background="primary">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
      <lbz-tab-item :value="3">Item</lbz-tab-item>
      <lbz-tab-item :value="4">Item</lbz-tab-item>
      <lbz-tab-item :value="5">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab" type="scrollable" on-background="secondary">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
      <lbz-tab-item :value="3">Item</lbz-tab-item>
      <lbz-tab-item :value="4">Item</lbz-tab-item>
      <lbz-tab-item :value="5">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab" type="scrollable">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
      <lbz-tab-item :value="3">Item</lbz-tab-item>
      <lbz-tab-item :value="4">Item</lbz-tab-item>
      <lbz-tab-item :value="5">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab" type="scrollable" on-background="light">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
      <lbz-tab-item :value="3">Item</lbz-tab-item>
      <lbz-tab-item :value="4">Item</lbz-tab-item>
      <lbz-tab-item :value="5">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab" type="scrollable" on-background="dark">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
      <lbz-tab-item :value="3">Item</lbz-tab-item>
      <lbz-tab-item :value="4">Item</lbz-tab-item>
      <lbz-tab-item :value="5">Item</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ stacked: true, false (default)</h3>
    <lbz-tab v-model="vtab" type="scrollable" stacked>
      <lbz-tab-item :value="0" icon="phone">Item</lbz-tab-item>
      <lbz-tab-item :value="1" icon="favorite">Item</lbz-tab-item>
      <lbz-tab-item :value="2" icon="place">Item</lbz-tab-item>
      <lbz-tab-item :value="3" icon="bluetooth">Item</lbz-tab-item>
      <lbz-tab-item :value="4" icon="keyboard_voice">Item</lbz-tab-item>
      <lbz-tab-item :value="5" icon="flight">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab" type="scrollable">
      <lbz-tab-item :value="0" icon="phone">Item</lbz-tab-item>
      <lbz-tab-item :value="1" icon="favorite">Item</lbz-tab-item>
      <lbz-tab-item :value="2" icon="place">Item</lbz-tab-item>
      <lbz-tab-item :value="3" icon="bluetooth">Item</lbz-tab-item>
      <lbz-tab-item :value="4" icon="keyboard_voice">Item</lbz-tab-item>
      <lbz-tab-item :value="5" icon="flight">Item</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ router-link: true, false (default)</h3>
    <lbz-tab v-model="vtab" type="scrollable" router-link>
      <lbz-tab-item :value="0" to="/components/tab">Router-link</lbz-tab-item>
      <lbz-tab-item :value="1" :to="{ name: 'backdrop' }">Router-link</lbz-tab-item>
      <lbz-tab-item :value="2" :to="{ name: 'button' }">Router-link</lbz-tab-item>
      <lbz-tab-item :value="3" :to="{ name: 'card' }">Router-link</lbz-tab-item>
      <lbz-tab-item :value="4" :to="{ name: 'dialog' }">Router-link</lbz-tab-item>
      <lbz-tab-item :value="5" :to="{ name: 'divider' }">Router-link</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ item-tag: 'button' (default), 'a', 'x'</h3>
    <lbz-tab v-model="vtab" type="scrollable">
      <lbz-tab-item :value="0">Button</lbz-tab-item>
      <lbz-tab-item :value="1">Button</lbz-tab-item>
      <lbz-tab-item :value="2">Button</lbz-tab-item>
      <lbz-tab-item :value="3">Button</lbz-tab-item>
      <lbz-tab-item :value="4">Button</lbz-tab-item>
      <lbz-tab-item :value="5">Button</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab" type="scrollable" item-tag="a">
      <lbz-tab-item :value="0" href="#/components/tab">A</lbz-tab-item>
      <lbz-tab-item :value="1" href="#/components/tab">A</lbz-tab-item>
      <lbz-tab-item :value="2" href="#/components/tab">A</lbz-tab-item>
      <lbz-tab-item :value="3" href="#/components/tab">A</lbz-tab-item>
      <lbz-tab-item :value="4" href="#/components/tab">A</lbz-tab-item>
      <lbz-tab-item :value="5" href="#/components/tab">A</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ ripple: true (default), false</h3>
    <lbz-tab v-model="vtab" type="scrollable">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
      <lbz-tab-item :value="3">Item</lbz-tab-item>
      <lbz-tab-item :value="4">Item</lbz-tab-item>
      <lbz-tab-item :value="5">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab" type="scrollable" :ripple="false">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
      <lbz-tab-item :value="3">Item</lbz-tab-item>
      <lbz-tab-item :value="4">Item</lbz-tab-item>
      <lbz-tab-item :value="5">Item</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ on-content: true, false (default)</h3>
    <lbz-tab v-model="vtab" type="scrollable" on-content>
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
      <lbz-tab-item :value="3">Item</lbz-tab-item>
      <lbz-tab-item :value="4">Item</lbz-tab-item>
      <lbz-tab-item :value="5">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab" type="scrollable">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
      <lbz-tab-item :value="3">Item</lbz-tab-item>
      <lbz-tab-item :value="4">Item</lbz-tab-item>
      <lbz-tab-item :value="5">Item</lbz-tab-item>
    </lbz-tab>

    <h2 class="lbz-typography--h5"># Tab item</h2>

    <h3 class="lbz-typography--subtitle1">$ router-link: undefined (default), true, false</h3>
    <h3 class="lbz-typography--subtitle1">$ tag: '' (default), 'button', 'a', 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ to (router-link): '' (default), 'x', { x: x }</h3>
    <h3 class="lbz-typography--subtitle1">$ [required]value: true, false, x, 'x'</h3>

    <lbz-tab v-model="vtab">
      <lbz-tab-item :value="0">Button</lbz-tab-item>
      <lbz-tab-item router-link tag="a" :to="{ name: 'tab' }" :value="1">Router-link</lbz-tab-item>
      <lbz-tab-item tag="a" href="#/components/tab" :value="2">A</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ icon: '' (default), 'x'</h3>
    <lbz-tab v-model="vtab">
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
  private vtab: number = 0;

  private fchange(val: boolean | number | string, e: MouseEvent): void {
    alert(val);
    console.log(e);
  }
}
</script>
