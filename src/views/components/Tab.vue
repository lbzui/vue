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
      <lbz-tab-item :value="2" icon="room">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab">
      <lbz-tab-item :value="0" icon="phone">Item</lbz-tab-item>
      <lbz-tab-item :value="1" icon="favorite">Item</lbz-tab-item>
      <lbz-tab-item :value="2" icon="room">Item</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ tag: 'button' (default), 'router-link', 'a', 'x'</h3>
    <lbz-tab v-model="vtab">
      <lbz-tab-item :value="0">Button</lbz-tab-item>
      <lbz-tab-item :value="1">Button</lbz-tab-item>
      <lbz-tab-item :value="2">Button</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab" tag="router-link">
      <lbz-tab-item :value="0" to="/components/tab">Router-link</lbz-tab-item>
      <lbz-tab-item :value="1" to="/components/backdrop">Router-link</lbz-tab-item>
      <lbz-tab-item :value="2" to="/components/button">Router-link</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab" tag="a">
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
      <lbz-tab-item :value="2" icon="room">Item</lbz-tab-item>
      <lbz-tab-item :value="3" icon="bluetooth">Item</lbz-tab-item>
      <lbz-tab-item :value="4" icon="keyboard_voice">Item</lbz-tab-item>
      <lbz-tab-item :value="5" icon="flight">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab" type="scrollable">
      <lbz-tab-item :value="0" icon="phone">Item</lbz-tab-item>
      <lbz-tab-item :value="1" icon="favorite">Item</lbz-tab-item>
      <lbz-tab-item :value="2" icon="room">Item</lbz-tab-item>
      <lbz-tab-item :value="3" icon="bluetooth">Item</lbz-tab-item>
      <lbz-tab-item :value="4" icon="keyboard_voice">Item</lbz-tab-item>
      <lbz-tab-item :value="5" icon="flight">Item</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ tag: 'button' (default), 'router-link', 'a', 'x'</h3>
    <lbz-tab v-model="vtab" type="scrollable">
      <lbz-tab-item :value="0">Button</lbz-tab-item>
      <lbz-tab-item :value="1">Button</lbz-tab-item>
      <lbz-tab-item :value="2">Button</lbz-tab-item>
      <lbz-tab-item :value="3">Button</lbz-tab-item>
      <lbz-tab-item :value="4">Button</lbz-tab-item>
      <lbz-tab-item :value="5">Button</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab" type="scrollable" tag="router-link">
      <lbz-tab-item :value="0" to="/components/tab">Router-link</lbz-tab-item>
      <lbz-tab-item :value="1" to="/components/backdrop">Router-link</lbz-tab-item>
      <lbz-tab-item :value="2" to="/components/button">Router-link</lbz-tab-item>
      <lbz-tab-item :value="3" to="/components/card">Router-link</lbz-tab-item>
      <lbz-tab-item :value="4" to="/components/dialog">Router-link</lbz-tab-item>
      <lbz-tab-item :value="5" to="/components/divider">Router-link</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab" type="scrollable" tag="a">
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

    <h2 class="lbz-typography--h5"># Tab item</h2>

    <h3 class="lbz-typography--subtitle1">$ [required]value: true, false, x, 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ tag: '' (default), 'button', 'router-link', 'a', 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ to (tag === 'router-link'): '' (default), 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ icon: '' (default), 'x'</h3>

    <lbz-tab v-model="vtab" tag="router-link">
      <lbz-tab-item :value="0" tag="button" icon="phone">Button</lbz-tab-item>
      <lbz-tab-item :value="1" to="/components/backdrop" icon="favorite">Router-link</lbz-tab-item>
      <lbz-tab-item :value="2" tag="a" href="#/components/tab" icon="room">A</lbz-tab-item>
    </lbz-tab>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Tab extends Vue {
  private vtab: number = 0;

  private fchange(val: boolean | number | string, e: MouseEvent) {
    alert(val);
    alert(e);
  }
}
</script>

<style lang="less">
.lbzui-components-tab {
  .lbz-tab {
    width: 360px;

    &.lbz-tab--on {
      &-primary {
        background-color: var(--lbz-theme-primary);
      }

      &-secondary {
        background-color: var(--lbz-theme-secondary);
      }

      &-light {
        background-color: #fff;
      }

      &-dark {
        background-color: #000;
      }
    }

    + .lbz-tab {
      margin-top: 16px;
    }
  }
}
</style>
