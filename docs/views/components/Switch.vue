<template>
  <article class="lbzui-components-switch">
    <h2 class="lbz-typography--h5"># Switch</h2>

    <h3 class="lbz-typography--subtitle1">$ [required]v-model: true, false, x, 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ id: 'lbz-switch-x' (default), 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ true-value: true (default), false, x, 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ false-value: true, false (default), x, 'x'</h3>

    <lbz-switch
      v-model="vswitch0"
      id="vswitch0"
      @change="fchange"
    />

    <h3 class="lbz-typography--subtitle1">$ color: 'primary', 'secondary' (default)</h3>
    <h3 class="lbz-typography--subtitle1">$ on-background: 'primary', 'secondary', 'surface' (default), 'error', 'light', 'dark'</h3>

    <div class="lbzui-mini-rectangle lbzui-background--primary">
      <lbz-switch v-model="vswitch1" on-background="primary"/>
    </div>
    <div class="lbzui-mini-rectangle lbzui-background--secondary">
      <lbz-switch
        v-model="vswitch1"
        color="primary"
        on-background="secondary"
      />
    </div>
    <div class="lbzui-mini-rectangle">
      <lbz-switch v-model="vswitch1" color="primary"/>
      <lbz-switch v-model="vswitch1"/>
    </div>
    <div class="lbzui-mini-rectangle lbzui-background--error">
      <lbz-switch
        v-model="vswitch1"
        color="primary"
        on-background="error"
      />
      <lbz-switch v-model="vswitch1" on-background="error"/>
    </div>
    <div class="lbzui-mini-rectangle lbzui-background--light">
      <lbz-switch
        v-model="vswitch1"
        color="primary"
        on-background="light"
      />
      <lbz-switch v-model="vswitch1" on-background="light"/>
    </div>
    <div class="lbzui-mini-rectangle lbzui-background--dark">
      <lbz-switch
        v-model="vswitch1"
        color="primary"
        on-background="dark"
      />
      <lbz-switch v-model="vswitch1" on-background="dark"/>
    </div>

    <h3 class="lbz-typography--subtitle1">$ darkened: true, false (default)</h3>

    <div class="lbzui-mini-rectangle lbzui-background--primary lbzui-is-darkened">
      <lbz-switch
        v-model="vswitch1"
        on-background="primary"
        darkened
      />
    </div>
    <div class="lbzui-mini-rectangle lbzui-background--secondary lbzui-is-darkened">
      <lbz-switch
        v-model="vswitch1"
        color="primary"
        on-background="secondary"
        darkened
      />
    </div>
    <div class="lbzui-mini-rectangle lbzui-background--error lbzui-is-darkened">
      <lbz-switch
        v-model="vswitch1"
        color="primary"
        on-background="error"
        darkened
      />
      <lbz-switch
        v-model="vswitch1"
        on-background="error"
        darkened
      />
    </div>
    <div class="lbzui-mini-rectangle lbzui-background--light lbzui-is-darkened">
      <lbz-switch
        v-model="vswitch1"
        color="primary"
        on-background="light"
        darkened
      />
      <lbz-switch
        v-model="vswitch1"
        on-background="light"
        darkened
      />
    </div>

    <h3 class="lbz-typography--subtitle1">$ disabled: true, false (default)</h3>

    <div class="lbzui-mini-rectangle lbzui-background--primary">
      <lbz-switch
        v-model="vswitch2"
        true-value="checked"
        false-value="unchecked"
        on-background="primary"
        disabled
      />
      <lbz-switch
        v-model="vswitch2"
        true-value="unchecked"
        false-value="checked"
        on-background="primary"
        disabled
      />
    </div>
    <div class="lbzui-mini-rectangle lbzui-background--secondary">
      <lbz-switch
        v-model="vswitch2"
        true-value="checked"
        false-value="unchecked"
        color="primary"
        on-background="secondary"
        disabled
      />
      <lbz-switch
        v-model="vswitch2"
        true-value="unchecked"
        false-value="checked"
        color="primary"
        on-background="secondary"
        disabled
      />
    </div>
    <div class="lbzui-mini-rectangle">
      <lbz-switch
        v-model="vswitch2"
        true-value="checked"
        false-value="unchecked"
        color="primary"
        disabled
      />
      <lbz-switch
        v-model="vswitch2"
        true-value="checked"
        false-value="unchecked"
        disabled
      />
      <lbz-switch
        v-model="vswitch2"
        true-value="unchecked"
        false-value="checked"
        disabled
      />
    </div>
    <div class="lbzui-mini-rectangle lbzui-background--error">
      <lbz-switch
        v-model="vswitch2"
        true-value="checked"
        false-value="unchecked"
        color="primary"
        on-background="error"
        disabled
      />
      <lbz-switch
        v-model="vswitch2"
        true-value="checked"
        false-value="unchecked"
        on-background="error"
        disabled
      />
      <lbz-switch
        v-model="vswitch2"
        true-value="unchecked"
        false-value="checked"
        on-background="error"
        disabled
      />
    </div>
    <div class="lbzui-mini-rectangle lbzui-background--light">
      <lbz-switch
        v-model="vswitch2"
        true-value="checked"
        false-value="unchecked"
        color="primary"
        on-background="light"
        disabled
      />
      <lbz-switch
        v-model="vswitch2"
        true-value="checked"
        false-value="unchecked"
        on-background="light"
        disabled
      />
      <lbz-switch
        v-model="vswitch2"
        true-value="unchecked"
        false-value="checked"
        on-background="light"
        disabled
      />
    </div>
    <div class="lbzui-mini-rectangle lbzui-background--dark">
      <lbz-switch
        v-model="vswitch2"
        true-value="checked"
        false-value="unchecked"
        color="primary"
        on-background="dark"
        disabled
      />
      <lbz-switch
        v-model="vswitch2"
        true-value="checked"
        false-value="unchecked"
        on-background="dark"
        disabled
      />
      <lbz-switch
        v-model="vswitch2"
        true-value="unchecked"
        false-value="checked"
        on-background="dark"
        disabled
      />
    </div>

    <h3 class="lbz-typography--subtitle1">$ ripple: undefined (default), true, false</h3>

    <lbz-switch
      v-model="vswitch3"
      :true-value="1"
      :false-value="0"
      ripple
    >Ripple</lbz-switch>
    <lbz-switch v-model="vswitch4" :ripple="false">Non-ripple</lbz-switch>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ComponentsSwitch extends Vue {
  private vswitch0: boolean = true;
  private vswitch1: boolean = false;
  private vswitch2: string = 'checked';
  private vswitch3: number = 0;
  private vswitch4: boolean = false;

  private fchange(val: boolean | number | string, e: MouseEvent): void {
    console.log(val, e);
  }
}
</script>
