<template>
  <article class="lbzui-components-tab">
    <h2 class="lbz-typography--h5"># Fixed tab</h2>

    <h3 class="lbz-typography--subtitle1">
      $ v-model: undefined (default), true, false, x, 'x'
    </h3>
    <h3 class="lbz-typography--subtitle1">$ id: 'lbz-tab-x' (default), 'x'</h3>
    <h3 class="lbz-typography--subtitle1">
      $ type: 'fixed' (default), 'scrollable'
    </h3>

    <lbz-tab v-model="vtab0" id="vtab0" @change="fchange">
      <lbz-tab-item v-for="(item, index) of 3" :key="index" :value="index"
        >Item {{ item }}</lbz-tab-item
      >
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ tag: 'nav' (default), 'x'</h3>
    <h3 class="lbz-typography--subtitle1">
      $ router-link: true, false (default)
    </h3>
    <h3 class="lbz-typography--subtitle1">
      $ router-link-props (router-link): { replace: true || false (default),
      append: true || false (default), exact: true || false (default), event:
      'click' (default) || 'x' || ['x'] }
    </h3>
    <h3 class="lbz-typography--subtitle1">
      $ item-tag: 'button' (default), 'a', 'x'
    </h3>

    <lbz-tab
      tag="div"
      router-link
      :router-link-props="{ exact: true }"
      item-tag="a"
    >
      <lbz-tab-item to="/components/tab">Router-link 1</lbz-tab-item>
      <lbz-tab-item :to="{ path: '/404' }">Router-link 2</lbz-tab-item>
      <lbz-tab-item :to="{ path: '/404' }">Router-link 3</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab0" id="vtab0" tag="div" item-tag="a">
      <lbz-tab-item
        v-for="(item, index) of 3"
        :key="index"
        href="#/components/tab"
        :value="index"
        >A {{ item }}</lbz-tab-item
      >
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">
      $ align (type === 'fixed'): 'start', 'center', 'end', 'stretch' (default)
    </h3>

    <lbz-tab v-model="vtab0" id="vtab0" align="start">
      <lbz-tab-item v-for="(item, index) of 3" :key="index" :value="index"
        >Start {{ item }}</lbz-tab-item
      >
    </lbz-tab>
    <lbz-tab v-model="vtab0" id="vtab0" align="center">
      <lbz-tab-item v-for="(item, index) of 3" :key="index" :value="index"
        >Center {{ item }}</lbz-tab-item
      >
    </lbz-tab>
    <lbz-tab v-model="vtab0" id="vtab0" align="end">
      <lbz-tab-item v-for="(item, index) of 3" :key="index" :value="index"
        >End {{ item }}</lbz-tab-item
      >
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">
      $ on-background (auto-darkened): 'primary', 'secondary', 'surface'
      (default), 'light', 'dark'
    </h3>

    <lbz-tab
      v-model="vtab0"
      id="vtab0"
      class="lbzui-background--primary"
      on-background="primary"
    >
      <lbz-tab-item v-for="(item, index) of 3" :key="index" :value="index"
        >Item {{ item }}</lbz-tab-item
      >
    </lbz-tab>
    <lbz-tab
      v-model="vtab0"
      id="vtab0"
      class="lbzui-background--secondary"
      on-background="secondary"
    >
      <lbz-tab-item v-for="(item, index) of 3" :key="index" :value="index"
        >Item {{ item }}</lbz-tab-item
      >
    </lbz-tab>
    <lbz-tab v-model="vtab0" id="vtab0">
      <lbz-tab-item v-for="(item, index) of 3" :key="index" :value="index"
        >Item {{ item }}</lbz-tab-item
      >
    </lbz-tab>
    <lbz-tab
      v-model="vtab0"
      id="vtab0"
      class="lbzui-background--light"
      on-background="light"
    >
      <lbz-tab-item v-for="(item, index) of 3" :key="index" :value="index"
        >Item {{ item }}</lbz-tab-item
      >
    </lbz-tab>
    <lbz-tab
      v-model="vtab0"
      id="vtab0"
      class="lbzui-background--dark"
      on-background="dark"
    >
      <lbz-tab-item v-for="(item, index) of 3" :key="index" :value="index"
        >Item {{ item }}</lbz-tab-item
      >
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ stacked: true, false (default)</h3>

    <lbz-tab v-model="vtab0" id="vtab0" stacked>
      <lbz-tab-item :value="0" icon="phone">Item 1</lbz-tab-item>
      <lbz-tab-item :value="1" icon="favorite">Item 2</lbz-tab-item>
      <lbz-tab-item :value="2" icon="place">Item 3</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab0" id="vtab0">
      <lbz-tab-item :value="0" icon="phone">Item 1</lbz-tab-item>
      <lbz-tab-item :value="1" icon="favorite">Item 2</lbz-tab-item>
      <lbz-tab-item :value="2" icon="place">Item 3</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">
      $ on-content: true, false (default)
    </h3>

    <lbz-tab v-model="vtab0" id="vtab0" on-content>
      <lbz-tab-item v-for="(item, index) of 3" :key="index" :value="index"
        >Item {{ item }}</lbz-tab-item
      >
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">
      $ ripple: undefined (default), true, false
    </h3>

    <lbz-tab v-model="vtab0" id="vtab0" ripple>
      <lbz-tab-item v-for="(item, index) of 3" :key="index" :value="index"
        >Ripple {{ item }}</lbz-tab-item
      >
    </lbz-tab>
    <lbz-tab v-model="vtab0" id="vtab0" :ripple="false">
      <lbz-tab-item v-for="(item, index) of 3" :key="index" :value="index"
        >Non-ripple {{ item }}</lbz-tab-item
      >
    </lbz-tab>

    <h2 class="lbz-typography--h5"># Scrollable tab</h2>

    <h3 class="lbz-typography--subtitle1">
      $ v-model: undefined (default), true, false, x, 'x'
    </h3>
    <h3 class="lbz-typography--subtitle1">$ id: 'lbz-tab-x' (default), 'x'</h3>
    <h3 class="lbz-typography--subtitle1">
      $ type: 'fixed' (default), 'scrollable'
    </h3>

    <lbz-tab v-model="vtab1" id="vtab1" type="scrollable">
      <lbz-tab-item v-for="(item, index) of 6" :key="index" :value="index"
        >Item {{ item }}</lbz-tab-item
      >
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ tag: 'nav' (default), 'x'</h3>
    <h3 class="lbz-typography--subtitle1">
      $ router-link: true, false (default)
    </h3>
    <h3 class="lbz-typography--subtitle1">
      $ router-link-props (router-link): { replace: true || false (default),
      append: true || false (default), exact: true || false (default), event:
      'click' (default) || 'x' || ['x'] }
    </h3>
    <h3 class="lbz-typography--subtitle1">
      $ item-tag: 'button' (default), 'a', 'x'
    </h3>

    <lbz-tab
      tag="div"
      router-link
      :router-link-props="{ exact: true }"
      item-tag="a"
      type="scrollable"
    >
      <lbz-tab-item to="/components/tab">Router-link 1</lbz-tab-item>
      <lbz-tab-item :to="{ path: '/404' }">Router-link 2</lbz-tab-item>
      <lbz-tab-item :to="{ path: '/404' }">Router-link 3</lbz-tab-item>
      <lbz-tab-item :to="{ path: '/404' }">Router-link 4</lbz-tab-item>
      <lbz-tab-item :to="{ path: '/404' }">Router-link 5</lbz-tab-item>
      <lbz-tab-item :to="{ path: '/404' }">Router-link 6</lbz-tab-item>
    </lbz-tab>
    <lbz-tab
      v-model="vtab1"
      id="vtab1"
      tag="div"
      item-tag="a"
      type="scrollable"
    >
      <lbz-tab-item
        v-for="(item, index) of 6"
        :key="index"
        href="#/components/tab"
        :value="index"
        >A {{ item }}</lbz-tab-item
      >
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">
      $ on-background (auto-darkened): 'primary', 'secondary', 'surface'
      (default), 'light', 'dark'
    </h3>

    <lbz-tab
      v-model="vtab1"
      id="vtab1"
      class="lbzui-background--primary"
      type="scrollable"
      on-background="primary"
    >
      <lbz-tab-item v-for="(item, index) of 6" :key="index" :value="index"
        >Item {{ item }}</lbz-tab-item
      >
    </lbz-tab>
    <lbz-tab
      v-model="vtab1"
      id="vtab1"
      class="lbzui-background--secondary"
      type="scrollable"
      on-background="secondary"
    >
      <lbz-tab-item v-for="(item, index) of 6" :key="index" :value="index"
        >Item {{ item }}</lbz-tab-item
      >
    </lbz-tab>
    <lbz-tab v-model="vtab1" id="vtab1" type="scrollable">
      <lbz-tab-item v-for="(item, index) of 6" :key="index" :value="index"
        >Item {{ item }}</lbz-tab-item
      >
    </lbz-tab>
    <lbz-tab
      v-model="vtab1"
      id="vtab1"
      class="lbzui-background--light"
      type="scrollable"
      on-background="light"
    >
      <lbz-tab-item v-for="(item, index) of 6" :key="index" :value="index"
        >Item {{ item }}</lbz-tab-item
      >
    </lbz-tab>
    <lbz-tab
      v-model="vtab1"
      id="vtab1"
      class="lbzui-background--dark"
      type="scrollable"
      on-background="dark"
    >
      <lbz-tab-item v-for="(item, index) of 6" :key="index" :value="index"
        >Item {{ item }}</lbz-tab-item
      >
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ stacked: true, false (default)</h3>

    <lbz-tab v-model="vtab1" id="vtab1" type="scrollable" stacked>
      <lbz-tab-item :value="0" icon="phone">Item 1</lbz-tab-item>
      <lbz-tab-item :value="1" icon="favorite">Item 2</lbz-tab-item>
      <lbz-tab-item :value="2" icon="place">Item 3</lbz-tab-item>
      <lbz-tab-item :value="3" icon="bluetooth">Item 4</lbz-tab-item>
      <lbz-tab-item :value="4" icon="keyboard_voice">Item 5</lbz-tab-item>
      <lbz-tab-item :value="5" icon="flight">Item 6</lbz-tab-item>
    </lbz-tab>
    <lbz-tab v-model="vtab1" id="vtab1" type="scrollable">
      <lbz-tab-item :value="0" icon="phone">Item 1</lbz-tab-item>
      <lbz-tab-item :value="1" icon="favorite">Item 2</lbz-tab-item>
      <lbz-tab-item :value="2" icon="place">Item 3</lbz-tab-item>
      <lbz-tab-item :value="3" icon="bluetooth">Item 4</lbz-tab-item>
      <lbz-tab-item :value="4" icon="keyboard_voice">Item 5</lbz-tab-item>
      <lbz-tab-item :value="5" icon="flight">Item 6</lbz-tab-item>
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">
      $ on-content: true, false (default)
    </h3>

    <lbz-tab v-model="vtab1" id="vtab1" type="scrollable" on-content>
      <lbz-tab-item v-for="(item, index) of 6" :key="index" :value="index"
        >Item {{ item }}</lbz-tab-item
      >
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">
      $ ripple: undefined (default), true, false
    </h3>

    <lbz-tab v-model="vtab1" id="vtab1" type="scrollable" ripple>
      <lbz-tab-item v-for="(item, index) of 6" :key="index" :value="index"
        >Ripple {{ item }}</lbz-tab-item
      >
    </lbz-tab>
    <lbz-tab v-model="vtab1" id="vtab1" type="scrollable" :ripple="false">
      <lbz-tab-item v-for="(item, index) of 6" :key="index" :value="index"
        >Non-ripple {{ item }}</lbz-tab-item
      >
    </lbz-tab>

    <h2 class="lbz-typography--h5"># Tab item</h2>

    <h3 class="lbz-typography--subtitle1">
      $ router-link: undefined (default), true, false
    </h3>
    <h3 class="lbz-typography--subtitle1">
      $ to (router-link): '' (default), 'x', { x: y }
    </h3>
    <h3 class="lbz-typography--subtitle1">
      $ tag: '' (default), 'button', 'a', 'x'
    </h3>
    <h3 class="lbz-typography--subtitle1">
      $ value: undefined (default), true, false, x, 'x'
    </h3>

    <lbz-tab :router-link-props="{ exact: true }">
      <lbz-tab-item router-link to="/components/tab" tag="a"
        >Router-link 1</lbz-tab-item
      >
      <lbz-tab-item router-link :to="{ path: '/404' }" tag="a"
        >Router-link 2</lbz-tab-item
      >
      <lbz-tab-item router-link :to="{ path: '/404' }" tag="a"
        >Router-link 3</lbz-tab-item
      >
    </lbz-tab>
    <lbz-tab v-model="vtab2" id="vtab2">
      <lbz-tab-item
        v-for="(item, index) of 3"
        :key="index"
        tag="a"
        href="#/components/tab"
        :value="index"
        >A {{ item }}</lbz-tab-item
      >
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">$ icon: '' (default), 'x'</h3>

    <lbz-tab v-model="vtab2" id="vtab2">
      <lbz-tab-item :value="0" icon="phone" />
      <lbz-tab-item :value="1" icon="favorite" />
      <lbz-tab-item :value="2" icon="place" />
    </lbz-tab>

    <h3 class="lbz-typography--subtitle1">
      $ ripple: undefined (default), true, false
    </h3>

    <lbz-tab v-model="vtab2" id="vtab2">
      <lbz-tab-item
        v-for="(item, index) of 3"
        :key="index"
        :value="index"
        ripple
        >Ripple {{ item }}</lbz-tab-item
      >
    </lbz-tab>
    <lbz-tab v-model="vtab2" id="vtab2">
      <lbz-tab-item
        v-for="(item, index) of 3"
        :key="index"
        :value="index"
        :ripple="false"
        >Non-ripple {{ item }}</lbz-tab-item
      >
    </lbz-tab>
  </article>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class ComponentsTab extends Vue {
    private vtab0 = 0;
    private vtab1 = 0;
    private vtab2 = 0;

    private fchange(val: boolean | number | string, e: MouseEvent): void {
      console.log(val, e);
    }
  }
</script>
