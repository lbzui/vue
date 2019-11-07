<template>
  <article class="lbzui-components-icon-button">
    <h2 class="lbz-typography--h5"># Icon button</h2>

    <h3 class="lbz-typography--subtitle1">$ toggle: true, false (default)</h3>
    <lbz-icon-button @click.stop="fclick">favorite_border</lbz-icon-button>
    <lbz-icon-button>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
    </lbz-icon-button>
    <lbz-icon-button>
      <img src="../../assets/img/logo.png">
    </lbz-icon-button>

    <h3 class="lbz-typography--subtitle1">$ router-link (!toggle): true, false (default)</h3>
    <h3 class="lbz-typography--subtitle1">$ tag: 'button' (default), 'a', 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ to (!toggle && router-link): '' (default), 'x', { x: x }</h3>
    <lbz-icon-button router-link tag="a" to="/components/icon-button">favorite_border</lbz-icon-button>
    <lbz-icon-button tag="a" href="#/components/icon">favorite_border</lbz-icon-button>

    <h3 class="lbz-typography--subtitle1">$ on-background: 'primary', 'secondary', 'background', 'surface' (default), 'error', 'light', 'dark'</h3>
    <lbz-icon-button on-background="primary">favorite_border</lbz-icon-button>
    <lbz-icon-button on-background="secondary">favorite_border</lbz-icon-button>
    <lbz-icon-button on-background="background">favorite_border</lbz-icon-button>
    <lbz-icon-button>favorite_border</lbz-icon-button>
    <lbz-icon-button on-background="error">favorite_border</lbz-icon-button>
    <lbz-icon-button on-background="light">favorite_border</lbz-icon-button>
    <lbz-icon-button on-background="dark">favorite_border</lbz-icon-button>

    <h3 class="lbz-typography--subtitle1">$ ripple: true (default), false</h3>
    <lbz-icon-button>favorite_border</lbz-icon-button>
    <lbz-icon-button :ripple="false">favorite_border</lbz-icon-button>

    <h3 class="lbz-typography--subtitle1">$ disabled: true, false (default)</h3>
    <lbz-icon-button on-background="primary" disabled>favorite_border</lbz-icon-button>
    <lbz-icon-button on-background="secondary" disabled>favorite_border</lbz-icon-button>
    <lbz-icon-button on-background="background" disabled>favorite_border</lbz-icon-button>
    <lbz-icon-button disabled>favorite_border</lbz-icon-button>
    <lbz-icon-button on-background="error" disabled>favorite_border</lbz-icon-button>
    <lbz-icon-button on-background="light" disabled>favorite_border</lbz-icon-button>
    <lbz-icon-button on-background="dark" disabled>favorite_border</lbz-icon-button>

    <h2 class="lbz-typography--h5"># Toggle button</h2>
    <h3 class="lbz-typography--subtitle1">$ active.sync (toggle): true, false (default)</h3>
    <h3 class="lbz-typography--subtitle1">$ toggle: true, false (default)</h3>
    <h3 class="lbz-typography--subtitle1">$ on-icon (toggle): '' (default), 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ off-icon (toggle): '' (default), 'x'</h3>
    <lbz-icon-button
      :active.sync="vactive"
      toggle
      on-icon="favorite"
      off-icon="favorite_border"
    />
    <lbz-icon-button :active.sync="vactive" toggle>
      <template #on-icon>favorite</template>
      <template #off-icon>favorite_border</template>
    </lbz-icon-button>
    <lbz-icon-button :active.sync="vactive" toggle>
      <template #on-icon>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"/></svg>
      </template>
      <template #off-icon>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
      </template>
    </lbz-icon-button>
    <lbz-icon-button :active.sync="vactive" toggle>
      <template #on-icon>
        <img src="../../assets/img/logo.png">
      </template>
      <template #off-icon>
        <img src="../../assets/img/logo.png">
      </template>
    </lbz-icon-button>

    <h3 class="lbz-typography--subtitle1">$ tag: 'button' (default), 'a', 'x'</h3>
    <lbz-icon-button
      :active.sync="vactive"
      toggle
      tag="a"
      on-icon="favorite"
      off-icon="favorite_border"
    />

    <h3 class="lbz-typography--subtitle1">$ on-background: 'primary', 'secondary', 'background', 'surface' (default), 'error', 'light', 'dark'</h3>
    <lbz-icon-button
      :active.sync="vactive"
      toggle
      on-background="primary"
      on-icon="favorite"
      off-icon="favorite_border"
    />
    <lbz-icon-button
      :active.sync="vactive"
      toggle
      on-background="secondary"
      on-icon="favorite"
      off-icon="favorite_border"
    />
    <lbz-icon-button
      :active.sync="vactive"
      toggle
      on-background="background"
      on-icon="favorite"
      off-icon="favorite_border"
    />
    <lbz-icon-button
      :active.sync="vactive"
      toggle
      on-icon="favorite"
      off-icon="favorite_border"
    />
    <lbz-icon-button
      :active.sync="vactive"
      toggle
      on-background="error"
      on-icon="favorite"
      off-icon="favorite_border"
    />
    <lbz-icon-button
      :active.sync="vactive"
      toggle
      on-background="light"
      on-icon="favorite"
      off-icon="favorite_border"
    />
    <lbz-icon-button
      :active.sync="vactive"
      toggle
      on-background="dark"
      on-icon="favorite"
      off-icon="favorite_border"
    />

    <h3 class="lbz-typography--subtitle1">$ ripple: true (default), false</h3>
    <lbz-icon-button
      :active.sync="vactive"
      toggle
      on-icon="favorite"
      off-icon="favorite_border"
    />
    <lbz-icon-button
      :active.sync="vactive"
      toggle
      :ripple="false"
      on-icon="favorite"
      off-icon="favorite_border"
    />

    <h3 class="lbz-typography--subtitle1">$ disabled: true, false (default)</h3>
    <lbz-icon-button
      :active.sync="vactive"
      toggle
      on-background="primary"
      disabled
      on-icon="favorite"
      off-icon="favorite_border"
    />
    <lbz-icon-button
      :active.sync="vactive"
      toggle
      on-background="secondary"
      disabled
      on-icon="favorite"
      off-icon="favorite_border"
    />
    <lbz-icon-button
      :active.sync="vactive"
      toggle
      on-background="background"
      disabled
      on-icon="favorite"
      off-icon="favorite_border"
    />
    <lbz-icon-button
      :active.sync="vactive"
      toggle
      disabled
      on-icon="favorite"
      off-icon="favorite_border"
    />
    <lbz-icon-button
      :active.sync="vactive"
      toggle
      on-background="error"
      disabled
      on-icon="favorite"
      off-icon="favorite_border"
    />
    <lbz-icon-button
      :active.sync="vactive"
      toggle
      on-background="light"
      disabled
      on-icon="favorite"
      off-icon="favorite_border"
    />
    <lbz-icon-button
      :active.sync="vactive"
      toggle
      on-background="dark"
      disabled
      on-icon="favorite"
      off-icon="favorite_border"
    />
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class IconButton extends Vue {
  private vactive: boolean = false;

  private fclick(e: MouseEvent): void {
    alert(e);
  }
}
</script>
