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

    <h3 class="lbz-typography--subtitle1">$ color: 'primary' (default), 'secondary'</h3>

    <lbz-radio v-model="vradio1" :value="1">Primary</lbz-radio>
    <lbz-radio
      v-model="vradio1"
      :value="0"
      color="secondary"
    >Secondary</lbz-radio>

    <h3 class="lbz-typography--subtitle1">$ on-background: 'primary', 'secondary', 'surface' (default), 'error', 'light', 'dark'</h3>

    <div class="lbzui-square lbzui-radio--primary">
      <lbz-radio
        v-model="vradio2"
        value="primary"
        color="secondary"
        on-background="primary"
      />
    </div>
    <div class="lbzui-square lbzui-radio--secondary">
      <lbz-radio
        v-model="vradio2"
        value="secondary"
        on-background="secondary"
      />
    </div>
    <div class="lbzui-square">
      <lbz-radio v-model="vradio2" value="surface"/>
      <lbz-radio
        v-model="vradio2"
        value="surface"
        color="secondary"
      />
    </div>
    <div class="lbzui-square lbzui-radio--error">
      <lbz-radio
        v-model="vradio2"
        value="error"
        on-background="error"
      />
      <lbz-radio
        v-model="vradio2"
        value="error"
        color="secondary"
        on-background="error"
      />
    </div>
    <div class="lbzui-square lbzui-radio--light">
      <lbz-radio
        v-model="vradio2"
        value="light"
        on-background="light"
      />
      <lbz-radio
        v-model="vradio2"
        value="light"
        color="secondary"
        on-background="light"
      />
    </div>
    <div class="lbzui-square lbzui-radio--dark">
      <lbz-radio
        v-model="vradio2"
        value="dark"
        on-background="dark"
      />
      <lbz-radio
        v-model="vradio2"
        value="dark"
        color="secondary"
        on-background="dark"
      />
    </div>

    <h3 class="lbz-typography--subtitle1">$ disabled: true, false (default)</h3>

    <div class="lbzui-square lbzui-radio--primary">
      <lbz-radio
        v-model="vradio3"
        value="checked"
        color="secondary"
        on-background="primary"
        disabled
      />
      <lbz-radio
        v-model="vradio3"
        value="unchecked"
        color="secondary"
        on-background="primary"
        disabled
      />
    </div>
    <div class="lbzui-square lbzui-radio--secondary">
      <lbz-radio
        v-model="vradio3"
        value="checked"
        on-background="secondary"
        disabled
      />
      <lbz-radio
        v-model="vradio3"
        value="unchecked"
        on-background="secondary"
        disabled
      />
    </div>
    <div class="lbzui-square">
      <lbz-radio
        v-model="vradio3"
        value="checked"
        disabled
      />
      <lbz-radio
        v-model="vradio3"
        value="checked"
        color="secondary"
        disabled
      />
      <lbz-radio
        v-model="vradio3"
        value="unchecked"
        disabled
      />
    </div>
    <div class="lbzui-square lbzui-radio--error">
      <lbz-radio
        v-model="vradio3"
        value="checked"
        on-background="error"
        disabled
      />
      <lbz-radio
        v-model="vradio3"
        value="checked"
        color="secondary"
        on-background="error"
        disabled
      />
      <lbz-radio
        v-model="vradio3"
        value="unchecked"
        on-background="error"
        disabled
      />
    </div>
    <div class="lbzui-square lbzui-radio--light">
      <lbz-radio
        v-model="vradio3"
        value="checked"
        on-background="light"
        disabled
      />
      <lbz-radio
        v-model="vradio3"
        value="checked"
        color="secondary"
        on-background="light"
        disabled
      />
      <lbz-radio
        v-model="vradio3"
        value="unchecked"
        on-background="light"
        disabled
      />
    </div>
    <div class="lbzui-square lbzui-radio--dark">
      <lbz-radio
        v-model="vradio3"
        value="checked"
        on-background="dark"
        disabled
      />
      <lbz-radio
        v-model="vradio3"
        value="checked"
        color="secondary"
        on-background="dark"
        disabled
      />
      <lbz-radio
        v-model="vradio3"
        value="unchecked"
        on-background="dark"
        disabled
      />
    </div>

    <h3 class="lbz-typography--subtitle1">$ ripple: undefined (default), true, false</h3>

    <lbz-radio
      v-model="vradio4"
      :value="true"
      ripple
    >Ripple</lbz-radio>
    <lbz-radio
      v-model="vradio4"
      :value="false"
      :ripple="false"
    >Non-ripple</lbz-radio>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ComponentsRadio extends Vue {
  private vradio0: boolean = true;
  private vradio1: number = 0;
  private vradio2: string = 'primary';
  private vradio3: string = 'checked';
  private vradio4: boolean = true;

  private fchange(val: boolean | number | string, e: MouseEvent): void {
    console.log(val, e);
  }
}
</script>
