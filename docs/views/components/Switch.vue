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

    <h3 class="lbz-typography--subtitle1">$ color: 'primary' (default), 'secondary'</h3>

    <lbz-switch
      v-model="vswitch1"
      :true-value="1"
      :false-value="0"
    >Primary</lbz-switch>
    <lbz-switch
      v-model="vswitch1"
      :true-value="1"
      :false-value="0"
      color="secondary"
    >Secondary</lbz-switch>

    <h3 class="lbz-typography--subtitle1">$ on-background: 'primary', 'secondary', 'surface' (default), 'error', 'light', 'dark'</h3>

    <div class="lbzui-square lbzui-switch--primary">
      <lbz-switch
        v-model="vswitch2"
        color="secondary"
        on-background="primary"
      />
    </div>
    <div class="lbzui-square lbzui-switch--secondary">
      <lbz-switch v-model="vswitch2" on-background="secondary"/>
    </div>
    <div class="lbzui-square">
      <lbz-switch v-model="vswitch2"/>
      <lbz-switch v-model="vswitch2" color="secondary"/>
    </div>
    <div class="lbzui-square lbzui-switch--error">
      <lbz-switch v-model="vswitch2" on-background="error"/>
      <lbz-switch
        v-model="vswitch2"
        color="secondary"
        on-background="error"
      />
    </div>
    <div class="lbzui-square lbzui-switch--light">
      <lbz-switch v-model="vswitch2" on-background="light"/>
      <lbz-switch
        v-model="vswitch2"
        color="secondary"
        on-background="light"
      />
    </div>
    <div class="lbzui-square lbzui-switch--dark">
      <lbz-switch v-model="vswitch2" on-background="dark"/>
      <lbz-switch
        v-model="vswitch2"
        color="secondary"
        on-background="dark"
      />
    </div>

    <h3 class="lbz-typography--subtitle1">$ disabled: true, false (default)</h3>

    <div class="lbzui-square lbzui-switch--primary">
      <lbz-switch
        v-model="vswitch3"
        true-value="checked"
        false-value="unchecked"
        color="secondary"
        on-background="primary"
        disabled
      />
      <lbz-switch
        v-model="vswitch3"
        true-value="unchecked"
        false-value="checked"
        color="secondary"
        on-background="primary"
        disabled
      />
    </div>
    <div class="lbzui-square lbzui-switch--secondary">
      <lbz-switch
        v-model="vswitch3"
        true-value="checked"
        false-value="unchecked"
        on-background="secondary"
        disabled
      />
      <lbz-switch
        v-model="vswitch3"
        true-value="unchecked"
        false-value="checked"
        on-background="secondary"
        disabled
      />
    </div>
    <div class="lbzui-square">
      <lbz-switch
        v-model="vswitch3"
        true-value="checked"
        false-value="unchecked"
        disabled
      />
      <lbz-switch
        v-model="vswitch3"
        true-value="checked"
        false-value="unchecked"
        color="secondary"
        disabled
      />
      <lbz-switch
        v-model="vswitch3"
        true-value="unchecked"
        false-value="checked"
        disabled
      />
    </div>
    <div class="lbzui-square lbzui-switch--error">
      <lbz-switch
        v-model="vswitch3"
        true-value="checked"
        false-value="unchecked"
        on-background="error"
        disabled
      />
      <lbz-switch
        v-model="vswitch3"
        true-value="checked"
        false-value="unchecked"
        color="secondary"
        on-background="error"
        disabled
      />
      <lbz-switch
        v-model="vswitch3"
        true-value="unchecked"
        false-value="checked"
        on-background="error"
        disabled
      />
    </div>
    <div class="lbzui-square lbzui-switch--light">
      <lbz-switch
        v-model="vswitch3"
        true-value="checked"
        false-value="unchecked"
        on-background="light"
        disabled
      />
      <lbz-switch
        v-model="vswitch3"
        true-value="checked"
        false-value="unchecked"
        color="secondary"
        on-background="light"
        disabled
      />
      <lbz-switch
        v-model="vswitch3"
        true-value="unchecked"
        false-value="checked"
        on-background="light"
        disabled
      />
    </div>
    <div class="lbzui-square lbzui-switch--dark">
      <lbz-switch
        v-model="vswitch3"
        true-value="checked"
        false-value="unchecked"
        on-background="dark"
        disabled
      />
      <lbz-switch
        v-model="vswitch3"
        true-value="checked"
        false-value="unchecked"
        color="secondary"
        on-background="dark"
        disabled
      />
      <lbz-switch
        v-model="vswitch3"
        true-value="unchecked"
        false-value="checked"
        on-background="dark"
        disabled
      />
    </div>

    <h3 class="lbz-typography--subtitle1">$ ripple: undefined (default), true, false</h3>

    <lbz-switch v-model="vswitch4" ripple>Ripple</lbz-switch>
    <lbz-switch v-model="vswitch4" :ripple="false">Non-ripple</lbz-switch>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ComponentsSwitch extends Vue {
  private vswitch0: boolean = true;
  private vswitch1: number = 0;
  private vswitch2: boolean = false;
  private vswitch3: string = 'checked';
  private vswitch4: boolean = false;

  private fchange(val: boolean | number | string, e: MouseEvent): void {
    console.log(val, e);
  }
}
</script>
