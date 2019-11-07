<template>
  <article class="lbzui-components-radio">
    <h2 class="lbz-typography--h5"># Radio</h2>

    <h3 class="lbz-typography--subtitle1">$ [required]v-model: true, false, x, 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ id: true, false, x, '' (default), 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ name: true, false, x, '' (default), 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ [required]value: true, false, x, 'x'</h3>
    <lbz-radio v-model="vradioOne" :id="true" :name="true" :value="true" @change="fchange">True</lbz-radio>
    <lbz-radio v-model="vradioOne" :id="false" :name="false" :value="false" @change="fchange">False</lbz-radio>

    <h3 class="lbz-typography--subtitle1">$ color: 'primary', 'secondary' (default)</h3>
    <lbz-radio v-model="vradioTwo" value="primary" color="primary">Primary</lbz-radio>
    <lbz-radio v-model="vradioTwo" value="primary">Secondary</lbz-radio>

    <h3 class="lbz-typography--subtitle1">$ ripple: true (default), false</h3>
    <lbz-radio v-model="vradioThree" :value="1">1</lbz-radio>
    <lbz-radio v-model="vradioThree" :value="0" :ripple="false">0</lbz-radio>

    <h3 class="lbz-typography--subtitle1">$ disabled: true, false (default)</h3>
    <lbz-radio v-model="vradioFour" value="selected" color="primary" disabled>Selected & Disabled</lbz-radio>
    <lbz-radio v-model="vradioFour" value="selected" disabled>Selected & Disabled</lbz-radio>
    <lbz-radio v-model="vradioFour" value="deselected" disabled>Deselected & Disabled</lbz-radio>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Radio extends Vue {
  private vradioOne: boolean = true;
  private vradioTwo: string = 'primary';
  private vradioThree: number = 1;
  private vradioFour: string = 'selected';

  private fchange(val: boolean | number | string, e: MouseEvent): void {
    alert(val);
    console.log(e);
  }
}
</script>
