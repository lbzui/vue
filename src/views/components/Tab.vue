<template>
  <article class="lbzui-components-tab">
    <h2 class="lbz-typography--h5"># Tab</h2>

    <h3 class="lbz-typography--subtitle1">$ type: 'fixed' (default), 'scrollable'</h3>
    <lbz-tab v-model="vtab" type="fixed" @change="fchange">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab" type="scrollable">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
      <lbz-tab-item :value="3">Item</lbz-tab-item>
      <lbz-tab-item :value="4">Item</lbz-tab-item>
      <lbz-tab-item :value="5">Item</lbz-tab-item>
      <lbz-tab-item :value="6">Item</lbz-tab-item>
      <lbz-tab-item :value="7">Item</lbz-tab-item>
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
    <lbz-tab v-model="vtab" on-background="surface">
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

    <h3 class="lbz-typography--subtitle1">$ alignment (type === 'fixed'): 'left', 'center', 'right'</h3>
    <lbz-tab v-model="vtab" alignment="left">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab" alignment="center">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab" alignment="right">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ stacked: true, false (default)</h3>
    <lbz-tab v-model="vtab" stacked>
      <lbz-tab-item :value="0" icon="phone">Item</lbz-tab-item>
      <lbz-tab-item :value="1" icon="favorite">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab" :stacked="false">
      <lbz-tab-item :value="0" icon="phone">Item</lbz-tab-item>
      <lbz-tab-item :value="1" icon="favorite">Item</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ tag: 'button' (default), 'router-link', 'a', 'x'</h3>
    <lbz-tab v-model="vtab" tag="button">
      <lbz-tab-item :value="0">Button</lbz-tab-item>
      <lbz-tab-item :value="1">Button</lbz-tab-item>
      <lbz-tab-item :value="2">Button</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab" tag="router-link">
      <lbz-tab-item :value="0" to="/components/tab">Router-link</lbz-tab-item>
      <lbz-tab-item :value="1" to="/components/top-app-bar">Router-link</lbz-tab-item>
      <lbz-tab-item :value="2" to="/">Router-link</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab" tag="a">
      <lbz-tab-item :value="0" href="#">A</lbz-tab-item>
      <lbz-tab-item :value="1" href="#">A</lbz-tab-item>
      <lbz-tab-item :value="2" href="#">A</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ ripple: true (default), false</h3>
    <lbz-tab v-model="vtab" ripple>
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab" :ripple="false">
      <lbz-tab-item :value="0">Item</lbz-tab-item>
      <lbz-tab-item :value="1">Item</lbz-tab-item>
      <lbz-tab-item :value="2">Item</lbz-tab-item>
    </lbz-tab>

    <h2 class="lbz-typography--h5"># Tab item</h2>

    <h3 class="lbz-typography--subtitle1">$ tag: '' (default), 'button', 'router-link', 'a', 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ value: true, false, x, 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ to (tag === 'router-link'): '' (default), 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ icon: '' (default), 'x'</h3>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Radio extends Vue {
  private vtab: number = 0;

  private fchange(val: boolean | number | string, e: MouseEvent) {
    // todo: changed
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
