<template>
  <article class="lbzui-components-radio">
    <h2 class="lbz-typography--h5"># Radio</h2>

    <h3 class="lbz-typography--subtitle1">$ [required]v-model: true, false, x, 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ id: true, false, x, '' (default), 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ name: true, false, x, '' (default), 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ [required]value: true, false, x, 'x'</h3>
    <lbz-radio
      v-model="vradio0"
      :id="true"
      :name="true"
      :value="true"
      @change="fchange"
    >True</lbz-radio>
    <lbz-radio
      v-model="vradio0"
      :id="false"
      :name="false"
      :value="false"
      @change="fchange"
    >False</lbz-radio>

    <h3 class="lbz-typography--subtitle1">$ color: 'primary', 'secondary' (default)</h3>
    <lbz-radio
      v-model="vradio1"
      value="primary"
      color="primary"
    >Primary</lbz-radio>
    <lbz-radio v-model="vradio1" value="primary">Secondary</lbz-radio>

    <h3 class="lbz-typography--subtitle1">$ disabled: true, false (default)</h3>
    <lbz-radio
      v-model="vradio3"
      value="selected"
      color="primary"
      disabled
    >Selected & Disabled</lbz-radio>
    <lbz-radio
      v-model="vradio3"
      value="selected"
      disabled
    >Selected & Disabled</lbz-radio>
    <lbz-radio
      v-model="vradio3"
      value="deselected"
      disabled
    >Deselected & Disabled</lbz-radio>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ComponentsRadio extends Vue {
  private vradio0: boolean = true;
  private vradio1: string = 'primary';
  private vradio2: number = 1;
  private vradio3: string = 'selected';

  private fchange(val: boolean | number | string, e: MouseEvent): void {
    alert(val);
    console.log(e);
  }
}
</script>
