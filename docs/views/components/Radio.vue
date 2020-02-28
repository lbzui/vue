<template>
  <article class="lbzui-components-radio">
    <h2 class="lbz-typography--h5"># Radio</h2>

    <h3 class="lbz-typography--subtitle1">$ [required]v-model: true, false, x, 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ id: '' (default), 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ name: '' (default), 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ [required]value: true, false, x, 'x'</h3>
    <lbz-radio
      v-model="vradio0"
      id="vradio0-true"
      name="vradio0"
      :value="true"
      @change="fchange"
    >True</lbz-radio>
    <lbz-radio
      v-model="vradio0"
      id="vradio0-false"
      name="vradio0"
      :value="false"
      @change="fchange"
    >False</lbz-radio>

    <h3 class="lbz-typography--subtitle1">$ color: 'primary', 'secondary' (default)</h3>
    <lbz-radio
      v-model="vradio1"
      :value="1"
      color="primary"
    >Primary</lbz-radio>
    <lbz-radio v-model="vradio1" :value="0">Secondary</lbz-radio>

    <h3 class="lbz-typography--subtitle1">$ disabled: true, false (default)</h3>
    <lbz-radio
      v-model="vradio2"
      value="selected"
      color="primary"
      disabled
    >Primary & Selected</lbz-radio>
    <lbz-radio
      v-model="vradio2"
      value="selected"
      disabled
    >Selected</lbz-radio>
    <lbz-radio
      v-model="vradio2"
      value="deselected"
      disabled
    >Deselected</lbz-radio>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ComponentsRadio extends Vue {
  private vradio0: boolean = true;
  private vradio1: number = 1;
  private vradio2: string = 'selected';

  private fchange(val: boolean | number | string, e: MouseEvent): void {
    alert(val);
    console.log(e);
  }
}
</script>
