<template>
  <article class="lbzui-components-checkbox">
    <h2 class="lbz-typography--h5"># Checkbox</h2>

    <h3 class="lbz-typography--subtitle1">
      $ [required]v-model: true, false, x, 'x', [true, false, x, 'x']
    </h3>
    <h3 class="lbz-typography--subtitle1">
      $ id: 'lbz-checkbox-x' (default), 'x'
    </h3>
    <h3 class="lbz-typography--subtitle1">
      $ true-value (!group): true (default), false, x, 'x'
    </h3>
    <h3 class="lbz-typography--subtitle1">
      $ false-value (!group): true, false (default), x, 'x'
    </h3>

    <lbz-checkbox v-model="vcheckbox0" id="vcheckbox0" @change="fchange" />

    <h3 class="lbz-typography--subtitle1">
      $ value (group): true, false, x, 'x'
    </h3>
    <h3 class="lbz-typography--subtitle1">
      $ indeterminate (!group): true, false (default)
    </h3>

    <lbz-checkbox
      v-model="vcheckAll"
      :indeterminate="vindeterminate"
      @change="fcheckAll"
      >Check all?</lbz-checkbox
    >
    <br />
    <lbz-checkbox
      v-for="(item, index) of LIST"
      :key="index"
      v-model="vcheckbox1"
      :value="item"
      @change="fgroupChange"
      >{{ item }}</lbz-checkbox
    >

    <h3 class="lbz-typography--subtitle1">
      $ color: 'primary', 'secondary' (default)
    </h3>
    <h3 class="lbz-typography--subtitle1">
      $ on-background: 'primary', 'secondary', 'surface' (default), 'error',
      'light', 'dark'
    </h3>

    <div class="lbzui-mini-rectangle lbzui-background--primary">
      <lbz-checkbox
        v-model="vcheckbox2"
        value="primary"
        on-background="primary"
      />
    </div>
    <div class="lbzui-mini-rectangle lbzui-background--secondary">
      <lbz-checkbox
        v-model="vcheckbox2"
        value="secondary"
        color="primary"
        on-background="secondary"
      />
    </div>
    <div class="lbzui-mini-rectangle">
      <lbz-checkbox v-model="vcheckbox2" value="surface" color="primary" />
      <lbz-checkbox v-model="vcheckbox2" value="surface" />
    </div>
    <div class="lbzui-mini-rectangle lbzui-background--error">
      <lbz-checkbox
        v-model="vcheckbox2"
        value="error"
        color="primary"
        on-background="error"
      />
      <lbz-checkbox v-model="vcheckbox2" value="error" on-background="error" />
    </div>
    <div class="lbzui-mini-rectangle lbzui-background--light">
      <lbz-checkbox
        v-model="vcheckbox2"
        value="light"
        color="primary"
        on-background="light"
      />
      <lbz-checkbox v-model="vcheckbox2" value="light" on-background="light" />
    </div>
    <div class="lbzui-mini-rectangle lbzui-background--dark">
      <lbz-checkbox
        v-model="vcheckbox2"
        value="dark"
        color="primary"
        on-background="dark"
      />
      <lbz-checkbox v-model="vcheckbox2" value="dark" on-background="dark" />
    </div>

    <h3 class="lbz-typography--subtitle1">$ darkened: true, false (default)</h3>

    <div
      class="lbzui-mini-rectangle lbzui-background--primary lbzui-is-darkened"
    >
      <lbz-checkbox
        v-model="vcheckbox2"
        value="primary"
        on-background="primary"
        darkened
      />
    </div>
    <div
      class="lbzui-mini-rectangle lbzui-background--secondary lbzui-is-darkened"
    >
      <lbz-checkbox
        v-model="vcheckbox2"
        value="secondary"
        color="primary"
        on-background="secondary"
        darkened
      />
    </div>
    <div class="lbzui-mini-rectangle lbzui-background--error lbzui-is-darkened">
      <lbz-checkbox
        v-model="vcheckbox2"
        value="error"
        color="primary"
        on-background="error"
        darkened
      />
      <lbz-checkbox
        v-model="vcheckbox2"
        value="error"
        on-background="error"
        darkened
      />
    </div>
    <div class="lbzui-mini-rectangle lbzui-background--light lbzui-is-darkened">
      <lbz-checkbox
        v-model="vcheckbox2"
        value="light"
        color="primary"
        on-background="light"
        darkened
      />
      <lbz-checkbox
        v-model="vcheckbox2"
        value="light"
        on-background="light"
        darkened
      />
    </div>

    <h3 class="lbz-typography--subtitle1">$ disabled: true, false (default)</h3>

    <div class="lbzui-mini-rectangle lbzui-background--primary">
      <lbz-checkbox
        v-model="vcheckbox3"
        value="checked"
        on-background="primary"
        disabled
      />
      <lbz-checkbox
        v-model="vcheckbox3"
        value="unchecked"
        on-background="primary"
        disabled
      />
    </div>
    <div class="lbzui-mini-rectangle lbzui-background--secondary">
      <lbz-checkbox
        v-model="vcheckbox3"
        value="checked"
        color="primary"
        on-background="secondary"
        disabled
      />
      <lbz-checkbox
        v-model="vcheckbox3"
        value="unchecked"
        color="primary"
        on-background="secondary"
        disabled
      />
    </div>
    <div class="lbzui-mini-rectangle">
      <lbz-checkbox
        v-model="vcheckbox3"
        value="checked"
        color="primary"
        disabled
      />
      <lbz-checkbox v-model="vcheckbox3" value="checked" disabled />
      <lbz-checkbox v-model="vcheckbox3" value="unchecked" disabled />
    </div>
    <div class="lbzui-mini-rectangle lbzui-background--error">
      <lbz-checkbox
        v-model="vcheckbox3"
        value="checked"
        color="primary"
        on-background="error"
        disabled
      />
      <lbz-checkbox
        v-model="vcheckbox3"
        value="checked"
        on-background="error"
        disabled
      />
      <lbz-checkbox
        v-model="vcheckbox3"
        value="unchecked"
        on-background="error"
        disabled
      />
    </div>
    <div class="lbzui-mini-rectangle lbzui-background--light">
      <lbz-checkbox
        v-model="vcheckbox3"
        value="checked"
        color="primary"
        on-background="light"
        disabled
      />
      <lbz-checkbox
        v-model="vcheckbox3"
        value="checked"
        on-background="light"
        disabled
      />
      <lbz-checkbox
        v-model="vcheckbox3"
        value="unchecked"
        on-background="light"
        disabled
      />
    </div>
    <div class="lbzui-mini-rectangle lbzui-background--dark">
      <lbz-checkbox
        v-model="vcheckbox3"
        value="checked"
        color="primary"
        on-background="dark"
        disabled
      />
      <lbz-checkbox
        v-model="vcheckbox3"
        value="checked"
        on-background="dark"
        disabled
      />
      <lbz-checkbox
        v-model="vcheckbox3"
        value="unchecked"
        on-background="dark"
        disabled
      />
    </div>

    <h3 class="lbz-typography--subtitle1">
      $ ripple: undefined (default), true, false
    </h3>

    <lbz-checkbox v-model="vcheckbox4" :value="0" ripple>Ripple</lbz-checkbox>
    <lbz-checkbox v-model="vcheckbox4" :value="1" :ripple="false"
      >Non-ripple</lbz-checkbox
    >
  </article>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class ComponentsCheckbox extends Vue {
    private LIST: number[] = [1, 2, 3];

    private vcheckbox0 = true;
    private vcheckAll = false;
    private vindeterminate = true;
    private vcheckbox1: number[] = [1];
    private vcheckbox2: string[] = [];
    private vcheckbox3: string[] = ['checked'];
    private vcheckbox4: number[] = [];

    private fchange(val: boolean | number | string, e: MouseEvent): void {
      console.log(val, e);
    }

    private fcheckAll(val: boolean | number | string, e: MouseEvent): void {
      this.vindeterminate = false;
      this.vcheckbox1 = val ? JSON.parse(JSON.stringify(this.LIST)) : [];
      console.log(e);
    }

    private fgroupChange(val: any[], e: MouseEvent): void {
      const len: number = val.length;

      this.vcheckAll = len > 0 && len === this.LIST.length;
      this.vindeterminate = len > 0 && len < this.LIST.length;
      console.log(e);
    }
  }
</script>
