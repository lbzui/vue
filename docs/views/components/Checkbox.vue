<template>
  <article class="lbzui-components-checkbox">
    <h2 class="lbz-typography--h5"># Checkbox</h2>

    <h3 class="lbz-typography--subtitle1">$ [required]v-model: true, false, x, 'x', [true, false, x, 'x']</h3>
    <h3 class="lbz-typography--subtitle1">$ id: '' (default), 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ true-value (!group): true (default), false, x, 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ false-value (!group): true, false (default), x, 'x'</h3>

    <lbz-checkbox
      v-model="vcheckbox0"
      id="vcheckbox0"
      @change="fchange"
    />

    <h3 class="lbz-typography--subtitle1">$ value (group): true, false, x, 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ indeterminate (!group): true, false (default)</h3>

    <lbz-checkbox
      v-model="vcheckAll"
      :indeterminate="vindeterminate"
      @change="fcheckAll"
    />
    <br>
    <lbz-checkbox
      v-for="(item, index) of LIST"
      :key="index"
      v-model="vcheckbox1"
      :value="item"
      @change="fgroupChange"
    >{{ item }}</lbz-checkbox>

    <h3 class="lbz-typography--subtitle1">$ color: 'primary' (default), 'secondary'</h3>

    <lbz-checkbox v-model="vcheckbox2">Primary</lbz-checkbox>
    <lbz-checkbox v-model="vcheckbox2" color="secondary">Secondary</lbz-checkbox>

    <h3 class="lbz-typography--subtitle1">$ on-background: 'primary', 'secondary', 'surface' (default), 'error', 'light', 'dark'</h3>

    <div class="lbzui-square lbzui-background--primary">
      <lbz-checkbox
        v-model="vcheckbox3"
        value="primary"
        color="secondary"
        on-background="primary"
      />
    </div>
    <div class="lbzui-square lbzui-background--secondary">
      <lbz-checkbox
        v-model="vcheckbox3"
        value="secondary"
        on-background="secondary"
      />
    </div>
    <div class="lbzui-square">
      <lbz-checkbox v-model="vcheckbox3" value="surface"/>
      <lbz-checkbox
        v-model="vcheckbox3"
        value="surface"
        color="secondary"
      />
    </div>
    <div class="lbzui-square lbzui-background--error">
      <lbz-checkbox
        v-model="vcheckbox3"
        value="error"
        on-background="error"
      />
      <lbz-checkbox
        v-model="vcheckbox3"
        value="error"
        color="secondary"
        on-background="error"
      />
    </div>
    <div class="lbzui-square lbzui-background--light">
      <lbz-checkbox
        v-model="vcheckbox3"
        value="light"
        on-background="light"
      />
      <lbz-checkbox
        v-model="vcheckbox3"
        value="light"
        color="secondary"
        on-background="light"
      />
    </div>
    <div class="lbzui-square lbzui-background--dark">
      <lbz-checkbox
        v-model="vcheckbox3"
        value="dark"
        on-background="dark"
      />
      <lbz-checkbox
        v-model="vcheckbox3"
        value="dark"
        color="secondary"
        on-background="dark"
      />
    </div>

    <h3 class="lbz-typography--subtitle1">$ darkened: true, false (default)</h3>

    <div class="lbzui-square lbzui-background--primary lbzui-is-darkened">
      <lbz-checkbox
        v-model="vcheckbox3"
        value="primary"
        color="secondary"
        on-background="primary"
        darkened
      />
    </div>
    <div class="lbzui-square lbzui-background--secondary lbzui-is-darkened">
      <lbz-checkbox
        v-model="vcheckbox3"
        value="secondary"
        on-background="secondary"
        darkened
      />
    </div>
    <div class="lbzui-square lbzui-background--error lbzui-is-darkened">
      <lbz-checkbox
        v-model="vcheckbox3"
        value="error"
        on-background="error"
        darkened
      />
      <lbz-checkbox
        v-model="vcheckbox3"
        value="error"
        color="secondary"
        on-background="error"
        darkened
      />
    </div>
    <div class="lbzui-square lbzui-background--light lbzui-is-darkened">
      <lbz-checkbox
        v-model="vcheckbox3"
        value="light"
        on-background="light"
        darkened
      />
      <lbz-checkbox
        v-model="vcheckbox3"
        value="light"
        color="secondary"
        on-background="light"
        darkened
      />
    </div>

    <h3 class="lbz-typography--subtitle1">$ disabled: true, false (default)</h3>

    <div class="lbzui-square lbzui-background--primary">
      <lbz-checkbox
        v-model="vcheckbox4"
        value="checked"
        color="secondary"
        on-background="primary"
        disabled
      />
      <lbz-checkbox
        v-model="vcheckbox4"
        value="unchecked"
        color="secondary"
        on-background="primary"
        disabled
      />
    </div>
    <div class="lbzui-square lbzui-background--secondary">
      <lbz-checkbox
        v-model="vcheckbox4"
        value="checked"
        on-background="secondary"
        disabled
      />
      <lbz-checkbox
        v-model="vcheckbox4"
        value="unchecked"
        on-background="secondary"
        disabled
      />
    </div>
    <div class="lbzui-square">
      <lbz-checkbox
        v-model="vcheckbox4"
        value="checked"
        disabled
      />
      <lbz-checkbox
        v-model="vcheckbox4"
        value="checked"
        color="secondary"
        disabled
      />
      <lbz-checkbox
        v-model="vcheckbox4"
        value="unchecked"
        disabled
      />
    </div>
    <div class="lbzui-square lbzui-background--error">
      <lbz-checkbox
        v-model="vcheckbox4"
        value="checked"
        on-background="error"
        disabled
      />
      <lbz-checkbox
        v-model="vcheckbox4"
        value="checked"
        color="secondary"
        on-background="error"
        disabled
      />
      <lbz-checkbox
        v-model="vcheckbox4"
        value="unchecked"
        on-background="error"
        disabled
      />
    </div>
    <div class="lbzui-square lbzui-background--light">
      <lbz-checkbox
        v-model="vcheckbox4"
        value="checked"
        on-background="light"
        disabled
      />
      <lbz-checkbox
        v-model="vcheckbox4"
        value="checked"
        color="secondary"
        on-background="light"
        disabled
      />
      <lbz-checkbox
        v-model="vcheckbox4"
        value="unchecked"
        on-background="light"
        disabled
      />
    </div>
    <div class="lbzui-square lbzui-background--dark">
      <lbz-checkbox
        v-model="vcheckbox4"
        value="checked"
        on-background="dark"
        disabled
      />
      <lbz-checkbox
        v-model="vcheckbox4"
        value="checked"
        color="secondary"
        on-background="dark"
        disabled
      />
      <lbz-checkbox
        v-model="vcheckbox4"
        value="unchecked"
        on-background="dark"
        disabled
      />
    </div>

    <h3 class="lbz-typography--subtitle1">$ ripple: undefined (default), true, false</h3>

    <lbz-checkbox
      v-model="vcheckbox5"
      :value="true"
      ripple
    >Ripple</lbz-checkbox>
    <lbz-checkbox
      v-model="vcheckbox5"
      :value="false"
      :ripple="false"
    >Non-ripple</lbz-checkbox>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ComponentsCheckbox extends Vue {
  private LIST: number[] = [
    1,
    2,
    3,
  ];

  private vcheckbox0: boolean = true;
  private vcheckAll: boolean = false;
  private vindeterminate: boolean = true;
  private vcheckbox1: number[] = [1];
  private vcheckbox2: boolean = false;
  private vcheckbox3: string[] = [];
  private vcheckbox4: string[] = ['checked'];
  private vcheckbox5: boolean[] = [];

  private fchange(val: boolean | number | string, e: MouseEvent): void {
    console.log(val, e);
  }

  private fcheckAll(val: boolean | number | string, e: MouseEvent): void {
    this.vindeterminate = false;
    this.vcheckbox1 = val ? JSON.parse(JSON.stringify(this.LIST)) : [];
  }

  private fgroupChange(val: any[], e: MouseEvent): void {
    const len: number = val.length;

    this.vcheckAll = len > 0 && len === this.LIST.length;
    this.vindeterminate = len > 0 && len < this.LIST.length;
  }
}
</script>
