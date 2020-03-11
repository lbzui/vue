<template>
  <article class="lbzui-components-switch">
    <h2 class="lbz-typography--h5"># Switch</h2>

    <h3 class="lbz-typography--subtitle1">$ [required]v-model: true, false, x, 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ id: '' (default), 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ name: '' (default), 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ true-value: true (default), false, x, 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ false-value: true, false (default), x, 'x'</h3>
    <lbz-switch
      v-model="vswitch0"
      id="vswitch0"
      name="vswitch0"
      @change="fchange"
    />

    <h3 class="lbz-typography--subtitle1">$ color: 'primary', 'secondary' (default)</h3>
    <lbz-switch
      v-model="vswitch1"
      :true-value="1"
      :false-value="0"
      color="primary"
    >Primary</lbz-switch>
    <lbz-switch
      v-model="vswitch1"
      :true-value="1"
      :false-value="0"
    >Secondary</lbz-switch>

    <h3 class="lbz-typography--subtitle1">$ disabled: true, false (default)</h3>
    <lbz-switch
      v-model="vswitch2"
      true-value="checked"
      false-value="unchecked"
      color="primary"
      disabled
    >Primary & Checked</lbz-switch>
    <lbz-switch
      v-model="vswitch2"
      true-value="checked"
      false-value="unchecked"
      disabled
    >Checked</lbz-switch>
    <lbz-switch
      v-model="vswitch3"
      true-value="checked"
      false-value="unchecked"
      disabled
    >Unchecked</lbz-switch>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ComponentsSwitch extends Vue {
  private vswitch0: boolean = true;
  private vswitch1: number = 0;
  private vswitch2: string = 'checked';
  private vswitch3: string = 'unchecked';

  private fchange(val: boolean | number | string, e: MouseEvent): void {
    alert(val);
    console.log(e);
  }
}
</script>
