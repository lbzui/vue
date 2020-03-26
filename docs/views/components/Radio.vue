<template>
  <article class="lbzui-components-radio">
    <h2 class="lbz-typography--h5"># Radio</h2>

    <h3 class="lbz-typography--subtitle1">$ [required]v-model: true, false, x, 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ id: 'lbz-radio-x' (default), 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ [required]value: true, false, x, 'x'</h3>

    <lbz-radio
      v-model="vradio0"
      id="vradio0-true"
      :value="true"
      @change="fchange"
    >True</lbz-radio>
    <lbz-radio
      v-model="vradio0"
      id="vradio0-false"
      :value="false"
      @change="fchange"
    >False</lbz-radio>

    <h3 class="lbz-typography--subtitle1">$ color: 'primary', 'secondary' (default)</h3>

    <lbz-radio
      v-model="vradio1"
      :value="0"
      color="primary"
    >Primary</lbz-radio>
    <lbz-radio v-model="vradio1" :value="1">Secondary</lbz-radio>

    <h3 class="lbz-typography--subtitle1">$ on-background: 'primary', 'secondary', 'surface' (default), 'error', 'light', 'dark'</h3>

    <div class="lbzui-square lbzui-background--primary">
      <lbz-radio
        v-model="vradio2"
        value="primary"
        on-background="primary"
      />
    </div>
    <div class="lbzui-square lbzui-background--secondary">
      <lbz-radio
        v-model="vradio2"
        value="secondary"
        color="primary"
        on-background="secondary"
      />
    </div>
    <div class="lbzui-square">
      <lbz-radio
        v-model="vradio2"
        value="surface"
        color="primary"
      />
      <lbz-radio v-model="vradio2" value="surface"/>
    </div>
    <div class="lbzui-square lbzui-background--error">
      <lbz-radio
        v-model="vradio2"
        value="error"
        color="primary"
        on-background="error"
      />
      <lbz-radio
        v-model="vradio2"
        value="error"
        on-background="error"
      />
    </div>
    <div class="lbzui-square lbzui-background--light">
      <lbz-radio
        v-model="vradio2"
        value="light"
        color="primary"
        on-background="light"
      />
      <lbz-radio
        v-model="vradio2"
        value="light"
        on-background="light"
      />
    </div>
    <div class="lbzui-square lbzui-background--dark">
      <lbz-radio
        v-model="vradio2"
        value="dark"
        color="primary"
        on-background="dark"
      />
      <lbz-radio
        v-model="vradio2"
        value="dark"
        on-background="dark"
      />
    </div>

    <h3 class="lbz-typography--subtitle1">$ darkened: true, false (default)</h3>

    <div class="lbzui-square lbzui-background--primary lbzui-is-darkened">
      <lbz-radio
        v-model="vradio2"
        value="primary"
        on-background="primary"
        darkened
      />
    </div>
    <div class="lbzui-square lbzui-background--secondary lbzui-is-darkened">
      <lbz-radio
        v-model="vradio2"
        value="secondary"
        color="primary"
        on-background="secondary"
        darkened
      />
    </div>
    <div class="lbzui-square lbzui-background--error lbzui-is-darkened">
      <lbz-radio
        v-model="vradio2"
        value="error"
        color="primary"
        on-background="error"
        darkened
      />
      <lbz-radio
        v-model="vradio2"
        value="error"
        on-background="error"
        darkened
      />
    </div>
    <div class="lbzui-square lbzui-background--light lbzui-is-darkened">
      <lbz-radio
        v-model="vradio2"
        value="light"
        color="primary"
        on-background="light"
        darkened
      />
      <lbz-radio
        v-model="vradio2"
        value="light"
        on-background="light"
        darkened
      />
    </div>

    <h3 class="lbz-typography--subtitle1">$ disabled: true, false (default)</h3>

    <div class="lbzui-square lbzui-background--primary">
      <lbz-radio
        v-model="vradio3"
        value="checked"
        on-background="primary"
        disabled
      />
      <lbz-radio
        v-model="vradio3"
        value="unchecked"
        on-background="primary"
        disabled
      />
    </div>
    <div class="lbzui-square lbzui-background--secondary">
      <lbz-radio
        v-model="vradio3"
        value="checked"
        color="primary"
        on-background="secondary"
        disabled
      />
      <lbz-radio
        v-model="vradio3"
        value="unchecked"
        color="primary"
        on-background="secondary"
        disabled
      />
    </div>
    <div class="lbzui-square">
      <lbz-radio
        v-model="vradio3"
        value="checked"
        color="primary"
        disabled
      />
      <lbz-radio
        v-model="vradio3"
        value="checked"
        disabled
      />
      <lbz-radio
        v-model="vradio3"
        value="unchecked"
        disabled
      />
    </div>
    <div class="lbzui-square lbzui-background--error">
      <lbz-radio
        v-model="vradio3"
        value="checked"
        color="primary"
        on-background="error"
        disabled
      />
      <lbz-radio
        v-model="vradio3"
        value="checked"
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
    <div class="lbzui-square lbzui-background--light">
      <lbz-radio
        v-model="vradio3"
        value="checked"
        color="primary"
        on-background="light"
        disabled
      />
      <lbz-radio
        v-model="vradio3"
        value="checked"
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
    <div class="lbzui-square lbzui-background--dark">
      <lbz-radio
        v-model="vradio3"
        value="checked"
        color="primary"
        on-background="dark"
        disabled
      />
      <lbz-radio
        v-model="vradio3"
        value="checked"
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
